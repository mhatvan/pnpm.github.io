(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(y,p(p({ref:n},l),{},{components:t})):a.a.createElement(y,p({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},396:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(3064)),i={id:"releasing-apps",title:"Releasing apps",original_id:"releasing-apps"},p={unversionedId:"releasing-apps",id:"version-3.4/releasing-apps",isDocsHomePage:!1,title:"Releasing apps",description:"There are two ways to release an app with pnpm. One way is to commit shrinkwrap.yaml into your repo.",source:"@site/versioned_docs/version-3.4/releasing-apps.md",slug:"/releasing-apps",permalink:"/3.4/releasing-apps",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.4/releasing-apps.md",version:"3.4",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},c=[],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are two ways to release an app with pnpm. One way is to commit ",Object(o.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," into your repo.\nWhich we recommend doing anyway. And then in prod you'll have just to run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install"),".\nYou'll be sure in that case that the same dependencies will be used, with which you tested your app in other environments."),Object(o.b)("p",null,"If you'd like to copy packages to prod, you'll have to commit ",Object(o.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," anyway. And you'll have to\ncopy paste the global store to production. The global store location is configurable\nvia the ",Object(o.b)("inlineCode",{parentName:"p"},"store")," config key.\nThen you can run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install --offline")," in your app and pnpm will be using packages that are already in the\nglobal store without making any requests to the npm registry."))}s.isMDXComponent=!0}}]);