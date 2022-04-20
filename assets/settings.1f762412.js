import{f as $,i as n,j as t,T as g,C as _,A as C,R as D,r as i,S as k,k as x,l as m,n as b,L as O,p as S,t as a,v as y,q as T,u as B,w as V,x as N,y as A,z as U}from"./index.b7185344.js";import{D as se,B as re}from"./index.b7185344.js";const L=a('<h2 class="text-2xl font-black"></h2>'),E=a("<section></section>"),F=a("<button>Update Now</button>"),P=a(`<p class="my-4 whitespace-pre-wrap">Current Version: <!> (<!>)
Available for Offline Use: </p>`),R=a('<div class="inline-block"></div>'),H=a('<p class="my-4">Show a notice when an update is available. Updates are installed automatically after closing all ThreadClient tabs and refreshing the page twice, or manually by clicking the Update button on an Update notice.</p>'),M=a('<p class="my-4">Show a banner at the top of the page when a changelog is available. </p>'),j=a('<p class="my-4">Custom video controls are currently work in progress. Once they are complete, they will be enabled by default.</p>'),z=a('<p class="my-4">Chooses if image galleries should display in fullscreen or inline. Note that not all galleries are supported for fullscreen display.</p>'),I=a('<div class="my-2"><div class="inline-block"></div></div>'),q=a('<textarea class="w-full bg-slate-300 dark:bg-zinc-900 p-2 placeholder-slate-500 dark:placeholder-slate-400" rows="4" placeholder="~ Sent from my Samsung Smart Fridge"></textarea>'),G=a('<p class="my-4">Set a signature to be added to the end of all your posts. TODO: You should be able to specify signatures per-account rather than globally. This would also allow showing a preview of what the signature will look lile. TODO: show a preview editor here. that will be doable once this is per-account because accounts will be associated with a client.</p>'),W=a('<p class="my-4">Chooses if external links should be opened in a new tab or in the same tab as ThreadClient. </p>'),Y=a('<p class="my-2">Leave all these default. Changing these will break things. </p>'),J=a('<h3 class="mt-6 text-sm uppercase font-bold text-slate-600 dark:text-zinc-400">Page Version</h3>'),K=a('<p class="my-2">Uses the new page2 renderer.</p>'),Q=a('<h3 class="mt-6 text-sm uppercase font-bold text-slate-600 dark:text-zinc-400">Developer Mode</h3>'),X=a('<p class="my-2">Highlight updates</p>'),Z=a('<main class="client-wrapper"><div class="display-comments-view"></div></main>'),ee=a("<button>Show Anyway</button>");function p(r){return(()=>{const d=E.cloneNode(!0);return n(d,t(g,{get children(){return[(()=>{const s=L.cloneNode(!0);return n(s,()=>r.title),s})(),m(()=>r.children)]}})),d})()}function te(){const[r,d]=$(!1);return(()=>{const s=P.cloneNode(!0),l=s.firstChild,h=l.nextSibling,o=h.nextSibling,e=o.nextSibling;return e.nextSibling,n(s,()=>y.version.trim(),h),n(s,()=>y.build_time,e),n(s,()=>T()?"yes":"maybe",null),n(s,t(N,{get if(){return B()},get children(){return[`
`,"An update is available."," ",(()=>{const c=F.cloneNode(!0);return c.$$click=()=>{d(!0),V(!0).then(()=>{d(!1)}).catch(f=>{d(!1),console.log(f),alert("Error updating")})},b(f=>{const w=S["outlined-button"],v=r();return w!==f._v$&&(c.className=f._v$=w),v!==f._v$2&&(c.disabled=f._v$2=v),f},{_v$:void 0,_v$2:void 0}),c})()]}}),null),s})()}function u(r){return(()=>{const d=R.cloneNode(!0);return n(d,t(x,{get value(){return r.setting.override()},setValue:s=>r.setting.setOverride(s),get choices(){return r.options.map(s=>[s,t(N,{when:s,get fallback(){return[m(()=>r.name(void 0))," (",m(()=>r.name(r.setting.base())),")"]},children:l=>m(()=>r.name(l))})])}})),d})()}function ne(r){const[d,s]=$(!1),l=A();return(()=>{const h=Z.cloneNode(!0),o=h.firstChild;return n(o,t(p,{title:"Color Scheme",get children(){return t(u,{get setting(){return l.colorScheme},options:["light","dark",void 0],name:e=>({light:"Light",dark:"Dark",default:"System Default"})[e??"default"]})}}),null),n(o,t(p,{title:"Profile Images",get children(){return[t(u,{get setting(){return l.authorPfp},options:["on","off",void 0],name:e=>({on:"On",off:"Off",default:"Default"})[e??"default"]}),t(g,{restrict_w:!0,get children(){return t(_,{listing:{kind:"post",title:null,author:{name:"pfg___",client_id:"reddit",color_hash:"pfg___",link:"/u/pfg___",pfp:{url:"https://www.redditstatic.com/avatars/avatar_default_02_FF8717.png",hover:"https://www.redditstatic.com/avatars/avatar_default_02_FF8717.png"}},collapsible:{default_collapsed:!1},show_replies_when_below_pivot:!0,body:{kind:"richtext",content:[{kind:"paragraph",children:[{kind:"text",text:"This is an example comment!",styles:{}}]}]}},opts:{clickable:!1,frame:null,replies:null,client_id:"",at_or_above_pivot:!1,is_pivot:!1}})}})]}}),null),n(o,t(p,{title:"Update Notices",get children(){return[t(u,{get setting(){return l.updateNotifications},options:["on","off",void 0],name:e=>({on:"On",off:"Off",default:"Default"})[e??"default"]}),H.cloneNode(!0),t(te,{})]}}),null),n(o,t(p,{title:"Changelog",get children(){return[t(u,{get setting(){return l.changelog},options:["show","hide",void 0],name:e=>({show:"Show",hide:"Hide",default:"Default"})[e??"default"]}),(()=>{const e=M.cloneNode(!0);return e.firstChild,n(e,t(C,{class:"text-blue-500 hover:underline",href:"/changelog",client_id:"shell",children:"Past changelogs"}),null),e})()]}}),null),n(o,t(p,{title:"Link Helpers",get children(){return[t(u,{get setting(){return l.linkHelpers},options:["show","hide",void 0],name:e=>({show:"Show",hide:"Hide",default:"Default"})[e??"default"]}),t(D,{get content(){return[i.p(i.txt("Optionally show link helpers to make it easier to click small links")),i.p(i.txt("I put a small link "),i.link({id:""},"/settings",{},i.txt("here")),i.txt(" to demo the functionality.")),i.p(i.txt("There are some more "),i.link({id:""},"https://i.redd.it/p0y4mrku6xh61.png",{},i.txt("small links")),i.txt(" in "),i.link({id:""},"https://en.wikipedia.org/wiki/Special:Random",{},i.txt("this")),i.txt(" paragraph."))]}})]}}),null),n(o,t(p,{title:"Custom Video Controls",get children(){return[t(u,{get setting(){return l.customVideoControls},options:["browser","custom",void 0],name:e=>({browser:"Browser",custom:"Custom",default:"Default"})[e??"default"]}),j.cloneNode(!0),t(g,{restrict_w:!0,get children(){return t(_,{listing:{kind:"post",title:{text:"Video Example"},collapsible:{default_collapsed:!0},show_replies_when_below_pivot:!1,body:{kind:"video",gifv:!1,aspect:16/9,source:{kind:"video",thumbnail:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",sources:[{url:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",quality:"720p"}]}}},opts:{clickable:!1,frame:null,client_id:"n/a",replies:null,at_or_above_pivot:!1,is_pivot:!1}})}})]}}),null),n(o,t(p,{title:"Image Galleries",get children(){return[t(u,{get setting(){return l.galleryDisplay},options:["fullscreen","inline",void 0],name:e=>({fullscreen:"Fullscreen",inline:"Inline",default:"Default"})[e??"default"]}),z.cloneNode(!0),t(g,{restrict_w:!0,get children(){return t(_,{get listing(){return{kind:"post",title:{text:"Gallery Example"},collapsible:{default_collapsed:!0},show_replies_when_below_pivot:!1,body:{kind:"gallery",images:new Array(20).fill(0).map((e,c)=>({thumb:"https://picsum.photos/seed/"+(c+1)+"/140/140.jpg",aspect:1,body:{kind:"captioned_image",w:650,h:365,url:"https://picsum.photos/seed/"+(c+1)+"/650/365.jpg"}}))}}},opts:{clickable:!1,frame:null,client_id:"n/a",replies:null,at_or_above_pivot:!1,is_pivot:!1}})}})]}}),null),n(o,t(p,{title:"Animations",get children(){return[t(u,{get setting(){return l.motion},options:["full","reduce",void 0],name:e=>({full:"All Motion",reduce:"Reduce Motion",default:"System Default"})[e??"default"]}),t(k,{get when(){return l.motion()==="full"},get children(){return[(()=>{const e=I.cloneNode(!0),c=e.firstChild;return n(c,t(x,{get value(){return l.animationTime.override()},setValue:f=>l.animationTime.setOverride(f),get choices(){return[[0,"0s"],[.1,"0.1s"],[.2,"0.2s"],[.3,"0.3s"],[void 0,["Default ",m(()=>l.animationTime.base()),"s"]]]}})),e})(),t(u,{get setting(){return l.animationDevMode},options:["none","shift_slow",void 0],name:e=>({none:"None",shift_slow:"Shift to Slow Animation",default:"Default"})[e??"default"]})]}}),t(g,{restrict_w:!0,get children(){return t(_,{get listing(){return{kind:"post",title:{text:"Motion Example"},collapsible:{default_collapsed:!1},show_replies_when_below_pivot:!0,body:{kind:"richtext",content:[i.p(i.txt("Click the collapse button to the left to see an example"))]}}},opts:{clickable:!1,frame:null,client_id:"n/a",replies:null,at_or_above_pivot:!1,is_pivot:!1}})}})]}}),null),n(o,t(p,{title:"Signature",get children(){return[(()=>{const e=q.cloneNode(!0);return e.$$input=c=>{l.signature.setOverride(c.currentTarget.value||void 0)},b(()=>e.value=l.signature()),e})(),G.cloneNode(!0)]}}),null),n(o,t(p,{title:"Open Links",get children(){return[t(u,{get setting(){return l.links},options:["new_tab","same_tab",void 0],name:e=>({new_tab:"New Tab",same_tab:"Same Tab",default:"Default"})[e??"default"]}),(()=>{const e=W.cloneNode(!0);return e.firstChild,n(e,t(O,{client_id:"n/a",style:"normal",href:"https://www.google.com/",children:"Example Link"}),null),e})()]}}),null),n(o,t(p,{title:"Developer Options",get children(){return[Y.cloneNode(!0),t(k,{get when(){return d()},get fallback(){return(()=>{const e=ee.cloneNode(!0);return e.$$click=()=>s(!0),b(()=>e.className=S["outlined-button"]),e})()},get children(){return[J.cloneNode(!0),t(u,{get setting(){return l.pageVersion},options:["1","2",void 0],name:e=>({"1":"V1","2":"V2",default:"Default"})[e??"default"]}),K.cloneNode(!0),Q.cloneNode(!0),t(u,{get setting(){return l.highlightRerenders},options:["on","off",void 0],name:e=>({on:"On",off:"Off",default:"Default"})[e??"default"]}),X.cloneNode(!0)]}})]}}),null),h})()}U(["click","input"]);export{u as SettingPicker,se as SolidToVanillaBoundary,ne as default,re as vanillaToSolidBoundary};