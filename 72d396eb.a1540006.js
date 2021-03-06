(window.webpackJsonp=window.webpackJsonp||[]).push([[1350],{1419:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),p=(n(0),n(3064)),i={id:"pnpm-update",title:"pnpm update",original_id:"pnpm-update"},o={unversionedId:"pnpm-update",id:"version-5.12/pnpm-update",isDocsHomePage:!1,title:"pnpm update",description:"pnpm update updates packages to their latest version based on the specified range.",source:"@site/versioned_docs/version-5.12/pnpm-update.md",slug:"/pnpm-update",permalink:"/5.12/pnpm-update",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.12/pnpm-update.md",version:"5.12",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},c=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--latest",id:"--latest",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),Object(p.b)("h2",{id:"tldr"},"tl;dr"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Command"),Object(p.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"pnpm up")),Object(p.b)("td",{parentName:"tr",align:null},"updates all dependencies. Adheres ranges specified in ",Object(p.b)("inlineCode",{parentName:"td"},"package.json"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"pnpm up --latest")),Object(p.b)("td",{parentName:"tr",align:null},"updates all dependencies. Ignores ranges specified in ",Object(p.b)("inlineCode",{parentName:"td"},"package.json"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"pnpm up foo@2")),Object(p.b)("td",{parentName:"tr",align:null},"updates ",Object(p.b)("inlineCode",{parentName:"td"},"foo")," to the latest v2")))),Object(p.b)("h2",{id:"options"},"Options"),Object(p.b)("h3",{id:"--latest"},"--latest"),Object(p.b)("p",null,"Added in: v3.2.0"),Object(p.b)("p",null,"Ignores the version range specified in ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",Object(p.b)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."))}d.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||u[s]||p;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);