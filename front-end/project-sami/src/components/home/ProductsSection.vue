<script setup>
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

                <RouterLink
                    class="product-cart-link"
                    to="/store"
                    :aria-label="`عرض ${item.name} في المتجر`"
                >
                    🛒
                </RouterLink>

            </article>
        </div>

        <RouterLink
            class="show-all"
            to="/store"
        >
            عرض جميع المنتجات ←
        </RouterLink>

    </section>
</template>