"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[7343],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4905:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={id:"funkwhale",title:"Funkwhale",tags:["Audio","Podcasts"]},o=void 0,l={unversionedId:"projects/funkwhale/funkwhale",id:"projects/funkwhale/funkwhale",title:"Funkwhale",description:"What functionality does Funkwhale provide on the Fediverse?",source:"@site/docs/projects/funkwhale/index.md",sourceDirName:"projects/funkwhale",slug:"/projects/funkwhale/",permalink:"/communecter-fedidocs/projects/funkwhale/",draft:!1,tags:[{label:"Audio",permalink:"/communecter-fedidocs/tags/audio"},{label:"Podcasts",permalink:"/communecter-fedidocs/tags/podcasts"}],version:"current",frontMatter:{id:"funkwhale",title:"Funkwhale",tags:["Audio","Podcasts"]},sidebar:"projectsSidebar",previous:{title:"Project",permalink:"/communecter-fedidocs/projects/communecter/Objects/project"},next:{title:"Activities",permalink:"/communecter-fedidocs/category/activities-3"}},c={},s=[{value:"What functionality does Funkwhale provide on the Fediverse?",id:"what-functionality-does-funkwhale-provide-on-the-fediverse",level:2},{value:"What interoperability does Funkwhale support on the Fediverse?",id:"what-interoperability-does-funkwhale-support-on-the-fediverse",level:2},{value:"Supported activities",id:"supported-activities",level:2},{value:"Custom objects",id:"custom-objects",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-functionality-does-funkwhale-provide-on-the-fediverse"},"What functionality does Funkwhale provide on the Fediverse?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows users to create music or podcast channels that other Fediverse users can follow.")),(0,n.kt)("h2",{id:"what-interoperability-does-funkwhale-support-on-the-fediverse"},"What interoperability does Funkwhale support on the Fediverse?"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Funkwhale doesn't currently support following actors from other services.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users of microblogging platforms such as Mastodon and Pleroma can follow Funkwhale channels to see published work in their feed."),(0,n.kt)("li",{parentName:"ul"},"Funkwhale users can search for other Fediverse accounts and render basic information about them."),(0,n.kt)("li",{parentName:"ul"},"Funkwhale channels are compatible with Reel2Bits.")),(0,n.kt)("h2",{id:"supported-activities"},"Supported activities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"activities/create"},(0,n.kt)("inlineCode",{parentName:"a"},"Create"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"activities/accept"},(0,n.kt)("inlineCode",{parentName:"a"},"Accept"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"activities/follow"},(0,n.kt)("inlineCode",{parentName:"a"},"Follow"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"activities/accept"},(0,n.kt)("inlineCode",{parentName:"a"},"Accept"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"activities/undo"},(0,n.kt)("inlineCode",{parentName:"a"},"Undo"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"activities/update"},(0,n.kt)("inlineCode",{parentName:"a"},"Update"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"activities/delete"},(0,n.kt)("inlineCode",{parentName:"a"},"Delete")))),(0,n.kt)("h2",{id:"custom-objects"},"Custom objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"objects/artist"},(0,n.kt)("inlineCode",{parentName:"a"},"Artist"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"objects/album"},(0,n.kt)("inlineCode",{parentName:"a"},"Album"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"objects/track"},(0,n.kt)("inlineCode",{parentName:"a"},"Track"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"objects/library"},(0,n.kt)("inlineCode",{parentName:"a"},"Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"objects/audio"},(0,n.kt)("inlineCode",{parentName:"a"},"Audio")))))}d.isMDXComponent=!0}}]);