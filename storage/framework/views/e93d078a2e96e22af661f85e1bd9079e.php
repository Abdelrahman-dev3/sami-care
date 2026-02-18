<?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<section class="py-5">
    <div class="container" id"rtl" style="padding: 0 3rem 0 3rem;">
        <div class="row g-5 align-items-start">
            <!-- Right: Contact Form -->
            <div class="col-12 col-lg-12">
                <form action="<?php echo e(route('contact.store')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="mb-3">
                        <input name="name" type="text" class="form-control form-control-lg" id="name" placeholder="<?php echo e(__('messagess.enter_your_name')); ?>" style="border-radius: 4px;width:100%;position:relative;z-index: 99;    margin: 0 0 29px 0;">
                    </div>
                    <div class="mb-3">
                        <input name="phone" type="tel" class="form-control form-control-lg" id="phone" placeholder="<?php echo e(__('messagess.enter_your_phone')); ?>" style="border-radius: 4px;width:100%;position:relative;z-index: 99;    margin: 0 0 29px 0;">
                    </div>
                    <div class="mb-3">
                        <input name="email" type="email" class="form-control form-control-lg" id="email" placeholder="<?php echo e(__('messagess.enter_your_email')); ?>" style="border-radius: 4px;width:100%;position:relative;z-index: 99;    margin: 0 0 29px 0;">
                    </div>
                    <div class="mb-3">
                        <textarea name="message" class="form-control form-control-lg" id="message" rows="4" placeholder="<?php echo e(__('messagess.enter_your_message')); ?>" style="border-radius: 4px;width:100%;position:relative;z-index: 99;    margin: 0 0 29px 0;"></textarea>
                    </div>
                    <div style="width:100%;display:flex;justify-content: end;">
                    <button disabled type="submit" class="btn btn-primary btn-lg px-5 py-3 fw-bold" id="submitBtn"style="background-color: gray; border: none; border-radius: 35px;">
                        <?php echo e(__('messagess.send')); ?>

                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>



<script>
const phoneInput = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');

phoneInput.addEventListener('input', function () {
    const phone = this.value.trim();
    const saudiRegex = /^(?:\+9665|9665|05|5)\d{8}$/;

    if (saudiRegex.test(phone)) {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = 'var(--primary-color)';
        phoneInput.style.borderColor = 'green'; // حقل صحيح
    } else {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = 'gray';
        phoneInput.style.borderColor = 'red'; // حقل غير صحيح
    }
});
</script>
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
    const dir = document.documentElement.getAttribute("dir");
    const box = document.querySelector(".style-box");

    if (dir === "ltr") {
      box.style.right = "-25%";
      box.style.left = "auto"; // مهم تشيل left
      box.style.rotate = "42deg";
    }
      });
  </script><?php /**PATH /home/city2tec/sami-care.sa/resources/views/components/frontend/contact-form.blade.php ENDPATH**/ ?>