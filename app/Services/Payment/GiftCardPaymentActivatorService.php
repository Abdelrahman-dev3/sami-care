<?php

namespace App\Services\Payment;

use App\Models\GiftCard;
use App\Services\TaqnyatSmsService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GiftCardPaymentActivatorService
{
    public function activatePurchasedGiftCards(int $userId, array $giftIds): void
    {
        if (empty($giftIds)) {
            return;
        }

        $giftCards = GiftCard::where('user_id', $userId)
            ->where('payment_status', 0)
            ->whereIn('id', $giftIds)
            ->get();

        foreach ($giftCards as $giftCard) {
            $giftCard->ensureClaimToken();

            $giftCard->update([
                'payment_status' => 1,
                'gift_status' => GiftCard::STATUS_PAID,
            ]);

            if ($giftCard->recipient_phone) {
                Log::channel('gift_sms')->info('Gift card activated, SMS dispatch queued after commit', [
                    'gift_card_id' => $giftCard->id,
                    'user_id' => $userId,
                    'recipient_phone' => $giftCard->recipient_phone,
                    'claim_url' => $giftCard->claim_url,
                ]);

                DB::afterCommit(function () use ($giftCard) {
                    $freshGiftCard = GiftCard::find($giftCard->id);

                    if (! $freshGiftCard) {
                        Log::channel('gift_sms')->warning('Gift card missing when attempting SMS dispatch', [
                            'gift_card_id' => $giftCard->id,
                        ]);
                        return;
                    }

                    /** @var TaqnyatSmsService $smsService */
                    $smsService = app(TaqnyatSmsService::class);
                    $result = $smsService->sendGiftCardRecipientMessage($freshGiftCard);
                    $freshGiftCard->markSmsSent((bool) $result, $smsService->getLastError());

                    Log::channel('gift_sms')->info('Gift card SMS dispatch status persisted', [
                        'gift_card_id' => $freshGiftCard->id,
                        'sent' => (bool) $result,
                        'last_error' => $smsService->getLastError(),
                    ]);
                });
            } else {
                Log::channel('gift_sms')->warning('Gift card activated without recipient phone; SMS not sent', [
                    'gift_card_id' => $giftCard->id,
                    'user_id' => $userId,
                ]);
            }
        }
    }
}
