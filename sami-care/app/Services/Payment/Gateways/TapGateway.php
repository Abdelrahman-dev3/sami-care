<?php

namespace App\Services\Payment\Gateways;

use App\Models\PaymentAttempt;
use App\Services\TapPaymentService;
use Illuminate\Http\Request;

class TapGateway
{
    public function create(PaymentAttempt $attempt, array $customer, string $redirectUrl, string $paymentSource): array
    {
        $tap = new TapPaymentService();

        $charge = $tap->createCharge(
            amount: $attempt->amount,
            customerData: [
                'name' => $customer['name'] ?? '',
                'country_code' => $customer['country_code'] ?? '966',
                'phone' => $customer['phone'] ?? '',
                'method' => $paymentSource ?: 'src_card',
            ],
            redirectUrl: $redirectUrl
        );

        if (!isset($charge['transaction']['url'])) {
            throw new \RuntimeException('Tap payment URL not found');
        }

        return [
            'external_id' => $charge['id'] ?? null,
            'payment_url' => $charge['transaction']['url'],
            'raw' => $charge,
        ];
    }

    public function verify(PaymentAttempt $attempt, Request $request): array
    {
        $tapId = $request->get('tap_id') ?: $attempt->external_id;
        if (!$tapId) {
            return ['status' => 'failed', 'raw' => ['message' => 'tap_id missing']];
        }

        $tap = new TapPaymentService();
        $charge = $tap->getCharge($tapId);

        $status = strtoupper((string) ($charge['status'] ?? ''));

        return [
            'status' => $this->normalizeStatus($status),
            'external_id' => $tapId,
            'raw' => $charge,
        ];
    }

    private function normalizeStatus(string $status): string
    {
        return match ($status) {
            'CAPTURED' => 'paid',
            'FAILED' => 'failed',
            'CANCELLED' => 'cancelled',
            default => 'pending',
        };
    }
}
