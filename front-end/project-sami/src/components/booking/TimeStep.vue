<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useBooking, fmtTimeStr, fmtDur } from '@/composables/useBooking'
import { fetchAvailableTimes } from '@/services/bookingApi'

const AR_DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
const AR_MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']

const { state, selSvcs, totalDur, setTime } = useBooking()

const TODAY = new Date()
TODAY.setHours(0, 0, 0, 0)

const calStart = ref(new Date(TODAY))
const slotsByService = reactive({})     // serviceId -> array of "HH:mm"
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
    ? `${d[0].getDate()} – ${d[6].getDate()} ${AR_MONTHS[d[0].getMonth()]}`
    : `${d[0].getDate()} ${AR_MONTHS[d[0].getMonth()]} – ${d[6].getDate()} ${AR_MONTHS[d[6].getMonth()]}`
})

const isPast = d => d < TODAY
const isSel = d => state.date && d.getTime() === state.date.getTime()

function shiftCal(n) {
  const d = new Date(calStart.value)
  d.setDate(d.getDate() + n)
  calStart.value = d
}

function toDateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function pickDate(d) {
  if (isPast(d)) return
  state.date = d
  state.time = {}
}

async function loadSlots(service) {
  const emp = state.emp[service.id]
  if (!state.date || !emp) return
  loadingByService[service.id] = true
  try {
    const times = await fetchAvailableTimes({ date: toDateKey(state.date), staffId: emp.id, durationMin: service.dur })
    slotsByService[service.id] = Array.isArray(times) ? times : []
  } catch {
    slotsByService[service.id] = []
  } finally {
    loadingByService[service.id] = false
  }
}

watch(() => state.date, () => selSvcs.value.forEach(loadSlots))
watch(() => selSvcs.value.map(s => `${s.id}:${state.emp[s.id]?.id}`), () => selSvcs.value.forEach(loadSlots))

const dateTitle = computed(() => (state.date ? `${AR_DAYS[state.date.getDay()]} ${state.date.getDate()} ${AR_MONTHS[state.date.getMonth()]} ${state.date.getFullYear()}` : 'اختر تاريخًا من التقويم'))
</script>

<template>
  <div class="panel-head"><h1>اختر الوقت المناسب لك</h1><p>سيتم عرض الأوقات المتاحة فعليًا حسب توفر كل موظف — اختر وقتًا لكل خدمة</p></div>

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
    <div class="date-line">📅 {{ dateTitle }}</div>

    <div v-for="s in selSvcs" :key="s.id" class="card detail-card" style="margin-top:14px">
      <h4>{{ s.name }} <small style="font-weight:400;color:var(--mute)">مع {{ state.emp[s.id]?.name || '—' }}</small></h4>

      <div v-if="loadingByService[s.id]" class="empty-hint">جاري تحميل الأوقات المتاحة...</div>
      <div v-else-if="!slotsByService[s.id]?.length" class="empty-hint">لا توجد أوقات متاحة لهذا اليوم</div>
      <div v-else class="slots">
        <button v-for="t in slotsByService[s.id]" :key="t" class="slot" :class="{ sel: state.time[s.id] === t }" @click="setTime(s.id, t)">
          {{ fmtTimeStr(t) }}
        </button>
      </div>
    </div>
  </template>
</template>
