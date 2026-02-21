<?php $__env->startSection('title', __('affiliate.affiliate_dashboard_title')); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
    <div class="col-lg-3 col-md-6">
        <div class="card card-block card-stretch card-height">
            <div class="card-body">
                <h6 class="text-muted"><?php echo e(__('affiliate.visitors')); ?></h6>
                <h3 class="mb-0"><?php echo e($totalVisitors); ?></h3>
            </div>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="card card-block card-stretch card-height">
            <div class="card-body">
                <h6 class="text-muted"><?php echo e(__('affiliate.conversions')); ?></h6>
                <h3 class="mb-0"><?php echo e($totalConversions); ?></h3>
            </div>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="card card-block card-stretch card-height">
            <div class="card-body">
                <h6 class="text-muted"><?php echo e(__('affiliate.earnings_total')); ?></h6>
                <h3 class="mb-0"><?php echo e(\Currency::format($totalEarnings)); ?></h3>
            </div>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="card card-block card-stretch card-height">
            <div class="card-body">
                <h6 class="text-muted"><?php echo e(__('affiliate.available_balance')); ?></h6>
                <h3 class="mb-0 text-success"><?php echo e(\Currency::format($availableEarnings)); ?></h3>
            </div>
        </div>
    </div>
</div>

<div class="card mt-4">
    <div class="card-header">
        <h5 class="mb-0"><?php echo e(__('affiliate.share_referral_link')); ?></h5>
    </div>
    <div class="card-body">
        <label class="form-label"><?php echo e(__('affiliate.your_referral_link')); ?></label>
        <div class="input-group">
            <input id="affiliateReferralLink" type="text" class="form-control" value="<?php echo e($referralLink); ?>" readonly>
            <button id="copyAffiliateReferralLink" class="btn btn-primary" type="button"><?php echo e(__('affiliate.copy_link')); ?></button>
        </div>
    </div>
</div>

<div class="card mt-4">
    <div class="card-header d-flex justify-content-between">
        <h5 class="mb-0"><?php echo e(__('affiliate.last_30_days_visitors')); ?></h5>
    </div>
    <div class="card-body">
        <canvas id="visitorsChart" height="100"></canvas>
    </div>
</div>

<div class="row mt-4">
    <div class="col-lg-6">
        <div class="card card-block">
            <div class="card-header">
                <h5><?php echo e(__('affiliate.latest_conversions')); ?></h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <?php $__empty_1 = true; $__currentLoopData = $lastConversions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $conv): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <li class="list-group-item d-flex justify-content-between">
                            <span><?php echo e(__('affiliate.order_number')); ?> #<?php echo e($conv->order_id); ?></span>
                            <span class="text-success"><?php echo e(\Currency::format($conv->commission)); ?></span>
                        </li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <li class="list-group-item text-muted"><?php echo e(__('affiliate.no_conversions')); ?></li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const ctx = document.getElementById('visitorsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: <?php echo json_encode($chartLabels, 15, 512) ?>,
            datasets: [{
                label: <?php echo json_encode(__('affiliate.visitors'), 15, 512) ?>,
                data: <?php echo json_encode($chartData, 15, 512) ?>,
                borderWidth: 2,
                borderColor: '#4e73df',
                fill: false,
                tension: 0.3
            }]
        }
    });

    const copyButton = document.getElementById('copyAffiliateReferralLink');
    const linkInput = document.getElementById('affiliateReferralLink');

    if (copyButton && linkInput) {
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(linkInput.value);
                copyButton.innerText = <?php echo json_encode(__('affiliate.copied'), 15, 512) ?>;
                setTimeout(() => {
                    copyButton.innerText = <?php echo json_encode(__('affiliate.copy_link'), 15, 512) ?>;
                }, 1200);
            } catch (error) {
                linkInput.select();
                document.execCommand('copy');
            }
        });
    }
</script>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('affiliate::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\Modules/Affiliate\Resources/views/dashboard.blade.php ENDPATH**/ ?>