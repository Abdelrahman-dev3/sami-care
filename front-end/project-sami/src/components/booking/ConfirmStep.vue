<script setup>
import { computed, onMounted } from 'vue'
import { useServiceLocation } from '@/composables/useServiceLocation'
import { useAuth } from '@/composables/useAuth'
import { useBooking, fmtTimeStr, fmtDur, fmtDate, rs } from '@/composables/useBooking'
import { useStore } from '@/composables/useStore'
import { UPSELL } from '@/data/booking'

const { state, selSvcs, totalDur } = useBooking()
const { current } = useServiceLocation()
const { user, isAuthenticated } = useAuth()
const { state: storeState, products: storeProducts, addToCart, setQty } = useStore()

onMounted(() => {
  if (isAuthenticated.value && user.value && !state.cust.name) {
    state.cust.name = [user.value.first_name, user.value.last_name].filter(Boolean).join(' ')
    state.cust.phone = user.value.mobile || ''
    state.cust.mail = user.value.email || ''
  }
})

const dateLabel = computed(() => (state.date ? fmtDate(state.date) : ''))
const suggestedProducts = computed(() => {
  const liveProducts = storeProducts.value.slice(0, 3)
  if (liveProducts.length) {
    return liveProducts.map(p => ({
      id: p.id,
      name: p.n,
      desc: p.d,
      price: p.pr,
      img: p.image || p.img || '/images/generated/products/care-set-card-hq.png',
    }))
  }

  return UPSELL.map(p => ({
    id: null,
    name: p.name,
    desc: p.desc,
    price: p.price,
    img: p.img || '/images/generated/products/care-set-card-hq.png',
  }))
})

function isSuggestedAdded(product) {
  return product.id != null && !!storeState.cart[product.id]
}

function toggleSuggestedProduct(product) {
  if (product.id == null) return
  if (isSuggestedAdded(product)) setQty(product.id, 0)
  else addToCart(product.id)
}
</script>

<template>
  <div class="panel-head"><h1>تأكيد الحجز</h1><p>راجع تفاصيل جلستك قبل تأكيد الحجز والدفع</p></div>

  <div class="card detail-card">
    <h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> تفاصيل الموعد</h4>
    <div class="d-grid">
      <div class="d-cell"><small>📍 الفرع</small><b>{{ current?.name || '—' }}</b></div>
      <div class="d-cell"><small>📅 التاريخ</small><b>{{ dateLabel }}</b></div>
      <div class="d-cell"><small>⏱️ المدة الإجمالية</small><b>{{ fmtDur(totalDur) }}</b></div>
      <div class="d-cell"><small>✂️ عدد الخدمات</small><b>{{ selSvcs.length }}</b></div>
    </div>
  </div>

  <div class="card detail-card">
    <h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> تفاصيل الجلسة</h4>
    <div class="timeline-cards">
      <div v-for="s in selSvcs" :key="s.id" class="tl">
        <div class="tl-main">
          <b>{{ s.name }}</b>
          <div class="with">{{ s.categoryName }}</div>
          <div class="with">مع {{ state.emp[s.id]?.name || '—' }}</div>
        </div>
        <div class="tl-time">
          <span class="tm">{{ fmtTimeStr(state.time[s.id]) }}</span>
          <span class="dr">{{ s.dur }} دقيقة · {{ rs(s.price) }} ر.س</span>
        </div>
      </div>
    </div>
  </div>

  <div v-if="suggestedProducts.length" class="card detail-card products-detail-card">
    <h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z"/></svg> منتجات مناسبة لجلستك</h4>
    <div class="upsell">
      <div v-for="product in suggestedProducts" :key="product.id || product.name" class="up" :class="{ added: isSuggestedAdded(product) }">
        <img :src="product.img" :alt="product.name" loading="lazy">
        <span class="inf"><b>{{ product.name }}</b><small>{{ product.desc }}</small><span class="p">{{ rs(product.price) }} ر.س</span></span>
        <button type="button" :disabled="product.id == null" @click="toggleSuggestedProduct(product)">
          {{ isSuggestedAdded(product) ? '✓ أضيف' : 'إضافة' }}
        </button>
      </div>
    </div>
  </div>

  <div class="card detail-card">
    <h4><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> بيانات العميل</h4>
    <div class="cust-grid">
      <div class="fld"><small>👤 الاسم</small><input v-model="state.cust.name" /></div>
      <div class="fld"><small>📱 رقم الجوال</small><input dir="ltr" v-model="state.cust.phone" /></div>
      <div class="fld"><small>✉️ البريد الإلكتروني (اختياري)</small><input dir="ltr" v-model="state.cust.mail" /></div>
    </div>
    <div class="notes-box" style="margin-top:14px">
      <small style="font-size:11.5px;color:var(--mute);display:block;margin-bottom:7px">📝 ملاحظات إضافية (اختياري)</small>
      <textarea placeholder="اكتب أي ملاحظة أو طلب خاص بالجلسة..." v-model="state.notes"></textarea>
    </div>
    <div class="terms">🛡️ بالتأكيد على الحجز، فإنك توافق على <RouterLink to="/terms">الشروط والأحكام</RouterLink> و<RouterLink to="/privacy-policy">سياسة الخصوصية</RouterLink></div>
  </div>
</template>
