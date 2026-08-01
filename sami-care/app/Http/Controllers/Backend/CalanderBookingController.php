<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
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
}
