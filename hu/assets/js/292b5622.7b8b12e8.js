(self.webpackChunk=self.webpackChunk||[]).push([[6039],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,h=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},277:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>p,toc:()=>s,default:()=>m});var n=r(1424),a=r(2489),o=(r(7689),r(9848)),c=["components"],i={id:"benchmark",title:"Benchmark"},p={unversionedId:"benchmark",id:"benchmark",isDocsHomePage:!1,title:"Benchmark",description:"pnpm is faster than npm and Yarn. See this benchmark which compares the three package managers on different types of applications.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/hu/next/benchmark",editUrl:"https://crowdin.com/project/pnpm/hu",version:"current",frontMatter:{id:"benchmark",title:"Benchmark"},sidebar:"docs",previous:{title:"Logos",permalink:"/hu/next/logos"},next:{title:"Limitations",permalink:"/hu/next/limitations"}},s=[],l={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm is faster than npm and Yarn. See ",(0,o.kt)("a",{parentName:"p",href:"https://r.pnpm.io/benchmarks"},"this")," benchmark which compares the three package managers on different types of applications."),(0,o.kt)("p",null,"Here are the benchmarks on a React app:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/pnpm/benchmarks-of-javascript-package-managers/main/results/imgs/alotta-files.svg",alt:null})))}m.isMDXComponent=!0}}]);