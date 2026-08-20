<?php

namespace App\Services;

use App\Models\LoyaltyPoint;
use App\Models\LoyaltyPointTransaction;
use App\Models\User;
use App\Models\WheelSpin;
use Illuminate\Support\Facades\DB;
use Modules\Wallet\Models\Wallet;
use Modules\Wallet\Models\WalletHistory;

/**
 * Tracks lucky-wheel spins per IP address so each IP only ever gets one
 * spin, and reconciles a guest's spin with their account once they sign
 * in or register from the same IP.
 */
class WheelSpinService
{
    /**
     * The wheel can only be spun once per IP address, ever.
     */
    public function hasSpun(string $ip): bool
    {
        return WheelSpin::query()->where('ip_address', $ip)->exists();
    }

    /**
     * Record a spin outcome for an IP address, crediting it immediately
     * when the spin already belongs to an authenticated user.
     */
    public function recordSpin(string $ip, ?User $user, bool $won, ?int $wheelId, ?string $rewardType, ?float $rewardValue): WheelSpin
    {
        $spin = WheelSpin::create([
            'ip_address' => $ip,
            'user_id' => $user?->id,
            'wheel_id' => $wheelId,
            'won' => $won,
            'reward_type' => $rewardType,
            'reward_value' => $rewardValue,
            'credited' => false,
        ]);

        if ($user) {
            $this->creditSpin($spin, $user);
        }

        return $spin->fresh();
    }

    /**
     * Called right after a user authenticates: attaches the most recent
     * un-credited guest spin from their current IP to their account and
     * applies the reward, if any.
     */
    public function linkIpToUser(User $user, string $ip): ?WheelSpin
    {
        return DB::transaction(function () use ($user, $ip) {
            $spin = WheelSpin::query()
                ->where('ip_address', $ip)
                ->whereNull('user_id')
                ->where('credited', false)
                ->latest('created_at')
                ->lockForUpdate()
                ->first();

            if (! $spin) {
                return null;
            }

            $spin->user_id = $user->id;
            $spin->save();

            $this->creditSpin($spin, $user);

            return $spin->fresh();
        });
    }

    private function creditSpin(WheelSpin $spin, User $user): void
    {
        if ($spin->credited) {
            return;
        }

        if (! $spin->won || ! $spin->reward_type) {
            $spin->update(['credited' => true, 'credited_at' => now()]);

            return;
        }

        $now = now();

        if ($spin->reward_type === 'wallet_balance') {
            $wallet = Wallet::firstOrNew(['user_id' => $user->id]);
            $wallet->title = trim(($user->first_name ?? '').' '.($user->last_name ?? ''));
            $wallet->amount = (float) ($wallet->amount ?? 0) + $spin->reward_value;
            $wallet->status = 1;
            $wallet->save();

            WalletHistory::create([
                'datetime' => $now,
                'user_id' => $user->id,
                'activity_type' => 'wheel_win',
                'activity_message' => "Won {$spin->reward_value} from lucky wheel",
                'activity_data' => json_encode([
                    'wheel_spin_id' => $spin->id,
                    'wheel_id' => $spin->wheel_id,
                    'reward_type' => $spin->reward_type,
                    'reward_value' => $spin->reward_value,
                ]),
            ]);

            LoyaltyPointTransaction::create([
                'user_id' => $user->id,
                'action' => 'add',
                'points' => 0,
                'balance_after' => null,
                'source' => 'wheel',
                'source_id' => $spin->wheel_id,
                'meta' => [
                    'ip_address' => $spin->ip_address,
                    'wheel_spin_id' => $spin->id,
                    'reward_type' => $spin->reward_type,
                    'reward_value' => $spin->reward_value,
                    'wallet_balance_after' => (float) $wallet->amount,
                ],
            ]);
        } elseif ($spin->reward_type === 'points') {
            $pointsToAdd = (int) round($spin->reward_value);

            $loyalty = LoyaltyPoint::firstOrNew(['user_id' => $user->id]);
            $loyalty->points = (int) ($loyalty->points ?? 0) + $pointsToAdd;
            $loyalty->save();

            LoyaltyPointTransaction::create([
                'user_id' => $user->id,
                'action' => 'add',
                'points' => $pointsToAdd,
                'balance_after' => (int) $loyalty->points,
                'source' => 'wheel',
                'source_id' => $spin->wheel_id,
                'meta' => [
                    'ip_address' => $spin->ip_address,
                    'wheel_spin_id' => $spin->id,
                    'reward_type' => $spin->reward_type,
                    'reward_value' => $spin->reward_value,
                ],
            ]);
        }

        $spin->update(['credited' => true, 'credited_at' => now()]);
    }
}
