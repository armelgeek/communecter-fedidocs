"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[4760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,b=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(b,l(l({ref:t},s),{},{components:r})):a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={id:"library",title:"Library",sidebar_label:"Library",sidebar_position:4,tags:["library"]},l=void 0,o={unversionedId:"projects/funkwhale/objects/library",id:"projects/funkwhale/objects/library",title:"Library",description:"A Library is a custom object used to store music collection information. It inherits its behavior and properties from ActivityPub's Actor and Collection objects.",source:"@site/docs/projects/funkwhale/objects/library.md",sourceDirName:"projects/funkwhale/objects",slug:"/projects/funkwhale/objects/library",permalink:"/communecter-fedidocs/projects/funkwhale/objects/library",draft:!1,tags:[{label:"library",permalink:"/communecter-fedidocs/tags/library"}],version:"current",sidebarPosition:4,frontMatter:{id:"library",title:"Library",sidebar_label:"Library",sidebar_position:4,tags:["library"]},sidebar:"projectsSidebar",previous:{title:"Track",permalink:"/communecter-fedidocs/projects/funkwhale/objects/track"},next:{title:"Audio",permalink:"/communecter-fedidocs/projects/funkwhale/objects/audio"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"Example",id:"example",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Library")," is a custom object used to store music collection information. It inherits its behavior and properties from ActivityPub's ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/activitypub/#actors"},(0,n.kt)("inlineCode",{parentName:"a"},"Actor"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/activitypub/#collections"},(0,n.kt)("inlineCode",{parentName:"a"},"Collection"))," objects."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Data type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The object type (",(0,n.kt)("inlineCode",{parentName:"td"},"Library"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"id"),"*"),(0,n.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,n.kt)("td",{parentName:"tr",align:null},"A URI that identifies the library over federation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"name"),"*"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The library's name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"followers"),"*"),(0,n.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the library's followers collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"totalItems"),"*"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of ",(0,n.kt)("a",{parentName:"td",href:"audio"},(0,n.kt)("inlineCode",{parentName:"a"},"Audio")," objects")," in the library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"first"),"*"),(0,n.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,n.kt)("td",{parentName:"tr",align:null},"The URL of the library's first page")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"last"),"*"),(0,n.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,n.kt)("td",{parentName:"tr",align:null},"The URL of the library's last page")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"summary"),"?"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The library's description")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Library",\n  "id": "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6",\n  "attributedTo": "https://awesome.music/federation/actors/Alice",\n  "name": "My awesome library",\n  "followers": "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6/followers",\n  "summary": "This library is for restricted use only",\n  "totalItems": 4234,\n  "first": "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6?page=1",\n  "last": "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6?page=56"\n}\n')))}m.isMDXComponent=!0}}]);