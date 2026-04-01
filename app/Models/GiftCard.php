<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Service\Models\Service;

class GiftCard extends Model
{
    protected $fillable = [
        'recipient_name',
        'recipient_phone',
        'message',
        'requested_services',
        'user_id',
        'options_amount',
        'subtotal',
        'payment_status',
    ];

    protected $casts = [
        'requested_services' => 'array',
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
}
