'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9f9b3049d255a427b16c65b0b382ff97",
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
".git/index": "7cb7fd3f8ce999b38e8b129b3e8e0a20",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f8e104722a7be49456abce563a95fa6",
".git/logs/refs/heads/main": "4f8e104722a7be49456abce563a95fa6",
".git/logs/refs/remotes/origin/main": "f004c2136b661258d32f337ba9b5703e",
".git/objects/00/4251158a134f9a9bc8ac294af99edc864309c5": "b84d14d361f3409c436de384f6c9a42d",
".git/objects/01/849e8d7ad398df55dc43f255dc1e740d28087d": "07336d8b01c9ca8387d494fc3f3034e5",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/07/564c4f2908763a851575639fe1310e41140cf7": "5915200105e893f13121d3afa46ab737",
".git/objects/0b/070f8b2ed691ec4bc7c81919ec73310f563a5d": "0bc045e6f0304c85af4477a1bb35af79",
".git/objects/0e/4ec42a3fb638cc2f161997e8bb1969ddc0dd5c": "0b977206f2f03befa6ed22013df7b6cb",
".git/objects/1a/17880dda3b2a62f65ca4f082924408ffdaf60a": "dd17d80ce29edffea7405bff56634db3",
".git/objects/1c/a2637423f3352a334c0d4a0f07add425214000": "66e1154a61c07ccadfedb220d6bb1a54",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/61e6a373d440244619cf8d4b338d53a8657927": "e9ccd30e0b6116933d6b2455b8a6f955",
".git/objects/20/c5c799852811482f12d2cf8b104a6388978ea9": "dc7245bba6cb36d2898d2c68bb5a4edb",
".git/objects/22/66cbc3e38bb48199d8b43e7a4d7fd8591c6cce": "cdc29c8e0c0a27a39dd7dabcf138a9de",
".git/objects/22/e06aa33acd0902a0b5946712037bb8ed82703b": "277394e3f3075c6ef9a24d9644f2a7a4",
".git/objects/26/2123d4546ac6b97366caff262f9f0135a4b41c": "727426e446dcca18d257ca6bcaa402f5",
".git/objects/28/f01fbaa4ece6b68a7ce5e08253c0a3b78d3555": "8f57e9f4257d754189447daa54976f38",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/c145d5c2731d5ddd5d39634e20a681d8dfc439": "27a4d908cd474c544c6b78f99c7e47e1",
".git/objects/2d/ce92272117f662caae6171c5165b6d4aa6246d": "5b43a69951802af864bd25d729138f75",
".git/objects/2e/504dd4a87873c02d21f5347ffcb95b8fd2c94c": "a99cdb4e8e4d6479a5cd4c3810671c41",
".git/objects/30/79ada5bcacad5cc4b939d64f3eb3bdc04d0136": "1e188338e142b626c841c5bbbab827fb",
".git/objects/30/a95fb40b05a89dcbb999a83852e94b5807dd5d": "57843befd694d5e8ca06642f1088c5e5",
".git/objects/32/47afff9ce929283106be0fd43893afbd76f9bd": "ed1c08121722cc16edb0be68f1594b1d",
".git/objects/39/9e614292c8eed83882a38b804e22ffcaa6c8ba": "ff82566341a2ca92b5a76c3cc2cb46d0",
".git/objects/39/d1e9869d69bf6556ef49e65c789e0e22142f49": "a48b8105d601b384f6eb75da951cbf25",
".git/objects/40/02f71e7c8ad827cfe1519e6a1e2d694e993e7c": "96e3781bd839bd4b61352d09d604b5fe",
".git/objects/42/e1a9798a3253072d576ba90771b03a4e11fff2": "5b0958fccaf25a79ddfec4aea88cc79a",
".git/objects/4b/33c58b0ba14f48de73cd2a958a5039609feae7": "13bfdc93b048f627eaf5f570d2b3d4bd",
".git/objects/4b/e2540a3aa208ddfebc91fb5db8e9022819de4c": "94daf277a955d61d278238e3598a649b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/54/b403123ebce4887406cd86316bc876e608073d": "a94147d754272a59c8e509502ddd4153",
".git/objects/55/a043c9933aa25c2f05a48b7936e80a5e87065e": "d01381495b563c172c29d89ea0c104e4",
".git/objects/57/dd447c321b603334422654700f3803215d9480": "e40149166941d7d811a8bdfbacb9a548",
".git/objects/5d/857de22d52f0d54df03b246bb58918dfb51b63": "8b6e443b90472e2235e9cd99d4df19aa",
".git/objects/5f/2c61ea71b1160fc7f6a6b76356006ada6b14be": "5551e8fe7fde4c99e4fac8a90a625313",
".git/objects/64/6bcccd07391686cc60fa7655a6ffb767f99f04": "28d5f4b7781d5928b1cdd4c9f2558ec1",
".git/objects/66/052bf0b122813bb3034fbe0367e5c0eb7cd6d8": "b34c2220492aed0526283cb40f7d65b6",
".git/objects/6b/7069260f36946f3e5345c2ac46d543c2f56ed9": "aa6186a17e405638247ea411292ae85b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f6577de5d51ccb7aa18db89fe139b7dd9abf3d": "002ea6ec607d48d3b84fe2ed3b0224b2",
".git/objects/6f/89db6a73a8baa54eea370b7fd0621d28c7bb6b": "1e5873533ab844716ece50d77d73c4a8",
".git/objects/74/ae6c3c96298acaa3201cc253a54be311a49dea": "c10062ae99bd38aaee91c42df5a22ef7",
".git/objects/78/c304cacc4bab92e486afd88b0df84a9d67312d": "82cc7d404a77a638a0316fef83192d5b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/a89868c5569c1545da346f9585d3ff85d2d88b": "0e9043fa4c479706def91bf4d01470ec",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "899006ae07fef513e1572125ef77430f",
".git/objects/7d/871827c5701e4cdc15a9e01e0f5c23f3389fd5": "69f4fafffedc8318ec5a87124d1c97c3",
".git/objects/83/01e30bc693d623622c22b2bb7ffc850aa1e30d": "22bf003de24e74706775b85e66ac42a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/30060740d6eaf189cb00e30b3e3c5888098969": "fe63f6eabf356eb128d3567de450d00d",
".git/objects/8a/050bc9a4658d8ccbb00d3e58086538127b0069": "c2da9ba7cdbf168418fd1580556fa54b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/77d756d4ab2467f3ac167ae4d339605c029b5e": "650d913a4c8f467cd0af83df453bc2f3",
".git/objects/8c/6c7241fd459e4a03fb0c286b3d31cbef08dea1": "60e55ec17d8b5835d981ba19267c65f0",
".git/objects/90/87b2f195775322d614f872f47c214a4a3429bc": "27f1d78e8d4446987d324a202fff20e1",
".git/objects/92/9370df26e9be7d075f10dcf721b5e12cfde468": "3db466b44b2bb87e87a566768826b70e",
".git/objects/94/0e6c7c0eaa1d04ac6bb83e6f131fe49a952a8f": "1194f69a6a008515146af22282edceea",
".git/objects/94/d7e0db4718f50db07960252e3546c33cd30c1e": "6fb438d478729885fa53b2ec34f772bf",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/bba29fcdc3ea560db5a612d1ac41f709ddf316": "6e0bfc7a757bf461c971f920eff12912",
".git/objects/9a/a5446e60bbb5e828804c60db3ba7d5a193275d": "995f1bdb528e305d5d40b22b9ad3dd2a",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/f186e636499896fc9273d5b5626dd876bd33be": "cffb0a0e3ffe1c19be4277cf3f253772",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/80127ce877b8d05904907ffc17ac021f1dc385": "bf350453c26f2cc9d0e50e2b80046b49",
".git/objects/a1/84c8ac98c6733c64321afc4982f7e86ce0e14d": "76bed3d485643f1e443d3a28812e1b90",
".git/objects/a2/6b8c9f9fef7da718fba0f1d16c164f942d9a68": "f2e488d19ea4d10372558d50efd075fc",
".git/objects/a3/b8efb564fae0f12429e8c9855150dffa15ba55": "dfb69cda621131edeffad08304c47414",
".git/objects/a6/67177502272369566b28a9127c6508d50fb426": "bc2dddf2bcb9b272a7363fff45bce69e",
".git/objects/a9/6f2f0e34828e361c104bd0920daa17c7e93523": "93abee66595b5e01cb15c1487a0a7e53",
".git/objects/a9/b0dfb12c8190a30cf20f5a601e105a8c1832c5": "ef9bd9a012a685b3db641e88b82c66bc",
".git/objects/ab/6b7f6e1c9bd95e3e4787c626067b2b33b223ca": "02ad6ba300934be684c1986cf08517ad",
".git/objects/ab/f71c8342ea07bd0f4de1c13fce0e5fb1b08df9": "607ba23e6f6a1b7c94981ec11d4b14bb",
".git/objects/ad/6c42d50089f3270940981cdfe617929fb25f7e": "c68bfb4aa434891456d3da1bd4158765",
".git/objects/ae/a2657c51ec54e713943ddec1c59964ffe11e1c": "9ac11c05053831185731b63895633602",
".git/objects/b0/87a818873139510a3e8b7ca94ceb86f390a087": "3645d6417cc8bb2d2a67498eb53be6ff",
".git/objects/b2/0304e1f17814fe3649134b8d05870498a7038b": "5fcef402599a4989f1e0b02f1c305d15",
".git/objects/b4/15dc07ad872d3ebef9acc08934f896e3323017": "06bd8fe1c247a49334d7033617783b41",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/403751d91cf41408ad73f6b13495d4a46dca49": "626715f7d40bed592de2e963f058d52b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/52dafaf34afb1bf26842636e7506d93023ffff": "d4cc7a81dcfc654de6a759bf1636639b",
".git/objects/c0/1b74481d8b24709f42c35950f9d3c9ab9f54de": "80d4f5d1a6ac2df30cbd117e9e1fbf69",
".git/objects/c0/8ded372d38e2af305b53c895d586825eb3390b": "9ffd6923c01e7fd6ef2ad3f234a87f52",
".git/objects/c2/b42d15fc789ceee76207f73cb1d3515d3a0c13": "f8789f8cbdc81372146aa0da14d1d47c",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/a3e077825ebc8deed44d1bccbfa99c654c1630": "d8e2f7583a9d712497769c7021108d69",
".git/objects/c7/e07e46626002b986cdc183deaaf839f762045d": "fc10fb20ef8718e21e303548fdabd4b3",
".git/objects/c9/aeae579471c245616530dc036a4c34f533fade": "2d832752109029a330ce0fd47ffe29b2",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d0/89cf9c78265871994b9acb5bdb6e07e1aa607c": "46f9d201c976d5d36420d8b9584f1ee0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7a91376ea6004c03ed820e211cbcc3f38b0740": "a14d2c1432c0b5e92acc01ca42f417c9",
".git/objects/d5/b50088a017df2013a066a19122a0d8f102321c": "e014b740006cd4dfab9001c5f913e2af",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d85c0e0c28f77ed04e5b0c0ea873a7351963a5": "68f0dc76488e2635198176446599854a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/81299d92d2275572f0bf10dab6cf62135c317c": "55b995884d994fc443ee45e02948dc8d",
".git/objects/db/b098e3bd31042dadfdfb59f94036b7a1778e19": "a7ea98c1e6da78fe0274f5501f6d0879",
".git/objects/dc/33f41c8979eb87298502eeac76c8c2ce53f5a3": "3182bed2e3e8a0061441b58c353b88f7",
".git/objects/e2/5f44fc3698948f0d9da8c4d112134fd0b20702": "a25f0a8e5c9d5ed10a26e51691d0d5e8",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/ecdb4af1caeaa65a28f8cb12c9e6510545409f": "51f34a33e1390eda5a849073788b642a",
".git/objects/e5/207e3a4cde269b44c15d0426cc8e2ece2dc77d": "168ada2fc9d34bfb604a57fc353d74c0",
".git/objects/e6/32bb01615a7f3824f621885b1ea55b967b9938": "efc1016fb33b41b118199c2a42ffa18a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/32d34fff3bb24972c45ac58892233436ca1f69": "9754097f3cee80091b9fac28aace5ba2",
".git/objects/eb/57f66a95325b088ec2488d9dced25ecdee4cdf": "ab6d78e8e85060dd2257b82c9f8e2831",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/f3c2a0579b6af9307aed1bb6b06d69df353638": "f62f5ce2b87965901daed4eaea56d472",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/4703a14226cd87f8bc2384a7fca6ecfc9d7b2a": "ca0194616943b95bb9b1449d08050af4",
".git/objects/fc/a0fef64f6220fb85aa34d47c9165895c3d32a8": "b747e2992c71a7785b7b8ebe863f7e1b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/62faac0010db93880618e9d32af6bb5ce0c4a3": "66f2e898de46b6a7b22aba80f6822eb9",
".git/objects/ff/1e11c3125241dad33cb07af0c194e6a6fe6ba0": "bb00c9954106d31faa62b718baf97c33",
".git/refs/heads/main": "e357c9f5f459f82f872776888c7145aa",
".git/refs/remotes/origin/main": "e357c9f5f459f82f872776888c7145aa",
"assets/AssetManifest.bin": "e817ff3fef2a2ead8a1d5c32108713ae",
"assets/AssetManifest.bin.json": "f4bd055c5c5507267020bc061c64d230",
"assets/AssetManifest.json": "4b1275297f7caed7eb6c822e00e5ec55",
"assets/assets/avatars/avatar1.png": "7a7e5d7f66c097bc8f94edda98f53463",
"assets/assets/avatars/avatar2.png": "506ad814f29b442824d57c388bbc9e6c",
"assets/assets/avatars/avatar3.png": "622849250d706b81540d06f0b41d04f1",
"assets/assets/avatars/avatar4.png": "7fc8f11371ec3a1a493576cfb075a368",
"assets/assets/avatars/avatar5.png": "d1193775275074e345944b3631dc9e15",
"assets/assets/avatars/avatar6.png": "cd3ccb89403014e65367fcb3d3db6772",
"assets/assets/avatars/avatar7.png": "0277be4139b8c838df9a21fb873040c2",
"assets/assets/avatars/avatars.kra": "0bcd76229a3f1c312002c727892b8f62",
"assets/assets/avatars/Notes_251103_142908.sdocx": "8853ce39be9a55c774bf108562a1db9e",
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
"assets/NOTICES": "f0c5bd953fd61d3e4830e5744d96200f",
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
"flutter_bootstrap.js": "382942bd984774942a83b3d6340589af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6fc167733e1231d5a65b58c5275601cb",
"/": "6fc167733e1231d5a65b58c5275601cb",
"main.dart.js": "c98b856f1af0f9441e7560b18c851e12",
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
