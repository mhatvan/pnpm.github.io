(window.webpackJsonp=window.webpackJsonp||[]).push([[1533],{1602:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),a=(t(0),t(3064)),i={id:"motivation",title:"Motivation",original_id:"motivation"},s={unversionedId:"motivation",id:"version-3.5/motivation",isDocsHomePage:!1,title:"Motivation",description:"pnpm uses hard links and symlinks to save one version of a module only ever once on a disk.",source:"@site/versioned_docs/version-3.5/motivation.md",slug:"/motivation",permalink:"/3.5/motivation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.5/motivation.md",version:"3.5",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-3.5/docs",next:{title:"Installation",permalink:"/3.5/installation"}},l=[],c={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"pnpm uses hard links and symlinks to save one version of a module only ever once on a disk.\nWhen using npm or Yarn for example, if you have 100 projects using the same version\nof lodash, you will have 100 copies of lodash on disk. With pnpm, lodash will be saved in a\nsingle place on the disk and a hard link will put it into the ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," where it should\nbe installed."),Object(a.b)("p",null,"As a result, you save gigabytes of space on your disk and you have a lot faster installations!\nIf you'd like more details about the unique ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and\nwhy it works fine with the Node.js ecosystem, read this small article: ",Object(a.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Why should we use pnpm?")))}p.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?r.a.createElement(f,s(s({ref:n},c),{},{components:t})):r.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);