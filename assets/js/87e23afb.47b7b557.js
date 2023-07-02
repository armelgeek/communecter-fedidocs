"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[6169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(c,".").concat(d)]||u[d]||k[d]||a;return n?i.createElement(b,o(o({ref:t},s),{},{components:n})):i.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={id:"like",title:"Like",sidebar_label:"Like",sidebar_position:5,tags:["like"]},o=void 0,l={unversionedId:"projects/kbin/activities/like",id:"projects/kbin/activities/like",title:"Like",description:'The Like activity is effectively what is known as "like", "favourite". Activity is used with Note',source:"@site/docs/projects/kbin/activities/like.md",sourceDirName:"projects/kbin/activities",slug:"/projects/kbin/activities/like",permalink:"/projects/kbin/activities/like",draft:!1,tags:[{label:"like",permalink:"/tags/like"}],version:"current",sidebarPosition:5,frontMatter:{id:"like",title:"Like",sidebar_label:"Like",sidebar_position:5,tags:["like"]},sidebar:"projectsSidebar",previous:{title:"Announce",permalink:"/projects/kbin/activities/announce"},next:{title:"Follow",permalink:"/projects/kbin/activities/follow"}},c={},p=[{value:"Internal logic",id:"internal-logic",level:2},{value:"Example",id:"example",level:2}],s={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Like"),' activity is effectively what is known as "like", "favourite". Activity is used with ',(0,r.kt)("a",{parentName:"p",href:"../objects/note"},(0,r.kt)("inlineCode",{parentName:"a"},"Note")),"\nor ",(0,r.kt)("a",{parentName:"p",href:"../objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," objects."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reference"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Activity"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitypub/#like-activity-inbox"},"Like"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Note")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Page"))))),(0,r.kt)("h2",{id:"internal-logic"},"Internal logic"),(0,r.kt)("p",null,'When Kbin receives a Like activity, it is the equivalent of adding a thread or comment to favorites. Content receives\npoints that give it a higher position in the "hot" sorting'),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("strong",{parentName:"p"},"bob")," add to favourites post from other instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "id": "https://lab.kbin.pub/f/object/81f06acf-dcda-4960-9110-5c1241c012f4",\n  "type": "Like",\n  "actor": "https://lab.kbin.pub/u/bob",\n  "object": "https://mastodon.social/users/alice/statuses/109748348495832857"\n}\n')))}k.isMDXComponent=!0}}]);