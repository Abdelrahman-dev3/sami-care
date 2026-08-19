<script setup>
import { useBooking } from '@/composables/useBooking'

const { state } = useBooking()

const PAY_METHODS = [
  { id: 'cod', n: 'الدفع عند الوصول', d: 'ادفع عند وصولك للفرع', logo: '💵', enabled: true },
  { id: 'mada', n: 'مدى', d: 'قريبًا', logo: 'مدى', enabled: false },
  { id: 'card', n: 'بطاقات الائتمان والخصم', d: 'قريبًا — Visa / Mastercard', logo: 'VISA', enabled: false },
  { id: 'tabby', n: 'تابي', d: 'قريبًا', logo: 'tabby', enabled: false },
]

const TRUST = [
  ['ضمان الجودة', 'نضمن لك أفضل تجربة', '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],
  ['دفع آمن', 'تقنيات تشفير متقدمة', '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],
  ['حماية البيانات', 'بياناتك محمية بالكامل', '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],
  ['دعم فوري', 'فريق دعم جاهز لخدمتك', '<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'],
]

function selectMethod(m) {
  if (!m.enabled) return
  state.pay = m.id
}
</script>

<template>
  <div class="panel-head"><h1>الدفع</h1><p>اختر طريقة الدفع المناسبة وأكمل حجزك</p></div>

  <div class="card detail-card">
    <h4>اختر طريقة الدفع</h4>
    <div class="pay-methods">
      <div v-for="m in PAY_METHODS" :key="m.id" class="pm" :class="{ sel: state.pay === m.id, disabled: !m.enabled }" @click="selectMethod(m)">
        <span class="pmi">{{ m.logo }}</span>
        <span><b>{{ m.n }}</b><small>{{ m.d }}</small></span>
        <span class="rad"><i></i></span>
      </div>
    </div>
    <div class="secure-line">🔒 جميع عمليات الدفع آمنة ومشفرة</div>
  </div>

  <div class="trust-row">
    <div v-for="(t, i) in TRUST" :key="i" class="trust"><span class="ti"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" v-html="t[2]"></svg></span><b>{{ t[0] }}</b><small>{{ t[1] }}</small></div>
  </div>
</template>

<style scoped>
.pm.disabled { opacity: .45; cursor: not-allowed; }
</style>
