/* Service worker — offline cache for the NE/HIE MRI Consensus Score calculator */
const CACHE = 'hie-mri-score-v3';
const ASSETS = [
  './',
  './index.html',
  './predict.html',
  './manifest.webmanifest',
  './favicon.ico',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/maskable-192.png',
  './assets/icons/maskable-512.png',
  './assets/figs/fig01.jpg','./assets/figs/fig02.jpg','./assets/figs/fig03.jpg',
  './assets/figs/fig04.jpg','./assets/figs/fig05.jpg','./assets/figs/fig06.jpg',
  './assets/figs/fig07.jpg','./assets/figs/fig08.jpg','./assets/figs/fig09.jpg',
  './assets/figs/fig10.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isDoc = e.request.mode === 'navigate' || e.request.destination === 'document';
  if (isDoc) {
    // Network-first for pages so updates show immediately
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        c