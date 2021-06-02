(self.webpackChunk=self.webpackChunk||[]).push([[608],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7689);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),y=a,f=u["".concat(l,".").concat(y)]||u[y]||m[y]||p;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9565:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,metadata:()=>l,toc:()=>i,default:()=>m});var n=r(1424),a=r(2489),p=(r(7689),r(9848)),o=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l={unversionedId:"pnpm-workspace_yaml",id:"pnpm-workspace_yaml",isDocsHomePage:!1,title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml \u5b9a\u4e49\u4e86 \u5de5\u4f5c\u7a7a\u95f4 \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/zh/next/pnpm-workspace_yaml",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"current",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"docs",previous:{title:".npmrc",permalink:"/zh/next/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/zh/next/pnpmfile"}},i=[],s={toc:i};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," \u5b9a\u4e49\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"/zh/next/workspaces"},"\u5de5\u4f5c\u7a7a\u95f4")," \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,p.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u76ee\u5f55\u4f4d\u7f6e\u901a\u914d\u7b26\uff0c\u6839\u76ee\u5f55\u4e0b\u7684package\u76ee\u5f55\u4e5f\u603b\u662f\u88ab\u5305\u542b."))}m.isMDXComponent=!0}}]);