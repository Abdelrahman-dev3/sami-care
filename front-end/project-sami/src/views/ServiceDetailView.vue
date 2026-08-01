<script setup>
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { serviceDetails } from '@/data/serviceDetails'
import { assetPath } from '@/utils/assetPath'

const route = useRoute()
const id = computed(() => Number(route.params.id))
const d = computed(() => serviceDetails[id.value])

const openFaq = ref(0)
function toggleFaq(i) { openFaq.value = openFaq.value === i ? null : i }
function imagePath(path) { return assetPath(path) }

function svg(path, size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
}
</script>

<template>
  <div class="home-page sd" dir="rtl" v-if="d">
    <AppHeader />
    <main>
      <!-- ===== الهيرو ===== -->
      <section class="sd-hero">
        <div class="sd-hero__media"><img :src="imagePath(d.heroImage)" :alt="d.name" /></div>
        <div class="sd-hero__inner">
          <nav class="sd-crumb">
            <RouterLink to="/">الرئيسية</RouterLink><span>›</span>
            <RouterLink to="/services">خدماتنا</RouterLink><span>›</span>
            <b>{{ d.name }}</b>
          </nav>
          <h1>{{ d.name }}</h1>
          <p class="sd-hero__lead">{{ d.tagline }}</p>

          <div class="sd-hero__feats">
            <div v-for="(f, i) in d.features" :key="i" class="sd-feat">
              <span v-html="svg(f.icon, 24)"></span>
              <small>{{ f.label }}</small>
            </div>
          </div>

          <div class="sd-hero__cta">
            <RouterLink :to="`/booking?service=${id}`" class="sd-btn sd-btn--gold">احجز الآن <i>←</i></RouterLink>
            <RouterLink to="/gifts" class="sd-btn sd-btn--dark">أهدِ هذه الخدمة <i>🎁</i></RouterLink>
          </div>
        </div>
      </section>

      <!-- ===== الأنواع ===== -->
      <section class="sd-sec container">
        <div class="sd-title"><i></i><h2>اختر نوع {{ d.name }} المناسب لك</h2><i></i></div>
        <p class="sd-sub">اختر ما يناسبك واستمتع بتجربة فريدة مصممة خصيصًا لك.</p>

        <div class="sd-vars" :class="{ 'sd-vars--5': d.variants.length >= 5 }">
          <article v-for="(v, i) in d.variants" :key="i" class="sd-var">
            <div class="sd-var__img"><img :src="imagePath(v.img || d.heroImage)" :alt="v.name" loading="lazy" /></div>
            <div class="sd-var__body">
              <h3>{{ v.name }}</h3>
              <p class="sd-var__dur"><span v-html="svg('<circle cx=\'12\' cy=\'12\' r=\'9\'/><path d=\'M12 7v5l3 3\'/>', 13)"></span> {{ v.dur }} دقيقة</p>
              <p class="sd-var__price">يبدأ من {{ v.price }} ر.س</p>
              <RouterLink :to="`/booking?service=${id}`" class="sd-var__btn">اختر هذه الخدمة <i>←</i></RouterLink>
            </div>
          </article>
        </div>
      </section>

      <!-- ===== لماذا تختارنا ===== -->
      <section class="sd-sec container">
        <div class="sd-title"><i></i><h2>لماذا تختار {{ d.name }} لدينا؟</h2><i></i></div>
        <p class="sd-sub">نلتزم بتقديم تجربة متكاملة بأعلى معايير الجودة والاحترافية.</p>

        <div class="sd-why">
          <div v-for="(w, i) in d.whyUs" :key="i" class="sd-why__card">
            <div class="sd-why__txt"><b>{{ w.title }}</b><small>{{ w.text }}</small></div>
            <span class="sd-why__ic" v-html="svg(w.icon, 22)"></span>
          </div>
        </div>
      </section>

      <!-- ===== الفوائد ===== -->
      <section class="sd-sec container sd-benefits">
        <div class="sd-benefits__img"><img :src="imagePath(d.benefitsImage || d.heroImage)" :alt="d.name" loading="lazy" /></div>
        <div class="sd-benefits__panel">
          <div class="sd-title sd-title--start"><i></i><h2>فوائد {{ d.name }}</h2></div>
          <p class="sd-sub sd-sub--start">تجربة منتظمة تمنحك صحة أفضل وحياة أكثر توازنًا.</p>
          <div class="sd-bens">
            <div v-for="(b, i) in d.benefits" :key="i" class="sd-ben">
              <span class="sd-ben__ic" v-html="svg(b.icon, 22)"></span>
              <b>{{ b.title }}</b>
              <small>{{ b.text }}</small>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== قبل زيارتك + الأسئلة ===== -->
      <section class="sd-sec container sd-info">
        <div class="sd-panel sd-before">
          <div class="sd-title sd-title--sm"><i></i><h2>قبل زيارتك</h2><i></i></div>
          <div class="sd-before__row">
            <div v-for="(b, i) in d.beforeVisit" :key="i" class="sd-before__item">
              <span class="sd-before__ic" v-html="svg(b.icon, 20)"></span>
              <b>{{ b.title }}</b>
              <small>{{ b.text }}</small>
            </div>
          </div>
        </div>

        <div class="sd-panel sd-faq">
          <div class="sd-title sd-title--sm">
            <i></i>
            <h2><span class="sd-faq__ic" v-html="svg('<path d=\'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z\'/>', 17)"></span> الأسئلة الشائعة</h2>
            <i></i>
          </div>
          <div class="sd-faq__list">
            <div v-for="(f, i) in d.faq" :key="i" class="sd-faq__row" :class="{ open: openFaq === i }">
              <button @click="toggleFaq(i)">
                <span>{{ f.q }}</span>
                <i v-html="svg('<path d=\'M6 9l6 6 6-6\'/>', 15)"></i>
              </button>
              <p v-show="openFaq === i">{{ f.a }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== البانر الختامي ===== -->
      <section class="container">
        <div class="sd-cta">
          <div class="sd-cta__img"><img :src="imagePath(d.heroImage)" alt="" loading="lazy" /></div>
          <div class="sd-cta__ornament" aria-hidden="true"></div>
          <div class="sd-cta__in">
            <h2>جاهز لتجربة {{ d.name }}؟</h2>
            <p>احجز جلستك الآن واستمتع بتجربة عناية فاخرة تليق بك.</p>
            <RouterLink :to="`/booking?service=${id}`" class="sd-btn sd-btn--gold">احجز الآن <i>←</i></RouterLink>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>

  <div v-else class="container" style="padding:90px 0;text-align:center">
    <p>عذرًا، لم يتم العثور على هذه الخدمة.</p>
    <RouterLink to="/services" class="sd-btn sd-btn--gold">العودة لخدماتنا</RouterLink>
  </div>
</template>

<style scoped>
.sd main{background:var(--cream)}

/* ========== الهيرو ========== */
.sd-hero{position:relative;min-height:440px;display:flex;align-items:center;overflow:hidden;
  background:linear-gradient(105deg,#0a0908 40%,#171208 100%)}
.sd-hero__media{position:absolute;inset:0 auto 0 0;width:52%;height:100%}
.sd-hero__media img{width:100%;height:100%;object-fit:cover;display:block}
.sd-hero__media::after{content:"";position:absolute;inset:0;
  background:linear-gradient(270deg,#0a0908 6%,rgba(10,9,8,.72) 42%,rgba(10,9,8,.15) 100%)}
.sd-hero__inner{position:relative;z-index:2;width:min(1180px,calc(100% - 48px));margin-inline:auto;
  color:#fff;text-align:right;padding:46px 0}
.sd-crumb{font-size:11px;color:#9d9488;margin-bottom:16px;display:flex;gap:7px;justify-content:flex-start}
.sd-crumb a{color:#9d9488}
.sd-crumb a:hover{color:var(--gold)}
.sd-crumb b{color:var(--gold);font-weight:600}
.sd-hero h1{font-size:52px;line-height:1.25;margin:0 0 14px;font-weight:800}
.sd-hero__lead{font-size:14px;line-height:2.05;color:#cec6ba;max-width:46ch;margin:0 0 28px}

.sd-hero__feats{display:flex;gap:0;margin-bottom:30px;max-width:640px}
.sd-feat{flex:1;text-align:center;padding:0 12px;border-left:1px solid rgba(255,255,255,.1)}
.sd-feat:last-child{border-left:0}
.sd-feat span{color:var(--gold);display:inline-flex;margin-bottom:8px}
.sd-feat small{display:block;font-size:10.5px;line-height:1.55;color:#d7cfc3}

.sd-hero__cta{display:flex;gap:14px}
.sd-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:30px;
  padding:13px 40px;font-size:13.5px;font-weight:700;transition:.24s}
.sd-btn i{font-style:normal}
.sd-btn--gold{background:linear-gradient(90deg,#b77420,#e9c073,#be7920);color:#160f07}
.sd-btn--gold:hover{filter:brightness(1.07)}
.sd-btn--dark{border:1px solid rgba(233,192,115,.5);color:#f0e4cd;background:rgba(255,255,255,.04)}
.sd-btn--dark:hover{background:rgba(255,255,255,.09)}

/* ========== عناوين الأقسام ========== */
.sd-sec{padding-block:46px 8px}
.sd-title{display:flex;align-items:center;justify-content:center;gap:22px;margin-bottom:8px}
.sd-title h2{font-size:28px;margin:0;color:#241f1b;display:flex;align-items:center;gap:9px}
.sd-title i{width:44px;height:1px;background:var(--gold);position:relative;flex:none}
.sd-title i::after{content:'›';position:absolute;top:-14px;color:var(--gold);font-size:21px}
.sd-title i:first-child::after{left:0}
.sd-title i:last-child::after{right:0;transform:rotate(180deg)}
.sd-title--start{justify-content:flex-start}
.sd-title--start i:last-child{display:none}
.sd-title--sm h2{font-size:19px}
.sd-title--sm i{width:26px}
.sd-sub{text-align:center;font-size:12.5px;color:var(--muted);margin:0 0 26px}
.sd-sub--start{text-align:right;margin-bottom:20px}

/* ========== بطاقات الأنواع ========== */
.sd-vars{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.sd-vars--5{grid-template-columns:repeat(5,1fr)}
.sd-var{background:#fff;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;
  box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .28s,box-shadow .28s}
.sd-var:hover{transform:translateY(-5px);box-shadow:0 24px 42px -22px rgba(80,60,20,.42)}
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
.sd-why{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.sd-why__card{display:flex;align-items:center;gap:12px;background:#f5efe5;border:1px solid var(--border);
  border-radius:var(--radius);padding:18px 16px}
.sd-why__txt{flex:1;text-align:right}
.sd-why__txt b{display:block;font-size:12.5px;margin-bottom:5px;color:#241f1b}
.sd-why__txt small{font-size:10.5px;color:var(--muted);line-height:1.75}
.sd-why__ic{flex:none;width:42px;height:42px;border-radius:12px;display:grid;place-items:center;
  background:#fff;border:1px solid var(--border);color:var(--gold)}

/* ========== الفوائد ========== */
.sd-benefits{display:grid;grid-template-columns:.82fr 1.4fr;gap:26px;align-items:center}
.sd-benefits__img{border-radius:var(--radius);overflow:hidden;aspect-ratio:4/3;box-shadow:var(--shadow)}
.sd-benefits__img img{width:100%;height:100%;object-fit:cover;display:block}
.sd-benefits__panel{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:24px 22px;box-shadow:var(--shadow)}
.sd-bens{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.sd-ben{text-align:center;padding:0 8px;border-left:1px solid var(--border)}
.sd-ben:last-child{border-left:0}
.sd-ben__ic{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:50%;
  background:#faf3e7;color:var(--gold);margin-bottom:9px}
.sd-ben b{display:block;font-size:11.5px;margin-bottom:5px;color:#241f1b;line-height:1.5}
.sd-ben small{font-size:10px;color:var(--muted);line-height:1.7}

/* ========== قبل زيارتك + الأسئلة ========== */
.sd-info{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start}
.sd-panel{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:22px 20px;box-shadow:var(--shadow)}
.sd-before__row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.sd-before__item{text-align:center;padding:0 6px;border-left:1px solid var(--border)}
.sd-before__item:last-child{border-left:0}
.sd-before__ic{display:inline-grid;place-items:center;width:38px;height:38px;border-radius:50%;
  background:#faf3e7;color:var(--gold);margin-bottom:8px}
.sd-before__item b{display:block;font-size:10.5px;margin-bottom:4px;color:#241f1b;line-height:1.5}
.sd-before__item small{font-size:9px;color:var(--muted);line-height:1.65}

.sd-faq__ic{display:inline-flex;color:var(--gold)}
.sd-faq__list{display:grid;gap:9px}
.sd-faq__row{border:1px solid var(--border);border-radius:11px;background:#fdfbf7;overflow:hidden}
.sd-faq__row button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;
  background:none;border:0;padding:13px 15px;font-size:12px;text-align:right;color:#3a332c;cursor:pointer}
.sd-faq__row button i{display:inline-flex;color:var(--muted);transition:transform .25s}
.sd-faq__row.open button{color:var(--gold)}
.sd-faq__row.open button i{transform:rotate(180deg);color:var(--gold)}
.sd-faq__row p{margin:0;padding:0 15px 14px;font-size:11px;color:var(--muted);line-height:1.9}

/* ========== البانر الختامي ========== */
.sd-cta{position:relative;overflow:hidden;border-radius:var(--radius);margin:34px 0 46px;
  min-height:210px;display:flex;align-items:center;background:linear-gradient(275deg,#0a0908 46%,#191207 100%)}
.sd-cta__img{position:absolute;inset:0 auto 0 0;width:38%;height:100%}
.sd-cta__img img{width:100%;height:100%;object-fit:cover;display:block}
.sd-cta__img::after{content:"";position:absolute;inset:0;
  background:linear-gradient(270deg,#0a0908 10%,rgba(10,9,8,.55) 65%,rgba(10,9,8,.1) 100%)}
.sd-cta__ornament{position:absolute;inset:0 0 0 auto;width:300px;z-index:1;pointer-events:none;
  background:url('/images/services/shared/mandala.jpg') center right/contain no-repeat;
  mix-blend-mode:lighten;opacity:.55}
.sd-cta__in{position:relative;z-index:2;width:100%;text-align:center;padding:36px 24px}
.sd-cta__in h2{color:#fff;font-size:27px;margin:0 0 8px}
.sd-cta__in p{font-size:12.5px;color:#c9c1b5;margin:0 0 20px}

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
  .sd-hero__feats{max-width:none;flex-wrap:wrap}
  .sd-feat{flex:1 1 45%;border-left:0;margin-bottom:14px}
  .sd-hero__cta{flex-direction:column}
  .sd-vars,.sd-vars--5{grid-template-columns:repeat(2,1fr)}
  .sd-benefits,.sd-info{grid-template-columns:1fr}
  .sd-bens{grid-template-columns:repeat(2,1fr)}
  .sd-ben{border-left:0}
  .sd-before__row{grid-template-columns:repeat(2,1fr);gap:16px}
  .sd-before__item{border-left:0}
  .sd-cta__img{display:none}
  .sd-cta__ornament{display:none}
}
@media(max-width:560px){
  .sd-vars,.sd-vars--5,.sd-why,.sd-bens{grid-template-columns:1fr}
  .sd-title h2{font-size:21px}
}
</style>
