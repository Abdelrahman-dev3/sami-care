<?php $__env->startSection('title'); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('after-styles'); ?>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('content'); ?>
<style>
   body {
        background: #f5f1ea;
        direction: rtl;
        font-family:'Tajawal', sans-serif;
    }
    
    .loyalty-container {
        max-width: 850px;
        margin: 60px auto;
        text-align: center;
        animation: fadeIn 1s ease forwards;
    }
    
    .loyalty-header {
        color: #2b2b2b;
    }
    
    .loyalty-header i {
        font-size: 60px;
        color: #bf9456;
        animation: float 2.5s infinite ease-in-out;
    }
    
    .loyalty-header h2 {
        font-size: 40px;
        font-weight: bold;
        margin-top: 10px;
    }
    
    .loyalty-header p {
        font-size: 18px;
        opacity: 0.8;
    }
    
    .loyalty-card {
        margin-top: 40px;
        padding: 30px;
        background: #fff;
        border-radius: 25px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        position: relative;
        overflow: hidden;
        animation: slideUp 1s ease forwards;
    }
    
    .icon-wrap {
        width: 100px;
        height: 100px;
        background: #bf9456;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        top: -50px;
        transform: translateX(-50%);
        animation: pop 0.8s ease forwards;
    }
    
    .icon-wrap i {
        font-size: 45px;
        color: white;
        animation: shine 2s infinite linear;
    }
    
    .loyalty-info h3 {
        margin-top: 60px;
        font-size: 28px;
        font-weight: bold;
        color: #333;
    }
    
    .input-group {
        margin-top: 25px;
        text-align: right;
    }
    
    .input-group label {
        font-weight: 600;
        color: #333;
    }
    
    .input-group input {
        width: 100%;
        padding: 12px;
        border: 2px solid #e7e7e7;
        border-radius: 12px;
        margin-top: 8px;
        transition: 0.3s;
    }
    
    .input-group input:focus {
        border-color: #bf9456;
        box-shadow: 0 0 8px rgba(191,148,86,0.4);
    }
    
    .save-btn {
        margin-top: 30px;
        background: #bf9456;
        padding: 15px 30px;
        border: none;
        color: white;
        font-size: 20px;
        border-radius: 15px;
        cursor: pointer;
        transition: 0.3s;
        animation: pulse 2s infinite ease-in-out;
    }
    
    .save-btn:hover {
        background: #d3ad7a;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(191,148,86,0.4);
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideUp {
        from { transform: translateY(40px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes pop {
        0% { transform: translate(-50%, -30px) scale(0); }
        100% { transform: translate(-50%, -50px) scale(1); }
    }
    
    @keyframes shine {
        0% { text-shadow: 0 0 5px white; }
        50% { text-shadow: 0 0 15px white; }
        100% { text-shadow: 0 0 5px white; }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }

</style>

<div class="loyalty-container">
    <?php if($errors->any()): ?>
        <div class="alert alert-danger shadow-lg">
            <ul class="mb-0">
                <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li><?php echo e($error); ?></li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </div>
    <?php endif; ?>

    <?php if(session('error')): ?>
        <div class="alert alert-danger shadow-lg">
            <?php echo e(session('error')); ?>

        </div>
    <?php endif; ?>

    <?php if(session('success')): ?>
        <div class="alert alert-success shadow-lg">
            <?php echo e(session('success')); ?>

        </div>
    <?php endif; ?>

    <form action="<?php echo e(route('loyalty.store')); ?>" method="POST">
    <?php echo csrf_field(); ?>
        <div class="loyalty-header">
            <i class="fas fa-coins"></i>
            <h2><?php echo e(__('messages.loyalty_system')); ?></h2>
            <p><?php echo e(__('messages.loyalty_description')); ?></p>
        </div>
    
        <div class="loyalty-card">
            <div class="icon-wrap">
                <i class="fas fa-gem"></i>
            </div>
    
            <div class="loyalty-info">
                <h3><?php echo e(__('messages.loyalty_settings')); ?></h3>
    
                <div class="input-group">
                    <label><?php echo e(__('messages.points_per_100')); ?></label>
                    <input type="number" name="points_per_100" value="<?php echo e($points_per_100 ?? ''); ?>" placeholder="<?php echo e(__('messages.points_number')); ?>">
                </div>
    
                <div class="input-group">
                    <label><?php echo e(__('messages.point_value')); ?></label>
                    <input type="number" name="point_value" value="<?php echo e($point_value ?? ''); ?>" step="0.01" placeholder="<?php echo e(__('messages.example_value')); ?>">
                </div>
                <?php if(Auth::user()->can('store_loyalty')): ?>
                    <button class="save-btn">
                        <i class="fas fa-save"></i> <?php echo e(__('messages.save_settings')); ?>

                    </button>
                <?php endif; ?>
            </div>
        </div>
    </form>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/city2tec/sami-care.sa/resources/views/backend/loyalty/index.blade.php ENDPATH**/ ?>