(self.webpackChunk=self.webpackChunk||[]).push([[8955],{9848:(e,r,n)=>{"use strict";n.d(r,{Zo:()=>s,kt:()=>m});var t=n(7689);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(v,i(i({ref:r},s),{},{components:n})):t.createElement(v,i({ref:r},s))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2830:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>p,metadata:()=>l,toc:()=>c,default:()=>d});var t=n(1424),o=n(2489),a=(n(7689),n(9848)),i=["components"],p={id:"remove",title:"pnpm remove"},l={unversionedId:"cli/remove",id:"cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Removes packages from node_modules and from the project's package.json.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/zh/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/zh/next/cli/update"},next:{title:"pnpm link",permalink:"/zh/next/cli/link"}},c=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:c};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Removes packages from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("p",null,"Aliases: rm, uninstall, un"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"When used inside a ",(0,a.kt)("a",{parentName:"p",href:"/zh/next/workspaces"},"workspace"),", removes a dependency (or dependencies) from every workspace package."),(0,a.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"Remove a global package."),(0,a.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);