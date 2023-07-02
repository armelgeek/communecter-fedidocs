"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[9548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,d=u["".concat(c,".").concat(g)]||u[g]||f[g]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"webfinger",title:"Webfinger",sidebar_position:10,tags:["Webfinger"]},a=void 0,s={unversionedId:"projects/owncast/webfinger",id:"projects/owncast/webfinger",title:"Webfinger",description:"Owncast supports the Webfinger protocol for discovering the ActivityPub location of a user.",source:"@site/docs/projects/owncast/webfinger.md",sourceDirName:"projects/owncast",slug:"/projects/owncast/webfinger",permalink:"/projects/owncast/webfinger",draft:!1,tags:[{label:"Webfinger",permalink:"/tags/webfinger"}],version:"current",sidebarPosition:10,frontMatter:{id:"webfinger",title:"Webfinger",sidebar_position:10,tags:["Webfinger"]},sidebar:"projectsSidebar",previous:{title:"Announce",permalink:"/projects/owncast/announce"},next:{title:"Future Plans",permalink:"/projects/owncast/future-plans"}},c={},l=[{value:"Example request:",id:"example-request",level:2},{value:"Example response:",id:"example-response",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Owncast supports the ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7033"},"Webfinger")," protocol for discovering the ActivityPub location of a user."),(0,o.kt)("h2",{id:"example-request"},"Example request:"),(0,o.kt)("p",null,"The following request queries for ",(0,o.kt)("inlineCode",{parentName:"p"},"goodnight@nightly.owncast.tv"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://nightly.owncast.tv/.well-known/webfinger?resource=acct%3Agoodnight%40nightly.owncast.tv\n")),(0,o.kt)("h2",{id:"example-response"},"Example response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subject": "acct:goodnight@nightly.owncast.tv",\n  "aliases": ["https://nightly.owncast.tv/federation/user/goodnight"],\n  "links": [\n    {\n      "rel": "self",\n      "type": "application/activity+json",\n      "href": "https://nightly.owncast.tv/federation/user/goodnight"\n    },\n    {\n      "rel": "http://webfinger.net/rel/profile-page",\n      "type": "text/html",\n      "href": "https://nightly.owncast.tv/federation/user/goodnight"\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);