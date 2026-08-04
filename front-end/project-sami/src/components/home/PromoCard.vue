<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
import { promos as fallbackPromos } from '@/data/home'

const props = defineProps({
  promos: { type: Array, default: () => [] },
})

const items = props.promos.length ? props.promos : fallbackPromos
</script>

<template>
  <section class="home-section container promo-section" aria-label="إعلانات وعروض">
    <article v-for="promo in items" :key="promo.id" class="promo-card">
      <div class="promo-card__badge" aria-hidden="true">
        <b>{{ promo.badge }}</b>
        <small>خصم</small>
      </div>
      <div class="promo-card__text">
        <span class="promo-card__eyebrow">✦ عرض خاص</span>
        <h3>{{ promo.title }}</h3>
        <p>{{ promo.text }}</p>
      </div>
      <BaseButton class="promo-card__cta" :label="promo.cta" href="/packages-gifts" />
    </article>
  </section>
</template>
