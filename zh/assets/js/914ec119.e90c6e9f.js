(self.webpackChunk=self.webpackChunk||[]).push([[3264],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7689);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=p,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},784:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var r=t(2791),p=t(9698),o=(t(7689),t(9848)),a=["components"],i={id:"pnpx-cli",title:"pnpx CLI",original_id:"pnpx-cli"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-4.x/pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"npm has a great package runner called npx. pnpm offers the same tool via the pnpx command. The only difference is that pnpx uses pnpm for installing packages.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/zh/4.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI",original_id:"pnpx-cli"},sidebar:"version-4.x/docs",previous:{title:"pnpm CLI",permalink:"/zh/4.x/pnpm-cli"},next:{title:"\u914d\u7f6e",permalink:"/zh/4.x/configuring"}},s=[],u={toc:s};function m(e){var n=e.components,t=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"npm has a great package runner called ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"npx"),". pnpm offers the same tool via the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpx")," uses pnpm for installing packages."),(0,o.kt)("p",null,"The following command installs a temporary create-react-app and calls it, without polluting global installs or requiring more than one step!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpx create-react-app my-cool-new-app\n")))}m.isMDXComponent=!0}}]);