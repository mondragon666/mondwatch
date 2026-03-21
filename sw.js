const CACHE_NAME = 'mondwatch-v1';
const OFFLINE_URLS = ['./dashboard.html'];

// Install — cache the shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network first, fallback to cache (dashboard needs live data)
self.addEventListener('fetch', event => {
  // Only cache GET requests for our own pages
  if (event.request.method !== 'GET') return;
  
  // For API calls, always go network
  const url = new URL(event.request.url);
  if (url.hostname.includes('polymarket') || url.hostname.includes('etherscan')) return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
