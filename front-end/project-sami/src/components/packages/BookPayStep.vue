<script setup>
/*
  الدفع — مُرحَّل حرفيًا من bkView3() في src/legacy/packages-gifts.html
*/
import { computed, onMounted, ref } from 'vue'
import { BK_PAYS } from '@/data/packages'
import { usePackages, fmtTime, fmtDate, rs } from '@/composables/usePackages'
import { fetchProfile } from '@/services/accountApi'
import SIcon from '@/components/common/SIcon.vue'

const { state, pkgOf, bkDays } = usePackages()
const emit = defineEmits(['pay'])

const B = state.bk
const p = computed(() => pkgOf(B.pkg))
const d = computed(() => bkDays()[B.dayIdx])

const ENABLED_PAYS = ['cash', 'wallet']
const walletBalance = ref(null)
onMounted(async () => {
  try {
    const res = await fetchProfile()
    walletBalance.value = res?.data?.balances?.wallet ?? 0
  } catch { /* يفضل النص الافتراضي لو فشل التحميل */ }
})

function payLabel(m) {
  if (m.id === 'wallet' && walletBalance.value !== null) return `${m.n} (${rs(walletBalance.value)} ر.س)`
  return m.n
}

function selectMethod(m) {
  if (!ENABLED_PAYS.includes(m.id)) return
  B.pay = m.id
}

/* لازم الرصيد يغطي القيمة كاملة لو اختار "المحفظة" — مفيش دعم لدفع جزء من المحفظة
   وباقي المبلغ ببوابة تانية فى الواجهة الحالية (راجع نفس الملاحظة فى useGifts.js). */
const walletInsufficient = computed(() =>
  B.pay === 'wallet' && walletBalance.value !== null && walletBalance.value < p.value.price
)
const canPay = computed(() => !!B.pay && !walletInsufficient.value)

const LOCK = '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>'
const SECURE = 'display:flex;gap:8px;align-items:center;justify-content:center;margin-top:14px;font-size:12px;color:var(--mute)'
</script>

<template>
  <div class="g-head"><h1>اختر طريقة الدفع</h1><p>ادفع بأمان وسهولة</p></div>
  <div class="card pay-summary-strip">
    <b>{{ p.name }}</b>
    <small>{{ p.branchName }} — {{ fmtDate(d) }} • {{ fmtTime(B.time) }}</small>
    <span class="amt">{{ rs(p.price) }} ر.س</span>
  </div>
  <div class="card" style="padding:20px">
    <div class="bk-pays">
      <div v-for="m in BK_PAYS" :key="m.id" class="bkpm" :class="{ sel: B.pay === m.id, disabled: !ENABLED_PAYS.includes(m.id) }" :data-bkpay="m.id" @click="selectMethod(m)">
        <span class="lg">{{ m.logo }}</span><b>{{ payLabel(m) }}</b><span class="rad"><i></i></span>
      </div>
      <p v-if="walletInsufficient" style="color:#b42318;font-size:12px;margin-top:4px">رصيد محفظتك لا يكفي لدفع القيمة كاملة، اختر وسيلة دفع أخرى.</p>
    </div>
    <button class="btn-paynow" id="bkPayNow" :disabled="!canPay" @click="emit('pay')"><SIcon :inner="LOCK" :size="16" /> ادفع الآن — {{ rs(p.price) }} ر.س</button>
    <div :style="SECURE">🌐 جميع المعاملات مؤمّنة وآمنة</div>
  </div>
</template>

<style scoped>
.bkpm.disabled { opacity: .45; cursor: not-allowed; }
</style>
