<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import Skeleton from '@/components/common/SkeletonLoader.vue'
import { useStore } from '@/composables/useStore'

const props = defineProps({
    products: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
})

const { state, addToCart, setQty, removeFromCart, getMaxQty } = useStore()

const formatPrice = value => `${value ?? 0} ريال`

const inCart = id => state.cart[id] || 0

/* المخزون المتاح من بيانات الـ Home API (stock_qty) */
const stockOf = item => Number(item.stock_qty ?? 0)

/* هل وصل الحد الأقصى؟ بنتحقق من المخزون المحلي (Home API) + المخزون من الـ shop catalog (useStore) */
const isMaxed = item => {
    const qty = inCart(item.id)
    if (qty <= 0) return false
    const homeStock = stockOf(item)
    const storeMax = getMaxQty(item.id)
    const limit = storeMax > 0 ? Math.min(homeStock || storeMax, storeMax) : homeStock
    return limit > 0 && qty >= limit
}

const isOutOfStock = item => stockOf(item) <= 0

/* Toast لإعلام المستخدم */
const toastMsg = ref('')
const toastOn = ref(false)
let toastTimer = null

function showToast(msg) {
    toastMsg.value = msg
    toastOn.value = true
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => { toastOn.value = false }, 2200)
}

function increment(item) {
    if (isMaxed(item)) {
        showToast(`الحد الأقصى المتاح: ${stockOf(item)} قطعة`)
        return
    }
    const added = addToCart(item.id)
    if (!added) {
        showToast('تم الوصول للحد الأقصى من هذا المنتج')
    }
}

function decrement(id) {
    const qty = inCart(id)
    if (qty <= 1) {
        removeFromCart(id)
    } else {
        setQty(id, qty - 1)
    }
}
</script>

<template>
    <section
        data-reveal
        id="products"
        class="catalog-section"
    >
        <SectionTitle title="منتجات العناية" />

        <!-- Skeleton Loading -->
        <div v-if="loading" class="product-grid">
            <article v-for="n in 3" :key="n" data-reveal style="display:flex;flex-direction:column;align-items:center;gap:8px;min-height:230px">
                <Skeleton width="100%" height="145px" border-radius="8px" />
                <Skeleton width="75%" height="13px" variant="text" />
                <Skeleton width="50%" height="13px" variant="text" />
            </article>
        </div>

        <div
            v-else
            class="product-grid"
        >
            <article
                v-for="item in products"
                :key="item.id"
                data-reveal
            >
                <RouterLink to="/store">

                    <AppImage
                        :src="item.product_image"
                        :alt="item.name"
                    />

                    <h3>{{ item.name }}</h3>

                </RouterLink>

                <b>
                    {{ formatPrice(item.max_price) }}
                </b>

                <!-- Out of Stock badge -->
                <span v-if="isOutOfStock(item)" class="product-out-badge">
                    نفد المخزون
                </span>

                <!-- Cart: Add Button -->
                <button
                    v-else-if="!inCart(item.id)"
                    class="product-cart-link"
                    :aria-label="`إضافة ${item.name} إلى السلة`"
                    @click.stop="addToCart(item.id)"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                </button>

                <!-- Cart: Quantity Controls -->
                <div v-else class="product-qty-controls">
                    <button
                        class="qty-btn qty-btn--minus"
                        :aria-label="inCart(item.id) <= 1 ? `حذف ${item.name} من السلة` : `تقليل كمية ${item.name}`"
                        @click.stop="decrement(item.id)"
                    >
                        <svg v-if="inCart(item.id) <= 1" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        </svg>
                        <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>

                    <span class="qty-value">{{ inCart(item.id) }}</span>

                    <button
                        class="qty-btn qty-btn--plus"
                        :class="{ 'qty-btn--disabled': isMaxed(item) }"
                        :disabled="isMaxed(item)"
                        :aria-label="`زيادة كمية ${item.name}`"
                        @click.stop="increment(item)"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                </div>

            </article>
        </div>

        <RouterLink
            class="show-all"
            to="/store"
        >
            عرض جميع المنتجات ←
        </RouterLink>

    </section>

    <!-- Toast -->
    <Transition name="toast-fade">
        <div v-if="toastOn" class="product-toast">{{ toastMsg }}</div>
    </Transition>
</template>

<style scoped>
/* ===== Quantity Controls ===== */

.product-qty-controls {
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: flex;
    align-items: center;
    gap: 0;
    background: linear-gradient(135deg, #1a1408, #2c1e0a);
    border-radius: 22px;
    padding: 3px;
    box-shadow: 0 4px 14px -4px rgba(0,0,0,.35);
    animation: qtyFadeIn .25s ease-out;
}

@keyframes qtyFadeIn {
    from { opacity: 0; transform: scale(.85); }
    to   { opacity: 1; transform: scale(1); }
}

.qty-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: background .2s, transform .15s;
}

.qty-btn--plus {
    background: linear-gradient(135deg, #dda745, #a96818);
    color: #fff;
}

.qty-btn--plus:hover {
    filter: brightness(1.1);
    transform: scale(1.08);
}

.qty-btn--minus {
    background: rgba(255,255,255,.12);
    color: #e8d5b5;
}

.qty-btn--minus:hover {
    background: rgba(255,80,80,.25);
    color: #ff9090;
    transform: scale(1.08);
}

.qty-value {
    min-width: 26px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    color: #f0cf89;
    font-family: var(--font-d, sans-serif);
    user-select: none;
}


/* ===== Out of Stock ===== */

.product-out-badge {
    position: absolute;
    right: 8px;
    bottom: 8px;
    background: rgba(180, 35, 24, .85);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 20px;
    backdrop-filter: blur(3px);
    letter-spacing: .3px;
}


/* ===== Disabled Plus ===== */

.qty-btn--disabled,
.qty-btn--disabled:hover {
    opacity: .35;
    cursor: not-allowed;
    filter: none;
    transform: none;
}


/* ===== Toast ===== */

.product-toast {
    position: fixed;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(12, 10, 8, .88);
    color: #f0cf89;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 24px;
    border-radius: 26px;
    z-index: 9999;
    backdrop-filter: blur(6px);
    box-shadow: 0 8px 28px -8px rgba(0,0,0,.4);
    white-space: nowrap;
}

.toast-fade-enter-active { transition: all .25s ease-out; }
.toast-fade-leave-active { transition: all .2s ease-in; }
.toast-fade-enter-from,
.toast-fade-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
}
</style>