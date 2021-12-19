'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4eeda459d0419a1a3f5af2d34ba067de",
".git/config": "5f20c396c6b0a8853d9a3a384defd02f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "977f6db256693f65a684dd042ff69dc0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "624c62854104061d86174cb73d620a00",
".git/logs/refs/heads/main": "9b7115fc14b69f7ffb2ef96055e8f39a",
".git/logs/refs/remotes/origin/main": "b95b35e08e10cefea24b1cc8de3d8507",
".git/objects/02/0c86a5d566ba03902a9ac5795b01fa90b743cb": "4ab2f14101a638f3de96b7bc85cb8a14",
".git/objects/10/3031608581d0e868c923a31713421dfcc2b1f7": "31a9caffebb3863380a8cab556a07a4a",
".git/objects/12/42bc165f42a45090008bb7341f721738183931": "b921c859526097b8041f81c381196215",
".git/objects/1b/3eefe926312cfb590c5cd3c4921fa7336d8f8a": "419e3798c4c4ff816fb6af41b576c1d6",
".git/objects/1b/89ce26d8782ee2751f714085696d383366b21f": "f1fb9a34da62f4c7906fbb11fdce0505",
".git/objects/1d/8b8b54fea70fdb8387f62ea2223d1679c52c7e": "4d60c0343beba78e955caf45d8f449f6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/3a68f1d3aa7768d5cfa306011587ef16dc7d15": "4b697cf16fe2bace3b32a202b690f443",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/fde1e573cfa7ed140cc270142a80f42d87d0c2": "0c33f2551f12ab00a0d64f5f94612e25",
".git/objects/3a/1eba24bd4fb8ec985f8a613761f0fe668119b5": "548a6aa7fc52f9f8cce6c868a7932a66",
".git/objects/3f/66c257af90ff3e4d04016e05696fbe9fdb9f91": "a36a3222f148e48d5274fcdc116ebe8f",
".git/objects/40/bccaaa0f4c9cb16cd40f2e30eae709a89fa94c": "57304d3e3004e851931f0f93a180ff44",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4c/fd73737fc06c65eb05bfd36e9e8c2f5c1f3ed2": "5ba0bd8b35b73212408cc6900c959722",
".git/objects/55/82ff881011540277e49f0dc67d0dc3272a5856": "1ffbc2ad1d2069e2e625045273c4892d",
".git/objects/59/69e1a35c42e0cd95cbd987e6c13424d12992f9": "d16d2b3d84400495666811f7d37e3603",
".git/objects/62/6720b69f8246047bc229f6bd1d0aae6f8f8203": "31019961c2868da8236bf5ba916336dd",
".git/objects/63/4ae076e106dd98f5733792ac1d1f0e3bea8dd5": "008e4ad990f0fbc2502616fd4b51f244",
".git/objects/66/ce83bf64761bd655b846d495fab9e47b2ebee5": "a2ec3d2fbf480f6c8a86dd0fcd703485",
".git/objects/6a/05f5641ebbecd96b55a40c09158943d613ee0e": "d8695b3a517a9e5de89a683c911bb65e",
".git/objects/6d/f34acbf116fd7e850aa1a4332a4067756e620e": "8bb668df5452f9a97ab90d0f2d5b293e",
".git/objects/72/b4fea1fdd782c4b49f8271fc9ef0b08b915a63": "98fc95f866f7ea06e5f51c60bc204292",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/78/0ec2ad63d423cb2291d0fc8c59912f259a7489": "a58ca2353d83cb12f8c52ba1afc41b24",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/f2ae5e9df76f6538eb82c0c93ea26f6f844bfb": "8de3477c2d85f495e75335efcb1babe2",
".git/objects/7f/0b8d0bd9bb652ea0d64327cf786c8660ec5832": "906c2af3798a0adf92207f75899721e8",
".git/objects/7f/87bbcf21fbd75742f76f7f01e844ca0f327ea1": "20d868c2015f652c2dfcea0d12064dab",
".git/objects/82/0896a5b875a1e853d1cf1351d0bcbf5c04a931": "078b5bef80ddae85b5a5e2589c8726f5",
".git/objects/84/f35fcd95b11d7578ec86d7edcfc83f30072224": "1aa621b47458ef77a0139ec7e9909aff",
".git/objects/8f/df8ab99b7dcc57a2a773f87cfda5a937f9f2bb": "36b931ff1b86e96cf0d1b2faba418436",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/96/56c8da17f8f4b7c9dd53dc6c8d69e4cd9c2790": "15ac445bab5d5fab46be17168f98e5e3",
".git/objects/98/ba379394e5f8f1a114b05754101e80af7ac5d2": "d60db4983ec8c30c371bf242c52ddd67",
".git/objects/9a/8e638b197b0793441b4c333374b18a25580c0a": "5ace9139bc4b7f0cd3fc597c03fca4df",
".git/objects/9f/652730ac6246c1d9667760c4cfdbe7e98bc567": "bf0baf3de828301176eae97c65771e56",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/7b0a3484d1051c72cc2e81113c94c4307e1fb6": "2c6445565d7c91c67ad5848b2ef8326b",
".git/objects/ae/3d6531bc8ff6431e0367dae5d50c70f5c8aa5d": "9e1da58b0b0053527d6c6d3063a4f080",
".git/objects/b6/d81a889fe0a646ccf3337996b3721692c4d33e": "2b2139b4e1518b3f52b837a7632c765e",
".git/objects/b9/7ce692faed9c5876f0bf81be72f78e92f5db15": "c22e3ee48da4214ea591d4c5861b502c",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c2/b5e640c1244557dce3c145c6fe6f6379d5abca": "8c017483b6006a3c9c046cfeea391be9",
".git/objects/c2/bda4572687b7deb9dad1bb31bba219f7b999fa": "591676631464737c9cf04c11939cb225",
".git/objects/c6/46a60b10cbd9d8f7b8f7e6540a4876ad763da5": "2d94c5a8e6bf024618daf7dfe12771cc",
".git/objects/cc/244c986d896f5c5c9432c6394224f02b9a77f5": "bbc16bf355b17e23173f5cd580efcfa2",
".git/objects/cf/04e1cab00640c3290a6319d06c28c5b28d1bf9": "adceb1158e2b76dbfde76fd35c9755db",
".git/objects/d1/826d4aa020a95904b031e6b2f2bc3504aed168": "838d52a5747f49b7b15920f335938417",
".git/objects/d3/16bcaf36cb6a0c83a135120f2cf110d2dbcfdc": "acefe461189b4e772a9f75b31834649c",
".git/objects/dd/3a2cc0b62dac38f0143518df22edc513104bde": "6ac156aa6d48753a95c9bda8b0f76000",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e3/cb73b363be14e43ddd53e279c3eee7ef8bb95a": "83017efbcf9c798636ce386f5df7537c",
".git/objects/e4/6aba50b11de19dacb5b9929e762490911d426e": "9a8005fd59761790f9d329691ae314ab",
".git/objects/e5/784e0d4fd4f7cad58e008a9f090a597323c421": "4b2575b3e4df714c65fa05aad9ce1e1c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ea95013e9ba36cc3efec78c356a7d1e674820a": "ffb0d533fff1bcd90e1881ad798e2204",
".git/objects/e6/46e0a4512eaae69ad7f0a7843e01c2209a29f7": "735b39784ae6f439151f496b4a7e5cec",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/4763c7226ef74ba2240aae713cd7746bcc992a": "d5d82e0639ff09612f06f670818a2692",
".git/refs/heads/main": "31d2e4d26a098cc0eef28baea00ff2d6",
".git/refs/remotes/origin/main": "31d2e4d26a098cc0eef28baea00ff2d6",
"assets/AssetManifest.json": "751c5b28eb673a9e07656f66932939f6",
"assets/assets/images/app_chess.png": "acad5b61d37265b0c916144762f5c97f",
"assets/assets/images/app_chillax.png": "b3fedcbe4a4ad2271dc802b473cf4609",
"assets/assets/images/app_clash.png": "94c2d9245ce7f6fd3113497b6a8a731b",
"assets/assets/images/app_metro.png": "a56092e6355d872646162dd33d6a3f2a",
"assets/assets/images/app_store.png": "19043f2071c9134676feb466b7e4646a",
"assets/assets/images/play_store.png": "ca1d56c2469a866623f204e557c9ba81",
"assets/assets/images/profile.jpg": "f0f4d08451f35079f51855701a3c480d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4e562397364805057fb8cb14fdde14d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.ico": "59c397f4e0de73a06ab0ccad72529e1f",
"icons/Icon-192.png": "f5899d4ea771d2a08234dbd501b61605",
"icons/Icon-512.png": "c6dae70a1e3e916e4476689e8057f0cd",
"index.html": "cc0460295375d6a372470a68d4031c01",
"/": "cc0460295375d6a372470a68d4031c01",
"main.dart.js": "e88abf396336cd01424d334c93dba95c",
"manifest.json": "e566ebc122a0b7ef221b701c877c7c02",
"README.md": "c61a82a1f04eba383f826f63eecd7bfb",
"version.json": "8543cddcac551087c33d2a4c95310823"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
