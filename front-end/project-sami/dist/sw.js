/* Build replaces this marker. Navigations and API responses are never cached. */
const CACHE_PREFIX = 'sami-pwa-';
const CACHE_NAME = CACHE_PREFIX + 'a1f54a48bf9d64fa';
const OFFLINE_URL = '/pwa/offline.html';
const PRECACHE = [OFFLINE_URL, '/pwa/icon-192.png', '/pwa/icon-512.png', '/pwa/icon-maskable-512.png', '/pwa/apple-touch-icon.png'];
const APP_PATH = /^\/(?:$|index\.html$|(?:services|blog)(?:\/[^/]+)?\/?$|(?:booking|booking-receipt|store|gifts|packages-gifts|branches|contact|gift-recipient|account|terms|privacy-policy|page-about|home-service|cafe)\/?$|(?:booking|services|store|gifts|packages-gifts|branches|contact|gift-recipient|about|blog)\.html$|TermsAndConditions$|mobile\/(?:index(?:\.dynamic)?\.html)?$)/;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // A failed precache leaves the previous worker active.
    await cache.addAll(PRECACHE.map(url => new Request(url, { cache: 'reload' })));
  })());
  // Let updates wait until existing windows close; never reload an active checkout.
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || request.headers.has('authorization')) return;
  // Only known frontend pages get a navigation fallback. APIs, admin, payment
  // callbacks and external gateways are handled directly by the browser.
  if (request.mode === 'navigate' && APP_PATH.test(url.pathname)) {
    event.respondWith(fetch(request).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(OFFLINE_URL)) || Response.error();
    }));
    return;
  }
  if (!url.search && PRECACHE.includes(url.pathname)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(url.pathname)) || fetch(request);
    })());
  }
});