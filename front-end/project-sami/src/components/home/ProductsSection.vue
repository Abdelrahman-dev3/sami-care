<script setup>
import { computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import { products as fallbackProducts } from '@/data/home'

const props = defineProps({
  products: { type: Array, default: () => [] },
})

const items = computed(() => (props.products?.length ? props.products : fallbackProducts))
const formatPrice = value => `${value} ريال`
</script>

<template>
  <section id="products" class="catalog-section">
    <SectionTitle title="منتجات العناية" />
    <div class="product-grid">
      <article v-for="item in items" :key="item.id">
        <RouterLink to="/store">
          <AppImage :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
        </RouterLink>
        <b>{{ formatPrice(item.price) }}</b>
        <RouterLink class="product-cart-link" to="/store" :aria-label="`عرض ${item.name} في المتجر`">🛒</RouterLink>
      </article>
    </div>
    <RouterLink class="show-all" to="/store">عرض جميع المنتجات ←</RouterLink>
  </section>
</template>
