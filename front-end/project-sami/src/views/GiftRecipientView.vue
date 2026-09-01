<script setup>
import { computed, onMounted, ref } from 'vue'
import { SENDS } from '@/data/gifts'
import SIcon from '@/components/common/SIcon.vue'
import { fetchGiftClaim } from '@/services/giftsApi'

const loading = ref(true)
const error = ref('')
const gift = ref(null)

const AR_M = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']

const refCode = computed(() => {
  const params = new URLSearchParams(window.location.search)
  return params.get('token') || ''
})

const sendName = computed(() => {
  const m = SENDS.find(x => x.id === (gift.value?.send_channel || gift.value?.method))
  return m ? m.n : ''
})

const giftLabel = computed(() => gift.value?.label || 'هدية')
const sentAt = computed(() => {
  if (!gift.value) return ''
  const now = new Date(gift.value.created_at || Date.now())
  return `${now.getDate()} ${AR_M[now.getMonth()]} ${now.getFullYear()}`
})

async function loadGift() {
  const refValue = refCode.value
  if (!refValue) {
    error.value = 'لا يوجد رابط هدية صالح'
    loading.value = false
    return
  }

  try {
    gift.value = await fetchGiftClaim(refValue)
  } catch (e) {
    error.value = 'تعذّر تحميل تفاصيل الهدية. تأكد من الرابط أو تواصل مع الدعم.'
    gift.value = null
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadGift()
})

const I = {
  user:  '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  send:  '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  home:  '<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/>',
}
</script>

<template>
  <div class="gift-recipient-page">
    <div v-if="loading" class="gift-recipient-state">
      <p>جارٍ تحميل تفاصيل الهدية...</p>
    </div>

    <div v-else-if="error" class="gift-recipient-state error">
      <h2>تعذّر فتح الهدية</h2>
      <p>{{ error }}</p>
      <button class="btn btn-gold" @click="$router.push('/gifts')">العودة إلى صفحة الهدايا</button>
    </div>

    <div v-else-if="gift" class="gift-recipient-card">
      <h1>تفاصيل الهدية</h1>

      <div class="gift-recipient-meta">
        <div class="meta-row">
          <span class="k"><SIcon :inner="I.user" :size="15" /> إلى</span>
          <span class="v">{{ gift.recipient_name || gift.name || '—' }}</span>
        </div>

        <div class="meta-row">
          <span class="k"><SIcon :inner="I.send" :size="15" /> طريقة الإرسال</span>
          <span class="v">{{ sendName || gift.send_method || '—' }}</span>
        </div>

        <div class="meta-row">
          <span class="k"><SIcon :inner="I.clock" :size="15" /> تاريخ الإرسال</span>
          <span class="v">{{ sentAt }}</span>
        </div>

        <div class="meta-row">
          <span class="k">رقم الهدية</span>
          <span class="v" dir="ltr">{{ refCode }}</span>
        </div>
      </div>

      <div class="gift-recipient-message">
        <h3>{{ giftLabel }}</h3>
        <p>{{ gift.message || gift.msg || 'رسالة خاصة معطرة بالاهتمام' }}</p>
      </div>

      <div class="gift-recipient-actions">
        <button class="btn btn-gold" @click="$router.push('/gifts')">تصفح الهدايا</button>
        <button class="btn btn-line" @click="$router.push('/')">العودة للرئيسية</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gift-recipient-page{
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 48px 20px;
  background: linear-gradient(180deg, #f9f4ea 0%, #fff 100%);
}

.gift-recipient-card{
  width: min(700px, 100%);
  background: #fff;
  border: 1px solid rgba(143,113,52,.2);
  border-radius: 22px;
  padding: 26px 22px;
  box-shadow: 0 18px 40px -24px rgba(0,0,0,.25);
}

.gift-recipient-card h1{
  font-family: var(--font-d, 'Lama Sans', sans-serif);
  margin: 0 0 22px;
  color: var(--ink, #0A0906);
  text-align: center;
}

.gift-recipient-meta{
  display: grid;
  gap: 12px;
}

.meta-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 14px;
  border: 1px solid rgba(143,113,52,.15);
  border-radius: 12px;
  background: #fffdf9;
}

.meta-row .k{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold-deep);
  font-weight: 700;
}

.meta-row .v{
  color: var(--ink);
  font-weight: 600;
  text-align: left;
}

.gift-recipient-message{
  margin-top: 22px;
  padding: 18px 16px;
  background: linear-gradient(135deg, rgba(232,190,108,.12), rgba(255,255,255,.8));
  border: 1px dashed rgba(143,113,52,.2);
  border-radius: 16px;
}

.gift-recipient-message h3{
  margin: 0 0 10px;
  color: var(--gold-deep);
}

.gift-recipient-message p{
  margin: 0;
  color: var(--mute);
  line-height: 1.8;
}

.gift-recipient-actions{
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.gift-recipient-state{
  text-align: center;
  padding: 48px 20px;
}

.gift-recipient-state.error{
  color: #7a2f2f;
}

@media(max-width:640px){
  .meta-row{
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>