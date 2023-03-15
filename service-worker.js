const cacheName = 'nd-cv-v4';
const filesToCache = [
  '/cv',
  '/cv/',
  '/cv/index.html',
  '/cv/assets/index.js',
  '/cv/assets/style.css',
  '/cv/components/Contacts/images/email.svg',
  '/cv/components/Contacts/images/linkedin.svg',
  '/cv/components/Job/images/Apple.svg',
  '/cv/components/Job/images/JohnLewis.svg',
  '/cv/components/Job/images/Marks&Spencer.svg',
];

self.addEventListener('install', (event) => { // eslint-disable-line no-restricted-globals
  console.log('Service worker is installing');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Service worker is adding files to cache');
      return cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener('activate', (event) => { // eslint-disable-line no-restricted-globals
  console.log('Service worker is activating');

  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map((key) => {
      if (key !== cacheName) {
        console.log('Service worker is removing old cache', key);
        return caches.delete(key);
      }
      return caches;
    })))
      .catch(error => console.log('Service worker activation failed', error)),
  );
});

self.addEventListener('fetch', (event) => { // eslint-disable-line no-restricted-globals
  console.log('Service worker intercepted a fetch');

  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request)),
  );
});
