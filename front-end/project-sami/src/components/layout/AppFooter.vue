<script setup>
import { ref, onMounted } from 'vue'
import { fetchBranches } from '@/services/homeApi'
import { useLanguage } from '@/composables/useLanguage'

const branches = ref([])
const { state: lang } = useLanguage()

onMounted(async () => {
  branches.value = await fetchBranches().catch(() => [])
})

function branchName(branch) {
  return branch.name?.[lang.lang] || branch.name?.ar || branch.name?.en || branch.name
}
</script>

<template>
  <footer id="contact" class="site-footer sami-unified-footer">
    <div class="footer-content container">
      <div class="footer-contact">
        <h3>تواصل معنا</h3>
        <form class="phone-form" @submit.prevent>
          <span>+966</span><input type="tel" placeholder="رقم الجوال" />
          <button type="submit">رقم</button>
        </form>
        <a class="whatsapp" href="https://wa.me/966566101963">تواصل واتساب <b>◉</b></a>
        <div class="footer-socials">
          <a href="https://www.instagram.com/samicare.sa/" aria-label="Instagram">◎</a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
          <a href="https://x.com/samicare_sa" aria-label="X">♥</a>
          <a href="https://www.facebook.com/samicare.sa" aria-label="Facebook">f</a>
        </div>
      </div>
      <div class="footer-about">
        <h3>عن سامي</h3>
        <RouterLink to="/">الرئيسية</RouterLink><RouterLink to="/services">خدماتنا</RouterLink>
        <RouterLink to="/store">المنتجات</RouterLink><RouterLink to="/packages-gifts">الباقات</RouterLink>
        <RouterLink to="/blog">المدونة</RouterLink><RouterLink to="/#about">عن سامي</RouterLink>
      </div>
      <div class="footer-brand">
        <RouterLink to="/"><img src="/logo.png" alt="عناية سامي" /></RouterLink>
      </div>
      <div class="footer-help">
        <h3>مساعدة</h3>
        <RouterLink to="/contact">تواصل معنا</RouterLink><RouterLink to="/contact">الشكاوى والاقتراحات</RouterLink>
        <RouterLink to="/terms">الشروط والأحكام</RouterLink><RouterLink to="/privacy-policy">سياسة الخصوصية</RouterLink>
      </div>
            <div class="footer-branches">
        <h3>عناوين الفروع</h3>
        <template v-for="branch in branches" :key="branch.id">
          <b>{{ branchName(branch) }}</b>
          <p>{{ branch.address_line_1 }}<template v-if="branch.contact_number"><br />{{ branch.contact_number }}</template></p>
        </template>
      </div>

    </div>
    <div class="footer-payments" aria-label="وسائل الدفع">
      <span class="visa">VISA</span><span class="master">●●</span><span class="mada">مدى mada</span>
      <span class="tabby">tabby</span><span class="tamara">tamara</span><span class="apple"> Pay</span>
    </div>
    <p class="copyright">© {{ new Date().getFullYear() }} عناية سامي. جميع الحقوق محفوظة.</p>
  </footer>
</template>
