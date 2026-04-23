<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GiftCard;
use App\Models\LoyaltyPoint;
use App\Models\reject;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\Booking\Models\Booking;
use Modules\Promotion\Models\Coupon;
use Modules\Wallet\Models\Wallet;

class ProfileController extends Controller
{
    public function show(): JsonResponse
    {
        $user = Auth::user()->loadMissing('affiliate');

        $bookingsQuery = Booking::query()
            ->with(['branch', 'services.employee', 'services.service', 'paidTransaction'])
            ->where('created_by', $user->id)
            ->whereHas('services')
            ->whereNull('deleted_by');

        $allBookings = (clone $bookingsQuery)->get();
        $currentBookings = (clone $bookingsQuery)
            ->whereNotIn('status', ['completed', 'canceled', 'cancelled'])
            ->get();
        $completedBookings = (clone $bookingsQuery)
            ->paid()
            ->where('status', 'completed')
            ->get();

        $giftCards = GiftCard::query()
            ->where('user_id', $user->id)
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

        return response()->json([
            'status' => true,
            'data' => [
                'user' => [
                    'id' => $user->id,
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'full_name' => trim(($user->first_name ?? '') . ' ' . ($user->last_name ?? '')),
                    'email' => $user->email,
                    'mobile' => $user->mobile,
                    'profile_image' => $this->resolveUrl($user->avatar ?: $user->profile_image),
                    'date_of_birth' => optional($user->date_of_birth)->format('Y-m-d') ?: $user->date_of_birth,
                    'city' => $user->city ?? '',
                    'country' => $user->country ?? '',
                    'address' => $user->address ?? '',
                ],
                'balances' => [
                    'wallet' => $walletBalance,
                    'loyalty_points' => $loyaltyPoints,
                ],
                'stats' => [
                    'coupons_count' => $coupons->count(),
                    'pending_bookings_count' => $currentBookings->count(),
                    'completed_bookings_count' => $completedBookings->count(),
                    'gift_cards_count' => $giftCards->count(),
                ],
                'payment_methods' => [
                    ['key' => 'visa', 'image_url' => asset('images/icons/visa.png')],
                    ['key' => 'mada', 'image_url' => asset('images/icons/mada.png')],
                    ['key' => 'tamara', 'image_url' => asset('images/icons/tamara.png')],
                    ['key' => 'tabby', 'image_url' => asset('images/icons/tabby.png')],
                ],
                'transactions' => $allBookings
                    ->flatMap(fn(Booking $booking) => $booking->services->map(function ($service) use ($booking) {
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
                'current_bookings' => $currentBookings->map(fn(Booking $booking) => $this->transformBooking($booking, true))->values(),
                'completed_bookings' => $completedBookings->map(fn(Booking $booking) => $this->transformBooking($booking, false))->values(),
                'gift_cards' => $giftCards->map(fn(GiftCard $giftCard) => $this->transformGiftCard($giftCard))->values(),
            ],
        ]);
    }

    public function update(Request $request): JsonResponse
    {
        $user = Auth::user();

        $data = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'mobile' => 'required|string|max:20|unique:users,mobile,' . $user->id,
            'email' => 'nullable|email|max:255|unique:users,email,' . $user->id,
            'address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'date_of_birth' => 'nullable|date|before:today',
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        if ($request->hasFile('profile_image')) {
            $image = $request->file('profile_image');
            $imageName = 'user_' . $user->id . '_' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('profile_images'), $imageName);
            $data['avatar'] = 'profile_images/' . $imageName;
        }

        $user->update($data);

        return response()->json([
            'status' => true,
            'message' => __('messages.profile_updated'),
            'data' => [
                'user' => [
                    'id' => $user->id,
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'full_name' => trim(($user->first_name ?? '') . ' ' . ($user->last_name ?? '')),
                    'email' => $user->email,
                    'mobile' => $user->mobile,
                    'avatar' => $this->resolveUrl($user->avatar ?: $user->profile_image),
                    'profile_image' => $this->resolveUrl($user->profile_image),
                    'date_of_birth' => $this->formatDate($user->date_of_birth),
                    'city' => $user->city,
                    'country' => $user->country,
                    'address' => $user->address,
                ],
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
                    'employee_name' => $service->employee->full_name ?? trim(($service->employee->first_name ?? '') . ' ' . ($service->employee->last_name ?? '')),
                    'price' => (float) ($service->service->default_price ?? $service->service_price ?? 0),
                ];
            })->values(),
        ];
    }

    private function transformGiftCard(GiftCard $giftCard): array
    {
        return [
            'id' => $giftCard->id,
            'recipient_name' => $giftCard->recipient_name,
            'recipient_phone' => $giftCard->recipient_phone,
            'message' => $giftCard->message,
            'payment_status' => (int) $giftCard->payment_status,
            'created_at' => optional($giftCard->created_at)->format('Y-m-d H:i:s'),
            'services' => collect($giftCard->services_list ?? [])
                ->map(function ($service) {
                    return [
                        'id' => data_get($service, 'id'),
                        'name' => $this->localizedValue(data_get($service, 'name')),
                    ];
                })
                ->values(),
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
