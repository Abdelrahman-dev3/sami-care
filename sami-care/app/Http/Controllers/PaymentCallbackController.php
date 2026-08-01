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
            return view('frontend.payment-status.failed', [
                'message' => __('messages.payment_failed'),
                'sub' => 'Missing payment token',
                'redirect' => auth()->check() ? route('paymentMethods') : '/',
            ]);
        }

        $result = app(PaymentOrchestratorService::class)->handleCallback($gateway, $token, $request);

        if (($result['status'] ?? '') === 'paid') {
            return view('frontend.payment-status.captured', [
                'invoiceId' => $result['invoice_id'] ?? null,
            ]);
        }

        $message = $result['status'] === 'cancelled'
            ? __('messages.payment_cancelled')
            : __('messages.payment_failed');

        return view('frontend.payment-status.failed', [
            'message' => $message,
            'sub' => $result['message'] ?? null,
            'redirect' => auth()->check() ? route('paymentMethods') : '/',
        ]);
    }
}
