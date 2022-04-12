import{u as l}from"./index.d9a19671.js";import{b as w,r as d}from"./index.f083279e.js";import{e as k}from"./base.50b98d34.js";function f(t,e,n){t[e]={data:n}}function g(){const t=l.internet.userName(),e=l.image.avatar();return{name:t,color_hash:t.toLowerCase(),link:"/faker/user/"+t,client_id:"test",pfp:{url:e,hover:e}}}function y(t,e){return(e+":"+t).split("").map(n=>n.codePointAt(0))}function m(t){const e=t.toString();return e.split("/").length<=2?null:e.split("/").slice(0,-1).join("/")}function D(t){const e=t.toString();if(l.seed(y(e,"getReplies")),x(e)==="comment"){let r=l.datatype.number(3);return r>2&&(r=1),new Array(r).fill(0).map(()=>e+"/"+l.random.alphaNumeric(6))}const o=l.datatype.number(50);return new Array(o).fill(0).map(()=>e+"/"+l.random.alphaNumeric(6))}function v(){return{kind:"richtext",content:new Array(l.datatype.number({min:1,max:4})).fill(0).map(()=>d.p(d.txt(l.lorem.paragraph())))}}function A(){return{kind:"richtext",content:[d.p(d.txt(l.lorem.sentence()))]}}function O(){return{kind:"richtext",content:[d.p(d.txt(l.lorem.word()))]}}function S(t){return t.kind==="captioned_image"?{kind:"image",url:t.url.replace(/\/\d+?\/\d+?.jpg/,"/140/140.jpg")}:t.kind==="richtext"?{kind:"default",thumb:"self"}:{kind:"default",thumb:"default"}}function N(){return l.random.arrayElement(["text","image"])==="text"?v():{kind:"captioned_image",url:B(650,365),w:650,h:365}}function _(){return Date.now()-Math.floor(10**l.datatype.float({min:4,max:11}))}function b(){const t=_(),e=_();return{creation_date:t,edited:l.datatype.boolean()?{date:e>t?e:void 0}:void 0}}function R(t){const e=N();return{kind:"post",title:{text:l.lorem.sentence()},body:e,author:g(),show_replies_when_below_pivot:!1,collapsible:{default_collapsed:!0},thumbnail:S(e),info:{...b(),pinned:l.datatype.boolean()&&l.datatype.boolean(),in:{name:l.random.word(),link:"TODO",client_id:"test"}},actions:{vote:E(t,!0)}}}function E(t,e){const n=Math.floor(10**l.datatype.float({max:6}))-50,o=[["Favourite","Undo Favourite","yellow","star"],["Like","Undo Like","pink","heart"],["Upvote","Undo Upvote","reddit-upvote","up_arrow",["Downvote","Undo Downvote","reddit-downvote","down_arrow"]]],[r,i,a,s,c]=l.random.arrayElement(o);return{kind:"counter",client_id:"test",unique_id:"vote_"+t,time:Date.now(),increment:{icon:s,color:a,label:r,undo_label:i},decrement:c?{icon:c[3],color:c[2],label:c[0],undo_label:c[1]}:null,count_excl_you:n,you:l.random.arrayElement([void 0,"increment",c?"decrement":void 0]),actions:{increment:u.encode({kind:"void"}),decrement:u.encode({kind:"void"}),reset:u.encode({kind:"void"})},percent:e?l.datatype.float({max:1}):void 0}}function U(t){return{kind:"post",title:null,body:l.random.arrayElement([v,A,O])(),author:g(),show_replies_when_below_pivot:!0,collapsible:{default_collapsed:!1},info:{...b()},actions:{vote:E(t,!1)}}}function M(t){return{kind:"post",title:{text:"TODO"},body:{kind:"none"},show_replies_when_below_pivot:!1,collapsible:{default_collapsed:!0}}}function x(t){const e=t.split("/").length-1;return e<3?"todo":e===3?"post":"comment"}function j(t){const e=x(t);if(e==="post")return R(t);if(e==="comment")return U(t);if(e==="todo")return M();w(e)}function L(t,e,n){const o=e.toString(),r=D(e),i=m(e);l.seed(y(o,"generate"));const a=j(o),s={url:"/faker"+o,client_id:"test",parent:n==="parent"?i!=null?C(t,i,null,["E_NO_V_LOADER_REPLIES"]):null:i,replies:{items:n==="parent"?p(t,r,e):r},kind:"post",content:a.kind==="post"?{...a,info:{...a.info??{},comments:r.length}}:a,internal_data:o,display_style:"centered"};f(t,o,s)}function B(t,e){const n=l.random.alphaNumeric(6);return"https://picsum.photos/seed/"+n+"/"+t+"/"+e+".jpg"}async function q(t,e){const n=e.key;if(await new Promise(i=>setTimeout(i,200)),Math.random()<.1)throw new Error("Load failed (random chance)");const o=h.decode(n),r={};if(o.kind==="horizontal"){const i=[...o.items];return P(r,i,20,10),f(r,t,{kind:"loaded",parent:o.parent,replies:{items:i},url:null,client_id:"test"}),{content:r}}else{if(o.kind==="other")throw new Error("TODO");w(o)}}async function G(t){if(u.decode(t),await new Promise(e=>setTimeout(e,200)),Math.random()<.1)throw new Error("Action failed")}const h=k("loader"),u=k("act");function p(t,e,n){if(e.length===0)return[];const o=Symbol("loader");return f(t,o,{parent:n,replies:null,url:null,client_id:"test",kind:"loader",key:h.encode({kind:"horizontal",items:e,parent:n}),load_count:e.length}),[o]}function C(t,e,n,o){const r=Symbol("loader");return f(t,r,{parent:n,replies:{items:o},url:null,client_id:"test",kind:"loader",key:h.encode({kind:"other"}),load_count:null}),r}function z(t,e){const n=t[e];if(!n)throw new Error("missing link");if("error"in n)throw new Error("link error; "+n.error);return n.data}function T(t,e,n,o,r){L(t,e,"child"),n-=1;const i=z(t,e);if(i.replies==null)return n;if(i.kind==="post"&&i.content.kind==="post"&&!r.pivot&&!i.content.show_replies_when_below_pivot){const a=i.replies.items.splice(0,i.replies.items.length),s=p(t,a,e);return i.replies.items.splice(0,0,...s),n}if(o<=0){const a=i.replies.items.splice(0,i.replies.items.length),s=p(t,a,e);return i.replies.items.splice(0,0,...s),n}return n=P(t,i.replies.items,n,o),n}function P(t,e,n,o){for(const[r,i]of e.entries()){if(n<=0){const a=m(i),s=e.splice(r,e.length-r),c=p(t,s,a);return e.splice(r,0,...c),n}n=T(t,i,n,o-1,{pivot:!1})}return n}async function H(t){const e={},o=t==="/"?"/home":t;T(e,o,100,10,{pivot:!0});const r=m(o);return r&&L(e,r,"parent"),{content:e,pivot:o}}export{G as act,u as action_encoder,H as getPage,q as loadMore2,h as load_encoder};
