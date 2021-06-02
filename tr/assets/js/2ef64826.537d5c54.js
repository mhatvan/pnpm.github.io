(self.webpackChunk=self.webpackChunk||[]).push([[4513],{9848:(e,r,n)=>{"use strict";n.d(r,{Zo:()=>d,kt:()=>m});var t=n(7689);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?t.createElement(v,a(a({ref:r},d),{},{components:n})):t.createElement(v,a({ref:r},d))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3698:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>l,metadata:()=>p,toc:()=>c,default:()=>s});var t=n(1424),o=n(2489),i=(n(7689),n(9848)),a=["components"],l={id:"remove",title:"pnpm remove",original_id:"remove"},p={unversionedId:"cli/remove",id:"version-4.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Npm paketlerini node_modules dizininden ve projenin package-lock.json dosyas\u0131n'dan kald\u0131r\u0131r.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/tr/4.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"remove",title:"pnpm remove",original_id:"remove"},sidebar:"version-4.x/docs",previous:{title:"pnpm update",permalink:"/tr/4.x/cli/update"},next:{title:"pnpm link",permalink:"/tr/4.x/cli/link"}},c=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]}]}],d={toc:c};function s(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Npm paketlerini ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," dizininden ve projenin ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," dosyas\u0131n'dan kald\u0131r\u0131r."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm remove [-r] [--filter <package_selector>] <pkg>...\npnpm recursive remove [--filter <package_selector>] <pkg>...\npnpm multi remove [--filter <package_selector>] <pkg>...\n")),(0,i.kt)("p",null,"Alternatifler: rm, uninstall, un"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"When used inside a ",(0,i.kt)("a",{parentName:"p",href:"/tr/4.x/workspaces"},"workspace"),", removes a dependency (or dependencies) from every workspace package."),(0,i.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/4.x/filtering"},"Read more about filtering.")),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Remove a global package."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Remove the dependency only from ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Remove the dependency only from ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Remove the dependency only from ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."))}s.isMDXComponent=!0}}]);