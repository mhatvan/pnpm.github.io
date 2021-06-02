(self.webpackChunk=self.webpackChunk||[]).push([[6983],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6269:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,metadata:()=>l,toc:()=>p,default:()=>s});var n=r(1424),o=r(2489),i=(r(7689),r(9848)),a=["components"],c={id:"exec",title:"pnpm exec"},l={unversionedId:"cli/exec",id:"version-4.x/cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Shorthand form of pnpm -r exec.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/hu/4.x/cli/exec",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"exec",title:"pnpm exec"}},p=[{value:"Options",id:"options",children:[{value:"--parallel",id:"--parallel",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Shorthand form of ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r exec"),"."),(0,i.kt)("p",null,"See the ","[",(0,i.kt)("inlineCode",{parentName:"p"},"-r exec"),"]"," documentation for more information."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Disregards concurrency and topological sorting configuration entirely and runs the command immediately in all matching packages, with prefixed streaming output."),(0,i.kt)("p",null,"This is the preferred option for processes that take a long time to run, exempli gratia, running a build process with the watch flag over a large number of packages."))}s.isMDXComponent=!0}}]);