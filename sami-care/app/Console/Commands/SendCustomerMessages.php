<?php
namespace App\Console\Commands;

use App\Services\CustomerMessages;
use App\Services\TaqnyatSmsService;
use Illuminate\Console\Command;

class SendCustomerMessages extends Command
{
    protected $signature = 'customers:send-messages {--birthdays : Prepare birthday messages for today}';
    protected $description = 'Prepare birthday messages or deliver scheduled customer WhatsApp messages';

    public function handle(CustomerMessages $messages): int
    {
        if ($this->option('birthdays')) {
            $messages->birthdays();
        } else {
            $this->info('Processed: '.$messages->sendDue(app(TaqnyatSmsService::class)));
        }
        return self::SUCCESS;
    }
}
