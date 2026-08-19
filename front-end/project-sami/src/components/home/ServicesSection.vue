<script setup>
import { computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import { useRouter } from 'vue-router'
import { useServiceLocation } from '@/composables/useServiceLocation'
import { useLanguage } from '@/composables/useLanguage'
import { resolveApiImage } from '@/utils/assetPath'

const props = defineProps({
    categories: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
})

const router = useRouter()
const { requireLocation } = useServiceLocation()
const { state: lang } = useLanguage()

function nameOf(category) {
    return category.name?.[lang.lang] || category.name?.ar || category.name?.en || category.name
}

const services = computed(() => {
    return props.categories.flatMap(category => {
        return (category.services || []).map(service => ({
            ...service,
            category_name: category.name,
        }))
    })
})

function go(path) {
    requireLocation(() => router.push(path))
}
</script>

<template>
  <section data-reveal id="services" class="home-section container">
    <SectionTitle title="خدماتنا" />
    <div class="services-grid">
      <article v-for="service in categories" :key="service.id" class="service-card" data-reveal>
        <AppImage :src="resolveApiImage(service.image) || service.feature_image" :alt="nameOf(service)" />
        <div class="card-overlay">
          <h3>{{ nameOf(service) }}</h3>
          <a href="#" @click.prevent="go(`/services/${service.id}`)">التفاصيل <span>←</span></a>
        </div>
      </article>
    </div>
    <a href="#" class="show-all" @click.prevent="go('/services')">عرض جميع الخدمات ←</a>
  </section>
</template>
