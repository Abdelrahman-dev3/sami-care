<?php
namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Modules\Booking\Models\Booking;

class BookingArrival
{
    public function update(int $id, bool $arrived, int $actor, string $source): Booking
    {
        return DB::transaction(function () use ($id, $arrived, $actor, $source) {
            $booking = Booking::query()->lockForUpdate()->findOrFail($id);
            if (! in_array($booking->status, ['pending', 'confirmed', 'check_in'], true)) {
                throw ValidationException::withMessages(['arrived' => 'لا يمكن تغيير تأكيد الوصول لحجز ملغي أو منتهٍ.']);
            }
            // Repeated scans preserve the original arrival time and confirming employee.
            if ($arrived === (bool) $booking->arrived_at) return $booking;
            $booking->arrived_at = $arrived ? now() : null;
            $booking->arrival_confirmed_by = $arrived ? $actor : null;
            $booking->arrival_source = $arrived ? $source : null;
            $booking->save();
            return $booking;
        });
    }
}
