"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[4247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||c;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const c={id:"reject",title:"Reject",sidebar_label:"Reject",sidebar_position:9,tags:["Reject"]},a=void 0,o={unversionedId:"projects/communecter/Activities/reject",id:"projects/communecter/Activities/reject",title:"Reject",description:"The Reject activity is used to indicate the rejection of an invitation or a join request in Communecter.",source:"@site/docs/projects/communecter/Activities/Reject.md",sourceDirName:"projects/communecter/Activities",slug:"/projects/communecter/Activities/reject",permalink:"/projects/communecter/Activities/reject",draft:!1,tags:[{label:"Reject",permalink:"/tags/reject"}],version:"current",sidebarPosition:9,frontMatter:{id:"reject",title:"Reject",sidebar_label:"Reject",sidebar_position:9,tags:["Reject"]},sidebar:"projectsSidebar",previous:{title:"Offer",permalink:"/projects/communecter/Activities/offer"},next:{title:"Remove",permalink:"/projects/communecter/Activities/remove"}},s={},l=[{value:"Reference",id:"reference",level:3},{value:"Internal Logic",id:"internal-logic",level:3},{value:"Examples",id:"examples",level:3},{value:"Rejecting an Invitation",id:"rejecting-an-invitation",level:4}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Reject")," activity is used to indicate the rejection of an invitation or a join request in Communecter."),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Activity"),": ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/activitypub/#reject-activity-inbox"},"Reject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Object"),": The invitation or join request being rejected")),(0,i.kt)("h3",{id:"internal-logic"},"Internal Logic"),(0,i.kt)("p",null,"When an actor wants to reject an invitation or a join request, they can send a Reject activity. The Reject activity includes the invitation or join request being rejected, specified as the object."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"rejecting-an-invitation"},"Rejecting an Invitation"),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("strong",{parentName:"p"},"Armel Wanes")," sends a Reject activity to decline an invitation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "Undo",\n  "actor": "https://communecter.org/api/activitypub/users/u/ArmelWanes",\n  "id": "https://communecter.org/api/activitypub/activity/id/649d3b54b3a53",\n  "object": "https://communecter.org/api/activitypub/activity/id/649d39d47e6c3",\n  "target" : "https://communecter.org/api/activitypub/activity/id/888d3b54b3a53",\n}\n\n')))}m.isMDXComponent=!0}}]);