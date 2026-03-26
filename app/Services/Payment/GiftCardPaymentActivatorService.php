<?php

namespace App\Services\Payment;

use App\Models\GiftCard;
use App\Services\TaqnyatSmsService;
use Illuminate\Support\Str;

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
            $ref = null;
            $balance = 0;

            if ($giftCard->delivery_method == 'Ø¨Ø·Ø§Ù‚Ø© Ø§Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©') {
                $ref = 'REF-' . strtoupper(Str::random(8));
                $balance = $giftCard->subtotal;
            }

            $giftCard->update([
                'payment_status' => 1,
                'ref' => $ref,
                'balance' => $balance,
            ]);

            if ($giftCard->sender_phone) {
                $smsService->sendGift($giftCard->sender_phone, $giftCard->sender_name, 'sender');
            }

            if ($giftCard->recipient_phone) {
                $smsService->sendGift($giftCard->recipient_phone, $giftCard->recipient_name, 'recipient', $ref);
            }
        }
    }
}
