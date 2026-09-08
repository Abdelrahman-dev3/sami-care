<!-- <script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import Skeleton from '@/components/common/SkeletonLoader.vue'

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

const formatPrice = value => `${value ?? 0} ريال`
</script> -->

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import Skeleton from '@/components/common/SkeletonLoader.vue'
import { useStore } from '@/composables/useStore'
import { fetchProductDetail } from '@/services/productsApi'

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


const { state, setQty } = useStore()

const pendingProductId = ref(null)
const cartMessage = ref('')

const currentQty = id => state.cart[id] || 0

async function changeHomeQty(product, delta) {
    const current = currentQty(product.id)
    const nextQty = current + delta

    if (nextQty <= 0) {
        setQty(product.id, 0)
        return
    }

    if (pendingProductId.value === product.id) return

    pendingProductId.value = product.id
    cartMessage.value = ''

    try {
        const detail = await fetchProductDetail(product.id)
        const variation = detail?.variation_data?.[0]

        const availableQty = Number(
            variation?.product_stock_qty ??
            detail?.stock_qty ??
            product.stock_qty ??
            0
        )

        if (availableQty <= 0) {
            cartMessage.value = 'هذا المنتج غير متوفر حاليًا'
            return
        }

        if (nextQty > availableQty) {
            cartMessage.value = `الكمية المتاحة فقط ${availableQty}`
            return
        }

        setQty(product.id, nextQty)
    } catch (error) {
        console.error('Product quantity error:', error)
        cartMessage.value = 'تعذر تعديل الكمية'
    } finally {
        pendingProductId.value = null
    }
}


const formatPrice = value => `${value ?? 0} ريال`

</script>

<template>
    <section data-reveal id="products" class="catalog-section">
        <SectionTitle title="منتجات العناية" />

        <!-- Skeleton Loading -->
        <div v-if="loading" class="product-grid">
            <article v-for="n in 3" :key="n" data-reveal
                style="display:flex;flex-direction:column;align-items:center;gap:8px;min-height:230px">
                <Skeleton width="100%" height="145px" border-radius="8px" />
                <Skeleton width="75%" height="13px" variant="text" />
                <Skeleton width="50%" height="13px" variant="text" />
            </article>
        </div>

        <div v-else class="product-grid">
            <article v-for="item in products" :key="item.id" data-reveal>
                <RouterLink to="/store">

                    <AppImage :src="item.product_image" :alt="item.name" />

                    <h3>{{ item.name }}</h3>

                </RouterLink>

                <b>
                    {{ formatPrice(item.max_price) }}
                </b>

                <!--  <RouterLink
                    class="product-cart-link"
                    to="/store"
                    :aria-label="`عرض ${item.name} في المتجر`"
                >
                    🛒
                </RouterLink> -->
                <!-- 
                <button type="button" class="product-cart-link" :disabled="pendingProductId === item.id"
                    :aria-label="`إضافة ${item.name} للسلة`" @click="addHomeProduct(item)">
                    <span>🛒</span>
                    <small v-if="currentQty(item.id)">
                        {{ currentQty(item.id) }}
                    </small>
                </button> -->

                <div v-if="currentQty(item.id) === 0">
                    <button type="button" class="product-cart-link" :disabled="pendingProductId === item.id"
                        @click="changeHomeQty(item, 1)">
                        🛒
                    </button>
                </div>

                <div v-else class="home-qty-control">
                    <button type="button" aria-label="زيادة الكمية" :disabled="pendingProductId === item.id"
                        @click="changeHomeQty(item, 1)">
                        +
                    </button>

                    <input type="number" :value="currentQty(item.id)" readonly aria-label="الكمية" />

                    <button type="button" aria-label="إنقاص الكمية" @click="changeHomeQty(item, -1)">
                        −
                    </button>
                </div>

            </article>
        </div>

        <p v-if="cartMessage" class="home-cart-message">
            {{ cartMessage }}
        </p>

        <RouterLink class="show-all" to="/store">
            عرض جميع المنتجات ←
        </RouterLink>

    </section>
</template>