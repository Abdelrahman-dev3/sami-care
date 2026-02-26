<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

    <title><?php echo $__env->yieldContent('title'); ?> | <?php echo e(app_name()); ?></title>

    <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
    <?php if(language_direction() == 'rtl'): ?>
        <link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>">
    <?php endif; ?>
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <?php echo $__env->yieldPushContent('after-styles'); ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
</head>
<body>
    <?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="position-relative" style="height: 21vh;">
        <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <?php if (isset($component)) { $__componentOriginalacfe7454e8da0685f528f93a6061c57e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalacfe7454e8da0685f528f93a6061c57e = $attributes; } ?>
<?php $component = App\View\Components\Frontend\Payment::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.payment'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Frontend\Payment::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['items-count' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($serviceCount + $productCount + $GifttCount),'total-price' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($finalPrice),'page-name' => 'cart','products-amount' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($productPrice),'wallet' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($wallet->amount ?? 0),'loyalty-balance' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($loyaltyBalance ?? 0),'branches' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($branches)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalacfe7454e8da0685f528f93a6061c57e)): ?>
<?php $attributes = $__attributesOriginalacfe7454e8da0685f528f93a6061c57e; ?>
<?php unset($__attributesOriginalacfe7454e8da0685f528f93a6061c57e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalacfe7454e8da0685f528f93a6061c57e)): ?>
<?php $component = $__componentOriginalacfe7454e8da0685f528f93a6061c57e; ?>
<?php unset($__componentOriginalacfe7454e8da0685f528f93a6061c57e); ?>
<?php endif; ?>
    <div class="position-relative" style="height: 19vh;"></div>
    <!-- Footer -->
    <?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <?php if(session('error')): ?>
        <script>
            createNotify({
                title: 'خطأ',
                desc: "<?php echo e(session('error')); ?>",
                autoplay: true
            });
        </script>
        <?php endif; ?>

        <?php if(session('success')): ?>
        <script>
            createNotify({
                title: 'نجاح',
                desc: "<?php echo e(session('success')); ?>",
                autoplay: true
            });
        </script>
    <?php endif; ?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
</body>
</html>
<?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\Modules/rontend\Resources/views/payment.blade.php ENDPATH**/ ?>