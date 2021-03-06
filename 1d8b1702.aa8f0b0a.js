(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),c=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||r;return n?l.a.createElement(u,p(p({ref:t},o),{},{components:n})):l.a.createElement(u,p({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3065:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"},401:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),l=n(7),r=(n(0),n(3064)),i={id:"pnpm-install-pkg",title:"pnpm install <pkg>",original_id:"pnpm-install-pkg"},p={unversionedId:"pnpm-install-pkg",id:"version-5.4/pnpm-install-pkg",isDocsHomePage:!1,title:"pnpm install <pkg>",description:"Installs a package and any packages that it depends on.",source:"@site/versioned_docs/version-5.4/pnpm-install-pkg.md",slug:"/pnpm-install-pkg",permalink:"/5.4/pnpm-install-pkg",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.4/pnpm-install-pkg.md",version:"5.4",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},b=[{value:"tl;dr",id:"tldr",children:[]},{value:"Supported package locations",id:"supported-package-locations",children:[{value:"Install from npm registry",id:"install-from-npm-registry",children:[]},{value:"Install from local file system",id:"install-from-local-file-system",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Install from Git repository",id:"install-from-git-repository",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]}]}],o={toc:b};function c(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Installs a package and any packages that it depends on.\nBy default, any new package is installed as a prod dependency."),Object(r.b)("p",null,Object(r.b)("img",{src:n(3065).default})),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Command"),Object(r.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i sax")),Object(r.b)("td",{parentName:"tr",align:null},"npm package (save to ",Object(r.b)("inlineCode",{parentName:"td"},"dependencies"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i -D sax")),Object(r.b)("td",{parentName:"tr",align:null},"save to ",Object(r.b)("inlineCode",{parentName:"td"},"devDependencies"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i -O sax")),Object(r.b)("td",{parentName:"tr",align:null},"save to ",Object(r.b)("inlineCode",{parentName:"td"},"optionalDependencies"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i -P sax")),Object(r.b)("td",{parentName:"tr",align:null},"save to ",Object(r.b)("inlineCode",{parentName:"td"},"dependencies"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i sax@next")),Object(r.b)("td",{parentName:"tr",align:null},"Specify tag ",Object(r.b)("inlineCode",{parentName:"td"},"next"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i sax@3.0.0")),Object(r.b)("td",{parentName:"tr",align:null},"Specify version ",Object(r.b)("inlineCode",{parentName:"td"},"3.0.0"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'pnpm i sax@">=1 <2.0"')),Object(r.b)("td",{parentName:"tr",align:null},"Specify version range")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i user/repo")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i user/repo#master")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i user/repo#semver:^2.0.0")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i github:user/repo")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i gitlab:user/repo")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i /path/to/repo")),Object(r.b)("td",{parentName:"tr",align:null},"Absolute path")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i ./archive.tgz")),Object(r.b)("td",{parentName:"tr",align:null},"Tarball")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i https://site.com/archive.tgz")),Object(r.b)("td",{parentName:"tr",align:null},"Tarball via HTTP")))),Object(r.b)("h2",{id:"supported-package-locations"},"Supported package locations"),Object(r.b)("p",null,"A package can be installed from different locations:"),Object(r.b)("h3",{id:"install-from-npm-registry"},"Install from npm registry"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpm install package-name")," will install the latest version\nof ",Object(r.b)("inlineCode",{parentName:"p"},"package-name")," from the ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),Object(r.b)("p",null,"You may also install packages by:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"tag: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install express@nightly")),Object(r.b)("li",{parentName:"ul"},"version: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install express@1.0.0")),Object(r.b)("li",{parentName:"ul"},"version range: ",Object(r.b)("inlineCode",{parentName:"li"},'pnpm install express@2 react@">=0.1.0 <0.2.0"'))),Object(r.b)("h3",{id:"install-from-local-file-system"},"Install from local file system"),Object(r.b)("p",null,"There are two ways to install from the local file system:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"from a tarball file (",Object(r.b)("inlineCode",{parentName:"li"},".tar"),", ",Object(r.b)("inlineCode",{parentName:"li"},".tar.gz"),", or ",Object(r.b)("inlineCode",{parentName:"li"},".tgz"),")"),Object(r.b)("li",{parentName:"ol"},"from a directory")),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install ./package.tgz\npnpm install ./some-directory\n")),Object(r.b)("p",null,"When you install from a directory, a symlink will be created in the\ncurrent project's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running\n",Object(r.b)("inlineCode",{parentName:"p"},"pnpm link"),"."),Object(r.b)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),Object(r.b)("p",null,'The argument must start with "http://" or "https://".'),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install https://github.com/indexzero/forever/tarball/v0.5.6\n")),Object(r.b)("h3",{id:"install-from-git-repository"},"Install from Git repository"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install <git remote url>\n")),Object(r.b)("p",null,"Installs the package from the hosted Git provider, cloning it with Git."),Object(r.b)("p",null,"You may install from Git by:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"commit: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),Object(r.b)("li",{parentName:"ul"},"branch: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#master")),Object(r.b)("li",{parentName:"ul"},"version range: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#semver:^2.0.0"))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(r.b)("p",null,"This will install one or more packages in your ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(r.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"--save-dev")," or ",Object(r.b)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",Object(r.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(r.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"--save-optional")," or ",Object(r.b)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",Object(r.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(r.b)("h3",{id:"--save-exact--e"},"--save-exact, -E"),Object(r.b)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),Object(r.b)("h3",{id:"--save-peer"},"--save-peer"),Object(r.b)("p",null,"Added in: v3.2.0"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",Object(r.b)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."))}c.isMDXComponent=!0}}]);