'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8985f80af6d02bc955be103d325e7645",
"assets/AssetManifest.json": "55acb1b645ccafcc680cc10f665fe1f6",
"assets/assets/action.png": "1feccdb788f6bbedc8d518975530a1b8",
"assets/assets/akame.png": "766eb57122f0f36f9316b30cc9f94596",
"assets/assets/anime.png": "4fb3356e20f11457e46ab73150910cf4",
"assets/assets/apple.png": "aefa1ce383151b7737bc0facfc8e12c5",
"assets/assets/attack.png": "d110fc11f558206d3547effc6752c9a3",
"assets/assets/back.png": "2759c17c9c00192ffcf1e112799c3224",
"assets/assets/backc.jpg": "b4562a4b7fa0a2fa13f3a433017c98d0",
"assets/assets/basket.png": "468f24fae4a509cba5e3ada02184f0b4",
"assets/assets/bleach.png": "29558f46b0a23b390ec13eb7e5f9cce9",
"assets/assets/blue.png": "c26dc079bbb45707268af9b5a4ccba96",
"assets/assets/boy.png": "22b72f3b81b875d2c6ef73d7b8a8acfe",
"assets/assets/comedy.png": "09ceabbdfd86ab39e8117751634051c7",
"assets/assets/dark.jpg": "b6cef4cded8702ea062a73eacfed64e0",
"assets/assets/death.png": "aa0e4c8ed681cc2576d6e31152f4ab78",
"assets/assets/demon.png": "e54a7123cd0f8369d0d0a272e04ff64c",
"assets/assets/dragon.png": "07aea981b449917e7be7f104bd3cfb62",
"assets/assets/drama.png": "1977b70811670ef2e85c84b062cebe6e",
"assets/assets/ere.png": "e6f1b50e5fc3f0dad78f2fb8a2005433",
"assets/assets/fantasy.png": "0d33c616f3afd2eeb0a583383987c1c6",
"assets/assets/git.png": "bb04d77a846e6beca811c4be1d8e3442",
"assets/assets/gojoo.png": "7b2041d63ddc46a2ab462d139aa1e5f8",
"assets/assets/goku.png": "7a593ad49b9a8f6e28f5d4325093db1b",
"assets/assets/gon.png": "2e3bc12db81b4280620dcf8ff2ce5d35",
"assets/assets/google.png": "acb6e1dd389cdbf2ec50746e1e7460b9",
"assets/assets/haykiu.png": "b852afc780b6d60d2cf8a594960e6145",
"assets/assets/hero.png": "38cb62589128ab618ca5c03e8eab44e0",
"assets/assets/horror.png": "954e3b69bc397c97e7b6d3cbd2db9837",
"assets/assets/hunter.png": "6f5c3dae44b7f8ef13ac5a3f1b758ce2",
"assets/assets/ichigo.png": "9ec8a1f79f3391d21ff08db3acec21b0",
"assets/assets/in.png": "e9e64b92efc75bbb7546d8f82cf16c32",
"assets/assets/insta.png": "751a308e301c42b19e6706d859bc0abb",
"assets/assets/juju.png": "cb3c31158d7e968d0f3b2e41a63424a4",
"assets/assets/kaneki.png": "a103defe741dddda11e98f0deaf61f90",
"assets/assets/load.gif": "a320ec12955a521039c10ed33149b3bb",
"assets/assets/load.png": "df02e6d7971634f47a873e6e73d1f6e7",
"assets/assets/login.png": "34c3332cb8eb6c448bb4544cd7df4bcd",
"assets/assets/luffy.png": "85d3c7ebe2add7f5ebe6ebce5b3d759a",
"assets/assets/man.png": "6ec0153b6c15e91f57ce34d48d84e95c",
"assets/assets/medo.png": "eebb073bff55699d0f4f701b6621300a",
"assets/assets/mh.png": "840b1d3a135dfbed702f0b41b905b10f",
"assets/assets/mystery.png": "73adc25fdefcc4080220fb0061e266a7",
"assets/assets/naruto.png": "c68254fb28405404cddd093d46962cac",
"assets/assets/one.png": "687ee3c5839d903eb2fd0d3f40d3ad7a",
"assets/assets/onee.png": "8bcbaace9e8d7431a1730733c7ef1261",
"assets/assets/romance.png": "6bdb618f1ee49fe2975829ea1166f19d",
"assets/assets/saitama.png": "f16d5846017cddc8eb2165c826e0ae11",
"assets/assets/service.gif": "11b0f61f459cd611e6fdf6a4f1ef739e",
"assets/assets/slam.png": "11ad6808c976277d39702d483a4c99d3",
"assets/assets/sports.png": "a954817aa08d2da25af87ca554179246",
"assets/assets/spy.png": "70512f1026f8b115c5d70f374b44cb31",
"assets/assets/stone.png": "570de4775cb8144ee7a378d21beba23d",
"assets/assets/tanjiro.png": "d4b465f90fd5d57aa93804a652225dac",
"assets/assets/tokyo.png": "2f816d2d331a0c164f8a9c1436fdf862",
"assets/assets/underc.png": "c8018a2cad63a3e84a9e259418d9730c",
"assets/assets/uzunaruto.png": "6b307272ef2f782fc7cecb252f661dc9",
"assets/assets/welcome.gif": "a1b98fe971f7da20c0506be30602e95b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "332dd565a5b5c60c0a8e523bb7e76b9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f72e039ab0f5d2942c0f5636e651cf7",
"/": "9f72e039ab0f5d2942c0f5636e651cf7",
"main.dart.js": "c6e15f2106ac0188ec66770d27dae450",
"manifest.json": "62f887180f0357c652056a6e7e98ce7e",
"version.json": "6ec722575004ecfce40451a9bc4589db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
