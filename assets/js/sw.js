// const currentCacheVersion = 'billvas-portfolio-v1';
// const imagesToCache = [
//   '/assets/images_comp/angular-image-1600_large_2x.png',
//   '/assets/images_comp/coffee-1600_large_2x.png',
//   '/assets/images_comp/flickr-1600_large_2x.png',
//   '/assets/images_comp/-1600_large_2x.png',
//   '/assets/images_comp/github-chart-1600_large_2x.png',
//   '/assets/images_comp/GrowWithGoogle-1600_large_2x.png',
//   '/assets/images_comp/headshot-1600_large_2x.png',
//   '/assets/images_comp/ilios-1600_large_2x.png',
//   '/assets/images_comp/rainier-1600_large_2x.png',
//   '/assets/images_comp/science-journal-1600_large_2x.png',
//   '/assets/images_comp/tangletown-wordpress-1600_large_2x.png',
//   '/assets/images_comp/vue-js-1600_large_2x.png',
//   '/assets/images_comp/vue-pwa-1600_large_2x.png',
// ];

// const resourcesToCache = [
//   '/',
//   '/index.html',
//   '/assets/css/styles.css',
//   '/assets/js/main.js',
//   ...imagesToCache
// ];

// // Install SW
// self.addEventListener('install', event => {
//   // Cache the resources
//   // instead of aggressively caching all images, since we have 6 variations of each image, I'd only cache them as they come as requests in the SW's fetch event
//   event.waitUntil(
//     caches.open(currentCacheVersion).then(cache => {
//       return cache.addAll(resourcesToCache);
//     })
//   );
// });

// // SW activate
// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       // Delete all other versions of the 'mws-restaurant' cache except for the current one
//       return Promise.all(
//         cacheNames
//           .filter(cacheName => {
//             return (
//               cacheName.startsWith('billvas-portfolio') &&
//               currentCacheVersion != cacheName
//             );
//           })
//           .map(cacheName => {
//             return caches.delete(cacheName);
//           })
//       );
//     })
//   );
// });

// // SW Fetch
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.open(currentCacheVersion).then(cache => {
//       return cache.match(event.request).then(response => {
//         // Return response from cache if one exists
//         if (response) return response;

//         // Otherwise hit the network
//         return fetch(event.request).then(netResponse => {
//           // Only cache images from the app
//           if (
//             netResponse.url.includes('.png') ||
//             netResponse.url.includes('.jpg')
//           ) {
//             if (netResponse.url.includes(window.location.origin)) {
//               cache.put(event.request.url, netResponse.clone());
//               return netResponse;
//             }
//             return;
//           }
//           console.log(netResponse);
//           cache.put(event.request.url, netResponse.clone());
//           return netResponse;
//         });
//       });
//     })
//   );
// });

const imagesToCache = [
  '/assets/images_comp/angular-image-1600_large_2x.png',
  '/assets/images_comp/coffee-1600_large_2x.png',
  '/assets/images_comp/flickr-1600_large_2x.png',
  '/assets/images_comp/github-chart-1600_large_2x.png',
  '/assets/images_comp/GrowWithGoogle-1600_large_2x.png',
  '/assets/images_comp/headshot-1600_large_2x.png',
  '/assets/images_comp/ilios-1600_large_2x.png',
  '/assets/images_comp/rainier-1600_large_2x.png',
  '/assets/images_comp/science-journal-1600_large_2x.png',
  '/assets/images_comp/tangletown-wordpress-1600_large_2x.png',
  '/assets/images_comp/vue-js-1600_large_2x.png',
  '/assets/images_comp/vue-pwa-1600_large_2x.png',
  '/favicon.ico',
  // '/assets/images/angular-image.webp',
  // '/assets/images/coffee.webp',
  // '/assets/images/flickr.webp',
  // '/assets/images/GrowWithGoogle.webp',
  // '/assets/images/headshot.webp',
  // '/assets/images/ilios.webp',
  // '/assets/images/rainier.webp',
  // '/assets/images/science-journal.webp',
  // '/assets/images/tangletown-wordpress.webp',
  // '/assets/images/vue-js.webp',
  // '/assets/images/vue-pwa.webp',
  // '/assets/images/gatsby-blog.webp',
  // '/assets/images/grace-hopper.webp',
  // '/assets/images/gwg-logo.webp',
  // '/assets/images/IU-logo.webp',
  // '/assets/images/IU-logo2.webp',
  // '/assets/images/react-flashcard.webp',
  // '/assets/images/react-indecision.webp',
  // '/assets/images/react-note.webp',
  // '/assets/images/react-unsplash-app.webp',
  // '/assets/images/science-journal.webp',
  // '/assets/images/SU-logo.webp',
  // '/assets/images/SU-logo2.webp',
  // '/assets/images/tangletown-wordpress.webp',
  // '/assets/images/udacity-diploma.webp',
  // '/assets/images/youtube.webp',
  // '/favicon.ico',
];

// Cache the application shell

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
  // '//cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css',
  '/assets/plugins/jquery-1.11.3.min.js',
  '/assets/plugins/bootstrap/js/bootstrap.min.js',
  // '//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js',
  '/assets/plugins/github-activity/src/github-activity.js',
  // 'https://unpkg.com/scrollreveal/dist/scrollreveal.min.js',
  // 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
  // 'http://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic',
  // 'http://fonts.googleapis.com/css?family=Montserrat:400,700',
  // 'https://www.googletagmanager.com/gtag/js?id=UA-110221936-1',
  // 'https://platform.linkedin.com/badges/js/profile.js',

  ...imagesToCache,
];

const staticCacheName = 'billvas-portfolio-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => cache.addAll(filesToCache))
  );
});

// Serve files from the cache // tutorial version
/*
  self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)



        // TODO 4 - Add fetched files to the cache

        .then(function(response) {

            // TODO 5 - Respond with custom 404 page

            return caches.open(staticCacheName).then(function(cache) {
              if (event.request.url.indexOf('test') < 0) {
                cache.put(event.request.url, response.clone());
              }
              return response;
            });
          });

      }).catch(error => {

        // TODO 6 - Respond with custom offline page

      })
    );
  });

*/
/* new version */
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.match(event.request)
//       .then(function(response) {
//         return response || fetchAndCache(event.request);
//       })
//     );
//   });

//   function fetchAndCache(url) {
//     return fetch(url)
//     .then(function(response) {
//       // Check if we received a valid response
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return caches.open(staticCacheName)
//       .then(function(cache) {
//         cache.put(url, response.clone());
//         return response;
//       });
//     })
//     .catch(function(error) {
//       console.log('Request failed:', error);
//       // You could return a custom offline 404 page here
//     });
//   }

// SW Fetch
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
