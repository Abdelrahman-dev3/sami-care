<?php

namespace App\Services;

use App\Models\GiftCard;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Modules\Service\Models\Service;

class TaqnyatSmsService
{
    protected $apiKey;
    protected $sender;
    protected $baseUrl = 'https://api.taqnyat.sa/v1';
    protected ?string $lastError = null;

    public function __construct()
    {
        $this->apiKey = trim((string) (setting('taqnyat_api_key') ?: config('services.taqnyat.api_key')));
        $this->sender = trim((string) (setting('taqnyat_sender') ?: config('services.taqnyat.sender', 'SamiCare')));
    }

    public function sendSms($recipients, $message, $sender = null)
    {
        $this->lastError = null;
        $recipientList = $this->normalizeRecipients(is_array($recipients) ? $recipients : [$recipients]);
        $senderName = $this->resolveSenderName($sender);

        $this->giftSmsLog()->info('Preparing Taqnyat SMS request', [
            'recipients' => $recipientList,
            'sender' => $senderName,
            'message_length' => mb_strlen((string) $message),
            'sms_enabled' => (bool) setting('is_taqnyat_sms'),
            'has_api_key' => ! empty($this->apiKey),
        ]);

        if (! setting('is_taqnyat_sms')) {
            $this->fail('taqnyat_disabled', 'Taqnyat SMS is disabled in settings.');
            return false;
        }

        if (empty($this->apiKey)) {
            $this->fail('missing_api_key', 'Taqnyat API key is missing.');
            return false;
        }

        try {
            $response = Http::withHeaders([
                'Authorization' => "Bearer {$this->apiKey}",
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ])->post("{$this->baseUrl}/messages", [
                'recipients' => $recipientList,
                'body' => $message,
                'sender' => $senderName,
            ]);

            if ($response->successful()) {
                $this->giftSmsLog()->info('Taqnyat SMS sent successfully', [
                    'status' => $response->status(),
                    'response' => $response->json(),
                ]);

                return $response->json();
            }

            $this->lastError = 'Taqnyat API failed with HTTP status ' . $response->status();
            $this->giftSmsLog()->error('Taqnyat SMS API returned failure', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            return false;
        } catch (\Exception $e) {
            $this->lastError = $e->getMessage();
            $this->giftSmsLog()->error('Taqnyat SMS exception', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return false;
        }
    }

    public function sendWelcomeMessage($phone, $name)
    {
        return $this->sendMessageFromSetting($phone, 'taqnyat_welcome_message', [
            'name' => $name,
            'app_name' => setting('app_name'),
        ]);
    }

    public function sendBookingCreatedMessage($phone, $bookingData)
    {
        return $this->sendMessageFromSetting($phone, 'taqnyat_booking_created', [
            'booking_id' => $bookingData['booking_id'] ?? '',
            'booking_date' => $bookingData['booking_date'] ?? '',
            'booking_time' => $bookingData['booking_time'] ?? '',
        ]);
    }

    public function sendBookingCancelledMessage($phone, $bookingData)
    {
        return $this->sendMessageFromSetting($phone, 'taqnyat_booking_cancelled', [
            'booking_id' => $bookingData['booking_id'] ?? '',
        ]);
    }

    public function sendGiftCardRecipientMessage(GiftCard $giftCard)
    {
        $this->giftSmsLog()->info('Building gift card recipient SMS', [
            'gift_card_id' => $giftCard->id,
            'recipient_phone' => $giftCard->recipient_phone,
            'payment_status' => (int) $giftCard->payment_status,
            'gift_status' => $giftCard->gift_status,
            'claim_url' => $giftCard->claim_url,
        ]);

        $serviceNames = $giftCard->services_list
            ->map(fn (Service $service) => $this->resolveDisplayValue($service->name))
            ->filter()
            ->implode(', ');

        $senderName = trim(($giftCard->user?->first_name ?? '') . ' ' . ($giftCard->user?->last_name ?? ''));

        $result = $this->sendMessageFromSetting($giftCard->recipient_phone, 'taqnyat_recipient', [
            'recipient_name' => $giftCard->recipient_name,
            'recipient_phone' => $giftCard->recipient_phone,
            'sender_name' => $senderName,
            'gift_ref' => (string) $giftCard->id,
            'ref' => (string) $giftCard->id,
            'gift_services' => $serviceNames,
            'gift_total' => $this->formatMoney($giftCard->subtotal ?? 0),
            'gift_url' => $giftCard->claim_url ?? '',
            'app_name' => setting('app_name'),
        ]);

        $this->giftSmsLog()->info('Gift card recipient SMS finished', [
            'gift_card_id' => $giftCard->id,
            'sent' => (bool) $result,
            'last_error' => $this->lastError,
        ]);

        return $result;
    }

    public function sendMessageFromSetting($recipients, string $settingKey, array $variables = [], ?string $fallback = null)
    {
        $message = setting($settingKey, $fallback);
        $message = $this->replaceVariables((string) $message, $variables);

        if (trim($message) === '') {
            $this->fail('empty_template', "SMS template [{$settingKey}] is empty.");
            return false;
        }

        $this->giftSmsLog()->debug('Resolved SMS template', [
            'setting_key' => $settingKey,
            'recipients' => is_array($recipients) ? $recipients : [$recipients],
            'message' => $message,
        ]);

        return $this->sendSms($recipients, $message);
    }

    public function getLastError(): ?string
    {
        return $this->lastError;
    }

    protected function fail(string $code, string $message): void
    {
        $this->lastError = $message;

        $this->giftSmsLog()->warning('Gift SMS skipped or failed before API request', [
            'code' => $code,
            'message' => $message,
        ]);
    }

    protected function giftSmsLog()
    {
        return Log::channel('gift_sms');
    }

    protected function replaceVariables($message, $variables)
    {
        foreach ($variables as $key => $value) {
            $message = str_replace("[[{$key}]]", (string) $value, $message);
        }

        return $message;
    }

    protected function resolveDisplayValue($value): string
    {
        if (is_array($value)) {
            $locale = app()->getLocale();
            $translated = $value[$locale] ?? $value['ar'] ?? $value['en'] ?? reset($value);

            return is_string($translated) ? trim($translated) : '';
        }

        return is_string($value) ? trim($value) : '';
    }

    protected function formatMoney($amount): string
    {
        $amount = (float) $amount;

        return floor($amount) == $amount ? (string) (int) $amount : number_format($amount, 2, '.', '');
    }

    protected function normalizeRecipients(array $recipients): array
    {
        return collect($recipients)
            ->map(function ($phone) {
                $phone = preg_replace('/[^0-9]/', '', (string) $phone);

                if (preg_match('/^00(9665[0-9]{8})$/', $phone, $matches)) {
                    return $matches[1];
                }

                if (preg_match('/^9665[0-9]{8}$/', $phone)) {
                    return $phone;
                }

                if (preg_match('/^05([0-9]{8})$/', $phone, $matches)) {
                    return '9665' . $matches[1];
                }

                if (preg_match('/^5[0-9]{8}$/', $phone)) {
                    return '966' . $phone;
                }

                return $phone;
            })
            ->filter()
            ->values()
            ->all();
    }

    protected function resolveSenderName(?string $sender = null): string
    {
        $senderName = trim((string) ($sender ?: $this->sender));

        if ($this->isInvalidSenderName($senderName)) {
            $fallback = trim((string) config('services.taqnyat.sender', 'SamiCare'));

            $this->giftSmsLog()->warning('Invalid Taqnyat sender setting ignored', [
                'configured_sender' => $senderName,
                'fallback_sender' => $fallback,
            ]);

            return $fallback !== '' ? $fallback : 'SamiCare';
        }

        return $senderName;
    }

    protected function isInvalidSenderName(string $senderName): bool
    {
        return $senderName === ''
            || mb_strlen($senderName) > 50
            || str_contains($senderName, '[[')
            || str_contains($senderName, ']]')
            || preg_match('/https?:\/\//i', $senderName);
    }

    public function validatePhoneNumber($phone)
    {
        $phone = preg_replace('/[^0-9]/', '', $phone);

        if (preg_match('/^(966)/', $phone)) {
            $phone = '0' . substr($phone, 3);
        }

        if (preg_match('/^5[0-9]{8}$/', $phone)) {
            $phone = '0' . $phone;
        }

        if (preg_match('/^05[0-9]{8}$/', $phone)) {
            return $phone;
        }

        return false;
    }
}
