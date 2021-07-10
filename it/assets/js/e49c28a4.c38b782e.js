(self.webpackChunk=self.webpackChunk||[]).push([[3346],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,p(p({ref:t},s),{},{components:r})):n.createElement(y,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7560:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>u});var n=r(2791),o=r(9698),a=(r(7689),r(9848)),p=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},i=void 0,l={unversionedId:"pnpm-workspace_yaml",id:"version-6.x/pnpm-workspace_yaml",isDocsHomePage:!1,title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml definisce la radice di un workspace e permette di includere o escludere directory dal workspace. Di default, tutti i pacchetti presenti nelle sottodirectory sono inclusi.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/it/pnpm-workspace_yaml",editUrl:"https://crowdin.com/project/pnpm/it",version:"6.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-6.x/docs",previous:{title:".npmrc",permalink:"/it/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/it/pnpmfile"}},s=[],m={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," definisce la radice di un ",(0,a.kt)("a",{parentName:"p",href:"/it/workspaces"},"workspace")," e permette di includere o escludere directory dal workspace. Di default, tutti i pacchetti presenti nelle sottodirectory sono inclusi."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # tutti I pacchetti situati nelle sottocartelle di packages/ e components/\n  - 'packages/**'\n  - 'components/**'\n  # esclude I pacchetti che sono dentro le cartelle test\n  - '!**/test/**'\n")),(0,a.kt)("p",null,"Il pacchetto di radice \xe8 sempre incluso, anche quando si utilizzano wildcard per percorsi personalizzati."))}u.isMDXComponent=!0}}]);