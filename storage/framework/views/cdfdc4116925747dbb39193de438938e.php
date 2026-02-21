<?php $__env->startSection('title', __('affiliate.admin_dashboard_title')); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card card-custom text-center">
                <div class="card-body">
                    <h5><?php echo e(__('affiliate.total_affiliates')); ?></h5>
                    <h3><?php echo e($totalAffiliates); ?></h3>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card card-custom text-center">
                <div class="card-body">
                    <h5><?php echo e(__('affiliate.total_visitors')); ?></h5>
                    <h3><?php echo e($totalVisitors); ?></h3>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card card-custom text-center">
                <div class="card-body">
                    <h5><?php echo e(__('affiliate.total_conversions')); ?></h5>
                    <h3><?php echo e($totalConversions); ?></h3>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card card-custom text-center">
                <div class="card-body">
                    <h5><?php echo e(__('affiliate.total_earnings')); ?></h5>
                    <h3><?php echo e(\Currency::format($totalEarnings)); ?></h3>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-2">
        <div class="col-12">
            <div class="card card-custom">
                <div class="card-header">
                    <h5 class="mb-0"><?php echo e(__('affiliate.referral_settings')); ?></h5>
                </div>
                <div class="card-body">
                    <form action="<?php echo e(route('affiliate.settings.update')); ?>" method="POST">
                        <?php echo csrf_field(); ?>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <label class="form-label"><?php echo e(__('affiliate.commission_calc_type')); ?></label>
                                <select class="form-control" name="commission_calc_type" required>
                                    <option value="fixed" <?php if($commissionCalcType === 'fixed'): echo 'selected'; endif; ?>><?php echo e(__('affiliate.fixed')); ?></option>
                                    <option value="percentage" <?php if($commissionCalcType === 'percentage'): echo 'selected'; endif; ?>><?php echo e(__('affiliate.percentage')); ?></option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <label class="form-label"><?php echo e(__('affiliate.commission_value')); ?></label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    class="form-control"
                                    name="commission_value"
                                    value="<?php echo e(old('commission_value', $commissionValue)); ?>"
                                    required
                                >
                            </div>

                            <div class="col-md-4">
                                <label class="form-label"><?php echo e(__('affiliate.commission_apply_type')); ?></label>
                                <select class="form-control" name="commission_apply_type" required>
                                    <option value="first_purchase" <?php if($commissionApplyType === 'first_purchase'): echo 'selected'; endif; ?>><?php echo e(__('affiliate.first_purchase')); ?></option>
                                    <option value="recurring" <?php if($commissionApplyType === 'recurring'): echo 'selected'; endif; ?>><?php echo e(__('affiliate.recurring')); ?></option>
                                </select>
                            </div>
                        </div>

                        <div class="mt-3">
                            <button type="submit" class="btn btn-primary"><?php echo e(__('affiliate.save_settings')); ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-12">
            <div class="card card-custom">
                <div class="card-header">
                    <h5><?php echo e(__('affiliate.top_affiliates')); ?></h5>
                </div>
                <div class="card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th><?php echo e(__('affiliate.name')); ?></th>
                            <th><?php echo e(__('affiliate.email')); ?></th>
                            <th><?php echo e(__('affiliate.ref_code')); ?></th>
                            <th><?php echo e(__('affiliate.conversions')); ?></th>
                            <th><?php echo e(__('affiliate.wallet_total')); ?></th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php $__currentLoopData = $topAffiliates; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $affiliate): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <tr>
                                <td><?php echo e($loop->iteration); ?></td>
                                <td><?php echo e($affiliate->user->full_name ?? $affiliate->user->first_name); ?></td>
                                <td><?php echo e($affiliate->user->email); ?></td>
                                <td><?php echo e($affiliate->ref_code); ?></td>
                                <td><?php echo e($affiliate->conversions_count); ?></td>
                                <td><?php echo e(\Currency::format($affiliate->wallet_total)); ?></td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\Modules/Affiliate\Resources/views/admin/dashboard.blade.php ENDPATH**/ ?>