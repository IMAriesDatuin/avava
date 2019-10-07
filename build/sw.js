/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about-us.html",
    "revision": "555b94a95de201bd6e47ed384b6039cf"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "eac0bb0e1e9cea28bed37f2650359053"
  },
  {
    "url": "android-chrome-192x192.webp",
    "revision": "6a7048c90cc8d88086d7f066a61c5201"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "73f7f8931f1402b14e109d50b3f8b525"
  },
  {
    "url": "android-chrome-512x512.webp",
    "revision": "868e21973f0514ea30e9da574c4a5bc1"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "56d37541160e71227727ee8f5e1e13ca"
  },
  {
    "url": "apple-touch-icon.webp",
    "revision": "928e09f4af4f6fb9485badb2d04103a9"
  },
  {
    "url": "assets/blank.svg",
    "revision": "a618f05d0e890f40750109f67a2dcb7c"
  },
  {
    "url": "assets/cover.png",
    "revision": "f9f63171d68b5a6ac02afea8c8a47222"
  },
  {
    "url": "assets/cover.webp",
    "revision": "ca7123ac2ed4c586f7dac94856798135"
  },
  {
    "url": "assets/displacement/1.jpg",
    "revision": "b8da763a858465259ab808951115378a"
  },
  {
    "url": "assets/displacement/1.webp",
    "revision": "08ebf5fcd7f66069924135748efdd102"
  },
  {
    "url": "assets/displacement/10.jpg",
    "revision": "ac0814dc8c64b0a865ac8e776596296e"
  },
  {
    "url": "assets/displacement/10.webp",
    "revision": "43b071a68ff9df731dd571c8470c9147"
  },
  {
    "url": "assets/displacement/11.jpg",
    "revision": "0adb8befd0fe4645c8a2246cdcd017a6"
  },
  {
    "url": "assets/displacement/11.webp",
    "revision": "5023ae2ce0099c24205e849b3fcc3a67"
  },
  {
    "url": "assets/displacement/12.jpg",
    "revision": "ea66cb046ef753f891f0f70fa40a8026"
  },
  {
    "url": "assets/displacement/12.webp",
    "revision": "16331ecc7017786e377d1f78a6121b5c"
  },
  {
    "url": "assets/displacement/13.jpg",
    "revision": "60faf21f20c66f8dc6ed7ccaf9b509b3"
  },
  {
    "url": "assets/displacement/13.webp",
    "revision": "ecff567ab16857d114cd0a4a6082a9a2"
  },
  {
    "url": "assets/displacement/14.jpg",
    "revision": "f9b0a842c06b137dcfc99a9ecc4c0ae4"
  },
  {
    "url": "assets/displacement/14.webp",
    "revision": "17d7e82744cff5bb3197e269b4692567"
  },
  {
    "url": "assets/displacement/15.jpg",
    "revision": "7fdd90b8b829d20e726426a80f7b20da"
  },
  {
    "url": "assets/displacement/15.webp",
    "revision": "667b313ae30290fad8ba8cbbfd9521a0"
  },
  {
    "url": "assets/displacement/16.jpg",
    "revision": "816a8623f0c68f54c7d8dd660b8df2bd"
  },
  {
    "url": "assets/displacement/16.webp",
    "revision": "208afa41bc148c9322992bef7d98ba4f"
  },
  {
    "url": "assets/displacement/2.jpg",
    "revision": "566c735e6db05bfdacc2eb79695c4f3c"
  },
  {
    "url": "assets/displacement/2.webp",
    "revision": "970867e654514e1e46969476b9dcc302"
  },
  {
    "url": "assets/displacement/3.jpg",
    "revision": "76c4164185efadbdb90a847407760ece"
  },
  {
    "url": "assets/displacement/3.webp",
    "revision": "8ecf85de3539fe56ffef09f843e4d613"
  },
  {
    "url": "assets/displacement/4.png",
    "revision": "3408054e5f083993c59b1b92204fbc12"
  },
  {
    "url": "assets/displacement/4.webp",
    "revision": "60e6c72427401ab16611eee78c422ff2"
  },
  {
    "url": "assets/displacement/5.png",
    "revision": "5109314848ee05640300a16f3dfb4fd6"
  },
  {
    "url": "assets/displacement/5.webp",
    "revision": "97521defa8d2a726e18d9ec9ff169575"
  },
  {
    "url": "assets/displacement/6.jpg",
    "revision": "45f3e9b576642cf958503eec6508bff1"
  },
  {
    "url": "assets/displacement/6.webp",
    "revision": "701a90c539bf76a8ebb78f2a4cf0c5e6"
  },
  {
    "url": "assets/displacement/7.jpg",
    "revision": "fc6c214dbe176f8964f82a9bba7862e5"
  },
  {
    "url": "assets/displacement/7.webp",
    "revision": "fc7a7ab602fb842335595d6652768ccd"
  },
  {
    "url": "assets/displacement/8.jpg",
    "revision": "9793a9326317ea5a7ea43faf81c9074f"
  },
  {
    "url": "assets/displacement/8.webp",
    "revision": "b686ec4dc3c59f8708c648f665e2d267"
  },
  {
    "url": "assets/displacement/9.jpg",
    "revision": "63046812ea831e0716ab3299564d2493"
  },
  {
    "url": "assets/displacement/9.webp",
    "revision": "5a332d1a7f04b8cc1f051334b365c190"
  },
  {
    "url": "assets/error-static.gif",
    "revision": "e49fc1bd18b966580f4c6d0486adf97b"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/hero/shutterstock_1357158890.png",
    "revision": "a3244e0a013cb7a6cccd867649c445ca"
  },
  {
    "url": "assets/hero/shutterstock_1357158890.webp",
    "revision": "3d7d3380b69a4f94aafb8f9e3b7b672e"
  },
  {
    "url": "assets/hero/shutterstock_1497401618.png",
    "revision": "c61c2e59829959c5bbe3729a33a07238"
  },
  {
    "url": "assets/hero/shutterstock_1497401618.webp",
    "revision": "fed02c3aa496fa93cbbdbce93332c6ec"
  },
  {
    "url": "assets/hero/shutterstock_400535719.png",
    "revision": "eb72e45a57acdf1502e60a2fd86aee94"
  },
  {
    "url": "assets/hero/shutterstock_400535719.webp",
    "revision": "0e8ad4129167d18083c15b23df432a8c"
  },
  {
    "url": "assets/hero/shutterstock_714361963.png",
    "revision": "949ee855bd38a0cad71c82111fe1808a"
  },
  {
    "url": "assets/hero/shutterstock_714361963.webp",
    "revision": "a33bc4d230e4a42dd1825914b40dd1f8"
  },
  {
    "url": "assets/hero/shutterstock_731035288.png",
    "revision": "dff03b169861afc5b4360b6caa4d7f07"
  },
  {
    "url": "assets/hero/shutterstock_731035288.webp",
    "revision": "dba194da37bc609d71a2f128f03f08c5"
  },
  {
    "url": "assets/hex-background-landscape.png",
    "revision": "b9520bb3da1b356cfe0f9e286275f981"
  },
  {
    "url": "assets/hex-background-landscape.webp",
    "revision": "7752629a533c9f023e9401e96955fff7"
  },
  {
    "url": "assets/hex-background-vertical.png",
    "revision": "3b6cd1e6d54e9b54c91f946ec7691a08"
  },
  {
    "url": "assets/hex-background-vertical.webp",
    "revision": "8fdaebd1669f6b5eafcf1ff1b1e2c080"
  },
  {
    "url": "assets/icon.png",
    "revision": "88e8181f9a03d7f77f9f27e7d9475f32"
  },
  {
    "url": "assets/icon.webp",
    "revision": "34a556305a27ed2b8d1962bb94e37aa8"
  },
  {
    "url": "assets/images/shutterstock_1023657655.jpg",
    "revision": "e56cd5ec101fd2b0dcbfe88ee45a99be"
  },
  {
    "url": "assets/images/shutterstock_1023657655.webp",
    "revision": "f883468b2968c7d85844084382d8ca2b"
  },
  {
    "url": "assets/images/shutterstock_1104131690.jpg",
    "revision": "6a8fc38792cc226343fa1fc62e0fab43"
  },
  {
    "url": "assets/images/shutterstock_1104131690.webp",
    "revision": "fa4ac7261bd14123be57b210062b58a1"
  },
  {
    "url": "assets/images/shutterstock_1122814898.jpg",
    "revision": "fb7567a35a930c252f6ed2ee5f0d83fb"
  },
  {
    "url": "assets/images/shutterstock_1122814898.webp",
    "revision": "1c46b41a9f12e90fa2bdbfec5877115f"
  },
  {
    "url": "assets/images/shutterstock_1203924316.jpg",
    "revision": "1a8ee990807b9ca1ab32741f762278d4"
  },
  {
    "url": "assets/images/shutterstock_1203924316.webp",
    "revision": "cce01fbab9178dc9ff25691c0ebe1063"
  },
  {
    "url": "assets/images/shutterstock_1216323421.jpg",
    "revision": "a7d2f5152d936050cd46ce8f2544e084"
  },
  {
    "url": "assets/images/shutterstock_1216323421.webp",
    "revision": "d908e8847565aff692a95be1d84f749a"
  },
  {
    "url": "assets/images/shutterstock_1242539494.jpg",
    "revision": "28698a2e583443817869441deb3a66be"
  },
  {
    "url": "assets/images/shutterstock_1242539494.webp",
    "revision": "33a67711b203933715406c6687573fdc"
  },
  {
    "url": "assets/images/shutterstock_1242539554.jpg",
    "revision": "e08e866e60460bebcb088032c6ee75c8"
  },
  {
    "url": "assets/images/shutterstock_1242539554.webp",
    "revision": "d1276d9d6461c3c297757a0436782afa"
  },
  {
    "url": "assets/images/shutterstock_1242539575.jpg",
    "revision": "c80b14e186832f089e9b2883e01394cb"
  },
  {
    "url": "assets/images/shutterstock_1242539575.webp",
    "revision": "3e328fe45c32619e02aacbee22b79b60"
  },
  {
    "url": "assets/images/shutterstock_1293049414.jpg",
    "revision": "bc71d1aca9b36bdc7cdb5cbe62b39fdf"
  },
  {
    "url": "assets/images/shutterstock_1293049414.webp",
    "revision": "b9fe9ab301cb431eda5c069200c85b57"
  },
  {
    "url": "assets/images/shutterstock_1305432610.jpg",
    "revision": "a44f9d3c7ef122a0c546915bfcedefec"
  },
  {
    "url": "assets/images/shutterstock_1305432610.webp",
    "revision": "219ec6e8e9204b2dfad96417ad171191"
  },
  {
    "url": "assets/images/shutterstock_1307197867.jpg",
    "revision": "43e5713b664a4b4ac22555344c9c974d"
  },
  {
    "url": "assets/images/shutterstock_1307197867.webp",
    "revision": "bd84b9666ad47e051c8da34abef165f4"
  },
  {
    "url": "assets/images/shutterstock_136837034.jpg",
    "revision": "0a794a61998796bcd9054b14ecb86ea3"
  },
  {
    "url": "assets/images/shutterstock_136837034.webp",
    "revision": "fb90fa5906e193eb28007467727201e3"
  },
  {
    "url": "assets/images/shutterstock_1497401618.jpg",
    "revision": "837e94782d345d388a86d7ea01e42e74"
  },
  {
    "url": "assets/images/shutterstock_1497401618.webp",
    "revision": "2a65a00dca15030229f069e485a97384"
  },
  {
    "url": "assets/images/shutterstock_400526710.jpg",
    "revision": "501f840825da2ce5aa5910023b66cfd1"
  },
  {
    "url": "assets/images/shutterstock_400526710.webp",
    "revision": "a320816eb57f94d821f0cda6e8216916"
  },
  {
    "url": "assets/images/shutterstock_400535719.jpg",
    "revision": "6bd4404efe81992ff4fa1a3780172c89"
  },
  {
    "url": "assets/images/shutterstock_400535719.webp",
    "revision": "75778257809e840d021111450edce54f"
  },
  {
    "url": "assets/images/shutterstock_493851916.jpg",
    "revision": "e16fa1d02c78643e515336d83a061aaf"
  },
  {
    "url": "assets/images/shutterstock_493851916.webp",
    "revision": "3a8ef9d4113cd895b85e92dc97ff63ce"
  },
  {
    "url": "assets/images/shutterstock_513209758.jpg",
    "revision": "f928333e0bc16d92c90b7ce86182f0dc"
  },
  {
    "url": "assets/images/shutterstock_513209758.webp",
    "revision": "b5c59565a16f36899b35929b150c719b"
  },
  {
    "url": "assets/images/shutterstock_524952235.jpg",
    "revision": "d9deeb0c1ac4c3ecde1fae563df81128"
  },
  {
    "url": "assets/images/shutterstock_524952235.webp",
    "revision": "45e626d9f97d448decf71662424d6256"
  },
  {
    "url": "assets/images/shutterstock_526780000.jpg",
    "revision": "60b4b497325df4491eeee00e92f0151f"
  },
  {
    "url": "assets/images/shutterstock_526780000.webp",
    "revision": "293114580360c90e42502ddb669a4f60"
  },
  {
    "url": "assets/images/shutterstock_558615094.jpg",
    "revision": "2328da0fb03de652b3532c58916488a3"
  },
  {
    "url": "assets/images/shutterstock_558615094.webp",
    "revision": "540b77ab04a66907f6cd19b8a0987ab3"
  },
  {
    "url": "assets/images/shutterstock_558972535_01.jpg",
    "revision": "258b4aec8f622cac9663a65ae826b42c"
  },
  {
    "url": "assets/images/shutterstock_558972535_01.webp",
    "revision": "fceee32fba15e053b69cb37be4ebbe86"
  },
  {
    "url": "assets/images/shutterstock_558972535_02.jpg",
    "revision": "81ea834ad02819bee093a715477a6c96"
  },
  {
    "url": "assets/images/shutterstock_558972535_02.webp",
    "revision": "2bb815a5d0a635f73ef51b67a433276e"
  },
  {
    "url": "assets/images/shutterstock_558972535_03.jpg",
    "revision": "2772396c07303f00d8edcd16f284e38b"
  },
  {
    "url": "assets/images/shutterstock_558972535_03.webp",
    "revision": "468e265e328e0762e30bf69ef4150ff5"
  },
  {
    "url": "assets/images/shutterstock_677526235.jpg",
    "revision": "fd9675f657e419bf23758f1550752fc5"
  },
  {
    "url": "assets/images/shutterstock_677526235.webp",
    "revision": "ac8f659b16acca947a328d1c902c9eae"
  },
  {
    "url": "assets/images/shutterstock_714361963.jpg",
    "revision": "39b8be5bd1284a70694b0fb3378ec843"
  },
  {
    "url": "assets/images/shutterstock_714361963.webp",
    "revision": "112f8158ab6bdeda219e1564e242f31f"
  },
  {
    "url": "assets/images/shutterstock_731035288.jpg",
    "revision": "d2bd4b5c9f9f5ba0cadacc6a799758d6"
  },
  {
    "url": "assets/images/shutterstock_731035288.webp",
    "revision": "df1f45d18bfddbfb3d40d725b5e1ffec"
  },
  {
    "url": "assets/images/shutterstock_748719808.jpg",
    "revision": "7c1c092b5c2cf36b0de70c667f39bb20"
  },
  {
    "url": "assets/images/shutterstock_748719808.webp",
    "revision": "68ad5b77d4b81fb866997c5cc9c7c7a7"
  },
  {
    "url": "assets/leadership/avatar.jpg",
    "revision": "567359e2e58fc8454e657cca79403894"
  },
  {
    "url": "assets/leadership/avatar.webp",
    "revision": "7b96d21bf12f4d1df0339712ce653c66"
  },
  {
    "url": "assets/leadership/Blossom_0048_vert_crop.jpg",
    "revision": "ab6b6eecc81a1aa51f85954ae1712183"
  },
  {
    "url": "assets/leadership/Blossom_0048_vert_crop.webp",
    "revision": "56948616ee7f0bdad4562107ec0870b6"
  },
  {
    "url": "assets/leadership/Blossom_0126_vert_crop.jpg",
    "revision": "85add38b42b350420baef9275775eeec"
  },
  {
    "url": "assets/leadership/Blossom_0126_vert_crop.webp",
    "revision": "3adc6ddfa7e2f02d73478ad84d311710"
  },
  {
    "url": "assets/leadership/Blossom_0186_vert_crop.jpg",
    "revision": "accf51b0375863218e82b0c648d308dd"
  },
  {
    "url": "assets/leadership/Blossom_0186_vert_crop.webp",
    "revision": "237c557b132990bee27430e1a5a3a918"
  },
  {
    "url": "assets/leadership/Blossom_0213_vert_crop.jpg",
    "revision": "877d120de5cf1827ab5568c2ce87cec4"
  },
  {
    "url": "assets/leadership/Blossom_0213_vert_crop.webp",
    "revision": "553b932e82593da60b2ba034a99f0231"
  },
  {
    "url": "assets/leadership/Blossom_0297_vert_crop.jpg",
    "revision": "60f82a720a78958dde091d80f7645421"
  },
  {
    "url": "assets/leadership/Blossom_0297_vert_crop.webp",
    "revision": "02803a7da85057b06dc340309179cef1"
  },
  {
    "url": "assets/leadership/Blossom_0560_vert.jpg",
    "revision": "067b4f68590d802434b11d49a5cdc94c"
  },
  {
    "url": "assets/leadership/Blossom_0560_vert.webp",
    "revision": "a1d3e970228ec81b24bb3f0b1a833c0f"
  },
  {
    "url": "assets/leadership/Dr_Henry_Chan_on_Full_White_Gown_Photo.jpg",
    "revision": "54a568dccca9a0887b3a7fabc3f1618e"
  },
  {
    "url": "assets/leadership/Dr_Henry_Chan_on_Full_White_Gown_Photo.webp",
    "revision": "4c5bcebd520a187a639875771bbda484"
  },
  {
    "url": "assets/leadership/IMG_2198.jpg",
    "revision": "c90fe422af8db2b565a1938e6fb3166f"
  },
  {
    "url": "assets/leadership/IMG_2198.webp",
    "revision": "b3164951af7a20a3cb5c0bd22355208c"
  },
  {
    "url": "assets/logos/american-dental-association.svg",
    "revision": "9835ad54933eed6251f76d018eaca82b"
  },
  {
    "url": "assets/logos/american-medical-association.svg",
    "revision": "a6e18b56eb174ce723fd1be5c8bec12d"
  },
  {
    "url": "assets/logos/american-society-for-dematologic-surgery.svg",
    "revision": "8cbd8fe46f50b2080dc909dc2bfd098d"
  },
  {
    "url": "assets/logos/american-society-of-plastic-surgeons.svg",
    "revision": "2333c73803ab6275c35d6f512cecef17"
  },
  {
    "url": "assets/logos/facebook.svg",
    "revision": "4f23596e50fbc2804f9e80a111dfd3a6"
  },
  {
    "url": "assets/logos/google-plus.svg",
    "revision": "9a76792bba107284a0690e2658a5bfb2"
  },
  {
    "url": "assets/logos/harvard-medical-school.png",
    "revision": "715417a7518bc754791b11e2d8bf2081"
  },
  {
    "url": "assets/logos/harvard-medical-school.webp",
    "revision": "c174ef5f9d57dd13bc05086f3176ab8f"
  },
  {
    "url": "assets/logos/massachusetts-general-hospital.png",
    "revision": "e7a6e670604340c01910f259f085776b"
  },
  {
    "url": "assets/logos/massachusetts-general-hospital.webp",
    "revision": "31733d8aa7dd414318f42d22e5f0c22c"
  },
  {
    "url": "assets/logos/member-of-the-american-society-for-aesthetic-plastic-surgery.svg",
    "revision": "dd5fcf2f2de3f9b817d63c811b180986"
  },
  {
    "url": "assets/logos/the-american-board-of-venous-and-lymphatic-medicine.svg",
    "revision": "6b550e730404347553061821dfbd3eeb"
  },
  {
    "url": "assets/logos/the-university-of-hong-kong.png",
    "revision": "8a1ccd0a5881d4df3d1ad4caaf9200a2"
  },
  {
    "url": "assets/logos/the-university-of-hong-kong.webp",
    "revision": "a7b345e1719753abc849490a72eb6645"
  },
  {
    "url": "assets/logos/yelp.svg",
    "revision": "0be3b741818a2b8b111d4445d2982e81"
  },
  {
    "url": "assets/patterns/hex-secondary.png",
    "revision": "47f1d58e7de6314fcb9ba977daa454f1"
  },
  {
    "url": "assets/patterns/hex-secondary.webp",
    "revision": "e77b0f6ce54b36b0ecf9ad4164768bd2"
  },
  {
    "url": "assets/patterns/hex-white.png",
    "revision": "796d1d865cc522b36664c88a863d684b"
  },
  {
    "url": "assets/patterns/hex-white.webp",
    "revision": "d9f4fba50974cff663b24238aec6cda5"
  },
  {
    "url": "assets/patterns/noise.png",
    "revision": "2eb88572cd26ea42606923e50e615306"
  },
  {
    "url": "assets/patterns/noise.webp",
    "revision": "ca28589c07dc93313df015cf8741c0f7"
  },
  {
    "url": "assets/patterns/pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/patterns/pixel-transparent.webp",
    "revision": "d8fb6075b971d4da3035f547bbea6db5"
  },
  {
    "url": "assets/patterns/pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/patterns/pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/sounds/ambience.ogg",
    "revision": "8e76e4b5440d0fcc3b82e32beda6f014"
  },
  {
    "url": "careers.html",
    "revision": "e5630d8b699d2cddcb7dc9c30c280522"
  },
  {
    "url": "error.html",
    "revision": "02b10169bd573c18ad0ba8f2d0500887"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "c489013fe50e38e6b363a49ddcd3c413"
  },
  {
    "url": "favicon-16x16.webp",
    "revision": "368fb9de11bf5768b0015c30c7e45ca0"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "aba1961f1c9c2a3318c0eebaba0461c6"
  },
  {
    "url": "favicon-32x32.webp",
    "revision": "c7ffa0096b8fbb51cf2faf5824258d96"
  },
  {
    "url": "index.html",
    "revision": "691d4858e67cddcaf877f052345515b4"
  },
  {
    "url": "legal.html",
    "revision": "7de8277d7b88a10d70a4fd18a6564e32"
  },
  {
    "url": "management.html",
    "revision": "64a76fcd490d3b15366cf54e62a4ce1e"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "3b891fc0caaca1306755ac2eb5623fdd"
  },
  {
    "url": "mstile-144x144.webp",
    "revision": "be19d41709914f136593e6abfbd6244d"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "92720443dd39724a646baffdecd93a4d"
  },
  {
    "url": "mstile-150x150.webp",
    "revision": "85b96ce65476617c580e10597cb52f15"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "b1ded27392bb840105383397c4dd9500"
  },
  {
    "url": "mstile-310x150.webp",
    "revision": "ee04478e471f8a60f359ad88210d9909"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "3f5ef698f16b5b0f074dcb8e404fe938"
  },
  {
    "url": "mstile-310x310.webp",
    "revision": "a2e829164c2d6dd8a4636c91866b514a"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "e7fb040465325771246adfb0f2801641"
  },
  {
    "url": "mstile-70x70.webp",
    "revision": "a88ad367b6266fbca9b373f85a08e79a"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "185f5fe11d2ff51bccc5e119f25437f9"
  },
  {
    "url": "scripts/a.b5211eb973.vendors.js",
    "revision": "3a6f30b168df486a976f93bb4f844892"
  },
  {
    "url": "scripts/app.79951e6c93.css",
    "revision": "486b7a10cf5df7de15676b2cf508e85c"
  },
  {
    "url": "scripts/b.caaf8f0137.app.js",
    "revision": "1bdbf42b48a39b27df8f3c48c41fc273"
  },
  {
    "url": "technology.html",
    "revision": "bcc51aa89a5919fe66046c5836e3e8c4"
  },
  {
    "url": "vision.html",
    "revision": "cbf5fb5eb3ba599f58c96d0bc10cd0ba"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "fd0fa079d55b3415e339f2fe7709eac7"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "f7d05c95afe1c67fb7e66dc3b4c193e0"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "e64c4438cba2dc6502becbc112296c3c"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "6939cf279137d993f276be3269f24dc7"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "33aaad79235bb405b15b4a6b9a257cfa"
  },
  {
    "url": "webfonts/fa-duotone-900.eot",
    "revision": "013b4575b265d3a3c82f5585828a8fe4"
  },
  {
    "url": "webfonts/fa-duotone-900.svg",
    "revision": "4af84a40bca01b38ff18190ad07f1e78"
  },
  {
    "url": "webfonts/fa-duotone-900.ttf",
    "revision": "4e5de4c3b605b940a3bd26682a5269a8"
  },
  {
    "url": "webfonts/fa-duotone-900.woff",
    "revision": "57006f496cfa3b37e057a9940a7a3231"
  },
  {
    "url": "webfonts/fa-duotone-900.woff2",
    "revision": "71995d7a370d38d5e1a05f80368eaefe"
  },
  {
    "url": "webfonts/fa-light-300.eot",
    "revision": "2acd74ecc050777d9e5d8df7fc4439b8"
  },
  {
    "url": "webfonts/fa-light-300.svg",
    "revision": "39fb4a7fb52a3b712f247c0ea5e365a9"
  },
  {
    "url": "webfonts/fa-light-300.ttf",
    "revision": "a2ad308f137d2ada86ff54a4d7be9976"
  },
  {
    "url": "webfonts/fa-light-300.woff",
    "revision": "68b0e21139f22be61f55bba014320d3f"
  },
  {
    "url": "webfonts/fa-light-300.woff2",
    "revision": "d3998f382dead315a0c879e759d910e8"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "75c430eaea0b81dcf7c883ac40e67fef"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "fd5e0afbaab6e8d4ae2b994e1aa846d3"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "899985570c39182c80185b8485b8bb4d"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "60b0efc917b4fc5307c2981d9f135577"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "56cd97445580e6624a4b0e208fe5e284"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "b1a73cbe96752b2ef64bfcb69163c74c"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "5f631b7085569a5e408213753c89e124"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "381ca542ff52670201fe647d4d9b7c59"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "6b69afce567c4dbe214e57c482388c63"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "d9d4d1943134e19015ad79194345b4aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"maxAgeSeconds":60,"purgeOnQuotaError":false})] }), 'GET');
