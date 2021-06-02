(self.webpackChunk=self.webpackChunk||[]).push([[7973],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9007:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>i,toc:()=>l,default:()=>u});var n=r(1424),a=r(2489),o=(r(7689),r(9848)),p=["components"],s={id:"store",title:"pnpm store",original_id:"store"},i={unversionedId:"cli/store",id:"version-4.x/cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/tr/4.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"store",title:"pnpm store",original_id:"store"},sidebar:"version-4.x/docs",previous:{title:"pnpm server",permalink:"/tr/4.x/cli/server"},next:{title:"package.json",permalink:"/tr/4.x/package_json"}},l=[{value:"Commands",id:"commands",children:[{value:"pnpm store status",id:"pnpm-store-status",children:[]},{value:"pnpm store add",id:"pnpm-store-add",children:[]},{value:"pnpm store usages",id:"pnpm-store-usages",children:[]},{value:"pnpm store prune",id:"pnpm-store-prune",children:[]}]}],c={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Managing the ",(0,o.kt)("a",{parentName:"p",href:"../about-package-store.md"},"package store"),"."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"pnpm-store-status"},"pnpm store status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm store status\n")),(0,o.kt)("p",null,"Checks for modified packages in the store."),(0,o.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),(0,o.kt)("h3",{id:"pnpm-store-add"},"pnpm store add"),(0,o.kt)("p",null,"Added in: v2.12.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm store add <pkg>...\n")),(0,o.kt)("p",null,"Adds new packages to the pnpm store directly. Does not modify any projects or files outside the store."),(0,o.kt)("p",null,"Usage examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store add express@4 typescript@2\n")),(0,o.kt)("h3",{id:"pnpm-store-usages"},"pnpm store usages"),(0,o.kt)("p",null,"Added in: v2.21.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm store usages <pkg>...\n")),(0,o.kt)("p",null,"Lists all pnpm projects on the current filesystem that depend on the specified packages in the store."),(0,o.kt)("p",null,"Usage examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages flatmap-stream\npnpm store usages is-odd@3.0.0 is-even@2.0.0\npnpm store usages @babel/core ansi-regex\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that this command might be slow for very large stores. We are working on improving performance.")),(0,o.kt)("h3",{id:"pnpm-store-prune"},"pnpm store prune"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store prune\n")),(0,o.kt)("p",null,"Removes unreferenced (extraneous, orphan) packages from the store."),(0,o.kt)("p",null,"Pruning the store is not harmful, but might slow down future installations."),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/tr/4.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," best practices."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This command is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/tr/4.x/cli/server"},"store server")," is running.")))}u.isMDXComponent=!0}}]);