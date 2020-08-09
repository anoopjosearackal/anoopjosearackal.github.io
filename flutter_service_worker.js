'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "301b8aee0c1b350626eb3f4ee2dd2a16",
"/": "301b8aee0c1b350626eb3f4ee2dd2a16",
"main.dart.js": "d3a9515e0a5c19f8676c1e949567e38b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba1ce7de7a3c53dffd3f10ed964eaf46",
".git/config": "2bfd468a7d3c99be484b4912d7090a82",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/57/d33c9b24f69fed9afdc0239d85ba44338d8125": "f582a2037eced9817c4ee8c954807a91",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/3c/23c5fcbc7c6aa35ede7d571516f6380cbf1653": "332bc1e4f7117f03e958bcf8ff21f1f5",
".git/objects/34/d2e57f18aef075b44adc302f04b0edc947c59a": "a3a9e39a6b823a7d93a7bdd29926ffb3",
".git/objects/9c/2a605b22a994506ce9e49fa8c2692b8d08657b": "ea92724ef7848f16c2d70c90357c8153",
".git/objects/02/e6ad2eccb1ac721500151f7e22b9a6a8ee576f": "da13abd73468ed766146da15125bd564",
".git/objects/a3/7e84939bc29f2259ed23c9cf0e802f6ba295a3": "38ee90ed0b14c7caf6f356e610c660f2",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/b4/4f7009846f2d0687a26c05eaebb4b03f88a759": "ff38c97c9e4c1cb9d6d2e7402ab2c4ae",
".git/objects/b4/b5b236968d1ae737a56ca8689e3b8d022cec04": "5353532d1b0b98576cfd1503511a807a",
".git/objects/ae/96eb75128fc6775709cdca9ac814369214ad83": "ad71d4ebbd0e1db44611b043b21a6984",
".git/objects/c0/e65c667db941cc6c0d6c258691576c15a343ba": "64f679d981d0d3c473a1323a302e24bc",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fb/e5ccf3ee9b2b15141f7db67b74f139cf364c3d": "468aaa629816d5fa954078ac8e358313",
".git/objects/ec/8b7448ae7e02442e905fd5414fc35ce8deb5f4": "f8dafcf6a9d46bda640d8dc3c8a7e0b0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/8b0c5d4cb6bfff3b61cf9dc3f06d8b9ae991b3": "981d5d9f97c0e13afeae228beebe58d0",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/cad3768ba482a5954ee8275226b0568a3619e9": "99ab891263fb8bfb99ee92ade701eb6d",
".git/objects/31/2af673099b47f1e6e346f943ca285c073fdccf": "2a2ad1977aef59e9494544328ebc145a",
".git/objects/65/fa4787cf00ab7ef5d9f5f94e76e4ccc37cd874": "928cfe0176007e68b528206c5147b393",
".git/objects/54/35315e0891c6528e3d281c3c8ddae122b52d78": "b69f569ee3e03857209e078d9d29d297",
".git/objects/30/79719f18e907528949926bc0869ab867174432": "71a15bcfc316f82af3be0efae0065f89",
".git/objects/6d/43f5fd3f7089044528f15821723db6cf5cc3ea": "a3c710214a69dba3d575b3faa5ac0f10",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/63/1534d11aea1fca56517515513bc54f8dd609a4": "9e3d142d1e7577f486bb938691d6823a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/bf/65e7ecaec992e585996c3ceb42829a1baea78a": "514e1aa93cb3a5b0b6cddbd8a919ccbd",
".git/objects/bf/b823b3cb3860a4861f03bdc0610bd68e9212c7": "feb1398a076873007f9ac93cc97a9c8f",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e528d1a32ca92ec1b326ee56773891824086ed": "cc768b6278610ebb3adacf56c9619a4d",
".git/objects/ea/90a7efe6c499be02fd7875a6770836c13873dc": "77b58f71c8ff0ab14971a81f73261621",
".git/objects/cc/e1b7b77e6fdfb9ad99690378328bb630ac0b5f": "95304c502e57a5759f0f782abf2c0876",
".git/objects/f8/db8e29950f209143dc3f93f15c1254ceaacf4d": "6dc2abc173f366be1f0b0fb31e015a56",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/cc3b167cf88836d98e43860cf53beaf274523e": "0b68a7d265c373488d0943702ac83801",
".git/objects/1b/cfac9a07dafb8c8b5c0f051425a1b61993ee65": "0862f99c16cd46da1fdc96b4d0bd7e40",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1d/97d7898243b26055fb57171900f7e6ac86a603": "0654d03a5b74fcf48d4568d2ec65c0a8",
".git/objects/49/4bd00e4e61a0125c7402df690882e24135b5d0": "4d7fe1746e181f1048b585737d14cf71",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/d4b7502beacac42ccf634eb43269dbf9edc556": "ad7360c4674b07a596437786a8120538",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c035475789d62938435e67d2313a2322",
".git/logs/refs/heads/master": "c035475789d62938435e67d2313a2322",
".git/logs/refs/remotes/origin/master": "c49b4ad4eb0b31c464d832f7502fc063",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "8f14502cb9734e52563bf32db5fd7ce4",
".git/refs/remotes/origin/master": "8f14502cb9734e52563bf32db5fd7ce4",
".git/index": "773ae31676f639cf5bb723facdf497eb",
".git/COMMIT_EDITMSG": "0911b198dd4cf065efea03d56c3a7f99",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9a446cb58c7071f65807f71218fd8f7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/anoop.jpeg": "69defd99fa4436fa90b17a88824953bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
