<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Services\BookingArrival;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Modules\Booking\Models\Booking;

class BookingArrivalController extends Controller
{
    public function index(Request $request)
    {
        $request->validate(['booking_id' => 'nullable|integer|min:1']);
        $bookings = Booking::with(['user', 'branch'])->when($request->booking_id,
            fn ($query) => $query->where('id', $request->booking_id))->latest('id')->paginate(20)->withQueryString();
        return view('backend.booking-arrival.index', compact('bookings'));
    }

    public function show(Booking $booking)
    {
        $booking->load(['user', 'branch', 'booking_service.service', 'arrivalConfirmedBy']);
        $qrUrl = URL::signedRoute('backend.booking-arrival.scan', ['booking' => $booking->id]);
        $fromScan = request()->routeIs('backend.booking-arrival.scan');
        return view('backend.booking-arrival.show', compact('booking', 'qrUrl', 'fromScan'));
    }

    public function update(Request $request, Booking $booking, BookingArrival $arrival)
    {
        $data = $request->validate(['arrived' => 'required|boolean', 'source' => 'required|in:manual,qr']);
        if ($data['source'] === 'qr') {
            // A QR submission must carry the same valid signed URL used to open the scan page.
            abort_unless($request->hasValidSignature(), 403);
        }
        $arrival->update($booking->id, (bool) $data['arrived'], $request->user()->id, $data['source']);
        return back()->with('success', $data['arrived'] ? 'تم تأكيد وصول العميل.' : 'تم إلغاء تأكيد الوصول.');
    }
}
