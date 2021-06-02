(self.webpackChunk=self.webpackChunk||[]).push([[7233],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7053:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>p,default:()=>c});var r=n(1424),i=n(2489),a=(n(7689),n(9848)),o=["components"],l={id:"limitations",title:"Limitations",original_id:"limitations"},s={unversionedId:"limitations",id:"version-4.x/limitations",isDocsHomePage:!1,title:"Limitations",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm can install the same name@version multiple times and with different sets of dependencies. npm's shrinkwrap file is designed to reflect the node_modules layout created by npm. pnpm cannot create a similar layout, so it cannot respect npm's lockfile format. However, see pnpm import.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/zh/4.x/limitations",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"limitations",title:"Limitations",original_id:"limitations"},sidebar:"version-4.x/docs",previous:{title:"Benchmark",permalink:"/zh/4.x/benchmark"},next:{title:"About the package store",permalink:"/zh/4.x/about-package-store"}},p=[],m={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm can install the same ",(0,a.kt)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of dependencies. npm's shrinkwrap file is designed to reflect the ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," layout created by npm. pnpm cannot create a similar layout, so it cannot respect npm's lockfile format. However, see ",(0,a.kt)("a",{parentName:"li",href:"/zh/4.x/cli/import"},"pnpm import"),"."),(0,a.kt)("li",{parentName:"ol"},"You can't publish npm modules with ",(0,a.kt)("inlineCode",{parentName:"li"},"bundleDependencies")," managed by pnpm."),(0,a.kt)("li",{parentName:"ol"},"Binstubs (files in ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files not symlinks to JS files. The shell files are created to help pluggable CLI apps in finding their plugins in the unusual ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very rarely an issue and if you expect the file to be a js file, just reference the original file instead, as described in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),(0,a.kt)("li",{parentName:"ol"},"Node.js doesn't work with the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag when executed in a project that uses pnpm.")),(0,a.kt)("p",null,"Got an idea for workarounds for these issues? ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}c.isMDXComponent=!0}}]);