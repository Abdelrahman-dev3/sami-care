<?php

namespace App\Services\Payment;

use Illuminate\Http\Request;
use Modules\Wallet\Models\Wallet;
use Modules\Wallet\Models\WalletHistory;
use App\Models\LoyaltyPoint;
use Illuminate\Support\Facades\DB;
use App\Models\LoyaltyPointTransaction;

class PaymentSubMethodsService
{
    /**
     * Apply wallet and loyalty payments.
     */
    public function apply(int $userId, Request $request, float $amount, bool $commit = false): array
    {
        $final = $amount;
        $usedWallet = $usedLoyalty = 0;
        $usedLoyaltyAmount = 0;

        $isWallet = (bool) $request->wallet;
        $isLoyalty = (bool) $request->loyalty;
        $walletAmount = $request->filled('wallet_amount') ? max(0, (float) $request->wallet_amount) : null;
        $loyaltyPoints = $request->filled('loyalty_points') ? max(0, (int) $request->loyalty_points) : null;

        DB::transaction(function () use (&$final, &$usedWallet, &$usedLoyalty, &$usedLoyaltyAmount, $userId, $isWallet, $isLoyalty, $walletAmount, $loyaltyPoints, $commit) {
            if ($isWallet && $final > 0) {
                $wallet = Wallet::where('user_id', $userId)->where('status', 1)->lockForUpdate()->first();
                if ($wallet && $wallet->amount > 0) {
                    $walletCap = $walletAmount === null ? $final : $walletAmount;
                    $usedWallet = min((float) $wallet->amount, $final, $walletCap);
                    if ($usedWallet > 0 && $commit) {
                        $wallet->amount -= $usedWallet;
                        $wallet->save();

                        WalletHistory::create([
                            'datetime' => now(),
                            'user_id' => $userId,
                            'activity_type' => 'withdraw',
                            'activity_message' => 'Wallet balance withdraw',
                            'activity_data' => json_encode([
                                'credit_debit_amount' => $usedWallet,
                            ]),
                        ]);
                    }
                    if ($usedWallet > 0) {
                        $final -= $usedWallet;
                    }
                }
            }

            if ($isLoyalty && $final > 0) {
                $rate = \App\Models\Setting::get('point_value') ?? 0.5;
                $rate = max((float) $rate, 0.01);
                $loyalty = LoyaltyPoint::where('user_id', $userId)->lockForUpdate()->first();
                if ($loyalty && $loyalty->points > 0) {
                    $availablePoints = max((int) $loyalty->points, 0);
                    $usablePoints = $loyaltyPoints === null ? $availablePoints : min($loyaltyPoints, $availablePoints);
                    $maxUse = $usablePoints * $rate;
                    $used = min($final, $maxUse);
                    $pointsUsed = min($usablePoints, (int) ceil($used / $rate));
                    $used = min($final, $pointsUsed * $rate);
                    if ($pointsUsed <= 0 || $used <= 0) {
                        return;
                    }
                    if ($commit) {
                        $loyalty->points -= $pointsUsed;
                        $loyalty->save();
                        LoyaltyPointTransaction::create([
                            'user_id' => $userId,
                            'action' => 'deduct',
                            'points' => $pointsUsed,
                            'balance_after' => $loyalty->points,
                            'source' => 'Loyalty points payment deduction',
                        ]);
                    }
                    $usedLoyalty = $pointsUsed;
                    $usedLoyaltyAmount = $used;
                    $final -= $used;
                }
            }
        });

        return [
            'remaining_amount' => max($final, 0),
            'used_wallet' => $usedWallet,
            'used_loyalty' => $usedLoyalty,
            'used_loyalty_amount' => $usedLoyaltyAmount,
            'used_gift' => 0,
        ];
    }
}
