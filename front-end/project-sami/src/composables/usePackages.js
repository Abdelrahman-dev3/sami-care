import { reactive, computed, ref } from 'vue'
import { BRANCHES, AR_DAYS, AR_MONTHS } from '@/data/packages'
import { fetchPackages } from '@/services/packagesApi'

/* ===== منسّقات الوقت والتاريخ — منقولة حرفيًا ===== */
export function fmtTime(min) {
  let h = Math.floor(min / 60)
  const m = min % 60
  const pm = h >= 12
  h = h % 12 || 12
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} ${pm ? 'م' : 'ص'}`
}

export function fmtDate(d) {
  return `${AR_DAYS[d.getDay()]} ${d.getDate()} ${AR_MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

export const rs = n => n.toLocaleString('ar-EG-u-nu-latn')

/*
  حالة صفحة الباقات — مُرحَّلة من كائن S في src/legacy/packages-gifts.html

  الصفحة تضم ثلاثة تدفقات:
  • packages : كتالوج الباقات (فلترة + فرز)
  • gift     : رحلة الإهداء   (4 خطوات + نجاح)
  • book     : رحلة حجز باقة  (4 خطوات + نجاح)
*/

const TODAY = new Date(2026, 6, 7)
const STORAGE_KEY = 'samiSiteBranch'

/* ===== المنتجات (الباقات) — تُجلب من الـ API بدل المصفوفة الثابتة ===== */
const packages = ref([])
let packagesLoaded = false

/* ألوان وأيقونات جاهزة نعيد تدويرها على الباقات الحقيقية — تفصيل شكلي بحت */
const STYLE_ROTATION = [
  { color: 'var(--p-relax)', hex: '#4E9E6F', ico: '<path d="M12 3c-1.2 3-4 4.5-4 8a4 4 0 008 0c0-3.5-2.8-5-4-8z"/><path d="M5 21h14"/>' },
  { color: 'var(--p-fast)', hex: '#D98A3B', ico: '<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>' },
  { color: 'var(--p-full)', hex: '#B8912F', ico: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { color: 'var(--p-groom)', hex: '#8B6FC0', ico: '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 3l-4 6 4 12 4-12-4-6z"/>' },
  { color: 'var(--p-home)', hex: '#3E8E9E', ico: '<path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/><path d="M9 21V12h6v9"/>' },
  { color: 'var(--p-vip)', hex: '#B0642A', ico: '<path d="M2 8l4 4 6-8 6 8 4-4v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"/>' },
]

async function loadPackages() {
  if (packagesLoaded) return
  packagesLoaded = true

  try {
    const data = await fetchPackages()
    packages.value = data.map((p, i) => {
      const style = STYLE_ROTATION[i % STYLE_ROTATION.length]
      const services = p.services || []

      return {
        id: p.id,
        name: p.name,
        cat: 'all',
        dur: services.reduce((sum, s) => sum + (s.duration_min || 0), 0),
        price: p.package_price,
        color: style.color,
        hex: style.hex,
        hot: !!p.is_featured,
        desc: p.description || '',
        inc: services.map(s => s.service_name).filter(Boolean),
        ico: style.ico,
        img: p.feature_image,
      }
    })
  } catch (err) {
    packages.value = []
  }
}

loadPackages()

export const pkgOf = id => packages.value.find(p => p.id === id)
export const brOf = id => BRANCHES.find(b => b.id === id)

function readBranch() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return BRANCHES.some(b => b.id === v) ? v : null
  } catch { return null }
}

const state = reactive({
  page: 'packages',            // packages | gift | book
  filter: 'all',
  sort: 'pop',

  /* رحلة الإهداء */
  gstep: 0,
  gtype: null,
  gpkg: null,
  name: '', phone: '',
  msg: 'أنت تستحق لحظة من الراحة والاهتمام.\nاستمتع بتجربة فاخرة تمنحك الاسترخاء والعناية.',
  design: 'lux-dark',
  method: 'wa',
  when: 'now',
  schedDate: '',
  pay: null,
  saveCard: true,
  done: false,
  ref: null,

  siteBranch: readBranch(),

  /* رحلة حجز الباقة */
  bk: { step: 0, pkg: null, branch: null, dayIdx: null, period: 'all', time: null, notes: '', pay: null, done: false, ref: null },
})

export function usePackages() {
  /* ===== الكتالوج — نفس منطق الفلترة الأصلي ===== */
  const filteredPkgs = computed(() =>
    packages.value.filter(p => state.filter === 'all' || p.cat === state.filter)
  )

  /* ===== رحلة الإهداء ===== */
  const gCanNext = computed(() => {
    switch (state.gstep) {
      case 0: return !!state.gtype
      case 1: return !!state.gpkg
      case 2: return state.name.trim().length > 1 && state.phone.trim().length >= 9 && (state.when === 'now' || state.schedDate)
      case 3: return !!state.pay
    }
    return false
  })

  const gNextLabel = computed(() =>
    ['التالي: اختيار الهدية', 'التالي: تخصيص الهدية', 'متابعة إلى الدفع', '🔒 إتمام الإهداء'][state.gstep]
  )

  /* ===== رحلة الحجز ===== */
  const bkCanNext = computed(() => {
    const B = state.bk
    switch (B.step) {
      case 0: return B.dayIdx != null && B.time != null
      case 1: return true
    }
    return false
  })

  const bkNextLabel = computed(() =>
    ['التالي: تأكيد الحجز', 'متابعة إلى الدفع'][state.bk.step]
  )

  /* أيام الحجز — 12 يومًا من TODAY */
  const bkDays = () =>
    Array.from({ length: 12 }, (_, i) => {
      const d = new Date(TODAY)
      d.setDate(d.getDate() + i)
      return d
    })

  /* مواعيد اليوم — كل 45 دقيقة من 10ص حتى 9م */
  const bkSlots = day => {
    const out = []
    for (let t = 10 * 60; t <= 21 * 60; t += 45) {
      const busy = ((day.getDate() * 5 + t / 45) % 7 === 0)
      out.push({ t, busy })
    }
    return out
  }

  /* ===== بدء الرحلات ===== */
  function startGift(type, pkg) {
    state.page = 'gift'
    state.gstep = type ? 1 : 0
    state.gtype = type
    state.gpkg = pkg
    state.done = false
    state.ref = null
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  function startBook(pkgId) {
    state.page = 'book'
    state.bk = { step: 0, pkg: pkgId, branch: state.siteBranch || null, dayIdx: null, period: 'all', time: null, notes: '', pay: null, done: false, ref: null }
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  function backToPackages() {
    state.page = 'packages'
    state.done = false
    scrollTo({ top: 0 })
  }

  function setBranch(id) {
    state.siteBranch = id
    try { localStorage.setItem(STORAGE_KEY, id) } catch { /* التخزين غير متاح */ }
  }

  return {
    state, TODAY,
    pkgOf, brOf,
    packages,
    filteredPkgs,
    gCanNext, gNextLabel,
    bkCanNext, bkNextLabel,
    bkDays, bkSlots,
    startGift, startBook, backToPackages, setBranch,
  }
}
