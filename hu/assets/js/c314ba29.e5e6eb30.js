(self.webpackChunk=self.webpackChunk||[]).push([[7035],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4658:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,toc:()=>s,default:()=>m});var n=r(2791),o=r(9698),i=(r(7689),r(9848)),a=["components"],c={id:"test",title:"pnpm test"},p=void 0,l={unversionedId:"cli/test",id:"cli/test",isDocsHomePage:!1,title:"pnpm test",description:"Aliases: run test, t, tst",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/cli/test.md",sourceDirName:"cli",slug:"/cli/test",permalink:"/hu/next/cli/test",editUrl:"https://crowdin.com/project/pnpm/hu",version:"current",frontMatter:{id:"test",title:"pnpm test"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/hu/next/cli/exec"},next:{title:"pnpm start",permalink:"/hu/next/cli/start"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tst")),(0,i.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," property of its ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," object."),(0,i.kt)("p",null,"The intended usage of the property is to specify a command that runs unit or integration testing for your program."))}m.isMDXComponent=!0}}]);