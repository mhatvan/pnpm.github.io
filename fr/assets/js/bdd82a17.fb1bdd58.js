(self.webpackChunk=self.webpackChunk||[]).push([[4115],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,h=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(h,i(i({ref:r},l),{},{components:t})):n.createElement(h,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>s,toc:()=>l,default:()=>u});var n=t(2791),a=t(9698),o=(t(7689),t(9848)),i=["components"],c={id:"benchmark",title:"Benchmark",original_id:"benchmark"},p=void 0,s={unversionedId:"benchmark",id:"version-4.x/benchmark",isDocsHomePage:!1,title:"Benchmark",description:"pnpm is faster than npm and Yarn. See this benchmark which compares the three package managers on different types of applications.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-4.x/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/fr/4.x/benchmark",editUrl:"https://crowdin.com/project/pnpm/fr",version:"4.x",frontMatter:{id:"benchmark",title:"Benchmark",original_id:"benchmark"},sidebar:"version-4.x/docs",previous:{title:"Logos",permalink:"/fr/4.x/logos"},next:{title:"Limitations",permalink:"/fr/4.x/limitations"}},l=[],m={toc:l};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm is faster than npm and Yarn. See ",(0,o.kt)("a",{parentName:"p",href:"https://r.pnpm.io/benchmarks"},"this")," benchmark which compares the three package managers on different types of applications."),(0,o.kt)("p",null,"Here are the benchmarks on a React app:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/pnpm/benchmarks-of-javascript-package-managers/main/results/imgs/alotta-files.svg",alt:null})))}u.isMDXComponent=!0}}]);