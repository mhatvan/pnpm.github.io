(window.webpackJsonp=window.webpackJsonp||[]).push([[1303],{1372:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(3064)),c={id:"benchmark",title:"Benchmark",original_id:"benchmark"},i={unversionedId:"benchmark",id:"version-2/benchmark",isDocsHomePage:!1,title:"Benchmark",description:"pnpm is faster than npm and Yarn. See this",source:"@site/versioned_docs/version-2/benchmark.md",slug:"/benchmark",permalink:"/2/benchmark",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-2/benchmark.md",version:"2",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-2/docs",previous:{title:"Workspace",permalink:"/2/workspace"},next:{title:"Limitations",permalink:"/2/limitations"}},p=[],s={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm is faster than npm and Yarn. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/zkochan/node-package-manager-benchmark"},"this"),"\nbenchmark which compares the three package managers on different types of applications."),Object(o.b)("p",null,"Here are the benchmarks on a React app:"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.rawgit.com/pnpm/node-package-manager-benchmark/7f0c3e40/results/imgs/react-app.svg",alt:null})))}u.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return t?a.a.createElement(f,i(i({ref:n},s),{},{components:t})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);