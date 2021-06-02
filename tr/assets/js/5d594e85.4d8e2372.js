(self.webpackChunk=self.webpackChunk||[]).push([[7622],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9085:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var n=r(1424),i=r(2489),o=(r(7689),r(9848)),a=["components"],p={id:"start",title:"pnpm start",original_id:"start"},s={unversionedId:"cli/start",id:"version-4.x/cli/start",isDocsHomePage:!1,title:"pnpm start",description:"Aliases: run start",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/tr/4.x/cli/start",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"start",title:"pnpm start",original_id:"start"},sidebar:"version-4.x/docs",previous:{title:"pnpm test",permalink:"/tr/4.x/cli/test"},next:{title:"pnpm stop",permalink:"/tr/4.x/cli/stop"}},c=[{value:"Synopsis",id:"synopsis",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"run start")),(0,o.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,o.kt)("inlineCode",{parentName:"p"},'"start"')," property of its ",(0,o.kt)("inlineCode",{parentName:"p"},'"scripts"')," object. If no ",(0,o.kt)("inlineCode",{parentName:"p"},'"start"')," property is specified on the ",(0,o.kt)("inlineCode",{parentName:"p"},'"scripts"')," object, it will run ",(0,o.kt)("inlineCode",{parentName:"p"},"node server.js"),"."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm start [-- <args>...]\n")))}u.isMDXComponent=!0}}]);