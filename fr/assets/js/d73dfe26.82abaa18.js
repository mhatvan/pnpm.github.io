(self.webpackChunk=self.webpackChunk||[]).push([[155],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7689);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return r?t.createElement(d,l(l({ref:n},u),{},{components:r})):t.createElement(d,l({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6831:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>a,metadata:()=>p,toc:()=>c,default:()=>s});var t=r(1424),o=r(2489),i=(r(7689),r(9848)),l=["components"],a={id:"link",title:"pnpm link",original_id:"link"},p={unversionedId:"cli/link",id:"version-4.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Connect the local project to another one.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-4.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/fr/4.x/cli/link",editUrl:"https://crowdin.com/project/pnpm/fr",version:"4.x",frontMatter:{id:"link",title:"pnpm link",original_id:"link"},sidebar:"version-4.x/docs",previous:{title:"pnpm remove",permalink:"/fr/4.x/cli/remove"},next:{title:"pnpm unlink",permalink:"/fr/4.x/cli/unlink"}},c=[{value:"Examples",id:"examples",children:[]}],u={toc:c};function s(e){var n=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Connect the local project to another one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link (in package dir)\npnpm link <pkg>\npnpm link <folder>\n")),(0,i.kt)("p",null,"Alias: ln"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Link webpack from a local directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm link ../webpack\n")))}s.isMDXComponent=!0}}]);