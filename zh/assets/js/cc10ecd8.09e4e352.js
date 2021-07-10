(self.webpackChunk=self.webpackChunk||[]).push([[3054],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},296:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>f});var r=t(2791),o=t(9698),i=(t(7689),t(9848)),a=["components"],p={id:"configuring",title:"\u914d\u7f6e",original_id:"configuring"},c=void 0,s={unversionedId:"configuring",id:"version-4.x/configuring",isDocsHomePage:!1,title:"\u914d\u7f6e",description:"pnpm uses npm's configs. Hence, you should set configs the same way you would for npm. \u4f8b\u5982\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/zh/4.x/configuring",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"configuring",title:"\u914d\u7f6e",original_id:"configuring"},sidebar:"version-4.x/docs",previous:{title:"pnpx CLI",permalink:"/zh/4.x/pnpx-cli"},next:{title:"\u8fc7\u6ee4",permalink:"/zh/4.x/filtering"}},l=[],u={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm's configs"),". Hence, you should set configs the same way you would for npm. \u4f8b\u5982\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm config set store-dir /path/to/.pnpm-store\n")),(0,i.kt)("p",null,"If no store is configured, then pnpm will automatically create a store on the same drive. If configuring pnpm to work across multiple hard drives or filesystems, please read ",(0,i.kt)("a",{parentName:"p",href:"/zh/4.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"."),(0,i.kt)("p",null,"Furthermore, pnpm uses the same configs that npm uses for doing installations. If you have a private registry and npm is configured to work with it, pnpm should be able to authorize requests as well, with no additional configuration."),(0,i.kt)("p",null,"In addition to those options, pnpm also allows you to use all parameters that are flags (for example ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") as option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")))}f.isMDXComponent=!0}}]);