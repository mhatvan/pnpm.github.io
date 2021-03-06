(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{3064:function(e,n,o){"use strict";o.d(n,"a",(function(){return c})),o.d(n,"b",(function(){return m}));var t=o(0),r=o.n(t);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),p=function(e){var n=r.a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},c=function(e){var n=p(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),u=t,m=c["".concat(i,".").concat(u)]||c[u]||b[u]||a;return o?r.a.createElement(m,s(s({ref:n},d),{},{components:o})):r.a.createElement(m,s({ref:n},d))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},328:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return i})),o.d(n,"metadata",(function(){return s})),o.d(n,"toc",(function(){return l})),o.d(n,"default",(function(){return p}));var t=o(3),r=o(7),a=(o(0),o(3064)),i={id:"symlinked-node-modules-structure",title:"Symlinked `node_modules` structure",original_id:"symlinked-node-modules-structure"},s={unversionedId:"symlinked-node-modules-structure",id:"version-5.0/symlinked-node-modules-structure",isDocsHomePage:!1,title:"Symlinked `node_modules` structure",description:"This article only describes how pnpm's node_modules are structured when there are no packages with peer dependencies.",source:"@site/versioned_docs/version-5.0/symlinked-node-modules-structure.md",slug:"/symlinked-node-modules-structure",permalink:"/5.0/symlinked-node-modules-structure",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.0/symlinked-node-modules-structure.md",version:"5.0",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.0/docs",previous:{title:"About the package store",permalink:"/5.0/about-package-store"},next:{title:"How peers are resolved",permalink:"/5.0/how-peers-are-resolved"}},l=[],d={toc:l};function p(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This article only describes how pnpm's ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," are structured when there are no packages with peer dependencies.\nFor the more complex scenario of dependencies with peers, see ",Object(a.b)("a",{parentName:"p",href:"how-peers-are-resolved"},"How peers are resolved"),".")),Object(a.b)("p",null,"pnpm's ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," layout uses symbolic links to create a nested structure of dependencies."),Object(a.b)("p",null,"Every ",Object(a.b)("inlineCode",{parentName:"p"},"package@version")," is linked to ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," from the ",Object(a.b)("a",{parentName:"p",href:"about-package-store"},"global store")," only once.\nLet's say you install ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," that depends on ",Object(a.b)("inlineCode",{parentName:"p"},"bar@1.0.0"),". pnpm will hard link both packages to ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"node_modules\n\u2514\u2500 .registry.npmjs.org\n   \u251c\u2500 bar/1.0.0/node_modules/bar\n   |  \u251c\u2500 index.js\n   |  \u2514\u2500 package.json\n   \u2514\u2500 foo/1.0.0/node_modules/foo\n      \u251c\u2500 index.js\n      \u2514\u2500 package.json\n")),Object(a.b)("p",null,'These are the only "real files" in ',Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),". Once all the packages are hard linked to ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),", symlinks are\ncreated to build the nested dependency graph structure."),Object(a.b)("p",null,"As you might have noticed, both packages are hard linked into a subfolder inside a ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," folder (",Object(a.b)("inlineCode",{parentName:"p"},"foo/1.0.0/node_modules/foo"),").\nThis is needed to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"allow packages to require themselves.")," ",Object(a.b)("inlineCode",{parentName:"li"},"foo")," should be able to do ",Object(a.b)("inlineCode",{parentName:"li"},"require('foo/package.json')"),"."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"avoid circular symlinks.")," Dependencies of packages are placed in the same folder in which the dependent packages are.\nFor Node.js it doesn't make a difference whether dependencies are inside the package's ",Object(a.b)("inlineCode",{parentName:"li"},"node_modules")," or in any other\n",Object(a.b)("inlineCode",{parentName:"li"},"node_modules")," in the parent directories.")),Object(a.b)("p",null,"The next stage of installation is symlinking dependencies. ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," is going to be symlinked to the ",Object(a.b)("inlineCode",{parentName:"p"},"foo/1.0.0/node_modules")," folder:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"node_modules\n\u2514\u2500 .registry.npmjs.org\n   \u251c\u2500 bar/1.0.0/node_modules/bar\n   \u2514\u2500 foo/1.0.0/node_modules\n      \u251c\u2500 foo\n      \u2514\u2500 bar -> ../../../bar/1.0.0/node_modules/bar\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"foo")," is going to be symlinked to the root ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," folder because ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," is a dependency of the project:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"node_modules\n\u251c\u2500 foo -> .registry.npmjs.org/foo/1.0.0/node_modules/foo\n\u2514\u2500 .registry.npmjs.org\n   \u251c\u2500 bar/1.0.0/node_modules/bar\n   \u2514\u2500 foo/1.0.0/node_modules\n      \u251c\u2500 foo\n      \u2514\u2500 bar -> ../../../bar/1.0.0/node_modules/bar\n")),Object(a.b)("p",null,"This is a very simple example. However, the layout will stay flat in the file system regardless of the number of dependencies\nand the depth of the dependency graph."),Object(a.b)("p",null,"Let's add ",Object(a.b)("inlineCode",{parentName:"p"},"qar@2.0.0")," as a dependency of ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," and ",Object(a.b)("inlineCode",{parentName:"p"},"foo"),". This is how the ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," will look like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"node_modules\n\u251c\u2500 foo -> .registry.npmjs.org/foo/1.0.0/node_modules/foo\n\u2514\u2500 .registry.npmjs.org\n   \u251c\u2500 qar/2.0.0/node_modules/qar\n   \u251c\u2500 bar/1.0.0/node_modules\n   |  \u251c\u2500 bar\n   |  \u2514\u2500 qar -> ../../../qar/2.0.0/node_modules/qar\n   \u2514\u2500 foo/1.0.0/node_modules\n      \u251c\u2500 foo\n      \u251c\u2500 qar -> ../../../qar/2.0.0/node_modules/qar\n      \u2514\u2500 bar -> ../../../bar/1.0.0/node_modules/bar\n")),Object(a.b)("p",null,"As you can see, even though the depth of the graph is bigger (",Object(a.b)("inlineCode",{parentName:"p"},"foo > bar > qar"),"), the directory depth in the file system is still the same."),Object(a.b)("p",null,"This layout might look weird at first glance, but it is completely Node.js-compatible! When resolving modules, Node.js ignores symlinks.\nSo when ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," is required from ",Object(a.b)("inlineCode",{parentName:"p"},"foo/1.0.0/node_modules/foo/index.js"),", Node.js is not using ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," from ",Object(a.b)("inlineCode",{parentName:"p"},"foo/1.0.0/node_modules/bar"),".\n",Object(a.b)("inlineCode",{parentName:"p"},"bar")," is resolved to its real location: ",Object(a.b)("inlineCode",{parentName:"p"},"bar/1.0.0/node_modules/bar"),". As a consequence, ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," can also resolve its dependencies\nwhich are in ",Object(a.b)("inlineCode",{parentName:"p"},"bar/1.0.0/node_modules"),"."),Object(a.b)("p",null,"A great bonus of this layout is that only packages that are really in the dependencies are accessible. With flattened ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),", all hoisted\npackages are accessible. To read more about why this is an advantage, see ",Object(a.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"pnpm's strictness helps to avoid silly bugs"),"."))}p.isMDXComponent=!0}}]);