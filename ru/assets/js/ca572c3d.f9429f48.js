(self.webpackChunk=self.webpackChunk||[]).push([[2431],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7689);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return t?n.createElement(f,p(p({ref:r},u),{},{components:t})):n.createElement(f,p({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=s;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6905:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>a,metadata:()=>c,toc:()=>l,default:()=>m});var n=t(1424),o=t(2489),i=(t(7689),t(9848)),p=["components"],a={id:"import",title:"pnpm import",original_id:"import"},c={unversionedId:"cli/import",id:"version-4.x/cli/import",isDocsHomePage:!1,title:"pnpm import",description:"Added in: v2.15.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/ru/4.x/cli/import",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"import",title:"pnpm import",original_id:"import"},sidebar:"version-4.x/docs",previous:{title:"pnpm unlink",permalink:"/ru/4.x/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/ru/4.x/cli/rebuild"}},l=[],u={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v2.15.0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm import")," generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," from an npm ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),") file."))}m.isMDXComponent=!0}}]);