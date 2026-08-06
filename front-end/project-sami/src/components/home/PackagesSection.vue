<script setup>
import { computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import { packages as fallbackPackages } from '@/data/home'

const props = defineProps({
  packages: { type: Array, default: () => [] },
})

const items = computed(() => (props.packages?.length ? props.packages : fallbackPackages))
</script>

<template>
  <section id="packages" class="catalog-section">
    <SectionTitle title="باقاتنا المميزة" />
    <div class="package-grid package-grid--home">
      <article v-for="item in items" :key="item.id">
        <AppImage :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <RouterLink to="/packages-gifts">استكشف الباقة ←</RouterLink>
      </article>
    </div>
  </section>
</template>
