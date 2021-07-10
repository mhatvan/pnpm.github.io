(self.webpackChunk=self.webpackChunk||[]).push([[4700],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||l[m]||a;return n?r.createElement(f,p(p({ref:t},d),{},{components:n})):r.createElement(f,p({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2812:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>u,toc:()=>d,default:()=>s});var r=n(2791),o=n(9698),a=(n(7689),n(9848)),p=["components"],i={id:"pnpm-outdated",title:"pnpm outdated",original_id:"pnpm-outdated"},c=void 0,u={unversionedId:"pnpm-outdated",id:"version-4.x/pnpm-outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Check for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-4.x/pnpm-outdated.md",sourceDirName:".",slug:"/pnpm-outdated",permalink:"/it/4.x/pnpm-outdated",editUrl:"https://crowdin.com/project/pnpm/it",version:"4.x",frontMatter:{id:"pnpm-outdated",title:"pnpm outdated",original_id:"pnpm-outdated"}},d=[{value:"Options",id:"options",children:[{value:"-r",id:"-r",children:[]}]}],l={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Check for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported)."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm outdated\npnpm outdated gulp-* @babel/core\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"-r"},"-r"),(0,a.kt)("p",null,"Check for outdated dependencies in every package found in subdirectories or in every workspace package, when executed inside a workspace."))}s.isMDXComponent=!0}}]);