<?php

namespace App\Http\View\Composers;

use Modules\Booking\Models\Booking;
use Modules\Booking\Models\BookingService;
use App\Models\Cart;
use App\Models\GiftCard;
use Illuminate\View\View;

/**
 * File: app/Http/View/Composers/CartCountComposer.php
 *
 * Injects $cartCount into every view automatically.
 * Register it in AppServiceProvider (see below).
 */
class CartCountComposer
{
    public function compose(View $view): void
    {
        $count = 0;

        if (auth()->check()) {
            $userId = auth()->id();

            // Products in cart
            $productCount = Cart::where('user_id', $userId)->count();

            $services = Booking::with('service.service', 'service.employee')
                ->where('created_by', $userId)
                ->whereNotIn('status', ['cancelled', 'completed'])
                ->where('payment_type', 'cart')
                ->where('payment_status', 0)
                ->whereNull('deleted_by')
                ->get();
            $serviceCount = $services->sum(fn($item) => $item->service ? 1 : 0);
            // Unpaid gift cards
            $giftCount = GiftCard::where('user_id', $userId)
                ->where('payment_status', 0)
                ->count();

//            dd( $productCount , $serviceCount , $giftCount);
            $count = $productCount + $serviceCount + $giftCount;
        }

        $view->with('cartCount', $count);
    }
}
