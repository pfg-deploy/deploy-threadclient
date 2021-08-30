const e=Symbol("solid-proxy"),n={equals:(e,n)=>e===n};let t=null,r=M;const o={},s={owned:null,cleanups:null,context:null,owner:null};var i=null;let l,u=null,c=null,a=null,f=null,h=0;function d(e,n){n&&(i=n);const t=u,r=i,o=0===e.length?s:{owned:null,cleanups:null,context:null,owner:r};let l;i=o,u=null;try{O((()=>l=e((()=>I(o)))),!0)}finally{u=t,i=r}return l}function p(e,t){t=t?Object.assign({},n,t):n;const r={value:e,observers:null,observerSlots:null,pending:o,comparator:t.equals||void 0};return[L.bind(r),e=>("function"==typeof e&&(e=e(r.pending!==o?r.pending:r.value)),T(r,e))]}function v(e,n,t){W(N(e,n,!0,1))}function g(e,n,t){W(N(e,n,!1,1))}function y(e,n,t){r=U;const o=N(e,n,!1,1),s=l&&D(i,l.id);s&&(o.suspense=s),o.user=!0,f&&f.push(o)}function b(e,t,r){r=r?Object.assign({},n,r):n;const s=N(e,t,!0,0);return s.pending=o,s.observers=null,s.observerSlots=null,s.comparator=r.equals||void 0,W(s),L.bind(s)}function m(e,n,t={}){2===arguments.length?"object"==typeof n&&(t=n,n=e,e=!0):1===arguments.length&&(n=e,e=!0);const r=new Set,[o,s]=p(t.initialValue),[c,a]=p(void 0,{equals:!1}),[f,h]=p(!1),[d,g]=p();let y,b=null,m=null,A="function"==typeof e;function x(e,n,t){return b===e&&(g(y=t),b=null,k(n)),n}function k(e){w((()=>{s((()=>e)),h(!1);for(const e of r.keys())e.decrement();r.clear()}))}function E(){const e=l&&D(i,l.id),n=o();if(y)throw y;return u&&!u.user&&e&&v((()=>{c(),b&&(e.resolved,r.has(e)||(e.increment(),r.add(e)))})),n}function P(){g(y=void 0);const t=A?e():e;if(null==t||!1===t)return void x(b,S(o));const r=m||S((()=>n(t,o)));m=null,"object"==typeof r&&"then"in r?(b=r,w((()=>{h(!0),a()})),r.then((e=>x(r,e)),(e=>x(r,e,e)))):x(b,r)}return Object.defineProperties(E,{loading:{get:()=>f()},error:{get:()=>d()}}),A?v(P):P(),[E,{refetch:P,mutate:s}]}function w(e){if(c)return e();let n;const t=c=[];try{n=e()}finally{c=null}return O((()=>{for(let e=0;e<t.length;e+=1){const n=t[e];if(n.pending!==o){const e=n.pending;n.pending=o,T(n,e)}}}),!1),n}function S(e){let n,t=u;return u=null,n=e(),u=t,n}function A(e,n,t){const r=Array.isArray(e);let o,s=t&&t.defer;return t=>{let i;if(r){i=[];for(let n=0;n<e.length;n++)i.push(e[n]())}else i=e();if(s)return void(s=!1);const l=S((()=>n(i,o,t)));return o=i,l}}function x(e){y((()=>S(e)))}function k(e){return null===i||(null===i.cleanups?i.cleanups=[e]:i.cleanups.push(e)),e}function E(){return u}function P(e){const n=Symbol("context");return{id:n,Provider:G(n),defaultValue:e}}function j(e){return D(i,e.id)||e.defaultValue}function C(e){const n=b(e);return b((()=>F(n())))}function L(){if(this.state&&this.sources){const e=a;a=null,1===this.state?W(this):$(this),a=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function T(e,n,t){if(e.comparator&&e.comparator(e.value,n))return n;if(c)return e.pending===o&&c.push(e),e.pending=n,n;let r=!1;return e.value=n,e.observers&&e.observers.length&&O((()=>{for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];r,t.pure?a.push(t):f.push(t),t.observers&&!t.state&&q(t),t.state=1}if(a.length>1e6)throw a=[],new Error}),!1),n}function W(e){if(!e.fn)return;I(e);const n=i,t=u,r=h;u=i=e,function(e,n,t){let r;try{r=e.fn(n)}catch(o){R(o)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?T(e,r):e.value=r,e.updatedAt=t)}(e,e.value,r),u=t,i=n}function N(e,n,t,r=1,o){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:i,context:null,pure:t};return null===i||i!==s&&(i.owned?i.owned.push(l):i.owned=[l]),l}function B(e){if(1!==e.state)return e.state=0;if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<h);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(1===(e=n[t]).state)W(e);else if(2===e.state){const n=a;a=null,$(e),a=n}}function O(e,n){if(a)return e();let t=!1;n||(a=[]),f?t=!0:f=[],h++;try{e()}catch(o){R(o)}finally{!function(e){a&&(M(a),a=null);if(e)return;f.length?w((()=>{r(f),f=null})):f=null}(t)}}function M(e){for(let n=0;n<e.length;n++)B(e[n])}function U(e){let n,t=0;for(n=0;n<e.length;n++){const r=e[n];r.user?e[t++]=r:B(r)}const r=e.length;for(n=0;n<t;n++)B(e[n]);for(n=r;n<e.length;n++)B(e[n])}function $(e){e.state=0;for(let n=0;n<e.sources.length;n+=1){const t=e.sources[n];t.sources&&(1===t.state?B(t):2===t.state&&$(t))}}function q(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=2,t.pure?a.push(t):f.push(t),t.observers&&q(t))}}function I(e){let n;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),t=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const e=r.pop(),o=n.observerSlots.pop();t<r.length&&(e.sourceSlots[o]=t,r[t]=e,n.observerSlots[t]=o)}}if(e.owned){for(n=0;n<e.owned.length;n++)I(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function R(e){const n=t&&D(i,t);if(!n)throw e;n.forEach((n=>n(e)))}function D(e,n){return e&&(e.context&&e.context[n]||e.owner&&D(e.owner,n))}function F(e){if("function"==typeof e&&!e.length)return F(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const r=F(e[t]);Array.isArray(r)?n.push.apply(n,r):n.push(r)}return n}return e}function G(e){return function(n){let t;return v((()=>t=S((()=>(i.context={[e]:n.value},C((()=>n.children))))))),t}}const V=Symbol("fallback");function X(e){for(let n=0;n<e.length;n++)e[n]()}function z(e,n){return S((()=>e(n)))}function H(e){let n;const t=t=>{if(n){const e=n();if(e)return e(t)}else{const[t]=m((()=>e().then((e=>e.default))));n=t}let r;return b((()=>(r=n())&&S((()=>r(t)))))};return t.preload=()=>n||e().then((e=>n=()=>e.default)),t}function K(e){const n="fallback"in e&&{fallback:()=>e.fallback};return b(function(e,n,t={}){let r=[],o=[],s=[],i=0,l=n.length>1?[]:null;return k((()=>X(s))),()=>{let u,c,a=e()||[];return S((()=>{let e,n,h,p,v,g,y,b,m,w=a.length;if(0===w)0!==i&&(X(s),s=[],r=[],o=[],i=0,l&&(l=[])),t.fallback&&(r=[V],o[0]=d((e=>(s[0]=e,t.fallback()))),i=1);else if(0===i){for(o=new Array(w),c=0;c<w;c++)r[c]=a[c],o[c]=d(f);i=w}else{for(h=new Array(w),p=new Array(w),l&&(v=new Array(w)),g=0,y=Math.min(i,w);g<y&&r[g]===a[g];g++);for(y=i-1,b=w-1;y>=g&&b>=g&&r[y]===a[b];y--,b--)h[b]=o[y],p[b]=s[y],l&&(v[b]=l[y]);for(e=new Map,n=new Array(b+1),c=b;c>=g;c--)m=a[c],u=e.get(m),n[c]=void 0===u?-1:u,e.set(m,c);for(u=g;u<=y;u++)m=r[u],c=e.get(m),void 0!==c&&-1!==c?(h[c]=o[u],p[c]=s[u],l&&(v[c]=l[u]),c=n[c],e.set(m,c)):s[u]();for(c=g;c<w;c++)c in h?(o[c]=h[c],s[c]=p[c],l&&(l[c]=v[c],l[c](c))):o[c]=d(f);o=o.slice(0,i=w),r=a.slice(0)}return o}));function f(e){if(s[c]=e,l){const[e,t]=p(c);return l[c]=t,n(a[c],e)}return n(a[c])}}}((()=>e.each),e.children,n||void 0))}function J(e){const n="fallback"in e&&{fallback:()=>e.fallback};return b(function(e,n,t={}){let r,o=[],s=[],i=[],l=[],u=0;return k((()=>X(i))),()=>{const c=e()||[];return S((()=>{if(0===c.length)return 0!==u&&(X(i),i=[],o=[],s=[],u=0,l=[]),t.fallback&&(o=[V],s[0]=d((e=>(i[0]=e,t.fallback()))),u=1),s;for(o[0]===V&&(i[0](),i=[],o=[],s=[],u=0),r=0;r<c.length;r++)r<o.length&&o[r]!==c[r]?l[r]((()=>c[r])):r>=o.length&&(s[r]=d(a));for(;r<o.length;r++)i[r]();return u=l.length=i.length=c.length,o=c.slice(0),s=s.slice(0,u)}));function a(e){i[r]=e;const[t,o]=p(c[r]);return l[r]=o,n(t,r)}}}((()=>e.each),e.children,n||void 0))}function Q(e){let n=!1;const t=C((()=>e.children)),r=b((()=>{let e=t();Array.isArray(e)||(e=[e]);for(let n=0;n<e.length;n++){const t=e[n].when;if(t)return[n,t,e[n]]}return[-1]}),void 0,{equals:(e,t)=>e&&e[0]===t[0]&&(n?e[1]===t[1]:!e[1]==!t[1])&&e[2]===t[2]});return b((()=>{const[t,o,s]=r();if(t<0)return e.fallback;const i=s.children;return(n="function"==typeof i&&i.length>0)?S((()=>i(o))):i}))}function Y(e){return e}function Z(e){const[n,r]=p();let o;return b((()=>{if(null!=(o=n())){const n=e.fallback;return"function"==typeof n&&n.length?S((()=>n(o,(()=>r(null))))):n}var s;return s=r,t||(t=Symbol("error")),null===i||(null===i.context?i.context={[t]:[s]}:i.context[t]?i.context[t].push(s):i.context[t]=[s]),e.children}))}const ee=P();function ne(e){let n,t,r=0;const[o,s]=p(!1),i=l||(l=P({})),u={increment:()=>{1==++r&&s(!0)},decrement:()=>{0==--r&&s(!1)},inFallback:o,effects:[],resolved:!1},c=j(ee);return c&&([n,t]=c.register(u.inFallback)),z(i.Provider,{value:u,get children(){const r=S((()=>e.children));return b((()=>{const o=u.inFallback(),s=!n||n(),i=!t||t();return!o&&s?(u.resolved=!0,l=u.effects,f.push.apply(f,l),l.length=0,r):i?e.fallback:void 0;var l}))}})}function te(e,n){return b(e,void 0,n?void 0:{equals:n})}function re(e,n,t){let r=t.length,o=n.length,s=r,i=0,l=0,u=n[o-1].nextSibling,c=null;for(;i<o||l<s;)if(n[i]!==t[l]){for(;n[o-1]===t[s-1];)o--,s--;if(o===i){const n=s<r?l?t[l-1].nextSibling:t[s-l]:u;for(;l<s;)e.insertBefore(t[l++],n)}else if(s===l)for(;i<o;)c&&c.has(n[i])||e.removeChild(n[i]),i++;else if(n[i]===t[s-1]&&t[l]===n[o-1]){const r=n[--o].nextSibling;e.insertBefore(t[l++],n[i++].nextSibling),e.insertBefore(t[--s],r),n[o]=t[s]}else{if(!c){c=new Map;let e=l;for(;e<s;)c.set(t[e],e++)}const r=c.get(n[i]);if(null!=r)if(l<r&&r<s){let u,a=i,f=1;for(;++a<o&&a<s&&null!=(u=c.get(n[a]))&&u===r+f;)f++;if(f>r-l){const o=n[i];for(;l<r;)e.insertBefore(t[l++],o)}else e.replaceChild(t[l++],n[i++])}else i++;else e.removeChild(n[i++])}}else i++,l++}function oe(e,n,t){let r;return d((o=>{r=o,ce(n,e(),n.firstChild?null:void 0,t)})),()=>{r(),n.textContent=""}}function se(e,n,t){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return t&&(o=o.firstChild),o}function ie(e,n=window.document){const t=n._$DX_DELEGATE||(n._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];t.has(o)||(t.add(o),n.addEventListener(o,ae))}}function le(e,n,t){null==t?e.removeAttribute(n):e.setAttribute(n,t)}function ue(e,n,t={}){const r=e.style;if("string"==typeof n)return r.cssText=n;let o,s;for(s in"string"==typeof t&&(t={}),t)null==n[s]&&r.removeProperty(s),delete t[s];for(s in n)o=n[s],o!==t[s]&&(r.setProperty(s,o),t[s]=o);return t}function ce(e,n,t,r){if(void 0===t||r||(r=[]),"function"!=typeof n)return fe(e,n,r,t);g((r=>fe(e,n(),r,t)),r)}function ae(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t});null!==t;){const r=t[n];if(r&&!t.disabled){const o=t[`${n}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function fe(e,n,t,r,o){for(;"function"==typeof t;)t=t();if(n===t)return t;const s=typeof n,i=void 0!==r;if(e=i&&t[0]&&t[0].parentNode||e,"string"===s||"number"===s)if("number"===s&&(n=n.toString()),i){let o=t[0];o&&3===o.nodeType?o.data=n:o=document.createTextNode(n),t=pe(e,t,r,o)}else t=""!==t&&"string"==typeof t?e.firstChild.data=n:e.textContent=n;else if(null==n||"boolean"===s)t=pe(e,t,r);else{if("function"===s)return g((()=>{let o=n();for(;"function"==typeof o;)o=o();t=fe(e,o,t,r)})),()=>t;if(Array.isArray(n)){const s=[];if(he(s,n,o))return g((()=>t=fe(e,s,t,r,!0))),()=>t;if(0===s.length){if(t=pe(e,t,r),i)return t}else Array.isArray(t)?0===t.length?de(e,s,r):re(e,t,s):null==t||""===t?de(e,s):re(e,i&&t||[e.firstChild],s);t=s}else if(n instanceof Node){if(Array.isArray(t)){if(i)return t=pe(e,t,r,n);pe(e,t,null,n)}else null!=t&&""!==t&&e.firstChild?e.replaceChild(n,e.firstChild):e.appendChild(n);t=n}}return t}function he(e,n,t){let r=!1;for(let o=0,s=n.length;o<s;o++){let s,i=n[o];if(i instanceof Node)e.push(i);else if(null==i||!0===i||!1===i);else if(Array.isArray(i))r=he(e,i)||r;else if("string"==(s=typeof i))e.push(document.createTextNode(i));else if("function"===s)if(t){for(;"function"==typeof i;)i=i();r=he(e,Array.isArray(i)?i:[i])||r}else e.push(i),r=!0;else e.push(document.createTextNode(i.toString()))}return r}function de(e,n,t){for(let r=0,o=n.length;r<o;r++)e.insertBefore(n[r],t)}function pe(e,n,t,r){if(void 0===t)return e.textContent="";const o=r||document.createTextNode("");if(n.length){let r=!1;for(let s=n.length-1;s>=0;s--){const i=n[s];if(o!==i){const n=i.parentNode===e;r||s?n&&e.removeChild(i):n?e.replaceChild(o,i):e.insertBefore(o,t)}else r=!0}}else e.insertBefore(o,t);return[o]}try{self["workbox:window:6.2.4"]&&_()}catch(Ee){}function ve(e,n){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(e){t(e.data)},e.postMessage(n,[r.port2])}))}function ge(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}try{self["workbox:core:6.2.4"]&&_()}catch(Ee){}var ye=function(){var e=this;this.promise=new Promise((function(n,t){e.resolve=n,e.reject=t}))};function be(e,n){var t=location.href;return new URL(e,t).href===new URL(n,t).href}var me=function(e,n){this.type=e,Object.assign(this,n)};function we(e,n,t){return t?n?n(e):e:(e&&e.then||(e=Promise.resolve(e)),n?e.then(n):e)}function Se(){}var Ae={type:"SKIP_WAITING"};function xe(e,n){if(!n)return e&&e.then?e.then(Se):Promise.resolve()}var ke=function(e){var n,t;function r(n,t){var r,o;return void 0===t&&(t={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new ye,r.en=new ye,r.on=new ye,r.un=0,r.an=new Set,r.cn=function(){var e=r.fn,n=e.installing;r.tn>0||!be(n.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=n,e.removeEventListener("updatefound",r.cn)):(r.hn=n,r.an.add(n),r.rn.resolve(n)),++r.tn,n.addEventListener("statechange",r.ln)},r.ln=function(e){var n=r.fn,t=e.target,o=t.state,s=t===r.vn,i={sw:t,isExternal:s,originalEvent:e};!s&&r.mn&&(i.isUpdate=!0),r.dispatchEvent(new me(o,i)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&n.waiting===t&&r.dispatchEvent(new me("waiting",i))}),200):"activating"===o&&(clearTimeout(r.wn),s||r.en.resolve(t))},r.dn=function(e){var n=r.hn,t=n!==navigator.serviceWorker.controller;r.dispatchEvent(new me("controlling",{isExternal:t,originalEvent:e,sw:n,isUpdate:r.mn})),t||r.on.resolve(n)},r.gn=(o=function(e){var n=e.data,t=e.ports,o=e.source;return we(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new me("message",{data:n,originalEvent:e,ports:t,sw:o}))}))},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(o.apply(this,e))}catch(t){return Promise.reject(t)}}),r.sn=n,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var o,s=r.prototype;return s.register=function(e){var n,t,r=(void 0===e?{}:e).immediate,o=void 0!==r&&r;try{var s=this;return n=function(){return s.mn=Boolean(navigator.serviceWorker.controller),s.yn=s.pn(),we(s.bn(),(function(e){s.fn=e,s.yn&&(s.hn=s.yn,s.en.resolve(s.yn),s.on.resolve(s.yn),s.yn.addEventListener("statechange",s.ln,{once:!0}));var n=s.fn.waiting;return n&&be(n.scriptURL,s.sn.toString())&&(s.hn=n,Promise.resolve().then((function(){s.dispatchEvent(new me("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),s.hn&&(s.rn.resolve(s.hn),s.an.add(s.hn)),s.fn.addEventListener("updatefound",s.cn),navigator.serviceWorker.addEventListener("controllerchange",s.dn),s.fn}))},(t=function(){if(!o&&"complete"!==document.readyState)return xe(new Promise((function(e){return window.addEventListener("load",e)})))}())&&t.then?t.then(n):n()}catch(i){return Promise.reject(i)}},s.update=function(){try{return this.fn?xe(this.fn.update()):void 0}catch(Ee){return Promise.reject(Ee)}},s.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(e){try{return we(this.getSW(),(function(n){return ve(n,e)}))}catch(Ee){return Promise.reject(Ee)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ve(this.fn.waiting,Ae)},s.pn=function(){var e=navigator.serviceWorker.controller;return e&&be(e.scriptURL,this.sn.toString())?e:void 0},s.bn=function(){try{var e=this;return function(n,t){try{var r=we(navigator.serviceWorker.register(e.sn,e.nn),(function(n){return e.un=performance.now(),n}))}catch(o){return t(o)}return r&&r.then?r.then(void 0,t):r}(0,(function(e){throw e}))}catch(n){return Promise.reject(n)}},(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(r.prototype,o),r}(function(){function e(){this.Pn=new Map}var n=e.prototype;return n.addEventListener=function(e,n){this.Sn(e).add(n)},n.removeEventListener=function(e,n){this.Sn(e).delete(n)},n.dispatchEvent=function(e){e.target=this;for(var n,t=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return ge(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ge(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}(this.Sn(e.type));!(n=t()).done;)(0,n.value)(e)},n.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());export{e as $,Z as E,K as F,J as I,Y as M,Q as S,b as a,w as b,p as c,d,z as e,y as f,E as g,P as h,j as i,g as j,ce as k,A as l,ue as m,te as n,k as o,ie as p,ne as q,oe as r,le as s,se as t,S as u,m as v,H as w,ke as x,ve as y,x as z};
