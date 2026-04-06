<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Modules\Booking\Models\Booking;
use Modules\Booking\Models\BookingService;

class WaitingBookingSyncService
{
    public function syncPaidBookings(array $bookingIds): void
    {
        $bookingIds = array_values(array_unique(array_filter($bookingIds)));

        if (empty($bookingIds)) {
            return;
        }

        $baseUrl = (string) config('services.waiting_device.base_url');

        if ($baseUrl === '') {
            Log::warning('Waiting device sync skipped: missing base URL', [
                'booking_ids' => $bookingIds,
            ]);

            return;
        }

        $bookings = Booking::with(['user:id,first_name,last_name,mobile','bookingService',])
            ->whereIn('id', $bookingIds)
            ->paid()
            ->get();

        foreach ($bookings as $booking) {
            foreach ($booking->bookingService as $bookingService) {
                $this->syncBookingService($booking, $bookingService, $baseUrl);
            }
        }
    }

    public function buildPayload(Booking $booking, BookingService $bookingService): array
    {
        $startAt = Carbon::parse($bookingService->start_date_time ?: $booking->start_date_time);
        $user = $booking->user;

        return [
            'company_id' => 5,
            'branch_id' => (int) $booking->branch_id,
            'service_id' => (int) $bookingService->service_id,
            'employee_id' => (int) $bookingService->employee_id,
            'date' => $startAt->format('Y-m-d'),
            'start_time' => $startAt->format('H:i'),
            'name' => $this->resolveCustomerName($user),
            'phone' => (string) ($user?->mobile ?? ''),
        ];
    }

    private function syncBookingService(Booking $booking, BookingService $bookingService, string $baseUrl): void
    {
        $payload = $this->buildPayload($booking, $bookingService);
        $endpoint = rtrim($baseUrl, '/') . '/public/bookings';

        try {
            $response = Http::timeout((int) config('services.waiting_device.timeout', 10))
                ->acceptJson()
                ->post($endpoint, $payload);

            if (! $response->successful()) {
                Log::error('Waiting device booking sync failed', [
                    'booking_id' => $booking->id,
                    'booking_service_id' => $bookingService->id,
                    'status' => $response->status(),
                    'body' => $response->body(),
                    'payload' => $payload,
                ]);
            }
        } catch (\Throwable $exception) {
            Log::error('Waiting device booking sync exception', [
                'booking_id' => $booking->id,
                'booking_service_id' => $bookingService->id,
                'message' => $exception->getMessage(),
                'payload' => $payload,
            ]);
        }
    }

    private function resolveCustomerName(?User $user): string
    {
        $name = trim((string) ($user?->full_name ?? ''));

        if ($name !== '') {
            return $name;
        }

        $name = trim(implode(' ', array_filter([
            $user?->first_name,
            $user?->last_name,
        ])));

        return $name !== '' ? $name : 'Test Customer';
    }
}
