<script setup>
import { onMounted, ref } from 'vue'
import HeroSection from '@/components/about-page/HeroSection.vue'
import QuickActions from '@/components/about-page/QuickActions.vue'
import AboutSection from '@/components/about-page/AboutSection.vue'
import ServicesSection from '@/components/about-page/ServicesSection.vue'
import ContactSection from '@/components/about-page/ContactSection.vue'
import BranchesSection from '@/components/about-page/BranchesSection.vue'
import FeaturesSection from '@/components/about-page/FeaturesSection.vue'
import PageActions from '@/components/about-page/PageActions.vue'
import SiteFooter from '@/components/about-page/SiteFooter.vue'
import StickyActions from '@/components/about-page/StickyActions.vue'
import { useAboutReveal } from '@/composables/useAboutReveal'
import { getHomeContent } from '@/data/home'

const toast = ref('')
const serviceCategories = ref([])
const servicesLoading = ref(true)
const servicesError = ref('')
let toastTimer

async function loadServices() {
  try {
    const homeData = await getHomeContent()
    serviceCategories.value = homeData.categories || []
  } catch (error) {
    console.error('About services API error:', error)
    servicesError.value = 'تعذر تحميل الخدمات حاليًا'
  } finally {
    servicesLoading.value = false
  }
}

function notify(message) {
  toast.value = message
  clearTimeout(toastTimer)

  toastTimer = setTimeout(() => {
    toast.value = ''
  }, 2300)
}

useAboutReveal()
onMounted(loadServices)
</script>

<template>
  <div class="about-design-page" dir="rtl">
    <main class="about-app-shell">
      <HeroSection logo="/logo.png" />
      <QuickActions />
      <AboutSection />
      <ServicesSection :categories="serviceCategories" :loading="servicesLoading" :error="servicesError" />
      <ContactSection />
      <BranchesSection />
      <FeaturesSection />
      <PageActions @notify="notify" />
      <SiteFooter class="sami-unified-footer" logo="/logo.png" />
    </main>

    <StickyActions />

    <Transition name="toast">
      <div v-if="toast" class="toast" role="status">
        {{ toast }}
      </div>
    </Transition>
  </div>
</template>

<style src="@/assets/styles/about-page.css"></style>

<style>
#app:has(.about-design-page) > .site-header,
#app:has(.about-design-page) > .global-site-footer {
  display: none !important;
}
@media (min-width: 641px) {
    body {
        padding-top: 0 !important;
    }
}


</style>


