<?php

namespace App\Services\Payment;

use App\Models\GiftCard;
use App\Services\TaqnyatSmsService;

class GiftCardPaymentActivatorService
{
    public function activatePurchasedGiftCards(int $userId, array $giftIds): void
    {
        if (empty($giftIds)) {
            return;
        }

        $smsService = new TaqnyatSmsService();

        $giftCards = GiftCard::where('user_id', $userId)
            ->where('payment_status', 0)
            ->whereIn('id', $giftIds)
            ->get();

        foreach ($giftCards as $giftCard) {
            $giftCard->update([
                'payment_status' => 1,
            ]);

            if ($giftCard->recipient_phone) {
                $smsService->sendGiftCardRecipientMessage($giftCard);
            }
        }
    }
}
