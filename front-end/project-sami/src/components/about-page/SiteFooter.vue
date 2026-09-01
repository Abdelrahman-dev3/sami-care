<script setup>
import AppIcon from './AppIcon.vue'
defineProps({ logo: { type: String, required: true } })
</script>

<template>
  <footer class="footer">
    <img :src="logo" alt="عناية سامي" />
    <small>عناية سامي — SAMI CARE FOR MEN<br />جدة، المملكة العربية السعودية • جميع الحقوق محفوظة © 2026</small>
    <span><AppIcon name="calendar" :size="14" /> وصلتَ إلينا عبر مسح رمز QR — أهلًا بك</span>
  </footer>
</template>
