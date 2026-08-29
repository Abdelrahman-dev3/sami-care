<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { useBooking } from '@/composables/useBooking'
import { useServiceLocation } from '@/composables/useServiceLocation'
import { fetchStaff } from '@/services/bookingApi'
import { categoryAccent, categoryIconKey, categoryIconPath } from '@/utils/giftIcons'
import Skeleton from '@/components/common/SkeletonLoader.vue'

const { state, selSvcs, setEmployee } = useBooking()
const { current } = useServiceLocation()

const staffByService = reactive({})   // serviceId -> array of {id, name}
const loadingByService = reactive({})

const AUTO_LIST = [
  'توفير الوقت',
  'أفضل تقييم متاح',
  'منع أي تعارض في المواعيد',
]
const MANUAL_LIST = [
  'اختر الموظف الذي تفضّله لكل خدمة',
  'تحكم كامل في فريق جلستك',
]

function employeeName(u) {
  return [u.first_name, u.last_name].filter(Boolean).join(' ') || u.username || 'موظف'
}

function assignAutoStaff() {
  if (state.mode !== 'auto') return
  selSvcs.value.forEach(s => {
    const list = staffByService[s.id]
    if (list?.length && !state.emp[s.id]) setEmployee(s.id, list[0])
  })
}

function chooseMode(mode) {
  state.mode = mode
  assignAutoStaff()
}

function iconKeyForService(service) {
  return service.icon || categoryIconKey(service.categoryId)
}

function serviceStyle(service) {
  return { '--acc': categoryAccent(iconKeyForService(service)) }
}

function isEmployeeSelected(serviceId, employee) {
  return String(state.emp[serviceId]?.id ?? '') === String(employee.id ?? '')
}

function selectEmployee(serviceId, employee) {
  state.mode = 'manual'
  setEmployee(serviceId, employee)
}

async function loadStaff(service) {
  if (staffByService[service.id]) return
  loadingByService[service.id] = true
  try {
    const branchId = current.value?.home ? 0 : current.value?.id
    const rows = await fetchStaff({ branchId, serviceId: service.id })
    const list = (Array.isArray(rows) ? rows : []).map(u => ({ id: u.id, name: employeeName(u) }))
    staffByService[service.id] = list
    assignAutoStaff()
  } catch {
    staffByService[service.id] = []
  } finally {
    loadingByService[service.id] = false
  }
}

function loadAll() {
  selSvcs.value.forEach(loadStaff)
}

onMounted(loadAll)
watch(() => selSvcs.value.map(s => s.id), loadAll)
watch(() => state.mode, assignAutoStaff)
</script>

<template>
  <div class="panel-head"><h1>اختر طريقة اختيار الموظف</h1><p>يمكنك اختيار الموظف بنفسك لكل خدمة أو ترك الأمر لنا لاختيار الأفضل لك</p></div>

  <div class="mode-grid">
    <div class="mode dark" :class="{ sel: state.mode === 'auto' }" @click="chooseMode('auto')">
      <span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></span>
      <span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6"/></svg></span>
      <h3>اختيار تلقائي</h3><div class="sub-t">سنختار لك أفضل فريق متاح</div>
      <span class="flag">✨ الأسرع والأسهل</span>
      <ul>
        <li v-for="(x, i) in AUTO_LIST" :key="i"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6L9 17l-5-5"/></svg> {{ x }}</li>
      </ul>
    </div>
    <div class="mode" :class="{ sel: state.mode === 'manual' }" @click="chooseMode('manual')">
      <span class="chk"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></span>
      <span class="mi"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
      <h3>اختيار موظف محدد</h3><div class="sub-t">اختر الموظف المناسب لكل خدمة</div>
      <span class="flag">🎯 تحكم كامل</span>
      <ul>
        <li v-for="(x, i) in MANUAL_LIST" :key="i"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6L9 17l-5-5"/></svg> {{ x }}</li>
      </ul>
    </div>
  </div>

  <div v-if="state.mode === 'manual'" class="emp-section">
    <div v-for="s in selSvcs" :key="s.id" class="emp-row" :style="serviceStyle(s)">
      <div class="emp-cat">
        <span class="cat-ico"><svg viewBox="0 0 24 24" aria-hidden="true" v-html="categoryIconPath(iconKeyForService(s))"></svg></span>
        <span class="emp-cat__info">
          <b>{{ s.name }}</b>
          <small>{{ s.categoryName }}</small>
        </span>
      </div>
      <div v-if="loadingByService[s.id]" class="empty-hint">
        <Skeleton height="44px" border-radius="8px" />
      </div>
      <div v-else-if="!staffByService[s.id]?.length" class="empty-hint">لا يوجد موظفون متاحون لهذه الخدمة في هذا الفرع</div>
      <div v-else class="emp-list">
        <button v-for="e in staffByService[s.id]" :key="e.id" type="button" class="emp" :class="{ sel: isEmployeeSelected(s.id, e) }" @click.stop="selectEmployee(s.id, e)">
          <span class="chk"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></span>
          <span class="av" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
          <b>{{ e.name }}</b>
        </button>
      </div>
    </div>
  </div>

  <div v-if="state.mode === 'auto'" class="j-note card" style="display:flex;gap:16px;align-items:center;padding:20px 24px;border-color:var(--line)">
    <span style="flex:none;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--gold-bright),var(--gold));color:var(--ink)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg></span>
    <p style="font-size:13.5px;color:#5c5442;line-height:1.9"><b style="color:var(--ink)">تم اختيار أفضل موظف متاح لكل خدمة تلقائيًا.</b> هتقدر تشوف وتعدّل الأوقات في الخطوة الجاية.</p>
  </div>
</template>
