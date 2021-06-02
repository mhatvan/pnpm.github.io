(self.webpackChunk=self.webpackChunk||[]).push([[6798],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7689);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},432:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>s,toc:()=>o,default:()=>u});var a=t(1424),r=t(2489),l=(t(7689),t(9848)),p=["components"],i={id:"pnpm-recursive",title:"pnpm recursive",original_id:"pnpm-recursive"},s={unversionedId:"pnpm-recursive",id:"version-4.x/pnpm-recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"tl;dr",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-4.x/pnpm-recursive.md",sourceDirName:".",slug:"/pnpm-recursive",permalink:"/pt/4.x/pnpm-recursive",editUrl:"https://crowdin.com/project/pnpm/pt",version:"4.x",frontMatter:{id:"pnpm-recursive",title:"pnpm recursive",original_id:"pnpm-recursive"}},o=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"-- &lt;package_selector&gt;..., --filter &lt;package_selector&gt;",id:"---package_selector---filter-package_selector",children:[]},{value:"workspace-concurrency",id:"workspace-concurrency",children:[]},{value:"bail",id:"bail",children:[]},{value:"sort",id:"sort",children:[]}]},{value:"pnpm recursive install",id:"pnpm-recursive-install",children:[]},{value:"pnpm recursive update",id:"pnpm-recursive-update",children:[]},{value:"pnpm recursive uninstall",id:"pnpm-recursive-uninstall",children:[]},{value:"pnpm recursive dislink",id:"pnpm-recursive-dislink",children:[]},{value:"pnpm recursive outdated",id:"pnpm-recursive-outdated",children:[]},{value:"pnpm recursive list",id:"pnpm-recursive-list",children:[]},{value:"pnpm recursive run",id:"pnpm-recursive-run",children:[]},{value:"pnpm recursive test",id:"pnpm-recursive-test",children:[]},{value:"pnpm recursive rebuild",id:"pnpm-recursive-rebuild",children:[]},{value:"pnpm recursive exec",id:"pnpm-recursive-exec",children:[]}],c={toc:o};function u(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tldr"},"tl;dr"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm install -r")),(0,l.kt)("td",{parentName:"tr",align:null},"runs installation for every package in every subfolder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm run build --filter foo-*")),(0,l.kt)("td",{parentName:"tr",align:null},"builds all packages with names that start with ",(0,l.kt)("inlineCode",{parentName:"td"},"foo-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm update -- login-page...")),(0,l.kt)("td",{parentName:"tr",align:null},"updates dependencies in ",(0,l.kt)("inlineCode",{parentName:"td"},"login-page")," and any dependencies of ",(0,l.kt)("inlineCode",{parentName:"td"},"login-page")," that are also in the repository")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", locally available packages are linked to ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a multi-package repository."),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your multi-package repository with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"link-workspace-packages = true\n")),(0,l.kt)("p",null,"Create a ",(0,l.kt)("a",{parentName:"p",href:"/pt/4.x/workspace"},"pnpm-workspace.yaml")," file with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - '**'\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm recursive install"),"."),(0,l.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,l.kt)("p",null,"Added in: v2.17.0 (initially named ",(0,l.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm creates a single ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace (in the directory that contains the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file). A shared lockfile also means that all dependencies of all workspace packages will be in a single ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,l.kt)("p",null,"Advantages of this option:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,l.kt)("li",{parentName:"ul"},"faster installations in a multi-package repository"),(0,l.kt)("li",{parentName:"ul"},"fewer changes in code reviews")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE:")," even though all the dependencies will be hard linked into the root ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". So pnpm's strictness is preserved."),(0,l.kt)("h3",{id:"---package_selector---filter-package_selector"},"-- ","<","package_selector>..., --filter ","<","package_selector>"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("p",null,"Ability to pass selectors after ",(0,l.kt)("inlineCode",{parentName:"p"},"--")," added in v2.15.0"),(0,l.kt)("p",null,"Filters allow to restrict commands to a subset of packages. A rich selector syntax is supported for picking packages by name or by relation."),(0,l.kt)("h4",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("p",null,"To select an exact package, just specify its name (",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core"),") or use a pattern to select a set of packages (",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/*"),")."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter @babel/core\npnpm recursive install --filter @babel/*\n# or\npnpm recursive install -- @babel/core\npnpm recursive install -- @babel/*\n")),(0,l.kt)("h4",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with 3 dots: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run installation in all dependencies of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and in ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter foo...\n# or\npnpm recursive install -- foo...\n")),(0,l.kt)("p",null,'You may use a pattern to select a set of "root" packages:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter @babel/preset-*...\n# or\npnpm recursive install -- @babel/preset-*...\n")),(0,l.kt)("h4",{id:"--filter-package_name-2"},"--filter ...","<","package_name>"),(0,l.kt)("p",null,"Added in: 2.14.0"),(0,l.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with 3 dots: ",(0,l.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, the next command will run installation in all dependents of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and in ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter ...foo\n# or\npnpm recursive install -- ...foo\n")),(0,l.kt)("p",null,"When packages in the workspace are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter ...foo --filter bar --filter qar...\n# or\npnpm recursive install -- ...foo bar qar...\n")),(0,l.kt)("h4",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,l.kt)("p",null,"Added in: v2.15.0"),(0,l.kt)("h3",{id:"workspace-concurrency"},"workspace-concurrency"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"Set the maximum number of concurrency. For unlimited concurrency use ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,l.kt)("h3",{id:"bail"},"bail"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If true, stops when a task throws an error."),(0,l.kt)("p",null,"Usage example. Run tests in every package. Continue if tests fail in one of the packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm recursive test --no-bail\n")),(0,l.kt)("h3",{id:"sort"},"sort"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test --no-sort\n")),(0,l.kt)("h2",{id:"pnpm-recursive-install"},"pnpm recursive install"),(0,l.kt)("p",null,"Added in: v1.24.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install [arguments]\n")),(0,l.kt)("p",null,"Concurrently runs install in all subdirectories with a ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install\npnpm recursive install --ignore-scripts\n")),(0,l.kt)("h2",{id:"pnpm-recursive-update"},"pnpm recursive update"),(0,l.kt)("p",null,"Added in: v1.24.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive update [arguments]\n")),(0,l.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive update\npnpm recursive update --depth 100\n# update typescript to the latest version in every package\npnpm recursive update typescript@latest\n")),(0,l.kt)("h2",{id:"pnpm-recursive-uninstall"},"pnpm recursive uninstall"),(0,l.kt)("p",null,"Added in: v2.10.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive uninstall [<@scope>/]<pkg>...\n")),(0,l.kt)("p",null,"Uninstall a dependency from each package"),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive uninstall webpack\n")),(0,l.kt)("h2",{id:"pnpm-recursive-dislink"},"pnpm recursive dislink"),(0,l.kt)("p",null,"Added in: v1.32.0"),(0,l.kt)("p",null,"An alias of ",(0,l.kt)("inlineCode",{parentName:"p"},"recursive unlink")," from v2.0.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive dislink [arguments]\n")),(0,l.kt)("p",null,"Removes links to local packages and reinstalls them from the registry."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive dislink\n")),(0,l.kt)("h2",{id:"pnpm-recursive-outdated"},"pnpm recursive outdated"),(0,l.kt)("p",null,"Added in: v2.2.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive outdated [[<@scope>/]<pkg> ...]\n")),(0,l.kt)("p",null,"Check for outdated packages in every project of the multi-package repo."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive outdated\n")),(0,l.kt)("h2",{id:"pnpm-recursive-list"},"pnpm recursive list"),(0,l.kt)("p",null,"Added in: v2.2.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive list [[<@scope>/]<pkg> ...]\n")),(0,l.kt)("p",null,"List packages in each project of the multi-package repo. Accepts the same arguments and flags as the regular ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm list")," command."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive list\n")),(0,l.kt)("h2",{id:"pnpm-recursive-run"},"pnpm recursive run"),(0,l.kt)("p",null,"Added in: v2.3.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive run <command> [-- <args>...]\n")),(0,l.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive run build\n")),(0,l.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," adds ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace, ",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,l.kt)("h2",{id:"pnpm-recursive-test"},"pnpm recursive test"),(0,l.kt)("p",null,"Added in: v2.3.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test [-- <args>...]\n")),(0,l.kt)("p",null,'This runs each package\'s "test" script, if one was provided.'),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test\n")),(0,l.kt)("h2",{id:"pnpm-recursive-rebuild"},"pnpm recursive rebuild"),(0,l.kt)("p",null,"Added in: v2.4.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive rebuild [[<@scope>/<name>]...]\n")),(0,l.kt)("p",null,"This command runs the ",(0,l.kt)("strong",{parentName:"p"},"pnpm build")," command in every package of the multi-package repo."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive rebuild\n")),(0,l.kt)("h2",{id:"pnpm-recursive-exec"},"pnpm recursive exec"),(0,l.kt)("p",null,"Added in: v2.9.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive exec -- <command> [args...]\n")),(0,l.kt)("p",null,"This command runs a command in each package of the multi-package repo."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0)."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive exec -- rm -rf node_modules\npnpm recursive exec -- pnpm view $PNPM_PACKAGE_NAME\n")))}u.isMDXComponent=!0}}]);