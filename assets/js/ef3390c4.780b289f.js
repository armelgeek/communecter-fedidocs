"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[2642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"undo",title:"Undo",sidebar_label:"Undo",sidebar_position:10,tags:["Undo"]},a=void 0,c={unversionedId:"projects/communecter/Activities/undo",id:"projects/communecter/Activities/undo",title:"Undo",description:"The Undo activity is used to indicate the reversal or cancellation of a previous activity in Communecter. It can be used to undo actions such as Accept, Follow.",source:"@site/docs/projects/communecter/Activities/Undo.md",sourceDirName:"projects/communecter/Activities",slug:"/projects/communecter/Activities/undo",permalink:"/projects/communecter/Activities/undo",draft:!1,tags:[{label:"Undo",permalink:"/tags/undo"}],version:"current",sidebarPosition:10,frontMatter:{id:"undo",title:"Undo",sidebar_label:"Undo",sidebar_position:10,tags:["Undo"]},sidebar:"projectsSidebar",previous:{title:"Remove",permalink:"/projects/communecter/Activities/remove"},next:{title:"Update",permalink:"/projects/communecter/Activities/update"}},l={},p=[{value:"Reference",id:"reference",level:3},{value:"Internal Logic",id:"internal-logic",level:3},{value:"Examples",id:"examples",level:3},{value:"Undoing an Accept",id:"undoing-an-accept",level:4}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Undo")," activity is used to indicate the reversal or cancellation of a previous activity in Communecter. It can be used to undo actions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Follow"),"."),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Activity"),": ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/activitypub/#undo-activity-inbox"},"Undo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Object"),": The activity being undone")),(0,i.kt)("h3",{id:"internal-logic"},"Internal Logic"),(0,i.kt)("p",null,"When an actor wants to undo a previous activity, they can send an Undo activity. The Undo activity includes the activity being undone, specified as the object."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"undoing-an-accept"},"Undoing an Accept"),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("strong",{parentName:"p"},"Armel Wanes")," sends an Undo activity to cancel a previous Accept activity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "Undo",\n  "actor": "https://communecter.org/api/activitypub/users/u/ArmelWanes",\n  "id": "https://efc4-102-16-43-150.ngrok-free.app/api/activitypub/activity/id/649d3b54b3a53",\n  "object": "https://efc4-102-16-43-150.ngrok-free.app/api/activitypub/activity/id/649d39d47e6c3"\n}\n\n')))}d.isMDXComponent=!0}}]);