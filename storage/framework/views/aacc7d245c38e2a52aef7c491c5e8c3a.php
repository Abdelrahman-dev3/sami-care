

<?php $__env->startSection('title', 'التحويلات'); ?>

<?php $__env->startSection('content'); ?>

<div class="card">
    <div class="card-header">
        <h5>قائمة التحويلات</h5>
    </div>
    <div class="card-body table-responsive">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>رقم الطلب</th>
                    <th>العميل</th>
                    <th>المبلغ المكتسب</th>
                    <th>الحالة</th>
                    <th>تاريخ التحويل</th>
                </tr>
            </thead>
            <tbody>
                <?php $__empty_1 = true; $__currentLoopData = $conversions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $conv): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <tr>
                    <td><?php echo e($conv->id); ?></td>
                    <td><?php echo e($conv->order_id); ?></td>
                    <td><?php echo e($conv->user->name ?? '-'); ?></td>
                    <td>$<?php echo e(number_format($conv->commission, 2)); ?></td>
                    <td><?php echo e($conv->status); ?></td>
                    <td><?php echo e($conv->created_at->format('Y-m-d H:i')); ?></td>
                </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr>
                    <td colspan="6" class="text-center text-muted">لا يوجد تحويلات</td>
                </tr>
                <?php endif; ?>
            </tbody>
        </table>

        <?php echo e($conversions->links()); ?>

    </div>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('affiliate::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\Modules/Affiliate\Resources/views/conversions.blade.php ENDPATH**/ ?>