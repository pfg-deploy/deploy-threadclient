if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-e2cca124"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/_commonjsHelpers.4e997714.js",revision:"9296ad725c7ac9b2a6b412835ec01cc4"},{url:"assets/base.50b98d34.js",revision:"b26d66b0e0a49d426b17e7a4daf8f9b1"},{url:"assets/gallery.1f1f3f72.css",revision:"95bff2239215b1014c88f619e68ab911"},{url:"assets/gallery.cc01eab0.js",revision:"baa5a26423ff4b373646fd892d81bfff"},{url:"assets/hackernews.0060723f.js",revision:"e69f05de01f10782798ba9a6e0de970b"},{url:"assets/html_to_richtext.b2ae01e7.js",revision:"f80050a06fb7c3caeb4ea7517d3fa784"},{url:"assets/index.4154e3c3.css",revision:"40d89a8f1c2a7909f570d18b72299b3a"},{url:"assets/index.99d04dc3.js",revision:"8ebcf3ccb18b6831a7873cc113b3ac31"},{url:"assets/index.f512fd4a.js",revision:"e65a245a547a745233de5743bc5c3152"},{url:"assets/mastodon.5299fd32.js",revision:"4f93621a30277add8d38054025d57924"},{url:"assets/preview_video.ae8ed06a.js",revision:"73a271e0c956444c9b694e657443e8b5"},{url:"assets/prismjs_common.f836b351.js",revision:"5a8462180b1a19aabe3ea1abc33c6758"},{url:"assets/prismjs_other.c9973fc9.js",revision:"30de771dc508e1f93496cc7eb73dbd5e"},{url:"assets/prismjs.9b56e310.js",revision:"0f3199873053dfb3974fc21004e2ac2b"},{url:"assets/reddit.e82a9c83.js",revision:"41fc228516445d17d4c4149f1dd16f53"},{url:"assets/settings.599342a2.js",revision:"6bd69429ae1590f3633ee96c1b51b956"},{url:"assets/shaka-player.compiled.2054d721.js",revision:"6acd7a210efd95fe481992e47521e2ac"},{url:"assets/snudown.69d6942c.js",revision:"26f0f0a339b285e36f4afc1260aeb89a"},{url:"assets/test.69d9a214.js",revision:"527dfca0128605b6469c642a047c4064"},{url:"assets/vbnet.2ba5e327.js",revision:"08ebf68ee858c70801052b5705681ef8"},{url:"assets/vendor.03bc8c46.js",revision:"8b82f19cdfa6d9cc1009d19c210b8d81"},{url:"index.html",revision:"abed0666182171baedbbfcb3355cadba"},{url:"special/preloaded_sample.js",revision:"14791b242d5fd3705d6a42b26c2c8dbc"},{url:"special/serenityos.html",revision:"783114c6d30c5561ef53d1549248b2e2"},{url:"special/serenityos.js",revision:"a76184afac7c5a4f7d418a03e36a12b1"},{url:"manifest.webmanifest",revision:"03289cfb76099bcba8f3a47fd2c3494e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
