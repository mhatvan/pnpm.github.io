(self.webpackChunk=self.webpackChunk||[]).push([[3913],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7689);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=p,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4668:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>i,default:()=>c});var n=r(1424),p=r(2489),o=(r(7689),r(9848)),a=["components"],s={id:"pnpm-store",title:"pnpm store",original_id:"pnpm-store"},l={unversionedId:"pnpm-store",id:"version-4.x/pnpm-store",isDocsHomePage:!1,title:"pnpm store",description:"Commands related to the pnpm package store.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/pnpm-store.md",sourceDirName:".",slug:"/pnpm-store",permalink:"/es/4.x/pnpm-store",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",frontMatter:{id:"pnpm-store",title:"pnpm store",original_id:"pnpm-store"}},i=[{value:"pnpm store status",id:"pnpm-store-status",children:[]},{value:"pnpm store add",id:"pnpm-store-add",children:[]},{value:"pnpm store usages",id:"pnpm-store-usages",children:[]},{value:"pnpm store prune",id:"pnpm-store-prune",children:[]}],u={toc:i};function c(e){var t=e.components,r=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Commands related to the ",(0,o.kt)("a",{parentName:"p",href:"/es/4.x/about-package-store"},"pnpm package store"),"."),(0,o.kt)("h2",{id:"pnpm-store-status"},"pnpm store status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store status\n")),(0,o.kt)("p",null,"Checks for modified packages in the store."),(0,o.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),(0,o.kt)("h2",{id:"pnpm-store-add"},"pnpm store add"),(0,o.kt)("p",null,"Added in: v2.12.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store add [<@scope>/]<pkg>...\n")),(0,o.kt)("p",null,"Adds new packages to the pnpm store directly. Does not modify any projects or files outside the store."),(0,o.kt)("p",null,"Usage examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store add express@4 typescript@2\n")),(0,o.kt)("h2",{id:"pnpm-store-usages"},"pnpm store usages"),(0,o.kt)("p",null,"Added in: v2.21.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages [<@scope>/]<pkg>...\n")),(0,o.kt)("p",null,"Lists all pnpm projects on the current filesystem that depend on the specified packages in the store."),(0,o.kt)("p",null,"Usage examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages flatmap-stream\npnpm store usages is-odd@3.0.0 is-even@2.0.0\npnpm store usages @babel/core ansi-regex\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that this command might be slow for very large stores. We are working on improving performance.")),(0,o.kt)("h2",{id:"pnpm-store-prune"},"pnpm store prune"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store prune\n")),(0,o.kt)("p",null,"Removes unreferenced (extraneous, orphan) packages from the store."),(0,o.kt)("p",null,"Pruning the store is not harmful, but might slow down future installations."),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/es/4.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," best practices."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This command is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/es/4.x/pnpm-server"},"store server")," is running.")))}c.isMDXComponent=!0}}]);