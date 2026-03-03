{{-- ============================================================
     Component: resources/views/components/frontend/cart-sidebar.blade.php
     Usage: <x-frontend.cart-sidebar />
     ============================================================ --}}

{{-- ── Floating Trigger Button ── --}}
<button id="cartTriggerBtn" class="cart-trigger-btn" aria-label="{{ __('messages.cart') }}">
    <i class="bi bi-cart3"></i>
    <span id="cartTriggerBadge" class="cart-trigger-badge {{ ($cartCount ?? 0) == 0 ? 'csp-badge-zero' : '' }}">{{ $cartCount ?? 0 }}</span>
    <span class="cart-trigger-label">{{ __('messages.cart') }}</span>
</button>

{{-- ── Overlay ── --}}
<div id="cartOverlay" class="cart-overlay" onclick="closeCartSidebar()"></div>

{{-- ── Sidebar Panel ── --}}
<div id="cartSidebarPanel" class="cart-sidebar-panel" role="dialog" aria-label="{{ __('messages.cart') }}">

    {{-- Header --}}
    <div class="csp-header">
        <div class="d-flex align-items-center gap-2">
            <i class="bi bi-cart3"></i>
            <span>{{ __('messages.cart') }}</span>
        </div>
        <button class="csp-close-btn" onclick="closeCartSidebar()">
            <i class="bi bi-x-lg"></i>
        </button>
    </div>

    {{-- Body --}}
    <div class="csp-body" id="cartSidebarBody">

        {{-- Loading --}}
        <div id="cartLoadingState" class="csp-loading">
            <div class="csp-skeleton"></div>
            <div class="csp-skeleton short"></div>
            <div class="csp-skeleton"></div>
        </div>

        {{-- Empty --}}
        <div id="cartEmptyState" class="csp-empty" style="display:none;">
            <i class="bi bi-cart-x"></i>
            <p>{{ __('messages.cart_empty') }}</p>
        </div>

        {{-- Items + Summary --}}
        <div id="cartProductsList" style="display:none;">

            {{-- Dynamic items injected by JS --}}
            <div id="cartItemsContainer"></div>

{{--            <hr class="csp-divider"/>--}}

            {{-- Coupon --}}
{{--            <div class="mb-2">--}}
{{--                <div class="csp-section-title">--}}
{{--                    <i class="bi bi-ticket-perforated me-1"></i>{{ __('messages.discount_coupon') }}--}}
{{--                </div>--}}
{{--                <div class="csp-coupon-row">--}}
{{--                    <input type="text"--}}
{{--                           id="cartCouponInput"--}}
{{--                           class="csp-coupon-input"--}}
{{--                           placeholder="{{ __('messages.enter_coupon') }}"--}}
{{--                           dir="ltr"/>--}}
{{--                    <button class="csp-coupon-btn" onclick="applySidebarCoupon()">--}}
{{--                        {{ __('messages.apply') }}--}}
{{--                    </button>--}}
{{--                </div>--}}
{{--                <div id="cartCouponMsg" class="csp-coupon-msg" style="display:none;"></div>--}}
{{--            </div>--}}

            <hr class="csp-divider"/>

            {{-- Summary --}}
            <div class="csp-section-title">
                <i class="bi bi-receipt me-1"></i>{{ __('messages.order_summary') }}
            </div>
            <div class="csp-summary-box">
                <div class="csp-summary-row">
                    <span class="csp-sum-label">{{ __('messages.products_count') }}</span>
                    <span class="csp-sum-val" id="cspProductsCount">—</span>
                </div>
                <div class="csp-summary-row">
                    <span class="csp-sum-label">{{ __('messages.services_count') }}</span>
                    <span class="csp-sum-val" id="cspServicesCount">—</span>
                </div>
{{--                <div class="csp-summary-row">--}}
{{--                    <span class="csp-sum-label">{{ __('messages.gifts_count') }}</span>--}}
{{--                    <span class="csp-sum-val" id="cspGiftsCount">—</span>--}}
{{--                </div>--}}
{{--                <div class="csp-summary-row">--}}
{{--                    <span class="csp-sum-label">{{ __('messages.subtotal') }}</span>--}}
{{--                    <span class="csp-sum-val" id="cspSubtotal">—</span>--}}
{{--                </div>--}}
{{--                <div class="csp-summary-row">--}}
{{--                    <span class="csp-sum-label">{{ __('messages.discount') }}</span>--}}
{{--                    <span class="csp-sum-val csp-discount" id="cspDiscount">—</span>--}}
{{--                </div>--}}
                <div class="csp-summary-row">
                    <span class="csp-sum-label">{{ __('messages.packages_count') }}</span>
                    <span class="csp-sum-val" id="cspPackagesCount">—</span>
                </div>
                <div class="csp-summary-row csp-total-row">
                    <span class="csp-sum-label">{{ __('messages.final_price') }}</span>
                    <span class="csp-sum-val csp-final" id="cspFinalPrice">—</span>
                </div>
            </div>

        </div>{{-- /cartProductsList --}}

    </div>{{-- /csp-body --}}

    {{-- Footer --}}
    <div class="csp-footer">
        <a href="{{ route('cart.page') }}" class="csp-go-btn">
            <i class="bi bi-bag-check-fill"></i>
            {{ __('messages.go_to_cart') }}
            <i class="bi bi-arrow-{{ language_direction() == 'rtl' ? 'left' : 'right' }}"></i>
        </a>
    </div>

</div>{{-- /cart-sidebar-panel --}}

{{-- ── Item Template (cloned by JS — do NOT add visible content here) ── --}}
<template id="cartItemTemplate">
    <div class="csp-item" data-item-id="" data-item-type="">
        <div class="csp-item-thumb"></div>
        <div class="csp-item-info">
            <div class="csp-item-top">
                <span class="csp-item-name"></span>
{{--                <button class="csp-item-remove" aria-label="{{ __('messages.remove') }}">--}}
{{--                    <i class="bi bi-trash3"></i>--}}
{{--                </button>--}}
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

{{-- ── Inject JS config from Laravel ── --}}
<script>
    window.CartSidebarConfig = {
        fetchUrl:    "{{ route('cart.sidebar') }}",
        cartPageUrl: "{{ route('cart.page') }}",
        currency:    "{{ config('app.currency', 'ر.س') }}",
        lang:        "{{ app()->getLocale() }}",
        csrfToken:   document.querySelector('meta[name="csrf-token"]')?.content || '',
    };
</script>
