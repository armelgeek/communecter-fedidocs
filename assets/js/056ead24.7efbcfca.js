"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[1370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={id:"federated-presence",title:"Presence",tags:["online","offline","arrive","leave"]},i=void 0,o={unversionedId:"practices/federated-presence",id:"practices/federated-presence",title:"Presence",description:"Federated presence refers to sharing the status of an entity across the Fediverse. This is usually seen as a user becoming online/offline but could also be used to indicate something is active or available.",source:"@site/docs/practices/presence.md",sourceDirName:"practices",slug:"/practices/federated-presence",permalink:"/communecter-fedidocs/practices/federated-presence",draft:!1,tags:[{label:"online",permalink:"/communecter-fedidocs/tags/online"},{label:"offline",permalink:"/communecter-fedidocs/tags/offline"},{label:"arrive",permalink:"/communecter-fedidocs/tags/arrive"},{label:"leave",permalink:"/communecter-fedidocs/tags/leave"}],version:"current",frontMatter:{id:"federated-presence",title:"Presence",tags:["online","offline","arrive","leave"]},sidebar:"tutorialSidebar",previous:{title:"Shared Practices",permalink:"/communecter-fedidocs/category/shared-practices"},next:{title:"Projects",permalink:"/communecter-fedidocs/category/projects"}},c={},s=[{value:"Example",id:"example",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Federated presence refers to sharing the status of an entity across the Fediverse. This is usually seen as a user becoming online/offline but could also be used to indicate something is active or available."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Arrive")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Leave")," activities are used to indicate when an entity is online or offline. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Place")," object with the ",(0,n.kt)("inlineCode",{parentName:"p"},"url")," property is used to indicate where the entity can be found."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"The following is an example sent from Immers Space when a user comes online."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"Example goes here\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ActivityPub Reference"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Activity"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive"},"Arrive")," / ",(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitystreams-vocabulary/#dfn-leave"},"Leave"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Location"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitystreams-vocabulary/#dfn-place"},"Place object"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Supported by"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web.immers.space/"},"Immers Space")),(0,n.kt)("td",{parentName:"tr",align:null},"User online status")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Future support"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://owncast.online"},"Owncast")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/owncast/owncast/issues/2912"},"Live stream status"))))))}u.isMDXComponent=!0}}]);