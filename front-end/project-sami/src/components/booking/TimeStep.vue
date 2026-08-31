<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useBooking, fmtTimeStr, fmtDur } from '@/composables/useBooking'
import { fetchAvailableTimes } from '@/services/bookingApi'
import { categoryAccent, categoryIconKey, categoryIconPath } from '@/utils/giftIcons'
import Skeleton from '@/components/common/SkeletonLoader.vue'

const AR_DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
const AR_MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']

const { state, selSvcs, totalDur, setTime } = useBooking()

const TODAY = new Date()
TODAY.setHours(0, 0, 0, 0)

const calStart = ref(new Date(TODAY))
const slotsByService = reactive({})
const loadingByService = reactive({})

const days = computed(() =>
  Array.from({ length: 7 }, (_, i) => {
    const d = new Date(calStart.value)
    d.setDate(d.getDate() + i)
    return d
  })
)

const atToday = computed(() => calStart.value.getTime() <= TODAY.getTime())

const rangeLabel = computed(() => {
  const d = days.value
  return d[0].getMonth() === d[6].getMonth()
    ? `${d[0].getDate()} - ${d[6].getDate()} ${AR_MONTHS[d[0].getMonth()]}`
    : `${d[0].getDate()} ${AR_MONTHS[d[0].getMonth()]} - ${d[6].getDate()} ${AR_MONTHS[d[6].getMonth()]}`
})

const isPast = d => d < TODAY
const isSel = d => state.date && d.getTime() === state.date.getTime()

const serviceGroups = computed(() => {
  const groups = new Map()
  selSvcs.value.forEach(service => {
    const id = String(service.categoryId ?? service.categoryName ?? service.id)
    if (!groups.has(id)) {
      groups.set(id, {
        id,
        name: service.categoryName || service.name,
        icon: service.icon || categoryIconKey(service.categoryId),
        services: [],
      })
    }
    groups.get(id).services.push(service)
  })
  return [...groups.values()]
})

const orderedServices = computed(() => serviceGroups.value.flatMap(group => group.services))
const firstService = computed(() => orderedServices.value[0] || null)
const firstGroup = computed(() => serviceGroups.value[0] || null)
const firstServiceTime = computed(() => firstService.value ? state.time[firstService.value.id] : '')

function shiftCal(n) {
  const d = new Date(calStart.value)
  d.setDate(d.getDate() + n)
  calStart.value = d
}

function toDateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function timeToMinutes(time) {
  if (!time || typeof time !== 'string') return null
  const [h, m] = time.split(':').map(Number)
  if (!Number.isFinite(h) || !Number.isFinite(m)) return null
  return h * 60 + m
}

function minutesToTime(minutes) {
  if (!Number.isFinite(minutes)) return ''
  const dayMinutes = 24 * 60
  const normalized = ((Math.round(minutes) % dayMinutes) + dayMinutes) % dayMinutes
  return `${String(Math.floor(normalized / 60)).padStart(2, '0')}:${String(normalized % 60).padStart(2, '0')}`
}

function normalizeSlots(slots) {
  return [...new Set((Array.isArray(slots) ? slots : []).filter(t => timeToMinutes(t) !== null))]
    .sort((a, b) => timeToMinutes(a) - timeToMinutes(b))
}

function clearTimesFrom(index) {
  orderedServices.value.slice(index).forEach(service => { delete state.time[service.id] })
}

function buildSequentialSchedule(startTime, { apply = false } = {}) {
  const cursorStart = timeToMinutes(startTime)
  const services = orderedServices.value
  if (!services.length || cursorStart === null) return { complete: false, rows: [], end: '' }

  let cursor = cursorStart
  const rows = []

  for (let i = 0; i < services.length; i++) {
    const service = services[i]
    const slots = normalizeSlots(slotsByService[service.id])
    const selected = i === 0
      ? (slots.includes(startTime) ? startTime : slots.find(t => timeToMinutes(t) >= cursor))
      : slots.find(t => timeToMinutes(t) >= cursor)

    if (!selected) {
      if (apply) clearTimesFrom(i)
      const lastRow = rows[rows.length - 1]
      return { complete: false, rows, missing: service, end: lastRow?.end || '' }
    }

    const start = timeToMinutes(selected)
    const end = start + (Number(service.dur) || 0)
    rows.push({ service, start: selected, end: minutesToTime(end), expected: minutesToTime(cursor), shifted: start > cursor })

    if (apply) setTime(service.id, selected)
    cursor = end
  }

  return { complete: true, rows, end: minutesToTime(cursor) }
}

function syncSequentialTimes() {
  if (!firstServiceTime.value) return
  buildSequentialSchedule(firstServiceTime.value, { apply: true })
}

function chooseInitialTime(time) {
  buildSequentialSchedule(time, { apply: true })
}

function groupStyle(group) {
  return { '--acc': categoryAccent(group.icon) }
}

function groupDuration(group) {
  return group.services.reduce((total, service) => total + (Number(service.dur) || 0), 0)
}

function groupEmployee(group) {
  const selected = group.services.map(service => state.emp[service.id]).filter(Boolean)
  if (!selected.length) return null
  const first = selected[0]
  return selected.every(employee => String(employee.id) === String(first.id)) ? first : first
}

function groupServicesLabel(group) {
  return `${group.services.length} ${group.services.length === 1 ? 'خدمة' : 'خدمات'}`
}

function groupServiceNames(group) {
  return group.services.map(service => service.name).join('، ')
}

function pickDate(d) {
  if (isPast(d)) return
  state.date = d
  state.time = {}
  Object.keys(slotsByService).forEach(key => { delete slotsByService[key] })
}

async function loadSlots(service) {
  const emp = state.emp[service.id]
  if (!state.date || !emp) {
    delete slotsByService[service.id]
    return
  }

  const dateKey = toDateKey(state.date)
  loadingByService[service.id] = true
  try {
    const times = await fetchAvailableTimes({ date: dateKey, staffId: emp.id, durationMin: service.dur })
    if (state.date && toDateKey(state.date) === dateKey && state.emp[service.id]?.id === emp.id) {
      slotsByService[service.id] = normalizeSlots(times)
      syncSequentialTimes()
    }
  } catch {
    slotsByService[service.id] = []
    syncSequentialTimes()
  } finally {
    loadingByService[service.id] = false
  }
}

watch(() => state.date, () => selSvcs.value.forEach(loadSlots))
watch(() => selSvcs.value.map(s => `${s.id}:${state.emp[s.id]?.id}`), () => selSvcs.value.forEach(loadSlots))
onMounted(() => selSvcs.value.forEach(loadSlots))

const dateTitle = computed(() => (
  state.date ? `${AR_DAYS[state.date.getDay()]} ${state.date.getDate()} ${AR_MONTHS[state.date.getMonth()]} ${state.date.getFullYear()}` : 'اختر تاريخًا من التقويم'
))

const firstServiceLoading = computed(() => firstService.value && loadingByService[firstService.value.id])
const initialSlots = computed(() => firstService.value ? normalizeSlots(slotsByService[firstService.value.id]) : [])
const allScheduleSlotsLoaded = computed(() =>
  !!state.date && orderedServices.value.every(service => Array.isArray(slotsByService[service.id]) && !loadingByService[service.id])
)
const schedulingLoading = computed(() =>
  !!firstServiceTime.value && orderedServices.value.some(service => loadingByService[service.id] || !Array.isArray(slotsByService[service.id]))
)
const unscheduledService = computed(() =>
  firstServiceTime.value ? orderedServices.value.find(service => !state.time[service.id]) : null
)
const bestInitialSlot = computed(() => {
  if (!allScheduleSlotsLoaded.value) return ''
  return initialSlots.value.find(time => buildSequentialSchedule(time).complete) || ''
})

const sessionPlan = computed(() => {
  const rows = []
  let previousEnd = null

  serviceGroups.value.forEach(group => {
    const starts = group.services.map(service => timeToMinutes(state.time[service.id]))
    const complete = starts.every(start => start !== null)
    const firstStart = starts[0]

    if (!complete) {
      rows.push({
        type: 'group',
        key: `group-${group.id}`,
        group,
        name: group.name,
        icon: group.icon,
        style: groupStyle(group),
        duration: groupDuration(group),
        services: group.services,
        employee: groupEmployee(group),
        pending: true,
      })
      return
    }

    if (previousEnd !== null && firstStart > previousEnd) {
      rows.push({
        type: 'gap',
        key: `gap-${rows.length}`,
        start: minutesToTime(previousEnd),
        end: minutesToTime(firstStart),
        duration: firstStart - previousEnd,
      })
    }

    const lastService = group.services[group.services.length - 1]
    const lastStart = timeToMinutes(state.time[lastService.id])
    const end = lastStart + (Number(lastService.dur) || 0)

    rows.push({
      type: 'group',
      key: `group-${group.id}`,
      group,
      name: group.name,
      icon: group.icon,
      style: groupStyle(group),
      start: minutesToTime(firstStart),
      end: minutesToTime(end),
      duration: groupDuration(group),
      services: group.services,
      employee: groupEmployee(group),
      pending: false,
    })
    previousEnd = end
  })

  return rows
})

const sessionEndTime = computed(() => {
  const groups = sessionPlan.value.filter(item => item.type === 'group' && !item.pending)
  const lastGroup = groups[groups.length - 1]
  return lastGroup?.end || ''
})
</script>

<template>
  <div class="panel-head">
    <h1>اختر وقت بداية الجلسة</h1>
    <p>اختر أول موعد فقط، وسيتم ترتيب باقي الأقسام تلقائيًا حسب مدة كل قسم والأوقات المتاحة.</p>
  </div>

  <div class="card branch-strip">
    <div class="bi"><b>ملخص جلستك</b><small>قبل اختيار الوقت</small></div>
    <div class="cells">
      <div class="cell"><b>{{ selSvcs.length }}</b>الخدمات</div>
      <div class="cell"><b>{{ fmtDur(totalDur) }}</b>المدة الإجمالية</div>
    </div>
  </div>

  <div class="card cal">
    <div class="cal-head">
      <button class="cal-nav" :disabled="atToday" @click="shiftCal(-7)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></button>
      <b>{{ rangeLabel }}</b>
      <button class="cal-nav" @click="shiftCal(7)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg></button>
    </div>
    <div class="cal-cells">
      <button v-for="(dt, i) in days" :key="i" :disabled="isPast(dt)"
              :class="{ sel: isSel(dt), avail: !isPast(dt) }" @click="pickDate(dt)">
        <span class="dow">{{ AR_DAYS[dt.getDay()].slice(0, 3) }}</span><span class="dnum">{{ dt.getDate() }}</span>
      </button>
    </div>
  </div>

  <div v-if="!state.date" class="empty-hint" style="margin-top:10px"><b>ابدأ باختيار التاريخ</b>اختر يومًا من التقويم لعرض الأوقات المتاحة</div>

  <template v-else>
    <div class="date-line">التاريخ: {{ dateTitle }}</div>

    <div class="card detail-card time-start-card" style="margin-top:14px">
      <h4>وقت بداية الجلسة <small style="font-weight:400;color:var(--mute)">سننسق باقي الأقسام بعده</small></h4>

      <div v-if="firstGroup" class="time-start-service" :style="groupStyle(firstGroup)">
        <span class="cat-ico"><svg viewBox="0 0 24 24" aria-hidden="true" v-html="categoryIconPath(firstGroup.icon)"></svg></span>
        <span class="time-start-copy">
          <b>{{ firstGroup.name }}</b>
          <small>{{ groupServicesLabel(firstGroup) }} - {{ groupServiceNames(firstGroup) }}</small>
        </span>
      </div>

      <div v-if="firstServiceLoading || (firstService && !Array.isArray(slotsByService[firstService.id]))" class="empty-hint">
        <Skeleton height="44px" border-radius="8px" />
      </div>
      <div v-else-if="!initialSlots.length" class="empty-hint">لا توجد أوقات متاحة لهذا اليوم</div>
      <div v-else class="slots initial-slots">
        <button v-for="t in initialSlots" :key="t" class="slot" :class="{ sel: firstServiceTime === t }" @click="chooseInitialTime(t)">
          <span v-if="bestInitialSlot === t" class="tag">الأفضل</span>
          {{ fmtTimeStr(t) }}
        </button>
      </div>

      <div v-if="bestInitialSlot && firstServiceTime !== bestInitialSlot" class="best-slot">
        <span>أفضل بداية متاحة اليوم: <b>{{ fmtTimeStr(bestInitialSlot) }}</b></span>
        <button @click="chooseInitialTime(bestInitialSlot)">اختيار</button>
      </div>
    </div>

    <div v-if="firstServiceTime" class="session-plan">
      <h4>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
        خطة تنفيذ الجلسة
      </h4>
      <div class="plan-track">
        <template v-for="item in sessionPlan" :key="item.key">
          <div v-if="item.type === 'gap'" class="plan-gap">
            <span>فاصل انتظار</span>
            <b>{{ fmtTimeStr(item.start) }} - {{ fmtTimeStr(item.end) }}</b>
            <small>{{ fmtDur(item.duration) }}</small>
          </div>
          <div v-else class="plan-item plan-item--group" :class="{ pending: item.pending }" :style="item.style">
            <span class="plan-icon"><svg viewBox="0 0 24 24" aria-hidden="true" v-html="categoryIconPath(item.icon)"></svg></span>
            <b>{{ item.name }}</b>
            <small>مع {{ item.employee?.name || '-' }}</small>
            <span class="t">{{ item.pending ? 'بانتظار وقت متاح' : `${fmtTimeStr(item.start)} - ${fmtTimeStr(item.end)}` }}</span>
            <small>{{ groupServicesLabel(item.group) }} · {{ fmtDur(item.duration) }}</small>
          </div>
        </template>
      </div>

      <div v-if="schedulingLoading" class="plan-note plan-note--pending">جاري تنسيق باقي الأقسام حسب الأوقات المتاحة.</div>
      <div v-else-if="unscheduledService" class="plan-note plan-note--warn">لم نجد وقتًا متاحًا لـ {{ unscheduledService.name }} بعد هذا الموعد. اختر بداية أبكر أو يومًا آخر.</div>
      <div v-else class="plan-note">تم تنسيق الجلسة تلقائيًا، والنهاية المتوقعة {{ fmtTimeStr(sessionEndTime) }}.</div>
    </div>
  </template>
</template>
