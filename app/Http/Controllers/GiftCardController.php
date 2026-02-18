<?php

namespace App\Http\Controllers;

use App\Models\GiftCard;
use Illuminate\Support\Facades\Http;
use App\Models\Service;
use Illuminate\Http\Request;
use Modules\Category\Models\Category;
use Modules\Package\Models\Package;
use Modules\World\Models\State;
use Modules\Product\Models\Product;
use App\Models\Ad;


use Modules\Service\Models\Service as ServiceModel;

class GiftCardController extends Controller
{

public function index(Request $request)
{
    $b = $request->query('branch');
    $States = State::where('status' , 1)->get();
    $first_States = State::where('status' , 1)->first();
    $suggest = Product::with(['media' , 'categories'])->where('status', 1)->where('is_featured', 1)->where('deleted_at', null)->take(4)->get();
    return view('salon.gift', compact('b', 'States' ,'first_States' ,'suggest'));
}

public function store(Request $request)
{
    $user = auth()->user();
    $data = $request->all();
    $servicesIds = [];
    $total = 0;
    if (!$user) {
        return response()->json([
            'success' => false,
            'need_login' => true,
            'message' => 'يرجى تسجيل الدخول لإكمال الحجز.'
        ], 200);
    }
        if (!empty($data['services'])) {
            foreach ($data['services'] as $service) {
                if (!empty($service['subServices'])) {
                    foreach ($service['subServices'] as $sub) {
                        $servicesIds []= $sub['id'];
                        $total += $sub['price'];
                    }
                }
            }
        }
        
        
        $giftCard = GiftCard::create([
            'user_id' => $user->id,
            'delivery_method' => '',
            'sender_name' => $user->first_name ?? $user->username ?? '',
            'recipient_name' => $data['location']['recipient_name'],
            'sender_phone' => $user->mobile ?? '',
            'recipient_phone' => $data['location']['recipient_mobile'],
            'requested_services' => $servicesIds,
            'message' => $data['location']['message'],
            'subtotal' => $total,
        ]);
        
        return response()->json([
            'status' => true,
            'message' => __('messages.booking_added_to_cart')
        ], 201);
    
}
        
        
}