(self.webpackChunk=self.webpackChunk||[]).push([[2137],{9848:(n,e,t)=>{"use strict";t.d(e,{Zo:()=>u,kt:()=>f});var r=t(7689);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},p=Object.keys(n);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var a=r.createContext({}),c=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(a.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,p=n.originalType,a=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),s=c(t),f=i,d=s["".concat(a,".").concat(f)]||s[f]||m[f]||p;return t?r.createElement(d,o(o({ref:e},u),{},{components:t})):r.createElement(d,o({ref:e},u))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var p=t.length,o=new Array(p);o[0]=s;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var c=2;c<p;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2889:(n,e,t)=>{"use strict";t.r(e),t.d(e,{frontMatter:()=>l,metadata:()=>a,toc:()=>c,default:()=>m});var r=t(1424),i=t(2489),p=(t(7689),t(9848)),o=["components"],l={id:"pnpm-unlink",title:"pnpm unlink",original_id:"pnpm-unlink"},a={unversionedId:"pnpm-unlink",id:"version-4.x/pnpm-unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"pnpm unlink",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/pnpm-unlink.md",sourceDirName:".",slug:"/pnpm-unlink",permalink:"/zh/4.x/pnpm-unlink",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"pnpm-unlink",title:"pnpm unlink",original_id:"pnpm-unlink"}},c=[{value:"pnpm unlink",id:"pnpm-unlink",children:[]}],u={toc:c};function m(n){var e=n.components,t=(0,i.Z)(n,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"pnpm-unlink"},"pnpm unlink"),(0,p.kt)("p",null,"Alias: ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm dislink")),(0,p.kt)("p",null,"Unlinks a package. Like ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency after removing the external link."))}m.isMDXComponent=!0}}]);