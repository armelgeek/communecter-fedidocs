"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[7537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"update",title:"Update",sidebar_label:"Update",sidebar_position:2,tags:["update"]},o=void 0,p={unversionedId:"projects/kbin/activities/update",id:"projects/kbin/activities/update",title:"Update",description:"The Update activity is used to edit existing Note or Page objects.",source:"@site/docs/projects/kbin/activities/update.md",sourceDirName:"projects/kbin/activities",slug:"/projects/kbin/activities/update",permalink:"/communecter-fedidocs/projects/kbin/activities/update",draft:!1,tags:[{label:"update",permalink:"/communecter-fedidocs/tags/update"}],version:"current",sidebarPosition:2,frontMatter:{id:"update",title:"Update",sidebar_label:"Update",sidebar_position:2,tags:["update"]},sidebar:"projectsSidebar",previous:{title:"Create",permalink:"/communecter-fedidocs/projects/kbin/activities/create"},next:{title:"Delete",permalink:"/communecter-fedidocs/projects/kbin/activities/delete"}},c={},s=[{value:"Example",id:"example",level:2}],l={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Update")," activity is used to edit existing ",(0,a.kt)("a",{parentName:"p",href:"../objects/note"},(0,a.kt)("inlineCode",{parentName:"a"},"Note"))," or ",(0,a.kt)("a",{parentName:"p",href:"../objects/page"},(0,a.kt)("inlineCode",{parentName:"a"},"Page"))," objects."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Reference"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Activity"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitypub/#update-activity-inbox"},"Update"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Note")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"Page"))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("strong",{parentName:"p"},"bob")," edit content and sends a message to its followers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n    "https://www.w3.org/ns/activitystreams",\n    "https://w3id.org/security/v1",\n    {\n      "ostatus": "http://ostatus.org#",\n      "sensitive": "as:sensitive",\n      "votersCount": "toot:votersCount"\n    }\n  ],\n  "id": "https://lab.kbin.pub/f/object/15d1b2c2-50e0-4cd8-801c-6cedb405360c",\n  "type": "Update",\n  "actor": "https://lab.kbin.pub/u/bob",\n  "published": "2023-04-12T06:10:40+00:00",\n  "to": [\n    "https://lab.kbin.pub/m/rust",\n    "https://www.w3.org/ns/activitystreams#Public"\n  ],\n  "cc": ["https://lab.kbin.pub/u/bob/followers"],\n  "object": {}\n}\n')))}u.isMDXComponent=!0}}]);