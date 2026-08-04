<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import { services as fallbackServices } from '@/data/home'

const props = defineProps({
  services: { type: Array, default: () => [] },
})

const items = props.services.length ? props.services : fallbackServices
</script>

<template>
  <section id="services" class="home-section container">
    <SectionTitle title="خدماتنا" />
    <div class="services-grid">
      <article v-for="service in items" :key="service.id" class="service-card">
        <AppImage :src="service.image" :alt="service.name" />
        <div class="card-overlay">
          <h3>{{ service.name }}</h3>
          <RouterLink :to="`/services/${service.id}`">التفاصيل <span>←</span></RouterLink>
        </div>
      </article>
    </div>
    <RouterLink to="/services" class="show-all">عرض جميع الخدمات ←</RouterLink>
  </section>
</template>
