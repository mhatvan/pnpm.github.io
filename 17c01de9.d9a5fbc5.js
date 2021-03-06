(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=c(n),u=l,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3066:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"},345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var l=n(3),a=n(7),r=(n(0),n(3064)),i={id:"install",title:"pnpm install"},o={unversionedId:"cli/install",id:"version-3.4/cli/install",isDocsHomePage:!1,title:"pnpm install",description:"Aliases: i",source:"@site/versioned_docs/version-3.4/cli/install.md",slug:"/cli/install",permalink:"/3.4/cli/install",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.4/cli/install.md",version:"3.4",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},b=[{value:"TL;DR",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--offline",id:"--offline",children:[]},{value:"--prefer-offline",id:"--prefer-offline",children:[]},{value:"--ignore-scripts",id:"--ignore-scripts",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--lockfile-only",id:"--lockfile-only",children:[]},{value:"--frozen-lockfile",id:"--frozen-lockfile",children:[]},{value:"--reporter=&lt;name&gt;",id:"--reportername",children:[]},{value:"--use-store-server",id:"--use-store-server",children:[]},{value:"--shamefully-hoist",id:"--shamefully-hoist",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:b};function c(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Aliases: ",Object(r.b)("inlineCode",{parentName:"p"},"i")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpm install")," is used to install all dependencies for a project."),Object(r.b)("p",null,"In a CI environment, installation fails if a lockfile is present but needs an\nupdate."),Object(r.b)("p",null,"Inside a ",Object(r.b)("a",{parentName:"p",href:"/3.4/workspaces"},"workspace"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm install")," installs all dependencies in all the\nprojects. If you want to disable this behavior, set the ",Object(r.b)("inlineCode",{parentName:"p"},"recursive-install"),"\nsetting to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("p",null,Object(r.b)("img",{src:n(3066).default})),Object(r.b)("h2",{id:"tldr"},"TL;DR"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Command"),Object(r.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --offline")),Object(r.b)("td",{parentName:"tr",align:null},"Install offline from the store only")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),Object(r.b)("td",{parentName:"tr",align:null},"Only ",Object(r.b)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is updated")))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"--offline"},"--offline"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, pnpm will use only packages already available in the store.\nIf a package won't be found locally, the installation will fail."),Object(r.b)("h3",{id:"--prefer-offline"},"--prefer-offline"),Object(r.b)("p",null,"Added in: v1.28.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, staleness checks for cached data will be bypassed, but missing data\nwill be requested from the server. To force full offline mode, use ",Object(r.b)("inlineCode",{parentName:"p"},"--offline"),"."),Object(r.b)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Do not execute any scripts defined in the project ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and its\ndependencies."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this flag does not prevent the execution of ",Object(r.b)("a",{parentName:"p",href:"../pnpmfile"},"pnpmfile.js"))),Object(r.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(r.b)("p",null,"pnpm will not install any package listed in ",Object(r.b)("inlineCode",{parentName:"p"},"devDependencies")," if the ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV"),"\nenvironment variable is set to production. Use this flag to instruct pnpm to\nignore ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production status from this flag instead."),Object(r.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(r.b)("p",null,"Only ",Object(r.b)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),Object(r.b)("h3",{id:"--no-optional"},"--no-optional"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),Object(r.b)("h3",{id:"--lockfile-only"},"--lockfile-only"),Object(r.b)("p",null,"Added in: v1.26.0 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When used, only updates ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," instead of checking\n",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),Object(r.b)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),Object(r.b)("p",null,"Added in: v1.37.1 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For non-CI: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"For CI: ",Object(r.b)("strong",{parentName:"li"},"true"),", if a lockfile is present"))),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile\nis out of sync with the manifest / an update is needed or no lockfile is\npresent."),Object(r.b)("h3",{id:"--reportername"},"--reporter=\\<name",">"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For TTY stdout: ",Object(r.b)("strong",{parentName:"li"},"default")),Object(r.b)("li",{parentName:"ul"},"For non-TTY stdout: ",Object(r.b)("strong",{parentName:"li"},"append-only")))),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"default"),", ",Object(r.b)("strong",{parentName:"li"},"append-only"),", ",Object(r.b)("strong",{parentName:"li"},"ndjson"),", ",Object(r.b)("strong",{parentName:"li"},"silent"))),Object(r.b)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about\nthe installation progress."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",Object(r.b)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),Object(r.b)("h3",{id:"--use-store-server"},"--use-store-server"),Object(r.b)("p",null,"Added in: v1.30.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Starts a store server in the background. The store server will keep running\nafter installation is done. To stop the store server, run ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm server stop")),Object(r.b)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Creates a flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),".\n",Object(r.b)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),Object(r.b)("h3",{id:"--filter-package_selector"},"--filter \\<package_selector",">"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}c.isMDXComponent=!0}}]);