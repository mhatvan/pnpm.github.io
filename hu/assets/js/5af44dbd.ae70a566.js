(self.webpackChunk=self.webpackChunk||[]).push([[4728],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7689);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),k=c(r),d=i,m=k["".concat(p,".").concat(d)]||k[d]||s[d]||l;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=k;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9483:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>k});var t=r(2791),i=r(9698),l=(r(7689),r(9848)),o=["components"],a={id:"unlink",title:"pnpm unlink",original_id:"unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"version-4.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Alias: dislink",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/hu/4.x/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"unlink",title:"pnpm unlink",original_id:"unlink"},sidebar:"version-4.x/docs",previous:{title:"pnpm link",permalink:"/hu/4.x/cli/link"},next:{title:"pnpm import",permalink:"/hu/4.x/cli/import"}},u=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:u};function k(e){var n=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"dislink")),(0,l.kt)("p",null,"Unlinks a package. Like ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency after removing the external link."),(0,l.kt)("p",null,"If called without arguments, all linked-in dependencies will be unlinked."),(0,l.kt)("h2",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm unlink [-r] [--filter <package_selector>] [<pkg>...]\npnpm recursive unlink [--filter <package_selector>] [<pkg>...]\npnpm multi unlink [--filter <package_selector>] [<pkg>...]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",(0,l.kt)("a",{parentName:"p",href:"/hu/4.x/workspaces"},"workspace"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/hu/4.x/filtering"},"Read more about filtering.")))}k.isMDXComponent=!0}}]);