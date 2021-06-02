(self.webpackChunk=self.webpackChunk||[]).push([[2418],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>k});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),k=i,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9715:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>u});var r=t(1424),i=t(2489),l=(t(7689),t(9848)),a=["components"],o={id:"unlink",title:"pnpm unlink",original_id:"unlink"},p={unversionedId:"cli/unlink",id:"version-4.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Alias: dislink",source:"@site/versioned_docs/version-4.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/4.x/cli/unlink",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-4.x/cli/unlink.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",frontMatter:{id:"unlink",title:"pnpm unlink",original_id:"unlink"},sidebar:"version-4.x/docs",previous:{title:"pnpm link",permalink:"/4.x/cli/link"},next:{title:"pnpm import",permalink:"/4.x/cli/import"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"dislink")),(0,l.kt)("p",null,"Unlinks a package. Like ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency\nafter removing the external link."),(0,l.kt)("p",null,"If called without arguments, all linked-in dependencies will be unlinked."),(0,l.kt)("h2",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm unlink [-r] [--filter <package_selector>] [<pkg>...]\npnpm recursive unlink [--filter <package_selector>] [<pkg>...]\npnpm multi unlink [--filter <package_selector>] [<pkg>...]\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Unlink in every package found in subdirectories\nor in every workspace package, when executed inside a ",(0,l.kt)("a",{parentName:"p",href:"/4.x/workspaces"},"workspace"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/4.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);