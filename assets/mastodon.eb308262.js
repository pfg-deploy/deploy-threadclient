import{e as f,r as l,m as v,b as F,o as G,c as V}from"./index.a7e88646.js";import{e as T}from"./base.50b98d34.js";const x=t=>"https://"+location.host+"/login/mastodon/"+t;function y(t){return t==null||t===""?{actions:[],inboxes:[]}:{actions:[$(t)?{kind:"link",client_id:c.id,text:"Log Out",url:"TODO log out from mastodon"}:{kind:"login",client_id:c.id,data:D.encode({host:t})}],inboxes:[]}}const h=(t,e="404 not found")=>({title:"Error",navbar:y(t),body:{kind:"one",item:{parents:[{kind:"thread",title:{text:"Error"},body:{kind:"text",client_id:c.id,content:e,markdown_format:"none"},display_mode:{body:"visible",comments:"collapsed"},link:"TODO no link",layout:"error",actions:[],default_collapsed:!1,raw_value:{}}],replies:[]}},display_style:"comments-view"}),E=()=>({kind:"thread",title:{text:"Listing"},body:{kind:"text",client_id:c.id,content:"Listing",markdown_format:"none"},display_mode:{body:"collapsed",comments:"collapsed"},link:"TODO no link",layout:"error",actions:[],default_collapsed:!1,raw_value:{}});function m(t,...e){return"https://"+t+"/"+e.join("/")}async function _(t,e,n="GET"){try{const[o,r]=await fetch(e,{method:n,headers:{Accept:"application/json",...t?{Authorization:t.token_type+" "+t.access_token}:{}}}).then(async i=>[i.status,await i.json()]);return o!==200&&console.log("got status "+o,r),r}catch(o){return{error:"Failed to load! "+o.toString()}}}function J(t,e){let n=[];return e.flatMap((o,r)=>{const i=g(t,o);let a=[];if(o.in_reply_to_id!=null){if(e[r+1]?.id===o.in_reply_to_id)return n.unshift(i),[];a=[{kind:"load_more",url:"/"+t+"/statuses/"+o.in_reply_to_id,raw_value:o,load_more:te.encode({kind:"context",host:t,parent_id:o.in_reply_to_id})}]}const s=n;return n=[],[{parents:[...a,i,...s],replies:[]}]})}function W(t,e,n){const o=new Map,r={replies:[]};o.set(e,r);for(const i of n){const a=i.in_reply_to_id??"nope";let s=o.get(a);s||(console.log("Missing parent id in reparented thread",a),alert("Reparenting error, check console"),s=r);const d=g(t,i);s.replies??=[],s.replies.push(d),o.set(i.id,d)}return r.replies}function z(t,e){return e.type==="image"?{thumb:e.preview_url??"https://dummyimage.com/100x100/ff0000/000000&text=image",aspect:e.meta?.small?e.meta.small.width/e.meta.small.height:void 0,body:e.meta?{kind:"captioned_image",url:e.url,w:e.meta.original?.width??null,h:e.meta.original?.height??null,alt:e.description}:{kind:"link",url:e.url,client_id:c.id}}:e.type==="video"||e.type==="gifv"?{thumb:e.preview_url??"https://dummyimage.com/100x100/ff0000/000000&text=video",aspect:e.meta?.small?e.meta.small.width/e.meta.small.height:void 0,body:e.meta?{kind:"video",source:{kind:"video",sources:[{url:e.url,quality:e.meta.original?.width+"\xD7"+e.meta.original?.width}]},aspect:e.meta.original?e.meta.original.width/e.meta.original.height:void 0,gifv:e.type==="gifv"}:{kind:"link",url:e.url,client_id:c.id}}:e.type==="audio"?{thumb:e.preview_url??"https://winaero.com/blog/wp-content/uploads/2017/12/speaker-sound-audio-icon-256-big.png",aspect:1,body:{kind:"audio",url:e.url,alt:e.description}}:e.type==="unknown"?{thumb:e.preview_url??"https://dummyimage.com/100x100/ff0000/000000&text=unknown",aspect:1,body:{kind:"array",body:[{kind:"text",client_id:c.id,content:"alt: "+e.description,markdown_format:"none"},{kind:"link",client_id:c.id,url:e.url},...e.remote_url!=null?[{kind:"link",client_id:c.id,url:e.remote_url}]:[]]}}:(e.type,{thumb:"https://dummyimage.com/100x100/ff0000/000000&text="+encodeURIComponent(e.type),aspect:1,body:{kind:"link",client_id:c.id,url:e.url}})}function B(t,e){const n=[];function o(){r.length>0&&n.push(l.p(...r)),r=[]}let r=[];for(const i of Array.from(e)){const a=Q(t,i);a?(o(),n.push(a)):r.push(...k(t,i,{}))}return o(),n}function Q(t,e){if(e instanceof HTMLElement&&e.nodeName==="P")return l.p(...C(t,e.childNodes))}function C(t,e){return Array.from(e).flatMap(n=>k(t,n,{}))}function k(t,e,n){if(e instanceof Text){const r=(e.nodeValue??"[ENoNodeValue]").split(":"),i=[];let a=[];const s=()=>{a.length>0&&i.push(l.txt(a.join(":"),n)),a=[]};for(const d of r){const u=t.emojis.get(d);u?(s(),i.push(l.kind("emoji",{url:u.static_url,name:":"+d+":"}))):a.push(d)}return s(),i}if(e instanceof HTMLElement){let o=Array.from(e.classList).filter(a=>!(a.startsWith("h-")||a.startsWith("p-")||a.startsWith("u-")));const r=a=>o.includes(a)?(o=o.filter(s=>s!==a),!0):!1,i=(...a)=>o.length!==0?[l.error(o.map(s=>"."+s).join(""),e.outerHTML)]:a;if(e.nodeName==="A"){const a=e.getAttribute("href")??"no href";if(!a.startsWith("http://")&&!a.startsWith("https://"))return i(l.error("Bad link",a));if(r("hashtag")){r("mention");const s=Array.from(e.childNodes).flatMap(u=>k(t,u,n)),d=e.textContent;return d==null||!d.startsWith("#")?[l.error("bad hashtag",[s,e])]:i(l.link(c,"/"+t.host+"/timelines/tag/"+encodeURIComponent(d),{},...s))}if(r("mention")){const s=t.mentions.get(a);if(s)return i(l.link(c,"/"+t.host+"/accounts/"+s.id,{is_user_link:s.username},l.txt("@"+s.acct,n)))}return i(l.link(c,a,{},...Array.from(e.childNodes).flatMap(s=>k(t,s,n))))}if(e.nodeName==="BR")return i(l.br());if(e.nodeName==="SPAN"){const a=Array.from(e.childNodes).flatMap(s=>k(t,s,n));return o.includes("invisible")?[]:(r("ellipsis")&&a.push(l.txt("\u2026",n)),r("h-card"),i(...a))}return[l.error("<"+e.nodeName+">",{node:e,html:e.outerHTML})]}return[l.error("Unsupported Node",e)]}function K(t){const e=el("div");return e.innerHTML=t,e.textContent??"*no content*"}function P(t,e,n){const o=document.createElement("div");o.innerHTML=e;const r=new Map;for(const s of n.emojis)r.set(s.shortcode,s);const i=new Map;for(const s of n.mentions)i.set(s.url,s);return[{host:t,emojis:r,mentions:i},o.childNodes]}function U(t,e,n){return B(...P(t,e,n))}function Y(t,e,n){const[o,r]=P(t,e,n);return C(o,r)}function g(t,e,n={}){try{return X(t,e,n)}catch(o){return{kind:"thread",title:{text:"Error!"},body:{kind:"richtext",content:[l.p(l.error("Error "+o.toString(),o))]},display_mode:{body:"visible",comments:"collapsed"},link:"/"+t+"/statuses/"+e.id,layout:"reddit-post",default_collapsed:!1,actions:[],raw_value:[t,e,n]}}}function X(t,e,n={}){const o={time:new Date(e.created_at).getTime(),edited:!1,author:{name:e.account.display_name+" (@"+e.account.acct+")",client_id:c.id,color_hash:e.account.username,link:"/"+t+"/accounts/"+e.account.id,flair:e.account.bot?[{elems:[{kind:"text",text:"bot"}],content_warning:!1}]:[],pfp:{url:e.account.avatar_static,hover:e.account.avatar}},reblogged_by:n.reblogged_by,pinned:!1};return e.reblog?g(t,e.reblog,{...n,reblogged_by:o}):{kind:"thread",body:{kind:"array",body:[{kind:"richtext",content:U(t,e.content,{emojis:e.emojis,mentions:e.mentions})},e.media_attachments.length===0?void 0:{kind:"gallery",images:e.media_attachments.map(i=>z(t,i))},e.poll?{kind:"poll",choices:e.poll.options.map((i,a)=>({name:i.title,votes:i.votes_count,id:""+a})),total_votes:e.poll.votes_count,votable:e.poll.expired?"Expired":!0,vote_data:e.poll.id,select_many:e.poll.multiple,your_votes:(e.poll.own_votes??[]).map(i=>({id:""+i})),close_time:new Date(e.poll.expires_at).getTime()}:void 0,e.card?G(e.card,c.id):void 0]},display_mode:{body:"visible",comments:"visible"},link:"/"+t+"/statuses/"+e.id,layout:"mastodon-post",info:o,flair:e.sensitive||e.spoiler_text?[{content_warning:e.sensitive,elems:[{kind:"text",text:e.spoiler_text||"Sensitive"}]}]:void 0,actions:[{kind:"link",client_id:c.id,url:"/"+t+"/statuses/"+e.id,text:e.replies_count+" repl"+(e.replies_count===1?"y":"ies")},{kind:"link",client_id:c.id,url:e.uri,text:"Permalink"},{kind:"counter",client_id:c.id,unique_id:t+"/favourite/"+e.id+"/",neutral_icon:"star",time:Date.now(),increment:{icon:"star",color:"yellow",label:"Favourite",undo_label:"Unfavourite"},decrement:null,count_excl_you:e.favourites_count+(e.favourited?-1:0),you:e.favourited?"increment":void 0,actions:{increment:w.encode({kind:"favourite",direction:"",status:e.id,host:t}),reset:w.encode({kind:"favourite",direction:"un",status:e.id,host:t})}}],default_collapsed:!1,raw_value:e,replies:n.replies}}function Z(t){const[e,...n]=t.split("?");return[e??"",new URLSearchParams(n.join("?"))]}function M(t,e){const[n,o]=Z(t);for(const[r,i]of Object.entries(e))i!=null?o.set(r,i):o.delete(r);return n+"?"+o.toString()}function A(t,e){return"raw!https://"+t+"/oauth/authorize?"+f({client_id:e.client_id,scope:"read write follow push",redirect_uri:x(t),response_type:"code"})}function b(t){return{get(e){if(!e)return;const n=localStorage.getItem(t(e));if(!(n==null||n===""))return JSON.parse(n)},set(e,n){if(!e)throw console.log(e,n),alert("bad set. check console."),new Error("set performed with no host");localStorage.setItem(t(e),JSON.stringify(n))}}}const p={app:b(t=>"mastodon-application-"+t),token:b(t=>"mastodon-secret-"+t),client_creds:b(t=>"mastodon-client-secret-"+t),client_did_error:b(t=>"mastodon-client-did-error-"+t)},w=T("act");function $(t){return!!p.token.get(t)}async function N(t){if(!t)return;const e=p.token.get(t)??p.client_creds.get(t);if(!e){const n=p.app.get(t);if(!n||(p.client_did_error.get(t)??!1))return;const{data:o}=n,r=await fetch(m(t,"oauth","token"),{method:"post",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({client_id:o.client_id,client_secret:o.client_secret,redirect_uri:x(t),grant_type:"client_credentials"})}).then(i=>i.json());if("error"in r){p.client_did_error.set(t,!0),console.log(r),alert("failed to get application token. will not try again. :: "+r.error);return}return p.client_creds.set(t,r),r}return e}function O(t,e,n){return{title:e,navbar:y(null),body:{kind:"one",item:{parents:[{kind:"thread",body:n,display_mode:{body:"visible",comments:"collapsed"},raw_value:null,link:"/",layout:"reddit-post",actions:[],default_collapsed:!1}],replies:[]}},display_style:"comments-view"}}const S=V();S.with([{host:"any"}],t=>{t.route(["raw",{path:"rest"}],e=>({kind:"raw",path:"/"+e.path.join("/")+"?"+f(e.query),host:e.host})),t.route([],e=>({kind:"instance-home",host:e.host})),t.with(["timelines"],e=>{e.route(["home"],n=>({kind:"timeline",tmname:"home",api_path:"/api/v1/timelines/home?"+f(n.query),host:n.host})),e.route(["public","local"],n=>({kind:"timeline",tmname:"local",api_path:"/api/v1/timelines/public?"+f({...n.query,local:"true"}),host:n.host})),e.route(["public"],n=>({kind:"timeline",tmname:"public",api_path:"/api/v1/timelines/public?"+f({...n.query,local:"false"}),host:n.host})),e.route(["local"],n=>({kind:"timeline",tmname:"local",api_path:"/api/v1/timelines/public?"+f({...n.query,local:"true"}),host:n.host})),e.route(["tag",{hashtag:"any"}],n=>({kind:"timeline",tmname:"tag",api_path:"/api/v1/timelines/tag/"+n.hashtag+"?"+f(n.query),host:n.host})),e.catchall(n=>({kind:"404",reason:"Unsupported timeline",host:n.host}))}),t.route(["statuses",{statusid:"any"}],e=>({kind:"status",status:e.statusid,host:e.host})),t.route(["accounts",{accountid:"any"}],e=>({kind:"account",account:e.accountid,host:e.host,api_url:"/api/v1/accounts/"+e.accountid+"/statuses?"+f({...e.query})})),t.route(["notifications"],e=>({kind:"notifications",host:e.host})),t.catchall(e=>({kind:"404",reason:"Not Found",host:e.host}))});S.catchall(()=>({kind:"instance-selector"}));const D=T("login_url"),c={id:"mastodon",getLoginURL:async t=>{const{host:e}=D.decode(t);if(e==null)throw new Error("can't login without selecting host first");const n=p.app.get(e);if(n){if(n.host!==e)throw new Error("This should never happen.");return A(e,n.data)}const o=await fetch(m(e,"api/v1","apps"),{method:"post",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({client_name:"ThreadClient",redirect_uris:x(e),scopes:"read write follow push",website:"https://thread.pfg.pw"})}).then(r=>r.json());if("error"in o)throw console.log(o),new Error("Got error:"+o.error);return p.app.set(e,{host:e,data:o}),A(e,o)},login:async(t,e)=>{if(t.length!==2)throw new Error("bad login");const n=t[1],o=e.get("code");if(o==null)throw new Error("missing code");const r=p.app.get(n);if(!r)throw new Error("An app was not registered - how did you even get here?");const{data:i}=r,a=await fetch(m(n,"oauth","token"),{method:"post",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({client_id:i.client_id,client_secret:i.client_secret,redirect_uri:x(n),grant_type:"authorization_code",code:o,scope:"read write follow push"})}).then(s=>s.json());if("error"in a)throw console.log(a),new Error("Got error (check console): "+a.error);p.token.set(n,a),console.log(a)},getThread:async t=>{const e=S.parse(t)??{kind:"404",reason:"This should never happen"};if(e.kind==="instance-selector")return O("","Choose Instance",{kind:"mastodon_instance_selector",client_id:c.id});if(e.kind==="404")return h("",e.reason);const n=e.host,o=await N(n);if(e.kind==="instance-home")return O(n,"Links | "+n,{kind:"richtext",content:[l.h1(l.txt(n)),l.ul(...[["/"+n+"/timelines/public","Federated Timeline"],["/"+n+"/timelines/local","Local Timeline"]].map(([r,i])=>l.li(l.p(l.link(c,r,{},l.txt(i))))))]});if(e.kind==="timeline"){const r=[v.link(c,"Home","/"+n+"/timelines/home",e.tmname==="home"),v.link(c,"Local","/"+n+"/timelines/local",e.tmname==="local"),v.link(c,"Federated","/"+n+"/timelines/public",e.tmname==="public"),v.link(c,"Notifications","/"+n+"/notifications",!1)];return await j(n,o,e.api_path,t,E(),r,"Timeline "+e.tmname)}else if(e.kind==="status"){const[r,i]=await Promise.all([_(o,m(n,"api/v1","statuses",e.status)),_(o,m(n,"api/v1","statuses",e.status,"context"))]);return"error"in r?h(n,"Error! "+r.error):"error"in i?h(n,"Error! "+i.error):{title:r.account.acct+' on Mastodon: "'+K(r.content)+'"',navbar:y(n),body:{kind:"one",item:{parents:[...i.ancestors.map(a=>g(n,a)),g(n,r)],replies:[...W(n,r.id,i.descendants)]}},display_style:"comments-view"}}else if(e.kind==="account"){const r=e.account,[i,a]=await Promise.all([_(o,m(n,"api/v1","accounts",r)),_(o,m(n,"api/v1/accounts/relationships/?id[]="+r))]);if("error"in i)return h(n,"Error! "+i.error);"error"in a&&console.log(a);const s=("error"in a?[]:a).find(u=>u.id===r),d={emojis:i.emojis??[],mentions:i.mentions??[]};return await j(n,o,e.api_url,t,{kind:"bio",banner:{kind:"image",desktop:i.header_static??i.header??"none"},icon:{url:i.avatar_static??i.avatar??"none"},name:{display:i.display_name,link_name:i.acct},body:{kind:"richtext",content:[...U(n,i.note,d),l.table([l.th(void 0,l.txt("Key")),l.th(void 0,l.txt("Value")),l.th(void 0,l.txt("V"))],...i.fields.map(u=>[l.td(l.txt(u.name)),l.td(...Y(n,u.value,d)),l.td(l.txt(u.verified_at!=null?"\u2713":"\u2717"))]))]},subscribe:{kind:"counter",client_id:c.id,unique_id:"/follow/"+i.id+"/",time:Date.now(),neutral_icon:"join",increment:{icon:"join",color:"white",label:i.locked?"Request Follow":"Follow",undo_label:"Following"},decrement:null,count_excl_you:i.followers_count===-1?"hidden":i.followers_count+(s?.following??!1?-1:0),you:s?.following??!1?"increment":void 0,style:"pill-filled",incremented_style:"pill-empty",actions:{increment:w.encode({kind:"follow",account_id:i.id,host:n,direction:""}),reset:w.encode({kind:"follow",account_id:i.id,host:n,direction:"un"})}},more_actions:[{kind:"link",client_id:c.id,url:i.url,text:"Permalink"}],menu:null,raw_value:i},[],(i.display_name??"")+" ("+i.acct+")")}else if(e.kind==="notifications"){const r=await _(o,m(n,"api/v1/notifications"));if("error"in r)return h("error: "+r.error);const i={follow:"Someone followed you",follow_request:"Someone requested to follow you",mention:"Someone mentioned you in a status",reblog:"Someone reblogged your status",favourite:"Someone favourited your status",poll:"A poll you interacted with has ended",status:"Smomeone you have notifications on for posted a status",unsupported:"Unsupported notification type. Error."};return{title:"Notifications",navbar:y(n),body:{kind:"listing",header:E(),menu:void 0,items:r.map(a=>({parents:[{kind:"thread",title:{text:i[a.type]??i.unsupported},body:{kind:"none"},display_mode:{body:"visible",comments:"collapsed"},link:"/"+n+"/notifications/"+a.id,layout:"reddit-post",default_collapsed:!1,actions:[],raw_value:a},...a.status?[g(n,a.status)]:[]],replies:[]})),next:void 0},display_style:"comments-view"}}else if(e.kind==="raw"){const r=await _(o,"https://"+n+e.path);return{title:"Error View",navbar:y(n),body:{kind:"one",item:{parents:[{kind:"thread",raw_value:r,body:{kind:"richtext",content:[l.pre(JSON.stringify(r,null,"	"),"json")]},display_mode:{body:"visible",comments:"visible"},link:e.path,layout:"error",actions:[],default_collapsed:!1}],replies:[]}},sidebar:[{kind:"widget",title:"Raw",widget_content:{kind:"body",body:{kind:"richtext",content:[l.p(l.txt("This is a raw page.")),l.p(l.link(c,e.path,{},l.txt("View Rendered")))]}},raw_value:e}],display_style:"comments-view"}}F(e)},async act(t){const e=w.decode(t);e.kind==="favourite"?await q(e.host,"api/v1/statuses/"+e.status+"/"+e.direction+"favourite"):e.kind==="follow"?await q(e.host,"api/v1/accounts/"+e.account_id+"/"+e.direction+"follow"):ee(e)},previewReply(t,e){throw new Error("TODO")},sendReply(t,e){throw new Error("NIY")},async loadMore(t){throw new Error("not used")},async loadMoreUnmounted(t){const e=H.decode(t),n=await N(e.tl_info.host),o=await j(e.tl_info.host,n,e.tl_info.api_path,e.tl_info.web_path,E(),[],"*unused*");if(o.body.kind==="listing")return{children:o.body.items,next:o.body.next};throw console.log("ERROR got",o),new Error("TODO support "+o.body.kind)}};async function q(t,e){const n=await N(t),o=await _(n,m(t,e),"POST");if("error"in o)throw console.log(o),new Error("Got error: "+o.error)}function ee(t){throw console.log(t),new Error("Expected unreachable: "+t)}async function j(t,e,n,o,r,i,a){const s=m(t,n),d=await _(e,s);if("error"in d)return h("Error! "+d.error);const u=d[d.length-1];let R;if(u){const L=M("/"+t+o,{since_id:void 0,min_id:void 0,max_id:u.id}),I=M(n,{since_id:void 0,min_id:void 0,max_id:u.id});R={kind:"load_more_unmounted",load_more_unmounted:H.encode({kind:"timeline",tl_info:{host:t,api_path:I,web_path:L}}),url:L,raw_value:u}}return{title:a,navbar:y(t),body:{kind:"listing",header:r,menu:i,items:J(t,d),next:R},display_style:"comments-view"}}const H=T("load_more_unmounted"),te=T("load_more");export{c as client};