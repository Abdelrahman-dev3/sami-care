<script setup>
import { useSiteContact } from '@/composables/useSiteContact'

const { whatsappUrl } = useSiteContact()
</script>

<template>
  <main class="development-page" dir="rtl">
    <section class="development-card" aria-labelledby="development-title">
      <div class="development-logo" role="img" aria-label="عناية سامي"></div>
      <div class="development-divider" aria-hidden="true"></div>
      <span class="development-label">نعمل على تجربة تليق بكم</span>
      <h1 id="development-title">الموقع قيد التطوير</h1>
      <p>نعمل على تطوير موقعنا لنقدم لكم تجربة أفضل.<br>شكرًا لتفهمكم، نلتقي بكم قريبًا.</p>
      <span class="development-status"><i aria-hidden="true"></i> قريبًا بحلّة جديدة</span>
      <a v-if="whatsappUrl" class="development-whatsapp" :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.3 23.5l5.9-1.6A11.7 11.7 0 0 0 12 23.4h.1A11.8 11.8 0 0 0 20.5 3.5Zm-8.4 17.9h-.1a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.5.9.9-3.4-.2-.4a9.8 9.8 0 1 1 8.3 4.5Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.4.2-.7.1-1.8-.9-3-1.7-4.2-3.8-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6l-.9-2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8 1.3-.2 1.7-.8 1.9-1.6.2-.8.2-1.4.1-1.6-.1-.2-.3-.3-.6-.4Z"/></svg>
        تواصل معنا عبر واتساب
      </a>
      <RouterLink class="development-enter" to="/home">الدخول إلى الموقع</RouterLink>
    </section>
    <p class="development-copyright">عناية سامي · جميع الحقوق محفوظة</p>
  </main>
</template>

<style scoped>
:global(body:has(.development-page)){margin:0!important;padding-top:0!important;background:#080a0b}
:global(html:has(.development-page)){scroll-padding-top:0;background:#080a0b}
.development-page{min-height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;background:radial-gradient(ellipse at 50% 20%,#49351d66,transparent 65%),#080a0b;color:#f8f4ee;text-align:center;font-family:'Lama Sans',Arial,sans-serif}
.development-card{width:min(720px,100%);padding:64px 32px;border:1px solid #c98b3170;border-radius:24px;background:linear-gradient(145deg,#c98b310c,transparent);box-shadow:0 24px 80px #0004}
.development-logo{width:130px;max-width:60%;height:150px;margin:0 auto;background:linear-gradient(180deg,#e2ae52 0%,#c98625 100%);-webkit-mask:url(/logo.png) center/contain no-repeat;mask:url(/logo.png) center/contain no-repeat}
.development-divider{width:70px;height:1px;margin:32px auto;background:#c98b31}.development-label{color:#c98b31;font-size:14px}
h1{margin:16px 0;font-size:clamp(28px,5vw,48px);line-height:1.5}p{margin:0;color:#d0c7ba;font-size:16px;line-height:2}
.development-status{display:inline-flex;align-items:center;gap:10px;margin-top:30px;padding:10px 22px;border:1px solid #c98b3140;border-radius:30px;color:#f2d28e;font-size:13px}.development-status i{width:7px;height:7px;border-radius:50%;background:#c98b31}
.development-copyright{margin-top:32px;color:#948675;font-size:12px}
.development-enter{display:flex;align-items:center;justify-content:center;width:fit-content;max-width:100%;margin:16px auto 0;padding:13px 28px;border-radius:30px;background:linear-gradient(180deg,#e2ae52,#c98625);color:#080a0b;font-size:14px;font-weight:700;text-decoration:none}.development-enter:hover{filter:brightness(1.1)}.development-enter:focus-visible{outline:2px solid #f2d28e;outline-offset:4px}
.development-whatsapp{display:flex;align-items:center;justify-content:center;gap:10px;width:fit-content;max-width:100%;margin:24px auto 0;padding:13px 24px;border-radius:30px;background:#258b52;color:#fff;font-size:14px;font-weight:600;text-decoration:none;transition:background .2s}.development-whatsapp:hover{background:#1d7343}.development-whatsapp:focus-visible{outline:2px solid #f2d28e;outline-offset:4px}.development-whatsapp svg{width:22px;height:22px;flex-shrink:0;fill:currentColor}
@media(max-width:640px){.development-page{padding:28px 18px}.development-card{padding:44px 18px}.development-logo{width:110px;height:130px}p{font-size:14px}}
</style>
