<script setup>
import { assetPath } from '@/utils/assetPath'

const logoSrc = assetPath('/logo.png')
</script>

<template><footer id="contact" class="site-footer"><div class="footer-content container"><div><h3>تواصل معنا</h3><form class="phone-form"><span>+966</span><input type="tel" placeholder="رقم الجوال"></form><a class="whatsapp" href="#">تواصل واتساب ◉</a></div><div><h3>عن سامي</h3><RouterLink to="/">الرئيسية</RouterLink><RouterLink to="/booking">خدماتنا</RouterLink><RouterLink to="/store">المنتجات</RouterLink><RouterLink to="/packages-gifts">الباقات</RouterLink></div><div class="footer-brand"><img :src="logoSrc" alt="عناية سامي"></div><div><h3>مساعدة</h3><RouterLink to="/contact">اتصل معنا</RouterLink><a href="#">الشكاوى والاقتراحات</a><a href="#">سياسة الخصوصية</a><a href="#">الشروط والأحكام</a></div><div><h3>عناوين الفروع</h3><b>الفرع الأول</b><p>جدة - الحمدانية، شارع خالد<br>0566101963</p><b>الفرع الثاني</b><p>جدة - الروابي، شارع باريس<br>0530064642</p></div></div><p class="copyright">© {{ new Date().getFullYear() }} عناية سامي. جميع الحقوق محفوظة.</p></footer></template>
