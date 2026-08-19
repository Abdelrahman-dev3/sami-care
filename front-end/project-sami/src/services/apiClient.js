import { useAuth } from '@/composables/useAuth'

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

/*
  fetch موثّق — بيحقن Authorization: Bearer <token> تلقائيًا من useAuth،
  تستخدمه كل نداءات الحجز اللي محتاجة تسجيل دخول.
*/
export async function authFetch(path, options = {}) {
  const { token } = useAuth()

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok || payload?.success === false || payload?.status === false) {
    throw new Error(payload?.message || 'حدث خطأ، حاول مرة أخرى')
  }

  return payload
}
