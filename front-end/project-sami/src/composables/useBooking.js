import { reactive, computed } from 'vue'

/*
  حالة صفحة الحجز — مبنية على بيانات حقيقية من الباك إند (خدمات حقيقية،
  موظفون حقيقيون، أوقات متاحة حقيقية). كل خدمة مختارة لها موظف ووقت
  خاص بيها (مطابق لشكل payload الحقيقي في POST /mobile/cart/bookings:
  services[].subServices[] كل عنصر فيه id/date/time/staffId مستقل).

  مكان التنفيذ (الفرع) بييجي من useServiceLocation مباشرة في كل مكوّن
  محتاجه — مفيش نسخة تانية منفصلة هنا، عشان نتجنب تكرار نفس الاختيار
  في مصدرين مختلفين زي ما كان حاصل في النسخة الوهمية القديمة.
*/

const VAT = 0.15

export const rs = n => n.toLocaleString('ar-EG-u-nu-latn')

/* "HH:mm" -> "05:30 م" */
export function fmtTimeStr(hhmm) {
  if (!hhmm) return ''
  let [h, m] = hhmm.split(':').map(Number)
  const pm = h >= 12
  h = h % 12 || 12
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} ${pm ? 'م' : 'ص'}`
}

export function fmtDur(min) {
  const h = Math.floor(min / 60)
  const m = min % 60
  if (!h) return `${m} د`
  return m ? `${h} س ${m} د` : `${h} س`
}

export function fmtDate(d) {
  const AR_DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  const AR_MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  return `${AR_DAYS[d.getDay()]} ${d.getDate()} ${AR_MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

const state = reactive({
  step: 0,
  services: [],      // [{id, categoryId, categoryName, name, dur, price}]
  activeCat: null,    // القسم المفتوح حاليًا في خطوة اختيار الخدمات

  mode: null,         // 'auto' | 'manual'
  emp: {},            // serviceId -> { id, name }

  date: null,         // Date واحد مشترك لكل الخدمات المختارة
  time: {},           // serviceId -> "HH:mm"

  cust: { name: '', phone: '', mail: '' },
  notes: '',

  pay: null,
  done: false,
  bookRef: null,
  bookingIds: [],
})

export function useBooking() {
  const hasSvc = id => state.services.some(s => s.id === id)

  const toggleSvc = service => {
    const i = state.services.findIndex(s => s.id === service.id)
    if (i === -1) {
      state.services.push(service)
    } else {
      state.services.splice(i, 1)
      delete state.emp[service.id]
      delete state.time[service.id]
    }
  }

  const selSvcs = computed(() => state.services)

  const subTotal = computed(() => selSvcs.value.reduce((a, s) => a + s.price, 0))
  const totalDur = computed(() => selSvcs.value.reduce((a, s) => a + s.dur, 0))

  const priceParts = computed(() => {
    const sub = subTotal.value
    const vat = Math.round(sub * VAT)
    return { sub, vat, total: sub + vat }
  })

  function setEmployee(serviceId, employee) {
    state.emp[serviceId] = employee
  }

  function setTime(serviceId, time) {
    state.time[serviceId] = time
  }

  const canProceed = computed(() => {
    switch (state.step) {
      case 0:
        return state.services.length > 0
      case 1:
        return !!state.mode && selSvcs.value.every(s => state.emp[s.id])
      case 2:
        return !!state.date && selSvcs.value.every(s => state.time[s.id])
      case 3:
        return !!(state.cust.name.trim() && state.cust.phone.trim())
      case 4:
        return !!state.pay
    }
    return false
  })

  const nextLabel = computed(() =>
    ['التالي: اختيار الموظف',
      state.mode === 'auto' ? 'التالي: اختيار الوقت' : 'متابعة اختيار الوقت',
      'التالي: تأكيد الحجز', 'تأكيد الحجز والدفع', '🔒 إتمام الدفع بأمان'][state.step]
  )

  function go(dir) {
    if (dir > 0 && !canProceed.value) return
    state.step = Math.max(0, state.step + dir)
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  function reset() {
    state.step = 0
    state.services = []
    state.activeCat = null
    state.mode = null
    state.emp = {}
    state.date = null
    state.time = {}
    state.notes = ''
    state.pay = null
    state.done = false
    state.bookRef = null
    state.bookingIds = []
  }

  return {
    state, VAT,
    hasSvc, toggleSvc,
    selSvcs, subTotal, totalDur, priceParts,
    setEmployee, setTime,
    canProceed, nextLabel,
    go, reset,
  }
}
