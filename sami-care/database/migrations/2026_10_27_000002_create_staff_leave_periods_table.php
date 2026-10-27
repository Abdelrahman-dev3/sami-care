<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('staff_leave_periods')) {
            return;
        }

        Schema::create('staff_leave_periods', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('staff_id')->index();
            $table->date('start_date');
            $table->date('end_date');
            $table->string('reason')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('staff_leave_periods');
    }
};
