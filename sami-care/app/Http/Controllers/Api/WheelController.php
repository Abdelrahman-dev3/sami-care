<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LoyaltyPoint;
use App\Models\LoyaltyPointTransaction;
use App\Models\Setting;
use App\Models\User;
use App\Models\Wheel;
use App\Services\WheelCooldownService;
use App\Services\TaqnyatSmsService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Modules\Wallet\Models\Wallet;
use Modules\Wallet\Models\WalletHistory;

class WheelController extends Controller
{
    public function __construct(private readonly WheelCooldownService $wheelCooldownService)
    {
    }

    public function prizes(): JsonResponse
    {
        $wheelEnabled = $this->isWheelEnabled();
        $prizes = Wheel::query()
            ->where('reward_value', '>', 0)
            ->orderBy('id')
            ->get()
            ->map(fn (Wheel $wheel) => [
                'id' => $wheel->id,
                'type' => $wheel->type,
                'reward_value' => (float) $wheel->reward_value,
                'label' => $this->formatRewardLabel($wheel->type, (float) $wheel->reward_value),
            ])
            ->values();

        return response()->json([
            'status' => true,
            'data' => [
                'enabled' => $wheelEnabled,
                'display_interval_days' => max((int) Setting::get('wheel_display_interval_days', 1), 1),
                'prizes' => $prizes,
            ],
        ]);
    }

    public function spin(Request $request): JsonResponse
    {
        if (! $this->isWheelEnabled()) {
            return response()->json([
                'status' => false,
                'message' => __('messagess.wheel_not_available_now'),
            ], 403);
        }

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:30',
        ]);

        $normalizedPhone = $this->normalizePhone($data['phone']);
        if ($normalizedPhone === null) {
            return response()->json([
                'status' => false,
                'message' => __('messagess.invalid_phone'),
            ], 422);
        }

        $intervalDays = max((int) Setting::get('wheel_display_interval_days', 1), 1);
        $now = Carbon::now();

        $result = DB::transaction(function () use ($data, $normalizedPhone, $intervalDays, $now) {
            $user = $this->findOrCreateWheelUser($data['name'], $normalizedPhone);

            $lastSpinAt = $this->wheelCooldownService->getLastSpinAt(
                userId: $user->id,
                phone: $normalizedPhone
            );

            if ($lastSpinAt) {
                $nextAt = $lastSpinAt->copy()->addDays($intervalDays);
                if ($nextAt->isFuture()) {
                    return [
                        'cooldown' => true,
                        'response' => response()->json([
                            'status' => false,
                            'cooldown' => true,
                            'next_eligible_at' => $nextAt->toDateTimeString(),
                            'message' => __('messagess.wheel_try_again_on', ['date' => $nextAt->format('d-m-Y')]),
                        ], 429),
                    ];
                }
            }

            $availableRewards = Wheel::query()
                ->where('reward_value', '>', 0)
                ->select('id', 'type', 'reward_value')
                ->get()
                ->map(fn (Wheel $wheel) => [
                    'id' => $wheel->id,
                    'type' => $wheel->type ?: 'points',
                    'value' => (float) $wheel->reward_value,
                ])
                ->filter(fn (array $reward) => $reward['value'] > 0)
                ->values();

            if ($availableRewards->isEmpty()) {
                return [
                    'cooldown' => false,
                    'response' => response()->json([
                        'status' => false,
                        'message' => __('messagess.wheel_not_available_now'),
                    ], 404),
                ];
            }

            $segment = random_int(0, 11);
            $winningSegments = [1, 3, 5, 7, 9, 11];
            $won = in_array($segment, $winningSegments, true);

            $rewardType = null;
            $rewardValue = 0.0;
            $rewardId = null;
            $pointsBalance = (int) (optional(LoyaltyPoint::where('user_id', $user->id)->first())->points ?? 0);
            $walletBalance = (float) (optional(Wallet::where('user_id', $user->id)->first())->amount ?? 0);
            $balanceAfter = null;
            $message = __('messagess.wheel_not_winner');
            $note = __('messagess.wheel_history_no_reward');

            if ($won) {
                $reward = $availableRewards->random();
                $rewardType = $reward['type'];
                $rewardValue = (float) $reward['value'];
                $rewardId = $reward['id'];

                if ($rewardType === 'wallet_balance') {
                    $wallet = Wallet::firstOrNew(['user_id' => $user->id]);
                    $wallet->title = trim(($user->first_name ?? '').' '.($user->last_name ?? ''));
                    $wallet->amount = (float) ($wallet->amount ?? 0) + $rewardValue;
                    $wallet->status = 1;
                    $wallet->save();

                    WalletHistory::create([
                        'datetime' => $now,
                        'user_id' => $user->id,
                        'activity_type' => 'wheel_win',
                        'activity_message' => "Won {$rewardValue} from lucky wheel",
                        'activity_data' => json_encode([
                            'segment' => $segment,
                            'reward_id' => $rewardId,
                            'reward_type' => $rewardType,
                        ]),
                    ]);

                    $walletBalance = (float) $wallet->amount;
                    $balanceAfter = $walletBalance;
                    $message = __('messagess.wheel_congrats_wallet', ['amount' => $this->formatRewardNumber($rewardValue)]);
                    $note = $message;
                } else {
                    $rewardType = 'points';
                    $pointsToAdd = (int) round($rewardValue);

                    $loyalty = LoyaltyPoint::firstOrNew(['user_id' => $user->id]);
                    $loyalty->points = (int) ($loyalty->points ?? 0) + $pointsToAdd;
                    $loyalty->save();

                    $rewardValue = $pointsToAdd;
                    $pointsBalance = (int) $loyalty->points;
                    $balanceAfter = $pointsBalance;
                    $message = __('messagess.wheel_congrats', ['points' => $pointsToAdd]);
                    $note = $message;
                }
            }

            LoyaltyPointTransaction::create([
                'user_id' => $user->id,
                'action' => 'add',
                'points' => $rewardType === 'points' ? (int) $rewardValue : 0,
                'balance_after' => $balanceAfter !== null ? (int) round($balanceAfter) : null,
                'source' => 'wheel',
                'source_id' => $rewardId,
                'meta' => [
                    'mobile' => $normalizedPhone,
                    'name' => $data['name'],
                    'spun_at' => $now->toDateTimeString(),
                    'rewarded_at' => $won ? $now->toDateTimeString() : null,
                    'segment' => $segment,
                    'won' => $won,
                    'reward_type' => $rewardType,
                    'reward_value' => $won ? $rewardValue : 0,
                    'note' => $note,
                ],
            ]);

            return [
                'cooldown' => false,
                'response' => response()->json([
                    'status' => true,
                    'won' => $won,
                    'segment' => $segment,
                    'message' => $message,
                    'data' => [
                        'user_id' => $user->id,
                        'name' => trim(($user->first_name ?? '').' '.($user->last_name ?? '')) ?: $data['name'],
                        'mobile' => $user->mobile,
                        'prize' => [
                            'id' => $rewardId,
                            'type' => $rewardType,
                            'value' => $won ? $rewardValue : 0,
                            'label' => $won ? $this->formatRewardLabel($rewardType, $rewardValue) : null,
                        ],
                        'balances' => [
                            'loyalty_points' => $pointsBalance,
                            'wallet_balance' => $walletBalance,
                        ],
                    ],
                ]),
            ];
        });

        return $result['response'];
    }

    private function findOrCreateWheelUser(string $name, string $phone): User
    {
        $user = User::query()
            ->where('mobile', $phone)
            ->first();

        if ($user) {
            $this->syncWheelUserName($user, $name);

            return $user;
        }

        $user = User::create([
            'first_name' => $name,
            'last_name' => '',
            'username' => $this->generateUniqueUsername($name, $phone),
            'mobile' => $phone,
            'email_verified_at' => now(),
            'status' => 1,
        ]);

        $user->assignRole('user');

        return $user;
    }

    private function syncWheelUserName(User $user, string $name): void
    {
        $updates = [];

        if (blank($user->first_name)) {
            $updates['first_name'] = $name;
        }

        if (blank($user->username)) {
            $updates['username'] = $this->generateUniqueUsername($name, $user->mobile ?? Str::random(4), $user->id);
        }

        if (! empty($updates)) {
            $user->fill($updates)->save();
        }
    }

    private function generateUniqueUsername(string $name, string $phone, ?int $ignoreUserId = null): string
    {
        $base = Str::slug($name, '_');
        $base = $base !== '' ? $base : 'wheel_user';
        $base .= '_'.substr(preg_replace('/\D+/', '', $phone), -4);

        $username = $base;
        $counter = 1;

        while (
            User::query()
                ->when($ignoreUserId, fn ($query) => $query->where('id', '!=', $ignoreUserId))
                ->where('username', $username)
                ->exists()
        ) {
            $username = $base.'_'.$counter;
            $counter++;
        }

        return $username;
    }

    private function normalizePhone(string $phone): ?string
    {
        $phone = trim($phone);
        if ($phone === '') {
            return null;
        }

        $smsService = new TaqnyatSmsService();
        $validatedPhone = $smsService->validatePhoneNumber($phone);

        if ($validatedPhone) {
            return $validatedPhone;
        }

        $digitsOnly = preg_replace('/\D+/', '', $phone);

        return $digitsOnly !== '' ? $digitsOnly : null;
    }

    private function formatRewardLabel(?string $type, float|int $value): string
    {
        $formattedValue = $this->formatRewardNumber($value);

        return $type === 'wallet_balance'
            ? __('messagess.wheel_congrats_wallet', ['amount' => $formattedValue])
            : __('messagess.wheel_congrats', ['points' => $formattedValue]);
    }

    private function formatRewardNumber(float|int $value): float|int
    {
        return floor((float) $value) == (float) $value ? (int) $value : round((float) $value, 2);
    }

    private function isWheelEnabled(): bool
    {
        return (bool) Setting::get('wheel_enabled', true);
    }
}
