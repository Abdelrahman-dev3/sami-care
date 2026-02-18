<?php
    use App\Models\Branch;
    $branches = Branch::where('status', 1)->whereNull('deleted_by')->get();
?>
<link rel="stylesheet" href="<?php echo e(asset('pages-css/slider.css')); ?>">
    <?php echo e($slot); ?>

<div class="main-head">
    <h2 class="mb-5 mt-3 text-center" style="position: relative;z-index: 1;font-size: 42px;color:white;font-weight: bold;">
        <?php echo e(__('slider.our_branches')); ?>

    </h2>

    <img src="<?php echo e(asset('images/frontend/Rectangle 17.png')); ?>" alt="Gift Background" class="w-100 position-absolute top-0 start-0" style="object-fit: cover; min-height: 120%">
        <div class="position-relative row justify-content-center g-4" style="margin-top: 60px;">
            <?php $__currentLoopData = $branches; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $branch): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-12 col-md-3" style="display: flex;justify-content: center;">
                    <div class="branch-card">
                        <div class="branch-image">
                            <img src="<?php echo e(asset($branch->feature_image)); ?>" alt="<?php echo e($branch->name); ?>">
                        </div>
                        <div class="branch-content">
                            <h3 class="branch-title"><?php echo e($branch->name); ?></h3>
                            <p class="branch-address"><?php echo e($branch->description ?? ''); ?></p>
                            <a href="<?php echo e(route('salon.create' , ['branch_id' => $branch->id])); ?>" class="more-btn-hero">
                                <p style="color:white;font-size: 16px;margin: 0 13px;"><?php echo e(__('messagess.book_now')); ?> <img style="width: 15px;" src="<?php echo e(asset('images/icons/Vector (2).png')); ?>" ></p>
                            </a>
                        </div>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
</div><?php /**PATH /home/city2tec/sami-care.sa/resources/views/components/frontend/slider.blade.php ENDPATH**/ ?>