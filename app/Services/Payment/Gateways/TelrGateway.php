<?php

namespace App\Services\Payment\Gateways;

use App\Models\PaymentAttempt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TelrGateway
{
    public function create(PaymentAttempt $attempt, array $customer, array $urls): array
    {
        $this->ensureConfigured();

        $payload = [
            'method' => 'create',
            'store' => (int) config('services.telr.store_id'),
            'authkey' => (string) config('services.telr.auth_key'),
            'framed' => (int) config('services.telr.framed', 0),
            'order' => [
                'cartid' => $this->buildCartId($attempt),
                'test' => (int) config('services.telr.test_mode', 0),
                'amount' => number_format((float) $attempt->amount, 2, '.', ''),
                'currency' => $attempt->currency ?: 'SAR',
                'description' => 'Invoice #' . $attempt->id,
            ],
            'return' => [
                'authorised' => $urls['success'] ?? '',
                'declined' => $urls['fail'] ?? '',
                'cancelled' => $urls['cancel'] ?? '',
            ],
        ];

        if ($customerPayload = $this->buildCustomerPayload($customer)) {
            $payload['customer'] = $customerPayload;
        }

        if ($panels = config('services.telr.panels')) {
            $payload['panels'] = $panels;
        }

        $response = Http::acceptJson()
            ->timeout(30)
            ->post($this->gatewayUrl(), $payload);

        $data = $this->parseResponse($response->json(), 'Telr session creation failed');

        $orderRef = data_get($data, 'order.ref');
        $paymentUrl = data_get($data, 'order.url');

        if (! $orderRef || ! $paymentUrl) {
            throw new \RuntimeException('Telr payment session did not return an order reference or payment URL.');
        }

        return [
            'external_id' => $orderRef,
            'payment_url' => $paymentUrl,
            'raw' => $data,
        ];
    }

    public function verify(PaymentAttempt $attempt, Request $request): array
    {
        $this->ensureConfigured();

        $orderRef = $attempt->external_id ?: $request->query('ref') ?: $request->query('order_ref');

        if (! $orderRef) {
            return ['status' => 'failed', 'raw' => ['message' => 'Telr order reference missing']];
        }

        $payload = [
            'method' => 'check',
            'store' => (int) config('services.telr.store_id'),
            'authkey' => (string) config('services.telr.auth_key'),
            'order' => [
                'ref' => $orderRef,
            ],
        ];

        $response = Http::acceptJson()
            ->timeout(30)
            ->post($this->gatewayUrl(), $payload);

        $data = $this->parseResponse($response->json(), 'Telr payment verification failed');
        $order = (array) ($data['order'] ?? []);

        return [
            'status' => $this->normalizeStatus($order),
            'external_id' => $orderRef,
            'raw' => $data,
        ];
    }

    private function buildCartId(PaymentAttempt $attempt): string
    {
        return 'attempt-' . $attempt->id . '-' . substr((string) $attempt->token, 0, 12);
    }

    private function buildCustomerPayload(array $customer): array
    {
        $forenames = trim((string) ($customer['first_name'] ?? ''));
        $surname = trim((string) ($customer['last_name'] ?? ''));

        if ($forenames === '' && ! empty($customer['name'])) {
            $parts = preg_split('/\s+/', trim((string) $customer['name'])) ?: [];
            $forenames = trim((string) array_shift($parts));
            $surname = trim(implode(' ', $parts));
        }

        $payload = array_filter([
            'email' => $customer['email'] ?? null,
            'ref' => $customer['reference'] ?? null,
        ], fn ($value) => filled($value));

        $name = array_filter([
            'forenames' => $forenames ?: null,
            'surname' => $surname ?: null,
        ], fn ($value) => filled($value));

        if (! empty($name)) {
            $payload['name'] = $name;
        }

        $address = array_filter([
            'city' => $customer['city'] ?? null,
            'country' => $customer['country'] ?? null,
            'mobile' => $customer['phone'] ?? null,
        ], fn ($value) => filled($value));

        if (! empty($address)) {
            $payload['address'] = $address;
        }

        return $payload;
    }

    private function normalizeStatus(array $order): string
    {
        $statusCode = (int) data_get($order, 'status.code', 0);
        $statusText = strtolower((string) data_get($order, 'status.text', ''));
        $transactionStatus = strtoupper((string) data_get($order, 'transaction.status', ''));
        $transactionMessage = strtolower((string) data_get($order, 'transaction.message', ''));

        if ($statusCode === 3 || $statusText === 'paid' || $transactionStatus === 'A' || str_contains($transactionMessage, 'authoris')) {
            return 'paid';
        }

        if (str_contains($statusText, 'cancel')) {
            return 'cancelled';
        }

        if (
            str_contains($statusText, 'declin') ||
            str_contains($statusText, 'fail') ||
            str_contains($statusText, 'expire') ||
            $transactionStatus === 'D'
        ) {
            return 'failed';
        }

        return 'failed';
    }

    private function parseResponse(?array $data, string $fallbackMessage): array
    {
        if (! is_array($data)) {
            throw new \RuntimeException($fallbackMessage . ': invalid response.');
        }

        if ($errorMessage = data_get($data, 'error.message')) {
            $errorNote = data_get($data, 'error.note');
            throw new \RuntimeException($errorNote ? "{$errorMessage} ({$errorNote})" : $errorMessage);
        }

        return $data;
    }

    private function gatewayUrl(): string
    {
        return rtrim((string) config('services.telr.base_url', 'https://secure.telr.com'), '/') . '/gateway/order.json';
    }

    private function ensureConfigured(): void
    {
        if (! config('services.telr.store_id') || ! config('services.telr.auth_key')) {
            throw new \RuntimeException('Telr configuration is incomplete.');
        }
    }
}
