<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/common/BaseButton.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import Skeleton from '@/components/common/SkeletonLoader.vue'
import { useServiceLocation } from '@/composables/useServiceLocation'

const props = defineProps({
    offers: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
})

const router = useRouter()
const { setLocation } = useServiceLocation()

const HOME_ICON = 'M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z'
const HOME_ICON_DOOR = 'M9 21V12h6v9'

const promoCards = computed(() => {
  const apiOffers = (props.offers || []).map((offer, index) => ({
    id: offer.id || `offer-${index}`,
    type: 'offer',
    badge: offer.badge || 'خصم',
    eyebrow: offer.eyebrow || '✦ عرض خاص',
    title: offer.name || offer.title || 'عرض مميز',
    text: offer.description || offer.text || 'استمتع بالعروض المميزة من عناية سامي',
    cta: offer.cta || 'اكتشف العرض',
    href: offer.href || '/packages-gifts',
  }))

  return [
    ...apiOffers,
    /*{
      id: 'home-service',
      type: 'home',
      eyebrow: '✦ نصل إليك',
      title: 'الخدمات المنزلية',
      text: 'حلاقة وعناية ومساجات طبيعية في راحة منزلك داخل جدة',
      cta: 'احجز الخدمة المنزلية',
      href: '/booking',
    },
    {
      id: 'home-service',
      type: 'home',
      eyebrow: '✦ نصل إليك',
      title: 'الخدمات المنزلية',
      text: 'حلاقة وعناية ومساجات طبيعية في راحة منزلك داخل جدة',
      cta: 'احجز الخدمة المنزلية',
      href: '/booking',
    },*/

    {id:1,type:'offer',title:'عرض الافتتاح',text:'خصم 25% على جميع الباقات هذا الأسبوع',badge:'25%',cta:'اكتشف العرض',href:'/packages-gifts'},
  {id:2,type:'home',eyebrow:'✦ نصل إليك',title:'الخدمات المنزلية',text:'حلاقة وعناية وماسكات طبيعية في راحة منزلك داخل جدة',cta:'احجز الخدمة المنزلية',href:'/booking?branch=hm'}
  ]
})

function goHomeService() {
  setLocation('hm')
  router.push('/booking')
}
</script>

<template>
  <section data-reveal class="home-section container promo-section" aria-label="إعلانات وعروض">
    <SectionTitle v-if="(offers && offers.length) || loading" title="العروض الحالية" />

    <!-- Skeleton Loading -->
    <template v-if="loading">
      <article v-for="n in 2" :key="n" class="promo-card">
        <div class="promo-card__badge" style="display:flex;align-items:center;justify-content:center">
          <Skeleton width="86px" height="86px" variant="circle" />
        </div>
        <div class="promo-card__text" style="display:flex;flex-direction:column;gap:8px;flex:1">
          <Skeleton width="100px" height="12px" variant="text" />
          <Skeleton width="200px" height="20px" variant="text" />
          <Skeleton width="85%" height="14px" variant="text" />
        </div>
        <Skeleton width="130px" height="42px" border-radius="30px" />
      </article>
    </template>

    <!-- Real Content -->
    <template v-else>
    <article v-for="promo in promoCards" :key="promo.id" class="promo-card"
             :class="{ 'promo-card--home': promo.type === 'home' }">
      <div class="promo-card__badge" aria-hidden="true">
        <template v-if="promo.type === 'home'">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <path :d="HOME_ICON" /><path :d="HOME_ICON_DOOR" />
          </svg>
        </template>
        <template v-else>
          <b>{{ promo.badge }}</b>
          <small>خصم</small>
        </template>
      </div>
      <div class="promo-card__text">
        <span class="promo-card__eyebrow">{{ promo.eyebrow || '✦ عرض خاص' }}</span>
        <h3>{{ promo.title }}</h3>
        <p>{{ promo.text }}</p>
      </div>
      <BaseButton v-if="promo.type === 'home'" class="promo-card__cta" :label="promo.cta"
                  href="#" @click.prevent="goHomeService" />
      <BaseButton v-else class="promo-card__cta" :label="promo.cta" :href="promo.href" />
    </article>
    </template>
  </section>
</template>

<style scoped>
/* أيقونة البيت بدل شارة الخصم — نفس الدائرة الذهبية بلون داكن للأيقونة */
.promo-card--home :deep(.promo-card__badge),
.promo-card--home .promo-card__badge { color: #2a1f0c }
</style>
