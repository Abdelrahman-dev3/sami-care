import { reactive, watch } from 'vue'
import { AR_EN } from '@/i18n/staticDict'

/*
  تبديل لغة الواجهة (عربي / إنجليزي).

  الاتجاه واللغة بيتغيّروا على <html> فورًا، والاختيار بيتخزّن.
  النصوص الديناميكية (القادمة من الـ API) متغيّرة بالفعل عبر
  frezka-localization/localizeField ولا علاقة لها بالملف ده.

  النصوص الثابتة (chrome) بتتترجم تلقائيًا عبر مسح شجرة الـ DOM ومطابقة
  كل عقدة نص/خاصية (placeholder/title/aria-label/alt) بمطابقة تامة
  (exact match) مع مفاتيح القاموس في src/i18n/staticDict.js — أي نص
  مش موجود كمفتاح فيه (زي البيانات الديناميكية القادمة من الـ API) ما
  بيتلمسش خالص، فمفيش خطر إنه يبوّظ داتا حقيقية بالغلط.

  الآلية: MutationObserver على document.body يمسك أي عقدة جديدة تتضاف
  (أول تحميل، تنقّل بين الصفحات، v-if/v-for) ويترجمها لحظة ظهورها.
  عند تبديل اللغة، بنعيد مسح الصفحة كاملة عشان نرجّع كل عقدة اتترجمت
  قبل كده لأصلها العربي أو نطبّق الإنجليزي عليها من تاني.
*/

const KEY = 'samiSiteLang'
const ATTRS = ['placeholder', 'title', 'aria-label', 'alt']

function read() {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'en' || v === 'ar' ? v : 'ar'
  } catch { return 'ar' }
}

const state = reactive({ lang: read() })

function apply(lang) {
  const el = document.documentElement
  el.setAttribute('lang', lang)
  el.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl')
  try { localStorage.setItem(KEY, lang) } catch { /* التخزين ممكن يكون مقفول */ }
}

/* أصل كل عقدة نص/خاصية اتترجمت — بيفضل موجود طول عمر العقدة نفسها فقط
   (WeakMap)، فلو العقدة اتشالت من الـ DOM (v-if) وترجعت تاني، Vue بيعمل
   عقدة جديدة تمامًا فبتترجم من الأول من غير أي بقايا قديمة. */
const textOriginal = new WeakMap()
const attrOriginal = new WeakMap()

const textNodeFilter = {
  acceptNode(node) {
    const p = node.parentElement
    if (!p) return NodeFilter.FILTER_REJECT
    const tag = p.tagName
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'INPUT') return NodeFilter.FILTER_REJECT
    return NodeFilter.FILTER_ACCEPT
  },
}

function translateTextNode(node) {
  if (!textOriginal.has(node)) {
    const trimmed = (node.data || '').trim()
    if (!trimmed || !Object.prototype.hasOwnProperty.call(AR_EN, trimmed)) return
    textOriginal.set(node, node.data)
  }
  const orig = textOriginal.get(node)
  const trimmedOrig = orig.trim()
  const translated = AR_EN[trimmedOrig]
  node.data = state.lang === 'en' && translated ? orig.replace(trimmedOrig, translated) : orig
}

function translateAttrs(el) {
  if (!el.getAttribute) return
  let store = attrOriginal.get(el)
  ATTRS.forEach(attr => {
    if (!el.hasAttribute(attr)) return
    if (!store) { store = {}; attrOriginal.set(el, store) }
    if (store[attr] === undefined) {
      const val = el.getAttribute(attr)
      if (!Object.prototype.hasOwnProperty.call(AR_EN, val)) return
      store[attr] = val
    }
    const orig = store[attr]
    el.setAttribute(attr, state.lang === 'en' && AR_EN[orig] ? AR_EN[orig] : orig)
  })
}

function processNode(node) {
  if (node.nodeType === Node.TEXT_NODE) { translateTextNode(node); return }
  if (node.nodeType !== Node.ELEMENT_NODE) return
  translateAttrs(node)
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, textNodeFilter)
  let t
  while ((t = walker.nextNode())) translateTextNode(t)
  node.querySelectorAll?.('[placeholder],[title],[aria-label],[alt]').forEach(translateAttrs)
}

if (typeof document !== 'undefined') {
  apply(state.lang)
  new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(processNode))
  }).observe(document.documentElement, { childList: true, subtree: true })

  watch(() => state.lang, lang => { apply(lang); processNode(document.body) })
}

export function useLanguage() {
  const toggle = () => { state.lang = state.lang === 'ar' ? 'en' : 'ar' }
  const t = key => AR_EN[key] ? (state.lang === 'en' ? AR_EN[key] : key) : key
  return { state, toggle, t }
}
