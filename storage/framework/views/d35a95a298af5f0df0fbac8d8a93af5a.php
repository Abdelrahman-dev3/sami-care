<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php echo $__env->yieldContent('title'); ?> | <?php echo e(app_name()); ?></title>
    
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
  <?php if(language_direction() == 'rtl'): ?><link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>"><?php endif; ?>
  <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> 
  <?php echo $__env->yieldPushContent('after-styles'); ?>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #f8f8f8;
      font-family: 'Almarai', sans-serif !important;
    }
    .order-summary {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .summary-box {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      width: 90%;
      line-height: 3;
      border: 2px solid #97979745;
    }
    .output{
        width: 50%;
        font-size: 16px;
        font-weight: bold;
    }
    .summary-box h6{
        font-weight: bold;
        font-size: 15px;
    }
    .summary-box div span{
        color: #979797;
    }
    .btn-gold {
      background-color: #c79c3f;
      color: #fff;
      font-weight: 600;
      border: none;
    }
    .btn-gold:hover {
      background-color: #b68d35;
      color: #fff;
    }
    .product-img {
        width: 65px;
        height: 55px;
        border-radius: 10px;
        background-color: #1d1d1d;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product-img i {
      color: #c79c3f;
      font-size: 22px;
    }
    .table thead th {
      background-color: #CF9233;
      color: white;
      text-align: center;
    }
    .table {
        font-size: 14px;
        border-collapse: separate;
        border-spacing: 0 25px;
    }
    .table tbody td {
      vertical-align: middle;
      text-align: center;
      background-color: #F8F8F8;
      padding: 20px;
      gap: 25px;
    }
    .coupon-input {
      max-width: 120px;
      margin: 0 auto;
    }
    .cart-empty { color: #888; font-size: 1.3rem; margin: 3rem 0; text-align: center; }
    .prc{
        font-weight: bold;
    }
    .text-start{
        margin: 0 20px 0 0;
        text-align: start !important;
    }
    .btn-delete{
        padding: 10px;
        width: 13%;
        background: #FF473E;
        border-radius: 10px;
        border: none;
    }
    .service-delete{
        border: none;
    }
    .service-delete i{
        color:#979797;
    }
    .co-ser{
        height: 40px;
        border-radius: 10px 0 0 10px;
        padding: 10px;
        color: black;
        font-size: 12px;
        font-weight: bold;
        background: #D9D9D9;
        border: none;
        cursor: pointer;
    }
    .co-ser-in{
        width: 100px;
        height: 40px;
        border-radius: 0 11px 11px 0;
        background: white;
        margin: 0 0 0 -4px;
        border: 1px solid #D9D9D9;
    }
    .side-bar{
        display: flex;
        justify-content: end;
    }
    @media (max-width: 576px) {
        thead{
            display:none;
        }
        .product-img{
            display:none;
        }
        tr{
            display: flex;
            flex-direction: column;
        }
        .table tbody tr td{
            text-align: start;
        }
    }
  </style>
</head>
<body class="bg-white">
<?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<div class="position-relative" style="height: 17vh;">
    <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</div>
<div class="container py-5">
  <div class="row g-4">
    <div class="col-lg-12">
      <div class="order-summary p-3">
        <table class="table align-middle">
          <thead>
            <tr style="background-color: red;">
                <th style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messagess.product')); ?></th>
                <th style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messagess.price')); ?></th>
                <th style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messages.branch')); ?></th>
                <th style="padding:16px 20px;font-weight:bold;"><?php echo e(__('profile.date')); ?></th>
                <th style="padding:16px 20px;font-weight:bold;"><?php echo e(__('profile.time')); ?></th>
                <th style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messages.stars')); ?></th>
            </tr> 
          </thead>
          <tbody>
            <?php $__currentLoopData = $bookings; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $booking): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php $__currentLoopData = $booking->services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                  <td class="d-flex align-items-center gap-2">
                    <div class="product-img"><i class="bi bi-person"></i></div>
                    <div class="text-start">
                      <strong><?php echo e($service->service_name); ?> <i class="bi bi-chevron-left"></i> <i class="bi bi-chevron-left" style="margin: 0 -9px;"></i> <i class="bi bi-chevron-left"></i> <?php echo e($service->service_name); ?></strong><br>
                      <small class="text-muted"><?php echo e(__('messagess.employee')); ?>: <?php echo e($service->employee->full_name ?? '-'); ?></small>
                    </div>
                  </td>

                  <td class="prc">
                    <?php echo e($service->service->default_price ?? 0); ?> <?php echo e(__('messagess.currency')); ?>

                  </td>
                  <td>
                    <?php echo e($booking->branch->name); ?>

                  </td>
                  <td>
                    <?php echo e(\Carbon\Carbon::parse($booking->start_date_time)->format('d-m-Y')); ?>

                  </td>
                  <td>
                    <?php echo e(\Carbon\Carbon::parse($booking->start_date_time)->format('H:i')); ?>

                  </td>
                  <td>
                    *****
                  </td>
                </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div class="position-relative" style="height: 17vh;"></div>
<!-- Footer -->
<?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<!-- Bootstrap Icons -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script>
    <?php if(session('success')): ?>
        toastr.success("<?php echo e(session('success')); ?>");
    <?php endif; ?>
    
    <?php if(session('error')): ?>
        toastr.error("<?php echo e(session('error')); ?>");
    <?php endif; ?>
</script>
</body>
</html><?php /**PATH /home/city2tec/sami-care.sa/resources/views/components/frontend/auth/complate-bookings.blade.php ENDPATH**/ ?>