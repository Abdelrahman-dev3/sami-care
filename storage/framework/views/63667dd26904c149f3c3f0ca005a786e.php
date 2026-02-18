<?php $__env->startSection('title', __('auth.singup')); ?>

<?php $__env->startSection('content'); ?>

<style>
    body {
        font-family: 'Zain', sans-serif !important;
        background-color: white;
        margin: 0;
    }

    .signup-wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        min-height: calc(100vh - 100px);
        padding: 100px 20px 40px 20px;
        direction: <?php echo e(app()->getLocale() == 'ar' ? 'rtl' : 'ltr'); ?>;
        text-align: <?php echo e(app()->getLocale() == 'ar' ? 'right' : 'left'); ?>;
    }

    .signup-box {
        background: #F8F8F8;
        padding: 40px 30px;
        width: 100%;
        max-width: 556px;
        position: relative;
        z-index: 10;
    }

    .signup-title {
        text-align: center;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
        font-family: 'Almarai';
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-input {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 10px 14px;
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
        font-style: italic;
        transition: border-color 0.3s, box-shadow 0.3s;
        text-align: <?php echo e(app()->getLocale() == 'ar' ? 'right' : 'left'); ?>;
    }

    .submit-wrapper {
        margin-top: 15px;
        display: flex;
    }

    .submit-btn {
        background: #CF9233;
        color: #fff !important;
        font-weight: bold;
        border: none;
        font-family: 'Almarai';
        border-radius: 36px;
        width: 50%;
        margin: auto;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease;
        padding: 15px 20px;
        font-size: 18px;
    }

    .submit-btn:hover {
        background: #b87f2b;
    }

    .login-link {
        text-align: center;
        margin-top: 20px;
        font-size: 14px;
    }

    .login-link a {
        color: #CF9233;
        font-weight: bold;
        text-decoration: none;
    }

    .login-link a:hover {
        text-decoration: underline;
    }
    .h-10{
        height: 0;
    }
</style>

<div class="signup-wrapper">
    <div class="signup-box">

        <h2 class="signup-title"><?php echo e(__('auth.singup')); ?></h2>

        <?php if (isset($component)) { $__componentOriginal0ff1ee8966084a5d418f848c5e125b44 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0ff1ee8966084a5d418f848c5e125b44 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.auth-validation-errors','data' => ['class' => 'mb-4','errors' => $errors]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('auth-validation-errors'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'mb-4','errors' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($errors)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal0ff1ee8966084a5d418f848c5e125b44)): ?>
<?php $attributes = $__attributesOriginal0ff1ee8966084a5d418f848c5e125b44; ?>
<?php unset($__attributesOriginal0ff1ee8966084a5d418f848c5e125b44); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal0ff1ee8966084a5d418f848c5e125b44)): ?>
<?php $component = $__componentOriginal0ff1ee8966084a5d418f848c5e125b44; ?>
<?php unset($__componentOriginal0ff1ee8966084a5d418f848c5e125b44); ?>
<?php endif; ?>

        <form method="POST" action="<?php echo e(route('signup.store')); ?>">
            <?php echo csrf_field(); ?>
            <input type="hidden" name="redirect" value="<?php echo e(request('redirect')); ?>">

            <div class="form-group">
                <input type="text" name="username"
                       value="<?php echo e(old('username')); ?>"
                       required autofocus
                       placeholder="<?php echo e(__('auth.enter_your_name')); ?>"
                       class="form-input">
            </div>

            <div class="form-group">
                <input type="text" name="mobile"
                       value="<?php echo e(old('mobile')); ?>"
                       required
                       placeholder="<?php echo e(__('auth.mobile')); ?>"
                       class="form-input">
            </div>

            <div class="submit-wrapper">
                <button type="submit" class="submit-btn">
                    <?php echo e(__('auth.singup')); ?>

                </button>
            </div>
        </form>

        <div class="login-link">
            <?php echo e(__('auth.have_account')); ?>

            <a href="<?php echo e(route('login')); ?>">
                <?php echo e(__('auth.login')); ?>

            </a>
        </div>

    </div>
</div>

<!-- Toastr JS & CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script>
toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "timeOut": "7000",
    "extendedTimeOut": "1000"
};

<?php if(session('message')): ?>
    toastr.success("<?php echo e(session('message')); ?>");
<?php endif; ?>

if (localStorage.getItem('flash_message')) {
    toastr.success(localStorage.getItem('flash_message'));
    localStorage.removeItem('flash_message');
}
</script>

<?php if(session('error')): ?>
<script>
    toastr.error("<?php echo e(session('error')); ?>");
</script>
<?php endif; ?>

<?php if(session('success')): ?>
<script>
    toastr.success("<?php echo e(session('success')); ?>");
</script>
<?php endif; ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend::layouts.auth', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/resources/views/auth/register.blade.php ENDPATH**/ ?>