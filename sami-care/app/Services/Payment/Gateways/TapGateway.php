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

        // The charge must be the one created for this attempt, otherwise any earlier
        // captured charge id could be replayed against a new attempt.
        if ($attempt->external_id && $tapId !== $attempt->external_id) {
            return ['status' => 'failed', 'raw' => ['message' => 'tap_id does not belong to this attempt']];
        }

        $tap = new TapPaymentService();
        $charge = $tap->getCharge($tapId);

        $status = $this->normalizeStatus(strtoupper((string) ($charge['status'] ?? '')));

        if ($status === 'paid' && ($mismatch = $this->mismatch($attempt, $charge))) {
            return [
                'status' => 'failed',
                'external_id' => $tapId,
                'raw' => ['message' => $mismatch, 'charge' => $charge],
            ];
        }

        return [
            'status' => $status,
            'external_id' => $tapId,
            'amount' => isset($charge['amount']) ? (float) $charge['amount'] : null,
            'currency' => $charge['currency'] ?? null,
            'raw' => $charge,
        ];
    }

    /** Compare what Tap captured with what we recorded; the database is the source of truth. */
    private function mismatch(PaymentAttempt $attempt, array $charge): ?string
    {
        if (!isset($charge['amount']) || abs((float) $charge['amount'] - (float) $attempt->amount) > 0.009) {
            return 'amount mismatch';
        }
        if (strtoupper((string) ($charge['currency'] ?? '')) !== strtoupper((string) ($attempt->currency ?: 'SAR'))) {
            return 'currency mismatch';
        }

        return null;
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
