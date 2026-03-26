<?php

namespace App\Services\Payment;

use Modules\Booking\Models\Booking;
use Modules\Booking\Models\BookingTransaction;

class BookingTransactionRecorderService
{
    public function markBookingsPaid(array $bookingIds, string $transactionId, string $paymentMethod): void
    {
        foreach ($bookingIds as $bookingId) {
            BookingTransaction::create([
                'booking_id' => $bookingId,
                'external_transaction_id' => $transactionId,
                'transaction_type' => $paymentMethod,
                'payment_status' => 1,
            ]);
        }

        Booking::whereIn('id', $bookingIds)->update(['payment_status' => 1]);
    }
}
