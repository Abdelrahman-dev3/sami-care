<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import GiftBanner from '@/components/home/GiftBanner.vue'
import PromoCard from '@/components/home/PromoCard.vue'
import LuckyWheelCard from '@/components/home/LuckyWheelCard.vue'
import PackagesSection from '@/components/home/PackagesSection.vue'
import ProductsSection from '@/components/home/ProductsSection.vue'
import BranchesSection from '@/components/home/BranchesSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import FinalCta from '@/components/home/FinalCta.vue'
import '@/assets/styles/home.css'

import { fetchHomeData, fetchBranches } from '@/services/homeApi'
import {
  services as fallbackServices,
  packages as fallbackPackages,
  products as fallbackProducts,
  branches as fallbackBranches,
  testimonials as fallbackTestimonials,
  promos as fallbackPromos,
} from '@/data/home'

const categories = ref(fallbackServices)
const offers = ref(fallbackPromos)
const products = ref(fallbackProducts)
const packages = ref(fallbackPackages)
const branches = ref(fallbackBranches)
const reviews = ref(fallbackTestimonials)
const wheelPrizes = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await fetchHomeData()

    // Categories/Services
    if (data.categories?.length) {
      categories.value = data.categories.map(cat => ({
        id: cat.id,
        name: typeof cat.name === 'object' ? (cat.name?.ar || cat.name?.en || '') : (cat.name || ''),
        image: cat.feature_image || '/images/services/bath/hero.jpg',
      }))
    }

    // Offers
    if (data.offers?.length) {
      offers.value = data.offers.map(offer => ({
        id: offer.id,
        title: typeof offer.name === 'object' ? (offer.name?.ar || offer.name?.en || '') : (offer.name || ''),
        text: typeof offer.description === 'object' ? (offer.description?.ar || offer.description?.en || '') : (offer.description || ''),
        badge: offer.package_price ? `${offer.package_price} ريال` : '🔥',
        cta: 'اكتشف العرض',
        image: offer.feature_image || null,
      }))
    }

    // Products
    if (data.products?.length) {
      products.value = data.products.map(product => {
        const p = product.data || product
        return {
          id: p.id,
          name: typeof p.name === 'object' ? (p.name?.ar || p.name?.en || '') : (p.name || ''),
          price: p.price ?? p.service_price ?? 0,
          image: p.feature_image || (p.media?.length ? p.media[0].original_url : '/images/generated/products/care-set-card-hq.png'),
        }
      })
    }

    // Packages
    if (data.packages?.length) {
      packages.value = data.packages.map(pkg => ({
        id: pkg.id,
        name: typeof pkg.name === 'object' ? (pkg.name?.ar || pkg.name?.en || '') : (pkg.name || ''),
        description: typeof pkg.description === 'object' ? (pkg.description?.ar || pkg.description?.en || '') : (pkg.description || ''),
        image: pkg.feature_image || '/images/generated/packages/beard-care-hq.png',
      }))
    }

    // Branches
    let fetchedBranches = data.branches
    if (!fetchedBranches?.length) {
      fetchedBranches = await fetchBranches()
    }

    if (fetchedBranches?.length) {
      branches.value = fetchedBranches.map((branch, idx) => {
        const b = branch.data || branch
        const addr = b.address?.state_data?.name || b.address?.address_line_1 || (typeof b.address === 'string' ? b.address : '') || 'فرع سامي للعناية'
        const fallbackImg = idx % 2 === 0 ? '/images/generated/branches/branch-1-hq.png' : '/images/generated/branches/branch-2-hq.png'
        return {
          id: b.id,
          name: typeof b.name === 'object' ? (b.name?.ar || b.name?.en || '') : (b.name || ''),
          address: addr,
          image: b.feature_image || b.media?.[0]?.original_url || fallbackImg,
        }
      })
    }

    // Reviews/Testimonials
    if (data.reviews?.length) {
      reviews.value = data.reviews.map(review => ({
        id: review.id,
        name: review.user
          ? `${review.user.first_name || ''} ${review.user.last_name || ''}`.trim()
          : 'عميل',
        text: review.review_text || 'تجربة ممتازة',
        rating: review.rating || 5,
      }))
    }

    // Wheel prizes
    if (data.wheel_prizes?.length) {
      wheelPrizes.value = data.wheel_prizes
    }
  } catch (err) {
    console.warn('Failed to load home data from API, trying direct branch fetch:', err)
    try {
      const bList = await fetchBranches()
      if (bList?.length) {
        branches.value = bList.map((branch, idx) => {
          const b = branch.data || branch
          const addr = b.address?.state_data?.name || b.address?.address_line_1 || (typeof b.address === 'string' ? b.address : '') || 'فرع سامي للعناية'
          const fallbackImg = idx % 2 === 0 ? '/images/generated/branches/branch-1-hq.png' : '/images/generated/branches/branch-2-hq.png'
          return {
            id: b.id,
            name: typeof b.name === 'object' ? (b.name?.ar || b.name?.en || '') : (b.name || ''),
            address: addr,
            image: b.feature_image || b.media?.[0]?.original_url || fallbackImg,
          }
        })
      }
    } catch (bErr) {
      console.warn('Failed to fetch fallback branches:', bErr)
    }
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="home-page desktop-home" dir="rtl">
    <AppHeader />
    <main>
      <HeroSection />
      <div class="home-light">
        <AboutSection />
        <ServicesSection :services="categories" />
        <PromoCard :promos="offers" />
        <GiftBanner />
        <LuckyWheelCard :prizes="wheelPrizes" />
        <div class="catalog container"><PackagesSection :packages="packages" /><ProductsSection :products="products" /></div>
        <BranchesSection :branches="branches" />
        <TestimonialsSection :testimonials="reviews" />
        <FinalCta />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style>
body{background:#f8f4ee}.home-page{min-height:100vh;background:#f8f4ee;color:#171717}.home-light{position:relative;z-index:4;margin-top:-42px;padding-top:36px;background:#f8f4ee;border-radius:52% 52% 0 0/44px 44px 0 0}
</style>
