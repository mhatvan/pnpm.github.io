(self.webpackChunk=self.webpackChunk||[]).push([[6532],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),h=i,f=s["".concat(p,".").concat(h)]||s[h]||u[h]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8433:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var n=r(2791),i=r(9698),o=(r(7689),r(9848)),a=["components"],l={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-5.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Shows all packages that depend on the specified package.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/hu/5.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/hu",version:"5.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/hu/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/hu/5.x/cli/run"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:d};function s(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Shows all packages that depend on the specified package."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Added in: 3.7.0"),(0,o.kt)("p",null,"Show information in JSON format."),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Show verbose output."),(0,o.kt)("h3",{id:"--parseable"},"--parseable"),(0,o.kt)("p",null,"Show parseable output instead of tree view."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Only display the dependency tree for packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Only display the dependency tree for packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/hu/5.x/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);