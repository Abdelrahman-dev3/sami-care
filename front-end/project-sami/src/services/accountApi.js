import { authFetch } from '@/services/apiClient'

export async function fetchProfile() {
  return authFetch('/profile')
}

export async function updateProfile(data) {
  return authFetch('/profile/update', { method: 'POST', body: data })
}

export async function fetchAddresses() {
  return authFetch('/address-list')
}

export async function addAddress(data) {
  return authFetch('/add-address', { method: 'POST', body: data })
}

export async function editAddress(id, data) {
  return authFetch('/edit-address', { method: 'POST', body: { id, ...data } })
}

export async function removeAddress(id) {
  return authFetch(`/remove-address?id=${encodeURIComponent(id)}`)
}

export async function sendSupportMessage(message) {
  return authFetch('/contact', { method: 'POST', body: { message } })
}

export async function deleteAccount() {
  return authFetch('/delete-account', { method: 'POST' })
}
