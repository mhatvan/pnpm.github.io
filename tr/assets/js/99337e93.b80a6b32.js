(self.webpackChunk=self.webpackChunk||[]).push([[687],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6909:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>p,toc:()=>c,default:()=>s});var n=r(1424),o=r(2489),a=(r(7689),r(9848)),i=["components"],l={title:"Flat node_modules is not the only way",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},p={permalink:"/tr/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/tr",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"Flat node_modules is not the only way",description:"New users of pnpm frequently ask me about the weird structure of node_modules that pnpm creates. Why is it not flat? Where are all the sub-dependencies?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 May\u0131s 2020",tags:[],readingTime:2.72,truncated:!0,prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},c=[],u={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"New users of pnpm frequently ask me about the weird structure of ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," that pnpm creates. Why is it not flat? Where are all the sub-dependencies?"))}s.isMDXComponent=!0}}]);