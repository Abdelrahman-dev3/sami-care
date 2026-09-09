<script setup>
/*
  الدفع — مُرحَّل حرفيًا من bkView3() في src/legacy/packages-gifts.html
*/
import { computed, onMounted } from 'vue'
import { BK_PAYS } from '@/data/packages'
import { usePackages, fmtTime, fmtDate, rs } from '@/composables/usePackages'
import { fetchProfile } from '@/services/accountApi'
import { fetchLoyaltyPointValue } from '@/services/bookingApi'
import SIcon from '@/components/common/SIcon.vue'

const { state, pkgOf, bkDays } = usePackages()
const emit = defineEmits(['pay'])

const B = state.bk
const p = computed(() => pkgOf(B.pkg))
const d = computed(() => bkDays()[B.dayIdx])
const VAT_RATE = 0.15
const priceParts = computed(() => {
  const subtotal = Math.max(Number(p.value?.price) || 0, 0)
  const vat = Math.round(subtotal * VAT_RATE)
  return { subtotal, vat, total: subtotal + vat }
})

const PAYMENT_METHODS = computed(() => BK_PAYS.filter(method => method.id !== 'wallet'))
const ENABLED_PAYS = ['cash', 'visa']
onMounted(async () => {
  try {
    const res = await fetchProfile()
    const balances = res?.data?.balances || {}
    B.walletBalance = Number(balances.wallet ?? 0)
    B.loyaltyPoints = Number(balances.loyalty_points ?? 0)
  } catch { /* يفضل النص الافتراضي لو فشل التحميل */ }
  try {
    const res = await fetchLoyaltyPointValue()
    B.pointValue = Number(res?.data?.point_value ?? 0.5) || 0.5
  } catch { /* القيمة الافتراضية للنقطة تكفي عند تعذر التحميل */ }
})

const walletBalance = computed(() => Math.max(Number(B.walletBalance) || 0, 0))
const loyaltyBalance = computed(() => Math.max(parseInt(B.loyaltyPoints, 10) || 0, 0))
const walletApplied = computed(() => B.useWallet ? Math.min(Math.max(Number(B.walletAmount) || 0, 0), walletBalance.value, priceParts.value.total) : 0)
const remainingAfterWallet = computed(() => Math.max(priceParts.value.total - walletApplied.value, 0))
const loyaltyMaxPoints = computed(() => Math.min(loyaltyBalance.value, Math.ceil(remainingAfterWallet.value / B.pointValue)))
const loyaltyPointsApplied = computed(() => B.useLoyalty ? Math.min(Math.max(parseInt(B.loyaltyPointsUsed, 10) || 0, 0), loyaltyMaxPoints.value) : 0)
const loyaltyApplied = computed(() => Math.min(loyaltyPointsApplied.value * B.pointValue, remainingAfterWallet.value))
const payable = computed(() => Math.max(priceParts.value.total - walletApplied.value - loyaltyApplied.value, 0))
const hasRewards = computed(() => walletApplied.value > 0 || loyaltyPointsApplied.value > 0)

function selectMethod(m) {
  if (!ENABLED_PAYS.includes(m.id)) return
  B.pay = m.id
}

function toggleWallet() {
  B.useWallet = !B.useWallet
  B.walletAmount = B.useWallet ? Math.min(walletBalance.value, priceParts.value.total) : 0
  if (B.useWallet && B.pay === 'cash') B.pay = payable.value > 0 ? 'visa' : null
}
function setWallet(value) {
  B.walletAmount = Math.min(Math.max(Number(value) || 0, 0), walletBalance.value, priceParts.value.total)
  B.useWallet = B.walletAmount > 0
}
function toggleLoyalty() {
  B.useLoyalty = !B.useLoyalty
  B.loyaltyPointsUsed = B.useLoyalty ? loyaltyMaxPoints.value : 0
  if (B.useLoyalty && B.pay === 'cash') B.pay = payable.value > 0 ? 'visa' : null
}
function setLoyalty(value) {
  B.loyaltyPointsUsed = Math.min(Math.max(parseInt(value, 10) || 0, 0), loyaltyMaxPoints.value)
  B.useLoyalty = B.loyaltyPointsUsed > 0
}
const canPay = computed(() => payable.value <= 0 || !!B.pay)

const LOCK = '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'
const SECURE = 'display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)'
</script>

<template>
  <div class="g-head"><h1>اختر طريقة الدفع</h1><p>ادفع بأمان وسهولة</p></div>
  <div class="card pay-summary-strip">
    <b>{{ p.name }}</b>
    <small>{{ p.branchName }} — {{ fmtDate(d) }} • {{ fmtTime(B.time) }}</small>
    <span class="amt">{{ rs(priceParts.total) }} ر.س</span>
  </div>
  <div class="card" style="padding:20px">
    <div class="bk-pays">
      <div v-for="m in PAYMENT_METHODS" :key="m.id" class="bkpm" :class="{ sel: B.pay === m.id, disabled: !ENABLED_PAYS.includes(m.id) || (m.id === 'cash' && hasRewards) }" :data-bkpay="m.id" @click="m.id === 'cash' && hasRewards ? null : selectMethod(m)">
        <span class="lg">{{ m.logo }}</span><b>{{ m.n }}</b><span class="rad"><i></i></span>
      </div>
    </div>
    <section class="package-rewards">
      <h4>استخدام المكافآت ونقاط الولاء</h4>
      <label class="package-reward">
        <span><b>استخدام من المحفظة</b><small>الرصيد الحالي: {{ rs(walletBalance) }} ر.س</small></span>
        <input type="checkbox" :checked="B.useWallet" @change="toggleWallet">
        <input type="number" min="0" :max="Math.min(walletBalance, priceParts.total)" :value="B.walletAmount" :disabled="!B.useWallet" @input="setWallet($event.target.value)">
      </label>
      <label class="package-reward">
        <span><b>استخدام نقاط الولاء</b><small>لديك {{ rs(loyaltyBalance) }} نقطة</small></span>
        <input type="checkbox" :checked="B.useLoyalty" @change="toggleLoyalty">
        <input type="number" min="0" :max="loyaltyMaxPoints" :value="B.loyaltyPointsUsed" :disabled="!B.useLoyalty" @input="setLoyalty($event.target.value)">
      </label>
      <div class="package-totals"><span>قيمة الباقة</span><b>{{ rs(priceParts.subtotal) }} ر.س</b><span>الضريبة</span><b>{{ rs(priceParts.vat) }} ر.س</b></div>
      <div class="package-payable"><span>المتبقي للدفع شامل الضريبة</span><b>{{ rs(Math.round(payable)) }} ر.س</b></div>
    </section>
    <button class="btn-paynow" id="bkPayNow" :disabled="!canPay" @click="emit('pay')"><SIcon :inner="LOCK" :size="16" /> ادفع الآن — {{ rs(Math.round(payable)) }} ر.س</button>
    <div :style="SECURE">🌐 جميع المعاملات مؤمّنة وآمنة</div>
  </div>
</template>

<style scoped>
.bkpm.disabled { opacity: .45; cursor: not-allowed; }
.package-rewards{margin:18px 0;padding:16px;border:1px solid var(--line);border-radius:15px;background:#fffaf0}.package-rewards h4{margin:0 0 12px}.package-reward{display:grid;grid-template-columns:1fr auto;gap:8px 12px;padding:12px 0;border-bottom:1px solid var(--line)}.package-reward:last-of-type{border-bottom:0}.package-reward span{display:grid;gap:3px}.package-reward small{color:var(--mute)}.package-reward input[type=number]{grid-column:1/-1;width:100%;padding:10px;border:1px solid var(--line);border-radius:10px}.package-payable{display:flex;justify-content:space-between;margin-top:12px;padding-top:12px;border-top:1px dashed var(--gold)}
.package-totals{display:grid;grid-template-columns:1fr auto;gap:6px 14px;margin-top:12px;padding-top:12px;border-top:1px solid var(--line)}
</style>
