(window.webpackJsonp=window.webpackJsonp||[]).push([[1940],{2009:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(3064)),p={id:"store",title:"pnpm store",original_id:"store"},c={unversionedId:"cli/store",id:"version-5.4/cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/versioned_docs/version-5.4/cli/store.md",slug:"/cli/store",permalink:"/5.4/cli/store",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.4/cli/store.md",version:"5.4",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.4/docs",previous:{title:"pnpm server",permalink:"/5.4/cli/server"},next:{title:"package.json",permalink:"/5.4/package_json"}},s=[{value:"Commands",id:"commands",children:[{value:"pnpm store status",id:"pnpm-store-status",children:[]},{value:"pnpm store add",id:"pnpm-store-add",children:[]},{value:"pnpm store prune",id:"pnpm-store-prune",children:[]}]}],i={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Managing the ",Object(a.b)("a",{parentName:"p",href:"../about-package-store"},"package store"),"."),Object(a.b)("h2",{id:"commands"},"Commands"),Object(a.b)("h3",{id:"pnpm-store-status"},"pnpm store status"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"pnpm store status\n")),Object(a.b)("p",null,"Checks for modified packages in the store."),Object(a.b)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),Object(a.b)("h3",{id:"pnpm-store-add"},"pnpm store add"),Object(a.b)("p",null,"Added in: v2.12.0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"pnpm store add &lt;pkg>...\n")),Object(a.b)("p",null,"Adds new packages to the pnpm store directly.\nDoes not modify any projects or files outside the store."),Object(a.b)("p",null,"Usage examples:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store add express@4 typescript@2\n")),Object(a.b)("h3",{id:"pnpm-store-prune"},"pnpm store prune"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store prune\n")),Object(a.b)("p",null,"Removes unreferenced (extraneous, orphan) packages from the store."),Object(a.b)("p",null,"Pruning the store is not harmful, but might slow down future installations."),Object(a.b)("p",null,"Please read ",Object(a.b)("a",{parentName:"p",href:"/5.4/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm store prune")," best practices."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This command is prohibited when a ",Object(a.b)("a",{parentName:"p",href:"server"},"store server")," is running.")))}l.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},i),{},{components:n})):o.a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);