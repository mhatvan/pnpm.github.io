(self.webpackChunk=self.webpackChunk||[]).push([[5848],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,c=d["".concat(p,".").concat(m)]||d[m]||k[m]||r;return n?l.createElement(c,i(i({ref:t},u),{},{components:n})):l.createElement(c,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7807:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>d});var l=n(2791),a=n(9698),r=(n(7689),n(9848)),i=["components"],o={id:"pnpm-install",title:"pnpm install",original_id:"pnpm-install"},p=void 0,s={unversionedId:"pnpm-install",id:"version-4.x/pnpm-install",isDocsHomePage:!1,title:"pnpm install",description:"pnpm install \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/pnpm-install.md",sourceDirName:".",slug:"/pnpm-install",permalink:"/ru/4.x/pnpm-install",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"pnpm-install",title:"pnpm install",original_id:"pnpm-install"}},u=[{value:"tl;dr",id:"tldr",children:[]},{value:"store",id:"store",children:[]},{value:"offline",id:"offline",children:[]},{value:"prefer-offline",id:"prefer-offline",children:[]},{value:"network-concurrency",id:"network-concurrency",children:[]},{value:"child-concurrency",id:"child-concurrency",children:[]},{value:"lock",id:"lock",children:[]},{value:"ignore-scripts",id:"ignore-scripts",children:[]},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[]},{value:"pnpmfile",id:"pnpmfile",children:[]},{value:"production=true|false",id:"productiontruefalse",children:[]},{value:"global-pnpmfile",id:"global-pnpmfile",children:[]},{value:"independent-leaves",id:"independent-leaves",children:[]},{value:"verify-store-integrity",id:"verify-store-integrity",children:[]},{value:"package-import-method",id:"package-import-method",children:[]},{value:"lockfile",id:"lockfile",children:[]},{value:"lockfile-only",id:"lockfile-only",children:[]},{value:"frozen-lockfile",id:"frozen-lockfile",children:[]},{value:"prefer-frozen-lockfile",id:"prefer-frozen-lockfile",children:[]},{value:"reporter",id:"reporter",children:[]},{value:"use-store-server",id:"use-store-server",children:[]},{value:"use-running-store-server",id:"use-running-store-server",children:[]},{value:"side-effects-cache",id:"side-effects-cache",children:[]},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",children:[]},{value:"shamefully-flatten",id:"shamefully-flatten",children:[]},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",children:[]},{value:"resolution-strategy",id:"resolution-strategy",children:[]},{value:"use-beta-cli",id:"use-beta-cli",children:[]}],k={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1402).Z})),(0,r.kt)("h2",{id:"tldr"},"tl;dr"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"no network requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --prefer-frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"when possible, ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")))),(0,r.kt)("h2",{id:"store"},"store"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"~/.pnpm-store")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The location where all the packages are saved on the disk."),(0,r.kt)("p",null,"The store should be always on the same disk on which installation is happening. So there will be one store per disk. If there is a home directory on the current disk, then the store is created in ",(0,r.kt)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no homedir on the disk, then the store is created in the root. For example, if installation is happening on disk ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," then the store will be created in ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,r.kt)("p",null,"It is possible to set a store from a different disk but in that case pnpm will copy, not link, packages from the store. Hard links are possible only inside a filesystem."),(0,r.kt)("h2",{id:"offline"},"offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e, pnpm \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u044b, \u0443\u0436\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435. \u0415\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0439\u0434\u0435\u043d \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e."),(0,r.kt)("h2",{id:"prefer-offline"},"prefer-offline"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.28.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,r.kt)("h2",{id:"network-concurrency"},"network-concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"16")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,"Controls the maximum number of HTTP requests that can be done simultaneously."),(0,r.kt)("h2",{id:"child-concurrency"},"child-concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"5")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,"Controls the number of child processes run parallelly to build node modules."),(0,r.kt)("h2",{id:"lock"},"lock"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Dangerous! If false, the store is not locked. It means that several installations using the same store can run simultaneously."),(0,r.kt)("p",null,"Can be passed in via a CLI option. ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-lock")," to set it to false. E.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install --no-lock"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you experience issues similar to the ones described in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/594"},"#594"),", use this option to disable locking. In the meanwhile, we'll try to find a solution that will make locking work for everyone.")),(0,r.kt)("h2",{id:"ignore-scripts"},"ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Do not execute any scripts defined in the project ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and its dependencies."),(0,r.kt)("h2",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,r.kt)("p",null,"Added in: v1.25.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," will be ignored. Useful together with ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),(0,r.kt)("h2",{id:"pnpmfile"},"pnpmfile"),(0,r.kt)("p",null,"Added in: v1.39.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"pnpmfile.js")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path")),(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("strong",{parentName:"li"},".pnpm/pnpmfile.js"))),(0,r.kt)("p",null,"The location of the local pnpmfile."),(0,r.kt)("h2",{id:"productiontruefalse"},"production","[=true|false]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"pnpm will not install any package listed in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production-or-not status from this flag instead."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notes: ",(0,r.kt)("inlineCode",{parentName:"p"},"--production")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"--production=true"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"--prod")," is an alias of ",(0,r.kt)("inlineCode",{parentName:"p"},"--production"),".")),(0,r.kt)("h2",{id:"global-pnpmfile"},"global-pnpmfile"),(0,r.kt)("p",null,"Added in: v1.39.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path")),(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.js"))),(0,r.kt)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects during installation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," It is recommended to use local pnpmfiles. Only use a global pnpmfile, if you use pnpm on projects that don't use pnpm as the primary package manager."),(0,r.kt)("h2",{id:"independent-leaves"},"independent-leaves"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If true, symlinks leaf dependencies directly from the global store. Leaf dependencies are packages that have no dependencies of their own. Setting this config to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," might break some packages that rely on location but gives an average of ",(0,r.kt)("strong",{parentName:"p"},"8% installation speed improvement"),"."),(0,r.kt)("h2",{id:"verify-store-integrity"},"verify-store-integrity"),(0,r.kt)("p",null,"Added in: v1.8.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If false, doesn't check whether packages in the store were mutated."),(0,r.kt)("h2",{id:"package-import-method"},"package-import-method"),(0,r.kt)("p",null,"Added in: v1.25.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"auto")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"auto"),", ",(0,r.kt)("strong",{parentName:"li"},"hardlink"),", ",(0,r.kt)("strong",{parentName:"li"},"copy"),", ",(0,r.kt)("strong",{parentName:"li"},"reflink"))),(0,r.kt)("p",null,"Controls the way packages are imported from the store."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"auto")," - try to hardlink packages from the store. If it fails, fallback to copy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hardlink")," - hardlink packages from the store"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"copy")," - copy packages from the store"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reflink")," - reflink (aka copy-on-write) packages from the store")),(0,r.kt)("h2",{id:"lockfile"},"lockfile"),(0,r.kt)("p",null,"Added in: v1.32.0 (initially named ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file."),(0,r.kt)("h2",{id:"lockfile-only"},"lockfile-only"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.26.0 (\u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u043b\u043e\u0441\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When used, only updates ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," instead of checking ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),(0,r.kt)("h2",{id:"frozen-lockfile"},"frozen-lockfile"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.37.1 (\u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u043b\u043e\u0441\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails if an update is needed."),(0,r.kt)("h2",{id:"prefer-frozen-lockfile"},"prefer-frozen-lockfile"),(0,r.kt)("p",null,"Added in: v1.37.1 (initially named ",(0,r.kt)("inlineCode",{parentName:"p"},"prefer-frozen-shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")," (from v1.38.0)"),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the available ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," satisfies the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," then a headless installation is performed. A headless installation is faster than a regular one because it skips dependencies resolution and peers resolution."),(0,r.kt)("h2",{id:"reporter"},"reporter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"For non-TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Allows to choose the reporter that will print info about the installation progress."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),(0,r.kt)("h2",{id:"use-store-server"},"use-store-server"),(0,r.kt)("p",null,"Added in: v1.30.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,r.kt)("h2",{id:"use-running-store-server"},"use-running-store-server"),(0,r.kt)("p",null,"Added in: v2.5.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Only allows installation with a store server. If no store server is running, installation will fail."),(0,r.kt)("h2",{id:"side-effects-cache"},"side-effects-cache"),(0,r.kt)("p",null,"Added in: v1.31.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stability: Experimental")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Use and cache the results of (pre/post)install hooks."),(0,r.kt)("h2",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),(0,r.kt)("p",null,"Added in: v1.31.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stability: Experimental")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Only use the side effects cache if present, do not create it for new packages."),(0,r.kt)("h2",{id:"shamefully-flatten"},"shamefully-flatten"),(0,r.kt)("p",null,"Added in: v1.34.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If true, pnpm creates a flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," that look almost like a ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," created by npm or Yarn. Please only use this option when there is no other way to make a project work with pnpm. The strict ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," created by pnpm should always work, if it does not, most likely a dependency is missing from ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Use this config only as a temporary fix."),(0,r.kt)("h2",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.15.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If true, commands fail on missing or invalid peer dependencies."),(0,r.kt)("h2",{id:"resolution-strategy"},"resolution-strategy"),(0,r.kt)("p",null,"Added in: v3.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"fast")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"fast"),", ",(0,r.kt)("strong",{parentName:"li"},"fewer-dependencies"))),(0,r.kt)("p",null,"Sets the resolutions strategy used during installation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fast")," - the default resolution strategy. Speed is preferred over deduplication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fewer-dependencies")," - already installed dependencies are preferred even if newer versions satisfy a range")),(0,r.kt)("h2",{id:"use-beta-cli"},"use-beta-cli"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v3.6.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", beta features of the CLI are used. This means that you may get some changes to the CLI functionality that are breaking changes."))}d.isMDXComponent=!0},1402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);