(self.webpackChunk=self.webpackChunk||[]).push([[4693],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(o,".").concat(k)]||u[k]||c[k]||p;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<p;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6576:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>d,toc:()=>s,default:()=>u});var a=n(2791),r=n(9698),p=(n(7689),n(9848)),i=["components"],l={id:"update",title:"pnpm update",original_id:"update"},o=void 0,d={unversionedId:"cli/update",id:"version-4.x/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"Aliases: up",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/zh/4.x/cli/update",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"update",title:"pnpm update",original_id:"update"},sidebar:"version-4.x/docs",previous:{title:"pnpm install",permalink:"/zh/4.x/cli/install"},next:{title:"pnpm remove",permalink:"/zh/4.x/cli/remove"}},s=[{value:"Synopsis",id:"synopsis",children:[]},{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--latest, -L",id:"--latest--l",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--interactive, -i",id:"--interactive--i",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Aliases: ",(0,p.kt)("inlineCode",{parentName:"p"},"up")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),(0,p.kt)("p",null,"When used without arguments, updates all dopependencies. You can use patterns to update all dependencies that match it."),(0,p.kt)("h2",{id:"synopsis"},"Synopsis"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"pnpm update [-r] [--filter <package selector>]\n            [<package pattern> ...]\n\npnpm recursive update [--filter <package selector>]\n                      [<package pattern> ...]\n")),(0,p.kt)("h2",{id:"tldr"},"tl;dr"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Command"),(0,p.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,p.kt)("td",{parentName:"tr",align:null},"updates all dependencies. Adheres ranges specified in ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,p.kt)("td",{parentName:"tr",align:null},"updates all dependencies. Ignores ranges specified in ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,p.kt)("td",{parentName:"tr",align:null},"updates ",(0,p.kt)("inlineCode",{parentName:"td"},"foo")," to the latest v2")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up @babel/*")),(0,p.kt)("td",{parentName:"tr",align:null},"updates all dependencies with the ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,p.kt)("p",null,"Usage examples:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,p.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,p.kt)("p",null,"Added in: v3.2.0"),(0,p.kt)("p",null,"Ignores the version range specified in ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh/4.x/filtering"},"Read more about filtering.")),(0,p.kt)("h3",{id:"--global"},"--global"),(0,p.kt)("p",null,"Update global packages."),(0,p.kt)("h3",{id:"--workspace"},"--workspace"),(0,p.kt)("p",null,"Added in: v4.4.0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"pnpm [-r] update --workspace [<pkg>...]\n")),(0,p.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,p.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies is not found inside the workspace. For instance, the following command fails if ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package: ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Update packages only in ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Update packages only in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"Don't update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,p.kt)("p",null,"Added in: v4.8.0"),(0,p.kt)("p",null,"Show outdated dependencies and select which ones to update."))}u.isMDXComponent=!0}}]);