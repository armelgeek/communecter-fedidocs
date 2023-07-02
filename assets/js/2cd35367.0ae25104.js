"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[9379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"update",title:"Update",sidebar_label:"Update",sidebar_position:5,tags:["update"]},i=void 0,l={unversionedId:"projects/funkwhale/activities/update",id:"projects/funkwhale/activities/update",title:"Update",description:"The Update activity alters information relating to Funkwhale objects and creates a record of the change.",source:"@site/docs/projects/funkwhale/activities/update.md",sourceDirName:"projects/funkwhale/activities",slug:"/projects/funkwhale/activities/update",permalink:"/communecter-fedidocs/projects/funkwhale/activities/update",draft:!1,tags:[{label:"update",permalink:"/communecter-fedidocs/tags/update"}],version:"current",sidebarPosition:5,frontMatter:{id:"update",title:"Update",sidebar_label:"Update",sidebar_position:5,tags:["update"]},sidebar:"projectsSidebar",previous:{title:"Undo",permalink:"/communecter-fedidocs/projects/funkwhale/activities/undo"},next:{title:"Delete",permalink:"/communecter-fedidocs/projects/funkwhale/activities/delete"}},c={},p=[{value:"Internal logic",id:"internal-logic",level:2},{value:"Example",id:"example",level:2},{value:"Custom properties",id:"custom-properties",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Update")," activity alters information relating to Funkwhale objects and creates a record of the change."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Reference"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Activity"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitypub/#update-activity-inbox"},"Undo"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},"A Funkwhale ",(0,n.kt)("inlineCode",{parentName:"td"},"Library")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"Track")," object")))),(0,n.kt)("h2",{id:"internal-logic"},"Internal logic"),(0,n.kt)("p",null,"When Funkwhale receives an update associated with a ",(0,n.kt)("a",{parentName:"p",href:"../objects/library"},(0,n.kt)("inlineCode",{parentName:"a"},"Library"))," or ",(0,n.kt)("a",{parentName:"p",href:"../objects/track"},(0,n.kt)("inlineCode",{parentName:"a"},"Track"))," object, it attempts to update the corresponding object in its database."),(0,n.kt)("p",null,"Funkwhale performs different checks depending on the target of the update:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("a",{parentName:"li",href:"../objects/library"},(0,n.kt)("inlineCode",{parentName:"a"},"Library"))," objects, Funkwhale ensures the actor sending the message is the library owner"),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("a",{parentName:"li",href:"../objects/track"},(0,n.kt)("inlineCode",{parentName:"a"},"Track"))," objects, Funkwhale ensures the actor sending the message ",(0,n.kt)("strong",{parentName:"li"},"either"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Matches the ",(0,n.kt)("inlineCode",{parentName:"li"},"attributedTo")," property on the local copy of the object"),(0,n.kt)("li",{parentName:"ul"},"Is the ",(0,n.kt)("a",{parentName:"li",href:"../service-actor"},"Service actor"))))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"In this example, ",(0,n.kt)("strong",{parentName:"p"},"Bob")," updates his library and sends a message to its followers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n    "https://www.w3.org/ns/activitystreams",\n    "https://w3id.org/security/v1",\n    {}\n  ],\n  "to": [\n    "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6/followers"\n  ],\n  "type": "Update",\n  "actor": "https://awesome.music/federation/actors/Bob",\n  "object": {}\n}\n')),(0,n.kt)("h2",{id:"custom-properties"},"Custom properties"),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("code",null,"attributedTo")),(0,n.kt)("dd",null,"Funkwhale uses the ",(0,n.kt)("code",null,"attributedTo")," property to denote the actor responsible for an object. If an object has an ",(0,n.kt)("code",null,"attributedTo")," attributed, the associated actor can perform activities to it, including ",(0,n.kt)("a",{href:"update"},(0,n.kt)("code",null,"Update"))," and ",(0,n.kt)("a",{href:"delete"},(0,n.kt)("code",null,"Delete")),"."),(0,n.kt)("dd",null,"Funkwhale also attributes all objects on a domain with the domain's ",(0,n.kt)("a",{href:"../service-actor"},"Service actor"))))}u.isMDXComponent=!0}}]);