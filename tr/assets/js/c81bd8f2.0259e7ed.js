(self.webpackChunk=self.webpackChunk||[]).push([[502],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5097:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var n=r(1424),o=r(2489),i=(r(7689),r(9848)),a=["components"],p={id:"test",title:"pnpm test"},c={unversionedId:"cli/test",id:"version-6.x/cli/test",isDocsHomePage:!1,title:"pnpm test",description:"Aliases: run test, t, tst",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/test.md",sourceDirName:"cli",slug:"/cli/test",permalink:"/tr/cli/test",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"test",title:"pnpm test"},sidebar:"version-6.x/docs",previous:{title:"pnpm exec",permalink:"/tr/cli/exec"},next:{title:"pnpm start",permalink:"/tr/cli/start"}},s=[],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tst")),(0,i.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," property of its ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," object."),(0,i.kt)("p",null,"The intended usage of the property is to specify a command that runs unit or integration testing for your program."))}u.isMDXComponent=!0}}]);