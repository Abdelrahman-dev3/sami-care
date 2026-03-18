<?php

namespace App\Http\Controllers;

use App\Services\Payment\PaymentOrchestratorService;
use Illuminate\Http\Request;


class PaymentchanalController extends Controller
{
    /**
     * Main payment entry
     */
    public function payment(Request $request)
    {
        $isBuyNow = $request->is_buy_now ?? false;
        $gateway = $request->paymentMethod;

        $result = app(PaymentOrchestratorService::class)->initiate([
            'isBuyNow' => $isBuyNow,
            'gateway' => $gateway,
            'coupon_code' => $request->invoiceCopon ?? null,
            'wallet' => (bool) $request->wallet,
            'loyalty' => (bool) $request->loyalty,
            'gift_code' => $request->gift_code,
            'payment_source' => $request->payment_source ?? 'src_card',
            'channel' => 'web',
        ]);

        if (($result['status'] ?? '') === 'redirect' && !empty($result['payment_url'])) {
            return redirect()->away($result['payment_url']);
        }

        if (($result['status'] ?? '') === 'paid') {
            return view('frontend.payment-status.captured');
        }

        return redirect()->back()->with('error', $result['message'] ?? __('messages.payment_failed'));
    }

}
