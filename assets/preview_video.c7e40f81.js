import{f as e,t,z as r,w as n,x as o,y as i,A as a,I as l,n as s,p as c,B as d,_ as u}from"./index.4e0c905f.js";import{i as v,f as p,t as g,c as y,h as m,d as _,I as f,n as b,F as h,s as $,p as w,z as x,l as E,o as k}from"./vendor.03bc8c46.js";const L=g('<video class="object-contain w-full h-full"><span></span></video>'),S=g('<div class="handles-clicks relative"><div class="w-full h-full relative overflow-hidden"><div><button class="block transform scale-200 hover:scale-300 transition-transform"></button></div><div><div class="h-1 w-full relative bg-rgray-100 bg-opacity-50"><div class="absolute h-full bg-rgray-700"></div></div></div><div><div><div class="absolute h-full bg-rgray-700"></div></div><div class="flex flex-wrap items-center transform transition-transform origin-bottom"><button class="block"></button><div></div><div class="flex-grow"></div><button class="block"></button><button class="block"></button><button class="block"></button></div></div></div><div class="flex"></div><div class="flex">Quality: </div><div class="absolute pointer-events-none transition-opacity"><div></div></div></div>'),P=g("<div><p>Error! </p></div>"),T=g('<div class="absolute h-full bg-rgray-500 bg-opacity-75"></div>'),C=g('<div class="absolute h-full bg-rgray-900 bg-opacity-50"></div>'),N=g("<button>×</button>"),R=g("<button></button>"),q=g("<video></video>"),A=g("<source>"),D=g("<div></div>"),O=g("<div>Caption: </div>");function j(e){const t=e/60/60|0,r=(e/60|0)%60,n=(0|e)%60;return(t?t.toString().padStart(2,"0")+":":"")+r.toString().padStart(t?2:1,"0")+":"+n.toString().padStart(2,"0")}let z=!1;function V(e){let t,r;const n=async()=>{if(r)return r;const{default:t}=await u((()=>import("./shaka-player.compiled.2054d721.js").then((function(e){return e.s}))),["assets/shaka-player.compiled.2054d721.js","assets/_commonjsHelpers.4e997714.js"]);return await async function(e){if(window.muxjs||(window.muxjs=(await u((()=>import("./index.99d04dc3.js").then((function(e){return e.i}))),[])).default),!z){if(e.polyfill.installAll(),!e.Player.isBrowserSupported())throw new Error("Shaka player is not supported");z=!0}}(t),r=new t.Player,console.log(r.getConfiguration()),r.addEventListener("error",(t=>{console.log("Error!",t),e.setState("error_overlay","An error occured. Check console.")})),r};x((()=>{e.videoRef({play:()=>{t.play()},pause:()=>t.pause(),setPlaybackRate:e=>{t.playbackRate=e,o()},seek:e=>{r&&r.isLive()?t.currentTime=e+r.seekRange().start:t.currentTime=e,o()},reload:()=>{i(t.currentTime)},goToLive(){r&&r.isLive()&&r.goToLive()}}),m(E([()=>e.source],(()=>{i(0)}),{defer:!0}));const i=o=>{(async()=>{console.log("Reloading Video",o);let i=new Error("No sources");for(const l of e.sources)try{if(r&&await r.detach(),t.src="",t.onerror=()=>{},t.onload=()=>{},t.onloadedmetadata=()=>{},l.url.endsWith(".m3u8")||l.url.endsWith(".mpd")){const r=await n();e.setState("playing","loading"),await r.attach(t),console.log("trying to load",l.url),await r.load(l.url,o),r.isLive()&&r.goToLive()}else await new Promise(((r,n)=>{t.onerror=t=>{console.log(t),i=new Error("error "+t),e.setState("errored_sources",(e=>({...e,[l.i]:!0}))),n(i)},t.onload=()=>{r()},t.onloadedmetadata=()=>{t.currentTime=o},t.src=l.url,t.load()}));return}catch(a){i=a,e.setState("errored_sources",(e=>({...e,[l.i]:!0})))}throw i})().then((()=>{console.log("Player loaded")})).catch((t=>{var r;console.log(t),e.setState("error_overlay",null!=(r=t.stack)?r:t.toString())}))};i(0),k((()=>{r&&r.destroy().then((()=>{console.log("player destroyed")})).catch((e=>{console.log("error destroying player",e)}))}))}));const o=()=>{const n=[];for(let e=0;e<t.buffered.length;e++)n.push({start:t.buffered.start(e),end:t.buffered.end(e)});e.setState(d((e=>{if(console.log(null==r?void 0:r.seekRange()),r&&r.isLive()){const o=r.seekRange();e.current_time=t.currentTime-o.start,e.max_time=o.end-o.start,e.live={start:r.getPresentationStartTimeAsDate().getTime(),current:r.getPlayheadTimeAsDate().getTime()},e.buffered=n.map((e=>({start:e.start-o.start,end:e.end-o.start})))}else e.current_time=t.currentTime,e.max_time=t.duration,e.live=null,e.buffered=n;e.playing=!t.paused&&!t.ended&&(!(t.readyState<t.HAVE_FUTURE_DATA)||"loading"),e.quality=0===t.videoWidth?null:{w:t.videoWidth,h:t.videoHeight},0!==t.playbackRate&&(e.playback_rate=t.playbackRate)}))),t.error?e.setState("error_overlay",t.error.message):t.networkState===t.NETWORK_NO_SOURCE?e.setState("error_overlay","Video could not be loaded."):e.setState("error_overlay",null)};return(()=>{const r=L.cloneNode(!0),n=r.firstChild;r.addEventListener("emptied",(()=>{o()})),r.addEventListener("loadeddata",(()=>{o()})),r.addEventListener("durationchange",(()=>{o()})),r.addEventListener("loadedmetadata",(()=>{o()})),r.addEventListener("stalled",(()=>{o()})),r.addEventListener("waiting",(()=>{o()})),r.addEventListener("pause",(()=>{o()})),r.addEventListener("timeupdate",(()=>{o()})),r.addEventListener("canplaythrough",(()=>{o()})),r.addEventListener("progress",(()=>{o()})),r.addEventListener("volumechange",(()=>{o()})),r.addEventListener("ratechange",(()=>{o()})),r.addEventListener("playing",(()=>{o()})),r.addEventListener("play",(()=>{o()}));return"function"==typeof t?t(r):t=r,r.addEventListener("error",(e=>{o()}),!0),v(n,(()=>{var t;return null!=(t=e.video.alt)?t:"Your device does not support video, and alt text was not supplied."})),_((t=>{const n=!e.custom_controls,o=e.autoplay,i=e.video.gifv,a=e.source.thumbnail;return n!==t._v$&&(r.controls=t._v$=n),o!==t._v$2&&(r.autoplay=t._v$2=o),i!==t._v$3&&(r.loop=t._v$3=i),a!==t._v$4&&$(r,"poster",t._v$4=a),t}),{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),r})()}function F(t){const[r,n]=y(0);let d;const[u,g]=o({max_time:0,current_time:0,quality:null,buffered:[],playing:"loading",error_overlay:null,errored_sources:{},playback_rate:1,live:null}),[w,x]=y(!1),[E,k]=y(null),L=s(),D=()=>"custom"===L.custom_video_controls.value()||!!u.live,O=()=>!!D()&&w(),z=i();m((()=>{z()||d.pause()}));let F;const[B,W]=y(!1);return(()=>{const o=S.cloneNode(!0),i=o.firstChild,s=i.firstChild,y=s.firstChild,w=s.nextSibling,L=w.firstChild,z=L.firstChild,I=w.nextSibling,U=I.firstChild,X=U.firstChild,H=U.nextSibling.firstChild,K=H.nextSibling,M=K.nextSibling.nextSibling,Q=M.nextSibling,Y=Q.nextSibling,G=i.nextSibling,J=G.nextSibling;J.firstChild;const Z=J.nextSibling,ee=Z.firstChild;var te,re;return"function"==typeof F?F(o):F=o,i.addEventListener("mouseleave",(()=>{x(!1)})),i.$$mousemove=()=>{x(!0)},i.addEventListener("mouseenter",(()=>{x(!0)})),v(i,p(V,{state:u,setState:g,videoRef:e=>d=e,get video(){return t.video},get source(){return t.source},get sources(){return(()=>{const e=r(),n=t.source.sources.map(((e,t)=>({...e,i:t})));return[...n.filter((t=>t.i>=e)),...n.filter((t=>t.i<e)).reverse()]})()},get autoplay(){return t.autoplay},get custom_controls(){return D()}}),s),v(i,p(e,{get when(){return u.error_overlay},children:e=>(()=>{const t=P.cloneNode(!0),r=t.firstChild;return r.firstChild,v(r,e,null),_((e=>{const r=a("absolute top-0 left-0 bottom-0 right-0 p-4 bg-rgray-900 bg-opacity-75"),n=D()?"block":"none";return r!==e._v$15&&(t.className=e._v$15=r),n!==e._v$16&&t.style.setProperty("display",e._v$16=n),e}),{_v$15:void 0,_v$16:void 0}),t})()}),s),y.$$click=()=>{!1===u.playing?d.play():d.pause()},y.style.setProperty("filter","drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))"),v(y,p(l,{size:"icon-sm",get icon(){return!1===u.playing?{class:"icon-play-button",label:"Play"}:!0===u.playing?{class:"icon-play-pause",label:"Pause"}:{class:"icon-spinner-alt",label:"Loading"}}})),v(L,p(f,{get each(){return u.buffered},children:(e,t)=>(()=>{const t=T.cloneNode(!0);return _((r=>{const n=(e().end-e().start)/u.max_time*100+"%",o=e().start/u.max_time*100+"%";return n!==r._v$17&&t.style.setProperty("width",r._v$17=n),o!==r._v$18&&t.style.setProperty("left",r._v$18=o),r}),{_v$17:void 0,_v$18:void 0}),t})()}),z),U.$$mouseup=e=>{const t=e.currentTarget.getBoundingClientRect(),r=(e.clientX-t.left)/t.width;d.seek(r*u.max_time)},U.addEventListener("mouseleave",(()=>{k(null)})),U.$$mousemove=e=>{const t=e.currentTarget.getBoundingClientRect(),r=F.getBoundingClientRect();k({seeking:!1,percent:(e.clientX-t.left)/t.width,preview:[e.clientX-r.left,r.bottom-t.top]})},v(U,p(f,{get each(){return u.buffered},children:(e,t)=>(()=>{const t=T.cloneNode(!0);return _((r=>{const n=(e().end-e().start)/u.max_time*100+"%",o=e().start/u.max_time*100+"%";return n!==r._v$19&&t.style.setProperty("width",r._v$19=n),o!==r._v$20&&t.style.setProperty("left",r._v$20=o),r}),{_v$19:void 0,_v$20:void 0}),t})()}),X),v(U,p(e,{get when(){return E()},children:e=>(()=>{const t=C.cloneNode(!0);return _((()=>t.style.setProperty("width",100*e.percent+"%"))),t})()}),null),H.$$click=()=>{!1===u.playing?d.play():d.pause()},v(H,p(l,{size:"icon-sm",get icon(){return!1===u.playing?{class:"icon-play-button",label:"Play"}:!0===u.playing?{class:"icon-play-pause",label:"Pause"}:{class:"icon-loadbar",label:"Loading"}}})),K.$$click=()=>{u.live&&d.goToLive()},v(K,(()=>{const e=b((()=>!!u.live),!0);return()=>e()?(()=>{const e=b((()=>u.current_time+2>u.max_time),!0);return()=>e()?j((Date.now()-u.live.current)/1e3)+" delay":j((u.live.current-u.live.start)/1e3)+" / Live"})():j(u.current_time)+" / "+j(u.max_time)})()),M.$$click=()=>{alert("TODO")},v(M,p(l,{size:"icon-sm",icon:{class:"icon-inpicture",label:"Picture in Picture"}})),Q.$$click=()=>{alert("TODO")},v(Q,p(l,{size:"icon-sm",icon:{class:"icon-software-download",label:"Download Video"}})),Y.$$click=()=>{document.fullscreenElement?document.exitFullscreen().then((e=>{W(!1)})).catch((e=>{W(!1)})):F.requestFullscreen().then((e=>{W(!0)})).catch((e=>{W(!1)}))},v(Y,p(l,{size:"icon-sm",get icon(){return B()?{class:"icon-shape-square",label:"Exit Fullscreen"}:{class:"icon-square",label:"Enter Fullscreen"}}})),v(G,p(h,{each:[.25,.5,.75,1,1.25,1.5,1.75,2],children:e=>(()=>{const t=N.cloneNode(!0),r=t.firstChild;return t.addEventListener("click",(()=>d.setPlaybackRate(e))),v(t,e,r),_((r=>{const n=c["outlined-button"],o=u.playback_rate===e;return n!==r._v$21&&(t.className=r._v$21=n),o!==r._v$22&&(t.disabled=r._v$22=o),r}),{_v$21:void 0,_v$22:void 0}),t})()})),v(J,(()=>null==u.quality?"Loading":u.quality.w+"×"+u.quality.h),null),v(J,p(h,{get each(){return(()=>{var e;const r=new Map;for(const[n,o]of t.source.sources.entries())!0!==u.errored_sources[n]&&r.set(null!=(e=o.quality)?e:"Unknown",{index:n});return[...r.entries()].map((([e,t])=>({name:e,...t})))})()},children:(e,t)=>(()=>{const o=R.cloneNode(!0);return o.addEventListener("click",(()=>{n(e.index),d.reload()})),v(o,(()=>e.name)),_((e=>{const n=c["outlined-button"],i=r()===t();return n!==e._v$23&&(o.className=e._v$23=n),i!==e._v$24&&(o.disabled=e._v$24=i),e}),{_v$23:void 0,_v$24:void 0}),o})()}),null),te=Z,m((()=>{const e=E();e&&(te.style.bottom=e.preview[1]+"px",te.style.left=e.preview[0]+"px",te.style.visibility="visible"),te.style.opacity=e?"1":"0"})),Z.addEventListener("transitionend",(e=>{E()||(e.currentTarget.style.visibility="hidden")})),v(Z,p(e,{get when(){return t.source.preview},children:e=>(()=>{const t=q.cloneNode(!0);var r;return r=t,m((()=>{const e=E(),t=r.duration;e&&t&&(r.currentTime=e.percent*t)})),v(t,p(h,{each:e,children:e=>(()=>{const t=A.cloneNode(!0);return _((()=>$(t,"src",e.url))),t})()})),t})()}),ee),re=ee,m((()=>{const e=E();e&&(re.textContent=j(e.percent*u.max_time))})),_((e=>{const r=B()?"":"min(100%, 800px)",n=B()?"":"min(90vh, 500px)",o=u.quality?u.quality.w+" / "+u.quality.h:null!=t.video.aspect?""+t.video.aspect:"16 / 9",l=a("absolute top-0 left-0 bottom-0 right-0 items-center justify-center flex","transform transition",D()&&(!0!==u.playing||O())?"scale-100 opacity-100":"scale-0 opacity-0"),c=a("absolute left-0 right-0 bottom-0","flex flex-col","bg-rgray-900 bg-opacity-25","transform transition-transform origin-top",O()?"scale-y-0":"scale-y-100"),d=u.current_time/u.max_time*100+"%",v=a("absolute left-0 right-0 bottom-0","flex flex-col","bg-rgray-900 bg-opacity-25","transform transition-transform origin-bottom",O()?"scale-y-100":"scale-y-0"),p=a("w-full h-2","relative","bg-rgray-100 bg-opacity-50","transform transition-transform origin-bottom",null!=E()?"scale-y-150":""),g=u.current_time/u.max_time*100+"%",y=a(u.live?"hover:cursor-pointer":"");return r!==e._v$5&&i.style.setProperty("max-width",e._v$5=r),n!==e._v$6&&i.style.setProperty("max-height",e._v$6=n),o!==e._v$7&&i.style.setProperty("aspect-ratio",e._v$7=o),l!==e._v$8&&(s.className=e._v$8=l),c!==e._v$9&&(w.className=e._v$9=c),d!==e._v$10&&z.style.setProperty("width",e._v$10=d),v!==e._v$11&&(I.className=e._v$11=v),p!==e._v$12&&(U.className=e._v$12=p),g!==e._v$13&&X.style.setProperty("width",e._v$13=g),y!==e._v$14&&(K.className=e._v$14=y),e}),{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0}),o})()}function B(o){return(()=>{const i=D.cloneNode(!0);return v(i,p(e,{get when(){return o.video.caption},children:e=>(()=>{const t=O.cloneNode(!0);return t.firstChild,v(t,e,null),t})()}),null),v(i,p(n,{get item(){return o.video.source},children:{video:e=>p(F,{get video(){return o.video},source:e,get autoplay(){return o.autoplay}}),img:e=>p(t,{getValue:(t,n)=>{const i=el("div");return r(e.url,{alt:o.video.alt}).adto(i),i}})}}),null),i})()}w(["mousemove","click","mouseup"]);export{B as default};
