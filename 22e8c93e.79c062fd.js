(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{3064:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),b=t,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return r?o.a.createElement(m,c(c({ref:n},l),{},{components:r})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},459:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),a=(r(0),r(3064)),i={id:"remove",title:"pnpm remove",original_id:"remove"},c={unversionedId:"cli/remove",id:"version-5.6/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Removes packages from node_modules and from the project's package.json.",source:"@site/versioned_docs/version-5.6/cli/remove.md",slug:"/cli/remove",permalink:"/5.6/cli/remove",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.6/cli/remove.md",version:"5.6",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.6/docs",previous:{title:"pnpm update",permalink:"/5.6/cli/update"},next:{title:"pnpm link",permalink:"/5.6/cli/link"}},p=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]}]}],l={toc:p};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Removes packages from ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"pnpm remove [-r] [--filter &lt;package_selector>] &lt;pkg>...\npnpm recursive remove [--filter &lt;package_selector>] &lt;pkg>...\npnpm multi remove [--filter &lt;package_selector>] &lt;pkg>...\n")),Object(a.b)("p",null,"Aliases: rm, uninstall, un"),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"When used inside a ",Object(a.b)("a",{parentName:"p",href:"../workspaces"},"workspace"),", removes a dependency (or dependencies)\nfrom every workspace package."),Object(a.b)("p",null,"When used not inside a workspace, removes a dependency (or dependencies)\nfrom every package found in subdirectories."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")),Object(a.b)("h3",{id:"--global"},"--global"),Object(a.b)("p",null,"Remove a global package."),Object(a.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(a.b)("p",null,"Remove the dependency only from ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(a.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(a.b)("p",null,"Remove the dependency only from ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(a.b)("p",null,"Remove the dependency only from ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies"),"."))}s.isMDXComponent=!0}}]);