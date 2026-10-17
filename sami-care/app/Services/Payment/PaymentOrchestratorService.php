<?php

namespace App\Services\Payment;

use App\Models\User;
use App\Models\Setting;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PaymentAttempt;
use Illuminate\Support\Facades\DB;
use App\Services\Wallet\InsufficientWalletBalance;
use App\Services\Wallet\WalletLedger;
use App\Services\Wallet\WalletTopupService;
use Modules\Booking\Models\BookingTransaction;
use App\Services\Payment\Gateways\ArbGateway;
use App\Services\Payment\Gateways\TabbyGateway;
use App\Services\Payment\Gateways\TamaraGateway;
use App\Services\Payment\Gateways\TapGateway;
use App\Services\Payment\Gateways\TelrGateway;

class PaymentOrchestratorService
{
    public function initiate(array $input): array
    {
        $userId = auth()->id();

        // Determine page type based on input ( buy-now , cart )
        $pageType = app(CheckoutTypeResolver::class)->resolve($input);
        $gateway = $input['gateway'] ?? '';
        $couponCode = $input['coupon_code'] ?? null;
        if (!$userId) {
            return ['status' => 'error', 'message' => __('auth.unauthenticated')];
        }

        if (! in_array($gateway, ['card', 'tabby', 'tamara', 'telr', 'arb', 'urpay', 'cod'], true)) {
            return ['status' => 'error', 'message' => __('messages.invalid_payment_method')];
        }

        $checkout = app(PaymentCalculatorService::class)->calculateTotal($pageType, $couponCode);

        if (isset($checkout['error'])) {
            return ['status' => 'error', 'message' => $checkout['error']];
        }

        $grossAmount = (float) ($checkout['total'] ?? 0);
        $taxAmount = (float) ($checkout['tax'] ?? 0);
        $discountAmount = (float) ($checkout['discountAmount'] ?? 0);

        if ($gateway === 'cod') {
            return $this->handleCod($userId, $pageType, $grossAmount, $taxAmount, $discountAmount, $checkout, $couponCode);
        }

        $submethods = [
            'wallet' => (bool) ($input['wallet'] ?? false),
            'wallet_amount' => isset($input['wallet_amount']) ? max(0, (float) $input['wallet_amount']) : null,
            'loyalty' => (bool) ($input['loyalty'] ?? false),
            'loyalty_points' => isset($input['loyalty_points']) ? max(0, (int) $input['loyalty_points']) : null,
        ];
        $subResult = app(PaymentSubMethodsService::class)->apply($userId, new Request($submethods), $grossAmount, false);
        if (isset($subResult['error'])) {
            return ['status' => 'error', 'message' => $subResult['error']];
        }

        $remainingAmount = (float) ($subResult['remaining_amount'] ?? 0);

        if ($remainingAmount <= 0) {
            $invoiceId = $this->finalize( $userId, $grossAmount, $taxAmount, $discountAmount, $pageType, $checkout['cart_ids'] ?? [], $checkout['gift_ids'] ?? [], $this->resolvePaymentMethod($gateway, true), $couponCode, $submethods );

            return [
                'status' => 'paid',
                'invoice_id' => $invoiceId,
                'amount' => 0,
            ];
        }

        $attempt = PaymentAttempt::create([
            'token' => (string) Str::uuid(),
            'user_id' => $userId,
            'gateway' => $gateway,
            'isBuyNow' => $pageType ? str_contains($pageType, 'buy_now') : false,
            'currency' => 'SAR',
            'gross_amount' => $grossAmount,
            'amount' => $remainingAmount,
            'tax_amount' => $taxAmount,
            'discount_amount' => $discountAmount,
            'coupon_code' => $couponCode,
            'cart_ids' => $checkout['cart_ids'] ?? [],
            'gift_ids' => $checkout['gift_ids'] ?? [],
            'submethods' => $submethods,
            'status' => PaymentAttempt::STATUS_INITIATED,
            'meta' => [
                'channel' => $input['channel'] ?? 'web',
                'payment_source' => $input['payment_source'] ?? null,
            ],
        ]);

        $customer = $this->buildCustomer($userId);
        $urls = $this->buildGatewayUrls($attempt);
        $gatewayResult = $this->createGatewayPayment($attempt, $customer, $urls, $input);

        $attempt->update([
            'external_id' => $gatewayResult['external_id'] ?? null,
            'payment_url' => $gatewayResult['payment_url'] ?? null,
            'status' => PaymentAttempt::STATUS_REDIRECTED,
            'meta' => array_merge($attempt->meta ?? [], [
                'gateway_response' => $gatewayResult['raw'] ?? null,
            ]),
        ]);

        return [
            'status' => 'redirect',
            'payment_url' => $attempt->payment_url,
            'attempt_token' => $attempt->token,
            'attempt_id' => $attempt->id,
            'amount' => $attempt->amount,
        ];
    }

    public function handleCallback(string $gateway, string $token, Request $request): array
    {
        $attempt = PaymentAttempt::where('token', $token)->first();

        if (! $attempt || $attempt->gateway !== $gateway) {
            return ['status' => 'failed', 'message' => 'Payment attempt not found'];
        }

        if ($attempt->status === PaymentAttempt::STATUS_PAID) {
            return ['status' => 'paid', 'invoice_id' => $attempt->invoice_id];
        }

        if ($attempt->purpose === PaymentAttempt::PURPOSE_WALLET_TOPUP) {
            return $this->handleTopupCallback($attempt, $request);
        }

        if (! $request->has('trandata')) {
            $resultHint = strtolower((string) ($request->query('result') ?: $request->input('result')));
            $errorText = strtolower((string) ($request->query('ErrorText') ?: $request->input('ErrorText') ?: $request->input('errorText')));

            if (in_array($resultHint, ['cancel', 'cancelled', 'canceled'], true) || str_contains($errorText, 'cancel')) {
                $attempt->update(['status' => PaymentAttempt::STATUS_CANCELLED]);
                $this->cleanupFailedCartBookings($attempt);
                return ['status' => 'cancelled'];
            }

            if (in_array($resultHint, ['fail', 'failed', 'failure'], true) || (!empty($errorText) && !str_contains($errorText, 'cancel'))) {
                $attempt->update(['status' => PaymentAttempt::STATUS_FAILED]);
                $this->cleanupFailedCartBookings($attempt);
                return ['status' => 'failed'];
            }
        }

        $verification = $this->verifyGatewayPayment($attempt, $request);

        if (($verification['external_id'] ?? null) && ! $attempt->external_id) {
            $attempt->external_id = $verification['external_id'];
        }

        $status = $verification['status'] ?? 'failed';

        if ($status === 'paid') {
            $invoiceId = $this->finalize(
                $attempt->user_id,
                (float) $attempt->gross_amount,
                (float) $attempt->tax_amount,
                (float) $attempt->discount_amount,
                $attempt->page_type ?? CheckoutType::CART,
                $attempt->cart_ids ?? [],
                $attempt->gift_ids ?? [],
                $this->resolvePaymentMethod($gateway, false),
                $attempt->coupon_code ?? '',
                $attempt->submethods ?? []
            );

            $attempt->update([
                'status' => PaymentAttempt::STATUS_PAID,
                'invoice_id' => $invoiceId,
                'meta' => array_merge($attempt->meta ?? [], [
                    'verify_response' => $verification['raw'] ?? null,
                ]),
            ]);

            return ['status' => 'paid', 'invoice_id' => $invoiceId];
        }

        $attempt->update([
            'status' => $status === 'cancelled'
                ? PaymentAttempt::STATUS_CANCELLED
                : PaymentAttempt::STATUS_FAILED,
            'meta' => array_merge($attempt->meta ?? [], [
                'verify_response' => $verification['raw'] ?? null,
            ]),
        ]);

        $this->cleanupFailedCartBookings($attempt);

        return ['status' => $status];
    }

    private function handleCod(int $userId, string $pageType, float $grossAmount, float $taxAmount, float $discountAmount, array $checkout, ?string $couponCode ): array {
        $codDepositPercent = (float) Setting::get('cod_deposit_percent', 30);
        $codDepositPercent = max(0, min(100, $codDepositPercent));
        $requiredDeposit = round($grossAmount * ($codDepositPercent / 100), 2);

        try {
            $invoiceId = null;

            DB::transaction(function () use ( $userId, $pageType, $grossAmount, $taxAmount, $discountAmount, $checkout, $couponCode, $requiredDeposit, $codDepositPercent, &$invoiceId ) {
                $insufficient = fn () => new \RuntimeException(__('messagess.wallet_balance_requirement', [
                    'percent' => rtrim(rtrim(number_format($codDepositPercent, 2, '.', ''), '0'), '.'),
                ]));
                $ledger = app(WalletLedger::class);

                if ($requiredDeposit > 0 && $ledger->spendable($userId) + 0.0001 < $requiredDeposit) {
                    throw $insufficient();
                }

                // Take the deposit before finalizing (finalizing sends the success SMS),
                // then link the ledger row to the invoice it paid.
                $deposit = null;
                if ($requiredDeposit > 0) {
                    try {
                        $deposit = $ledger->debit($userId, $requiredDeposit, 'payment', [
                            'activity_type' => 'withdraw',
                            'message' => __('messagess.cash_on_delivery'),
                            'source_type' => 'invoice',
                            'meta' => ['transaction_type' => 'cash_on_delivery'],
                        ]);
                    } catch (InsufficientWalletBalance) {
                        throw $insufficient();
                    }
                }

                $invoiceId = app(PaymentFinalizerService::class)->finalizePayment($userId,$grossAmount,$taxAmount,$discountAmount,$pageType,$checkout['cart_ids'] ?? [],$checkout['gift_ids'] ?? [],'cash on delivery',$couponCode ?? '',false);

                $deposit?->update(['source_id' => $invoiceId, 'idempotency_key' => 'payment:invoice:' . $invoiceId]);

                BookingTransaction::where('external_transaction_id', 'INV-' . $invoiceId)->update(['transaction_type' => 'cash_on_delivery_deposit_percent']);
            });

            PaymentAttempt::create([
                'token' => (string) Str::uuid(),
                'user_id' => $userId,
                'gateway' => 'cod',
                'isBuyNow' => $pageType ? str_contains($pageType, 'buy_now') : false,
                'currency' => 'SAR',
                'gross_amount' => $grossAmount,
                'amount' => 0,
                'tax_amount' => $taxAmount,
                'discount_amount' => $discountAmount,
                'coupon_code' => $couponCode,
                'cart_ids' => $checkout['cart_ids'] ?? [],
                'gift_ids' => $checkout['gift_ids'] ?? [],
                'submethods' => [],
                'status' => PaymentAttempt::STATUS_PAID,
                'invoice_id' => $invoiceId,
                'meta' => ['deposit_amount' => $requiredDeposit],
            ]);

            return ['status' => 'paid', 'invoice_id' => $invoiceId];
        } catch (\Throwable $exception) {
            if (!empty($checkout['cart_ids'])) {
                \Modules\Booking\Models\Booking::whereIn('id', $checkout['cart_ids'])->where('status', 'pending')->unpaid()->delete();
            }
            return ['status' => 'error', 'message' => $exception->getMessage()];
        }
    }

    /**
     * Start a wallet top-up. The balance is credited only in the gateway callback,
     * after the gateway itself confirms the charge, its amount and its currency.
     * Only the card gateway (Tap) is offered for top-ups because it is the one whose
     * verification checks the captured amount.
     */
    public function initiateTopup(int $userId, float $amount, array $input = []): array
    {
        $offer = app(WalletTopupService::class)->bestOfferFor($userId, $amount);

        $attempt = PaymentAttempt::create([
            'token' => (string) Str::uuid(),
            'user_id' => $userId,
            'gateway' => 'card',
            'purpose' => PaymentAttempt::PURPOSE_WALLET_TOPUP,
            'isBuyNow' => false,
            'currency' => 'SAR',
            'gross_amount' => $amount,
            'amount' => $amount,
            'tax_amount' => 0,
            'discount_amount' => 0,
            'cart_ids' => [],
            'gift_ids' => [],
            'submethods' => [],
            'status' => PaymentAttempt::STATUS_INITIATED,
            'meta' => [
                'channel' => $input['channel'] ?? 'web',
                'payment_source' => $input['payment_source'] ?? 'src_card',
                'offer_id' => $offer?->id,
            ],
        ]);

        try {
            $gatewayResult = $this->createGatewayPayment($attempt, $this->buildCustomer($userId), $this->buildGatewayUrls($attempt), $input);
        } catch (\Throwable $e) {
            $attempt->update(['status' => PaymentAttempt::STATUS_FAILED, 'meta' => array_merge($attempt->meta ?? [], ['error' => $e->getMessage()])]);

            return ['status' => 'error', 'message' => __('wallet_ledger.topup_failed')];
        }

        $attempt->update([
            'external_id' => $gatewayResult['external_id'] ?? null,
            'payment_url' => $gatewayResult['payment_url'] ?? null,
            'status' => PaymentAttempt::STATUS_REDIRECTED,
            'meta' => array_merge($attempt->meta ?? [], ['gateway_response' => $gatewayResult['raw'] ?? null]),
        ]);

        return [
            'status' => 'redirect',
            'payment_url' => $attempt->payment_url,
            'attempt_token' => $attempt->token,
            'attempt_id' => $attempt->id,
            'amount' => (float) $attempt->amount,
            'bonus' => $offer ? (float) $offer->bonus_amount : 0,
        ];
    }

    private function handleTopupCallback(PaymentAttempt $attempt, Request $request): array
    {
        $verification = $this->verifyGatewayPayment($attempt, $request);
        $status = $verification['status'] ?? 'failed';

        if ($status === 'paid') {
            app(WalletTopupService::class)->creditPaidAttempt($attempt, $verification);

            return ['status' => 'paid', 'purpose' => PaymentAttempt::PURPOSE_WALLET_TOPUP];
        }

        $attempt->update([
            'status' => $status === 'cancelled' ? PaymentAttempt::STATUS_CANCELLED : PaymentAttempt::STATUS_FAILED,
            'meta' => array_merge($attempt->meta ?? [], ['verify_response' => $verification['raw'] ?? null]),
        ]);

        return ['status' => $status === 'cancelled' ? 'cancelled' : 'failed', 'purpose' => PaymentAttempt::PURPOSE_WALLET_TOPUP];
    }

    private function finalize(int $userId,float $grossAmount,float $taxAmount,float $discountAmount,string $pageType,array $cartIds,array $giftIds,string $paymentMethod,?string $couponCode,array $submethods): int {
        
        $invoiceId = app(PaymentFinalizerService::class)->finalizePayment($userId,$grossAmount, $taxAmount, $discountAmount, $pageType, $cartIds, $giftIds, $paymentMethod, $couponCode ?? '', true );
        app(PaymentSubMethodsService::class)->apply($userId,new Request($submethods),$grossAmount,true,$invoiceId);
        return $invoiceId;
    }

    private function createGatewayPayment(PaymentAttempt $attempt, array $customer, array $urls, array $input): array
    {
        return match ($attempt->gateway) {
            'card' => app(TapGateway::class)->create( $attempt, $customer, $urls['success'] ?? '', $input['payment_source'] ?? 'src_card' ),
            'tabby' => app(TabbyGateway::class)->create($attempt, $customer, $urls),
            'tamara' => app(TamaraGateway::class)->create($attempt, $customer, $urls, $input['platform'] ?? 'web', (bool) ($input['is_mobile'] ?? false)),
            'telr' => app(TelrGateway::class)->create($attempt, $customer, $urls),
            'arb' => app(ArbGateway::class)->create($attempt, $customer, $urls),
            'urpay' => app(ArbGateway::class)->create($attempt, $customer, $urls),
            default => throw new \RuntimeException('Unsupported gateway'),
        };
    }

    private function verifyGatewayPayment(PaymentAttempt $attempt, Request $request): array
    {
        return match ($attempt->gateway) {
            'card' => app(TapGateway::class)->verify($attempt, $request),
            'tabby' => app(TabbyGateway::class)->verify($attempt, $request),
            'tamara' => app(TamaraGateway::class)->verify($attempt, $request),
            'telr' => app(TelrGateway::class)->verify($attempt, $request),
            'arb' => app(ArbGateway::class)->verify($attempt, $request),
            'urpay' => app(ArbGateway::class)->verify($attempt, $request),
            default => ['status' => 'failed'],
        };
    }

    private function buildCustomer(int $userId): array
    {
        $user = User::find($userId);
        $name = trim(($user?->first_name ?? '') . ' ' . ($user?->last_name ?? ''));

        return [
            'name' => $name,
            'first_name' => $user?->first_name,
            'last_name' => $user?->last_name,
            'email' => $user?->email,
            'phone' => $user?->mobile,
            'country_code' => '966',
            'country' => 'SA',
            'reference' => $user?->id,
        ];
    }

    private function buildGatewayUrls(PaymentAttempt $attempt): array
    {
        $base = route('payments.callback', ['gateway' => $attempt->gateway]);
        $token = $attempt->token;

        if (in_array($attempt->gateway, ['arb', 'urpay'], true)) {
            return [
                'success' => $base . '?attempt=' . $token,
                'fail' => $base . '?attempt=' . $token . '&result=fail',
                'cancel' => $base . '?attempt=' . $token . '&result=cancel',
            ];
        }

        return [
            'success' => $base . '?attempt=' . $token . '&result=success',
            'fail' => $base . '?attempt=' . $token . '&result=fail',
            'cancel' => $base . '?attempt=' . $token . '&result=cancel',
        ];
    }

    private function resolvePaymentMethod(string $gateway, bool $subMethodsOnly): string
    {
        if ($subMethodsOnly) {
            return 'sub_methods';
        }

        return match ($gateway) {
            'card' => 'tap',
            'tabby' => 'tabby',
            'tamara' => 'tamara',
            'telr' => 'telr',
            'arb' => 'arb',
            'urpay' => 'urpay',
            default => $gateway,
        };
    }

    private function cleanupFailedCartBookings(PaymentAttempt $attempt): void
    {
        if (!empty($attempt->cart_ids)) {
            $failedBookings = \Modules\Booking\Models\Booking::whereIn('id', $attempt->cart_ids)->unpaid()->get();
            foreach ($failedBookings as $bk) {
                $bk->bookingService()->delete();
                $bk->packages()->delete();
                $bk->delete();
            }
        }
    }

}
