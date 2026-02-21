<link rel="stylesheet" href="<?php echo e(asset('pages-css/products-card.css')); ?>">

<div class="product-card">
  <div class="product-image">
    <img src="<?php echo e($image); ?>" alt="<?php echo e($name); ?>">
  </div>
  <div class="product-content">
    <p class="category">
        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php echo e($category->name); ?>

        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </p>
    <a href="<?php echo e(route('frontend.product.details' , $product_id)); ?>">
        <h3 class="product-title"><?php echo e($name); ?></h3>
    </a>

    <div class="rating">
      ★★★★★
    </div>

    <p class="description">
        <?php echo e($des); ?>

    </p>

    <div class="bottom">
      <span class="price"><?php echo e($max_price); ?> <?php echo e(__('messagess.SAR')); ?></span>
      <?php if(auth()->guard()->check()): ?>
          <button class="add-to-cart" onclick='addtocart(<?php echo e($product_id); ?>)'>
            <span style="font-weight: bold;width: 100%;">
                <?php echo e(__('messagess.add_to_cart')); ?>

            </span>
          </button>
      <?php endif; ?>
      <?php if(auth()->guard()->guest()): ?>
          <button class="add-to-cart" onclick='shownav()'>
            <span style="font-weight: bold;width: 100%;">
                <?php echo e(__('messagess.add_to_cart')); ?>

            </span>
          </button>
      <?php endif; ?>
    </div>
  </div>
</div>
<?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\resources\views/components/frontend/products-card.blade.php ENDPATH**/ ?>