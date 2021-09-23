import{S as e,i as t,s as n,e as r,t as l,a as o,b as s,c,d as a,f as i,g as f,h as u,n as d,j as m,k as p,m as g,l as h,o as x,p as b,q as y,r as v,u as $,v as w}from"./vendor.399e76c2.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function _(e,t,n){const r=e.slice();return r[1]=t[n],r}function k(e){let t,n,u,d,m,p,g=e[1].trait_type+"",h=e[1].value+"";return{c(){t=r("div"),n=r("span"),u=l(g),d=l(":"),m=o(),p=l(h),s(n,"class","font-bold"),s(t,"class","text-sm")},m(e,r){c(e,t,r),a(t,n),a(n,u),a(n,d),a(t,m),a(t,p)},p(e,t){1&t&&g!==(g=e[1].trait_type+"")&&i(u,g),1&t&&h!==(h=e[1].value+"")&&i(p,h)},d(e){e&&f(t)}}}function j(e){let t,n,i,p,g,h,x,b,y,v,$,w,j=e[0].traits,C=[];for(let r=0;r<j.length;r+=1)C[r]=k(_(e,j,r));return{c(){t=r("div"),n=r("div"),i=r("img"),h=o(),x=r("div"),x.textContent="Traits",b=o();for(let e=0;e<C.length;e+=1)C[e].c();y=o(),v=r("a"),$=l("Buy on OpenSea"),u(i.src,p=e[0].image_preview_url)||s(i,"src",p),s(i,"alt",g=e[0].collection.name),s(x,"class","text-center font-semibold text-xl"),s(v,"class","text-blue-500 hover:border-green-800 border rounded p-1 absolute bottom-0"),s(v,"href",w=e[0].permalink),s(v,"target","_blank"),s(n,"class","m-3 pb-8 mt-7"),s(t,"class","relative")},m(e,r){c(e,t,r),a(t,n),a(n,i),a(n,h),a(n,x),a(n,b);for(let t=0;t<C.length;t+=1)C[t].m(n,null);a(n,y),a(n,v),a(v,$)},p(e,[t]){if(1&t&&!u(i.src,p=e[0].image_preview_url)&&s(i,"src",p),1&t&&g!==(g=e[0].collection.name)&&s(i,"alt",g),1&t){let r;for(j=e[0].traits,r=0;r<j.length;r+=1){const l=_(e,j,r);C[r]?C[r].p(l,t):(C[r]=k(l),C[r].c(),C[r].m(n,y))}for(;r<C.length;r+=1)C[r].d(1);C.length=j.length}1&t&&w!==(w=e[0].permalink)&&s(v,"href",w)},i:d,o:d,d(e){e&&f(t),m(C,e)}}}function C(e,t,n){let{nft:r}=t;return e.$$set=e=>{"nft"in e&&n(0,r=e.nft)},[r]}class L extends e{constructor(e){super(),t(this,e,C,j,n,{nft:0})}}function N(e,t,n){const r=e.slice();return r[2]=t[n],r}function B(e){let t;return{c(){t=r("p"),t.textContent="loading..."},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function E(e){let t,n;return t=new L({props:{nft:e[2]}}),{c(){p(t.$$.fragment)},m(e,r){g(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.nft=e[2]),t.$set(r)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){b(t,e)}}}function S(e){let t,n,l,a,i,u,d=e[0],p=[];for(let r=0;r<d.length;r+=1)p[r]=E(N(e,d,r));const g=e=>x(p[e],1,1,(()=>{p[e]=null}));let b=null;return d.length||(b=B()),{c(){t=r("div");for(let e=0;e<p.length;e+=1)p[e].c();b&&b.c(),n=o(),l=r("button"),l.textContent="Reload",s(t,"class","flex flex-row flex-wrap justify-center")},m(r,o){c(r,t,o);for(let e=0;e<p.length;e+=1)p[e].m(t,null);b&&b.m(t,null),c(r,n,o),c(r,l,o),a=!0,i||(u=y(l,"click",e[1]),i=!0)},p(e,[n]){if(1&n){let r;for(d=e[0],r=0;r<d.length;r+=1){const l=N(e,d,r);p[r]?(p[r].p(l,n),h(p[r],1)):(p[r]=E(l),p[r].c(),h(p[r],1),p[r].m(t,null))}for(v(),r=d.length;r<p.length;r+=1)g(r);$(),d.length?b&&(b.d(1),b=null):b||(b=B(),b.c(),b.m(t,null))}},i(e){if(!a){for(let e=0;e<d.length;e+=1)h(p[e]);a=!0}},o(e){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)x(p[t]);a=!1},d(e){e&&f(t),m(p,e),b&&b.d(),e&&f(n),e&&f(l),i=!1,u()}}}function T(e,t,n){let r=[];w((async()=>{await l()}));const l=async()=>{n(0,r=[]);const e=fetch("https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=boredapeyachtclub",{method:"GET"}),t=await e,l=await t.json();n(0,r=l.assets),console.log("loaded nfs")};return[r,l]}class q extends e{constructor(e){super(),t(this,e,T,S,n,{})}}function I(e){let t,n,l,i,u;return i=new q({}),{c(){t=r("main"),n=r("h1"),n.textContent="Hello NFTs!",l=o(),p(i.$$.fragment),s(n,"class","text-center font-semibold text-4xl m-5")},m(e,r){c(e,t,r),a(t,n),a(t,l),g(i,t,null),u=!0},p:d,i(e){u||(h(i.$$.fragment,e),u=!0)},o(e){x(i.$$.fragment,e),u=!1},d(e){e&&f(t),b(i)}}}new class extends e{constructor(e){super(),t(this,e,null,I,n,{})}}({target:document.getElementById("app")});
