<script setup>
import { ref, onMounted } from 'vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import GiftBanner from '@/components/home/GiftBanner.vue'
import CafeStrip from '@/components/home/CafeStrip.vue'
import PromoCard from '@/components/home/PromoCard.vue'
import LuckyWheelCard from '@/components/home/LuckyWheelCard.vue'
import PackagesSection from '@/components/home/PackagesSection.vue'
import ProductsSection from '@/components/home/ProductsSection.vue'
import BranchesSection from '@/components/home/BranchesSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import FinalCta from '@/components/home/FinalCta.vue'
import { getHomeContent } from '@/data/home'

const homeData = ref({
    categories: [],
    offers: [],
    products: [],
    packages: [],
    branches: [],
    reviews: [],
    wheel_prizes: [],
})

const loading = ref(true)
const error = ref(null)

const loadHomeData = async () => {
    try {
        loading.value = true
        error.value = null

        homeData.value = await getHomeContent()

        console.log('Home API:', homeData.value)
    } catch (err) {
        console.error('Home API Error:', err)

        error.value = 'حدث خطأ أثناء تحميل بيانات الصفحة الرئيسية'
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadHomeData()
})

</script>

<template>
  <div class="home-page desktop-home" dir="rtl">
    <main>
      <HeroSection />
      <div class="home-light">
        <AboutSection />
          <ServicesSection
                    :categories="homeData.categories"
                    :loading="loading"
                />

                <!-- Offers -->
                <PromoCard
                    :offers="homeData.offers"
                    :loading="loading"
                />
        <CafeStrip />
        <GiftBanner />
       <LuckyWheelCard
                    :prizes="homeData.wheel_prizes"
                />
       <div class="catalog container">

                    <!-- Packages -->
                    <PackagesSection
                        :packages="homeData.packages"
                        :loading="loading"
                    />

                    <!-- Products -->
                    <ProductsSection
                        :products="homeData.products"
                        :loading="loading"
                    />

                </div>

                <BranchesSection
                    :branches="homeData.branches"
                />

                <!-- Reviews -->
                <TestimonialsSection
                    :reviews="homeData.reviews"
                    :loading="loading"
                />
        
        <FinalCta />
      </div>
    </main>
  
  </div>
</template>

<style>
body{background:#f8f4ee}.home-page{min-height:100vh;background:#f8f4ee;color:#171717}.home-light{position:relative;z-index:4;margin-top:-42px;padding-top:36px;background:#f8f4ee;border-radius:52% 52% 0 0/44px 44px 0 0}
</style>
