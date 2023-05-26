/* eslint-disable no-template-curly-in-string */
import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './global/config';

skipWaiting();
clientsClaim();
setCacheNameDetails({
  prefix: 'Rumah-Makan-Apps',
  runtime: 'runtime',
});

precacheAndRoute([
  ...self.__WB_MANIFEST,
  { url: './', revision: '1' },
  { url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', revision: '1' },
], { ignoreURLParametersMatching: [/.*/] });

registerRoute(
  // eslint-disable-next-line prefer-regex-literals
  new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'),
  new CacheFirst({
    cacheName: 'FontAwesome',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev'
             && url.pathname.startsWith('/list'),
  new StaleWhileRevalidate({
    cacheName: ` ${CONFIG.CACHE_NAME} Home `,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev'
             && url.pathname.startsWith('/images/medium/'),
  new StaleWhileRevalidate({
    cacheName: ` ${CONFIG.CACHE_NAME} Image `,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev'
             && url.pathname.startsWith('/detail/'),
  new StaleWhileRevalidate({
    cacheName: ` ${CONFIG.CACHE_NAME} Detail `,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 265,
      }),
    ],
  }),
);

cleanupOutdatedCaches();
