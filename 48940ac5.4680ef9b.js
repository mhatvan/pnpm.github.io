(window.webpackJsonp=window.webpackJsonp||[]).push([[812],{3064:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},881:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(3064)),i={id:"about-package-store",title:"About the package store",original_id:"about-package-store"},c={unversionedId:"about-package-store",id:"version-4.2/about-package-store",isDocsHomePage:!1,title:"About the package store",description:"A store is a folder that contains packages and information about projects that are using them.",source:"@site/versioned_docs/version-4.2/about-the-package-store.md",slug:"/about-package-store",permalink:"/4.2/about-package-store",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.2/about-the-package-store.md",version:"4.2",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-4.2/docs",previous:{title:"Limitations",permalink:"/4.2/limitations"},next:{title:"Symlinked `node_modules` structure",permalink:"/4.2/symlinked-node-modules-structure"}},s=[{value:"Store directory structure",id:"store-directory-structure",children:[{value:"Packages from npm-compatible registries",id:"packages-from-npm-compatible-registries",children:[]},{value:"Packages from Git",id:"packages-from-git",children:[]}]},{value:"<code>store.json</code>",id:"storejson",children:[]}],p={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A store is a folder that contains packages and information about projects that are using them.\nThe store does not include the ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," folder of any of the packages, unless the package has\n",Object(a.b)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#bundleddependencies"},"bundled dependencies"),"."),Object(a.b)("p",null,"The store is immutable. Execution of modules from the store cannot remove/add files in the store,\nbecause modules are executed in the context of the projects they are linked into."),Object(a.b)("h2",{id:"store-directory-structure"},"Store directory structure"),Object(a.b)("p",null,"Path structure: ",Object(a.b)("inlineCode",{parentName:"p"},"<package source>/<package id>"),". The path to a package in the store is the package's ID."),Object(a.b)("h3",{id:"packages-from-npm-compatible-registries"},"Packages from npm-compatible registries"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<registry URL>/<package name>/<package version>")),Object(a.b)("p",null,"E.g.:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"registry.npmjs.org/gulp/2.1.0\nregistry.npmjs.org/@cycle/dom/14.1.0\nregistry.node-modules.io/@wmhilton/log/1.1.0\n")),Object(a.b)("h3",{id:"packages-from-git"},"Packages from Git"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<Git URL domain>/<Git path>/<commit hash>")),Object(a.b)("p",null,"E.g.: ",Object(a.b)("inlineCode",{parentName:"p"},"github.com/alexGugel/ied/b246270b53e43f1dc469df0c9b9ce19bb881e932")),Object(a.b)("h2",{id:"storejson"},Object(a.b)("inlineCode",{parentName:"h2"},"store.json")),Object(a.b)("p",null,"A file in the root of store that contains information about projects depending on specific packages from the store."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "/home/john_smith/src/ied": [\n    "registry.npmjs.org/npm/3.10.2"\n  ],\n  "/home/john_smith/src/ied": [\n    "registry.npmjs.org/arr-flatten/1.0.1",\n    "registry.npmjs.org/byline/5.0.0",\n    "registry.npmjs.org/cache-manager/2.2.0"\n  ]\n}\n')))}l.isMDXComponent=!0}}]);