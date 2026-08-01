<?php

namespace App\Http\Controllers;

use App\Models\BookingReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingReviewFrontendController extends Controller
{
    /**
     * Store a new booking review.
     */
    public function store(Request $request)
    {
        $request->validate([
            'booking_id'  => 'required|exists:bookings,id',
            'rating'      => 'required|integer|min:1|max:5',
            'review_text' => 'nullable|string|max:1000',
        ]);

        $userId = Auth::id();

        // Check if user already reviewed this booking
        $existing = BookingReview::where('booking_id', $request->booking_id)
            ->where('user_id', $userId)
            ->first();

        if ($existing) {
            // Update existing review
            $existing->update([
                'rating'      => $request->rating,
                'review_text' => $request->review_text,
            ]);

            return response()->json([
                'status'  => true,
                'message' => 'تم تحديث تقييمك بنجاح',
                'data'    => $existing,
            ]);
        }

        // Create new review
        $review = BookingReview::create([
            'booking_id'  => $request->booking_id,
            'user_id'     => $userId,
            'rating'      => $request->rating,
            'review_text' => $request->review_text,
            'is_approved' => 0,
            'status'      => 1,
        ]);

        return response()->json([
            'status'  => true,
            'message' => 'تم إرسال تقييمك بنجاح، شكراً لك!',
            'data'    => $review,
        ]);
    }

    /**
     * Get review for a specific booking by the current user.
     */
    public function getByBooking($bookingId)
    {
        $userId = Auth::id();

        $review = BookingReview::where('booking_id', $bookingId)
            ->where('user_id', $userId)
            ->first();

        return response()->json([
            'status'      => true,
            'has_review'  => $review !== null,
            'data'        => $review,
        ]);
    }
}
