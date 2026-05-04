<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Modules\Service\Models\Service;

class GiftCard extends Model
{
    public const STATUS_PENDING_PAYMENT = 'pending_payment';
    public const STATUS_PAID = 'paid';
    public const STATUS_SENT = 'sent';
    public const STATUS_CLAIMED = 'claimed';
    public const STATUS_REDEEMED = 'redeemed';

    protected $fillable = [
        'recipient_name',
        'recipient_phone',
        'message',
        'requested_services',
        'user_id',
        'branch_id',
        'booking_ids',
        'options_amount',
        'subtotal',
        'payment_status',
        'claim_token',
        'gift_status',
        'send_channel',
        'send_status',
        'send_error',
        'sent_at',
        'claimed_at',
        'redeemed_at',
    ];

    protected $casts = [
        'requested_services' => 'array',
        'booking_ids' => 'array',
        'sent_at' => 'datetime',
        'claimed_at' => 'datetime',
        'redeemed_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getServicesListAttribute()
    {
        $serviceIds = $this->requested_services ?? '[]';

        if (! is_array($serviceIds)) {
            return collect();
        }

        return Service::whereIn('id', $serviceIds)->get();
    }

    public function getClaimUrlAttribute(): ?string
    {
        if (blank($this->claim_token)) {
            return null;
        }

        return route('gift.claim', ['token' => $this->claim_token]);
    }

    public function ensureClaimToken(): string
    {
        if (filled($this->claim_token)) {
            return $this->claim_token;
        }

        do {
            $token = Str::random(64);
        } while (self::where('claim_token', $token)->exists());

        $this->forceFill(['claim_token' => $token])->save();

        return $token;
    }

    public function markSmsSent(bool $sent, ?string $error = null): void
    {
        $this->forceFill([
            'send_channel' => 'sms',
            'send_status' => $sent ? 'sent' : 'failed',
            'send_error' => $sent ? null : $error,
            'sent_at' => $sent ? now() : $this->sent_at,
            'gift_status' => $sent ? self::STATUS_SENT : ($this->gift_status ?: self::STATUS_PAID),
        ])->save();
    }
}
