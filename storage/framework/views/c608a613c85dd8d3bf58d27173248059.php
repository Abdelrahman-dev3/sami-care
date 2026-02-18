

<?php $__env->startSection('title'); ?>
<?php echo e(__($module_action)); ?> - <?php echo e($customer->full_name); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="card">
    <div class="card-body">
        <?php if (isset($component)) { $__componentOriginal57a22d33ea7984d606412297cfe33b67 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal57a22d33ea7984d606412297cfe33b67 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.backend.section-header','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('backend.section-header'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
            <div>
                <h5 class="mb-0"><?php echo e(__('messages.loyalty_points')); ?> - <?php echo e($customer->full_name); ?></h5>
                <small class="text-muted"><?php echo e($customer->email ?? $customer->mobile); ?></small>
            </div>
             <?php $__env->slot('toolbar', null, []); ?> 
                <a href="<?php echo e(route('backend.customers.index')); ?>" class="btn btn-secondary">
                    <i class="fa-solid fa-arrow-left"></i> <?php echo e(__('messages.back')); ?>

                </a>
             <?php $__env->endSlot(); ?>
         <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal57a22d33ea7984d606412297cfe33b67)): ?>
<?php $attributes = $__attributesOriginal57a22d33ea7984d606412297cfe33b67; ?>
<?php unset($__attributesOriginal57a22d33ea7984d606412297cfe33b67); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal57a22d33ea7984d606412297cfe33b67)): ?>
<?php $component = $__componentOriginal57a22d33ea7984d606412297cfe33b67; ?>
<?php unset($__componentOriginal57a22d33ea7984d606412297cfe33b67); ?>
<?php endif; ?>

        <div class="table-responsive">
            <table class="table table-striped border">
                <thead>
                    <tr>
                        <th><?php echo e(__('messages.date')); ?></th>
                        <th><?php echo e(__('messages.type')); ?></th>
                        <th><?php echo e(__('messages.points')); ?></th>
                        <th><?php echo e(__('messages.balance')); ?></th>
                        <th><?php echo e(__('messages.source')); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__empty_1 = true; $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tx): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td><?php echo e(optional($tx->created_at)->format('Y-m-d H:i')); ?></td>
                            <td>
                                <?php if($tx->action === 'add'): ?>
                                    <span class="badge bg-soft-success"><?php echo e(__('messages.add')); ?></span>
                                <?php else: ?>
                                    <span class="badge bg-soft-danger"><?php echo e(__('messages.deduct')); ?></span>
                                <?php endif; ?>
                            </td>
                            <td><?php echo e($tx->points); ?></td>
                            <td><?php echo e($tx->balance_after ?? '-'); ?></td>
                            <td><?php echo e($tx->source ?? '-'); ?></td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="5" class="text-center text-muted"><?php echo e(__('messages.no_data_found')); ?></td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>

        <div class="mt-3">
            <?php echo e($transactions->links()); ?>

        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/Modules/Customer/Resources/views/backend/customers/loyalty_history.blade.php ENDPATH**/ ?>