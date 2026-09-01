<script setup>
import AppIcon from './AppIcon.vue'
import { contact } from '@/data/aboutSite'

const actions = [
  { label: 'اتصال', icon: 'phone', href: `tel:${contact.phone}` },
  { label: 'واتساب', icon: 'whatsapp', href: `https://wa.me/${contact.whatsapp}`, green: true },
  { label: 'الموقع', icon: 'map', href: 'https://maps.google.com/?q=عناية+سامي+جدة' },
  { label: 'احجز الآن', icon: 'calendar', href: contact.website }
]
</script>

<template>
  <nav class="quick-actions" aria-label="روابط سريعة">
    <a v-for="action in actions" :key="action.label" class="quick-action" :class="{ 'quick-action--green': action.green }" :href="action.href" :target="action.href.startsWith('http') ? '_blank' : undefined" rel="noopener">
      <span class="quick-action__icon"><AppIcon :name="action.icon" :size="19" /></span><b>{{ action.label }}</b>
    </a>
  </nav>
</template>
