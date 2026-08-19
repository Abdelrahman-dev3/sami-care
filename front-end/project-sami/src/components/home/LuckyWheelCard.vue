<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchWheelPrizes } from '@/services/wheelApi'

const props = defineProps({
  prizes: {
    type: Array,
    default: () => [],
  },
})

const fetchedPrizes = ref([])

onMounted(async () => {
  if (props.prizes.length) return
  try {
    fetchedPrizes.value = await fetchWheelPrizes()
  } catch (err) {
    console.error('LuckyWheelCard prizes error:', err)
  }
})

const fallbackSegments = [
  { lines: ['هدية', 'مجانية'], color: '#171310' },
  { lines: ['خصم', '20%'], color: '#caa565' },
  { lines: ['جلسة', 'مجانية'], color: '#171310' },
  { lines: ['200 نقطة', 'ولاء'], color: '#caa565' },
  { lines: ['خصم', '15%'], color: '#171310' },
  { lines: ['خصم', '10%'], color: '#caa565' },
]

const segments = computed(() => {
  const source = (props.prizes.length ? props.prizes : fetchedPrizes.value).filter(Boolean)

  if (!source.length) return fallbackSegments

  return source.map((item, index) => {
    const reward = Number(item.reward_value ?? item.value ?? item.amount ?? 0)
    const label = item.type || item.name || `جائزة ${index + 1}`
    const lines = [
      label,
      reward > 0 ? `${reward} ${item.unit || 'ريال'}` : 'مكافأة',
    ]

    return {
      lines: lines.filter(Boolean),
      color: index % 2 === 0 ? '#171310' : '#caa565',
    }
  })
})

const segAngle = computed(() => 360 / segments.value.length)
const CX = 100, CY = 100, R = 92, LABEL_R = 58

function polar(radius, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) }
}

function wedgePath(startAngle, endAngle) {
  const p1 = polar(R, startAngle)
  const p2 = polar(R, endAngle)
  return `M ${CX} ${CY} L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${R} ${R} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} Z`
}

const wedges = computed(() =>
  segments.value.map((seg, i) => {
    const start = i * segAngle.value
    const end = start + segAngle.value
    const mid = start + segAngle.value / 2
    const labelPos = polar(LABEL_R, mid)
    return { ...seg, path: wedgePath(start, end), labelPos }
  })
)

const rotation = ref(0)
const spinning = ref(false)
const result = ref(null)

function spin() {
  if (spinning.value) return
  spinning.value = true
  result.value = null

  const currentSegments = segments.value
  if (!currentSegments.length) {
    spinning.value = false
    return
  }

  const idx = Math.floor(Math.random() * currentSegments.length)
  const targetCenter = idx * segAngle.value + segAngle.value / 2
  const extraTurns = 6
  const currentMod = rotation.value % 360
  rotation.value += (360 - currentMod) + extraTurns * 360 + (360 - targetCenter)

  setTimeout(() => {
    spinning.value = false
    result.value = currentSegments[idx].lines.join(' ')
  }, 4200)
}
</script>

<template>
  <section data-reveal class="home-section container">
    <div class="lucky-wheel-card">
      <span class="lucky-wheel-card__badge">✨ عجلة الحظ</span>

      <div class="lucky-wheel-card__wheel-wrap">
        <div class="lucky-wheel-card__pointer" aria-hidden="true"></div>
        <svg
          class="lucky-wheel-card__wheel"
          viewBox="0 0 200 200"
          :style="{ transform: `rotate(${rotation}deg)` }"
        >
          <g v-for="(w, i) in wedges" :key="i">
            <path :d="w.path" :fill="w.color" stroke="#0c0a08" stroke-width="1" />
            <text
              v-for="(line, li) in w.lines"
              :key="li"
              :x="w.labelPos.x"
              :y="w.labelPos.y + li * 11 - (w.lines.length - 1) * 5.5"
              text-anchor="middle"
              dominant-baseline="middle"
              class="lucky-wheel-card__label"
            >{{ line }}</text>
          </g>
          <circle :cx="CX" :cy="CY" r="17" fill="url(#hubGradient)" stroke="#4a3814" stroke-width="2" />
          <defs>
            <radialGradient id="hubGradient" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#f4d99a" />
              <stop offset="55%" stop-color="#c9a565" />
              <stop offset="100%" stop-color="#8a6a2e" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div class="lucky-wheel-card__content">
        <h3>جرّب حظك<br />واربح مكافآت فورية!</h3>
        <p>خصومات وجوائز متنوعة بانتظارك</p>
        <button class="lucky-wheel-card__cta" :disabled="spinning" @click="spin">
          <span>{{ spinning ? 'جاري التدوير...' : 'دوّس العجلة الآن' }}</span>
          <i>←</i>
        </button>
        <Transition name="fade">
          <p v-if="result" class="lucky-wheel-card__result">🎉 مبروك! ربحت: <b>{{ result }}</b></p>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active { transition: opacity .4s ease, transform .4s ease }
.fade-enter-from { opacity: 0; transform: translateY(6px) }
</style>
