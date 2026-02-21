

<?php $__env->startSection('title', __('auth.verify_code')); ?>

<?php $__env->startSection('content'); ?>
<style>
    .main-otp-box{
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:calc(100vh - 100px);
    padding:40px 20px;
    background:#fff;
    font-family: 'Almarai', sans-serif;
}

.sub-otp-box{
    background:#F3F5F5;
    padding:40px 30px;
    width:100%;
    max-width:556px;
    border-radius:20px;
    box-shadow:0 4px 15px rgba(0,0,0,0.05);
    position:relative;
    direction: rtl;
    text-align: right;
}

.verify_code{
    text-align:center;
    font-size:24px;
    font-weight:bold;
    margin-bottom:20px;
}

.enter_otp_desc{
    text-align:center;
    color:#666;
    font-size:14px;
    margin-bottom:20px;
}

.otp-form {
    display:flex;
    flex-direction:column;
    align-items:center;
}

.otp-inputs{
    display:flex;
    gap:10px;
    margin-bottom:20px;
    flex-direction: row-reverse;
}

.otp-box {
    width:60px;
    height:60px;
    text-align:center;
    font-size:24px;
    border:1px solid #ddd;
    border-radius:12px;
    outline:none;
    background:#fff;
    font-weight:bold;
}

.otp-box:focus {
    border-color:#CF9233;
    box-shadow:0 0 5px rgba(191,148,86,0.5);
}

.send-btn {
    background:#CF9233;
    color:#fff;
    border:none;
    border-radius:36px;
    padding:15px 0;
    width:100%;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
    transition: transform 0.2s;
}

.send-btn:hover {transform:translateY(-2px);}

.resend-otp {
    text-align:center;
    margin-top:20px;
    font-size:14px;
    color:#666;
}

.resend-otp form {
    display:inline;
}

.resend-otp button {
    background:none;
    border:none;
    color:#CF9233;
    font-weight:500;
    cursor:pointer;
}

.otp-valid-time {
    text-align:center;
    color:#999;
    font-size:12px;
    margin-top:10px;
}

</style>
<?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<div class="main-otp-box">
    <div class="sub-otp-box">
        <h2 class="verify_code"><?php echo e(__('auth.verify_code')); ?></h2>
        <p class="enter_otp_desc"><?php echo e(__('auth.enter_otp_desc')); ?></p>

        <form method="POST" action="<?php echo e(route('verify.send.otp')); ?>" class="otp-form">
            <?php echo csrf_field(); ?>

            <div class="otp-inputs">
                <input type="number" name="otp1" maxlength="1" class="otp-box" required>
                <input type="number" name="otp2" maxlength="1" class="otp-box" required>
                <input type="number" name="otp3" maxlength="1" class="otp-box" required>
                <input type="number" name="otp4" maxlength="1" class="otp-box" required>
            </div>

            <button type="submit" class="send-btn"><?php echo e(__('auth.send_button')); ?></button>
        </form>
        <p class="otp-valid-time"><?php echo e(__('auth.otp_valid_time')); ?></p>
    </div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
    const otpInputs = document.querySelectorAll('.otp-box');

    otpInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^0-9]/g,'');
            if (input.value.length === input.maxLength) {
                const nextInput = otpInputs[index + 1];
                if (nextInput) nextInput.focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '') {
                const prevInput = otpInputs[index - 1];
                if (prevInput) prevInput.focus();
            }
        });
    });
});

</script>
<?php if($errors->any()): ?>
    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <script>
            createNotify({ title: 'خطأ', desc: '<?php echo e($error); ?>' });
        </script>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>
<?php if(session('success')): ?>
    <script>
        createNotify({ title: 'نجاح', desc: '<?php echo e(session('success')); ?>' });
    </script>
<?php endif; ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend::layouts.auth', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\resources\views/verify/OTPlogin.blade.php ENDPATH**/ ?>