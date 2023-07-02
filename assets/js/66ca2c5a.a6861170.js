"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[3862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(n),m=r,f=l["".concat(p,".").concat(m)]||l[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"update",title:"Update",sidebar_label:"Update",sidebar_position:11,tags:["update"]},o=void 0,c={unversionedId:"projects/communecter/Activities/update",id:"projects/communecter/Activities/update",title:"Update",description:"The Update activity is used to modify an existing object in Communecter, such as a Note, Event, or Project.",source:"@site/docs/projects/communecter/Activities/Update.md",sourceDirName:"projects/communecter/Activities",slug:"/projects/communecter/Activities/update",permalink:"/communecter-fedidocs/projects/communecter/Activities/update",draft:!1,tags:[{label:"update",permalink:"/communecter-fedidocs/tags/update"}],version:"current",sidebarPosition:11,frontMatter:{id:"update",title:"Update",sidebar_label:"Update",sidebar_position:11,tags:["update"]},sidebar:"projectsSidebar",previous:{title:"Undo",permalink:"/communecter-fedidocs/projects/communecter/Activities/undo"},next:{title:"Event",permalink:"/communecter-fedidocs/projects/communecter/Objects/event"}},p={},d=[{value:"Request",id:"request",level:3},{value:"Internal Logic",id:"internal-logic",level:3},{value:"Examples",id:"examples",level:3},{value:"Updating a Note",id:"updating-a-note",level:4},{value:"Modifying an Event",id:"modifying-an-event",level:4},{value:"Modifying a Project",id:"modifying-a-project",level:4}],s={toc:d},l="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," activity is used to modify an existing object in Communecter, such as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Note"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Project"),"."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reference"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Activity"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitypub/#update-activity-inbox"},"Update"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"The object to be updated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique Update request IRI")))),(0,r.kt)("h3",{id:"internal-logic"},"Internal Logic"),(0,r.kt)("p",null,"When Communecter receives an ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," activity, it processes the activity and applies the modifications to the corresponding object. This allows users to make changes to objects they have created or have the necessary permissions to modify."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"updating-a-note"},"Updating a Note"),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("strong",{parentName:"p"},"Oceatoon")," updates a note she has previously created. The ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," field contains the URL of the note to be updated, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," field contains the updated content of the note."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "Update",\n  "object": "https://communecter.org/api/activitypub/object/id/649c9e7ae4135",\n  "id": "https://communecter.org/api/activitypub/activity/id/649caf628366d",\n  "actor": "https://communecter.org/api/activitypub/users/u/oceatoon",\n  "content": "Updated content of the note"\n}\n')),(0,r.kt)("h4",{id:"modifying-an-event"},"Modifying an Event"),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("strong",{parentName:"p"},"Oceatoon")," modifies the details of an event he has created. The object field contains the URL of the event to be updated, and the summary and description fields contain the updated summary and description of the event, respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "Update",\n  "object": "https://communecter.org/api/activitypub/object/id/649c9e7ae4135",\n  "id": "https://communecter.org/api/activitypub/activity/id/649caf628366d",\n  "actor": "https://communecter.org/api/activitypub/users/u/oceatoon",\n  "summary": "Updated summary of the event",\n  "description": "Updated description of the event"\n}\n')),(0,r.kt)("h4",{id:"modifying-a-project"},"Modifying a Project"),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("strong",{parentName:"p"},"Oceatoon"),"  modifies the details of a project he has created. The object field contains the URL of the project to be updated, and the name and description fields contain the updated name and description of the project, respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/activitystreams",\n  "type": "Update",\n  "object": "https://communecter.org/api/activitypub/object/id/649c9e7ae4135",\n  "id": "https://communecter.org/api/activitypub/activity/id/649caf628366d",\n  "actor": "https://communecter.org/api/activitypub/users/u/oceatoon",\n  "name": "Updated name of the project",\n  "description": "Updated description of the project"\n}\n')),(0,r.kt)("p",null,"In all examples, the id field represents a unique identifier for the update activity, and the actor field contains the URL of the actor performing the update."))}u.isMDXComponent=!0}}]);