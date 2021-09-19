import{r as e}from"./index.ef3e0fd1.js";import"./vendor.03bc8c46.js";function r(r,n){var o;const i=[];function l(){a.length>0&&i.push(e.p(...a)),a=[]}let a=[];for(const e of Array.from(n)){if(e instanceof Text&&!(null!=(o=e.nodeValue)?o:"").trim()){a.length>0&&a.push(...d(r,e,{}));continue}const n=t(r,e);n?(l(),i.push(...n)):a.push(...d(r,e,{}))}return l(),i}function n(n,t){return Array.from(t).flatMap((t=>{var o;return t instanceof Text?(null!=(o=t.nodeValue)?o:"").trim()?[e.ili(e.error("Text content: "+t.nodeValue,t))]:[]:t instanceof Comment?[]:t instanceof HTMLElement?"LI"===t.nodeName?[e.li(...r(n,t.childNodes))]:[e.ili(e.error("Unsupported List Item <"+t.nodeName+">",t))]:[e.ili(e.error("Unsupported List Item Node",t))]}))}function t(t,d){var i;if(!(d instanceof Text)&&!(d instanceof Comment)&&d instanceof HTMLElement){let l=Array.from(d.classList).filter((e=>!0));const a=e=>!!l.includes(e)&&(l=l.filter((r=>r!==e)),!0),s=(...r)=>0!==l.length?[e.blockquote(e.p(e.error(l.map((e=>"."+e)).join(""),d.outerHTML)),...r)]:r;if("P"===d.nodeName)return s(e.p(...o(t,d.childNodes,{})));if("H1"===d.nodeName)return s(e.hn(1,...o(t,d.childNodes,{})));if("H2"===d.nodeName)return s(e.hn(2,...o(t,d.childNodes,{})));if("H3"===d.nodeName)return s(e.hn(3,...o(t,d.childNodes,{})));if("H4"===d.nodeName)return s(e.hn(4,...o(t,d.childNodes,{})));if("H5"===d.nodeName)return s(e.hn(5,...o(t,d.childNodes,{})));if("H6"===d.nodeName)return s(e.hn(6,...o(t,d.childNodes,{})));if("HR"===d.nodeName)return s(e.hr());if("UL"===d.nodeName)return s(e.ul(...n(t,d.childNodes)));if("OL"===d.nodeName)return s(e.ol(...n(t,d.childNodes)));if("BLOCKQUOTE"===d.nodeName)return a("md-spoiler-text"),s(e.blockquote(...r(t,d.childNodes)));if("TABLE"===d.nodeName){const r=d.children[0],n=d.children[1];if(!r||!n||"THEAD"!==r.nodeName||"TBODY"!==n.nodeName)return[e.p(e.error("Table missing head/body",d))];if(1!==r.children.length)return[e.p(e.error("Table head has 0/2+ rows",d))];const i=r.children[0];return"TR"!==i.nodeName?[e.p(e.error("Table head does not contain a row",d))]:s(e.table(Array.from(i.children).map((r=>{var n;return"TH"!==r.nodeName?e.th(void 0,e.error("Not th",r)):e.th({left:"left",center:"center",right:"right",none:void 0}[null!=(n=r.getAttribute("align"))?n:"none"],...o(t,r.childNodes,{}))})),...Array.from(n.children).map((r=>"TR"!==r.nodeName?[e.td(e.error("Not tr",r))]:Array.from(r.children).map((r=>"TD"!==r.nodeName?e.td(e.error("Not td",r)):e.td(...o(t,r.childNodes,{}))))))))}if("PRE"===d.nodeName){const r=Array.from(d.children);if(1!==r.length||"CODE"!==r[0].nodeName)return[e.p(e.error("Unsupported bad pre/code",d))];const n=r[0],t=Array.from(n.classList);let o;const l="md-code-language-";return null!=t[0]&&t[0].startsWith(l)&&(o=t[0].substr(l.length)),s({kind:"code_block",lang:o,text:null!=(i=n.textContent)?i:"ENOTEXT"})}return"DIV"===d.nodeName?r(t,d.childNodes):void 0}}function o(e,r,n){return Array.from(r).flatMap((r=>d(e,r,n)))}function d(r,n,t){var i,l,a;if(n instanceof Text){let r=null!=(i=n.nodeValue)?i:"[ENoNodeValue]";return r=r.replace(/^\s+/," "),r=r.replace(/\s+$/," "),[e.txt(r,t)]}if(n instanceof Comment)return[];if(n instanceof HTMLElement){let i=Array.from(n.classList).filter((e=>!0));const s=e=>!!i.includes(e)&&(i=i.filter((r=>r!==e)),!0),c=(...r)=>0!==i.length?[e.error(i.map((e=>"."+e)).join(""),n.outerHTML)]:r;if("A"===n.nodeName){let o=null!=(l=n.getAttribute("href"))?l:"no href";return o.startsWith("/")&&(o="https://www.reddit.com"+o),c(e.link(o,{},...Array.from(n.childNodes).flatMap((e=>d(r,e,t)))))}if("BR"===n.nodeName)return c(e.br());if("SUP"===n.nodeName)return c(...o(r,n.childNodes,{...t,superscript:!0}));if("STRONG"===n.nodeName||"B"===n.nodeName)return c(...o(r,n.childNodes,{...t,strong:!0}));if("EM"===n.nodeName||"I"===n.nodeName)return c(...o(r,n.childNodes,{...t,emphasis:!0}));if("DEL"===n.nodeName)return c(...o(r,n.childNodes,{...t,strikethrough:!0}));if("CODE"===n.nodeName)return c(e.code(null!=(a=n.textContent)?a:"ERRNOCODE"));if("SPAN"===n.nodeName){const o=Array.from(n.childNodes).flatMap((e=>d(r,e,t)));return s("md-spoiler-text")?c(e.spoiler(...o)):c(...o)}return[e.error("<"+n.nodeName+">",{node:n,html:n.outerHTML})]}return[e.error("Unsupported Node",n)]}function i(e){return r(...function(e){const r=document.createElement("div");return r.innerHTML=e,[{},r.childNodes]}(e))}export{i as parseContentHTML};
