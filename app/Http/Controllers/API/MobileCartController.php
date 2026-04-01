<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GiftCard;
use App\Services\CartExpirationService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\Booking\Models\Booking;
use Modules\Booking\Models\BookingService;
use Modules\Package\Models\BookingPackages;
use Modules\Package\Models\Package;
use Modules\Package\Models\UserPackage;
use Modules\Product\Models\Cart;
use Modules\Service\Models\Service;

class MobileCartController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id;
        app(CartExpirationService::class)->clearExpired($userId);

        $bookings = Booking::with(['service.service', 'service.employee', 'services', 'paidTransaction'])
            ->where('created_by', $userId)
            ->whereNotIn('status', ['cancelled', 'completed'])
            ->where('payment_type', 'cart')
            ->unpaid()
            ->whereNull('deleted_by')
            ->get();

        $products = Cart::with('product')
            ->where('user_id', $userId)
            ->get();

        $giftCards = GiftCard::where('user_id', $userId)
            ->where('payment_status', 0)
            ->get();

        $packageBookings = BookingPackages::query()
            ->whereHas('booking', function ($query) use ($userId) {
                $query->where('created_by', $userId)
                    ->whereNotIn('status', ['cancelled', 'completed'])
                    ->where('payment_type', 'cart')
                    ->unpaid()
                    ->whereNull('deleted_by');
            })
            ->with(['package', 'booking.branch', 'employee'])
            ->get();

        $serviceTotal = (float) $bookings->sum(function ($booking) {
            return $booking->service ? ((float) ($booking->service->service_price ?? 0)) : 0;
        });

        $productTotal = (float) $products->sum(function ($item) {
            $price = (float) ($item->product->max_price ?? $item->product->min_price ?? 0);
            return $price * ((int) ($item->qty ?? 1));
        });

        $giftTotal = (float) $giftCards->sum(fn ($gift) => (float) ($gift->subtotal ?? 0));
        $packageTotal = (float) $packageBookings->sum(fn ($item) => (float) ($item->package_price ?? $item->package?->package_price ?? 0));

        $discountTotal = (float) $bookings->sum(function ($booking) {
            return (float) $booking->services->sum(fn ($service) => (float) ($service->discount_amount ?? 0));
        });

        $cartTotal = $serviceTotal + $productTotal + $giftTotal + $packageTotal;
        $finalTotal = $cartTotal - $discountTotal;

        return response()->json([
            'success' => true,
            'data' => [
                'bookings' => $bookings,
                'products' => $products,
                'gift_cards' => $giftCards,
                'packages' => $packageBookings->map(function (BookingPackages $item) {
                    $package = $item->package;

                    return [
                        'id' => $item->id,
                        'booking_id' => $item->booking_id,
                        'package_id' => $item->package_id,
                        'type' => $package->type ?? Package::TYPE_PACKAGE,
                        'name' => $this->localizedValue($package->name),
                        'price' => (float) ($item->package_price ?? $package->package_price ?? 0),
                        'branch' => [
                            'id' => $item->booking?->branch_id,
                            'name' => $this->localizedValue($item->booking?->branch?->name),
                        ],
                        'employee' => [
                            'id' => $item->employee_id,
                            'name' => $item->employee?->full_name ?? trim(($item->employee?->first_name ?? '').' '.($item->employee?->last_name ?? '')),
                        ],
                        'booking_date' => $this->formatDate($item->booking?->start_date_time, 'Y-m-d'),
                        'booking_time' => $this->formatDate($item->booking?->start_date_time, 'H:i'),
                        'notes' => $item->booking?->note,
                        'image' => $package?->feature_image,
                    ];
                })->values(),
                'summary' => [
                    'bookings_count' => $bookings->count(),
                    'products_count' => $products->count(),
                    'gift_cards_count' => $giftCards->count(),
                    'packages_count' => $packageBookings->count(),
                    'service_total' => $serviceTotal,
                    'product_total' => $productTotal,
                    'gift_total' => $giftTotal,
                    'package_total' => $packageTotal,
                    'discount_total' => $discountTotal,
                    'cart_total' => $cartTotal,
                    'final_total' => $finalTotal,
                ],
            ],
        ]);
    }

    public function storePackage(Request $request)
    {
        $validated = $request->validate([
            'package_id' => ['required', 'integer', 'exists:packages,id'],
            'branch_id' => ['nullable', 'integer', 'exists:branches,id'],
            'date' => ['required', 'date', 'after_or_equal:today'],
            'time' => ['required', 'date_format:H:i'],
            'employee_id' => ['nullable', 'integer'],
            'employye_id' => ['nullable', 'integer'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ]);

        $user = $request->user();
        $package = Package::query()->findOrFail($validated['package_id']);

        if (! $package->isActiveForFrontend()) {
            return response()->json([
                'success' => false,
                'message' => __('package.package_not_available'),
            ], 422);
        }

        $employeeId = (int) ($validated['employee_id'] ?? $validated['employye_id'] ?? 0);
        $branchId = (int) ($validated['branch_id'] ?? $package->branch_id ?? 0);

        if ($branchId <= 0) {
            return response()->json([
                'success' => false,
                'message' => 'Branch is required.',
            ], 422);
        }

        if ($employeeId <= 0) {
            return response()->json([
                'success' => false,
                'message' => 'Employee is required.',
            ], 422);
        }

        $startDateTime = \Carbon\Carbon::createFromFormat('Y-m-d H:i', $validated['date'].' '.$validated['time']);

        $data = DB::transaction(function () use ($user, $package, $branchId, $employeeId, $validated, $startDateTime) {
            $booking = Booking::create([
                'status' => 'pending',
                'start_date_time' => $startDateTime,
                'user_id' => $user->id,
                'branch_id' => $branchId,
                'note' => $validated['notes'] ?? null,
                'created_by' => $user->id,
                'payment_type' => 'cart',
            ]);

            $bookingPackage = BookingPackages::create([
                'booking_id' => $booking->id,
                'package_id' => $package->id,
                'employee_id' => $employeeId,
                'user_id' => $user->id,
                'package_price' => (float) ($package->package_price ?? 0),
                'created_by' => $user->id,
            ]);

            UserPackage::create([
                'booking_id' => $booking->id,
                'employee_id' => $employeeId,
                'user_id' => $user->id,
                'package_price' => (float) ($package->package_price ?? 0),
                'purchase_date' => now(),
                'package_id' => $package->id,
            ]);

            return [
                'booking' => $booking,
                'booking_package' => $bookingPackage,
            ];
        });

        return response()->json([
            'success' => true,
            'message' => __('messages.booking_added_to_cart'),
            'data' => [
                'booking_id' => $data['booking']->id,
                'booking_package_id' => $data['booking_package']->id,
                'package_id' => $package->id,
                'package_type' => $package->type ?? Package::TYPE_PACKAGE,
                'package_name' => $this->localizedValue($package->name),
                'package_price' => (float) ($package->package_price ?? 0),
                'branch_id' => $branchId,
                'employee_id' => $employeeId,
                'date' => $validated['date'],
                'time' => $validated['time'],
            ],
        ], 201);
    }

    public function storeBooking(Request $request)
    {
        $validated = $request->validate([
            'branch' => ['required', 'integer'],
            'services' => ['required', 'array', 'min:1'],
            'services.*.subServices' => ['required', 'array', 'min:1'],
            'services.*.subServices.*.id' => ['required', 'integer', 'exists:services,id'],
            'services.*.subServices.*.date' => ['required', 'date_format:Y-m-d'],
            'services.*.subServices.*.time' => ['required', 'date_format:H:i'],
            'services.*.subServices.*.duration' => ['nullable', 'integer', 'min:1'],
            'services.*.subServices.*.staffId' => ['nullable', 'integer'],
            'customerName' => ['nullable', 'string'],
            'mobileNo' => ['nullable', 'string'],
            'neighborhood' => ['nullable', 'string'],
        ]);

        $user = $request->user();
        $branchId = (int) $validated['branch'];
        $createdBookingIds = [];

        DB::transaction(function () use ($validated, $user, $branchId, &$createdBookingIds) {
            foreach ($validated['services'] as $serviceGroup) {
                foreach ($serviceGroup['subServices'] as $subService) {
                    $startDateTime = \Carbon\Carbon::createFromFormat(
                        'Y-m-d H:i',
                        $subService['date'] . ' ' . $subService['time']
                    );

                    $booking = new Booking();

                    if ($branchId !== 0) {
                        $booking->note = 'Customer: ' . ($user->first_name ?? '') .
                            ', Mobile: ' . ($user->mobile ?? '') .
                            ', Service: ' . $subService['id'];
                    } else {
                        $booking->note = 'Customer Name: ' . ($validated['customerName'] ?? '') .
                            ', Customer Mobile: ' . ($validated['mobileNo'] ?? '') .
                            ', Neighborhood: ' . ($validated['neighborhood'] ?? '');
                    }

                    $booking->start_date_time = $startDateTime;
                    $booking->user_id = $user->id;
                    $booking->branch_id = $branchId ?: 1;
                    $booking->created_by = $user->id;
                    $booking->status = 'pending';
                    $booking->payment_type = 'cart';
                    $booking->save();

                    $bookingService = new BookingService();
                    $bookingService->booking_id = $booking->id;
                    $bookingService->service_id = $subService['id'];
                    $bookingService->employee_id = $subService['staffId'] ?? null;
                    $bookingService->start_date_time = $startDateTime;
                    $bookingService->service_price = Service::find($subService['id'])->default_price ?? 0;
                    $bookingService->duration_min = $subService['duration'] ?? null;
                    $bookingService->sequance = 1;
                    $bookingService->created_by = $user->id;
                    $bookingService->save();

                    $createdBookingIds[] = $booking->id;
                }
            }
        });

        return response()->json([
            'success' => true,
            'message' => __('messages.booking_added_to_cart'),
            'data' => [
                'booking_ids' => $createdBookingIds,
                'count' => count($createdBookingIds),
            ],
        ], 201);
    }

    public function storeGiftCard(Request $request)
    {
        if ($request->filled('services') || $request->filled('location')) {
            $validated = $request->validate([
                'services' => ['required', 'array', 'min:1'],
                'services.*.subServices' => ['required', 'array', 'min:1'],
                'services.*.subServices.*.id' => ['required', 'integer', 'exists:services,id'],
                'services.*.subServices.*.price' => ['nullable', 'numeric', 'min:0'],
                'location' => ['required', 'array'],
                'location.recipient_name' => ['required', 'string', 'max:255'],
                'location.recipient_mobile' => ['required', 'string', 'max:20'],
                'location.message' => ['nullable', 'string', 'max:1000'],
            ]);

            $serviceIds = [];
            $subtotal = 0.0;

            foreach ($validated['services'] as $service) {
                foreach ($service['subServices'] as $subService) {
                    $serviceIds[] = (int) $subService['id'];
                    $subtotal += (float) ($subService['price'] ?? 0);
                }
            }

            $giftCard = GiftCard::create([
                'user_id' => $request->user()->id,
                'recipient_name' => $validated['location']['recipient_name'],
                'recipient_phone' => $validated['location']['recipient_mobile'],
                'requested_services' => $serviceIds,
                'message' => $validated['location']['message'] ?? null,
                'subtotal' => $subtotal,
                'payment_status' => 0,
            ]);

            return response()->json([
                'success' => true,
                'status' => true,
                'message' => __('messages.gift_added_success'),
                'data' => [
                    'gift_card_id' => $giftCard->id,
                    'subtotal' => (float) $giftCard->subtotal,
                ],
            ], 201);
        }

        $validated = $request->validate([
            'recipient_name' => ['required', 'string', 'max:255'],
            'recipient_phone' => ['required', 'string', 'max:20'],
            'requested_services' => ['required', 'array', 'min:1'],
            'requested_services.*' => ['integer', 'exists:services,id'],
            'optional_services' => ['nullable', 'string', 'max:100'],
        ]);

        $subtotal = (float) Service::whereIn('id', array_map('intval', $validated['requested_services']))->sum('default_price');

        $giftCard = GiftCard::create([
            'user_id' => $request->user()->id,
            'recipient_name' => $validated['recipient_name'],
            'recipient_phone' => $validated['recipient_phone'],
            'message' => $validated['optional_services'] ?? null,
            'requested_services' => $validated['requested_services'],
            'subtotal' => $subtotal,
            'payment_status' => 0,
        ]);

        return response()->json([
            'success' => true,
            'message' => __('messages.gift_added_success'),
            'data' => [
                'gift_card_id' => $giftCard->id,
                'subtotal' => (float) $giftCard->subtotal,
            ],
        ], 201);
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

    private function formatDate(mixed $value, string $format): ?string
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
}
