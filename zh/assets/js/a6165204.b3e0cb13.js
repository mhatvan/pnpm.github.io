(self.webpackChunk=self.webpackChunk||[]).push([[1076],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(a,".").concat(d)]||m[d]||s[d]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2304:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,metadata:()=>a,toc:()=>c,default:()=>s});var r=t(1424),i=t(2489),l=(t(7689),t(9848)),o=["components"],p={id:"link",title:"pnpm link"},a={unversionedId:"cli/link",id:"version-6.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"\u522b\u540d: ln",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/zh/cli/link",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"6.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-6.x/docs",previous:{title:"pnpm remove",permalink:"/zh/cli/remove"},next:{title:"pnpm unlink",permalink:"/zh/cli/unlink"}},c=[{value:"Options",id:"options",children:[{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",children:[]}]}],u={toc:c};function s(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u522b\u540d: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"\u662f\u5f53\u524d\u672c\u5730\u5305\u53ef\u4ee5\u5728\u7cfb\u7edf\u8303\u56f4\u5185\u6216\u5176\u4ed6\u5730\u65b9\u8bbf\u95ee."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default"),": \u5f53\u524d\u5de5\u4f5c\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type"),": Path string")),(0,l.kt)("p",null,"\u5c06 link \u4f4d\u7f6e\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."))}s.isMDXComponent=!0}}]);