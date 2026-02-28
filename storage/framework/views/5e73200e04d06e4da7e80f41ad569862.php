<?php
use Illuminate\Support\Str;
?>

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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo e(asset('pages-css/cart.css')); ?>">
  <style>
    @media (max-width: 768px) {
        .order-summary{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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

    <?php if($services->count() || $products->count() || $gifts->count() || $bookingPackages->count()): ?>
    <div class="col-lg-8">
      <div class="order-summary p-3">
        <table class="table align-middle">
          <thead>
            <tr style="background-color: red;">
                <th class="d-none-mob" style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messagess.product')); ?></th>
                <th class="d-none-mob" style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messagess.price')); ?></th>
                <th class="d-none-mob" style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messagess.discount_coupon')); ?></th>
                <th style="padding:16px 20px;font-weight:bold;"><?php echo e(__('messagess.final_price')); ?></th>
            </tr>
          </thead>
          <tbody>
          <?php $__currentLoopData = $bookingPackages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $bookingPackage): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
              <tr>
                  <td class="d-flex align-items-center gap-2">
                      <div class="product-img"><i class="bi bi-person"></i></div>
                      <div class="text-start">
                          <strong>

                              <?php echo e(\Illuminate\Support\Str::limit($bookingPackage->package->name, 23)); ?>

                          </strong>
                          <br>

                      </div>
                  </td>
                  <td class="prc">
                      <?php echo e($bookingPackage->package->package_price); ?> <?php echo e(__('messagess.SR')); ?>

                  </td>
                  <td style="direction: rtl";>

                  </td>

                  <td style="position: relative;font-weight: bold;">





                      <?php echo e($bookingPackage->package->package_price); ?> <?php echo e(__('messagess.SR')); ?>

                      <form action="<?php echo e(route('cart.destroy', $bookingPackage->booking->id)); ?>" method="post" style="position: absolute;top: 8px;left: 8px;">
                          <?php echo csrf_field(); ?>
                          <?php echo method_field('DELETE'); ?>
                          <button class="service-delete" title="<?php echo e(__('messagess.delete_service')); ?>">
                              <i class="fas fa-trash"></i>
                          </button>
                      </form>
                  </td>
              </tr>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php $__currentLoopData = $services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
              <?php $__currentLoopData = $item->services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                  <td class="d-flex align-items-center gap-2">
                    <div class="product-img"><i class="bi bi-person"></i></div>
                    <div class="text-start">
                        <strong>
                            <?php echo e(\Illuminate\Support\Str::limit($service->service_name, 23)); ?>

                            <i class="bi bi-chevron-left"></i>
                            <i class="bi bi-chevron-left" style="margin: 0 -9px;"></i>
                            <i class="bi bi-chevron-left"></i>
                            <?php echo e(\Illuminate\Support\Str::limit($service->service_name, 23)); ?>

                        </strong>
                        <br>
                      <small class="text-muted"><?php echo e(__('messagess.employee')); ?>: <?php echo e($service->employee->full_name ?? '-'); ?></small>
                    </div>
                  </td>
                  <td class="prc">
                    <?php echo e($service->service_price); ?> <?php echo e(__('messagess.SR')); ?>

                  </td>
                  <td style="direction: rtl";>
                   <?php if($service->coupon_code): ?>
                     <input class="co-ser-in" type="text" value="<?php echo e($service->coupon_code); ?>" disabled>
                     <button class="co-ser-disabled" disabled><?php echo e(__('messagess.apply_coupon')); ?></button>
                   <?php else: ?>
                     <input class="co-ser-in" type="text"  data-service-id="<?php echo e($service->service_id); ?>" data-booking-id="<?php echo e($item->id); ?>">
                     <button class="co-ser" onclick="checkCoupon(this)"><?php echo e(__('messagess.apply_coupon')); ?></button>
                   <?php endif; ?>
                  </td>

                  <td style="position: relative;font-weight: bold;">
                  <?php if($service->discount_amount && $service->discount_amount > 0): ?>
                   <?php echo e($service->service_price - $service->discount_amount); ?> <?php echo e(__('messagess.SR')); ?>

                  <?php else: ?>
                   <?php echo e($service->service_price); ?> <?php echo e(__('messagess.SR')); ?>

                  <?php endif; ?>
                    <form action="<?php echo e(route('cart.destroy', $item->id)); ?>" method="post" style="position: absolute;top: 8px;left: 8px;">
                        <?php echo csrf_field(); ?>
                        <?php echo method_field('DELETE'); ?>
                        <button class="service-delete" title="<?php echo e(__('messagess.delete_service')); ?>">
                            <i class="fas fa-trash"></i>
                        </button>
                    </form>
                  </td>
                </tr>
              <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
              <td class="d-flex align-items-center gap-2">
                <div class="product-img"><i class="bi bi-person"></i></div>
                <div class="text-start">
                    <strong>
                        <?php echo e(\Illuminate\Support\Str::limit($item->product->name, 23)); ?>

                    </strong>
                    <br>
                  <small class="text-muted"><?php echo e(__('booking.qty')); ?>: <?php echo e($item->qty); ?></small>
                </div>
              </td>
              <td class="prc">
                <?php echo e($item->product->min_price ?? $item->product->max_price ?? 0); ?> <?php echo e(__('messagess.SR')); ?>

              </td>
              <!---->
              <td style="direction: rtl;">
               </td>

              <td style="position: relative;font-weight: bold;">
                <?php echo e(($item->product->min_price ?? $item->product->max_price ?? 0) * $item->qty); ?> <?php echo e(__('messagess.SR')); ?>


                <form action="<?php echo e(route('p.cart.destroy', $item->id)); ?>" method="post" style="position: absolute;top: 8px;left: 8px;">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('DELETE'); ?>
                    <button class="service-delete" title="<?php echo e(__('messagess.delete_service')); ?>">
                        <i class="fas fa-trash"></i>
                    </button>
                </form>
              </td>
            </tr>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php $__currentLoopData = $gifts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
              <td class="d-flex align-items-center gap-2">
                <div class="product-img"><i class="bi bi-gift"></i></div>
                <div class="text-start">
                    <strong>
                        <?php echo e(__('messagess.giftcard')); ?>:
                        <?php echo e(Str::limit($item->sender_name, 23)); ?>

                        <i class="bi bi-chevron-left"></i>
                        <i class="bi bi-chevron-left" style="margin: 0 -9px;"></i>
                        <i class="bi bi-chevron-left"></i>
                        <?php echo e(Str::limit($item->recipient_name, 23)); ?>

                    </strong>
                    <br>
                </div>
              </td>
              <td class="prc">
                <?php echo e($item->subtotal ?? 0); ?> <?php echo e(__('messagess.SR')); ?>

              </td>
              <!---->
              <td style="direction: rtl;">
               </td>

              <td style="position: relative;font-weight: bold;">
                <?php echo e($item->subtotal ?? 0); ?> <?php echo e(__('messagess.SR')); ?>


                <form action="<?php echo e(route('g.cart.destroy', $item->id)); ?>" method="post" style="position: absolute;top: 8px;left: 8px;">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('DELETE'); ?>
                    <button class="service-delete" title="<?php echo e(__('messagess.delete_service')); ?>">
                        <i class="fas fa-trash"></i>
                    </button>
                </form>
              </td>
            </tr>
          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          </tbody>
        </table>

        <div class="text-end mt-3">
        <form action="<?php echo e(route('cart.destroyAll')); ?>" method="post" >
            <?php echo csrf_field(); ?>
            <?php echo method_field('DELETE'); ?>
            <button class="btn btn-danger btn-delete"><i class="bi bi-trash"></i> <?php echo e(__('messages.delete_All')); ?> </button>
        </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4 side-bar">
      <div class="summary-box">
        <h6 class="text-center mb-3 border-bottom pb-4"><?php echo e(__('messagess.service_summary')); ?></h6>

          <div class="d-flex justify-content-between mb-2">
              <span><?php echo e(__('messagess.packages_included')); ?> :</span><span class="output"><?php echo e($packagesCount); ?> <?php echo e(__('messagess.packages')); ?></span>
          </div>
        <div class="d-flex justify-content-between mb-2">
          <span><?php echo e(__('messagess.services_included')); ?> :</span><span class="output"><?php echo e($serviceCount); ?> <?php echo e(__('messagess.service')); ?></span>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <span><?php echo e(__('messagess.products_included')); ?> :</span><span class="output"><?php echo e($productCount); ?> <?php echo e(__('messagess.product')); ?></span>
        </div>
        <hr>
        <div class="d-flex justify-content-between fw-bold mb-3">
          <span><?php echo e(__('messagess.T_P')); ?>:</span><span class="output"> <?php echo e($finalPrice); ?> <?php echo e(__('messagess.SR')); ?> </span>
        </div>
        <div class="w-100 d-flex justify-content-center">
        <a href="<?php echo e(route('paymentMethods')); ?>" class="more-btn"><i class="bi bi-credit-card"></i>  <?php echo e(__('messagess.proceed_to_payment')); ?></a>
        </div>
      </div>
    </div>
    <?php else: ?>
        <div class="cart-empty">
            <i class="fas fa-shopping-cart fa-3x mb-3"></i>
            <p><?php echo e(__('messagess.cart_empty_message')); ?></p>
            <a href="<?php echo e(route('frontend.services')); ?>" class="btn btn-primary mt-3">
                <i class="fas fa-arrow-right"></i> <?php echo e(__('messagess.browse_services')); ?>

            </a>
        </div>
    <?php endif; ?>
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
<script>
    function checkCoupon(button) {
        const input = button.previousElementSibling;
        const couponCode = input.value.trim();
        const serviceId = input.dataset.serviceId;
        const bookingId = input.dataset.bookingId;

        if (!couponCode) {
            toastr.error("<?php echo e(__('messagess.enter_coupon_code')); ?>");
            return;
        }

        const url = `/validate-coupon?coupon_code=${encodeURIComponent(couponCode)}&service_id=${serviceId}&booking_id=${bookingId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.valid) {
                    toastr.success("<?php echo e(__('messagess.coupon_applied')); ?>: " + " " + couponCode);
                    setTimeout(() => {
                        location.reload();
                    }, 700);
                } else {
                    toastr.error("<?php echo e(__('messagess.invalid_coupon_for_service')); ?>");
                }
            })
            .catch(() => { toastr.error("<?php echo e(__('messagess.error_occurred')); ?>");  });
    }
</script>
</body>
</html>
<?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/components/frontend/cart.blade.php ENDPATH**/ ?>