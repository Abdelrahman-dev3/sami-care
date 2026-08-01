const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

async function request(path) {
  const response = await fetch(`${apiBaseUrl}/api${path}`, {
    headers: { Accept: 'application/json' },
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok || payload?.status === false) {
    throw new Error(payload?.message || 'Unable to load blog data')
  }

  return payload
}

export async function fetchBlogs(page = 1) {
  const params = new URLSearchParams({
    page: String(page),
    per_page: '9',
  })
  const payload = await request(`/blogs?${params.toString()}`)

  return {
    blogs: payload.data || [],
    pagination: payload.pagination || null,
  }
}

export async function fetchBlog(slug) {
  const payload = await request(`/blogs/${encodeURIComponent(slug)}`)

  return payload.data || null
}
