(window.webpackJsonp=window.webpackJsonp||[]).push([[782],{3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),p=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=p.a.createContext({}),l=function(e){var t=p.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},b=p.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(a,".").concat(b)]||u[b]||m[b]||o;return n?p.a.createElement(d,s(s({ref:t},i),{},{components:n})):p.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<o;i++)a[i]=n[i];return p.a.createElement.apply(null,a)}return p.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},851:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),p=n(7),o=(n(0),n(3064)),a={id:"pnpm-store",title:"pnpm store",original_id:"pnpm-store"},s={unversionedId:"pnpm-store",id:"version-2/pnpm-store",isDocsHomePage:!1,title:"pnpm store",description:"Commands related to the pnpm package store.",source:"@site/versioned_docs/version-2/pnpm-store.md",slug:"/pnpm-store",permalink:"/2/pnpm-store",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-2/pnpm-store.md",version:"2",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-2/docs",previous:{title:"pnpm dislink",permalink:"/2/pnpm-dislink"},next:{title:"pnpm recursive",permalink:"/2/pnpm-recursive"}},c=[{value:"pnpm store status",id:"pnpm-store-status",children:[]},{value:"pnpm store add",id:"pnpm-store-add",children:[]},{value:"pnpm store usages",id:"pnpm-store-usages",children:[]},{value:"pnpm store prune",id:"pnpm-store-prune",children:[]}],i={toc:c};function l(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Commands related to the ",Object(o.b)("a",{parentName:"p",href:"about-the-package-store"},"pnpm package store"),"."),Object(o.b)("h2",{id:"pnpm-store-status"},"pnpm store status"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store status\n")),Object(o.b)("p",null,"Checks for modified packages in the store."),Object(o.b)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),Object(o.b)("h2",{id:"pnpm-store-add"},"pnpm store add"),Object(o.b)("p",null,"Added in: v2.12.0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store add [<@scope>/]<pkg>...\n")),Object(o.b)("p",null,"Adds new packages to the pnpm store directly.\nDoes not modify any projects or files outside the store."),Object(o.b)("p",null,"Usage examples:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store add express@4 typescript@2\n")),Object(o.b)("h2",{id:"pnpm-store-usages"},"pnpm store usages"),Object(o.b)("p",null,"Added in: v2.21.0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages [<@scope>/]<pkg>...\n")),Object(o.b)("p",null,"Lists all pnpm projects on the current filesystem that depend on the specified packages in the store."),Object(o.b)("p",null,"Usage examples:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages flatmap-stream\npnpm store usages is-odd@3.0.0 is-even@2.0.0\npnpm store usages @babel/core ansi-regex\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that this command might be slow for very large stores.\nWe are working on improving performance.")),Object(o.b)("h2",{id:"pnpm-store-prune"},"pnpm store prune"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store prune\n")),Object(o.b)("p",null,"Removes unreferenced (extraneous, orphan) packages from the store."),Object(o.b)("p",null,"Pruning the store is not harmful, but might slow down future installations."),Object(o.b)("p",null,"Please read ",Object(o.b)("a",{parentName:"p",href:"/2/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm store prune")," best practices."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This command is prohibited when a ",Object(o.b)("a",{parentName:"p",href:"pnpm-server"},"store server")," is running.")))}l.isMDXComponent=!0}}]);