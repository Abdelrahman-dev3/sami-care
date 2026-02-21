<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo e(asset('pages-css/products-card.css')); ?>">
<?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<section class="py-5">
    <div class="container"  style="padding: 0 5rem;">
        <h2 class="mb-5 text-center" style="font-size: 42px;background: linear-gradient(90deg, #CF9233, #212121);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-size: 2.5rem; font-weight: bold;">
            <?php echo e(__('product.3naya_product')); ?>

        </h2>
        <?php if(isset($products) && $products->count() > 0): ?>
            <div class="row g-4">
                <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="<?php echo e($index * 100); ?>">

                        <?php echo $__env->make('components.frontend.products-card', [
                            'image' => $product->feature_image,
                            'name' => $product->name,
                            'des' => $product->short_description,
                            'product_id' => $product->id,
                            'categories' => $product->categories,
                            'min_price' => $product->min_price,
                            'max_price' => $product->max_price,
                        ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?> 
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        <a href="<?php echo e(route('frontend.Shop')); ?>" class="more-btn">
            <p style="color:white;font-size: 16px;margin: 0 13px;"><?php echo e(__('product.learn_more')); ?></p>
            <span class="arrow" style="color: white;"><span class="iconify" data-icon="tabler:arrow-left" data-width="22"></span></span>
        </a>
        <?php else: ?>
            <div class="text-center py-5">
                <p class="text-muted"><?php echo e(__('product.no_product')); ?></p>
            </div>
        <?php endif; ?>
    </div>
</section>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init({ once: true });
        function addtocart(productId) {
        fetch(`/cart/add/${productId}`)
            .then(response => response.json())
            .then(data => {
                createNotify({ title: data.status , desc: data.message });
            })
            .catch(error => {
                createNotify({ title: data.status, desc: data.message });
            });
    }
    function shownav(){
        createNotify({ 
            title: "<?php echo e(__('product.notification')); ?>", 
            desc: "<?php echo e(__('product.login_required_feature')); ?>" 
        });
    }
</script><?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\resources\views/components/frontend/product-section.blade.php ENDPATH**/ ?>