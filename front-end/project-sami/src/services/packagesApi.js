const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export async function fetchPackages() {
  const response = await fetch(`${apiBaseUrl}/Home/packages`, {
    headers: { Accept: 'application/json' },
  })

  const payload = await response.json()

  if (!response.ok || payload?.status === false) {
    throw new Error(payload?.message || 'Unable to load packages')
  }

  return payload.data || []
}
