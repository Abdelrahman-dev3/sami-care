<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GiftCard;
use App\Models\LoyaltyPoint;
use App\Models\reject;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Modules\Booking\Models\Booking;
use Modules\Promotion\Models\Coupon;
use Modules\Wallet\Models\Wallet;

class ProfileController extends Controller
{
    public function show(): JsonResponse
    {
        $user = Auth::user()->loadMissing('affiliate');
        $address = $user->address()->first();

        $bookingsQuery = Booking::query()
            ->with(['branch', 'services.employee', 'services.service'])
            ->where('created_by', $user->id)
            ->whereHas('services')
            ->whereNull('deleted_by');

        $allBookings = (clone $bookingsQuery)->get();
        $currentBookings = (clone $bookingsQuery)
            ->whereNotIn('status', ['completed', 'canceled', 'cancelled'])
            ->get();
        $completedBookings = (clone $bookingsQuery)
            ->where('payment_status', 1)
            ->where('status', 'completed')
            ->get();

        $giftCards = GiftCard::query()
            ->where('user_id', $user->id)
            ->latest('id')
            ->get();

        $todayPaidGiftCards = GiftCard::query()
            ->where('user_id', $user->id)
            ->whereDate('created_at', '>=', now()->toDateString())
            ->where('payment_status', 1)
            ->latest('id')
            ->get();

        $coupons = Coupon::query()
            ->with('promotion')
            ->where('is_expired', 0)
            ->where('use_limit', '>=', 1)
            ->latest('id')
            ->get();

        $walletBalance = (float) (Wallet::where('user_id', $user->id)->value('amount') ?? 0);
        $loyaltyPoints = (int) (LoyaltyPoint::where('user_id', $user->id)->value('points') ?? 0);
        $affiliate = $user->affiliate;

        return response()->json([
            'status' => true,
            'data' => [
                'user' => [
                    'id' => $user->id,
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'full_name' => trim(($user->first_name ?? '').' '.($user->last_name ?? '')),
                    'email' => $user->email,
                    'mobile' => $user->mobile,
                    'avatar' => $this->resolveUrl($user->avatar ?: $user->profile_image),
                    'profile_image' => $this->resolveUrl($user->profile_image),
                    'date_of_birth' => optional($user->date_of_birth)->format('Y-m-d') ?: $user->date_of_birth,
                    'city' => $user->city ?: $address?->city,
                    'country' => $user->country ?: $address?->country,
                    'address' => $user->address ?: $address?->address_line_1,
                    'location' => trim(collect([
                        $user->country ?: $address?->country,
                        $user->city ?: $address?->city,
                        $user->address ?: $address?->address_line_1,
                    ])->filter()->implode(' - ')),
                ],
                'balances' => [
                    'wallet' => $walletBalance,
                    'referral_balance' => (float) ($affiliate->wallet_available ?? 0),
                    'loyalty_points' => $loyaltyPoints,
                ],
                'stats' => [
                    'coupons_count' => $coupons->count(),
                    'pending_bookings_count' => $currentBookings->count(),
                    'completed_bookings_count' => $completedBookings->count(),
                    'gift_cards_count' => $giftCards->count(),
                    'transactions_count' => $allBookings->count(),
                ],
                'affiliate' => [
                    'is_affiliate' => (bool) $affiliate,
                    'status' => $affiliate?->status,
                    'ref_code' => $affiliate?->ref_code,
                    'wallet_total' => (float) ($affiliate->wallet_total ?? 0),
                    'wallet_available' => (float) ($affiliate->wallet_available ?? 0),
                    'referral_link' => $affiliate?->ref_code ? route('affiliate.track', ['ref_code' => $affiliate->ref_code]) : null,
                ],
                'payment_methods' => [
                    ['key' => 'visa', 'image_url' => asset('images/icons/visa.png')],
                    ['key' => 'mada', 'image_url' => asset('images/icons/mada.png')],
                    ['key' => 'tamara', 'image_url' => asset('images/icons/tamara.png')],
                    ['key' => 'tabby', 'image_url' => asset('images/icons/tabby.png')],
                ],
                'cancel_reasons' => reject::query()
                    ->get()
                    ->map(fn (reject $reason) => [
                        'id' => $reason->id,
                        'name' => $this->localizedValue($reason->name),
                        'name_translations' => $reason->name,
                    ])
                    ->values(),
                'coupons' => $coupons->map(fn (Coupon $coupon) => [
                    'id' => $coupon->id,
                    'coupon_code' => $coupon->coupon_code,
                    'coupon_type' => $coupon->coupon_type,
                    'discount_type' => $coupon->discount_type,
                    'discount_percentage' => $coupon->discount_percentage,
                    'discount_amount' => $coupon->discount_amount,
                    'start_date_time' => $coupon->start_date_time,
                    'end_date_time' => $coupon->end_date_time,
                    'promotion' => [
                        'id' => $coupon->promotion?->id,
                        'name' => $this->localizedValue($coupon->promotion?->name),
                        'description' => $this->localizedValue($coupon->promotion?->description),
                    ],
                ])->values(),
                'transactions' => $allBookings
                    ->flatMap(fn (Booking $booking) => $booking->services->map(function ($service) use ($booking) {
                        return [
                            'booking_id' => $booking->id,
                            'service_id' => $service->service_id,
                            'service_name' => $service->service_name,
                            'branch_name' => $this->localizedValue($booking->branch?->name),
                            'date' => $this->formatDate($booking->start_date_time) ?: $this->formatDate($booking->created_at),
                            'status' => $booking->status,
                        ];
                    }))
                    ->values(),
                'current_bookings' => $currentBookings->map(fn (Booking $booking) => $this->transformBooking($booking, true))->values(),
                'completed_bookings' => $completedBookings->map(fn (Booking $booking) => $this->transformBooking($booking, false))->values(),
                'gift_cards' => $giftCards->map(fn (GiftCard $giftCard) => $this->transformGiftCard($giftCard))->values(),
                'today_paid_gift_cards' => $todayPaidGiftCards->map(fn (GiftCard $giftCard) => $this->transformGiftCard($giftCard))->values(),
            ],
        ]);
    }

    private function transformBooking(Booking $booking, bool $canCancel): array
    {
        return [
            'id' => $booking->id,
            'status' => $booking->status,
            'payment_status' => (int) $booking->payment_status,
            'branch' => [
                'id' => $booking->branch_id,
                'name' => $this->localizedValue($booking->branch?->name),
            ],
            'start_date' => $this->formatDate($booking->start_date_time, 'd-m-Y'),
            'start_time' => $this->formatDate($booking->start_date_time, 'H:i'),
            'can_cancel' => $canCancel,
            'services' => $booking->services->map(function ($service) {
                return [
                    'id' => $service->id,
                    'service_id' => $service->service_id,
                    'service_name' => $service->service_name,
                    'employee_name' => $service->employee->full_name ?? trim(($service->employee->first_name ?? '').' '.($service->employee->last_name ?? '')),
                    'price' => (float) ($service->service->default_price ?? $service->service_price ?? 0),
                ];
            })->values(),
        ];
    }

    private function transformGiftCard(GiftCard $giftCard): array
    {
        return [
            'id' => $giftCard->id,
            'ref' => $giftCard->ref,
            'balance' => $giftCard->balance,
            'sender_name' => $giftCard->sender_name,
            'recipient_name' => $giftCard->recipient_name,
            'sender_phone' => $giftCard->sender_phone,
            'recipient_phone' => $giftCard->recipient_phone,
            'message' => $giftCard->message,
            'payment_status' => (int) $giftCard->payment_status,
            'created_at' => optional($giftCard->created_at)->format('Y-m-d H:i:s'),
            'services' => $giftCard->services_list->map(fn ($service) => [
                'id' => $service->id,
                'name' => $this->localizedValue($service->name),
            ])->values(),
            'packages' => $giftCard->packages->map(fn ($package) => [
                'id' => $package->id,
                'name' => $this->localizedValue($package->name),
            ])->values(),
        ];
    }

    private function localizedValue(mixed $value): ?string
    {
        if (is_array($value)) {
            $locale = app()->getLocale();

            return $value[$locale] ?? $value['ar'] ?? $value['en'] ?? reset($value) ?: null;
        }

        if (is_string($value) && $value !== '') {
            $decoded = json_decode($value, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                $locale = app()->getLocale();

                return $decoded[$locale] ?? $decoded['ar'] ?? $decoded['en'] ?? reset($decoded) ?: null;
            }
        }

        return filled($value) ? (string) $value : null;
    }

    private function formatDate(mixed $value, string $format = 'Y-m-d'): ?string
    {
        if (blank($value)) {
            return null;
        }

        try {
            return Carbon::parse($value)->format($format);
        } catch (\Throwable) {
            return null;
        }
    }

    private function resolveUrl(?string $path): ?string
    {
        if (blank($path)) {
            return null;
        }

        return preg_match('/^https?:\/\//i', $path) ? $path : asset($path);
    }
}
