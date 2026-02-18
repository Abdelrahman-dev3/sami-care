<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title><?php echo $__env->yieldContent('title'); ?> | <?php echo e(app_name()); ?></title>

<link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
<link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
<?php if(language_direction() == 'rtl'): ?>
<link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>">
<?php endif; ?>
<link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family: 'Almarai';
}

/* ================= HERO ================= */

.hero{
    position:relative;
    min-height:765px;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
}

.hero-bg{
    position:absolute;
    inset:0;
}

.hero-bg img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.hero-overlay{
    position:absolute;
    inset:0;
    background:rgba(0,0,0,0.75);
}

.hero-content{
    position:relative;
    z-index:5;
    width:100%;
}

.hero-inner{
    font-family: 'Almarai';
    max-width:1292px;
    margin:auto;
    display:flex;
    align-items:unset;
    justify-content:space-between;
    gap:70px;
}

/* النص */
.hero-heading{
    width:27%;
    color:#fff;
    font-size:19px;
    line-height:1.9;
    font-family: 'Almarai';
}

/* ================= CARD ================= */

.pricing-card{
    width:435px;
    font-family: 'Almarai';
}

/* الهيدر الذهبي */
.pricing-header{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #CF9233;
    border-radius: 5px;
    overflow: hidden;
    padding: 10px;
    margin-bottom: 20px;
}

.pricing-header-item{
    padding: 15px;
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 18px;
}

/* الصفوف */
.pricing-rows{
    display:flex;
    flex-direction:column;
    gap:15px;
}

.pricing-row{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #f2f2f2;
    border-radius: 5px;
    overflow: hidden;
    padding: 10px;
    transition: 0.3s ease;
    font-weight: 600;
    font-size: 18px;
}

.pricing-row:hover{
    transform:translateY(-3px);
    box-shadow:0 8px 20px rgba(0,0,0,0.25);
}

.pricing-cell{
    padding:15px;
    text-align:center;
    font-weight:600;
    color:#222;
}

.h-10{
    height:0;
}
.virtual-card{
    width: 258px;
}
/* ================= MOBILE ================= */

@media(max-width:992px){

    .hero-inner{
        flex-direction:column;
        text-align:center;
        gap:40px;
    }

    .hero-heading{
        width:100%;
    }

}

</style>

</head>

<body>

<?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<!-- ================= HERO SECTION ================= -->

<section class="hero">

    <div class="hero-bg">
        <img src="<?php echo e(asset('images/pages/loyalty-bg.jpg')); ?>" alt="">
        <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
        <div class="hero-inner">

            <!-- النص -->
            <div class="hero-heading">
                <?php echo e(__('messages.loyalty_points_info')); ?>

            </div>

            <!-- الكارت -->
            <div class="pricing-card">

                <div class="pricing-header">
                    <div class="pricing-header-item">
                        <?php echo e(__('messages.amount')); ?>

                    </div>
                    <div class="pricing-header-item">
                        <?php echo e(__('messages.points_number')); ?>

                    </div>
                </div>

                <div class="pricing-rows">

                    <div class="pricing-row">
                        <div class="pricing-cell">
                            <?php echo e($point_value * 200); ?> <?php echo e(__('messages.currency')); ?>

                        </div>
                        <div class="pricing-cell">
                            200 <?php echo e(__('messages.point')); ?>

                        </div>
                    </div>

                    <div class="pricing-row">
                        <div class="pricing-cell">
                            <?php echo e($point_value * 400); ?> <?php echo e(__('messages.currency')); ?>

                        </div>
                        <div class="pricing-cell">
                            400 <?php echo e(__('messages.point')); ?>

                        </div>
                    </div>

                    <div class="pricing-row">
                        <div class="pricing-cell">
                            <?php echo e($point_value * 800); ?> <?php echo e(__('messages.currency')); ?>

                        </div>
                        <div class="pricing-cell">
                            800 <?php echo e(__('messages.point')); ?>

                        </div>
                    </div>

                    <div class="pricing-row">
                        <div class="pricing-cell">
                            <?php echo e($point_value * 1600); ?> <?php echo e(__('messages.currency')); ?>

                        </div>
                        <div class="pricing-cell">
                            1600 <?php echo e(__('messages.point')); ?>

                        </div>
                    </div>

                </div>

            </div>
            
            <div class="virtual-card"></div>

        </div>
    </div>

</section>

<?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

</body>
</html>
<?php /**PATH /home/city2tec/sami-care.sa/resources/views/components/frontend/loyalety.blade.php ENDPATH**/ ?>