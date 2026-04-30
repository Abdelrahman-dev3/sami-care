<?php

namespace App\Services;

use App\Models\GiftCard;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\Setting;
use Modules\Service\Models\Service;

class TaqnyatSmsService
{
    protected $apiKey;
    protected $sender;
    protected $baseUrl = 'https://api.taqnyat.sa/v1';

    public function __construct()
    {
        $this->apiKey = setting('taqnyat_api_key');
        $this->sender = setting('taqnyat_sender');
    }

    /**
     * إرسال رسالة SMS
     */
    public function sendSms($recipients, $message, $sender = 'SamiCare')
    { 
        if (!setting('is_taqnyat_sms')) {
            return false;
        }

        if (empty($this->apiKey)) {
            return false;
        }
        try {
            $response = Http::withHeaders([
                'Authorization' => "Bearer {$this->apiKey}",
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ])->post("{$this->baseUrl}/messages", [
                'recipients' => is_array($recipients) ? $recipients : [$recipients],
                'body' => $message,
                'sender' => $sender ?: $this->sender,
            ]);

            if ($response->successful()) {
                $result = $response->json();
                return $result;
            } else {
                        Log::error('Taqnyat SMS Failed', [
            'status' => $response->status(),
            'body' => $response->body()
        ]);
                return false;
            }
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * إرسال رسالة ترحيب عند التسجيل
     */
    public function sendWelcomeMessage($phone, $name)
    {
        return $this->sendMessageFromSetting($phone, 'taqnyat_welcome_message', [
            'name' => $name,
            'app_name' => setting('app_name')
        ]);
    }

    /**
     * إرسال رسالة عند إنشاء حجز
     */
    public function sendBookingCreatedMessage($phone, $bookingData)
    {
        return $this->sendMessageFromSetting($phone, 'taqnyat_booking_created', [
            'booking_id' => $bookingData['booking_id'] ?? '',
            'booking_date' => $bookingData['booking_date'] ?? '',
            'booking_time' => $bookingData['booking_time'] ?? ''
        ]);
    }

    /**
     * إرسال رسالة عند إلغاء الحجز
     */
    public function sendBookingCancelledMessage($phone, $bookingData)
    {
        return $this->sendMessageFromSetting($phone, 'taqnyat_booking_cancelled', [
            'booking_id' => $bookingData['booking_id'] ?? ''
        ]);
    }
    /**
     * إرسال هدية
     */
    public function sendGiftCardRecipientMessage(GiftCard $giftCard)
    {
        $serviceNames = $giftCard->services_list
            ->map(fn (Service $service) => $this->resolveDisplayValue($service->name))
            ->filter()
            ->implode('، ');

        return $this->sendMessageFromSetting($giftCard->recipient_phone, 'taqnyat_recipient', [
            'recipient_name' => $giftCard->recipient_name,
            'recipient_phone' => $giftCard->recipient_phone,
            'gift_ref' => (string) $giftCard->id,
            'gift_services' => $serviceNames,
            'gift_total' => $this->formatMoney($giftCard->subtotal ?? 0),
            'app_name' => setting('app_name'),
        ]);
    }

    public function sendMessageFromSetting($recipients, string $settingKey, array $variables = [], ?string $fallback = null)
    {
        $message = setting($settingKey, $fallback);
        $message = $this->replaceVariables((string) $message, $variables);

        if (trim($message) === '') {
            return false;
        }

        return $this->sendSms($recipients, $message);
    }

    /**
     * استبدال المتغيرات في الرسالة
     */
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
            $translated = $value[$locale] ?? reset($value);

            return is_string($translated) ? trim($translated) : '';
        }

        return is_string($value) ? trim($value) : '';
    }

    protected function formatMoney($amount): string
    {
        $amount = (float) $amount;

        return floor($amount) == $amount ? (string) (int) $amount : number_format($amount, 2, '.', '');
    }

    /**
     * التحقق من صحة رقم الهاتف
     */
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
