(self.webpackChunk=self.webpackChunk||[]).push([[1800],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7689);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return r?t.createElement(f,p(p({ref:n},u),{},{components:r})):t.createElement(f,p({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<i;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9857:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>c,metadata:()=>a,toc:()=>l,default:()=>s});var t=r(1424),o=r(2489),i=(r(7689),r(9848)),p=["components"],c={id:"prune",title:"pnpm prune"},a={unversionedId:"cli/prune",id:"version-6.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes unnecessary packages.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/tr/cli/prune",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-6.x/docs",previous:{title:"pnpm rebuild",permalink:"/tr/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/tr/cli/fetch"}},l=[{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],u={toc:l};function s(e){var n=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes unnecessary packages."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--prod"},"--prod"),(0,i.kt)("p",null,"Remove the packages specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Remove the packages specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);