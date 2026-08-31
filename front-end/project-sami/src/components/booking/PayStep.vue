<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useBooking, rs } from '@/composables/useBooking'
import { fetchProfile } from '@/services/accountApi'
import { fetchLoyaltyPointValue, validateInvoiceCoupon } from '@/services/bookingApi'

const {
  state,
  priceParts,
  pointValue,
  couponDiscount,
  walletDiscount,
  loyaltyPointsUsed,
  loyaltyDiscount,
  payableTotal,
} = useBooking()

const couponLoading = ref(false)

onMounted(async () => {
  try {
    const res = await fetchProfile()
    const balances = res?.data?.balances || {}
    state.walletBalance = Number(balances.wallet ?? 0)
    state.loyaltyPoints = Number(balances.loyalty_points ?? 0)
  } catch { /* يفضل بدون رصيد معروض لو فشل التحميل */ }

  try {
    const res = await fetchLoyaltyPointValue()
    state.pointValue = Number(res?.data?.point_value ?? 0.5) || 0.5
  } catch { /* القيمة الافتراضية للنقطة تكفي لو فشل التحميل */ }
})

const walletBalance = computed(() => Math.max(Number(state.walletBalance) || 0, 0))
const loyaltyBalance = computed(() => Math.max(parseInt(state.loyaltyPoints, 10) || 0, 0))
const walletMax = computed(() => Math.max(priceParts.value.total - couponDiscount.value, 0))
const walletApplied = computed(() => Math.min(walletDiscount.value, walletMax.value))
const loyaltyRemaining = computed(() => Math.max(priceParts.value.total - couponDiscount.value - walletApplied.value, 0))
const loyaltyMaxPoints = computed(() => Math.min(loyaltyBalance.value, Math.ceil(loyaltyRemaining.value / pointValue.value)))
const hasSubRewards = computed(() => walletApplied.value > 0 || loyaltyPointsUsed.value > 0)

const PAY_METHODS = computed(() => [
  {
    id: 'cod',
    n: 'الدفع عند الوصول',
    d: hasSubRewards.value ? 'غير متاح مع خصم المحفظة أو النقاط' : 'ادفع عند وصولك للفرع',
    logo: 'COD',
    enabled: !hasSubRewards.value,
  },
  {
    id: 'wallet',
    n: 'المحفظة',
    d: state.walletBalance !== null ? `الرصيد الحالي ${rs(walletBalance.value)} ر.س` : 'ادفع من رصيد محفظتك',
    logo: 'W',
    enabled: walletBalance.value >= payableTotal.value && payableTotal.value > 0,
  },
  { id: 'mada', n: 'مدى', d: 'قريبًا', logo: 'مدى', enabled: false },
  {
    id: 'card',
    n: 'بطاقات الائتمان والخصم',
    d: hasSubRewards.value ? 'ادفع المتبقي بعد الخصومات' : 'قريبًا — Visa / Mastercard',
    logo: 'VISA',
    enabled: hasSubRewards.value && payableTotal.value > 0,
  },
  { id: 'tabby', n: 'تابي', d: 'قريبًا', logo: 'tabby', enabled: false },
])

const walletInsufficient = computed(() =>
  state.pay === 'wallet' && state.walletBalance !== null && state.walletBalance < payableTotal.value
)

watch([hasSubRewards, payableTotal], () => {
  if (hasSubRewards.value && state.pay === 'cod') state.pay = payableTotal.value > 0 ? 'card' : null
  if (state.pay === 'wallet' && walletInsufficient.value) state.pay = null
})

const TRUST = [
  ['ضمان الجودة', 'نضمن لك أفضل تجربة', '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'],
  ['دفع آمن', 'تقنيات تشفير متقدمة', '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'],
  ['حماية البيانات', 'بياناتك محمية بالكامل', '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'],
  ['دعم فوري', 'فريق دعم جاهز لخدمتك', '<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'],
]

const ICONS = {
  wallet: '<path d="M18 8V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/><path d="M16 13h.01"/>',
  gift: '<path d="M20 12v8H4v-8"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>',
  coupon: '<path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4z"/><path d="M9 9h.01M15 15h.01M16 8l-8 8"/>',
}

function selectMethod(m) {
  if (!m.enabled) return
  state.pay = m.id
}

function clampMoney(value, max) {
  const num = Number(value)
  if (!Number.isFinite(num)) return 0
  return Math.max(0, Math.min(num, max))
}

function toggleWallet() {
  state.rewards.useWallet = !state.rewards.useWallet
  if (state.rewards.useWallet) {
    state.rewards.walletAmount = clampMoney(state.rewards.walletAmount || walletMax.value, Math.min(walletBalance.value, walletMax.value))
  } else {
    state.rewards.walletAmount = 0
  }
}

function setWalletAmount(value) {
  state.rewards.walletAmount = clampMoney(value, Math.min(walletBalance.value, walletMax.value))
  state.rewards.useWallet = state.rewards.walletAmount > 0
}

function toggleLoyalty() {
  state.rewards.useLoyalty = !state.rewards.useLoyalty
  if (state.rewards.useLoyalty) {
    state.rewards.loyaltyPoints = Math.min(
      state.rewards.loyaltyPoints || loyaltyMaxPoints.value,
      loyaltyMaxPoints.value,
    )
  } else {
    state.rewards.loyaltyPoints = 0
  }
}

function setLoyaltyPoints(value) {
  const points = Math.max(0, Math.min(parseInt(value, 10) || 0, loyaltyMaxPoints.value))
  state.rewards.loyaltyPoints = points
  state.rewards.useLoyalty = points > 0
}

function couponAmountFrom(result) {
  const type = result?.discount_type
  const raw = type === 'percent'
    ? priceParts.value.total * (Number(result?.discount_percentage) || 0) / 100
    : Number(result?.discount_amount) || 0
  return Math.min(Math.max(raw, 0), priceParts.value.total)
}

async function applyCoupon() {
  const code = state.rewards.couponCode.trim()
  if (!code) {
    state.rewards.couponStatus = 'bad'
    state.rewards.couponMessage = 'أدخل كود الخصم أولًا'
    return
  }

  couponLoading.value = true
  try {
    const result = await validateInvoiceCoupon(code)
    if (!result?.valid) {
      state.rewards.couponApplied = ''
      state.rewards.couponDiscount = 0
      state.rewards.couponStatus = 'bad'
      state.rewards.couponMessage = 'كود الخصم غير صالح'
      return
    }
    const discount = couponAmountFrom(result)
    state.rewards.couponCode = code
    state.rewards.couponApplied = code
    state.rewards.couponDiscount = discount
    state.rewards.couponStatus = 'ok'
    state.rewards.couponMessage = `تم تطبيق خصم ${rs(Math.round(discount))} ر.س`
  } catch (e) {
    state.rewards.couponStatus = 'bad'
    state.rewards.couponMessage = e.message || 'تعذّر التحقق من الكوبون'
  } finally {
    couponLoading.value = false
  }
}

function clearCoupon() {
  state.rewards.couponApplied = ''
  state.rewards.couponDiscount = 0
  state.rewards.couponStatus = ''
  state.rewards.couponMessage = ''
}

watch([walletBalance, walletMax], () => {
  if (state.rewards.useWallet) setWalletAmount(state.rewards.walletAmount)
})

watch(loyaltyMaxPoints, () => {
  if (state.rewards.useLoyalty) setLoyaltyPoints(state.rewards.loyaltyPoints)
})
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
      <p v-if="walletInsufficient" style="color:#b42318;font-size:12px;margin-top:8px">رصيد محفظتك لا يكفي لدفع القيمة كاملة، اختر وسيلة دفع أخرى.</p>
    </div>
    <div class="secure-line">🔒 جميع عمليات الدفع آمنة ومشفرة</div>
  </div>

  <div class="card detail-card payment-rewards-card">
    <h4><span class="step-dot">2</span> استخدام العروض و المكافآت</h4>

    <div class="rewards">
      <div class="rw" :class="{ on: state.rewards.useWallet }">
        <div class="rt">
          <span class="ri"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="ICONS.wallet"></svg></span>
          <span>
            <b>استخدام من المحفظة</b>
            <small>الرصيد الحالي: {{ rs(walletBalance) }} ر.س</small>
          </span>
          <span class="switch" :class="{ on: state.rewards.useWallet }" @click="toggleWallet"></span>
        </div>
        <input
          type="number"
          min="0"
          :max="Math.min(walletBalance, walletMax)"
          step="1"
          :value="state.rewards.walletAmount"
          :disabled="!state.rewards.useWallet"
          @input="setWalletAmount($event.target.value)"
        />
        <span class="hint">المبلغ المتاح حتى {{ rs(Math.round(Math.min(walletBalance, walletMax))) }} ر.س</span>
      </div>

      <div class="rw" :class="{ on: state.rewards.useLoyalty }">
        <div class="rt">
          <span class="ri"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="ICONS.gift"></svg></span>
          <span>
            <b>استخدام نقاط الولاء</b>
            <small>لديك {{ rs(loyaltyBalance) }} نقطة</small>
          </span>
          <span class="switch" :class="{ on: state.rewards.useLoyalty }" @click="toggleLoyalty"></span>
        </div>
        <input
          type="number"
          min="0"
          :max="loyaltyMaxPoints"
          step="1"
          :value="state.rewards.loyaltyPoints"
          :disabled="!state.rewards.useLoyalty"
          @input="setLoyaltyPoints($event.target.value)"
        />
        <span class="hint">تساوي خصم {{ rs(Math.round(loyaltyPointsUsed * pointValue)) }} ر.س</span>
      </div>
    </div>

    <div class="coupon">
      <span class="ci"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" v-html="ICONS.coupon"></svg></span>
      <input
        v-model="state.rewards.couponCode"
        placeholder="أدخل كود الخصم"
        @input="state.rewards.couponApplied && state.rewards.couponCode !== state.rewards.couponApplied ? clearCoupon() : null"
        @keydown.enter.prevent="applyCoupon"
      />
      <button v-if="state.rewards.couponApplied" type="button" class="coupon-clear" @click="clearCoupon">إلغاء</button>
      <button type="button" @click="applyCoupon" :disabled="couponLoading">{{ couponLoading ? '...' : 'تطبيق' }}</button>
    </div>
    <p v-if="state.rewards.couponMessage" class="coupon-msg" :class="state.rewards.couponStatus">{{ state.rewards.couponMessage }}</p>

    <div class="reward-total">
      <span>المبلغ بعد المكافآت</span>
      <b>{{ rs(Math.round(payableTotal)) }} ر.س</b>
      <small v-if="couponDiscount || walletApplied || loyaltyDiscount">
        تم خصم {{ rs(Math.round(couponDiscount + walletApplied + loyaltyDiscount)) }} ر.س
      </small>
    </div>
  </div>

  <div class="trust-row">
    <div v-for="(t, i) in TRUST" :key="i" class="trust"><span class="ti"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" v-html="t[2]"></svg></span><b>{{ t[0] }}</b><small>{{ t[1] }}</small></div>
  </div>
</template>

<style scoped>
.pm.disabled { opacity: .45; cursor: not-allowed; }
</style>
