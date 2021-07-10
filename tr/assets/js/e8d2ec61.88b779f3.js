(self.webpackChunk=self.webpackChunk||[]).push([[3670],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,v=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?n.createElement(v,p(p({ref:r},u),{},{components:t})):n.createElement(v,p({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7940:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>i,toc:()=>u,default:()=>m});var n=t(2791),a=t(9698),o=(t(7689),t(9848)),p=["components"],s={id:"pnpm-server",title:"pnpm server",original_id:"pnpm-server"},l=void 0,i={unversionedId:"pnpm-server",id:"version-4.x/pnpm-server",isDocsHomePage:!1,title:"pnpm server",description:"pnpm server start",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/pnpm-server.md",sourceDirName:".",slug:"/pnpm-server",permalink:"/tr/4.x/pnpm-server",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"pnpm-server",title:"pnpm server",original_id:"pnpm-server"}},u=[{value:"pnpm server start",id:"pnpm-server-start",children:[{value:"background",id:"background",children:[]},{value:"protocol",id:"protocol",children:[]},{value:"port",id:"port",children:[]},{value:"ignore-stop-requests",id:"ignore-stop-requests",children:[]},{value:"ignore-upload-requests",id:"ignore-upload-requests",children:[]}]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}],c={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pnpm-server-start"},"pnpm server start"),(0,o.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("p",null,"Starts a server that does all interactions with the store. Other commands will delegate any store-related tasks to this server."),(0,o.kt)("h3",{id:"background"},"background"),(0,o.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tip: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Runs the server in the background."),(0,o.kt)("h3",{id:"protocol"},"protocol"),(0,o.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,o.kt)("strong",{parentName:"li"},"auto")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"auto"),", ",(0,o.kt)("strong",{parentName:"li"},"tcp"),", ",(0,o.kt)("strong",{parentName:"li"},"ipc"))),(0,o.kt)("p",null,"The communication protocol used by the server. When ",(0,o.kt)("strong",{parentName:"p"},"auto")," is used, ",(0,o.kt)("strong",{parentName:"p"},"ipc")," used on non-Windows servers and ",(0,o.kt)("strong",{parentName:"p"},"tcp")," on Windows."),(0,o.kt)("h3",{id:"port"},"port"),(0,o.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"5813")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"port number"))),(0,o.kt)("p",null,"The port number to use, when TCP is used for communication. If port is specified and ",(0,o.kt)("strong",{parentName:"p"},"protocol")," is set to auto, ",(0,o.kt)("strong",{parentName:"p"},"tcp")," protocol is used."),(0,o.kt)("p",null,"Other configs that are used by ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm server"),": ",(0,o.kt)("strong",{parentName:"p"},"store"),", ",(0,o.kt)("strong",{parentName:"p"},"lock"),"."),(0,o.kt)("h3",{id:"ignore-stop-requests"},"ignore-stop-requests"),(0,o.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tip: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Disallows stopping the server using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,o.kt)("h3",{id:"ignore-upload-requests"},"ignore-upload-requests"),(0,o.kt)("p",null,"S\xfcr\xfcm 1.31.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tip: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Disallows creating new side effect cache during install."),(0,o.kt)("h2",{id:"pnpm-server-stop"},"pnpm server stop"),(0,o.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("p",null,"Stops the store server."),(0,o.kt)("h2",{id:"pnpm-server-status"},"pnpm server status"),(0,o.kt)("p",null,"S\xfcr\xfcm 2.5.0 ve sonras\u0131nda ge\xe7erli"),(0,o.kt)("p",null,"Prints information about the running server."))}m.isMDXComponent=!0}}]);