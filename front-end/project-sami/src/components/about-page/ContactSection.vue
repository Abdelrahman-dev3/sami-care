<script setup>
import AppIcon from './AppIcon.vue'
import SectionTitle from './SectionTitle.vue'
import { contact, socialLinks } from '@/data/aboutSite'
</script>

<template>
  <section>
    <SectionTitle title="تابعنا على شبكات التواصل" />
    <div class="list reveal">
      <a v-for="social in socialLinks" :key="social.name" class="list-row" :href="social.url" target="_blank" rel="noopener">
        <span class="list-row__icon social-mark" :class="{ dark: social.dark }" :style="{ background: social.color }">{{ social.mark }}</span>
        <span><b>{{ social.name }}</b><small>{{ social.handle }}</small></span><span class="list-row__arrow">‹</span>
      </a>
    </div>
  </section>
  <section>
    <SectionTitle title="الدعم وخدمة العملاء" />
    <div class="list reveal">
      <a class="list-row" :href="`tel:${contact.phone}`"><span class="list-row__icon gold"><AppIcon name="phone" :size="18" /></span><span><b>الرقم الموحد</b><small>{{ contact.phoneDisplay }}</small></span><strong class="list-row__action">اتصل الآن</strong></a>
      <a class="list-row" :href="`https://wa.me/${contact.whatsapp}`" target="_blank" rel="noopener"><span class="list-row__icon green"><AppIcon name="whatsapp" :size="18" /></span><span><b>واتساب خدمة العملاء</b><small>{{ contact.whatsappDisplay }}</small></span><strong class="list-row__action green-text">راسلنا</strong></a>
      <a class="list-row" :href="`mailto:${contact.email}`"><span class="list-row__icon gold"><AppIcon name="mail" :size="18" /></span><span><b>البريد الإلكتروني</b><small>{{ contact.email }}</small></span><span class="list-row__arrow">‹</span></a>
    </div>
    <div class="card hours reveal"><span class="hours__icon"><AppIcon name="clock" :size="19" /></span><span><b>ساعات العمل</b><small>يوميًا: 10:00 صباحًا — 12:00 منتصف الليل</small></span><span class="hours__status">مفتوح الآن</span></div>
  </section>
</template>
