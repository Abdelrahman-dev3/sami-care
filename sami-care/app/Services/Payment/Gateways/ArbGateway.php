<?php

namespace App\Services\Payment\Gateways;

use App\Models\PaymentAttempt;
use Egyjs\Arb\Facades\Arb;
use Illuminate\Http\Request;

class ArbGateway
{
    /**
     * Create a new ARB hosted payment session.
     */
    public function create(PaymentAttempt $attempt, array $customer, array $urls): array
    {
        $this->ensureConfigured();

        // Set callback URLs for success/failure
        Arb::successUrl($urls['success'] ?? '')
            ->failUrl($urls['fail'] ?? '');

        // Attach tracking metadata so we can identify this payment on callback
        Arb::data([
            'attempt_token' => $attempt->token,
            'attempt_id' => $attempt->id,
            'trackid' => $this->buildTrackId($attempt),
        ]);

        $response = Arb::initiatePayment((float) $attempt->amount);

        if (empty($response->success) || empty($response->url)) {
            $errorMessage = $response->message ?? 'ARB payment initiation failed';
            throw new \RuntimeException($errorMessage);
        }

        // Extract payment ID from the URL if available
        $paymentUrl = $response->url;
        $externalId = $this->extractPaymentId($paymentUrl) ?? $this->buildTrackId($attempt);

        return [
            'external_id' => $externalId,
            'payment_url' => $paymentUrl,
            'raw' => (array) $response,
        ];
    }

    /**
     * Verify the ARB payment status from the callback request.
     */
    public function verify(PaymentAttempt $attempt, Request $request): array
    {
        // ARB sends the result via POST/GET with status and paymentid
        $status = strtolower((string) ($request->get('status') ?? $request->get('Status') ?? ''));
        $paymentId = $request->get('paymentid') ?? $request->get('PaymentID') ?? $attempt->external_id;
        $result = $request->get('result') ?? '';
        $tranId = $request->get('tranid') ?? $request->get('TranId') ?? '';
        $responseCode = $request->get('responsecode') ?? $request->get('ResponseCode') ?? '';
        $authCode = $request->get('auth') ?? $request->get('Auth') ?? '';

        $raw = $request->all();

        return [
            'status' => $this->normalizeStatus($status, $result, $responseCode),
            'external_id' => $paymentId ?: $attempt->external_id,
            'raw' => $raw,
        ];
    }

    /**
     * Build a unique track ID for the transaction.
     */
    private function buildTrackId(PaymentAttempt $attempt): string
    {
        return 'arb-' . $attempt->id . '-' . substr((string) $attempt->token, 0, 8);
    }

    /**
     * Extract PaymentID from the ARB redirect URL.
     */
    private function extractPaymentId(string $url): ?string
    {
        $parsed = parse_url($url);
        if (isset($parsed['query'])) {
            parse_str($parsed['query'], $params);
            return $params['paymentId'] ?? $params['PaymentID'] ?? $params['paymentid'] ?? null;
        }
        return null;
    }

    /**
     * Normalize ARB status values to our internal status.
     */
    private function normalizeStatus(string $status, string $result, string $responseCode): string
    {
        // Check explicit status first
        if ($status === 'success' || $status === 'captured') {
            return 'paid';
        }

        if ($status === 'cancelled' || $status === 'cancel') {
            return 'cancelled';
        }

        // Check result parameter
        $resultLower = strtolower($result);
        if (in_array($resultLower, ['captured', 'success', 'approved'], true)) {
            return 'paid';
        }

        if (in_array($resultLower, ['cancel', 'cancelled'], true)) {
            return 'cancelled';
        }

        // Check response code (00 = success in ARB)
        if ($responseCode === '00') {
            return 'paid';
        }

        return 'failed';
    }

    /**
     * Ensure ARB configuration is present.
     */
    private function ensureConfigured(): void
    {
        if (! config('services.arb.tranportal_id') || ! config('services.arb.tranportal_password') || ! config('services.arb.resource_key')) {
            throw new \RuntimeException('Al Rajhi Bank (ARB) payment gateway configuration is incomplete. Please check ARB_TRANPORTAL_ID, ARB_TRANPORTAL_PASSWORD, and ARB_RESOURCE_KEY in your .env file.');
        }
    }
}