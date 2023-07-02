"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[7930],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7189:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"project",title:"Project",sidebar_label:"Project",sidebar_position:1},i=void 0,o={unversionedId:"projects/communecter/Objects/project",id:"projects/communecter/Objects/project",title:"Project",description:"A Project is an activity representing a specific project or initiative.",source:"@site/docs/projects/communecter/Objects/Project.md",sourceDirName:"projects/communecter/Objects",slug:"/projects/communecter/Objects/project",permalink:"/communecter-fedidocs/projects/communecter/Objects/project",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"project",title:"Project",sidebar_label:"Project",sidebar_position:1},sidebar:"projectsSidebar",previous:{title:"Note",permalink:"/communecter-fedidocs/projects/communecter/Objects/note"},next:{title:"Funkwhale",permalink:"/communecter-fedidocs/projects/funkwhale/"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"Attachment Object",id:"attachment-object",level:3},{value:"Place Object",id:"place-object",level:3},{value:"Address Object",id:"address-object",level:3},{value:"Example",id:"example",level:2}],m={toc:d},c="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," is an activity representing a specific project or initiative."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The object type (",(0,r.kt)("inlineCode",{parentName:"td"},"Project"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,r.kt)("td",{parentName:"tr",align:null},"The URI that identifies the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attachment"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of Attachments"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachments associated with the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attributedTo"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,r.kt)("td",{parentName:"tr",align:null},"The URI of the entity or user who created the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The content or description of the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name or title of the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"startTime")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The start time of the project (formatted as a date and time)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endTime")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The end time of the project (formatted as a date and time)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:null},"Object (Place)"),(0,r.kt)("td",{parentName:"tr",align:null},"The location of the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"published"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The date and time when the project was published")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"String (URL)"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the project's website or landing page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uuid")),(0,r.kt)("td",{parentName:"tr",align:null},"String (UUID)"),(0,r.kt)("td",{parentName:"tr",align:null},"The universally unique identifier (UUID) of the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slug")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The slug or identifier of the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The email address associated with the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shortDescription")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"A short description or summary of the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"progress")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The progress status of the project")))),(0,r.kt)("h3",{id:"attachment-object"},"Attachment Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The object type (",(0,r.kt)("inlineCode",{parentName:"td"},"Document")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Link"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name or title of the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String (URL)"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mediaType")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The media type of the attachment (e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"image/png"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"text/html"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The category or classification of the attachment")))),(0,r.kt)("h3",{id:"place-object"},"Place Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The object type (",(0,r.kt)("inlineCode",{parentName:"td"},"Place"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String (URI)"),(0,r.kt)("td",{parentName:"tr",align:null},"The URI that identifies the place")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the place")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"Object (Address)"),(0,r.kt)("td",{parentName:"tr",align:null},"The address details of the place")))),(0,r.kt)("h3",{id:"address-object"},"Address Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The object type (",(0,r.kt)("inlineCode",{parentName:"td"},"PostalAddress"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addressCountry")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The country of the address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addressLocality")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The locality (city, town, etc.) of the address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addressRegion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The region (state, province, etc.) of the address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postalCode")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The postal code of the address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"streetAddress")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The street address of the place")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Project",\n  "id": "https://communecter.org/api/activitypub/object/id/64a15d71d725c",\n  "attachment": [\n    {\n      "type": "Document",\n      "name": "Image",\n      "url": "https://communecter.org/upload/communecter/projects/64a1594e603ab8a6ef0e605c/EcoSmart-Gold-Venue-2022.png",\n      "mediaType": "image/png",\n      "category": "image"\n    },\n    {\n      "type": "Link",\n      "name": "Website",\n      "mediaType": "text/html",\n      "category": "url",\n      "url": "https://www.ecosmarthomesinitiative.com"\n    },\n    {\n      "type": "Link",\n      "name": "gitlab",\n      "mediaType": "text/html",\n      "category": "socialNetwork",\n      "url": "https://gitlab.com/ecosmarthomesinitiative"\n    },\n    {\n      "type": "Link",\n      "name": "github",\n      "mediaType": "text/html",\n      "category": "socialNetwork",\n      "url": "https://github.com/ecosmarthomesinitiatif"\n    },\n    {\n      "type": "Link",\n      "name": "facebook",\n      "mediaType": "text/html",\n      "category": "socialNetwork",\n      "url": "https://www.facebook.com/ecosmarthomesinitiative"\n    },\n    {\n      "type": "Link",\n      "name": "twitter",\n      "mediaType": "text/html",\n      "category": "socialNetwork",\n      "url": "https://twitter.com/ecosmarthomes"\n    },\n    {\n      "type": "Document",\n      "name": "Banner",\n      "url": "https://communecter.org/upload/communecter/projects/64a1594e603ab8a6ef0e605c/banner/ecosmart-innovation.jpg",\n      "mediaType": "image/jpg",\n      "category": "image"\n    }\n  ],\n  "attributedTo": "https://communecter.org/api/activitypub/users/u/Hajavololona",\n  "content": "The EcoSmart Homes Initiative is a comprehensive program aimed at promoting sustainable and energy-efficient housing solutions...",\n  "name": "EcoSmart Homes Initiative",\n  "startTime": "2023-07-02T14:22:00Z",\n  "endTime": "2024-07-31T14:21:00Z",\n  "location": {\n    "type": "Place",\n    "id": "https://communecter.org/address/332566bc-fba0-4c82-8fc1-d86f1822c75f",\n    "address": {\n      "type": "PostalAddress",\n      "addressCountry": "MG",\n      "addressLocality": "Fianarantsoa",\n      "addressRegion": "Madagascar",\n      "streetAddress": "Antarandolo"\n    }\n  },\n  "published": "2023-07-02T14:22:00Z",\n  "url": "https://www.ecosmarthomesinitiative.com",\n  "shortDescription": "Create a knowledge-sharing platform: Establish an online platform to share information and resources about sustainable housing...",\n  "progress": "Ongoing"\n}\n')))}s.isMDXComponent=!0}}]);