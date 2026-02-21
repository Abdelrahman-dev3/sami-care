
<div class="position-relative rounded-4 overflow-hidden shadow" style="height: 350px;">
    <img src="<?php echo e($image ?? asset('images/frontend/card 11.png')); ?>" alt="<?php echo e($name ?? 'Category'); ?>" class="w-100 h-100" style="object-fit: cover;">
    <div class="position-absolute top-0 start-0 w-100 h-100" style="background: linear-gradient(to top, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.0) 100%);"></div>       

    <!-- Pricing badge -->
    <div class="position-absolute top-0 m-3 px-3 py-1 rounded-pill text-white"
         style="cursor: pointer;width: 77.8px;height: 32.4px;text-align: center;line-height: 2;font-weight: bold;font-size: 13.6px;"
         data-bs-toggle="modal"   
         data-bs-target="#pricingModal"
         <?php if(isset($category_id)): ?> onclick="showCategoryServices(<?php echo e($category_id); ?>)" <?php endif; ?>>
        <?php echo e(__('messagess.pricing')); ?>

    </div>

    <!-- Services count badge -->
    <?php if(isset($services_count)): ?>
        <div class="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill text-white"
             style="background: rgba(0,0,0,0.7);">
            <?php echo e($services_count); ?> <?php echo e(__('messagess.services')); ?>

        </div>
    <?php endif; ?>
    <!-- Category info -->
    <div class="position-absolute" style="bottom: 26%;width: 100%;text-align: center;">
        <div class="" style="margin: 9px;">
            <div class="text-white h3 mb-0 fw-bold" style="font-size: 20px;margin-bottom: -31px;"><?php echo e($name ?? 'Category Name'); ?></div>
            <?php if(isset($description)): ?>
                <div class="text-white-50 small"><?php echo e($description); ?></div>
            <?php endif; ?>
            <?php if(isset($services_count)): ?>
                <div class="text-white-50 small">
                    <svg width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                    <?php echo e($services_count); ?> <?php echo e(__('messagess.services_available')); ?>

                </div>
            <?php endif; ?>
        </div>
    </div>

    <!-- Buttons -->
    <div class="position-absolute start-50 translate-middle-x w-100 d-flex justify-content-center px-5" style="bottom: 25px;" id="te">
        <div class="d-flex gap-3 text-white w-100 justify-content-center">
            <?php if(isset($category_id)): ?>
                <a href="<?php echo e(route('frontend.category.details', $category_id)); ?>" class="btn btn-light rounded-pill px-4 py-2 col-6 text-center m-0 d-flex align-items-center justify-content-center" style="font-size: 15.2px;font-weight: bold;background-color: #ffffff00;height: 42.8px;color: white !important;width: 90%;"><?php echo e(__('messagess.details')); ?></a>
            <?php else: ?>
                <a href="#" class="btn btn-light rounded-pill px-4 py-2 col-6 text-center m-0 d-flex align-items-center justify-content-center" style="font-size: 15.2px;font-weight: bold;width: 159px;background-color: var(--primary-color);height: 42.8px;"><?php echo e(__('messagess.details')); ?></a>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php /**PATH C:\Users\VIP\Desktop\sami-care\sami-care\resources\views/components/frontend/category-card.blade.php ENDPATH**/ ?>