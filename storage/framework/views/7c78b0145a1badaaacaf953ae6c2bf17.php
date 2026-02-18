<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo e(__('messages.gift_cards_list')); ?> | <?php echo e(app_name()); ?></title>

    <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">

    <?php if(language_direction() == 'rtl'): ?>
        <link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>">
    <?php endif; ?>

<style>
.gift-card {
    position: relative;
    background: #000;
    color: #e5b95c;
    overflow: hidden;
    min-height: 320px;
    width: 100%;
    box-shadow: 0 15px 40px rgba(0,0,0,.4);
    padding: 6px;
    border-radius: 10px;
}
.gift-card::before {
    content: "";
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(to right, #d4a437, #f3d27a, #d4a437);
}

.gift-card::after {
    content: "";
    position: absolute;
    top: 0;
    right: 90px;
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #d4a437, #f3d27a, #d4a437);
}

.gift-title {
    font-size: 37px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 68px;
}

.gift-text {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    width: 59%;
    margin: auto;
}

.gift-service-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 59%;
    margin: auto;
}

.gift-service {
    text-align: center;
    font-size: 17px;
    width: 59%;
    margin: auto;
}

.gift-bow {
    position: absolute;
    top: 60px;
    right: 49px;
    width: 90px;
    z-index: 99;
}


.gift-logo span {
    display: block;
    font-weight: bold;
    font-size: 18px;
}

.gift-logo small {
    font-size: 13px;
}
</style>
</head>

<body class="bg-white">

<?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<div class="position-relative" style="height: 17vh;">
    <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</div>

<section class="py-5">
    <div class="container">
    
        <?php if($gifts->isEmpty()): ?>
            <div class="text-center text-muted"><?php echo e(__('messages.gift_empty_state')); ?></div>
        <?php else: ?>
    
        <div class="row g-4">
        <?php $__currentLoopData = $gifts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $gift): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                <div class="gift-card">
                    <img src="<?php echo e(asset('images/gold-bow.png')); ?>" class="gift-bow">
                
                    <div class="gift-title">
                        <?php echo e(__('messages.gift_card_title')); ?>

                    </div>
                    
                    <div class="gift-text">
                        <?php echo e(__('messages.gift_to')); ?> : <?php echo e($gift->recipient_name ?? '-'); ?>

                    </div>
                    
                    <div class="gift-text">
                        <?php echo e(__('messages.gift_from')); ?> : <?php echo e($gift->sender_name ?? '-'); ?>

                    </div>
                    
                    <div class="gift-text mt-3">
                        <?php echo e($gift->message ?? '-'); ?>

                    </div>
                    
                    <div class="gift-service-title">
                        <?php echo e(__('messages.gift_service_title')); ?>

                    </div>
                    
                    <div class="gift-service">
                        <?php $__empty_1 = true; $__currentLoopData = $gift->services_list; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            -<?php echo e($service->name); ?> <br/>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            -
                        <?php endif; ?>
                
                    </div>
            
                    <div class="gift-logo">
                        <span>SAMI</span>
                    </div>
            
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    <?php endif; ?>
    </div>
</section>

<div class="position-relative" style="height: 17vh;"></div>
<?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html><?php /**PATH /home/city2tec/sami-care.sa/resources/views/components/frontend/auth/complate-gifts.blade.php ENDPATH**/ ?>