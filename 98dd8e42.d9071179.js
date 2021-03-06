(window.webpackJsonp=window.webpackJsonp||[]).push([[1788],{1857:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),p=(r(0),r(3064)),a={id:"pnpm-server",title:"pnpm server",original_id:"pnpm-server"},l={unversionedId:"pnpm-server",id:"version-3.6/pnpm-server",isDocsHomePage:!1,title:"pnpm server",description:"pnpm server start",source:"@site/versioned_docs/version-3.6/pnpm-server.md",slug:"/pnpm-server",permalink:"/3.6/pnpm-server",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.6/pnpm-server.md",version:"3.6",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-3.6/docs",previous:{title:"pnpm run",permalink:"/3.6/pnpm-run"},next:{title:"pnpm store",permalink:"/3.6/pnpm-store"}},s=[{value:"pnpm server start",id:"pnpm-server-start",children:[{value:"background",id:"background",children:[]},{value:"protocol",id:"protocol",children:[]},{value:"port",id:"port",children:[]},{value:"ignore-stop-requests",id:"ignore-stop-requests",children:[]},{value:"ignore-upload-requests",id:"ignore-upload-requests",children:[]}]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}],i={toc:s};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"pnpm-server-start"},"pnpm server start"),Object(p.b)("p",null,"Added in: v1.30.0"),Object(p.b)("p",null,"Starts a server that does all interactions with the store.\nOther commands will delegate any store-related tasks to this server."),Object(p.b)("h3",{id:"background"},"background"),Object(p.b)("p",null,"Added in: v1.30.0"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Default: ",Object(p.b)("strong",{parentName:"li"},"false")),Object(p.b)("li",{parentName:"ul"},"Type: ",Object(p.b)("strong",{parentName:"li"},"Boolean"))),Object(p.b)("p",null,"Runs the server in the background."),Object(p.b)("h3",{id:"protocol"},"protocol"),Object(p.b)("p",null,"Added in: v1.30.0"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Default: ",Object(p.b)("strong",{parentName:"li"},"auto")),Object(p.b)("li",{parentName:"ul"},"Type: ",Object(p.b)("strong",{parentName:"li"},"auto"),", ",Object(p.b)("strong",{parentName:"li"},"tcp"),", ",Object(p.b)("strong",{parentName:"li"},"ipc"))),Object(p.b)("p",null,"The communication protocol used by the server.\nWhen ",Object(p.b)("strong",{parentName:"p"},"auto")," is used, ",Object(p.b)("strong",{parentName:"p"},"ipc")," used on non-Windows servers and ",Object(p.b)("strong",{parentName:"p"},"tcp")," on Windows."),Object(p.b)("h3",{id:"port"},"port"),Object(p.b)("p",null,"Added in: v1.30.0"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Default: ",Object(p.b)("strong",{parentName:"li"},"5813")),Object(p.b)("li",{parentName:"ul"},"Type: ",Object(p.b)("strong",{parentName:"li"},"port number"))),Object(p.b)("p",null,"The port number to use, when TCP is used for communication.\nIf port is specified and ",Object(p.b)("strong",{parentName:"p"},"protocol")," is set to auto, ",Object(p.b)("strong",{parentName:"p"},"tcp")," protocol is used."),Object(p.b)("p",null,"Other configs that are used by ",Object(p.b)("inlineCode",{parentName:"p"},"pnpm server"),": ",Object(p.b)("strong",{parentName:"p"},"store"),", ",Object(p.b)("strong",{parentName:"p"},"lock"),"."),Object(p.b)("h3",{id:"ignore-stop-requests"},"ignore-stop-requests"),Object(p.b)("p",null,"Added in: v1.30.0"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Default: ",Object(p.b)("strong",{parentName:"li"},"false")),Object(p.b)("li",{parentName:"ul"},"Type: ",Object(p.b)("strong",{parentName:"li"},"Boolean"))),Object(p.b)("p",null,"Disallows stopping the server using ",Object(p.b)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),Object(p.b)("h3",{id:"ignore-upload-requests"},"ignore-upload-requests"),Object(p.b)("p",null,"Added in: v1.31.0"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Default: ",Object(p.b)("strong",{parentName:"li"},"false")),Object(p.b)("li",{parentName:"ul"},"Type: ",Object(p.b)("strong",{parentName:"li"},"Boolean"))),Object(p.b)("p",null,"Disallows creating new side effect cache during install."),Object(p.b)("h2",{id:"pnpm-server-stop"},"pnpm server stop"),Object(p.b)("p",null,"Added in: v1.30.0"),Object(p.b)("p",null,"Stops the store server."),Object(p.b)("h2",{id:"pnpm-server-status"},"pnpm server status"),Object(p.b)("p",null,"Added in: v2.5.0"),Object(p.b)("p",null,"Prints information about the running server."))}c.isMDXComponent=!0},3064:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),c=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=c(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||p;return r?o.a.createElement(m,l(l({ref:t},i),{},{components:r})):o.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var i=2;i<p;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);