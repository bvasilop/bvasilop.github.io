const imagesToCache = [
  '/assets/images/angular-image.webp',
  '/assets/images/coffee.webp',
  '/assets/images/flickr.webp',
  '/assets/images/GrowWithGoogle.webp',
  '/assets/images/headshot.webp',
  '/assets/images/ilios.webp',
  '/assets/images/rainier.webp',
  '/assets/images/science-journal.webp',
  '/assets/images/tangletown-wordpress.webp',
  '/assets/images/vue-js.webp',
  '/assets/images/vue-pwa.webp',
  '/assets/images/gatsby-blog.webp',
  '/assets/images/grace-hopper.webp',
  '/assets/images/gwg-logo.webp',
  '/assets/images/IU-logo.webp',
  '/assets/images/IU-logo2.webp',
  '/assets/images/react-flashcard.webp',
  '/assets/images/react-indecision.webp',
  '/assets/images/react-note.webp',
  '/assets/images/react-unsplash-app.webp',
  '/assets/images/SU-logo.webp',
  '/assets/images/SU-logo2.webp',
  '/assets/images/udacity-diploma.webp',
  '/assets/images/youtube.webp',
  '/favicon.ico',
];

const filesToCache = [
  '.',
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/main.js',
  '/assets/js/sw.js',
  '/assets/plugins/bootstrap/css/bootstrap.min.css',
  '/assets/plugins/font-awesome/css/font-awesome.css',
  '/assets/plugins/github-activity/src/github-activity.css',
  '/assets/plugins/jquery-1.11.3.min.js',
  '/assets/plugins/bootstrap/js/bootstrap.min.js',
  '/assets/plugins/github-activity/src/github-activity.js',
  ...imagesToCache,
];

const staticCacheName = 'billvas-portfolio-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(currentCacheVersion).then(cache =>
      cache.match(event.request).then(response => {
        // Return response from cache if one exists
        if (response) return response;

        // Otherwise hit the network
        return fetch(event.request).then(netResponse => {
          // Only cache images from the app
          if (
            netResponse.url.includes('.png') ||
            netResponse.url.includes('.jpg')
          ) {
            if (netResponse.url.includes(window.location.origin)) {
              cache.put(event.request.url, netResponse.clone());
              return netResponse;
            }
            return;
          }
          console.log(netResponse);
          cache.put(event.request.url, netResponse.clone());
          return netResponse;
        });
      })
    )
  );
});
