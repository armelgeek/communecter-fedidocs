"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[2409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(d,".").concat(m)]||c[m]||s[m]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"audio",title:"Audio",sidebar_label:"Audio",sidebar_position:5,tags:["audio"]},o=void 0,l={unversionedId:"projects/funkwhale/objects/audio",id:"projects/funkwhale/objects/audio",title:"Audio",description:"An Audio object is a custom object used to store upload information. It extends the ActivityStreams Audio object with custom attributes.",source:"@site/docs/projects/funkwhale/objects/audio.md",sourceDirName:"projects/funkwhale/objects",slug:"/projects/funkwhale/objects/audio",permalink:"/communecter-fedidocs/projects/funkwhale/objects/audio",draft:!1,tags:[{label:"audio",permalink:"/communecter-fedidocs/tags/audio"}],version:"current",sidebarPosition:5,frontMatter:{id:"audio",title:"Audio",sidebar_label:"Audio",sidebar_position:5,tags:["audio"]},sidebar:"projectsSidebar",previous:{title:"Library",permalink:"/communecter-fedidocs/projects/funkwhale/objects/library"},next:{title:"Webfinger",permalink:"/communecter-fedidocs/projects/funkwhale/webfinger"}},d={},p=[{value:"Properties",id:"properties",level:2},{value:"Example",id:"example",level:2},{value:"Audio fetching on restricted libraries",id:"audio-fetching-on-restricted-libraries",level:2}],u={toc:p},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Audio")," object is a custom object used to store upload information. It extends the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audio"},"ActivityStreams Audio object")," with custom attributes."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The object type (",(0,r.kt)("inlineCode",{parentName:"td"},"Audio"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,r.kt)("td",{parentName:"tr",align:null},"A URI that identifies the audio over federation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"A readable title for the order. Funkwhale concatenates the track name, album title, and artist name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the audio in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bitrate"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The bitrate of the audio in bytes/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"duration"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The duration of the audio in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"library"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the audio's containing ",(0,r.kt)("a",{parentName:"td",href:"library"},(0,r.kt)("inlineCode",{parentName:"a"},"Library")," object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"published"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"The date on which the audio was published over the federation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"The date on which the audio was last updated over the federation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link"},(0,r.kt)("inlineCode",{parentName:"a"},"Link")," object")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("inlineCode",{parentName:"td"},"Link")," object object containing the download location of the audio file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"track"),"?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"track"},(0,r.kt)("inlineCode",{parentName:"a"},"Track")," object")),(0,r.kt)("td",{parentName:"tr",align:null},"The track associated with the audio file")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Audio",\n  "id": "https://awesome.music/federation/music/uploads/88f0bc20-d7fd-461d-a641-dd9ac485e096",\n  "name": "For Whom the Bell Tolls - Ride the Lightning - Metallica",\n  "size": 8656581,\n  "bitrate": 320000,\n  "duration": 213,\n  "library": "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6",\n  "updated": "2018-10-02T19:49:35.646372+00:00",\n  "published": "2018-10-02T19:49:35.646359+00:00",\n  "track": {},\n  "url": {\n    "href": "https://awesome.music/api/v1/listen/82ece296-6397-4e26-be90-bac5f9990240/?upload=88f0bc20-d7fd-461d-a641-dd9ac485e096",\n    "type": "Link",\n    "mediaType": "audio/mpeg"\n  }\n}\n')),(0,r.kt)("h2",{id:"audio-fetching-on-restricted-libraries"},"Audio fetching on restricted libraries"),(0,r.kt)("p",null,"Audio objects are subject to the following access rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audio items in public libraries can be accessed by actors without restriction"),(0,r.kt)("li",{parentName:"ul"},"Audio items in restricted libraries can only be accessed if the HTTP request is signed by an actor who has an associated ",(0,r.kt)("strong",{parentName:"li"},"approved")," ",(0,r.kt)("a",{parentName:"li",href:"../activities/follow"},(0,r.kt)("inlineCode",{parentName:"a"},"Follow")," activity"))))}s.isMDXComponent=!0}}]);