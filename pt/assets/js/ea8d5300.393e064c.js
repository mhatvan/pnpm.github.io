(self.webpackChunk=self.webpackChunk||[]).push([[6262],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7689);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=p,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8687:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>m});var r=n(2791),p=n(9698),o=(n(7689),n(9848)),a=["components"],s={id:"pnpm-store",title:"pnpm store",original_id:"pnpm-store"},l=void 0,i={unversionedId:"pnpm-store",id:"version-4.x/pnpm-store",isDocsHomePage:!1,title:"pnpm store",description:"Commands related to the pnpm package store.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-4.x/pnpm-store.md",sourceDirName:".",slug:"/pnpm-store",permalink:"/pt/4.x/pnpm-store",editUrl:"https://crowdin.com/project/pnpm/pt",version:"4.x",frontMatter:{id:"pnpm-store",title:"pnpm store",original_id:"pnpm-store"}},c=[{value:"pnpm store status",id:"pnpm-store-status",children:[]},{value:"pnpm store add",id:"pnpm-store-add",children:[]},{value:"pnpm store usages",id:"pnpm-store-usages",children:[]},{value:"pnpm store prune",id:"pnpm-store-prune",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Commands related to the ",(0,o.kt)("a",{parentName:"p",href:"/pt/4.x/about-package-store"},"pnpm package store"),"."),(0,o.kt)("h2",{id:"pnpm-store-status"},"pnpm store status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store status\n")),(0,o.kt)("p",null,"Checks for modified packages in the store."),(0,o.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),(0,o.kt)("h2",{id:"pnpm-store-add"},"pnpm store add"),(0,o.kt)("p",null,"Added in: v2.12.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store add [<@scope>/]<pkg>...\n")),(0,o.kt)("p",null,"Adds new packages to the pnpm store directly. Does not modify any projects or files outside the store."),(0,o.kt)("p",null,"Usage examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store add express@4 typescript@2\n")),(0,o.kt)("h2",{id:"pnpm-store-usages"},"pnpm store usages"),(0,o.kt)("p",null,"Added in: v2.21.0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages [<@scope>/]<pkg>...\n")),(0,o.kt)("p",null,"Lists all pnpm projects on the current filesystem that depend on the specified packages in the store."),(0,o.kt)("p",null,"Usage examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages flatmap-stream\npnpm store usages is-odd@3.0.0 is-even@2.0.0\npnpm store usages @babel/core ansi-regex\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that this command might be slow for very large stores. We are working on improving performance.")),(0,o.kt)("h2",{id:"pnpm-store-prune"},"pnpm store prune"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm store prune\n")),(0,o.kt)("p",null,"Removes unreferenced (extraneous, orphan) packages from the store."),(0,o.kt)("p",null,"Pruning the store is not harmful, but might slow down future installations."),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/pt/4.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," best practices."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This command is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/pt/4.x/pnpm-server"},"store server")," is running.")))}m.isMDXComponent=!0}}]);