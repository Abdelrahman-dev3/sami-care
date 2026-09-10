<?php

namespace App\Services\Payment\Gateways;

use App\Models\PaymentAttempt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ArbGateway
{
    /**
     * Create a new ARB / UrPay hosted payment session.
     */
    public function create(PaymentAttempt $attempt, array $customer, array $urls): array
    {
        $this->ensureConfigured();

        $trackId = $this->buildTrackId($attempt);
        $amount = number_format((float) $attempt->amount, 2, '.', '');

        $data = [
            'id' => $this->getConfig('tranportal_id'),
            'password' => $this->getConfig('tranportal_password'),
            'action' => '1',
            'trackId' => $trackId,
            'amt' => $amount,
            'currencyCode' => (string) ($this->getConfig('currency_code') ?: '682'),
            'langid' => app()->getLocale() === 'en' ? 'EN' : 'AR',
            'responseURL' => $urls['success'] ?? '',
            'errorURL' => $urls['fail'] ?? '',
            'udf1' => $attempt->token,
            'udf2' => (string) $attempt->id,
            'udf3' => (string) ($customer['phone'] ?? ''),
        ];

        $encryptedData = $this->encrypt(json_encode([$data]), $this->getConfig('resource_key'));

        $body = json_encode([[
            'id' => $this->getConfig('tranportal_id'),
            'trandata' => $encryptedData,
            'responseURL' => $urls['success'] ?? '',
            'errorURL' => $urls['fail'] ?? '',
        ]]);

        $endpoint = $this->getEndpoint();

        $response = Http::withBody($body, 'application/json')
            ->withOptions(['verify' => false, 'timeout' => 15])
            ->post($endpoint);

        $json = $response->json('0');

        if (! isset($json['status']) || (string) $json['status'] !== '1' || empty($json['result'])) {
            $errorMsg = $json['errorText'] ?? ('Payment initiation failed with status ' . $response->status());
            Log::error('ARB/UrPay initiation failed', ['response' => $json, 'http_status' => $response->status()]);
            throw new \RuntimeException($errorMsg);
        }

        // Result format: "PAYMENTID:URL"
        $parts = explode(':', $json['result'], 2);
        $paymentId = $parts[0];
        $rawUrl = $parts[1] ?? '';
        $baseURL = str_starts_with($rawUrl, 'http') ? $rawUrl : ('https:' . $rawUrl);
        $paymentUrl = $baseURL;
        if (! str_contains(strtolower($paymentUrl), 'paymentid=')) {
            $paymentUrl .= (str_contains($paymentUrl, '?') ? '&' : '?') . 'PaymentID=' . $paymentId;
        }

        return [
            'external_id' => $paymentId ?: $trackId,
            'payment_url' => $paymentUrl,
            'raw' => (array) $json,
        ];
    }

    /**
     * Verify the ARB payment status from callback.
     */
    public function verify(PaymentAttempt $attempt, Request $request): array
    {
        $raw = $request->all();
        $trandata = $request->input('trandata');

        if ($trandata) {
            $decrypted = $this->decrypt($trandata, $this->getConfig('resource_key'));
            if ($decrypted) {
                $dataArr = json_decode($decrypted, true);
                $first = $dataArr[0] ?? [];
                $result = strtoupper((string) ($first['result'] ?? ''));
                $paymentId = $first['paymentid'] ?? $first['PaymentID'] ?? $first['tranid'] ?? null;

                if (in_array($result, ['CAPTURED', 'SUCCESS', 'APPROVED'], true)) {
                    return [
                        'status' => 'paid',
                        'external_id' => $paymentId ?: $attempt->external_id,
                        'raw' => $first,
                    ];
                }

                if (in_array($result, ['CANCEL', 'CANCELLED', 'CANCELED'], true)) {
                    return [
                        'status' => 'cancelled',
                        'external_id' => $paymentId ?: $attempt->external_id,
                        'raw' => $first,
                    ];
                }

                return [
                    'status' => 'failed',
                    'external_id' => $paymentId ?: $attempt->external_id,
                    'raw' => $first,
                ];
            }
        }

        // Fallback for query params / direct result hints
        $status = strtolower((string) ($request->get('status') ?? $request->get('Status') ?? ''));
        $paymentId = $request->get('paymentid') ?? $request->get('PaymentID') ?? $attempt->external_id;
        $result = $request->get('result') ?? '';
        $responseCode = $request->get('responsecode') ?? $request->get('ResponseCode') ?? '';

        return [
            'status' => $this->normalizeStatus($status, $result, $responseCode),
            'external_id' => $paymentId ?: $attempt->external_id,
            'raw' => $raw,
        ];
    }

    private function buildTrackId(PaymentAttempt $attempt): string
    {
        return 'arb-' . $attempt->id . '-' . substr((string) $attempt->token, 0, 8);
    }

    private function normalizeStatus(string $status, string $result, string $responseCode): string
    {
        if ($status === 'success' || $status === 'captured') return 'paid';
        if ($status === 'cancelled' || $status === 'cancel') return 'cancelled';

        $resultLower = strtolower($result);
        if (in_array($resultLower, ['captured', 'success', 'approved'], true)) return 'paid';
        if (in_array($resultLower, ['cancel', 'cancelled'], true)) return 'cancelled';

        if ($responseCode === '00') return 'paid';

        return 'failed';
    }

    private function getEndpoint(): string
    {
        $mode = strtolower((string) ($this->getConfig('mode') ?: 'test'));
        if ($mode === 'live' || $mode === 'production') {
            return config('arb.live_bank_hosted_endpoint')
                ?: 'https://digitalpayments.alrajhibank.com.sa/pg/payment/tranportal.htm';
        }

        return config('arb.test_bank_hosted_endpoint')
            ?: 'https://securepayments.alrajhibank.com.sa/pg/payment/tranportal.htm';
    }

    private function getConfig(string $key): ?string
    {
        return config("arb.$key") ?? config("services.arb.$key") ?? env('ARB_' . strtoupper($key));
    }

    private function ensureConfigured(): void
    {
        if (! $this->getConfig('tranportal_id') || ! $this->getConfig('tranportal_password') || ! $this->getConfig('resource_key')) {
            throw new \RuntimeException('Al Rajhi Bank (ARB / UrPay) payment gateway configuration is incomplete. Please check ARB_TRANPORTAL_ID, ARB_TRANPORTAL_PASSWORD, and ARB_RESOURCE_KEY in your .env file.');
        }
    }

    private function encrypt(string $str, string $key): string
    {
        $blocksize = openssl_cipher_iv_length('AES-256-CBC');
        $pad = $blocksize - (strlen($str) % $blocksize);
        $str = $str . str_repeat(chr($pad), $pad);
        $encrypted = openssl_encrypt($str, 'AES-256-CBC', $key, OPENSSL_ZERO_PADDING, 'PGKEYENCDECIVSPC');
        $encrypted = base64_decode($encrypted);
        $encrypted = unpack('C*', $encrypted);
        $chars = array_map('chr', $encrypted);
        $bin = implode($chars);

        return urlencode(bin2hex($bin));
    }

    private function decrypt(string $code, string $key): false|string
    {
        $string = hex2bin(trim($code));
        if ($string === false) return false;
        $code = unpack('C*', $string);
        $chars = array_map('chr', $code);
        $code = implode($chars);
        $code = base64_encode($code);
        $decrypted = openssl_decrypt($code, 'AES-256-CBC', $key, OPENSSL_ZERO_PADDING, 'PGKEYENCDECIVSPC');
        if ($decrypted === false) return false;
        $pad = ord($decrypted[strlen($decrypted) - 1]);
        if ($pad > strlen($decrypted)) return false;
        if (strspn($decrypted, chr($pad), strlen($decrypted) - $pad) != $pad) return false;

        return urldecode(substr($decrypted, 0, -1 * $pad));
    }
}