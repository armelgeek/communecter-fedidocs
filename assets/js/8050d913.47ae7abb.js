"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[2097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"actor",title:"Actor",sidebar_label:"Actor",sidebar_position:3,tags:["actor"]},i=void 0,l={unversionedId:"projects/kbin/objects/actor",id:"projects/kbin/objects/actor",title:"Actor",description:"The Actor is an object that represents an individual user.",source:"@site/docs/projects/kbin/objects/actor.md",sourceDirName:"projects/kbin/objects",slug:"/projects/kbin/objects/actor",permalink:"/projects/kbin/objects/actor",draft:!1,tags:[{label:"actor",permalink:"/tags/actor"}],version:"current",sidebarPosition:3,frontMatter:{id:"actor",title:"Actor",sidebar_label:"Actor",sidebar_position:3,tags:["actor"]},sidebar:"projectsSidebar",previous:{title:"Note",permalink:"/projects/kbin/objects/note"},next:{title:"Person",permalink:"/projects/kbin/objects/person"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"Example",id:"example",level:2}],c={toc:s},u="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Actor")," is an object that represents an individual user."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Data type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Person")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n    "https://www.w3.org/ns/activitystreams",\n    "https://w3id.org/security/v1",\n    {\n      "manuallyApprovesFollowers": "as:manuallyApprovesFollowers",\n      "schema": "http://schema.org#",\n      "PropertyValue": "schema:PropertyValue",\n      "value": "schema:value"\n    }\n  ],\n  "id": "https://lab.kbin.pub/u/eee",\n  "type": "Person",\n  "name": "eee",\n  "preferredUsername": "eee",\n  "inbox": "https://lab.kbin.pub/u/eee/inbox",\n  "outbox": "https://lab.kbin.pub/u/eee/outbox",\n  "url": "https://lab.kbin.pub/u/eee",\n  "manuallyApprovesFollowers": false,\n  "published": "2022-12-23T16:21:13+00:00",\n  "following": "https://lab.kbin.pub/u/eee/following",\n  "followers": "https://lab.kbin.pub/u/eee/followers",\n  "publicKey": {\n    "owner": "https://lab.kbin.pub/u/eee",\n    "id": "https://lab.kbin.pub/u/eee#main-key",\n    "publicKeyPem": "-----BEGIN PUBLIC KEY-----"\n  },\n  "endpoints": {\n    "sharedInbox": "https://lab.kbin.pub/f/inbox"\n  }\n}\n')))}b.isMDXComponent=!0}}]);