(self.webpackChunk=self.webpackChunk||[]).push([[4139],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>m});var l=t(7689);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||o;return t?l.createElement(u,i(i({ref:n},c),{},{components:t})):l.createElement(u,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3167:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var l=t(2791),a=t(9698),o=(t(7689),t(9848)),i=["components"],r={id:"pnpmfile",title:"pnpmfile.js",original_id:"pnpmfile"},p=void 0,s={unversionedId:"pnpmfile",id:"version-4.x/pnpmfile",isDocsHomePage:!1,title:"pnpmfile.js",description:"pnpm allows to step directly into the installation process via special functions called hooks. Hooks can be declared in a file called pnpmfile.js.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/hu/4.x/pnpmfile",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"pnpmfile",title:"pnpmfile.js",original_id:"pnpmfile"},sidebar:"version-4.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/hu/4.x/pnpm-workspace_yaml"},next:{title:"Workspaces",permalink:"/hu/4.x/workspaces"}},c=[{value:"Hooks",id:"hooks",children:[{value:"tl;dr",id:"tldr",children:[]},{value:"<code>hooks.readPackage(pkg, context): pkg</code>",id:"hooksreadpackagepkg-context-pkg",children:[]},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile</code>",id:"hooksafterallresolvedlockfile-context-lockfile",children:[]}]},{value:"Configs",id:"configs",children:[{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[]},{value:"pnpmfile",id:"pnpmfile",children:[]},{value:"global-pnpmfile",id:"global-pnpmfile",children:[]}]}],k={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm allows to step directly into the installation process via special functions called ",(0,o.kt)("em",{parentName:"p"},"hooks"),". Hooks can be declared in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js"),"."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," should be located in the same directory in which the lockfile is. So in a ",(0,o.kt)("a",{parentName:"p",href:"/hu/4.x/workspaces"},"workspace")," with a shared lockfile, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," should be in the root of the monorepo."),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"tldr"},"tl;dr"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,o.kt)("td",{parentName:"tr",align:null},"Allows to mutate every dependency's ",(0,o.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,o.kt)("td",{parentName:"tr",align:null},"Is called after resolution stage. Allows to mutate the lockfile object.")))),(0,o.kt)("h3",{id:"hooksreadpackagepkg-context-pkg"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg")),(0,o.kt)("p",null,"Allows to mutate every dependency's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". An example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," that changes the dependencies field of a dependency: You will need to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg, context) {\n  // Override the manifest of foo@1 after downloading it from the registry\n  // Replace all dependencies with bar@2\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    pkg.dependencies = {\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will fix any dependencies on baz to 1.2.3\n  if (pkg.dependencies.baz === '*') {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n")),(0,o.kt)("h4",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pkg")," - ",(0,o.kt)("em",{parentName:"li"},"Manifest")," - The manifest of the package. Either the response from the registry or the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",(0,o.kt)("em",{parentName:"li"},"Function")," - Allows to log messages.")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("h5",{id:"substitute-a-package-with-your-fork"},"Substitute a package with your fork"),(0,o.kt)("p",null,"Lets' suppose you forked a package with an important fix and you want the fixed version installed."),(0,o.kt)("p",null,"The following hook substitutes ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"@zkochan"),"'s fork."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: { readPackage }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.dependencies.resolve) {\n    pkg.dependencies.resolve = 'zkochan/node-resolve'\n  }\n\n  return pkg\n}\n")),(0,o.kt)("h5",{id:"packages-validation"},"Packages validation"),(0,o.kt)("p",null,"You want only packages with MIT license in your ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"? Check the licenses and throw an exception if you don't like the package's license:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: { readPackage }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.license !== 'MIT') {\n    throw new Error('Invalid license!')\n  }\n\n  return pkg\n}\n")),(0,o.kt)("h5",{id:"renaming-bins"},"Renaming bins"),(0,o.kt)("p",null,"You want to rename a package's bin? Just replace it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: { readPackage }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.name === 'eslint') {\n    pkg.bin = { jslint: pkg.bin }\n  }\n\n  return pkg\n}\n")),(0,o.kt)("p",null,"Now you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"jslint fix")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint fix"),"."),(0,o.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,o.kt)("p",null,"Added in: v1.41.0"),(0,o.kt)("p",null,"Is called after resolution stage. Allows to mutate the lockfile object."),(0,o.kt)("h4",{id:"arguments-1"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockfile")," - ",(0,o.kt)("em",{parentName:"li"},"object")," - The object that is saved to ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",(0,o.kt)("em",{parentName:"li"},"Function")," - Allows to log messages.")),(0,o.kt)("h4",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: { afterAllResolved }\n}\n\nfunction afterAllResolved (lockfile, context) {\n  // ...\n  return lockfile\n}\n")),(0,o.kt)("h2",{id:"configs"},"Configs"),(0,o.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,o.kt)("p",null,"Added in: v1.25.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," will be ignored. Useful together with ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),(0,o.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,o.kt)("p",null,"Added in: v1.39.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"pnpmfile.js")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},".pnpm/pnpmfile.js"))),(0,o.kt)("p",null,"The location of the local pnpmfile."),(0,o.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,o.kt)("p",null,"Added in: v1.39.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.js"))),(0,o.kt)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects during installation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," It is recommended to use local pnpmfiles. Only use a global pnpmfile, if you use pnpm on projects that don't use pnpm as the primary package manager."))}d.isMDXComponent=!0}}]);