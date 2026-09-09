<script setup>
import AppIcon from './AppIcon.vue'
import { contact } from '@/data/aboutSite'
</script>

<template>
  <nav class="sticky-actions" aria-label="إجراءات الحجز">
    <a class="button button--gold" :href="contact.website" target="_blank" rel="noopener"><AppIcon name="calendar" :size="16" />احجز موعدك الآن</a>
    <a class="button button--whatsapp" :href="`https://wa.me/${contact.whatsapp}`" target="_blank" rel="noopener"><AppIcon name="whatsapp" :size="16" />واتساب</a>
  </nav>
</template>
