import { authFetch } from '@/services/apiClient'

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

/*
  الموظفون والأوقات المتاحة عبارة عن نداءات عامة (بدون تسجيل دخول)
  وبترجع array خام مباشرة، بعكس باقي الـ APIs اللي بترجع {status,data}.
*/
export async function fetchStaff({ branchId, serviceId }) {
  const params = new URLSearchParams({ branch_id: branchId ?? 0, service_id: serviceId ?? 0 })
  const response = await fetch(`${apiBaseUrl}/staff?${params}`, {
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error('تعذّر تحميل قائمة الموظفين')
  return response.json()
}

export async function fetchAvailableTimes({ date, staffId, durationMin }) {
  const params = new URLSearchParams({ Increasing: durationMin ?? 30 })
  const response = await fetch(`${apiBaseUrl}/available/${date}/${staffId}?${params}`, {
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error('تعذّر تحميل الأوقات المتاحة')
  return response.json()
}

export async function createBooking(payload) {
  return authFetch('/mobile/cart/bookings', { method: 'POST', body: payload })
}

export async function createPackageBooking(payload) {
  return authFetch('/mobile/cart/packages', { method: 'POST', body: payload })
}

export async function initPayment(gateway) {
  return authFetch('/payments/init', { method: 'POST', body: { gateway, page_type: 'cart' } })
}
