<?php

namespace App\Services\Payment;

use App\Models\Invoice;
use Modules\Promotion\Models\Coupon;
use Modules\Promotion\Models\UserCouponRedeem;

class InvoicePaymentRecorderService
{
    public function create(
        int $userId,
        float $discountAmount,
        float $tax,
        float $finalTotal,
        array $bookingIds,
        array $giftIds,
        array $orderGroupIds,
        string $couponCode,
        string $paymentMethod
    ): int {
        $invoice = Invoice::create([
            'user_id' => $userId,
            'cart_ids' => $bookingIds,
            'gift_ids' => $giftIds,
            'product_ids' => $orderGroupIds,
            'discount_amount' => $discountAmount,
            'taxs_service' => $tax,
            'loyalty_points_discount' => 0,
            'final_total' => $finalTotal,
            'payment_method' => $paymentMethod,
        ]);

        $this->recordCouponRedeem($userId, $couponCode, $discountAmount);

        return (int) $invoice->id;
    }

    private function recordCouponRedeem(int $userId, string $couponCode, float $discountAmount): void
    {
        if ($couponCode === '' || $discountAmount <= 0) {
            return;
        }

        $coupon = Coupon::where('coupon_code', $couponCode)->first();
        if (! $coupon) {
            return;
        }

        $coupon->decrement('use_limit');

        UserCouponRedeem::create([
            'user_id' => $userId,
            'coupon_code' => $coupon->coupon_code,
            'discount' => $discountAmount,
            'coupon_id' => $coupon->id,
        ]);
    }
}
