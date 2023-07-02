"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[3456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"note",title:"Note",sidebar_label:"Note",sidebar_position:1},i=void 0,l={unversionedId:"projects/communecter/Objects/note",id:"projects/communecter/Objects/note",title:"Note",description:"A Note is a standard object in Mastodon used to represent a message or post. It is a text-based content object that can be published by a user on the Mastodon social network.",source:"@site/docs/projects/communecter/Objects/Note.md",sourceDirName:"projects/communecter/Objects",slug:"/projects/communecter/Objects/note",permalink:"/communecter-fedidocs/projects/communecter/Objects/note",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"note",title:"Note",sidebar_label:"Note",sidebar_position:1},sidebar:"projectsSidebar",previous:{title:"Event",permalink:"/communecter-fedidocs/projects/communecter/Objects/event"},next:{title:"Project",permalink:"/communecter-fedidocs/projects/communecter/Objects/project"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"Example",id:"example",level:2}],c={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Note")," is a standard object in Mastodon used to represent a message or post. It is a text-based content object that can be published by a user on the Mastodon social network."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Data type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The object type (",(0,a.kt)("inlineCode",{parentName:"td"},"Note"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"id"),"*"),(0,a.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,a.kt)("td",{parentName:"tr",align:null},"The URI that identifies the note")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"attributedTo")),(0,a.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,a.kt)("td",{parentName:"tr",align:null},"The URI of the user who posted the note")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"content"),"*"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The text content of the note")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"published"),"*"),(0,a.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,a.kt)("td",{parentName:"tr",align:null},"The date and time when the note was published")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"sensitive")),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates if the note content is sensitive")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spoilerText")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The warning text for hidden content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"visibility")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The visibility of the note (",(0,a.kt)("inlineCode",{parentName:"td"},"public"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"unlisted"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"private"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"direct"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"mediaAttachments")),(0,a.kt)("td",{parentName:"tr",align:null},"Array"),(0,a.kt)("td",{parentName:"tr",align:null},"An array of objects representing the media attached to the note")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tag")),(0,a.kt)("td",{parentName:"tr",align:null},"Array"),(0,a.kt)("td",{parentName:"tr",align:null},"An array of strings representing the tags associated with the note")))),(0,a.kt)("p",null,"*"," Required properties."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Note",\n  "id": "https://communecter.org/api/activitypub/object/id/96a15d71d725c",\n  "author": "John Doe",\n  "content": "This is an example note in Communecter.",\n  "published": "2023-07-02T14:30:00Z",\n  "tags": ["community", "event"],\n  "attachments": [\n    {\n      "type": "Image",\n      "name": "Photo",\n      "url": "https://example.com/images/note.jpg",\n      "mediaType": "image/jpeg"\n    },\n    {\n      "type": "Link",\n      "name": "Website",\n      "url": "https://example.com",\n      "mediaType": "text/html"\n    }\n  ]\n}\n')))}s.isMDXComponent=!0}}]);