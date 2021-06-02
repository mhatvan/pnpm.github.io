(self.webpackChunk=self.webpackChunk||[]).push([[1937],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2691:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var n=r(1424),o=r(2489),a=(r(7689),r(9848)),i=["components"],s={id:"about-package-store",title:"About the package store",original_id:"about-package-store"},c={unversionedId:"about-package-store",id:"version-4.x/about-package-store",isDocsHomePage:!1,title:"About the package store",description:"A store is a folder that contains packages and information about projects that are using them. The store does not include the node_modules folder of any of the packages, unless the package has bundled dependencies.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/about-the-package-store.md",sourceDirName:".",slug:"/about-package-store",permalink:"/hu/4.x/about-package-store",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"about-package-store",title:"About the package store",original_id:"about-package-store"},sidebar:"version-4.x/docs",previous:{title:"Limitations",permalink:"/hu/4.x/limitations"},next:{title:"Symlinked `node_modules` structure",permalink:"/hu/4.x/symlinked-node-modules-structure"}},p=[{value:"Store directory structure",id:"store-directory-structure",children:[{value:"Packages from npm-compatible registries",id:"packages-from-npm-compatible-registries",children:[]},{value:"Packages from Git",id:"packages-from-git",children:[]}]},{value:"<code>store.json</code>",id:"storejson",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A store is a folder that contains packages and information about projects that are using them. The store does not include the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder of any of the packages, unless the package has ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#bundleddependencies"},"bundled dependencies"),"."),(0,a.kt)("p",null,"The store is immutable. Execution of modules from the store cannot remove/add files in the store, because modules are executed in the context of the projects they are linked into."),(0,a.kt)("h2",{id:"store-directory-structure"},"Store directory structure"),(0,a.kt)("p",null,"Path structure: ",(0,a.kt)("inlineCode",{parentName:"p"},"<package source>/<package id>"),". The path to a package in the store is the package's ID."),(0,a.kt)("h3",{id:"packages-from-npm-compatible-registries"},"Packages from npm-compatible registries"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<registry URL>/<package name>/<package version>")),(0,a.kt)("p",null,"E.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"registry.npmjs.org/gulp/2.1.0\nregistry.npmjs.org/@cycle/dom/14.1.0\nregistry.node-modules.io/@wmhilton/log/1.1.0\n")),(0,a.kt)("h3",{id:"packages-from-git"},"Packages from Git"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Git URL domain>/<Git path>/<commit hash>")),(0,a.kt)("p",null,"E.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/alexGugel/ied/b246270b53e43f1dc469df0c9b9ce19bb881e932")),(0,a.kt)("h2",{id:"storejson"},(0,a.kt)("inlineCode",{parentName:"h2"},"store.json")),(0,a.kt)("p",null,"A file in the root of store that contains information about projects depending on specific packages from the store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "/home/john_smith/src/ied": [\n    "registry.npmjs.org/npm/3.10.2"\n  ],\n  "/home/john_smith/src/ied": [\n    "registry.npmjs.org/arr-flatten/1.0.1",\n    "registry.npmjs.org/byline/5.0.0",\n    "registry.npmjs.org/cache-manager/2.2.0"\n  ]\n}\n')))}u.isMDXComponent=!0}}]);