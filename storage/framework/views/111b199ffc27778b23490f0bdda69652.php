


<button id="cartTriggerBtn" class="cart-trigger-btn" aria-label="<?php echo e(__('messages.cart')); ?>">
    <i class="bi bi-cart3"></i>
    <span id="cartTriggerBadge" class="cart-trigger-badge <?php echo e(($cartCount ?? 0) == 0 ? 'csp-badge-zero' : ''); ?>"><?php echo e($cartCount ?? 0); ?></span>
    <span class="cart-trigger-label"><?php echo e(__('messages.cart')); ?></span>
</button>


<div id="cartOverlay" class="cart-overlay" onclick="closeCartSidebar()"></div>


<div id="cartSidebarPanel" class="cart-sidebar-panel" role="dialog" aria-label="<?php echo e(__('messages.cart')); ?>">

    
    <div class="csp-header">
        <div class="d-flex align-items-center gap-2">
            <i class="bi bi-cart3"></i>
            <span><?php echo e(__('messages.cart')); ?></span>
        </div>
        <button class="csp-close-btn" onclick="closeCartSidebar()">
            <i class="bi bi-x-lg"></i>
        </button>
    </div>

    
    <div class="csp-body" id="cartSidebarBody">

        
        <div id="cartLoadingState" class="csp-loading">
            <div class="csp-skeleton"></div>
            <div class="csp-skeleton short"></div>
            <div class="csp-skeleton"></div>
        </div>

        
        <div id="cartEmptyState" class="csp-empty" style="display:none;">
            <i class="bi bi-cart-x"></i>
            <p><?php echo e(__('messages.cart_empty')); ?></p>
        </div>

        
        <div id="cartProductsList" style="display:none;">

            
            <div id="cartItemsContainer"></div>



            

















            <hr class="csp-divider"/>

            
            <div class="csp-section-title">
                <i class="bi bi-receipt me-1"></i><?php echo e(__('messages.order_summary')); ?>

            </div>
            <div class="csp-summary-box">
                <div class="csp-summary-row">
                    <span class="csp-sum-label"><?php echo e(__('messages.products_count')); ?></span>
                    <span class="csp-sum-val" id="cspProductsCount">—</span>
                </div>
                <div class="csp-summary-row">
                    <span class="csp-sum-label"><?php echo e(__('messages.services_count')); ?></span>
                    <span class="csp-sum-val" id="cspServicesCount">—</span>
                </div>












                <div class="csp-summary-row">
                    <span class="csp-sum-label"><?php echo e(__('messages.packages_count')); ?></span>
                    <span class="csp-sum-val" id="cspPackagesCount">—</span>
                </div>
                <div class="csp-summary-row csp-total-row">
                    <span class="csp-sum-label"><?php echo e(__('messages.final_price')); ?></span>
                    <span class="csp-sum-val csp-final" id="cspFinalPrice">—</span>
                </div>
            </div>

        </div>

    </div>

    
    <div class="csp-footer">
        <a href="<?php echo e(route('cart.page')); ?>" class="csp-go-btn">
            <i class="bi bi-bag-check-fill"></i>
            <?php echo e(__('messages.go_to_cart')); ?>

            <i class="bi bi-arrow-<?php echo e(language_direction() == 'rtl' ? 'left' : 'right'); ?>"></i>
        </a>
    </div>

</div>


<template id="cartItemTemplate">
    <div class="csp-item" data-item-id="" data-item-type="">
        <div class="csp-item-thumb"></div>
        <div class="csp-item-info">
            <div class="csp-item-top">
                <span class="csp-item-name"></span>



            </div>
            <div class="csp-item-prices">
                <span class="csp-item-original"></span>
                <span class="csp-item-final"></span>
                <span class="csp-item-discount"></span>
                <span class="csp-item-coupon"></span>
            </div>
            <span class="csp-item-meta"></span>
        </div>
    </div>
</template>


<script>
    window.CartSidebarConfig = {
        fetchUrl:    "<?php echo e(route('cart.sidebar')); ?>",
        cartPageUrl: "<?php echo e(route('cart.page')); ?>",
        currency:    "<?php echo e(config('app.currency', 'ر.س')); ?>",
        lang:        "<?php echo e(app()->getLocale()); ?>",
        csrfToken:   document.querySelector('meta[name="csrf-token"]')?.content || '',
    };
</script>
<?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/components/frontend/cart-sidebar.blade.php ENDPATH**/ ?>