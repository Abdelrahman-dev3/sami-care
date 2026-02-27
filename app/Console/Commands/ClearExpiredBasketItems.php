<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Modules\Booking\Models\BookingService;

class ClearExpiredBasketItems extends Command
{
    protected $signature = 'basket:clear-expired';
    protected $description = 'Delete expired basket items based on service_duration_minutes setting';

    public function handle()
    {
        $setting = DB::table('settings')->where('name', 'service_duration_minutes')->first();

        if (!$setting) {
            $this->info('service_duration_minutes setting not found, skipping.');
            return;
        }

        $duration = (int) $setting->val;

        $this->info("Duration: {$duration} minutes");
        $this->info("Deleting items created before: " . now()->subMinutes($duration));

        $deleted = BookingService::where('created_at', '<', now()->subMinutes($duration))->delete();

        $this->info("Deleted {$deleted} expired basket items.");
    }
}
