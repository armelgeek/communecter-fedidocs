"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[6927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=o,d=p["".concat(l,".").concat(u)]||p[u]||v[u]||i;return r?n.createElement(d,a(a({ref:t},m),{},{components:r})):n.createElement(d,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"remove",title:"Remove",sidebar_label:"Remove",sidebar_position:9,tags:["Remove"]},a=void 0,c={unversionedId:"projects/communecter/Activities/remove",id:"projects/communecter/Activities/remove",title:"Remove",description:"The Remove activity is used to indicate the removal or revocation of an invitation or a follow in Communecter.",source:"@site/docs/projects/communecter/Activities/Remove.md",sourceDirName:"projects/communecter/Activities",slug:"/projects/communecter/Activities/remove",permalink:"/communecter-fedidocs/projects/communecter/Activities/remove",draft:!1,tags:[{label:"Remove",permalink:"/communecter-fedidocs/tags/remove"}],version:"current",sidebarPosition:9,frontMatter:{id:"remove",title:"Remove",sidebar_label:"Remove",sidebar_position:9,tags:["Remove"]},sidebar:"projectsSidebar",previous:{title:"Reject",permalink:"/communecter-fedidocs/projects/communecter/Activities/reject"},next:{title:"Undo",permalink:"/communecter-fedidocs/projects/communecter/Activities/undo"}},l={},s=[{value:"Reference",id:"reference",level:3},{value:"Internal Logic",id:"internal-logic",level:3},{value:"Examples",id:"examples",level:3},{value:"Removing an Invitation",id:"removing-an-invitation",level:4}],m={toc:s},p="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Remove")," activity is used to indicate the removal or revocation of an invitation or a follow in Communecter."),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Activity"),": ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/activitypub/#remove-activity-inbox"},"Remove")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Object"),": The object being removed")),(0,o.kt)("h3",{id:"internal-logic"},"Internal Logic"),(0,o.kt)("p",null,"When an actor wants to remove an invitation or a follow, they can send a Remove activity. The Remove activity includes the invitation or follow being removed, specified as the object."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"removing-an-invitation"},"Removing an Invitation"),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("strong",{parentName:"p"},"Yorre")," sends a Remove activity to revoke a previous invitation sent to  an user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "Remove",\n  "actor": "https://communecter.org/api/activitypub/users/u/Yorre",\n  "id": "https://efc4-102-16-43-150.ngrok-free.app/api/activitypub/activity/id/649d3b54b3a53",\n  "object": "https://efc4-102-16-43-150.ngrok-free.app/api/activitypub/activity/id/649d39d47e6c3"\n}\n')))}v.isMDXComponent=!0}}]);