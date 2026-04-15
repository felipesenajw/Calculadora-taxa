const cacheName = 'calc-taxa-v2';
const assets = ['./', './index.html'];

// Instalação: Guarda os ficheiros no cache
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// Responde mesmo sem internet
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
