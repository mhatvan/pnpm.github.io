(self.webpackChunk=self.webpackChunk||[]).push([[1875],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8099:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var r=n(2791),i=n(9698),l=(n(7689),n(9848)),a=["components"],o={id:"install-test",title:"pnpm install-test"},c=void 0,p={unversionedId:"cli/install-test",id:"cli/install-test",isDocsHomePage:!1,title:"pnpm install-test",description:"Aliases: it",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/cli/install-test.md",sourceDirName:"cli",slug:"/cli/install-test",permalink:"/hu/next/cli/install-test",editUrl:"https://crowdin.com/project/pnpm/hu",version:"current",frontMatter:{id:"install-test",title:"pnpm install-test"},sidebar:"docs",previous:{title:"pnpm fetch",permalink:"/hu/next/cli/fetch"},next:{title:"pnpm audit",permalink:"/hu/next/cli/audit"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"it")),(0,l.kt)("p",null,"Runs ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install")," followed immediately by ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm test"),". It takes exactly the same arguments as ",(0,l.kt)("a",{parentName:"p",href:"/hu/next/cli/install"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm install")),"."))}m.isMDXComponent=!0}}]);