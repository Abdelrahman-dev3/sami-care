<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GiftCard;

class GiftClaimController extends Controller
{
    public function show(string $token)
    {
        $giftCard = GiftCard::query()->where('claim_token', $token)->where('payment_status', 1)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => [
                'recipient_name' => $giftCard->recipient_name,
                'sender_name' => $giftCard->sender_name,
                'design' => $giftCard->design ?: 'lux-dark',
                'message' => $giftCard->message,
                'gift_status' => $giftCard->gift_status,
                'send_channel' => $giftCard->send_channel,
                'created_at' => optional($giftCard->created_at)->toIso8601String(),
                'services' => $giftCard->services_list->map(fn ($service) => [
                    'id' => $service->id,
                    'name' => $service->getTranslations('name') ?: ['ar' => $service->name],
                ])->values(),
                'packages' => $giftCard->packages_list->map(fn ($package) => [
                    'id' => $package->id,
                    'name' => $package->getTranslations('name') ?: ['ar' => $package->name],
                ])->values(),
            ],
        ]);
    }
}
