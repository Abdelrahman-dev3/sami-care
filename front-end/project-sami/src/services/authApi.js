const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

async function request(path, body) {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok || payload?.status === false) {
    throw new Error(payload?.message || 'حدث خطأ، حاول مرة أخرى')
  }

  return payload.data
}

export const sendRegisterOtp = (username, mobile) => request('/register', { username, mobile })
export const verifyRegisterOtp = (mobile, otp) => request('/verify-register-otp', { mobile, otp })

export const sendLoginOtp = mobile => request('/login', { mobile })
export const verifyLoginOtp = (mobile, otp) => request('/verify-login-otp', { mobile, otp })

export async function logout(token) {
  await fetch(`${apiBaseUrl}/logout`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
