(self.webpackChunk=self.webpackChunk||[]).push([[7682],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1665:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>s,default:()=>u});var r=n(1424),i=n(2489),a=(n(7689),n(9848)),l=["components"],o={id:"install-test",title:"pnpm install-test"},p={unversionedId:"cli/install-test",id:"version-6.x/cli/install-test",isDocsHomePage:!1,title:"pnpm install-test",description:"Aliases: it",source:"@site/versioned_docs/version-6.x/cli/install-test.md",sourceDirName:"cli",slug:"/cli/install-test",permalink:"/cli/install-test",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/cli/install-test.md",version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617662238,formattedLastUpdatedAt:"4/5/2021",frontMatter:{id:"install-test",title:"pnpm install-test"},sidebar:"version-6.x/docs",previous:{title:"pnpm fetch",permalink:"/cli/fetch"},next:{title:"pnpm audit",permalink:"/cli/audit"}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"it")),(0,a.kt)("p",null,"Runs ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," followed immediately by ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm test"),". It takes exactly the\nsame arguments as ",(0,a.kt)("a",{parentName:"p",href:"/cli/install"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm install")),"."))}u.isMDXComponent=!0}}]);