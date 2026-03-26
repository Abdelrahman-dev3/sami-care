<?php

namespace App\Services\Payment;

use App\Models\User;
use Illuminate\Support\Collection;
use Modules\Booking\Models\Booking;
use Modules\Promotion\Models\Coupon;

class PendingCheckoutService
{
    public function getPendingCheckoutForCurrentUser(string $pageType, ?string $couponCode = null): array
    {
        $user = auth()->user();

        if (! $user instanceof User) {
            return ['error' => __('auth.unauthenticated')];
        }

        return $this->getPendingCheckoutForUser($user, $pageType, $couponCode);
    }

    public function getPendingCheckoutForUser(User $user, string $pageType, ?string $couponCode = null): array
    {
        $bookingsQuery = $pageType === CheckoutType::PAYMENT
            ? $user->buyNowBookings()
            : $user->cartBookings();

        $bookings = $bookingsQuery
            ->with(['services', 'bookingPackages'])
            ->get();

        $products = $pageType === CheckoutType::CART
            ? $user->cartProducts()->with('product')->get()
            : collect();

        $gifts = $pageType === CheckoutType::CART
            ? $user->pendingGiftCards()->get()
            : collect();

        $serviceSubtotal = $this->serviceSubtotal($bookings);
        $packageSubtotal = $this->packageSubtotal($bookings);
        $bookingSubtotal = $serviceSubtotal + $packageSubtotal;
        $productSubtotal = $this->productSubtotal($products);
        $giftSubtotal = (float) $gifts->sum(fn ($gift) => (float) ($gift->subtotal ?? 0));

        $tax = $this->taxAmount($bookingSubtotal, $productSubtotal);
        $subtotal = $bookingSubtotal + $productSubtotal + $giftSubtotal + $tax;

        $discount = 0.0;
        if (filled($couponCode)) {
            $coupon = Coupon::where('coupon_code', $couponCode)
                ->where('is_expired', 0)
                ->first();

            if (! $coupon) {
                return ['error' => __('messages.invalid_coupon')];
            }

            $discount = $this->couponDiscount($coupon, $subtotal);
        }

        $total = max($subtotal - $discount, 0);

        if ($bookings->isEmpty() && $products->isEmpty() && $gifts->isEmpty()) {
            return ['error' => 'No payable items found.'];
        }

        return [
            'page_type' => $pageType,
            'bookings' => $bookings,
            'products' => $products,
            'gifts' => $gifts,
            'service_subtotal' => round($serviceSubtotal, 2),
            'package_subtotal' => round($packageSubtotal, 2),
            'booking_subtotal' => round($bookingSubtotal, 2),
            'product_subtotal' => round($productSubtotal, 2),
            'gift_subtotal' => round($giftSubtotal, 2),
            'tax' => round($tax, 2),
            'discountAmount' => round($discount, 2),
            'total' => round($total, 2),
            'cart_ids' => $bookings->pluck('id')->values()->all(),
            'gift_ids' => $gifts->pluck('id')->values()->all(),
            'product_ids' => $products->pluck('product_id')->filter()->values()->all(),
        ];
    }

    private function serviceSubtotal(Collection $bookings): float
    {
        return (float) $bookings->sum(function (Booking $booking) {
            return (float) $booking->services->sum(function ($service) {
                return (float) ($service->service_price ?? 0) - (float) ($service->discount_amount ?? 0);
            });
        });
    }

    private function packageSubtotal(Collection $bookings): float
    {
        return (float) $bookings->sum(function (Booking $booking) {
            return (float) $booking->bookingPackages->sum(fn ($package) => (float) ($package->package_price ?? 0));
        });
    }

    private function productSubtotal(Collection $products): float
    {
        return (float) $products->sum(function ($item) {
            $price = (float) ($item->product->max_price ?? $item->product->min_price ?? 0);
            return $price * (int) ($item->qty ?? 1);
        });
    }

    private function taxAmount(float $bookingSubtotal, float $productSubtotal): float
    {
        $bookingTax = (float) (getBookingTaxamount($bookingSubtotal, 0, null)['total_tax_amount'] ?? 0);
        $productTax = (float) (getTaxamount($productSubtotal)['total_tax_amount'] ?? 0);

        return round($bookingTax + $productTax, 2);
    }

    private function couponDiscount(Coupon $coupon, float $subtotal): float
    {
        $discount = $coupon->discount_type === 'percent'
            ? ($subtotal * (float) ($coupon->discount_percentage ?? 0)) / 100
            : (float) ($coupon->discount_amount ?? 0);

        return round(min($discount, $subtotal), 2);
    }
}
