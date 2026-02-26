<?php
    use Carbon\Carbon;
?>
<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

    <title><?php echo $__env->yieldContent('title'); ?> | <?php echo e(app_name()); ?></title>

    <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <?php if(language_direction() == 'rtl'): ?>
        <link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>">
    <?php endif; ?>
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
    <?php echo $__env->yieldPushContent('after-styles'); ?>
    <style>
        body {
            font-family: 'Zain', sans-serif;
            margin: 0;
            padding: 0;
        }

        .offer {
          position: relative;
          color: #fff;
          padding: 60px 73px;
        }

        .offer .content-p {
          position: relative;
          z-index: 2;
        }

        .offer::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          border-bottom: 3px solid darkgrey;
        }

        .offer h2 {
          color: white;
          font-size: 40px;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .offer p {
          color: black;
          font-size: 18px;
          margin: 8px 0;
          line-height: 2;
        }

        .price {
          font-size: 22px;
          font-weight: bold;
          color: white !important;
          margin: 10px 0;
        }

        .last-sec {
            display: flex;
            justify-content: flex-start;
            gap: 10%;
        }
        .more-btn{
            margin-top: 9px;
            width: 30%;
            height: 55px;
            background-color: white;
            border-radius: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            color: #CF9233;
        }
        .more-btn:hover{
            color: #CF9233;
        }
        .more-btn::before {
            content: "";
            position: absolute;
            width: 96%;
            height: 80%;
            border: 2px solid #CF9233;
            border-radius: 28px;
        }

  </style>
</head>
<body>
    <?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="position-relative" style="height: 17vh;">
        <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <?php if($pages->isEmpty()): ?>
    
        <?php echo $__env->make('components.frontend.no-offers', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    
    <?php else: ?>
        <?php $__currentLoopData = $pages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $page): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php
                $startDate = Carbon::parse($page->start_date)->translatedFormat('l d-m-Y');
                $endDate   = Carbon::parse($page->end_date)->translatedFormat('l d-m-Y');
                $description = $page->description[app()->getLocale()] ?? '';
                $originalPrice = 500;
        
                if ($page->discount_type === 'percentage') {
                    $result = $originalPrice - ($originalPrice * ($page->discount_value / 100));
                } else {
                    $result = $originalPrice - $page->discount_value;
                }
            ?>
    
            <?php if($page->overlay): ?>
            <style>
            .offer<?php echo e($page->id); ?>::after {
                background: rgba(0, 0, 0, 0.55);
            }
            </style>
            <?php endif; ?>
            <section class="offer offer<?php echo e($page->id); ?>" style="
                background-color: <?php echo e($page->color ?? '#c68b2c'); ?>;
                <?php if($page->image): ?>
                    background-image: url('<?php echo e(asset($page->image)); ?>');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    height: 350px;
                <?php endif; ?>
            ">
    
            <div class="content-p">
                <h2><?php echo e(__('messages.discount')); ?> <?php echo e(intval($page->discount_value)); ?> <?php echo e($page->discount_type == 'percentage' ? '%' : 'ريال'); ?></h2>
                <p style="font-weight: bold !important;"><?php echo e($description); ?></p>
                <p style="font-weight: 300 !important;"><?php echo nl2br(__('messagess.valid_offer', ['start' => $startDate, 'end' => $endDate])); ?></p>
                <div class="last-sec">
                    <p class="price"><?php echo e(__('messages.price_text', ['price' => $result, 'old_price' => 500])); ?></p>
                    <a href="<?php echo e($page->link ?? '/salonService'); ?>" class="more-btn"><?php echo e(__('messages.shop_now')); ?></a>
                </div>
            </div>
        </section>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    <?php endif; ?>
    <div class="position-relative" style="height: 17vh;">
    </div>
    <?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
<?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\Modules/rontend\Resources/views/Ouroffers.blade.php ENDPATH**/ ?>