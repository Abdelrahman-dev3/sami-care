<?php
    use App\Models\Ouroffersection;
    use Carbon\Carbon;
    $page = Ouroffersection::where('end_date', '>', Carbon::now())->latest()->first();
?>
<link rel="stylesheet" href="<?php echo e(asset('pages-css/discount.css')); ?>">
<?php if($page): ?>
<div class="head-discount">
    <div class="radius">
        <div class="discount-section">
            <?php if($page): ?>
                <?php
                    $startDate = Carbon::parse($page->start_date ?? 0)->translatedFormat('l d-m-Y');
                    $endDate   = Carbon::parse($page->end_date ?? 0)->translatedFormat('l d-m-Y');
                    $description = $page->description[app()->getLocale()] ?? '';
                    $originalPrice = 500;
        
                    if ($page->discount_type === 'percentage') {
                        $result = $originalPrice - ($originalPrice * ($page->discount_value / 100));
                    } else {
                        $result = $originalPrice - $page->discount_value;
                    }
                ?>
                <h1><?php echo e(__('messages.discount')); ?> <?php echo e(intval($page->discount_value)); ?> <?php echo e($page->discount_type == 'percentage' ? '%' : 'ريال'); ?></h1>
                <h3><?php echo e($description); ?> "vdsfimvdfojbdgoindgoi nfgonfgon"</h3>
                <div style="width: 17%;margin: auto;">
                    <a href="<?php echo e(route('frontend.Ouroffers')); ?>" class="more-btn-discount">
                        <p style="color:white;font-size: 16px;margin: 0 13px;color:#BF9456"><?php echo e(__('messagess.learn_more')); ?></p>
                    </a>
                </div>
            <?php endif; ?>
        </div>
        <img src="<?php echo e(asset('fl-dis.png')); ?>" alt="" style="position: absolute;left: 0;bottom: -11px;width: 195px;">
        <img src="<?php echo e(asset('wavy.png')); ?>" alt="fl img" style="position: absolute;right: 0;bottom: 0;">
    </div>
</div>
<?php endif; ?><?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/components/frontend/discount.blade.php ENDPATH**/ ?>