<?php

namespace App\Http\Controllers;
use App\Models\LoyaltyPoint;
use App\Models\LoyaltyPointTransaction;
use App\Models\Setting;
use App\Models\Wheel;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use Modules\Wallet\Models\Wallet;
use Modules\Wallet\Models\WalletHistory;

class WheelController extends Controller
{
    public function index(){

        $prizes = Wheel::all();
        $wheelDisplayIntervalDays = (int) Setting::get('wheel_display_interval_days', 1);

        return view('backend.wheel.index_datatable', compact('prizes', 'wheelDisplayIntervalDays'));

    }

    public function store(Request $request){
        if ($request->input('form_type') === 'interval') {
            $request->validate([
                'wheel_display_interval_days' => 'required|integer|min:1|max:365',
            ]);

            Setting::set('wheel_display_interval_days', (int) $request->wheel_display_interval_days, 'integer');

            return redirect()->back()->with('success', __('wheel.interval_saved_successfully'));
        }

        $request->validate([
            'gift_type' => 'required|string|max:255',
            'reward_value' => 'required|numeric|min:1',
        ], [
            'gift_type.required' => 'برجاء اختيار نوع الهدية.',
            'gift_type.string' => 'نوع الهدية يجب أن يكون نصًا.',
            'reward_value.required' => 'برجاء إدخال قيمة المكافأة.',
            'reward_value.numeric' => 'قيمة المكافأة يجب أن تكون رقمًا.',
            'reward_value.min' => 'قيمة المكافأة يجب ألا تقل عن 1.',
        ]);

        Wheel::create([
            'type' =>  $request->gift_type,
            'reward_value' => $request->reward_value
        ]);

        return redirect()->back()->with('success', __('wheel.The_award_has_been_added_successfully'));
    }

//    public function spin(Request $request)
//    {
//        $data = $request->validate([
//            'name' => 'required|string|max:255',
//            'phone' => 'required|string|max:30',
//        ]);
//
//        $intervalDays = max((int) Setting::get('wheel_display_interval_days', 1), 1);
//        $now = Carbon::now();
//
//        $guestToken = $request->cookie('wheel_guest_token');
//        if (!Auth::check() && empty($guestToken)) {
//            $guestToken = (string) Str::uuid();
//        }
//
//        $lastSpin = LoyaltyPointTransaction::query()
//            ->where('source', 'wheel')
//            ->where(function ($query) use ($guestToken) {
//                if (Auth::check()) {
//                    $query->where('user_id', Auth::id());
//                } else {
//                    $query->where('meta->guest_token', $guestToken);
//                }
//            })
//            ->latest('created_at')
//            ->first();
//
//        if ($lastSpin && $lastSpin->created_at instanceof Carbon) {
//            $nextAt = $lastSpin->created_at->copy()->addDays($intervalDays);
//            if ($nextAt->isFuture()) {
//                $response = response()->json([
//                    'status' => false,
//                    'cooldown' => true,
//                    'next_eligible_at' => $nextAt->toDateTimeString(),
//                    'message' => __('messagess.wheel_try_again_on', ['date' => $nextAt->format('d-m-Y')]),
//                ], 429);
//
//                if (!Auth::check() && !empty($guestToken)) {
//                    $response->cookie('wheel_guest_token', $guestToken, 60 * 24 * 365);
//                }
//
//                return $response;
//            }
//        }
//
//        $segment = random_int(0, 11);
//        $winningSegments = [1, 3, 5, 7, 9, 11];
//        $isWinningSegment = in_array($segment, $winningSegments, true);
//
//        $availableRewards = Wheel::query()
//            ->where('reward_value', '>', 0)
//            ->pluck('reward_value')
//            ->map(fn ($value) => (int) round($value))
//            ->filter(fn ($value) => $value > 0)
//            ->values();
//
//        $rewardPoints = 0;
//        $won = $isWinningSegment && $availableRewards->isNotEmpty();
//        if ($won) {
//            $rewardPoints = (int) $availableRewards->random();
//        }
//
//        $balanceAfter = null;
//        if ($won && Auth::check()) {
//            $loyalty = LoyaltyPoint::firstOrNew(['user_id' => Auth::id()]);
//            $loyalty->points = (int) ($loyalty->points ?? 0) + $rewardPoints;
//            $loyalty->save();
//            $balanceAfter = (int) $loyalty->points;
//        }
//
//        $note = $won
//            ? __('messagess.wheel_history_reward', ['points' => $rewardPoints])
//            : __('messagess.wheel_history_no_reward');
//
//        LoyaltyPointTransaction::create([
//            'user_id' => Auth::id(),
//            'action' => 'add',
//            'points' => $rewardPoints,
//            'balance_after' => $balanceAfter,
//            'source' => 'wheel',
//            'source_id' => null,
//            'meta' => [
//                'guest_token' => Auth::check() ? null : $guestToken,
//                'guest_name' => Auth::check() ? null : $data['name'],
//                'guest_phone' => Auth::check() ? null : $data['phone'],
//                'spun_at' => $now->toDateTimeString(),
//                'rewarded_at' => $won ? $now->toDateTimeString() : null,
//                'segment' => $segment,
//                'won' => $won,
//                'note' => $note,
//            ],
//        ]);
//
//        $response = response()->json([
//            'status' => true,
//            'won' => $won,
//            'segment' => $segment,
//            'reward_points' => $rewardPoints,
//            'message' => $won
//                ? __('messagess.wheel_congrats', ['points' => $rewardPoints])
//                : __('messagess.wheel_not_winner'),
//        ]);
//
//        if (!Auth::check() && !empty($guestToken)) {
//            $response->cookie('wheel_guest_token', $guestToken, 60 * 24 * 365);
//        }
//
//        return $response;
//    }

    public function spin(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:30',
        ]);

        $intervalDays = max((int) Setting::get('wheel_display_interval_days', 1), 1);
        $now = Carbon::now();

        $guestToken = $request->cookie('wheel_guest_token');
        if (!Auth::check() && empty($guestToken)) {
            $guestToken = (string) Str::uuid();
        }

        $lastSpin = LoyaltyPointTransaction::query()
            ->where('source', 'wheel')
            ->where(function ($query) use ($guestToken) {
                if (Auth::check()) {
                    $query->where('user_id', Auth::id());
                } else {
                    $query->where('meta->guest_token', $guestToken);
                }
            })
            ->latest('created_at')
            ->first();

        if ($lastSpin && $lastSpin->created_at instanceof Carbon) {
            $nextAt = $lastSpin->created_at->copy()->addDays($intervalDays);
            if ($nextAt->isFuture()) {
                $response = response()->json([
                    'status' => false,
                    'cooldown' => true,
                    'next_eligible_at' => $nextAt->toDateTimeString(),
                    'message' => __('messagess.wheel_try_again_on', ['date' => $nextAt->format('d-m-Y')]),
                ], 429);

                if (!Auth::check() && !empty($guestToken)) {
                    $response->cookie('wheel_guest_token', $guestToken, 60 * 24 * 365);
                }

                return $response;
            }
        }

        $segment = random_int(0, 11);
        $winningSegments = [1, 3, 5, 7, 9, 11];
        $isWinningSegment = in_array($segment, $winningSegments, true);

        // 1. Fetch both the value and the type
        $availableRewards = Wheel::query()
            ->where('reward_value', '>', 0)
            ->select('reward_value', 'type') // Assuming column name is reward_type
            ->get()
            ->map(function ($item) {
                return [
                    'value' => (int) round($item->reward_value),
                    'type'  => $item->type, // 'points' or 'wallet_balance'
                ];
            })
            ->filter(fn ($reward) => $reward['value'] > 0)
            ->values();

        $won = $isWinningSegment && $availableRewards->isNotEmpty();

        $rewardValue = 0;
        $rewardType = null;

        if ($won) {
            // 2. Pick a random reward object
            $winner = $availableRewards->random();

            $rewardValue = $winner['value'];
            $rewardType = $winner['type'];
        }
//dd($won,$rewardValue,$rewardType);
        $balanceAfter = null;
        if ($won && Auth::check()) {

            if($rewardType=="points"){
                $loyalty = LoyaltyPoint::firstOrNew(['user_id' => Auth::id()]);
                $loyalty->points = (int) ($loyalty->points ?? 0) + $rewardValue;
                $loyalty->save();
                $balanceAfter = (int) $loyalty->points;
            }elseif($rewardType=="wallet_balance"){
                 //Wallet Logic
                $wallet = Wallet::firstOrNew(['user_id' => Auth::id()]);
                $wallet->amount = ($wallet->amount ?? 0) + $rewardValue;
                $wallet->status = 1;
                $wallet->save();

                WalletHistory::create([
                    'datetime' => $now,
                    'user_id' => Auth::id(),
                    'activity_type' => 'wheel_win',
                    'activity_message' => "Won {$rewardValue} from lucky wheel",
                    'activity_data' => json_encode(['segment' => $segment])
                ]);
                $balanceAfter = $wallet->amount;
//                $rewardText = $val . " " . __('messagess.currency_symbol');
                $rewardMessage = __('messagess.wheel_congrats_wallet', ['amount' => $rewardValue]);
            }

        }

        if ($won) {
            // Determine which translation key to use
            $translationKey = ($rewardType === 'points')
                ? 'messagess.wheel_congrats'
                : 'messagess.wheel_congrats_wallet';

            // Pass the value to the placeholder (using 'points' or 'amount' as defined in your lang file)
            $note = __($translationKey, [
                'points' => $rewardValue,
                'amount' => $rewardValue
            ]);
        } else {
            $note = __('messagess.wheel_history_no_reward');
        }

        LoyaltyPointTransaction::create([
            'user_id' => Auth::id(),
            'action' => 'add',
            'points' => $rewardValue,
            'balance_after' => $balanceAfter,
            'source' => 'wheel',
            'source_id' => null,
            'meta' => [
                'guest_token' => Auth::check() ? null : $guestToken,
                'guest_name' => Auth::check() ? null : $data['name'],
                'guest_phone' => Auth::check() ? null : $data['phone'],
                'spun_at' => $now->toDateTimeString(),
                'rewarded_at' => $won ? $now->toDateTimeString() : null,
                'segment' => $segment,
                'won' => $won,
                'note' => $note,
            ],
        ]);

        $response = response()->json([
            'status' => true,
            'won' => $won,
            'segment' => $segment,
            'reward_points' => $rewardValue,
            'message'       => $won
                ? ($rewardType === 'points'
                    ? __('messagess.wheel_congrats', ['points' => $rewardValue])
                    : __('messagess.wheel_congrats_wallet', ['amount' => $rewardValue]))
                : __('messagess.wheel_not_winner'),
        ]);

        if (!Auth::check() && !empty($guestToken)) {
            $response->cookie('wheel_guest_token', $guestToken, 60 * 24 * 365);
        }

        return $response;
    }
//    public function spin(Request $request)
//    {
//        $data = $request->validate([
//            'name' => 'required|string|max:255',
//            'phone' => 'required|string|max:30',
//        ]);
//
//        $intervalDays = max((int) Setting::get('wheel_display_interval_days', 1), 1);
//        $now = Carbon::now();
//
//        // 1. Cooldown / Guest Logic
//        $guestToken = $request->cookie('wheel_guest_token') ?: (Auth::check() ? null : (string) Str::uuid());
//
//        $lastSpin = LoyaltyPointTransaction::query()
//            ->where('source', 'wheel')
//            ->where(function ($query) use ($guestToken) {
//                Auth::check() ? $query->where('user_id', Auth::id()) : $query->where('meta->guest_token', $guestToken);
//            })
//            ->latest('created_at')
//            ->first();
//
//        if ($lastSpin && $lastSpin->created_at->addDays($intervalDays)->isFuture()) {
//            return response()->json([
//                'status' => false,
//                'message' => __('messagess.wheel_try_again_on', ['date' => $lastSpin->created_at->addDays($intervalDays)->format('d-m-Y')]),
//            ], 429);
//        }
//
//        // 2. Spin Logic
//        $segment = random_int(0, 11);
//        $winningSegments = [1, 3, 5, 7, 9, 11];
//        $isWinningSegment = in_array($segment, $winningSegments, true);
//
//        $availableRewards = Wheel::where('reward_value', '>', 0)->get();
//        $won = $isWinningSegment && $availableRewards->isNotEmpty();
//
//        $reward = $won ? $availableRewards->random() : null;
//        $balanceAfter = null;
//        $rewardMessage = "";
//
//        // 3. Distribution Logic
//        if ($won && Auth::check()) {
//            $val = (int)$reward->reward_value;
//            dd($reward->reward_type);
//
//            if ($reward->reward_type === 'points') {
//
//                $lp = LoyaltyPoint::firstOrNew(['user_id' => Auth::id()]);
//                $lp->points = ($lp->points ?? 0) + $val;
//                $lp->save();
//                $balanceAfter = $lp->points;
////                $rewardText = $val . " " . __('messagess.points');
//                $rewardMessage = __('messagess.wheel_congrats', ['points' => $val]);
//            } else if ($reward->reward_type === 'wallet_balance') {
//                // Wallet Logic
//                $wallet = Wallet::firstOrNew(['user_id' => Auth::id()]);
//                $wallet->amount = ($wallet->amount ?? 0) + $val;
//                $wallet->status = 1;
//                $wallet->save();
//
//                WalletHistory::create([
//                    'datetime' => $now,
//                    'user_id' => Auth::id(),
//                    'activity_type' => 'wheel_win',
//                    'activity_message' => "Won {$val} from lucky wheel",
//                    'activity_data' => json_encode(['segment' => $segment])
//                ]);
//                $balanceAfter = $wallet->amount;
////                $rewardText = $val . " " . __('messagess.currency_symbol');
//                $rewardMessage = __('messagess.wheel_congrats_wallet', ['amount' => $val]);
//            }
//        }
//
//        // 4. Log Transaction
//        LoyaltyPointTransaction::create([
//            'user_id' => Auth::id(),
//            'action' => 'add',
//            'points' => ($reward && $reward->reward_type === 'points') ? $reward->reward_value : 0,
//            'balance_after' => $balanceAfter,
//            'source' => 'wheel',
//            'meta' => [
//                'guest_token' => $guestToken,
//                'reward_type' => $reward ? $reward->reward_type : null,
//                'reward_value' => $reward ? $reward->reward_value : 0,
//                'won' => $won,
//                'segment' => $segment,
//            ],
//        ]);
//
////        return response()->json([
////            'status' => true,
////            'won' => true,
////            'message' => $rewardMessage, // Pass the ALREADY TRANSLATED message here
////        ]);
//
//        return response()->json([
//            'status' => true,
//            'won' => $won,
//            'message' => $won ? __('messagess.wheel_congrats', ['reward' => $rewardMessage]) : __('messagess.wheel_not_winner'),
//        ])->cookie('wheel_guest_token', $guestToken, 60 * 24 * 365);
//    }
    public function destroy_all(){

        Wheel::truncate();

        return redirect()->back()->with('success', __('wheel.success_delete_all'));
    }

    public function destroy($id){
        $prize = Wheel::findOrFail($id);
        $prize->delete();
        return redirect()->back()->with('success', __('wheel.The_award_has_been_deleted_successfully'));
    }
}

