<?php

namespace Modules\Affiliate\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Affiliate\Models\Affiliate;
use Modules\Tracking\Models\Conversion;
use Modules\Tracking\Models\Visitor;

if (!class_exists(__NAMESPACE__ . '\\AdminAffiliateController', false)) {
    class AdminAffiliateController extends Controller
    {
        public function dashboard()
        {
            $totalAffiliates = Affiliate::count();
            $totalVisitors = Visitor::count();
            $totalConversions = Conversion::count();
            $totalEarnings = Affiliate::sum('wallet_total');
            $commissionCalcType = setting('affiliate_commission_calc_type', 'percentage');
            $commissionValue = setting('affiliate_commission_value', 3);
            $commissionApplyType = setting('affiliate_commission_apply_type', 'recurring');

            $topAffiliates = Affiliate::withCount('conversions')
                ->orderByDesc('conversions_count')
                ->limit(5)
                ->get();

            return view('affiliate::admin.dashboard', compact(
                'totalAffiliates',
                'totalVisitors',
                'totalConversions',
                'totalEarnings',
                'topAffiliates',
                'commissionCalcType',
                'commissionValue',
                'commissionApplyType'
            ));
        }

        public function updateSettings(Request $request)
        {
            $validated = $request->validate([
                'commission_calc_type' => ['required', 'in:fixed,percentage'],
                'commission_value' => ['required', 'numeric', 'min:0'],
                'commission_apply_type' => ['required', 'in:first_purchase,recurring'],
            ]);

            setting(['affiliate_commission_calc_type' => $validated['commission_calc_type']]);
            setting(['affiliate_commission_value' => round((float) $validated['commission_value'], 2)]);
            setting(['affiliate_commission_apply_type' => $validated['commission_apply_type']]);

            return redirect()
                ->route('affiliate.statistics')
                ->with('success', __('affiliate.settings_saved'));
        }

        public function members(Request $request)
        {
            $query = Affiliate::query();

            if ($request->filled('search')) {
                $query->whereHas('user', function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->search . '%')
                        ->orWhere('email', 'like', '%' . $request->search . '%');
                });
            }

            $affiliates = $query->with('user')->paginate(20);

            return view('affiliate::admin.members', compact('affiliates'));
        }

        public function conversions(Request $request)
        {
            $conversions = Conversion::with('affiliate.user')->latest()->paginate(20);

            return view('affiliate::admin.conversions', compact('conversions'));
        }

        public function withdrawals(Request $request)
        {
            return redirect()
                ->route('affiliate.statistics')
                ->with('info', __('affiliate.withdrawals_coming_soon'));
        }
    }
}

if (!class_exists(__NAMESPACE__ . '\\AffiliateAdminController', false)) {
    class_alias(__NAMESPACE__ . '\\AdminAffiliateController', __NAMESPACE__ . '\\AffiliateAdminController');
}

