<?php

namespace App\Http\Controllers;

use App\Services\Payment\PaymentOrchestratorService;
use Illuminate\Http\Request;

class PaymentCallbackController extends Controller
{
    public function handle(string $gateway, Request $request)
    {
        $token = $request->query('attempt');

        if (!$token) {
            return redirect('/app')->with('error', __('messages.payment_failed'));
        }

        $result = app(PaymentOrchestratorService::class)->handleCallback($gateway, $token, $request);

        if (($result['status'] ?? '') === 'paid') {
            return redirect('/app/invoice')->with('success', __('messages.payment_success'));
        }

        $message = $result['status'] === 'cancelled'
            ? __('messages.payment_cancelled')
            : __('messages.payment_failed');

        return redirect('/app')->with('error', $result['message'] ?? $message);
    }
}
