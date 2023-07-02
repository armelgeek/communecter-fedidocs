"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||a;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={id:"outbox",title:"Outbox",sidebar_position:5,tags:["outbox"]},i=void 0,c={unversionedId:"projects/kbin/outbox",id:"projects/kbin/outbox",title:"Outbox",description:"Example:",source:"@site/docs/projects/kbin/outbox.md",sourceDirName:"projects/kbin",slug:"/projects/kbin/outbox",permalink:"/communecter-fedidocs/projects/kbin/outbox",draft:!1,tags:[{label:"outbox",permalink:"/communecter-fedidocs/tags/outbox"}],version:"current",sidebarPosition:5,frontMatter:{id:"outbox",title:"Outbox",sidebar_position:5,tags:["outbox"]},sidebar:"projectsSidebar",previous:{title:"Moderators",permalink:"/communecter-fedidocs/projects/kbin/moderators"},next:{title:"Webfinger",permalink:"/communecter-fedidocs/projects/kbin/webfinger"}},p={},l=[{value:"Example:",id:"example",level:2},{value:"User outbox",id:"user-outbox",level:3},{value:"Magazine outbox",id:"magazine-outbox",level:3}],s={toc:l},u="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"example"},"Example:"),(0,n.kt)("h3",{id:"user-outbox"},"User outbox"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Accept: application/activity+json, application/ld+json" https://dev.karab.in/u/eee/outbox\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "OrderedCollection",\n  "id": "https://dev.karab.in/u/eee/outbox",\n  "first": "https://dev.karab.in/u/eee/outbox?page=1",\n  "totalItems": 24\n}\n')),(0,n.kt)("h3",{id:"magazine-outbox"},"Magazine outbox"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Accept: application/activity+json, application/ld+json" https://dev.karab.in/m/fediverse/outbox\n')))}b.isMDXComponent=!0}}]);