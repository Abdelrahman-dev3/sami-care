<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\BookingCart;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Modules\Booking\Models\Booking;
use Modules\Booking\Models\BookingService;
use Modules\Service\Models\Service;

class CalanderBookingController extends Controller
{
    public function getservices()
    {
        $services = Service::all();

        return $services;
    }

    public function emplouee()
    {
        $employees = User::role('employee')->get();

        return response()->json([
            'employees' => $employees,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'n_name' => 'required|string|max:255',
                'mobile_no' => 'required|string|max:20',
                'neighborhood' => 'required|string|max:255',
                'gender' => 'required|in:men,women',
                'service_group_id' => 'required|integer',
                'service_id' => 'required|integer|exists:services,id',
                'date' => 'required|date',
                'time' => 'required|string',
                'branch' => 'nullable|integer|exists:branches,id',
                'staff_id' => 'required|integer|exists:users,id',
                'agreed' => 'nullable|boolean',
                'auto_change_staff' => 'nullable|boolean',
                'note' => 'nullable',
            ]);

            $startDateTime = Carbon::createFromFormat('Y-m-d h:i A', $data['date'] . ' ' . $data['time'])->format('Y-m-d H:i:s');

            $booking = new Booking();
            $booking->start_date_time = $startDateTime;
            $booking->user_id = $data['staff_id'];
            $booking->branch_id = $data['branch'] ?? 1;
            $booking->created_by = Auth::id() ?? 1;
            $booking->status = 'pending';
            $booking->save();

            BookingService::create([
                'booking_id' => $booking->id,
                'service_id' => $data['service_id'],
                'employee_id' => $data['staff_id'],
                'start_date_time' => $startDateTime,
                'service_price' => Service::find($data['service_id'])?->default_price ?? 0,
                'duration_min' => 30,
                'sequance' => 1,
                'created_by' => Auth::id() ?? 1,
            ]);

            return response()->json([
                'message' => 'تم إنشاء الحجز بنجاح.',
                'booking' => $booking,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Booking Store Error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'data' => $request->all(),
            ]);

            return response()->json([
                'message' => 'حدث خطأ أثناء حفظ الحجز.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'clientName' => ['required', 'string'],
            'clientPhone' => ['required', 'string'],
            'location' => ['required', 'string'],
            'bookingDate' => ['required', 'date'],
            'bookingTime' => ['required', 'string'],
            'service' => ['required', 'exists:services,id'],
            'staff_id' => ['required', 'exists:staff_homes,id'],
            'branch' => ['nullable', 'string'],
            'gender' => ['nullable', 'in:male,female'],
            'service_group_id' => ['nullable', 'exists:service_group_homes,id'],
            'agreed' => ['nullable', 'boolean'],
            'auto_change_staff' => ['nullable', 'boolean'],
        ]);

        $booking = BookingCart::findOrFail($id);

        $booking->update([
            'n_name' => $data['clientName'],
            'mobile_no' => $data['clientPhone'],
            'neighborhood' => $data['location'],
            'branch' => $data['branch'] ?? null,
            'gender' => $data['gender'] ?? null,
            'service_group_id' => $data['service_group_id'] ?? null,
            'service_id' => $data['service'],
            'date' => $data['bookingDate'],
            'time' => $data['bookingTime'],
            'staff_id' => $data['staff_id'],
            'agreed' => $data['agreed'] ?? false,
            'auto_change_staff' => $data['auto_change_staff'] ?? false,
        ]);

        return response()->json([
            'message' => 'Booking updated successfully',
            'booking' => $booking,
        ]);
    }

    public function destroy($id)
    {
        $booking = BookingCart::findOrFail($id);
        $booking->delete();

        return response()->json([
            'message' => 'Booking deleted successfully.',
        ]);
    }

    public function getAllByTime(Request $request)
    {
        $request->validate([
            'date' => 'required|date',
            'time' => 'required|string',
        ]);

        $bookings = BookingCart::where('date', $request->date)
            ->where('time', $request->time)
            ->get();

        return response()->json([
            'bookings' => $bookings,
        ]);
    }

    public function getAllByDay(Request $request)
    {
        $request->validate([
            'date' => 'required|date',
        ]);

        $bookings = BookingCart::where('date', $request->date)->get();

        return response()->json([
            'bookings' => $bookings,
        ]);
    }
}
