<?php

namespace App\Services\Payment;
use Modules\Promotion\Models\Coupon;

class PaymentCalculatorService
{
    public function calculateTotal(bool $isBuyNow, ?string $couponCode = null): array
    {
        $total = 0;
        $productTotal = 0;
        $user = auth()->user();
        $userId = $user?->id;
        $servicesIds = [];
        $giftIds     = [];
        $productIds  = [];

        if (!$userId) {
            return ['error' => __('auth.unauthenticated')];
        }
        
        if ($isBuyNow) {
            $services = $user->buyNowBookings()->with('service.service')->get();
            
            $servicesIds = $services->pluck('id')->toArray();
            $total += $services->sum(fn($item) => ($item->service->service_price ?? 0) - ($item->service->discount_amount ?? 0));
        } else {
            $services = $user->cartBookings()->with('service.service')->get();
            $products = $user->cartProducts()->with('product')->get();
            $gifts    = $user->pendingGiftCards()->get();
            
            $servicesIds    = $services->pluck('id')->toArray();
            $productIds = $products->pluck('product_id')->toArray();
            $giftIds    = $gifts->pluck('id')->toArray();

            $total += $services->sum(fn($item) => ($item->service->service_price ?? 0) - ($item->service->discount_amount ?? 0));

            $productTotal = $products->sum(fn($item) => (($item->product->max_price ?? $item->product->min_price) ?? 0) * ($item->qty ?? 1));

            $total += $productTotal;
            $total += $gifts->sum(fn($g) => $g->subtotal ?? 0);
        }

        $tax = getBookingTaxamount($total, 0, null)['total_tax_amount'] + getTaxamount($productTotal)['total_tax_amount'];

        $finalTotal = $total + $tax;
        $discount = 0;

        if ($couponCode  && $couponCode != '') {
            $coupon = Coupon::where('coupon_code', $couponCode)->where('is_expired', 0)->first();
            if (!$coupon) {
                return ['error' => __('messages.invalid_coupon')];
            }
            
            $discount = $coupon->type === 'percent' ? ($finalTotal * $coupon->discount_percentage) / 100 : $coupon->discount_amount;

            $finalTotal = max($finalTotal - $discount, 0);
        }

        return [
            'total' => $finalTotal,
            'discountAmount' => $discount,
            'tax' => $tax,
            'cart_ids'      => $servicesIds,
            'gift_ids'      => $giftIds,
            'product_ids'   => $productIds,
        ];
    }
}
