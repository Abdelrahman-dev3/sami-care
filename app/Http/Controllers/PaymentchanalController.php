<?php

namespace App\Http\Controllers;

use App\Services\Payment\PaymentCalculatorService;
use App\Services\Payment\PaymentFinalizerService;
use App\Services\Payment\Strategies\CardPaymentStrategy;
use App\Services\Payment\Strategies\TabbyPaymentStrategy;
use App\Services\Payment\Strategies\TamaraPaymentStrategy;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Modules\Booking\Models\BookingTransaction;
use Modules\Wallet\Models\Wallet;
use Modules\Wallet\Models\WalletHistory;

class PaymentchanalController extends Controller
{
    /**
     * Main payment entry
     */
    public function payment(Request $request)
    {
        $method = $request->paymentMethod;
        $typePage = $request->ids ? 'payment' : 'cart';

        $strategy = match ($method) {
            'card' => app(CardPaymentStrategy::class),
            'tabby' => app(TabbyPaymentStrategy::class),
            'tamara' => app(TamaraPaymentStrategy::class),
            'cod' => null,
            default => throw ValidationException::withMessages([
                'paymentMethod' => __('messages.invalid_payment_method'),
            ]),
        };

        if ($method === 'cod') {
            return $this->payCashOnDelivery($request , $typePage);
        }

        return $strategy->pay($request, $typePage);
    }

    private function payCashOnDelivery($request , string $typePage)
    {
        $userId = auth()->id();
        $calculator = app(PaymentCalculatorService::class);
        $totalData = $calculator->calculateTotal($typePage , $request->invoiceCopon);

        if (isset($totalData['error'])) {
            return redirect()->back()->with('error', $totalData['error']);
        }

        $finalTotal = (float) ($totalData['total'] ?? 0);
        $codDepositPercent = (float) Setting::get('cod_deposit_percent', 30);
        $codDepositPercent = max(0, min(100, $codDepositPercent));
        $requiredDeposit = round($finalTotal * ($codDepositPercent / 100), 2);

        try {
            DB::transaction(function () use ($userId, $typePage, $totalData, $finalTotal, $requiredDeposit) {
                
                $wallet = Wallet::where('user_id', $userId)->where('status', 1)->lockForUpdate()->first();

                $walletBalance = (float) ($wallet->amount ?? 0);
                
                if ($walletBalance < $requiredDeposit) {
                    throw ValidationException::withMessages([
                        'paymentMethod' => __('messagess.wallet_balance_requirement', [
                            'percent' => rtrim(rtrim(number_format($codDepositPercent, 2, '.', ''), '0'), '.'),
                        ]),
                    ]);
                }

                if ($requiredDeposit > 0) {
                    $wallet->amount = $walletBalance - $requiredDeposit;
                    $wallet->save();

                    WalletHistory::create([
                        'user_id' => $wallet->user_id,
                        'datetime' => now(),
                        'activity_type' => 'withdraw',
                        'activity_message' => __('messagess.cash_on_delivery'),
                        'activity_data' => json_encode([
                            'title' => $wallet->title,
                            'amount' => $wallet->amount,
                            'transaction_type' => 'cash_on_delivery',
                            'credit_debit_amount' => $requiredDeposit,
                        ]),
                    ]);
                }

                $finalizer = app(PaymentFinalizerService::class);
                $invoiceId = $finalizer->finalizePayment(
                    $userId,
                    $finalTotal,
                    (float) ($totalData['tax'] ?? 0),
                    (float) ($totalData['discountAmount'] ?? 0),
                    $typePage,
                    $totalData['cart_ids'] ?? [],
                    $totalData['gift_ids'] ?? [],
                    'cash on delivery',
                    $request->invoiceCopon ?? '',
                    false
                );

                BookingTransaction::where('external_transaction_id', 'INV-' . $invoiceId)
                    ->update(['transaction_type' => 'cash_on_delivery_deposit_percent']);
            });

            return view('components.frontend.status.CAPTURED');
        } catch (ValidationException $e) {
            $message = $e->validator?->errors()?->first('paymentMethod') ?: __('messages.invalid_payment_method');
            return redirect()->back()->with('error', $message);
        } catch (\Throwable $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
    }
}
