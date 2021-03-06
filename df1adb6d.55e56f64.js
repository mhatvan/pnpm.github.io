(window.webpackJsonp=window.webpackJsonp||[]).push([[2627],{2699:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(3064)),l={id:"hooks",title:"Hooks",original_id:"hooks"},i={unversionedId:"hooks",id:"version-5.3/hooks",isDocsHomePage:!1,title:"Hooks",description:"pnpm allows to step directly into the installation process via special functions called hooks.",source:"@site/versioned_docs/version-5.3/hooks.md",slug:"/hooks",permalink:"/5.3/hooks",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.3/hooks.md",version:"5.3",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},c=[{value:"tl;dr",id:"tldr",children:[]},{value:"<code>hooks.readPackage(pkg, context): pkg</code>",id:"hooksreadpackagepkg-context-pkg",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile</code>",id:"hooksafterallresolvedlockfile-context-lockfile",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],p={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"pnpm allows to step directly into the installation process via special functions called ",Object(r.b)("em",{parentName:"p"},"hooks"),".\nHooks can be declared in a file called ",Object(r.b)("inlineCode",{parentName:"p"},"pnpmfile.js"),". ",Object(r.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," should live in the root of the project."),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Option"),Object(r.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),Object(r.b)("td",{parentName:"tr",align:null},"Allows to mutate every dependency's ",Object(r.b)("inlineCode",{parentName:"td"},"package.json"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),Object(r.b)("td",{parentName:"tr",align:null},"Is called after resolution stage. Allows to mutate the lockfile object.")))),Object(r.b)("h2",{id:"hooksreadpackagepkg-context-pkg"},Object(r.b)("inlineCode",{parentName:"h2"},"hooks.readPackage(pkg, context): pkg")),Object(r.b)("p",null,"Allows to mutate every dependency's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),".\nAn example of a ",Object(r.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," that changes the dependencies field of a dependency:\nYou will need to delete the ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want change."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg, context) {\n  // Override the manifest of foo@1 after downloading it from the registry\n  // Replace all dependencies with bar@2\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    pkg.dependencies = {\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n  \n  // This will fix any dependencies on baz to 1.2.3\n  if (pkg.dependencies && pkg.dependencies.baz === '*') {\n    pkg.dependencies.baz = '1.2.3';\n  }\n  \n  return pkg\n}\n")),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pkg")," - ",Object(r.b)("em",{parentName:"li"},"Manifest")," - The manifest of the package. Either the response from the registry or the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," content."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",Object(r.b)("em",{parentName:"li"},"Function")," - Allows to log messages.")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("h4",{id:"substitute-a-package-with-your-fork"},"Substitute a package with your fork"),Object(r.b)("p",null,"Lets' suppose you forked a package with an important fix and you want the fixed\nversion installed."),Object(r.b)("p",null,"The following hook substitutes ",Object(r.b)("inlineCode",{parentName:"p"},"resolve")," with ",Object(r.b)("inlineCode",{parentName:"p"},"@zkochan"),"'s fork."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.dependencies && pkg.dependencies.resolve) {\n    pkg.dependencies.resolve = 'zkochan/node-resolve'\n  }\n\n  return pkg\n}\n")),Object(r.b)("h4",{id:"packages-validation"},"Packages validation"),Object(r.b)("p",null,"You want only packages with MIT license in your ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"? Check the licenses\nand throw an exception if you don't like the package's license:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.license !== 'MIT') {\n    throw new Error('Invalid license!')\n  }\n\n  return pkg\n}\n")),Object(r.b)("h4",{id:"renaming-bins"},"Renaming bins"),Object(r.b)("p",null,"You want to rename a package's bin? Just replace it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.name === 'eslint') {\n    pkg.bin = {jslint: pkg.bin}\n  }\n\n  return pkg\n}\n")),Object(r.b)("p",null,"Now you can run ",Object(r.b)("inlineCode",{parentName:"p"},"jslint fix")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"eslint fix"),"."),Object(r.b)("h2",{id:"hooksafterallresolvedlockfile-context-lockfile"},Object(r.b)("inlineCode",{parentName:"h2"},"hooks.afterAllResolved(lockfile, context): lockfile")),Object(r.b)("p",null,"Added in: v1.41.0"),Object(r.b)("p",null,"Is called after resolution stage. Allows to mutate the lockfile object."),Object(r.b)("h3",{id:"arguments-1"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lockfile")," - ",Object(r.b)("em",{parentName:"li"},"object")," - The object that is saved to ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",Object(r.b)("em",{parentName:"li"},"Function")," - Allows to log messages.")),Object(r.b)("h3",{id:"usage-1"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n\nfunction afterAllResolved (lockfile, context) {\n  // ...\n  return lockfile\n}\n")))}s.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,i(i({ref:n},p),{},{components:t})):o.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);