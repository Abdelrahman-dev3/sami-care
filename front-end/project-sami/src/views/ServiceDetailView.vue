<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import AppFooter from '@/components/layout/AppFooter.vue'
import PageSkeleton from '@/components/common/PageSkeleton.vue'
import LocationNotice from '@/components/common/LocationNotice.vue'
import SIcon from '@/components/common/SIcon.vue'
import { useServiceLocation } from '@/composables/useServiceLocation'
import { useLanguage } from '@/composables/useLanguage'
import { useBooking } from '@/composables/useBooking'
import { getCategories } from '@/data/home'
import { resolveApiImage } from '@/utils/assetPath'
import { localizeField } from '@/utils/i18nField'

const route = useRoute()
const router = useRouter()
const id = computed(() => Number(route.params.id))

const { requireLocation } = useServiceLocation()
const { state: lang } = useLanguage()
const { state: bookingState, toggleSvc, reset: resetBooking } = useBooking()
const pick = t => localizeField(t, lang.lang)

/* الضغط على "احجز الآن" لخدمة محددة لازم يوصلها محددة على طول في صفحة الحجز،
   مش يرجع المستخدم لشاشة اختيار الخدمات من الصفر (كان بيتجاهل أي خدمة اتحددت هنا). */
const goBooking = (service = null) => {
  requireLocation(() => {
    resetBooking()
    if (service) {
      toggleSvc({
        id: service.id,
        categoryId: category.value.id,
        categoryName: categoryName.value,
        name: service.name,
        dur: service.dur,
        price: service.price,
      })
      bookingState.step = 1
    } else {
      bookingState.activeCat = category.value.id
    }
    router.push('/booking')
  })
}

/*
|--------------------------------------------------------------------------
| Load category (with its services) from Laravel
|--------------------------------------------------------------------------
*/

const categories = ref([])
const loading = ref(true)
const error = ref(null)

const loadCategories = async () => {
  try {
    loading.value = true
    error.value = null

    const response = await getCategories()

    categories.value = response?.status ? (response.data || []) : []
  } catch (err) {
    console.error('Categories API Error:', err)
    error.value = 'حدث خطأ أثناء تحميل الخدمة'
    categories.value = []
  } finally {
    loading.value = false
  }
}

onMounted(loadCategories)

const category = computed(() => categories.value.find(c => c.id === id.value) || null)

const heroImage = computed(() =>
  resolveApiImage(category.value?.image) || category.value?.feature_image || null
)

const categoryName = computed(() => pick(category.value?.name))

const tagline = computed(() =>
  pick(category.value?.summary) || pick(category.value?.description) || ''
)

const services = computed(() =>
  (category.value?.services || []).map(s => ({
    id: s.id,
    name: pick(s.name),
    dur: s.duration_min,
    price: s.default_price,
    image: s.feature_image || resolveApiImage(s.image),
  }))
)

const whyUs = [
  { icon: 'shield', title: 'نظافة وتعقيم معتمد', text: 'نطبق أعلى معايير النظافة والتعقيم.' },
  { icon: 'leaf', title: 'منتجات طبيعية فاخرة', text: 'من أفضل المكونات الطبيعية الأصلية.' },
  { icon: 'user', title: 'مختصون ذوو خبرة', text: 'فريق مدرب على أعلى مستوى لضمان تجربة مميزة.' },
]

const iconPaths = {
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  leaf: '<path d="M11 20A7 7 0 019.8 6.1C15.5 5 20 9.5 20 15a7 7 0 01-9 5z"/><path d="M2 21c0-9 4-13 13-13"/>',
  user: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
}

function svg(key, size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths[key]}</svg>`
}

watch(id, loadCategories)
</script>

<template>
  <div class="home-page sd" dir="rtl">
    <main>

      <!-- Loading -->
      <div v-if="loading" class="sd-state">
        <PageSkeleton variant="detail" />
      </div>

      <!-- Error -->
      <div v-else-if="error" class="sd-state sd-state--error">
        {{ error }}
      </div>

      <!-- Not found -->
      <div v-else-if="!category" class="sd-state">
        <p>عذرًا، لم يتم العثور على هذه الخدمة.</p>
        <RouterLink to="/services" class="sd-btn sd-btn--gold">العودة لخدماتنا</RouterLink>
      </div>

      <template v-else>

        <!-- ===== الهيرو ===== -->
        <section class="sd-hero">
          <div class="sd-hero__media">
            <img v-if="heroImage" :src="heroImage" :alt="categoryName" />
          </div>
          <div class="sd-hero__inner">
            <nav class="sd-crumb">
              <RouterLink to="/">الرئيسية</RouterLink><span>›</span>
              <RouterLink to="/services">خدماتنا</RouterLink><span>›</span>
              <b>{{ categoryName }}</b>
            </nav>
            <h1>{{ categoryName }}</h1>
            <p v-if="tagline" class="sd-hero__lead">{{ tagline }}</p>

            <div class="sd-hero__cta">
              <a href="#" class="sd-btn sd-btn--gold" @click.prevent="goBooking()">
                احجز الآن <i>←</i>
              </a>
            </div>
          </div>
        </section>

        <!-- ===== الخدمات ===== -->
        <section class="sd-sec container">
          <div class="sd-title"><i></i><h2>اختر الخدمة المناسبة لك</h2><i></i></div>
          <p class="sd-sub">تصفح خدماتنا ضمن هذا القسم واختر ما يناسبك.</p>
          <div class="sd-loc"><LocationNotice /></div>

          <div v-if="!services.length" class="sd-state">
            لا توجد خدمات متاحة حالياً ضمن هذا القسم.
          </div>

          <div v-else class="sd-vars" :class="{ 'sd-vars--5': services.length >= 5 }">
            <article v-for="s in services" :key="s.id" class="sd-var">
              <div class="sd-var__img">
                <img v-if="s.image" :src="s.image" :alt="s.name" loading="lazy" />
              </div>
              <div class="sd-var__body">
                <h3>{{ s.name }}</h3>
                <p class="sd-var__dur">
                  <SIcon inner='<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>' :size="13" />
                  {{ s.dur }} دقيقة
                </p>
                <p class="sd-var__price">يبدأ من {{ s.price }} ر.س</p>
                <a href="#" class="sd-var__btn" @click.prevent="goBooking(s)">
                  احجز الآن <i>←</i>
                </a>
              </div>
            </article>
          </div>
        </section>

        <!-- ===== لماذا تختارنا ===== -->
        <section class="sd-sec container">
          <div class="sd-title"><i></i><h2>لماذا تختار عناية سامي؟</h2><i></i></div>

          <div class="sd-why">
            <div v-for="(w, i) in whyUs" :key="i" class="sd-why__card">
              <div class="sd-why__txt"><b>{{ w.title }}</b><small>{{ w.text }}</small></div>
              <span class="sd-why__ic" v-html="svg(w.icon, 22)"></span>
            </div>
          </div>
        </section>

      </template>

    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.sd main{background:var(--cream)}

.sd-state{text-align:center;padding:90px 20px;color:var(--muted);font-size:14px}
.sd-state--error{color:#b42318}

/* ========== الهيرو ========== */
.sd-hero{position:relative;min-height:460px;display:flex;align-items:center;overflow:hidden;
  background:linear-gradient(105deg,#080706 38%,#191308 100%)}
.sd-hero::after{content:"";position:absolute;inset:auto 0 0 0;height:1px;z-index:3;
  background:linear-gradient(90deg,transparent,rgba(201,139,49,.55),transparent)}
.sd-hero__media{position:absolute;inset:0 auto 0 0;width:52%;height:100%;background:linear-gradient(135deg,#2a2115,#161009)}
.sd-hero__media img{width:100%;height:100%;object-fit:cover;display:block}
.sd-hero__media::after{content:"";position:absolute;inset:0;
  background:linear-gradient(270deg,#080706 4%,rgba(8,7,6,.78) 46%,rgba(8,7,6,.12) 100%)}
.sd-hero__inner{position:relative;z-index:2;width:min(1180px,calc(100% - 48px));margin-inline:auto;
  color:#fff;text-align:right;padding:46px 0}
.sd-crumb{font-size:11px;color:#9d9488;margin-bottom:16px;display:flex;gap:7px;justify-content:flex-start}
.sd-crumb a{color:#9d9488}
.sd-crumb a:hover{color:var(--gold)}
.sd-crumb b{color:var(--gold);font-weight:600}
.sd-hero h1{font-size:clamp(34px,4vw,50px);line-height:1.25;margin:0 0 14px;font-weight:800;letter-spacing:-.5px}
.sd-hero__lead{font-size:14px;line-height:2.05;color:#cec6ba;max-width:46ch;margin:0 0 28px}

.sd-hero__cta{display:flex;gap:14px}
.sd-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:30px;
  padding:13px 40px;font-size:13.5px;font-weight:700;transition:.24s}
.sd-btn i{font-style:normal}
.sd-btn--gold{background:linear-gradient(90deg,#b77420,#e9c073,#be7920);color:#160f07}
.sd-btn--gold:hover{filter:brightness(1.07)}

/* ========== عناوين الأقسام ========== */
.sd{--sd-gap:60px;--sd-radius:16px;--sd-card:0 16px 34px -20px rgba(80,60,20,.28)}
.sd-sec{padding-block:var(--sd-gap) 0}
.sd-sec:first-of-type{padding-top:calc(var(--sd-gap) - 12px)}
.sd-title{display:flex;align-items:center;justify-content:center;gap:22px;margin-bottom:10px}
.sd-title h2{font-size:28px;margin:0;color:#241f1b;display:flex;align-items:center;gap:9px}
.sd-title i{width:44px;height:1px;background:var(--gold);position:relative;flex:none}
.sd-title i::after{content:'›';position:absolute;top:-14px;color:var(--gold);font-size:21px}
.sd-title i:first-child::after{left:0}
.sd-title i:last-child::after{right:0;transform:rotate(180deg)}
.sd-sub{text-align:center;font-size:12.5px;color:var(--muted);margin:0 auto 30px;max-width:58ch;line-height:1.9}
.sd-loc{text-align:center;margin:-16px 0 24px}

/* ========== بطاقات الخدمات ========== */
.sd-vars{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.sd-vars--5{grid-template-columns:repeat(5,1fr)}
.sd-var{background:#fff;border:1px solid var(--border);border-radius:var(--sd-radius);overflow:hidden;
  box-shadow:var(--sd-card);display:flex;flex-direction:column;
  transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,border-color .3s ease}
.sd-var:hover{transform:translateY(-6px);box-shadow:0 26px 46px -20px rgba(80,60,20,.45);border-color:rgba(201,139,49,.45)}
.sd-var__img{aspect-ratio:16/10;overflow:hidden;background:#ece4d9}
.sd-var__img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s}
.sd-var:hover .sd-var__img img{transform:scale(1.06)}
.sd-var__body{padding:15px 14px 16px;text-align:center;display:flex;flex-direction:column;flex:1}
.sd-var__body h3{font-size:14.5px;margin:0 0 8px;color:#241f1b}
.sd-var__dur{display:flex;align-items:center;justify-content:center;gap:6px;font-size:11.5px;color:var(--muted);margin:0 0 6px}
.sd-var__dur span{display:inline-flex;color:var(--muted)}
.sd-var__price{font-size:12.5px;color:var(--gold);font-weight:700;margin:0 0 14px}
.sd-var__btn{margin-top:auto;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  border:1px solid var(--gold);color:var(--gold);border-radius:22px;padding:8px 12px;font-size:11.5px;transition:.22s}
.sd-var__btn i{font-style:normal}
.sd-var__btn:hover{background:#fdf6e9}

/* ========== لماذا تختارنا ========== */
.sd-why{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;align-items:stretch}
.sd-why__card{display:flex;align-items:center;gap:12px;background:#f6f0e6;border:1px solid var(--border);
  border-radius:var(--sd-radius);padding:18px 16px;transition:border-color .3s ease,background .3s ease}
.sd-why__card:hover{border-color:rgba(201,139,49,.45);background:#fbf6ec}
.sd-why__txt{flex:1;text-align:right}
.sd-why__txt b{display:block;font-size:12.5px;margin-bottom:5px;color:#241f1b}
.sd-why__txt small{font-size:10.5px;color:var(--muted);line-height:1.75}
.sd-why__ic{flex:none;width:42px;height:42px;border-radius:12px;display:grid;place-items:center;
  background:#fff;border:1px solid var(--border);color:var(--gold)}

/* ========== الاستجابة ========== */
@media(max-width:1100px){
  .sd-vars,.sd-vars--5{grid-template-columns:repeat(3,1fr)}
  .sd-why{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:900px){
  .sd-hero{min-height:auto}
  .sd-hero__media{position:relative;width:100%;height:230px}
  .sd-hero__media::after{background:linear-gradient(0deg,#0a0908 4%,rgba(10,9,8,.35) 100%)}
  .sd-hero{flex-direction:column;align-items:stretch}
  .sd-hero__inner{padding:26px 0 34px;text-align:center}
  .sd-crumb{justify-content:center}
  .sd-hero h1{font-size:34px}
  .sd-hero__lead{margin-inline:auto}
  .sd-hero__cta{flex-direction:column}
  .sd-vars,.sd-vars--5{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:560px){
  .sd-vars,.sd-vars--5,.sd-why{grid-template-columns:1fr}
  .sd-title h2{font-size:21px}
}
</style>
