(window.webpackJsonp=window.webpackJsonp||[]).push([[2241],{2313:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(3064)),c={id:"prune",title:"pnpm prune"},a={unversionedId:"cli/prune",id:"version-3.5/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes unnecessary packages.",source:"@site/versioned_docs/version-3.5/cli/prune.md",slug:"/cli/prune",permalink:"/3.5/cli/prune",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.5/cli/prune.md",version:"3.5",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},p=[{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],u={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Removes unnecessary packages."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--prod"},"--prod"),Object(i.b)("p",null,"Remove the packages specified in ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("h3",{id:"--no-optional"},"--no-optional"),Object(i.b)("p",null,"Remove the packages specified in ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}l.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return t?o.a.createElement(b,a(a({ref:n},u),{},{components:t})):o.a.createElement(b,a({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);