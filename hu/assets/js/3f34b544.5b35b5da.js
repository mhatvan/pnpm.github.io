(self.webpackChunk=self.webpackChunk||[]).push([[2724],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2257:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>a,metadata:()=>l,toc:()=>u,default:()=>d});var r=t(2791),o=t(9698),i=(t(7689),t(9848)),p=["components"],c={id:"prune",title:"pnpm prune"},a=void 0,l={unversionedId:"cli/prune",id:"version-5.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes unnecessary packages.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/hu/5.x/cli/prune",editUrl:"https://crowdin.com/project/pnpm/hu",version:"5.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-5.x/docs",previous:{title:"pnpm rebuild",permalink:"/hu/5.x/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/hu/5.x/cli/install-test"}},u=[{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes unnecessary packages."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--prod"},"--prod"),(0,i.kt)("p",null,"Remove the packages specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Remove the packages specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}d.isMDXComponent=!0}}]);