(self.webpackChunk=self.webpackChunk||[]).push([[4046],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6963:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>i,toc:()=>u,default:()=>d});var n=r(2791),o=r(9698),p=(r(7689),r(9848)),a=["components"],l={id:"pnpm-server",title:"pnpm server",original_id:"pnpm-server"},s=void 0,i={unversionedId:"pnpm-server",id:"version-4.x/pnpm-server",isDocsHomePage:!1,title:"pnpm server",description:"pnpm server start",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/pnpm-server.md",sourceDirName:".",slug:"/pnpm-server",permalink:"/hu/4.x/pnpm-server",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"pnpm-server",title:"pnpm server",original_id:"pnpm-server"}},u=[{value:"pnpm server start",id:"pnpm-server-start",children:[{value:"background",id:"background",children:[]},{value:"protocol",id:"protocol",children:[]},{value:"port",id:"port",children:[]},{value:"ignore-stop-requests",id:"ignore-stop-requests",children:[]},{value:"ignore-upload-requests",id:"ignore-upload-requests",children:[]}]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"pnpm-server-start"},"pnpm server start"),(0,p.kt)("p",null,"Added in: v1.30.0"),(0,p.kt)("p",null,"Starts a server that does all interactions with the store. Other commands will delegate any store-related tasks to this server."),(0,p.kt)("h3",{id:"background"},"background"),(0,p.kt)("p",null,"Added in: v1.30.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Default: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"Type: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,"Runs the server in the background."),(0,p.kt)("h3",{id:"protocol"},"protocol"),(0,p.kt)("p",null,"Added in: v1.30.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Default: ",(0,p.kt)("strong",{parentName:"li"},"auto")),(0,p.kt)("li",{parentName:"ul"},"Type: ",(0,p.kt)("strong",{parentName:"li"},"auto"),", ",(0,p.kt)("strong",{parentName:"li"},"tcp"),", ",(0,p.kt)("strong",{parentName:"li"},"ipc"))),(0,p.kt)("p",null,"The communication protocol used by the server. When ",(0,p.kt)("strong",{parentName:"p"},"auto")," is used, ",(0,p.kt)("strong",{parentName:"p"},"ipc")," used on non-Windows servers and ",(0,p.kt)("strong",{parentName:"p"},"tcp")," on Windows."),(0,p.kt)("h3",{id:"port"},"port"),(0,p.kt)("p",null,"Added in: v1.30.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Default: ",(0,p.kt)("strong",{parentName:"li"},"5813")),(0,p.kt)("li",{parentName:"ul"},"Type: ",(0,p.kt)("strong",{parentName:"li"},"port number"))),(0,p.kt)("p",null,"The port number to use, when TCP is used for communication. If port is specified and ",(0,p.kt)("strong",{parentName:"p"},"protocol")," is set to auto, ",(0,p.kt)("strong",{parentName:"p"},"tcp")," protocol is used."),(0,p.kt)("p",null,"Other configs that are used by ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm server"),": ",(0,p.kt)("strong",{parentName:"p"},"store"),", ",(0,p.kt)("strong",{parentName:"p"},"lock"),"."),(0,p.kt)("h3",{id:"ignore-stop-requests"},"ignore-stop-requests"),(0,p.kt)("p",null,"Added in: v1.30.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Default: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"Type: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,"Disallows stopping the server using ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,p.kt)("h3",{id:"ignore-upload-requests"},"ignore-upload-requests"),(0,p.kt)("p",null,"Added in: v1.31.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Default: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"Type: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,"Disallows creating new side effect cache during install."),(0,p.kt)("h2",{id:"pnpm-server-stop"},"pnpm server stop"),(0,p.kt)("p",null,"Added in: v1.30.0"),(0,p.kt)("p",null,"Stops the store server."),(0,p.kt)("h2",{id:"pnpm-server-status"},"pnpm server status"),(0,p.kt)("p",null,"Added in: v2.5.0"),(0,p.kt)("p",null,"Prints information about the running server."))}d.isMDXComponent=!0}}]);