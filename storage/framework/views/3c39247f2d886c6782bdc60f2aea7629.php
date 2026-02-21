

<?php $__env->startSection('title', 'الإحصائيات التفصيلية'); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header">
                <h5>إحصائيات الزوار والتحويلات آخر 30 يوم</h5>
            </div>
            <div class="card-body">
                <canvas id="statsChart" height="100"></canvas>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
let ctx = document.getElementById('statsChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: <?php echo json_encode($visitorLabels, 15, 512) ?>,
        datasets: [
            {
                label: 'الزوار',
                data: <?php echo json_encode($visitorData, 15, 512) ?>,
                borderColor: '#4e73df',
                backgroundColor: 'rgba(78,115,223,0.1)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'التحويلات',
                data: <?php echo json_encode($conversionData, 15, 512) ?>,
                borderColor: '#1cc88a',
                backgroundColor: 'rgba(28,200,138,0.1)',
                fill: true,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 15
                }
            }
        }
    }
});
</script>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('affiliate::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\Modules/Affiliate\Resources/views/stats.blade.php ENDPATH**/ ?>