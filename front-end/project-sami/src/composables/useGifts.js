import { reactive, computed } from 'vue'
import { DESIGNS } from '@/data/gifts'
import { useAuth } from '@/composables/useAuth'
import { createGiftCard } from '@/services/giftsApi'
import { initPayment } from '@/services/bookingApi'

/*
  حالة صفحة الإهداء — مبنية على بيانات حقيقية (خدمات/باقات حقيقية من الـ API)
  بدل المصفوفات الوهمية القديمة. راجع useBooking.js/usePackages.js لنفس النمط.

  gtype === 'svc'  → state.svcs مصفوفة خدمات حقيقية {id, categoryId, categoryName, name, dur, price}
  gtype === 'pkg'  → state.pkg الباقة الحقيقية الكاملة (نفس الكائن اللي بترجعه usePackages)
*/

const VAT = 0.15

export const dsgOf = id => DESIGNS.find(d => d.id === id)

const state = reactive({
  step: 0,
  gtype: null,          // 'svc' | 'pkg'
  branch: null,
  activeCat: null,
  pkg: null,             // الباقة الحقيقية الكاملة، أو null
  svcs: [],              // الخدمات الحقيقية المختارة
  sort: 'pop',           // فرز كتالوج الباقات في هذه الرحلة بس
  favs: [],
  sender: '', name: '', phone: '', msg: '',
  design: 'lux-dark',
  method: 'wa',
  when: 'now',
  schedDate: '',
  pay: null,
  terms: false,
  placing: false,
  done: false,
  ref: null,
  claimUrl: null,
})

export function useGifts() {
  /* ===== اختيار الخدمات ===== */
  const hasSvc = id => state.svcs.some(s => s.id === id)
  const toggleSvc = service => {
    const i = state.svcs.findIndex(s => s.id === service.id)
    if (i === -1) state.svcs.push(service)
    else state.svcs.splice(i, 1)
  }

  /* ===== المفضلة ===== */
  const isFav = id => state.favs.includes(id)
  const toggleFav = id => {
    const i = state.favs.indexOf(id)
    if (i === -1) state.favs.push(id)
    else state.favs.splice(i, 1)
  }

  /* ===== الحسابات ===== */
  const giftValue = computed(() => {
    if (state.gtype === 'svc') return state.svcs.reduce((a, s) => a + s.price, 0)
    return state.pkg?.price || 0
  })

  const giftLabel = computed(() => {
    if (state.gtype === 'svc') {
      return state.svcs.length ? state.svcs.map(s => s.name).join(' + ') : null
    }
    return state.pkg?.name || null
  })

  const priceParts = computed(() => {
    const val = giftValue.value
    const vat = Math.round(val * VAT)
    return { val, vat, total: val + vat }
  })

  /* ===== التنقل بين الخطوات ===== */
  const canNext = computed(() => {
    switch (state.step) {
      case 0: return !!state.gtype
      case 1: return state.gtype === 'svc' ? state.svcs.length > 0 : !!state.pkg
      case 2: return state.name.trim().length > 1 && state.phone.trim().length >= 9
      case 3: return !!state.pay && state.terms
    }
    return false
  })

  function go(dir) {
    if (dir > 0 && !canNext.value) return
    state.step += dir
    if (state.step < 0) state.step = 0
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  function reset() {
    state.step = 0
    state.gtype = null
    state.pkg = null
    state.svcs = []
    state.done = false
    state.ref = null
    state.claimUrl = null
    state.pay = null
    state.terms = false
  }

  /* إرسال الهدية فعليًا للباك إند — خدمة أو باقة واحدة بس لكل هدية */
  async function placeGift() {
    if (!canNext.value) return null
    state.placing = true

    try {
      const branchId = state.branch === 'home-service' ? 0 : (Number.isInteger(state.branch) ? state.branch : null)

      const payload = {
        location: {
          recipient_name: state.name.trim(),
          recipient_mobile: state.phone.trim(),
          message: state.msg.trim() || undefined,
        },
        branch: branchId,
      }

      if (state.gtype === 'svc') {
        payload.services = [{ subServices: state.svcs.map(s => ({ id: s.id })) }]
      } else {
        payload.packages = [{ id: state.pkg.id }]
      }

      const created = await createGiftCard(payload)
      /* "المحفظة"/"نقاط الولاء" في PAYS مش بوابات دفع حقيقية بالنسبة للباك إند — أعلام إضافية
         بتتفعّل فوق بوابة أساسية (راجع تعليق initPayment في bookingApi.js). ده اللي كان مفقود
         وسبب إن المحفظة ما كانتش بتتخصم أبدًا مهما اختار العميل — كان دايمًا بيتبعت 'cod' ثابت. */
      const wallet = state.pay === 'wallet'
      const loyalty = state.pay === 'points'
      const gateway = (wallet || loyalty || !state.pay) ? 'cod' : (state.pay === 'card' || state.pay === 'mada' || state.pay === 'apple' || state.pay === 'stc') ? 'card' : state.pay
      const payment = await initPayment(gateway, { wallet, loyalty })

      state.ref = created?.data?.gift_card_id ? `#GIFT-${created.data.gift_card_id}` : '#GIFT'
      state.claimUrl = created?.data?.claim_url || null
      state.done = true
      state.step = 4

      return { created, payment }
    } finally {
      state.placing = false
    }
  }

  return {
    state,
    dsgOf,
    hasSvc, toggleSvc,
    isFav, toggleFav,
    giftValue, giftLabel, priceParts,
    canNext, go, reset,
    placeGift,
  }
}
