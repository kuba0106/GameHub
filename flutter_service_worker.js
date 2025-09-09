'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "987fda3804c6912d05b75c452eb1f21b",
".git/config": "8f6348a8591f51a530084068d7aa6531",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b857d5c0fc6f2679c04aa9e999e6cba4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eda721c1d239e01d32f70a492c35ebe2",
".git/logs/refs/heads/main": "eda721c1d239e01d32f70a492c35ebe2",
".git/logs/refs/remotes/origin/main": "070c1e94389771bf2cc3c9971c4c8bbd",
".git/objects/00/4251158a134f9a9bc8ac294af99edc864309c5": "b84d14d361f3409c436de384f6c9a42d",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/07/564c4f2908763a851575639fe1310e41140cf7": "5915200105e893f13121d3afa46ab737",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/c5c799852811482f12d2cf8b104a6388978ea9": "dc7245bba6cb36d2898d2c68bb5a4edb",
".git/objects/21/4c9dd56b40fa9face98b5cf261e9d34ab83901": "260c3cd0b6c53ed34b924bffc56ef526",
".git/objects/22/e06aa33acd0902a0b5946712037bb8ed82703b": "277394e3f3075c6ef9a24d9644f2a7a4",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/36/b5320a4ff1dcfc8db71b993434bbb6abb82f4e": "d5ad6ff38f3e4488dc22bcc7d0f17c35",
".git/objects/43/020ff77aa6c54738c23b1f0d020b355d11d980": "05d8e4abc7e84f424979a244e20fe072",
".git/objects/4b/e2540a3aa208ddfebc91fb5db8e9022819de4c": "94daf277a955d61d278238e3598a649b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/57/dd447c321b603334422654700f3803215d9480": "e40149166941d7d811a8bdfbacb9a548",
".git/objects/5f/2c61ea71b1160fc7f6a6b76356006ada6b14be": "5551e8fe7fde4c99e4fac8a90a625313",
".git/objects/66/6ed27d4b54cf3f04d282e4bb776e5e89868f58": "e9cb10d6eb28003aa48d0b3ad3232313",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f6577de5d51ccb7aa18db89fe139b7dd9abf3d": "002ea6ec607d48d3b84fe2ed3b0224b2",
".git/objects/6f/89db6a73a8baa54eea370b7fd0621d28c7bb6b": "1e5873533ab844716ece50d77d73c4a8",
".git/objects/74/ae6c3c96298acaa3201cc253a54be311a49dea": "c10062ae99bd38aaee91c42df5a22ef7",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/a89868c5569c1545da346f9585d3ff85d2d88b": "0e9043fa4c479706def91bf4d01470ec",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "899006ae07fef513e1572125ef77430f",
".git/objects/7d/871827c5701e4cdc15a9e01e0f5c23f3389fd5": "69f4fafffedc8318ec5a87124d1c97c3",
".git/objects/83/01e30bc693d623622c22b2bb7ffc850aa1e30d": "22bf003de24e74706775b85e66ac42a4",
".git/objects/85/30880a250fe9f10abee50c3bfaaecdcc3f2311": "0a8dce670090ec303afb5530f7824646",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/30060740d6eaf189cb00e30b3e3c5888098969": "fe63f6eabf356eb128d3567de450d00d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/0e6c7c0eaa1d04ac6bb83e6f131fe49a952a8f": "1194f69a6a008515146af22282edceea",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/c2122747cd5ec6beb5ba1837c603452c4cf599": "7eeb92f11da779240c55368b2bd37752",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/80127ce877b8d05904907ffc17ac021f1dc385": "bf350453c26f2cc9d0e50e2b80046b49",
".git/objects/a1/84c8ac98c6733c64321afc4982f7e86ce0e14d": "76bed3d485643f1e443d3a28812e1b90",
".git/objects/a2/6b8c9f9fef7da718fba0f1d16c164f942d9a68": "f2e488d19ea4d10372558d50efd075fc",
".git/objects/a3/2e332243521cb3b9c75f99a241b6dd5a6ad025": "6be725d54fed96269ac048da2f589d1c",
".git/objects/a3/b8efb564fae0f12429e8c9855150dffa15ba55": "dfb69cda621131edeffad08304c47414",
".git/objects/ab/6b7f6e1c9bd95e3e4787c626067b2b33b223ca": "02ad6ba300934be684c1986cf08517ad",
".git/objects/ab/f71c8342ea07bd0f4de1c13fce0e5fb1b08df9": "607ba23e6f6a1b7c94981ec11d4b14bb",
".git/objects/ad/6c42d50089f3270940981cdfe617929fb25f7e": "c68bfb4aa434891456d3da1bd4158765",
".git/objects/ae/a2657c51ec54e713943ddec1c59964ffe11e1c": "9ac11c05053831185731b63895633602",
".git/objects/b0/87a818873139510a3e8b7ca94ceb86f390a087": "3645d6417cc8bb2d2a67498eb53be6ff",
".git/objects/b2/0304e1f17814fe3649134b8d05870498a7038b": "5fcef402599a4989f1e0b02f1c305d15",
".git/objects/b2/923b4c05013814626e8b0cac3cb40daade2e66": "a7a5b9d677d65cf810eafa56bab3de46",
".git/objects/b5/3bf270f86a21fed8278d600662db4880723d34": "36288377fc158b8f485110cfa206caae",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/1b74481d8b24709f42c35950f9d3c9ab9f54de": "80d4f5d1a6ac2df30cbd117e9e1fbf69",
".git/objects/c0/8ded372d38e2af305b53c895d586825eb3390b": "9ffd6923c01e7fd6ef2ad3f234a87f52",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/a3e077825ebc8deed44d1bccbfa99c654c1630": "d8e2f7583a9d712497769c7021108d69",
".git/objects/c9/aeae579471c245616530dc036a4c34f533fade": "2d832752109029a330ce0fd47ffe29b2",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d0/89cf9c78265871994b9acb5bdb6e07e1aa607c": "46f9d201c976d5d36420d8b9584f1ee0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/81299d92d2275572f0bf10dab6cf62135c317c": "55b995884d994fc443ee45e02948dc8d",
".git/objects/db/b098e3bd31042dadfdfb59f94036b7a1778e19": "a7ea98c1e6da78fe0274f5501f6d0879",
".git/objects/e0/36f1fa1ec0203f5265fc4c1f0537f656df00f1": "30af97f199136e952cd529e4e7372801",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/32bb01615a7f3824f621885b1ea55b967b9938": "efc1016fb33b41b118199c2a42ffa18a",
".git/objects/e8/37d6daba6735a2fc6a34d3e79e9f78682fc0b1": "9606081dbadda4af3131b1ccca9ba691",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/57f66a95325b088ec2488d9dced25ecdee4cdf": "ab6d78e8e85060dd2257b82c9f8e2831",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e2a188c77755b207369d6e3191130e47d52350": "c0c9d32b6158914af818ec060a7bbd89",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/f3c2a0579b6af9307aed1bb6b06d69df353638": "f62f5ce2b87965901daed4eaea56d472",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e1a501857bb4b96fb8a7ab90d555c49ae71566": "e4cad415fa52a24d7660f0ac327e2da3",
".git/objects/fc/a0fef64f6220fb85aa34d47c9165895c3d32a8": "b747e2992c71a7785b7b8ebe863f7e1b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/1e11c3125241dad33cb07af0c194e6a6fe6ba0": "bb00c9954106d31faa62b718baf97c33",
".git/objects/ff/62808f8fecd0b19929185fd4ef17aea8d4fddb": "4427771bb3ff9fd0ef0cddb849022663",
".git/refs/heads/main": "5664d074fc2ba54124698079062577e0",
".git/refs/remotes/origin/main": "5664d074fc2ba54124698079062577e0",
"assets/AssetManifest.bin": "d49f44d7f4ea00386fed4bb57aeb028a",
"assets/AssetManifest.bin.json": "9f0591d6995d86980aae03b9fd88052a",
"assets/AssetManifest.json": "358419f825d2e80769559eb081ea0194",
"assets/assets/avatars/avatar1.png": "7a7e5d7f66c097bc8f94edda98f53463",
"assets/assets/avatars/avatar2.png": "506ad814f29b442824d57c388bbc9e6c",
"assets/assets/avatars/avatar3.png": "622849250d706b81540d06f0b41d04f1",
"assets/assets/avatars/avatar4.png": "7fc8f11371ec3a1a493576cfb075a368",
"assets/assets/avatars/avatar5.png": "d1193775275074e345944b3631dc9e15",
"assets/assets/avatars/avatar6.png": "cd3ccb89403014e65367fcb3d3db6772",
"assets/assets/avatars/avatar7.png": "0277be4139b8c838df9a21fb873040c2",
"assets/assets/avatars/avatars.kra": "0bcd76229a3f1c312002c727892b8f62",
"assets/assets/images/add.png": "b3ed6ee5dea933d98256ec0c8025761b",
"assets/assets/images/back.png": "dafc19dec9fee524fba79603d9acbb3a",
"assets/assets/images/back.png~": "d2341ec3f2f38422ad066ef37489f1b2",
"assets/assets/images/back2.png": "06fdb4f0ac87fc7479687bcfa01af7a9",
"assets/assets/images/delete.png": "a79030bc9bfc50f6417e56b05f06a038",
"assets/assets/images/delete_red.png": "e9bc3e3f64d35d8a91f4f38cfdef0ab2",
"assets/assets/images/icons.kra": "73af5a58b0c20e7c8426c834d0e64d1c",
"assets/assets/images/list.png": "9ad4a14848fa4a89f59ea6a2f0e3c6fb",
"assets/assets/images/play.png": "54b40e56de0a548c5fb75ccc7328405f",
"assets/assets/images/player.png": "c5a4fc46d560c9b690edf93856376037",
"assets/assets/images/player_grey.png": "36a08f01aa3642d5ecf00805d8946d24",
"assets/assets/images/repeat.png": "43ee7a613d387ad83c441c9c799b9622",
"assets/assets/images/repeat_black.png": "c6ae59989804dfd7c4023d5db92d9f47",
"assets/assets/images/repeat_red.png": "efddab6a0613d4adc9bb6d8280c14288",
"assets/assets/images/settings.png": "f6d85ce05af83d0ee9d943498f91a5d4",
"assets/assets/images/shuffle.png": "c36533c3aa202baf785469daeb49ce89",
"assets/assets/images/start.png": "4b63b691cfcc3f480ea3922f58750c4d",
"assets/assets/sounds/timer_end.mp3": "3bbf1b8fb367ad680d7357ddc77191b1",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "ed838cbb350b10bfed32c5018a834ff2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6286360f37737f26fcb27b22087c0149",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c629848921119a9f1306c6eb2f7080d2",
"/": "c629848921119a9f1306c6eb2f7080d2",
"main.dart.js": "f079217d7f11b7f609da42dbd84e0d8d",
"manifest.json": "5f45db1727aa221ba41950f3f7d303e1",
"version.json": "d01d8cec25c5178eeeb227d810a5bb79"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
