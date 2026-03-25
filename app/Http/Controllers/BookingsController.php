<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\World\Models\State;
use Modules\Product\Models\Product;
use Modules\World\Models\City;

class BookingsController extends Controller
{
    public function salon(Request $request){
        return view('frontend.bookings.salon-booking.create', $this->salonPageData($request));
    }

    public function salonModern(Request $request)
    {
        return view('frontend.bookings.salon-booking.create-modern', $this->salonPageData($request));
    }

    public function salonSignature(Request $request)
    {
        return view('frontend.bookings.salon-booking.create-signature', $this->salonPageData($request));
    }

    public function home(Request $request){
        $b = $request->query('branch');
        $States = State::where('status' , 1)->get();
        $suggest = Product::with(['media' , 'categories'])->where('status', 1)->where('is_featured', 1)->where('deleted_at', null)->get();
        $cities = City::where('status' , 1)->get();
        return view('frontend.bookings.home-booking.create' , compact('States','b' , 'suggest' ,'cities'));
    }

    private function salonPageData(Request $request): array
    {
        $b = $request->query('branch');
        $States = State::where('status', 1)->get();
        $first_States = State::where('status', 1)->first();
        $suggest = Product::with(['media', 'categories'])
            ->where('status', 1)
            ->where('is_featured', 1)
            ->where('deleted_at', null)
            ->take(3)
            ->get();
        $setting = DB::table('settings')->where('name', 'service_duration_visibility')->first();
        $showDuration = $setting ? (bool) $setting->val : false;

        return compact('States', 'b', 'suggest', 'first_States', 'showDuration');
    }
}
