(self.webpackChunk=self.webpackChunk||[]).push([[6684],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6618:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,metadata:()=>p,toc:()=>c,default:()=>s});var r=t(1424),o=t(2489),i=(t(7689),t(9848)),l=["components"],a={id:"link",title:"pnpm link",original_id:"link"},p={unversionedId:"cli/link",id:"version-4.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Connect the local project to another one.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/hu/4.x/cli/link",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"link",title:"pnpm link",original_id:"link"},sidebar:"version-4.x/docs",previous:{title:"pnpm remove",permalink:"/hu/4.x/cli/remove"},next:{title:"pnpm unlink",permalink:"/hu/4.x/cli/unlink"}},c=[{value:"Examples",id:"examples",children:[]}],u={toc:c};function s(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Connect the local project to another one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link (in package dir)\npnpm link <pkg>\npnpm link <folder>\n")),(0,i.kt)("p",null,"Alias: ln"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Link webpack from a local directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm link ../webpack\n")))}s.isMDXComponent=!0}}]);