!function(){"use strict";var e,t,n,r,o,i,c,a={},u={};function f(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return a[e](n,n.exports,f),n.exports}f.m=a,e=[],f.O=function(t,n,r,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var c=!0,a=0;a<n.length;a++)(!1&o||i>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[a])}))?n.splice(a--,1):(c=!1,o<i&&(i=o));if(c){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},f.d(o,i),o},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return({7:"component---src-pages-blog-js",74:"component---src-pages-the-void-js",159:"component---src-pages-loop-js",532:"styles",540:"component---src-pages-markdown-remark-frontmatter-url-js",634:"d9d6e61c2ea0efd0e6a281c78dd52c23798bcf7f",660:"b28b2f5a925d9162e4ed64a311f52cd9bf745617",678:"component---src-pages-index-js",682:"component---src-pages-about-js",774:"framework",853:"component---src-pages-projects-js",883:"component---src-pages-404-js"}[e]||e)+"-"+{7:"60fd19a6138615e3d8d0",74:"df6a766d93a6ccaf59d5",159:"5c70e8e2f8055f41c885",231:"be91ec3560c37e680e53",532:"f988e8306b32dade246d",540:"02ebaa2c2b035fc613a1",634:"d2b0a603dfc9f3f33598",660:"f017f381d933a91b156e",678:"244ce38a9892fe9c1877",680:"ab96475931e339761b83",682:"5054f3a984eeb77c00e5",774:"846991ac2d5e83f1b3d1",853:"fef03aa2f580991d0f12",883:"0d5e7efca6ca5e5da74c"}[e]+".js"},f.miniCssF=function(e){return"styles.54c3125399efa519e15d.css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="luca-pizzagalli-website:",f.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var c,a;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){c=s;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",i=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var c;if((o=(c=i[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=a,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},c={658:0},f.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{532:1}[e]&&t.push(c[e]=i(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={658:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=f.p+f.u(t),c=new Error;f.l(i,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],c=n[1],a=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)f.o(c,r)&&(f.m[r]=c[r]);if(a)var d=a(f)}for(t&&t(n);u<i.length;u++)o=i[u],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(d)},n=self.webpackChunkluca_pizzagalli_website=self.webpackChunkluca_pizzagalli_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-1e1a1894dc2eff7d040a.js.map