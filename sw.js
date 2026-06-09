// Offline cache for the training plan PWA.
// Bump CACHE when you republish updated pages so phones fetch the new version.
const CACHE = 'trainer-2026-06-08';
const ASSETS = [
  './', 'index.html', 'program.html', 'meals.html', 'manifest.webmanifest',
  'icon-180.png', 'icon-512.png', 'icon-meals-180.png', 'icon-meals-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first for pages (so updates show when online), cache fallback when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return resp;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
