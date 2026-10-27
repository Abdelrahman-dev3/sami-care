<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Sidebar layout: id => order. Anything else at the root of the vertical
     * menu (duplicated shop blocks, packages with a missing route, ...) is hidden.
     * Orders 59-62 are left free for the report links added in sidebar.blade.php.
     */
    private array $layout = [
        // الرئيسية
        1 => 1, 2 => 2, 3 => 3, 6 => 4,
        // الشركة
        4 => 10, 5 => 11, 7 => 12, 185 => 13, 190 => 14, 11 => 15, 191 => 16,
        // المتجر
        106 => 20, 107 => 21, 114 => 22, 115 => 23,
        // المستخدمين
        13 => 30, 14 => 31, 15 => 32, 179 => 33, 192 => 34,
        // المالية
        17 => 40, 18 => 41, 19 => 42, 184 => 43, 20 => 44,
        // التقارير
        21 => 50, 22 => 51, 23 => 52, 24 => 53, 25 => 54, 80 => 55, 180 => 56, 182 => 57, 183 => 58,
        // النظام
        26 => 70, 27 => 71, 33 => 72, 66 => 73, 97 => 74,
    ];

    public function up(): void
    {
        $vertical = DB::table('menubuilders')->where('menu_type', 'vertical');

        (clone $vertical)->whereNull('parent_id')->update(['status' => 0, 'order' => 999]);

        foreach ($this->layout as $id => $order) {
            DB::table('menubuilders')->where('id', $id)->update([
                'status' => 1,
                'order' => $order,
                'updated_at' => now(),
            ]);
        }

        // Membership was a "static" header, which never renders its children.
        DB::table('menubuilders')->where('id', 192)->update([
            'menu_item_type' => 'parent',
            'nickname' => 'membership',
            'title' => 'نظام العضويات',
        ]);

        $childOrders = [8 => 0, 9 => 1, 10 => 2, 108 => 0, 109 => 1, 110 => 2, 111 => 3, 112 => 4, 113 => 5];
        foreach ($childOrders as $id => $order) {
            DB::table('menubuilders')->where('id', $id)->update(['order' => $order]);
        }

        Cache::forget('menu.builder');
    }

    public function down(): void
    {
        // Layout change only; nothing to roll back.
    }
};
