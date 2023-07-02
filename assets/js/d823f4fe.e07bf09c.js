"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[2105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>T,default:()=>P,frontMatter:()=>O,metadata:()=>x,toc:()=>D});var r=a(7462),n=a(7294),l=a(3905),o=a(6010),i=a(2466),s=a(6550),u=a(1980),c=a(7392),d=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function b(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=b(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:r}),[c,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var y=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(d(t),s(r))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function j(e){const t=(0,y.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}const N={tabItem:"tabItem_Ymn6"};function E(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(N.tabItem,r),hidden:a},t)}const O={id:"delete",title:"Delete",sidebar_label:"Delete",sidebar_position:6,tags:["delete"]},T=void 0,x={unversionedId:"projects/funkwhale/activities/delete",id:"projects/funkwhale/activities/delete",title:"Delete",description:"The Delete activity is used to remove objects from Funkwhale's database.",source:"@site/docs/projects/funkwhale/activities/delete.mdx",sourceDirName:"projects/funkwhale/activities",slug:"/projects/funkwhale/activities/delete",permalink:"/projects/funkwhale/activities/delete",draft:!1,tags:[{label:"delete",permalink:"/tags/delete"}],version:"current",sidebarPosition:6,frontMatter:{id:"delete",title:"Delete",sidebar_label:"Delete",sidebar_position:6,tags:["delete"]},sidebar:"projectsSidebar",previous:{title:"Update",permalink:"/projects/funkwhale/activities/update"},next:{title:"Objects",permalink:"/category/objects-2"}},I={},D=[{value:"Internal logic",id:"internal-logic",level:2},{value:"Example",id:"example",level:2}],V={toc:D},C="wrapper";function P(e){let{components:t,...a}=e;return(0,l.kt)(C,(0,r.Z)({},V,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")," activity is used to remove objects from Funkwhale's database."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Reference"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Activity"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/activitypub/#delete-activity-inbox"},"Undo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"A Funkwhale ",(0,l.kt)("inlineCode",{parentName:"td"},"Library")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Audio")," object")))),(0,l.kt)("h2",{id:"internal-logic"},"Internal logic"),(0,l.kt)("p",null,"When Funkwhale receives a ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")," activity, it deletes the associated object from the database."),(0,l.kt)("p",null,"Funkwhale ensures the actor initiating the activity is the owner of the associated object before handling it."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(j,{mdxType:"Tabs"},(0,l.kt)(E,{value:"library",label:"Library",mdxType:"TabItem"},(0,l.kt)("p",null,"In this example, ",(0,l.kt)("strong",{parentName:"p"},"Bob")," deletes a library and notifies its followers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "@context": [\n      "https://www.w3.org/ns/activitystreams",\n      "https://w3id.org/security/v1",\n      {}\n   ],\n   "type": "Delete",\n   "to": [\n      "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6/followers"\n   ],\n   "actor": "https://awesome.music/federation/actors/Bob",\n   "object": {\n      "type": "Library",\n      "id": "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6"\n   }\n}\n'))),(0,l.kt)(E,{value:"audio",label:"Audio",mdxType:"TabItem"},(0,l.kt)("p",null,"In this example, ",(0,l.kt)("strong",{parentName:"p"},"Bob")," deletes three audio objects in a library and notifies the library's followers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "@context": [\n      "https://www.w3.org/ns/activitystreams",\n      "https://w3id.org/security/v1",\n      {}\n   ],\n   "type": "Delete",\n   "to": [\n      "https://awesome.music/federation/music/libraries/dc702491-f6ce-441b-9da0-cecbed08bcc6/followers"\n   ],\n   "actor": "https://awesome.music/federation/actors/Bob",\n   "object": {\n      "type": "Audio",\n      "id": [\n         "https://awesome.music/federation/music/uploads/19420073-3572-48a9-8c6c-b385ee1b7905",\n         "https://awesome.music/federation/music/uploads/11d99680-23c6-4f72-997a-073b980ab204",\n         "https://awesome.music/federation/music/uploads/1efadc1c-a704-4b8a-a71a-b288b1d1f423"\n      ]\n   }\n}\n')))))}P.isMDXComponent=!0}}]);