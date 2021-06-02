(self.webpackChunk=self.webpackChunk||[]).push([[7281],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6525:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>p,toc:()=>d,default:()=>s});var r=n(1424),a=n(2489),i=(n(7689),n(9848)),o=["components"],l={id:"outdated",title:"pnpm outdated",original_id:"outdated"},p={unversionedId:"cli/outdated",id:"version-4.x/cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Check for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/hu/4.x/cli/outdated",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"outdated",title:"pnpm outdated",original_id:"outdated"},sidebar:"version-4.x/docs",previous:{title:"pnpm list",permalink:"/hu/4.x/cli/list"},next:{title:"pnpm why",permalink:"/hu/4.x/cli/why"}},d=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--long",id:"--long",children:[]},{value:"--no-table",id:"--no-table",children:[]},{value:"--compatible",id:"--compatible",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],c={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Check for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported)."),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm outdated [-r] [--filter <package selector>]\n              [<package pattern> ...]\n\npnpm recursive outdated [--filter <package selector>]\n                        [<package pattern> ...]\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm outdated\npnpm outdated gulp-* @babel/core\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Check for outdated dependencies in every package found in subdirectories or in every workspace package, when executed inside a workspace."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/hu/4.x/filtering"},"Read more about filtering.")),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List outdated global packages."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Added in: v4.0.0"),(0,i.kt)("p",null,"Print details."),(0,i.kt)("h3",{id:"--no-table"},"--no-table"),(0,i.kt)("p",null,"Added in: v4.0.0"),(0,i.kt)("p",null,"Prints the outdated dependencies in a list, not in a table. Good for small consoles."),(0,i.kt)("h3",{id:"--compatible"},"--compatible"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Prints only versions that satisfy specs in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Checks only ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Checks only ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Doesn't check ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);