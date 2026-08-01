<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Modules\Promotion\Models\Coupon;

class CouponController extends Controller
{
    public function availableCoupons()
    {
        $coupons = Coupon::with('promotion')->where('is_expired', 0)->where('use_limit', '>=', 1)->get();
        
        return response()->json([
            'status' => true,
            'data' => $coupons,
            'message' => __('promotion.coupons_list'),
        ], 200);
    }
}
