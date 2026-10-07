const CACHE_NAME = 'legado-digital-v1';
const urlsToCache = [
  './index.html',
  './app.js',
  './index.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Devuelve del cache si existe
        }
        return fetch(event.request); // Si no, busca en la red
      })
  );
});
