(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),d=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=r,m=b["".concat(l,".").concat(u)]||b[u]||s[u]||i;return n?a.a.createElement(m,p(p({ref:t},o),{},{components:n})):a.a.createElement(m,p({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},824:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(3064)),l={id:"update",title:"pnpm update",original_id:"update"},p={unversionedId:"cli/update",id:"version-4.2/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"Aliases: up",source:"@site/versioned_docs/version-4.2/cli/update.md",slug:"/cli/update",permalink:"/4.2/cli/update",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.2/cli/update.md",version:"4.2",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-4.2/docs",previous:{title:"pnpm install",permalink:"/4.2/cli/install"},next:{title:"pnpm remove",permalink:"/4.2/cli/remove"}},c=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--latest, -L",id:"--latest--l",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]}]}],o={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Aliases: ",Object(i.b)("inlineCode",{parentName:"p"},"up")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),Object(i.b)("h2",{id:"tldr"},"tl;dr"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Command"),Object(i.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pnpm up")),Object(i.b)("td",{parentName:"tr",align:null},"updates all dependencies. Adheres ranges specified in ",Object(i.b)("inlineCode",{parentName:"td"},"package.json"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pnpm up --latest")),Object(i.b)("td",{parentName:"tr",align:null},"updates all dependencies. Ignores ranges specified in ",Object(i.b)("inlineCode",{parentName:"td"},"package.json"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pnpm up foo@2")),Object(i.b)("td",{parentName:"tr",align:null},"updates ",Object(i.b)("inlineCode",{parentName:"td"},"foo")," to the latest v2")))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"Concurrently runs update in all subdirectories with a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),Object(i.b)("p",null,"Usage examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),Object(i.b)("h3",{id:"--latest--l"},"--latest, -L"),Object(i.b)("p",null,"Added in: v3.2.0"),Object(i.b)("p",null,"Ignores the version range specified in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")),Object(i.b)("h3",{id:"--global"},"--global"),Object(i.b)("p",null,"Update global packages."))}d.isMDXComponent=!0}}]);