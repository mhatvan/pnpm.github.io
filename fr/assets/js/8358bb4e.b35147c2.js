(self.webpackChunk=self.webpackChunk||[]).push([[3155],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>c});var l=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,m=k["".concat(p,".").concat(c)]||k[c]||u[c]||a;return n?l.createElement(m,i(i({ref:t},d),{},{components:n})):l.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>s,default:()=>u});var l=n(1424),r=n(2489),a=(n(7689),n(9848)),i=["components"],o={id:"install",title:"pnpm install",original_id:"install"},p={unversionedId:"cli/install",id:"version-4.x/cli/install",isDocsHomePage:!1,title:"pnpm install",description:"pnpm install is used to install all dependencies for a project.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-4.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/fr/4.x/cli/install",editUrl:"https://crowdin.com/project/pnpm/fr",version:"4.x",frontMatter:{id:"install",title:"pnpm install",original_id:"install"},sidebar:"version-4.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/fr/4.x/cli/add"},next:{title:"pnpm update",permalink:"/fr/4.x/cli/update"}},s=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--offline",id:"--offline",children:[]},{value:"--prefer-offline",id:"--prefer-offline",children:[]},{value:"--ignore-scripts",id:"--ignore-scripts",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--lockfile-only",id:"--lockfile-only",children:[]},{value:"--frozen-lockfile",id:"--frozen-lockfile",children:[]},{value:"--reporter=&lt;name&gt;",id:"--reportername",children:[]},{value:"--use-store-server",id:"--use-store-server",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],d={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," is used to install all dependencies for a project."),(0,a.kt)("p",null,"In a CI environment, installation fails if a lockfile is present but needs an update."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3407).Z})),(0,a.kt)("h2",{id:"tldr"},"tl;dr"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,a.kt)("td",{parentName:"tr",align:null},"no network requests")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --prefer-frozen-lockfile")),(0,a.kt)("td",{parentName:"tr",align:null},"when possible, ",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Concurrently runs install in all subdirectories with a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,a.kt)("h3",{id:"--offline"},"--offline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"If true, pnpm will use only packages already available in the store. If a package won't be found locally, the installation will fail."),(0,a.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,a.kt)("p",null,"Added in: v1.28.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,a.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Do not execute any scripts defined in the project ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and its dependencies."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this flag does not prevent the execution of ",(0,a.kt)("a",{parentName:"p",href:"/fr/4.x/pnpmfile"},"pnpmfile.js"))),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"pnpm will not install any package listed in ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," if the ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production-or-not status from this flag instead."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Only ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),(0,a.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,a.kt)("p",null,"Added in: v1.26.0 (initially named ",(0,a.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"When used, only updates ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," instead of checking ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),(0,a.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,a.kt)("p",null,"Added in: v1.37.1 (initially named ",(0,a.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For non-CI: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"For CI: ",(0,a.kt)("strong",{parentName:"li"},"true"),", if a lockfile is present"))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails if an update is needed or no lockfile is present."),(0,a.kt)("h3",{id:"--reportername"},"--reporter=","<","name>"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For TTY stdout: ",(0,a.kt)("strong",{parentName:"li"},"default")),(0,a.kt)("li",{parentName:"ul"},"For non-TTY stdout: ",(0,a.kt)("strong",{parentName:"li"},"append-only")))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"default"),", ",(0,a.kt)("strong",{parentName:"li"},"append-only"),", ",(0,a.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,a.kt)("strong",{parentName:"li"},"silent"))),(0,a.kt)("p",null,"Allows to choose the reporter that will print info about the installation progress."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",(0,a.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),(0,a.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,a.kt)("p",null,"Added in: v1.30.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/4.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},3407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);