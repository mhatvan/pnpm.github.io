(window.webpackJsonp=window.webpackJsonp||[]).push([[2487],{2559:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(3064)),i={id:"outdated",title:"pnpm outdated",original_id:"outdated"},l={unversionedId:"cli/outdated",id:"version-5.6/cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Check for outdated packages. The check can be limited to a subset of the installed",source:"@site/versioned_docs/version-5.6/cli/outdated.md",slug:"/cli/outdated",permalink:"/5.6/cli/outdated",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.6/cli/outdated.md",version:"5.6",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.6/docs",previous:{title:"pnpm list",permalink:"/5.6/cli/list"},next:{title:"pnpm why",permalink:"/5.6/cli/why"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--long",id:"--long",children:[]},{value:"--no-table",id:"--no-table",children:[]},{value:"--compatible",id:"--compatible",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Check for outdated packages. The check can be limited to a subset of the installed\npackages by providing arguments (patterns are supported)."),Object(a.b)("h2",{id:"synopsis"},"Synopsis"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"pnpm outdated [-r] [--filter &lt;package selector>]\n              [&lt;package pattern> ...]\n\npnpm recursive outdated [--filter &lt;package selector>]\n                        [&lt;package pattern> ...]\n")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pnpm outdated\npnpm outdated gulp-* @babel/core\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"Check for outdated dependencies in every package found in subdirectories\nor in every workspace package, when executed inside a workspace."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")),Object(a.b)("h3",{id:"--global"},"--global"),Object(a.b)("p",null,"List outdated global packages."),Object(a.b)("h3",{id:"--long"},"--long"),Object(a.b)("p",null,"Added in: v4.0.0"),Object(a.b)("p",null,"Print details."),Object(a.b)("h3",{id:"--no-table"},"--no-table"),Object(a.b)("p",null,"Added in: v4.0.0"),Object(a.b)("p",null,"Prints the outdated dependencies in a list, not in a table. Good for small consoles."),Object(a.b)("h3",{id:"--compatible"},"--compatible"),Object(a.b)("p",null,"Added in: v4.7.0"),Object(a.b)("p",null,"Prints only versions that satisfy specs in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(a.b)("p",null,"Added in: v4.7.0"),Object(a.b)("p",null,"Checks only ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(a.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(a.b)("p",null,"Added in: v4.7.0"),Object(a.b)("p",null,"Checks only ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--no-optional"},"--no-optional"),Object(a.b)("p",null,"Added in: v4.7.0"),Object(a.b)("p",null,"Doesn't check ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}p.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||a;return n?o.a.createElement(m,l(l({ref:t},d),{},{components:n})):o.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);