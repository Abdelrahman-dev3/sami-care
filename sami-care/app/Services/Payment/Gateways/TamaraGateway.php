<?php

namespace App\Services\Payment\Gateways;

use App\Models\PaymentAttempt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TamaraGateway
{
    public function create(PaymentAttempt $attempt, array $customer, array $urls, string $platform = 'web', bool $isMobile = false): array
    {
        $secretKey = config('tamara.secret_key');
        $baseUrl = config('tamara.base_url', 'https://api.tamara.co');

        if (!$secretKey) {
            throw new \RuntimeException('Tamara configuration error');
        }

        $invoiceRef = 'INV-' . $attempt->id;

        $payload = [
            'total_amount' => [
                'amount' => round($attempt->amount, 2),
                'currency' => $attempt->currency ?? 'SAR',
            ],
            'shipping_amount' => [
                'amount' => 0,
                'currency' => $attempt->currency ?? 'SAR',
            ],
            'tax_amount' => [
                'amount' => 0,
                'currency' => $attempt->currency ?? 'SAR',
            ],
            'order_reference_id' => $invoiceRef,
            'order_number' => $invoiceRef,
            'description' => "Invoice #{$invoiceRef}",
            'country_code' => 'SA',
            'payment_type' => 'PAY_BY_INSTALMENTS',
            'consumer' => [
                'first_name' => $customer['name'] ?? '',
                'phone_number' => $customer['phone'] ?? '',
            ],
            'merchant_url' => [
                'success' => $urls['success'] ?? '',
                'failure' => $urls['fail'] ?? '',
                'cancel' => $urls['cancel'] ?? '',
            ],
            'platform' => $platform,
            'is_mobile' => $isMobile,
        ];

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $secretKey,
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->post($baseUrl . '/checkout', $payload);

        if (!$response->successful()) {
            throw new \RuntimeException('Tamara checkout failed: ' . $response->body());
        }

        $data = $response->json();

        if (empty($data['checkout_url'])) {
            throw new \RuntimeException('Tamara checkout URL not found');
        }

        return [
            'external_id' => $data['checkout_id'] ?? null,
            'payment_url' => $data['checkout_url'],
            'raw' => $data,
        ];
    }

    public function verify(PaymentAttempt $attempt, Request $request): array
    {
        $secretKey = config('tamara.secret_key');
        $baseUrl = config('tamara.base_url', 'https://api.tamara.co');
        $checkoutId = $request->get('checkout_id') ?: $attempt->external_id;

        if (!$secretKey || !$checkoutId) {
            return ['status' => 'failed', 'raw' => ['message' => 'Tamara id missing']];
        }

        $response = Http::withToken($secretKey)->get($baseUrl . "/api/v2/checkout/{$checkoutId}");

        if (!$response->successful()) {
            return ['status' => 'failed', 'raw' => ['message' => $response->body()]];
        }

        $data = $response->json();
        $status = strtolower((string) ($data['status'] ?? ''));

        return [
            'status' => $status === 'approved' ? 'paid' : ($status === 'canceled' ? 'cancelled' : 'failed'),
            'external_id' => $checkoutId,
            'raw' => $data,
        ];
    }
}
