import{c as h,b as d}from"./index.f083279e.js";const o=h();o.route([],()=>({kind:"redirect",to:"/news"}));for(const e of["news","newest","newcomments","ask","show","jobs"])o.route([e],t=>({kind:"home",tab:e,page:+(t.query.page??"1")}));o.route(["front"],e=>({kind:"front",day:e.query.day,page:+(e.query.page??"1")}));o.route(["item"],e=>({kind:"item",id:e.query.id??"0"}));o.route(["user"],e=>({kind:"user",name:e.query.id??"0"}));function w(e){let t=o.parse(e);for(let i=0;t.kind==="redirect"&&i<100;i++)e=t.to,t=o.parse(e);if(t.kind==="redirect")throw new Error(">100 redirects. "+e);return[t,e]}function c(e,t){const i=f(t),n=e.get(i);if(n)throw n.data!==t?new Error("ERROR it already exists "+i+" but it's different"):new Error("ERROR it already exists "+i);if(t.kind==="header")for(const r of t.replies)c(e,{kind:"item",item:r,parent:i});else if(t.kind==="item")for(const r of t.item.comments??[])c(e,{kind:"item",item:r,parent:i});else d(t);e.set(i,{kind:"unprocessed",link:m("id: "+i),data:t})}function _(e,t){const i=m("immediate error value");return e[i]={error:t},i}function m(e){return Symbol(e)}function a(e,t,i){const n=t.get(i);if(!n)return _(e,"post was not found in tree (TODO load more) ("+i+")");if(n.kind==="unprocessed"){n.kind="processing";const r=y(e,t,n);return e[n.link]={data:r},n.kind="processed",n.link}else{if(n.kind==="processing"||n.kind==="processed")return n.link;d(n.kind)}}function y(e,t,i){if(i.data.kind==="header")return b(i.data.parsed,{items:i.data.replies.map(n=>a(e,t,u(n)))});if(i.data.kind==="item"){const n=i.data.item;return{kind:"post",url:"/item?id="+n.id,client_id:s.id,parent:a(e,t,i.data.parent),replies:{items:(n.comments??[]).map(r=>a(e,t,u(r)))},content:{kind:"post",title:n.title!=null?{text:n.title}:null,thumbnail:n.title!=null?{kind:"default",thumb:"default"}:void 0,author:n.user!=null?{name:n.user,color_hash:n.user.toLowerCase(),link:"/user?id="+n.user,client_id:s.id}:void 0,info:{creation_date:n.time*1e3,comments:n.comments_count},body:n.content!=null?{kind:"text",client_id:s.id,markdown_format:"reddit_html",content:n.content}:n.url!=null?{kind:"link",url:n.url,client_id:s.id}:{kind:"none"},actions:{vote:n.type!=="job"?{kind:"counter",client_id:s.id,unique_id:"/vote/"+f(i.data),time:Date.now(),increment:{icon:"up_arrow",color:"white",label:"Vote",undo_label:"Undo Vote"},decrement:null,count_excl_you:n.points??"hidden",you:void 0,actions:{}}:void 0},collapsible:{default_collapsed:n.title!=null},show_replies_when_below_pivot:n.title==null},internal_data:i,display_style:"centered"}}else d(i.data)}function f(e){if(e.kind==="item")return u(e.item);if(e.kind==="header")return"PAGE_HEADER";d(e)}function u(e){return"item="+e.id}const s={id:"hackernews",async getPage(e){const[t,i]=w(e),n=g(t,i),r=new Map,k={};if(n.kind==="firebaseio")throw new Error("TODO");if(n.kind==="node-hnapi"){const l=await fetch(n.url).then(p=>p.json());return c(r,{kind:"header",parsed:t,replies:Array.isArray(l)?l:[l]}),{pivot:a(k,r,Array.isArray(l)?"PAGE_HEADER":u(l)),content:k}}else d(n)}};function b(e,t){return{kind:"post",url:null,client_id:s.id,parent:null,replies:t,content:{kind:"page",title:e.kind==="home"?{news:"Hacker News",newest:"New Links",newcomments:"New Comments",ask:"Ask",show:"Show",jobs:"Jobs"}[e.tab]:e.kind,wrap_page:{sidebar:{items:[]},header:{kind:"bio",banner:null,icon:null,name:{link_name:e.kind==="home"?e.tab:e.kind},body:{kind:"none"},menu:null,raw_value:e}}},internal_data:e,display_style:"fullscreen"}}function g(e,t){if(e.kind==="user")throw new Error("TODO user");if(e.kind==="home"||e.kind==="front")return{kind:"node-hnapi",url:"https://node-hnapi.herokuapp.com"+t};if(e.kind==="item")return{kind:"node-hnapi",url:"https://node-hnapi.herokuapp.com/item/"+e.id};d(e)}export{s as client};
