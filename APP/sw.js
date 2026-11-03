const CACHE_NAME = 'legado-digital-v1.3';
const urlsToCache = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './manifest.json',
  './icon.png',
  './icon-512.png',
  './mapa-recuperacion.html',
  './core/jspdf.umd.min.js',
  './core/html2canvas.min.js',
  './core/crypto.js',
  './core/helpers.js',
  './core/state.js',
  './core/router.js',
  './modules/print.js',
  './modules/dashboard.js',
  './modules/checklist.js',
  './modules/inventario.js',
  './modules/export-import.js',
  './modules/pdf-generator.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});
