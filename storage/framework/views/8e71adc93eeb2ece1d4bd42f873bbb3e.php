<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title><?php echo $__env->yieldContent('title'); ?> | <?php echo e(app_name()); ?></title>
    <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
    <?php if(language_direction() == 'rtl'): ?><link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>"><?php endif; ?>
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">

    <?php echo $__env->yieldPushContent('after-styles'); ?>
    <style>
    .continer{
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    .sub-continer{
        overflow: hidden;
        position: relative;
        height: 529px;
        background: #F8F8F8;
        width: 1320px;
        display: flex;
        margin: 52px 0;
    }
    .style-box{
        width: 50%;
        height: 58%;
        background: #CF9233;
        position: absolute;
        left: -25%;
        top: -172px;
        rotate: 318deg;
    }
    .form{
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: center;
    }
    .content{
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
      .section {
      max-width: 800px;
      margin: 40px auto;
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }

    h2 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 6px;
      color: #c48b16;
    }

    .icon {
      margin-left: 6px;
      color: #c48b16;
    }

    p {
      margin: 0 0 15px;
      font-size: 16px;
      color: #444;
    }

    .branches {
      display: flex;
      justify-content: space-around;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .branch {
      flex: 1;
      min-width: 280px;
      text-align: right;
    }

    .branch strong {
      display: block;
      margin-bottom: 6px;
      font-size: 18px;
      color: #444;
    }

    .branch p {
      margin: 4px 0;
      font-size: 15px;
      color: #333;
    }

    .phone {
      color: #c48b16;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .whatsapp-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: #25d366;
      color: white;
      font-size: 16px;
      font-weight: 600;
      padding: 14px 22px;
      border-radius: 50px;
      text-decoration: none;
      margin-top: 25px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: 0.3s;
    }
    .whatsapp-btn:hover {
      background: #1ebe5d;
    }

    .whatsapp-btn svg {
      width: 22px;
      height: 22px;
      fill: white;
    }
    @media (max-width: 576px) {
        .w-100-mob {
            width: 100% !important;
        }
    }
    @media (max-width: 992px) {
    .continer {
        height: fit-content;
    }
    .sub-continer {
        flex-direction: column-reverse;
        text-align: center;
        overflow: unset;
        height: fit-content;
    }

    .form, .content {
        width: 100%;
    }

    .style-box {
        display:none;
    }

    .section {
        padding: 20px;
    }

    h2 {
        font-size: 20px;
    }

    p {
        font-size: 15px;
    }

    .branches {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
}
    </style>
</head>
<body class="bg-white">
    <?php
        use App\Models\Branch;
        $branches = Branch::where('status' , 1)->whereNull('deleted_by')->get();
    ?>
    <?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="position-relative" style="height: 17vh;">
        <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>

    <div class="continer">
        <div class="sub-continer">
            <div class="style-box"></div>
            <div class="content"> 
                    <div class="section">
                        <h2><span class="icon"><img src="<?php echo e(asset('images/icons/Overlay.png')); ?>"></span> <?php echo e(__('messagess.working_hours')); ?></h2>
                        <p><?php echo e(__('messagess.working_time')); ?></p>
                        
                        <h2><span class="icon"><img src="<?php echo e(asset('images/icons/Overlay (1).png')); ?>"></span> <?php echo e(__('messagess.addresses')); ?></h2>
                        
                        <div class="branches">
                          <?php $__currentLoopData = $branches; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $branch): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="branch">
                              <strong><?php echo e($branch->name ?? ''); ?></strong>
                              <p><?php echo e($branch->description ?? ''); ?></p>
                              <p class="phone"> <img src="<?php echo e(asset('images/icons/basil_phone-solid.png')); ?>"> <?php echo e($branch->contact_number ?? ''); ?></p>
                            </div>
                          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                    <a href="https://wa.me/966569610958" target="_blank" class="whatsapp-btn">
                        <span class="iconify" data-icon="logos:whatsapp-icon"></span>
                        <?php echo e(__('messagess.whatsapp_contact')); ?>

                    </a>
                </div>
            </div>
            <div class="form">    
                <?php echo $__env->make('components.frontend.contact-form', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            </div>
        </div>
    </div>

    <?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
<?php /**PATH /home/city2tec/sami-care.sa/Modules/rontend/Resources/views/contact.blade.php ENDPATH**/ ?>