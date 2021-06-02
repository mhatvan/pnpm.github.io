(self.webpackChunk=self.webpackChunk||[]).push([[456],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=s(t),u=o,m=k["".concat(p,".").concat(u)]||k[u]||d[u]||l;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7287:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>p,toc:()=>s,default:()=>d});var a=t(1424),o=t(2489),l=(t(7689),t(9848)),r=["components"],i={id:"hooks",title:"Hooks",original_id:"hooks"},p={unversionedId:"hooks",id:"version-4.x/hooks",isDocsHomePage:!1,title:"Hooks",description:"pnpm allows to step directly into the installation process via special functions called hooks. Hooks can be declared in a file called pnpmfile.js. pnpmfile.js should live in the root of the project.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-4.x/hooks.md",sourceDirName:".",slug:"/hooks",permalink:"/pt/4.x/hooks",editUrl:"https://crowdin.com/project/pnpm/pt",version:"4.x",frontMatter:{id:"hooks",title:"Hooks",original_id:"hooks"}},s=[{value:"tl;dr",id:"tldr",children:[]},{value:"<code>hooks.readPackage(pkg, context): pkg</code>",id:"hooksreadpackagepkg-context-pkg",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile</code>",id:"hooksafterallresolvedlockfile-context-lockfile",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],c={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm allows to step directly into the installation process via special functions called ",(0,l.kt)("em",{parentName:"p"},"hooks"),". Hooks can be declared in a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," should live in the root of the project."),(0,l.kt)("h2",{id:"tldr"},"tl;dr"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to mutate every dependency's ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,l.kt)("td",{parentName:"tr",align:null},"Is called after resolution stage. Allows to mutate the lockfile object.")))),(0,l.kt)("h2",{id:"hooksreadpackagepkg-context-pkg"},(0,l.kt)("inlineCode",{parentName:"h2"},"hooks.readPackage(pkg, context): pkg")),(0,l.kt)("p",null,"Allows to mutate every dependency's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". An example of a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," that changes the dependencies field of a dependency: You will need to delete the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want change."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg, context) {\n  // Override the manifest of foo@1 after downloading it from the registry\n  // Replace all dependencies with bar@2\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    pkg.dependencies = {\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will fix any dependencies on baz to 1.2.3\n  if (pkg.dependencies && pkg.dependencies.baz === '*') {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pkg")," - ",(0,l.kt)("em",{parentName:"li"},"Manifest")," - The manifest of the package. Either the response from the registry or the ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",(0,l.kt)("em",{parentName:"li"},"Function")," - Allows to log messages.")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("h4",{id:"substitute-a-package-with-your-fork"},"Substitute a package with your fork"),(0,l.kt)("p",null,"Lets' suppose you forked a package with an important fix and you want the fixed version installed."),(0,l.kt)("p",null,"The following hook substitutes ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"@zkochan"),"'s fork."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.dependencies && pkg.dependencies.resolve) {\n    pkg.dependencies.resolve = 'zkochan/node-resolve'\n  }\n\n  return pkg\n}\n")),(0,l.kt)("h4",{id:"packages-validation"},"Packages validation"),(0,l.kt)("p",null,"You want only packages with MIT license in your ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),"? Check the licenses and throw an exception if you don't like the package's license:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.license !== 'MIT') {\n    throw new Error('Invalid license!')\n  }\n\n  return pkg\n}\n")),(0,l.kt)("h4",{id:"renaming-bins"},"Renaming bins"),(0,l.kt)("p",null,"You want to rename a package's bin? Just replace it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.name === 'eslint') {\n    pkg.bin = {jslint: pkg.bin}\n  }\n\n  return pkg\n}\n")),(0,l.kt)("p",null,"Now you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"jslint fix")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint fix"),"."),(0,l.kt)("h2",{id:"hooksafterallresolvedlockfile-context-lockfile"},(0,l.kt)("inlineCode",{parentName:"h2"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,l.kt)("p",null,"Added in: v1.41.0"),(0,l.kt)("p",null,"Is called after resolution stage. Allows to mutate the lockfile object."),(0,l.kt)("h3",{id:"arguments-1"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lockfile")," - ",(0,l.kt)("em",{parentName:"li"},"object")," - The object that is saved to ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",(0,l.kt)("em",{parentName:"li"},"Function")," - Allows to log messages.")),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n\nfunction afterAllResolved (lockfile, context) {\n  // ...\n  return lockfile\n}\n")))}d.isMDXComponent=!0}}]);