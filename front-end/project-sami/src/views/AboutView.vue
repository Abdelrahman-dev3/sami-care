<script setup>
<<<<<<< HEAD
import AppImage from '@/components/common/AppImage.vue'
import { features } from '@/data/home'
</script>

<template>
  <div class="about-page" dir="rtl">
    <section class="about-section container">
      <AppImage src="/images/generated/about-barber-hq.png" alt="حلاق محترف يقدم خدمة للعميل" />

      <div class="about-copy">
        <h2>من نحن</h2>
        <h3>تجربة عناية متكاملة</h3>
        <p>
          في عناية سامي، نؤمن أن العناية الشخصية ليست رفاهية، بل أسلوب حياة.
          لذلك نقدم مجموعة متكاملة من الخدمات العصرية للعناية بالشعر والبشرة في بيئة مريحة وأنيقة.
        </p>

        <h3>نستخدم أحدث الأجهزة والتقنيات</h3>
        <p>
          نحرص على تحقيق أعلى معايير النظافة والسلامة، ويعمل فريقنا المحترف
          ليمنحك تجربة استثنائية ونتائج تليق بك.
        </p>

        <div class="features">
          <article v-for="item in features" :key="item.title">
            <span>{{ item.icon }}</span>
            <b>{{ item.title }}</b>
            <small>{{ item.text }}</small>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #f8f4ee;
  padding: 60px 0 80px;
}
</style>
=======
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


>>>>>>> d7635d7e750ffd15d04dcc6f43b7358a40378eb6
