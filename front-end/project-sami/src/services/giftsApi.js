import { authFetch } from '@/services/apiClient'

export const createGiftCard = payload => authFetch('/mobile/cart/gift-cards', { method: 'POST', body: payload })
