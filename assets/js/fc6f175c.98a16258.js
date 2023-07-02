"use strict";(self.webpackChunkfedidocs=self.webpackChunkfedidocs||[]).push([[8001],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=o,d=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={id:"mentions",title:"Mentions",sidebar_position:4,tags:["Mentions"]},i=void 0,s={unversionedId:"projects/kbin/mentions",id:"projects/kbin/mentions",title:"Mentions",description:"Example:",source:"@site/docs/projects/kbin/mentions.md",sourceDirName:"projects/kbin",slug:"/projects/kbin/mentions",permalink:"/communecter-fedidocs/projects/kbin/mentions",draft:!1,tags:[{label:"Mentions",permalink:"/communecter-fedidocs/tags/mentions"}],version:"current",sidebarPosition:4,frontMatter:{id:"mentions",title:"Mentions",sidebar_position:4,tags:["Mentions"]},sidebar:"projectsSidebar",previous:{title:"Hashtags",permalink:"/communecter-fedidocs/projects/kbin/hashtags"},next:{title:"Moderators",permalink:"/communecter-fedidocs/projects/kbin/moderators"}},p={},l=[{value:"Example:",id:"example",level:2}],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "object": {\n    "id": "https://lab.kbin.pub/m/random/p/95114",\n    "type": "Note",\n    "attributedTo": "https://lab.kbin.pub/u/ernest",\n    "inReplyTo": null,\n    "to": [\n      "https://lab.kbin.pub/m/random",\n      "https://www.w3.org/ns/activitystreams#Public",\n      "https://dev.karab.in/u/eee",\n      "https://101010.pl/users/ernest"\n    ],\n    "cc": ["https://lab.kbin.pub/u/ernest/followers"],\n    "sensitive": false,\n    "content": "<p>Mentions example <a href=\\"https://dev.karab.in/u/eee\\" class=\\"mention u-url\\" title=\\"@eee@dev.karab.in\\" data-action=\\"mouseover-&gt;kbin#mention\\" data-kbin-username-param=\\"eee@dev.karab.in\\" rel=\\"noopener noreferrer nofollow\\" target=\\"_blank\\">@eee</a> <a href=\\"https://101010.pl/@ernest\\" class=\\"mention u-url\\" title=\\"@ernest@101010.pl\\" data-action=\\"mouseover-&gt;kbin#mention\\" data-kbin-username-param=\\"ernest@101010.pl\\" rel=\\"noopener noreferrer nofollow\\" target=\\"_blank\\">@ernest</a></p>\\n",\n    "mediaType": "text/html",\n    "url": "https://lab.kbin.pub/m/random/p/95114",\n    "tag": [\n      {\n        "type": "Mention",\n        "href": "https://dev.karab.in/u/eee",\n        "name": "@eee@dev.karab.in"\n      },\n      {\n        "type": "Mention",\n        "href": "https://101010.pl/users/ernest",\n        "name": "@ernest@101010.pl"\n      }\n    ],\n    "commentsEnabled": true,\n    "published": "2023-04-12T09:13:14+00:00"\n  }\n}\n')))}m.isMDXComponent=!0}}]);