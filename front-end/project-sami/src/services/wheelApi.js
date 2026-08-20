import { useAuth } from '@/composables/useAuth'

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export async function fetchWheelInfo() {
  const response = await fetch(`${apiBaseUrl}/Home/wheel/prizes`, {
    headers: { Accept: 'application/json' },
  })

  const payload = await response.json()

  if (!response.ok || payload?.status === false) {
    throw new Error(payload?.message || 'Unable to load wheel prizes')
  }

  return payload.data || {}
}

export async function fetchWheelPrizes() {
  const data = await fetchWheelInfo()

  return data.prizes || []
}

export async function spinWheel() {
  const { token } = useAuth()

  const response = await fetch(`${apiBaseUrl}/Home/wheel/spin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
    },
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok && response.status !== 409) {
    throw new Error(payload?.message || 'Unable to spin the wheel')
  }

  return payload
}
