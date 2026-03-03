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
            return view('components.frontend.status.FAILED', [
                'message' => __('messages.payment_failed'),
                'sub' => 'Missing payment token',
            ]);
        }

        $result = app(PaymentOrchestratorService::class)->handleCallback($gateway, $token, $request);

        if (($result['status'] ?? '') === 'paid') {
            return view('components.frontend.status.CAPTURED');
        }

        $message = $result['status'] === 'cancelled'
            ? __('messages.payment_cancelled')
            : __('messages.payment_failed');

        return view('components.frontend.status.FAILED', [
            'message' => $message,
        ]);
    }
}
