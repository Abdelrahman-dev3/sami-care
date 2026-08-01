const appBaseUrl = import.meta.env.BASE_URL || '/'
const normalizedBaseUrl = appBaseUrl.endsWith('/') ? appBaseUrl : `${appBaseUrl}/`
const absoluteUrlPattern = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i

export function assetPath(path) {
  if (!path || absoluteUrlPattern.test(path) || path.startsWith('data:') || path.startsWith('#')) {
    return path
  }

  return `${normalizedBaseUrl}${path.replace(/^\/+/, '')}`
}
