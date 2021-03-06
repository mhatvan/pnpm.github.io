(window.webpackJsonp=window.webpackJsonp||[]).push([[2938],{3010:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(3064)),i={id:"motivation",title:"Motivation",original_id:"motivation"},l={unversionedId:"motivation",id:"version-5.1/motivation",isDocsHomePage:!1,title:"Motivation",description:"pnpm uses a content-addressable filesystem to store all files from all module directories on a disk.",source:"@site/versioned_docs/version-5.1/motivation.md",slug:"/motivation",permalink:"/5.1/motivation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.1/motivation.md",version:"5.1",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.1/docs",next:{title:"Installation",permalink:"/5.1/installation"}},s=[],c={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"pnpm uses a content-addressable filesystem to store all files from all module directories on a disk.\nWhen using npm or Yarn, if you have 100 projects using lodash, you will have 100 copies of lodash on disk.\nWith pnpm, lodash will be stored in a content-addressable storage, so:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If you depend on different versions of lodash, only the files that differ are added to the store.\nIf lodash has 100 files, and a new version has a change only in one of those files,\n",Object(a.b)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1 new file to the storage."),Object(a.b)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are installed, their files are hard-linked\nfrom that single place consuming no additional disk space.")),Object(a.b)("p",null,"As a result, you save gigabytes of space on your disk and you have a lot faster installations!\nIf you'd like more details about the unique ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and\nwhy it works fine with the Node.js ecosystem, read this small article: ",Object(a.b)("a",{parentName:"p",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way"),"."))}d.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);