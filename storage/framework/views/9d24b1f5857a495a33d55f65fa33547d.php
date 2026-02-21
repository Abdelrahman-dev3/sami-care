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
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <?php echo $__env->yieldPushContent('after-styles'); ?>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="<?php echo e(asset('pages-css/profile.css')); ?>">
</head>
<body>
    <?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="position-relative" style="height: 17vh;">
        <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <div class="container my-5">
        <div class="profile-card p-4">
            <div class="row align-items-center">
            <!-- صورة البروفايل -->
            <div class="col-md-4 text-center">
                <img src="<?php echo e($user->avatar ?? $user->profile_image); ?>" alt="صورة" class="profile-img">
            </div>
            <!-- البيانات -->
            <div class="col-md-7">
                <div class="row mb-3">
                    <div class="col-md-6" style="margin-bottom: 20px;">
                        <label class="form-label"><?php echo e(__('messagess.name')); ?> :</label>
                        <input type="text" class="form-control" value="<?php echo e($user->first_name); ?> <?php echo e($user->last_name); ?>" readonly>
                    </div>
                    <div class="col-md-6" style="margin-bottom: 20px;">
                        <label class="form-label"><?php echo e(__('profile.mobile_number')); ?> :</label>
                        <div class="input-group">
                            <span class="input-group-text">+965</span>
                            <input type="text" class="form-control" value="<?php echo e($user->mobile); ?>" readonly>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6" style="margin-bottom: 20px;">
                        <label class="form-label"><?php echo e(__('profile.city')); ?> :</label>
                        <input type="text" class="form-control" value="<?php echo e($user->city ?? ($user->address->city ?? '')); ?>" readonly>
                    </div>
                    <div class="col-md-6" style="margin-bottom: 20px;">
                        <label class="form-label"><?php echo e(__('profile.address')); ?>:</label>
                        <input type="text" class="form-control" value="<?php echo e($user->address ?? ($user->address->address_line_1 ?? '')); ?>" readonly>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6" style="margin-bottom: 20px;">
                        <label class="form-label"><?php echo e(__('profile.country')); ?> :</label>
                        <input type="text" class="form-control" value="<?php echo e($user->country ?? __('profile.no_data')); ?>" readonly>
                    </div>
                    <div class="col-md-6" style="margin-bottom: 20px;">
                        <label class="form-label"><?php echo e(__('location.title')); ?> :</label>
                        <input type="text" readonly class="form-control" value=" <?php echo e($user->country ?? ($user->address->country ?? '')); ?>-<?php echo e($user->city ?? ($user->address->city ?? '')); ?>-<?php echo e($user->address ?? ($user->address->address_line_1 ?? '')); ?>">
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6" style="margin-bottom: 20px;">
                        <label class="form-label"><?php echo e(__('profile.email')); ?> :</label>
                        <input class="form-control" type="text" readonly value="<?php echo e($user->email); ?>">
                    </div>
                </div>
            </div>
            <!-- زر تعديل البيانات -->
            <div class="col-md-1 H-editProfileModal">
                <a href="#" class="editProfileModal" data-bs-toggle="modal" data-bs-target="#editProfileModal">
                    <i class="fas fa-edit"></i>
                </a>

                <form method="POST" action="<?php echo e(route('logout')); ?>">
                <?php echo csrf_field(); ?>
                    <button type="submit" class="btn logout-btn" style="border-radius: 30px;" title="<?php echo e(__('profile.logout')); ?>"><i class="fa-solid fa-right-from-bracket"></i>  <?php echo e(__('messages.logout')); ?> </button>
                </form>
            </div>
        </div>
        </div>
    </div>
    <div class="text-center mb-4">
        <a href="<?php echo e(route('frontend.become.affiliate')); ?>"
        style="color: #BF9456;
                font-weight: 600;
                text-decoration: none;
                font-size: 16px;">
            <i class="fa-solid fa-handshake me-1"></i>
            <?php echo e(__('profile.become_affiliate')); ?>

          </a>
    </div>

    <div class="stats-box">
        <div class="stat-item">
          <h6> <span class="stat-icon"><img src="<?php echo e(asset('images/icons/vesa.png')); ?>"></span><?php echo e(__('profile.wallet')); ?></h6>
          <div><span class="stat-value"><?php echo e($balance); ?></span> <span class="stat-unit"><?php echo e(__('profile.currency')); ?></span> <button type="button" style="border: none;background: #f0f8ff00;font-size: 18px;" data-bs-toggle="modal" data-bs-target="#depositModal">+</button></div>
        </div>
        <div class="stat-item">
          <h6><span class="stat-icon"><img src="<?php echo e(asset('images/icons/vesa.png')); ?>"></span> <?php echo e(__('profile.referral_balance')); ?></h6>
          <div><span class="stat-value"><?php echo e(number_format($referralBalance ?? 0, 2)); ?></span> <span class="stat-unit"><?php echo e(__('profile.currency')); ?></span></div>
        </div>
        <div class="stat-item">
          <h6><span class="stat-icon"><img src="<?php echo e(asset('images/icons/gift.png')); ?>"></span><?php echo e(__('profile.loyalty_points')); ?></h6>
          <div><span class="stat-value"><?php echo e($points); ?></span> <span class="stat-unit"><?php echo e(__('profile.point')); ?></span></div>
        </div>
        <div class="stat-item">
            <a href="<?php echo e(route('profile.coupon')); ?>">
              <h6> <span class="stat-icon"><img src="<?php echo e(asset('images/icons/ticket.png')); ?>"></span><?php echo e(__('profile.discount_coupons')); ?></h6>
              <div><span class="stat-value"><?php echo e($coupons); ?></span> <span class="stat-unit"><?php echo e(__('profile.coupon')); ?></span></div>
            </a>
        </div>
        <div class="stat-item">
            <a href="<?php echo e(route('profile.my_bookings')); ?>">
              <h6> <span class="stat-icon"><img src="<?php echo e(asset('images/icons/clock.png')); ?>"></span><?php echo e(__('profile.booked_services')); ?></h6>
              <div><span class="stat-value"><?php echo e($pending); ?></span> <span class="stat-unit"><?php echo e(__('profile.service')); ?></span></div>
            </a>
        </div>
        <div class="stat-item">
            <a href="<?php echo e(route('profile.complateBokkings')); ?>">
              <h6> <span class="stat-icon"><img src="<?php echo e(asset('images/icons/true.png')); ?>"></span><?php echo e(__('profile.completed_services')); ?></h6>
              <div><span class="stat-value"><?php echo e($completed); ?></span> <span class="stat-unit"><?php echo e(__('profile.service')); ?></span></div>
            </a>
        </div>
        
        <div class="stat-item">
            <a href="<?php echo e(route('profile.complateGift')); ?>">
              <h6> <span class="stat-icon"><img src="<?php echo e(asset('images/icons/true.png')); ?>"></span><?php echo e(__('messages.gift_cards_list')); ?></h6>
              <div><span class="stat-value"><?php echo e($completedGift); ?></span> <span class="stat-unit"><?php echo e(__('profile.gift')); ?></span></div>
            </a>
        </div>
  </div>

    <!-- Modal -->
    <div class="modal fade" id="depositModal" tabindex="-1" aria-labelledby="depositModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="depositModalLabel"><?php echo e(__('messages.deposit_wallet')); ?></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="<?php echo e(__('messages.close')); ?>"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="amount" class="form-label"><?php echo e(__('messages.amount')); ?></label>
                <input type="number" name="amount" min="1" class="form-control" id="amount" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><?php echo e(__('messages.close')); ?></button>
              <button type="button" class="btn btn-success btn-sm" id="depositBtn">
                  <?php echo e(__('messages.deposit')); ?>

              </button>
            </div>
        </div>
      </div>
    </div>



     <div class="row" style="width: 87%;margin: 40px auto 60px auto;">
    <!-- القسم الأيمن (طرق الدفع) -->
    <div class="col-lg-4">
      <div class="payment-box shadow-sm">
        <h6 class="mb-5" style="font-weight: bold;"><?php echo e(__('messages.payment_methods')); ?></h6>
        <div class="row g-3 text-center">
          <div class="col-6">
            <img src="<?php echo e(asset('images/icons/visa.png')); ?>" alt="Visa" class="img-fluid  rounded p-3" style="background: #F8F8F8;">
          </div>
          <div class="col-6">
            <img src="<?php echo e(asset('images/icons/mada.png')); ?>" alt="Mada" class="img-fluid  rounded p-3" style="background: #F8F8F8;">
          </div>
          <div class="col-6">
            <img src="<?php echo e(asset('images/icons/tamara.png')); ?>" alt="تمارا" class="img-fluid border rounded p-3" style="background: #F8F8F8;">
          </div>
          <div class="col-6">
            <img src="<?php echo e(asset('images/icons/tabby.png')); ?>" alt="tabby" class="img-fluid  rounded p-3" style="background: #F8F8F8;">
          </div>
        </div>
      </div>
    </div>
    
    <!-- القسم الأيسر (جدول المعاملات) -->
    <div class="col-lg-8 mb-4">
      <div class="rounded p-3" style="background: white;">
        <h5 style="padding: 10px;color: #BF9456;font-weight: bold;font-size: 21px;" class="text-center mb-3"><?php echo e(__('profile.my_transactions')); ?></h5>
        <div class="table-head">
            <h5><?php echo e(__('profile.service')); ?></h5>
            <h5><?php echo e(__('profile.service_location')); ?></h5>
            <h5><?php echo e(__('profile.date')); ?></h5>
            <h5><?php echo e(__('profile.service_status')); ?></h5>
        </div>
        <?php $__empty_1 = true; $__currentLoopData = $bookings; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $booking): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <?php $__currentLoopData = $booking->services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="table-content">
                    <h5 title="<?php echo e($service->service_name ?? '---'); ?>"><?php echo e(\Illuminate\Support\Str::limit($service->service_name ?? '---', 14)); ?></h5>
                    <h5><?php echo e($booking->branch->name ?? '---'); ?></h5>
                    <h5><?php echo e(\Carbon\Carbon::parse($booking->start_date_time)->format('Y-m-d')); ?></h5>
                    <?php if($booking->status == 'pending'): ?>
                        <h5 style="color:#F7F316"><?php echo e(__('messagess.booked')); ?></h5>
                    <?php endif; ?>
                    <?php if($booking->status == 'completed'): ?>
                        <h5 style="color:#1FAF38"><?php echo e(__('messagess.completed')); ?></h5>
                    <?php endif; ?>
                    <?php if($booking->status == 'cancelled'): ?>
                        <h5 style="color:#FF473E"><?php echo e(__('messagess.cancelled')); ?></h5>
                    <?php endif; ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
            <h5 style="position: absolute;color: #979797;"><?php echo e(__('profile.no_bookings')); ?></h5>
        <?php endif; ?>
      </div>
    </div>
  </div>

    <div class="modal fade" style="z-index: 999999999999999999999;" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <form method="POST" action="<?php echo e(route('profile.update' , auth()->user()->id)); ?>" enctype="multipart/form-data" id="profileEditForm">
          <?php echo csrf_field(); ?>
          <?php echo method_field('PUT'); ?>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editProfileModalLabel"><?php echo e(__('profile.edit_profile')); ?></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="<?php echo e(__('profile.close')); ?>"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="mb-3 col-12 text-center">
                  <label for="profile_image" class="form-label d-block"><?php echo e(__('profile.profile_image')); ?></label>
                  <input type="file" id="profile_image" name="profile_image" accept="image/*" class="form-control mx-auto" style="max-width:300px;">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.first_name')); ?></label>
                  <input type="text" name="first_name" class="form-control" value="<?php echo e($user->first_name); ?>">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.last_name')); ?></label>
                  <input type="text" name="last_name" class="form-control" value="<?php echo e($user->last_name); ?>">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.mobile_number')); ?></label>
                  <input type="text" name="mobile" class="form-control" value="<?php echo e($user->mobile); ?>">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.email')); ?></label>
                  <input type="email" name="email" class="form-control" value="<?php echo e($user->email); ?>">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.address')); ?></label>
                  <input type="text" name="address" class="form-control" value="<?php echo e($user->address ?? ($user->address->address_line_1 ?? '')); ?>">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.city')); ?></label>
                  <input type="text" name="city" class="form-control" value="<?php echo e($user->city ?? ($user->address->city ?? '')); ?>">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.country')); ?></label>
                  <input type="text" name="country" class="form-control" value="<?php echo e($user->country ?? ($user->address->country ?? '')); ?>">
                </div>
                <div class="mb-3 col-6">
                  <label class="form-label"><?php echo e(__('profile.birth_date')); ?></label>
                  <input type="date" name="date_of_birth" class="form-control" value="<?php echo e($user->date_of_birth); ?>">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary"><?php echo e(__('profile.save_changes')); ?></button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


      <script>
      document.addEventListener("DOMContentLoaded", function () {
          <?php if(session('success')): ?>
                createNotify({ title: '', desc: "<?php echo e(session('success')); ?>" });
          <?php endif; ?>

          <?php if(session('error')): ?>
                createNotify({ title: '', desc: "<?php echo e(session('error')); ?>" });
          <?php endif; ?>

          <?php if($errors->any()): ?>
              <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    createNotify({ title: '', desc: "<?php echo e($error); ?>" });
              <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
          <?php endif; ?>
      });
  </script>
  <script>
  document.getElementById('profileEditForm').addEventListener('submit', function(e) {
    const mobileInput = document.querySelector('input[name="mobile"]');
    const mobile = mobileInput.value.trim();
    const saudiRegex = /^(05\d{8}|(\+9665\d{8}))$/;

    if (!saudiRegex.test(mobile)) {
        e.preventDefault(); // يمنع إرسال الفورم
        createNotify({ title: '', desc: "الرجاء إدخال رقم جوال سعودي صحيح (مثال: 05XXXXXXXX أو +9665XXXXXXXX)" });
        mobileInput.focus();
    }
});
    document.getElementById('depositBtn').addEventListener('click', function() {
        let amount = document.getElementById('amount').value;
        if (!amount || amount <= 0) {
            alert('الرجاء إدخال مبلغ صحيح');
            return;
        }
        let url = `/add/balance-to-wallet?amount=${amount}`;
        window.location.href = url;
    });
  </script>
</body>
</html>
<?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\resources\views/components/frontend/auth/profile.blade.php ENDPATH**/ ?>