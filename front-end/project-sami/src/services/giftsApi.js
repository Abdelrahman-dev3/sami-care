import { authFetch } from '@/services/apiClient'

export const createGiftCard = payload => authFetch('/mobile/cart/gift-cards', { method: 'POST', body: payload })

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export async function fetchGiftClaim(token) {
  const response = await fetch(`${apiBaseUrl}/gift-cards/claim/${encodeURIComponent(token)}`, { headers: { Accept: 'application/json' } })
  const payload = await response.json().catch(() => null)
  if (!response.ok || !payload?.data) throw new Error(payload?.message || 'Gift not found')
  return payload.data
}