/* Service worker — offline cache for the NE/HIE MRI Consensus Score calculator
 *
 * v4 — bumped to purge caches holding the pre-correction calculator, in which
 * extent and laterality were collapsed into a single 0/1/2 choice per item.
 * Asset paths corrected to the repository root (the previous list pointed at
 * ./assets/icons/ and ./assets/figs/, which do not exist here, so addAll()
 * rejected and the install never completed).
 */
const CACHE = 'hie-mri-score-v4';
const ASSETS = [
  './',
  './index.html',
  './predict.html',
  './manifest.webmanifest',
  './manifest-predict.webmanifest',
  './favicon.ico',
  './favicon-16.png',
  './favicon-32.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './maskable-192.png',
  './maskable-512.png',
  './fig01.jpg','./fig02.jpg','./fig03.jpg','./fig04.jpg','./fig05.jpg',
  './fig06.jpg','./fig07.jpg','./fig08.jpg','./fig09.jpg','./fig10.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // cache each asset individually so one missing file cannot fail the install
      .then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isDoc = e.request.mode === 'navigate' || e.request.destination === 'document';

  if (isDoc) {
    // Network-first for pages, so a corrected calculator is picked up immediately
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for static assets (figures, icons, manifests)
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }))
  );
});
