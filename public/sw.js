// ============================================================
// ESCORTS HUB NOIDA — HIGH-SPEED OFFLINE & SLOW-NETWORK SERVICE WORKER
// Enables instant 0ms load times on 2G/3G and spotty mobile networks
// ============================================================

const CACHE_NAME = 'escorts-hub-v1';
const CORE_STATIC_ASSETS = [
  '/',
  '/favicon.svg',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/manifest.json',
  '/images/hero-hot-model-bg-mobile.webp'
];

// 1. Install Event: Pre-cache essential application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clear legacy obsolete caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Intelligent Network-Aware Caching Strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests and external API endpoints (e.g. script.google.com, googletagmanager)
  if (req.method !== 'GET' || !url.origin.includes(self.location.origin)) {
    return;
  }

  // A. Static Assets: JS, CSS, WebP, SVG, WOFF2 (Cache-First Strategy for 0ms loads)
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    /\.(webp|jpg|png|svg|ico|css|js|woff|woff2)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(req).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // If offline and image, return nothing or placeholder
          return cachedResponse;
        });
      })
    );
    return;
  }

  // B. HTML Navigation Requests (Network-First with Fast 1.8s Timeout & Cache Fallback)
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      Promise.race([
        fetch(req).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, responseClone);
            });
          }
          return networkResponse;
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Slow Network Timeout')), 1800))
      ]).catch(() => {
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return caches.match('/');
        });
      })
    );
  }
});
