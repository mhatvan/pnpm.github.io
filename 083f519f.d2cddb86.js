(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var o=t(3),a=t(7),i=(t(0),t(3064)),s={id:"faq",title:"Frequently Asked Questions",original_id:"faq"},r={unversionedId:"faq",id:"version-3.6/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Why does my node_modules folder use disk space if packages are stored in a global store?",source:"@site/versioned_docs/version-3.6/faq.md",slug:"/faq",permalink:"/3.6/faq",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.6/faq.md",version:"3.6",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},p=[{value:"Why does my <code>node_modules</code> folder use disk space if packages are stored in a global store?",id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store",children:[]},{value:"Does it work on Windows? It is harder to create symlinks on Windows",id:"does-it-work-on-windows-it-is-harder-to-create-symlinks-on-windows",children:[]},{value:"Does it work on Windows? Nested <code>node_modules</code> approach is basically incompatible with Windows",id:"does-it-work-on-windows-nested-node_modules-approach-is-basically-incompatible-with-windows",children:[]},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",children:[]},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",children:[]},{value:"Does pnpm work across multiple hard drives or filesystems?",id:"does-pnpm-work-across-multiple-hard-drives-or-filesystems",children:[{value:"Store path is specified",id:"store-path-is-specified",children:[]},{value:"Store path is NOT specified",id:"store-path-is-not-specified",children:[]}]},{value:"What does <code>pnpm store prune</code> do? Is it harmful?",id:"what-does-pnpm-store-prune-do-is-it-harmful",children:[]},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",children:[]},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",children:[{value:"Solution 1",id:"solution-1",children:[]},{value:"Solution 2",id:"solution-2",children:[]},{value:"Solution 3",id:"solution-3",children:[]}]}],l={toc:p};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store"},"Why does my ",Object(i.b)("inlineCode",{parentName:"h2"},"node_modules")," folder use disk space if packages are stored in a global store?"),Object(i.b)("p",null,"pnpm creates ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard links")," from the global store to project's ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folders.\nHard links point to the same place on the disk where the original files are.\nSo, for example, if you have ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," in your project as a dependency and it occupies 1MB of space,\nthen it will look like it occupies 1MB of space in the project's ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder and\nthe same amount of space in the global store. However, that 1MB is ",Object(i.b)("em",{parentName:"p"},"the same space")," on the disk\naddressed from two different locations. So in total ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," occupies 1MB,\nnot 2MB."),Object(i.b)("p",null,"For more on this subject:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Why do hard links seem to take the same space as the originals?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"A thread from the pnpm chat room")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"An issue in the pnpm repo"))),Object(i.b)("h2",{id:"does-it-work-on-windows-it-is-harder-to-create-symlinks-on-windows"},"Does it work on Windows? It is harder to create symlinks on Windows"),Object(i.b)("p",null,"Using symlinks on Windows is problematic indeed. That is why pnpm uses junctions instead of symlinks on Windows OS."),Object(i.b)("h2",{id:"does-it-work-on-windows-nested-node_modules-approach-is-basically-incompatible-with-windows"},"Does it work on Windows? Nested ",Object(i.b)("inlineCode",{parentName:"h2"},"node_modules")," approach is basically incompatible with Windows"),Object(i.b)("p",null,"Early versions of npm had issues because of nesting all ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," (see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"Node's nested node_modules approach is basically incompatible with Windows"),"). However, pnpm does not create deep folders, it stores all packages flatly and uses symlinks to create the dependency tree structure."),Object(i.b)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),Object(i.b)("p",null,"Although pnpm uses symlinks to put dependencies into ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",Object(i.b)("inlineCode",{parentName:"p"},"foo/node_modules")," but ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," is in ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/foo"),", together with its own dependencies."),Object(i.b)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),Object(i.b)("p",null,"One package can have different sets of dependencies on one machine."),Object(i.b)("p",null,"In project ",Object(i.b)("strong",{parentName:"p"},"A")," ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have dependency resolved to ",Object(i.b)("inlineCode",{parentName:"p"},"bar@1.0.0")," but in project ",Object(i.b)("strong",{parentName:"p"},"B")," the same dependency of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," might resolve to ",Object(i.b)("inlineCode",{parentName:"p"},"bar@1.1.0"),". So pnpm hard links ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),Object(i.b)("p",null,"Direct symlinking to the global store would work with Node's ",Object(i.b)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag. But ",Object(i.b)("inlineCode",{parentName:"p"},"--preserve-symlinks")," comes\nwith a bunch of different issues, so we decided to stick with hard links.\nFor more details about why this decision was made, see: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"https://github.com/nodejs/node-eps/issues/46"),"."),Object(i.b)("h2",{id:"does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"Does pnpm work across multiple hard drives or filesystems?"),Object(i.b)("p",null,"The package store should be on the same disk as installations.\nOtherwise packages will be copied, not linked.\nThis is due to a OS limitation in hard-linking. See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),Object(i.b)("p",null,"pnpm functions differently based on the 2 cases below:"),Object(i.b)("h3",{id:"store-path-is-specified"},"Store path is specified"),Object(i.b)("p",null,"If the store path is specified via ",Object(i.b)("a",{parentName:"p",href:"configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),Object(i.b)("p",null,"If you run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",Object(i.b)("inlineCode",{parentName:"p"},"D:"),", then the pnpm store must be on disk ",Object(i.b)("inlineCode",{parentName:"p"},"D:"),".\nIf the pnpm store is located on disk ",Object(i.b)("inlineCode",{parentName:"p"},"C:"),", then all required packages will be directly copied to the project location.\nThis severely reduces the benefits of pnpm."),Object(i.b)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),Object(i.b)("p",null,"If the store path is not set, then multiple stores are created (one per each drive or filesystem)."),Object(i.b)("p",null,"If installation is run on disk ",Object(i.b)("inlineCode",{parentName:"p"},"D:"),", the store will be created in ",Object(i.b)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),".\nIf later the installation is run on disk ",Object(i.b)("inlineCode",{parentName:"p"},"C:"),", an independent store will be created in ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\.pnpm-store"),".\nThe projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),Object(i.b)("h2",{id:"what-does-pnpm-store-prune-do-is-it-harmful"},"What does ",Object(i.b)("inlineCode",{parentName:"h2"},"pnpm store prune")," do? Is it harmful?"),Object(i.b)("p",null,"The command ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," removes ",Object(i.b)("em",{parentName:"p"},"unreferenced packages"),"."),Object(i.b)("p",null,"Unreferenced packages are packages that are not used by any projects on the system.\nPackages can become unreferenced after most installation operations."),Object(i.b)("p",null,"For example: during ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install"),", package ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.1"),".\npnpm will keep ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages.\nIf package ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced.\nRunning ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",Object(i.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),Object(i.b)("p",null,"Running ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects.\nIf future installations require removed packages, pnpm will download them again."),Object(i.b)("p",null,"It is best practice to run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently.\nSometimes, unreferenced packages become required again.\nThis could occur when switching branches and installing older dependencies.\nThen pnpm would need to re-download all removed packages, briefly slowing down the installation process."),Object(i.b)("h2",{id:"what-does-pnpm-stand-for"},"What does ",Object(i.b)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pnpm")," stands for ",Object(i.b)("inlineCode",{parentName:"p"},"performant npm"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"Rico Sta. Cruz")," came up with the name."),Object(i.b)("h2",{id:"pnpm-does-not-work-with-your-project-here"},Object(i.b)("inlineCode",{parentName:"h2"},"pnpm")," does not work with \\<YOUR-PROJECT-HERE",">","?"),Object(i.b)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),".\nIt is a common mistake caused by flat ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the\ndependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),Object(i.b)("h3",{id:"solution-1"},"Solution 1"),Object(i.b)("p",null,"In the following example, a dependency does ",Object(i.b)("strong",{parentName:"p"},"not")," have the ",Object(i.b)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),Object(i.b)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",Object(i.b)("strong",{parentName:"p"},"add ",Object(i.b)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",Object(i.b)("inlineCode",{parentName:"strong"},"package.json")),"."),Object(i.b)("p",null,"You can do so, by installing it via:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pnpm i iterall")),Object(i.b)("p",null,"It will be automatically added to your project's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),Object(i.b)("h3",{id:"solution-2"},"Solution 2"),Object(i.b)("p",null,"One of the solutions is to use ",Object(i.b)("a",{parentName:"p",href:"hooks"},"hooks")," for adding the missing dependencies to the package's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("p",null,"An example was ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm")," now."),Object(i.b)("p",null,"It used to throw an error:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/.registry.npmjs.org/inspectpack/2.2.3/node_modules/inspectpack/lib/actions/parse\n")),Object(i.b)("p",null,"The problem was that ",Object(i.b)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",Object(i.b)("inlineCode",{parentName:"p"},"inspectpack")," library which was used by ",Object(i.b)("inlineCode",{parentName:"p"},"webpack-dashboard"),". But ",Object(i.b)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",Object(i.b)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," and ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(i.b)("p",null,"Solution was to create a ",Object(i.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," with the following contents:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage (pkg) {\n      switch (pkg.name) {\n        case 'inspectpack':\n          pkg.dependencies['babel-traverse'] = '^6.26.0'\n          break\n      }\n      return pkg\n    }\n  }\n}\n")),Object(i.b)("p",null,"After creating ",Object(i.b)("inlineCode",{parentName:"p"},"pnpmfile.js"),", delete ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only. No need to delete ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),". Then install the dependencies & it should be working."),Object(i.b)("h3",{id:"solution-3"},"Solution 3"),Object(i.b)("p",null,"In case there are too many issues, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"shamefully-flatten")," config. This creates a flat ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(i.b)("p",null,"To use it, try ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install --shamefully-flatten"),"."))}c.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||i;return t?a.a.createElement(u,r(r({ref:n},l),{},{components:t})):a.a.createElement(u,r({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);