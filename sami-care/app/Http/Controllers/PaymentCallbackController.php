<?php

namespace App\Http\Controllers;

use App\Models\PaymentAttempt;
use App\Services\Payment\PaymentOrchestratorService;
use Illuminate\Http\Request;

class PaymentCallbackController extends Controller
{
    public function handle(string $gateway, Request $request)
    {
        $token = $request->query('attempt') ?: $request->input('attempt');

        if (! $token && $request->filled('trandata')) {
            try {
                $trandata = (string) $request->input('trandata');
                $key = config('arb.resource_key') ?? config('services.arb.resource_key') ?? env('ARB_RESOURCE_KEY');
                $string = hex2bin(trim($trandata));
                if ($string !== false && $key) {
                    $code = unpack('C*', $string);
                    $chars = array_map('chr', $code);
                    $code = base64_encode(implode($chars));
                    $decrypted = openssl_decrypt($code, 'AES-256-CBC', $key, OPENSSL_ZERO_PADDING, 'PGKEYENCDECIVSPC');
                    if ($decrypted !== false) {
                        $pad = ord($decrypted[strlen($decrypted) - 1]);
                        $raw = urldecode(substr($decrypted, 0, -1 * $pad));
                        $dataArr = json_decode($raw, true);
                        $token = $dataArr[0]['udf1'] ?? null;
                    }
                }
            } catch (\Throwable) {
                // Fallback attempt extraction failed
            }
        }

        if (!$token) {
            return redirect('/app')->with('error', __('messages.payment_failed'));
        }

        $attempt = PaymentAttempt::where('token', $token)->first();
        $isApi = ($attempt?->meta['channel'] ?? '') === 'api' || (bool) ($attempt?->is_mobile ?? false);
        $frontendUrl = rtrim(config('app.frontend_url', 'http://127.0.0.1:5173'), '/');

        $result = app(PaymentOrchestratorService::class)->handleCallback($gateway, $token, $request);

        if (($result['status'] ?? '') === 'paid') {
            if ($isApi) {
                return redirect($frontendUrl . '/account?payment=success&invoice=' . ($result['invoice_id'] ?? ''));
            }
            return redirect('/app/invoice')->with('success', __('messages.payment_success'));
        }

        $message = ($result['status'] ?? '') === 'cancelled'
            ? __('messages.payment_cancelled')
            : __('messages.payment_failed');

        if ($isApi) {
            return redirect($frontendUrl . '/booking?payment=' . ($result['status'] ?? 'failed'));
        }

        return redirect('/app')->with('error', $result['message'] ?? $message);
    }
}
