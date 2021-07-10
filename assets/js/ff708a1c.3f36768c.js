(self.webpackChunk=self.webpackChunk||[]).push([[1921],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1240:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>s,toc:()=>l,default:()=>d});var r=n(2791),o=n(9698),i=(n(7689),n(9848)),a=["components"],c={id:"production",title:"Production"},p=void 0,s={unversionedId:"production",id:"version-6.x/production",isDocsHomePage:!1,title:"Production",description:"There are two ways to bootstrap your package in a production environment with",source:"@site/versioned_docs/version-6.x/production.md",sourceDirName:".",slug:"/production",permalink:"/production",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/production.md",version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617662238,formattedLastUpdatedAt:"4/5/2021",frontMatter:{id:"production",title:"Production"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two ways to bootstrap your package in a production environment with\npnpm. One of these is to commit the lockfile. Then, in your production\nenvironment, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," - this will build the dependency tree using the\nlockfile, meaning the dependency versions will be consistent with how they were\nwhen the lockfile was committed. This is the most effective way (and the one we\nrecommend) to ensure your dependency tree persists across environments."),(0,i.kt)("p",null,"The other method is to commit the lockfile AND copy the package store to your\nproduction environment (you can change where with the ",(0,i.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"store location option"),").\nThen, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," and pnpm will use the packages from\nthe global store, so it will not make any requests to the registry. This is\nrecommended ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," for environments where external access to the registry is\nunavailable for whatever reason."))}d.isMDXComponent=!0}}]);