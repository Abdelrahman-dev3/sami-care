<?php

namespace App\Http\Controllers;

use App\Models\HomeBookService;
use App\Models\ServiceHome;
use App\Models\StaffHome;
use App\Models\User;
use App\Models\Branch;
use App\Models\ServiceGroupHome;
use App\Models\StaffWorkingHour;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Package\Models\UserPackage;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Modules\Booking\Models\Booking;
use Modules\Package\Models\SubmitBookingPackage;
use Modules\Category\Models\Category;
use Modules\Service\Models\Service;
use Illuminate\Support\Facades\Log;
use Modules\Booking\Models\BookingService;
use Modules\BussinessHour\Models\BussinessHour;
use Modules\Package\Models\BookingPackages;
use Modules\Package\Models\Package;


class HomeBookingController extends Controller
{
    
    public function branchs($id)
    {
        $branches = Branch::where('status' , 1)->whereNull('deleted_by')->whereHas('address', function ($query) use ($id) {
            $query->where('state', $id);
        })
        ->with('address.state_data')
        ->get();
    
        return response()->json($branches);
}
    
    public function allbranchs()
    {
        $branches = Branch::where('status' ,  1)->whereNull('deleted_by')->get();
    
        return response()->json($branches);
    }
    
    public function getServiceGroups(Request $request)
    {
        $is_home = (int) $request->get('is_home');
    
        $query = DB::table('categories')
            ->whereNull('parent_id')
            ->whereNull('deleted_at')
            ->where('status', 1);
    
        if ($is_home) {
            $query->where('is_visible', 1);
        }
    
        $groups = $query->orderBy('sort_order')->orderBy('id')->get()->map(function ($item) {
    
            $media = DB::table('media')
                ->where('model_type', 'Modules\\Category\\Models\\Category')
                ->where('model_id', $item->id)
                ->where('collection_name', 'feature_image')
                ->first();
    
            $item->image = $media
                ? asset('storage/uploads/' . $media->id . '/' . $media->file_name)
                : asset('images/default.jpg');
    
            return $item;
        });
    
        return response()->json($groups);
}
    
    public function getServicesByGroup($serviceGroupId, $branchId)
    {
        if($branchId != 0){
        $branch = Branch::find($branchId);
    
        $services = $branch->services()
            ->where('category_id', $serviceGroupId)
            ->where('status', 1)
            ->where('is_visible', 0)
            ->get();
        }else{
        $services = DB::table('services')
            ->where('category_id', $serviceGroupId)
            ->where('status', 1)
            ->where('is_visible', 1)
            ->whereNull('deleted_by')
            ->whereNull('deleted_at')
            ->get();
        }
        return response()->json($services);
}
    
    public function index(Request $request) 
    {
        $branchId = (int) $request->get('branch_id');
        $serviceId = (int) $request->get('service_id');
    
        $query = DB::table('users')
            ->join('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
            ->join('roles', 'roles.id', '=', 'model_has_roles.role_id')
            ->join('branch_employee', 'users.id', '=', 'branch_employee.employee_id')
            ->join('service_employees', 'users.id', '=', 'service_employees.employee_id')
            ->where('roles.name', 'employee')
            ->where('model_has_roles.model_type', \App\Models\User::class)
            ->where('users.is_manager', 0)
            ->where('users.status', 1)
            ->whereNull('users.deleted_at');
    
        if ($branchId != 0) {
            $query->where('branch_employee.branch_id', $branchId);
        }
    
        if ($branchId == 0) {
            $query->where('show_in_home_booking', 1);
        }
    
        if ($serviceId != 0) {
            $query->where('service_employees.service_id', $serviceId);
        }
    
        $employees = $query->select('users.*')->get();
    
        return response()->json($employees);
}

    public function getAvailableTimes(Request $request ,$date, $staffId)
    {
        $timezone = 'Asia/Riyadh'; 
        
        $user = User::find($staffId);
        if (!$user) { 
            return response()->json([]);
        }
        
        $branchId = optional($user->branch)->branch_id;
        if (!$branchId) {
            return response()->json([]);
        }

        $baseShiftId = $user->shift?->shift_id;
        $shift = $this->resolveWeeklyRotatingShiftId($baseShiftId, $date);


        try {
            $dayName = strtolower(Carbon::createFromFormat('Y-m-d', $date, $timezone)->format('l'));
        } catch (\Throwable $e) {
            return response()->json([]);
        }
        
        $serve_book_min = max(1, (int) $request->query('Increasing', 30));

        $workingHours = BussinessHour::where('branch_id', $branchId)->where('day', $dayName)->where('is_holiday', 0)->where('shift_id', $shift)->orderBy('id', 'desc')->first();

        if (!$workingHours) {
            return response()->json([]);
        }

        $workStartTime = Carbon::createFromFormat('H:i:s', $workingHours->start_time);
        $workEndTime = Carbon::createFromFormat('H:i:s', $workingHours->end_time);
        $bookedTimes = BookingService::where('employee_id', $staffId)->whereDate('start_date_time', $date)
            ->whereHas('booking', function ($q) {
                $q->whereIn('status', ['pending', 'confirmed', 'check_in']);
            })
            ->get(['start_date_time', 'duration_min'])
            ->flatMap(function ($booking) {
                $times = [];
                $start = Carbon::parse($booking->start_date_time);
                $duration = max(1, (int) ($booking->duration_min ?? 0));
                $steps = floor($duration / 1);
                for ($i = 0; $i < $steps; $i++) {
                    $times[] = $start->copy()->addMinutes($i * 1)->format('H:i');
                }

                return $times;
            })->unique()->values()->toArray();


        $breaks = $this->normalizeBreaks($workingHours->breaks, $date);
        
        $availableTimes = [];

        $workStart = Carbon::parse($date . ' ' . $workStartTime->format('H:i'), $timezone);
        $workEnd = Carbon::parse($date . ' ' . $workEndTime->format('H:i'), $timezone);
        $current = $workStart->copy();

        $isToday = Carbon::createFromFormat('Y-m-d', $date, $timezone)->isToday();
        $now = Carbon::now($timezone)->startOfMinute();

        while ($current < $workEnd) {
            $timeStr = $current->format('H:i');
        
            if ($isToday && $current->lt($now)) {
                $current->addMinute();
                continue;
            }
        
            $isInBreak = false;
            foreach ($breaks as $break) {
                if ($current->gte($break['start']) && $current->lt($break['end'])) {
                    $isInBreak = true;
                    break;
                }
            }
        
            if (!$isInBreak && !in_array($timeStr, $bookedTimes, true)) {
                $availableTimes[] = $timeStr;
            }
        
            $current->addMinute();
        }
        $availableTimes2 = $this->filterAvailableTimes($availableTimes, $serve_book_min);
        $availableTimes3 = $this->filterAvailableTimesNotConf($availableTimes2, $bookedTimes, $serve_book_min);
        $availableTimes4 = $this->pickSlotStartsByDuration($availableTimes3, $serve_book_min, $workStart, $workEnd);

        return response()->json($availableTimes4);
    }

    private function pickSlotStartsByDuration(array $availableTimes, int $serviceDuration, Carbon $workStart, Carbon $workEnd): array
    {
        $serviceDuration = max(1, (int) $serviceDuration);
        if (empty($availableTimes)) {
            return [];
        }

        $lookup = array_fill_keys($availableTimes, true);
        $slots = [];
        $cursor = $workStart->copy();

        while ($cursor->copy()->addMinutes($serviceDuration)->lte($workEnd)) {
            $time = $cursor->format('H:i');
            if (isset($lookup[$time])) {
                $slots[] = $time;
            }
            $cursor->addMinutes($serviceDuration);
        }

        return $slots;
    }

    private function normalizeBreaks($breaks, string $date): array
    {
        if (is_string($breaks)) {
            $breaks = json_decode($breaks, true);
        }

        if (!is_array($breaks)) {
            return [];
        }

        $normalized = [];

        foreach ($breaks as $break) {
            if (is_object($break)) {
                $break = (array) $break;
            }

            if (!is_array($break)) {
                continue;
            }

            $startBreak = $break['start_break'] ?? $break['start'] ?? null;
            $endBreak = $break['end_break'] ?? $break['end'] ?? null;

            if (!$startBreak || !$endBreak) {
                continue;
            }

            try {
                $start = Carbon::parse($date . ' ' . $startBreak, 'Asia/Riyadh')->startOfMinute();
                $end = Carbon::parse($date . ' ' . $endBreak, 'Asia/Riyadh')->startOfMinute();
            } catch (\Throwable $e) {
                continue;
            }

            if ($end->lte($start)) {
                continue;
            }

            $normalized[] = [
                'start' => $start,
                'end' => $end,
            ];
        }

        return $normalized;
    }

    private function resolveWeeklyRotatingShiftId($baseShiftId, string $date)
    {
        if (!$baseShiftId) {
            return $baseShiftId;
        }
    
        $activeShiftIds = DB::table('shifts')->where('status', 1)->orderBy('id')->pluck('id')->map(fn ($id) => (int) $id)->values();
    
        // Weekly rotation requires exactly two active shifts (morning/evening).
        if ($activeShiftIds->count() !== 2 || !$activeShiftIds->contains((int) $baseShiftId)) {
            return $baseShiftId;
        }

        $requestedWeekStart = Carbon::createFromFormat('Y-m-d', $date, 'Asia/Riyadh')->startOfWeek(Carbon::SUNDAY);
        $currentWeekStart = Carbon::createFromFormat('Y-m-d', '2026-02-15', 'Asia/Riyadh')->startOfWeek(Carbon::SUNDAY);
        $weekDiff = $currentWeekStart->diffInWeeks($requestedWeekStart);
    
        if ($weekDiff % 2 === 0) {
            return (int) $baseShiftId;
        }
    
        return (int) $activeShiftIds->first(fn ($shiftId) => $shiftId !== (int) $baseShiftId);
    }

    public function store(Request $request)
    {
        try {
    
            $data = $request->validate([
                'customer_name'     => 'required|string|max:255',
                'mobile_no'         => 'required|string|max:20',
                'neighborhood'      => 'required|string|max:255',
                'gender'            => 'required|in:men,women',
                'service_group_id'  => 'required|exists:service_group_homes,id',
                'service_id'        => 'required|exists:service_homes,id',
                'date'              => 'required|date',
                'time'              => 'required|string',
                'branch'            => 'required|exists:branches,id',
                'staff_id'          => 'required|exists:staff_homes,id',
            ]);
    
            $booking = new Booking();
            $booking->note = 'Customer: ' . $data['customer_name'] . ', Mobile: ' . $data['mobile_no'] .
                ', Neighborhood: ' . $data['neighborhood'] . ', Gender: ' . $data['gender'];
            $booking->status = 'pending';
            $booking->start_date_time = $data['date'] . ' ' . $data['time'];
            $booking->user_id = $data['staff_id'];
            $booking->branch_id = $data['branch'];
            $booking->created_by = 1;
    
            $booking->save();
    
            return response()->json(['message' => 'Booking saved successfully']);
        } catch (\Exception $e) {
            Log::error('Booking Store Error: ' . $e->getMessage(), [
                'stack' => $e->getTraceAsString(),
                'request_data' => $request->all(),
            ]);
    
            return response()->json([
                'message' => 'حدث خطأ أثناء حفظ الحجز',
                'error' => $e->getMessage(),
            ], 500);
        }
}

    public function storePackageBooking(Request $request)
    {
        $data = $request->validate([
            'package_id'  => 'required|integer',
            'branch_id'   => 'required|integer|exists:branches,id',
            'date'        => 'required|date|after_or_equal:today',
            'time'        => 'required|string',
            'employye_id' => 'required|integer',
            'notes'       => 'nullable|string|max:1000',
            'total_price' => 'required|numeric|min:0',
        ]);

        if (!auth()->check()) {
            session(['package_booking' => $data]);
            return response()->json(['status' => 'guest']);
        }

        return $this->completePackageBooking($data);
    }

    public function completePackageBooking(array $data = null)
    {
        $data = $data ?? session('package_booking');
    
        if (!$data) {
            return redirect()->route('frontend.Packages');
        }
    
        DB::beginTransaction();
    
        try {
            $this->persistPackageBooking($data);
            DB::commit();
            session()->forget('package_booking');
    
            if (request()->expectsJson()) {
                return response()->json(['status' => 'saved']);
            }
    
            return redirect()
                ->route('frontend.Packages')
                ->with('success', 'تم حفظ الحجز بنجاح');
    
        } catch (\Throwable $e) {
            DB::rollBack();
        
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(), 
                'file'    => $e->getFile(),
                'line'    => $e->getLine(),
            ], 500);
        }
    }
    
    private function persistPackageBooking(array $data): void
    {
    
            $booking = Booking::create([
                'status'          => 'pending',
                'start_date_time' => $data['date'].' '.$data['time'],
                'user_id'         => auth()->id(),
                'branch_id'       => $data['branch_id'],
                'note'            => $data['notes'] ?? null,
                'created_by'      => auth()->id(),
            ]);
            $package = Package::findOrFail($data['package_id']);
            $packagePrice = $package->package_price;
            $employeeId = $data['employye_id']; 
            
            BookingPackages::create([
                'booking_id'   => $booking->id,
                'package_id'   => $data['package_id'],
                'employee_id'   => $employeeId,
                'user_id'      => auth()->id(),
                'package_price'  => $packagePrice,
                'created_by'    => auth()->id(),
            ]);
            
            UserPackage::create([
                'booking_id'   => $booking->id,
                'employee_id'        => $employeeId,
                'user_id'      => auth()->id(),
                'package_price'  => $packagePrice,
                'purchase_date'    => now(),
                'package_id'   => $data['package_id'],
            ]);
        }

    //        Payment Methods
    public function handlePaymentResult(Request $request)
    {
        $tapId = $request->get('tap_id');
    
        if (!$tapId) {
            return response()->json([
                'status' => false,
                'message' => 'No tap_id provided.'
            ], 400);
        }
    
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TAP_SECRET_KEY'),
        ])->get("https://api.tap.company/v2/charges/{$tapId}");
    
        $charge = $response->json();
    
        if (isset($charge['status']) && $charge['status'] === 'CAPTURED') {
            return response()->json([
                'status' => true,
                'message' => 'Payment captured successfully.',
                'data' => $charge,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Payment failed or was declined.',
                'data' => $charge,
            ], 402);
        }
    }

/*-----------------------Helper function to filter time---------------------------*/
    function filterAvailableTimes($availableTimes, $serviceDuration) {
        $filtered = [];
        $serviceDuration = max(1, (int) $serviceDuration);

        if (empty($availableTimes)) {
            return $filtered;
        }

        $availableLookup = array_fill_keys($availableTimes, true);

        foreach ($availableTimes as $startTime) {
            $start = Carbon::createFromFormat('H:i', $startTime);
            $isContinuous = true;

            for ($minute = 0; $minute < $serviceDuration; $minute++) {
                $checkTime = $start->copy()->addMinutes($minute)->format('H:i');
                if (!isset($availableLookup[$checkTime])) {
                    $isContinuous = false;
                    break;
                }
            }

            if ($isContinuous) {
                $filtered[] = $startTime;
            }
        }

        return $filtered;
    }
    /*-----------------------Helper function to filter time---------------------------*/
    function filterAvailableTimesNotConf($availableTimes, $bookedTimes, $serve_book_min) {
        $result = [];
    
        foreach ($availableTimes as $time) {
            $start = strtotime($time);
            $end   = $start + ($serve_book_min * 60);
    
            $conflict = false;
    
            foreach ($bookedTimes as $booked) {
                $bookedTimestamp = strtotime($booked);
    
                if ($bookedTimestamp >= $start && $bookedTimestamp < $end) {
                    $conflict = true;
                    break;
                }
            }
    
            if (!$conflict) {
                $result[] = $time;
            }
        }
    
        return $result;
    }

}
