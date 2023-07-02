"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[6959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"person",title:"Person",sidebar_label:"Person",sidebar_position:3,tags:["person","actor"]},p=void 0,i={unversionedId:"projects/kbin/objects/person",id:"projects/kbin/objects/person",title:"Person",description:"The Person is an object that represents an individual user.",source:"@site/docs/projects/kbin/objects/person.md",sourceDirName:"projects/kbin/objects",slug:"/projects/kbin/objects/person",permalink:"/communecter-fedidocs/projects/kbin/objects/person",draft:!1,tags:[{label:"person",permalink:"/communecter-fedidocs/tags/person"},{label:"actor",permalink:"/communecter-fedidocs/tags/actor"}],version:"current",sidebarPosition:3,frontMatter:{id:"person",title:"Person",sidebar_label:"Person",sidebar_position:3,tags:["person","actor"]},sidebar:"projectsSidebar",previous:{title:"Actor",permalink:"/communecter-fedidocs/projects/kbin/objects/actor"},next:{title:"Group",permalink:"/communecter-fedidocs/projects/kbin/objects/group"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"Example",id:"example",level:2}],c={toc:s},u="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," is an object that represents an individual user."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Person")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Accept: application/activity+json, application/ld+json" https://dev.karab.in/u/eee\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n    "https://www.w3.org/ns/activitystreams",\n    "https://w3id.org/security/v1",\n    {\n      "manuallyApprovesFollowers": "as:manuallyApprovesFollowers",\n      "schema": "http://schema.org#",\n      "PropertyValue": "schema:PropertyValue",\n      "value": "schema:value"\n    }\n  ],\n  "id": "https://lab.kbin.pub/u/eee",\n  "type": "Person",\n  "name": "eee",\n  "preferredUsername": "eee",\n  "inbox": "https://lab.kbin.pub/u/eee/inbox",\n  "outbox": "https://lab.kbin.pub/u/eee/outbox",\n  "url": "https://lab.kbin.pub/u/eee",\n  "manuallyApprovesFollowers": false,\n  "published": "2022-12-23T16:21:13+00:00",\n  "following": "https://lab.kbin.pub/u/eee/following",\n  "followers": "https://lab.kbin.pub/u/eee/followers",\n  "publicKey": {\n    "owner": "https://lab.kbin.pub/u/eee",\n    "id": "https://lab.kbin.pub/u/eee#main-key",\n    "publicKeyPem": "-----BEGIN PUBLIC KEY-----"\n  },\n  "endpoints": {\n    "sharedInbox": "https://lab.kbin.pub/f/inbox"\n  }\n}\n')))}b.isMDXComponent=!0}}]);