(window.webpackJsonp=window.webpackJsonp||[]).push([[1949],{2018:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(3064)),c={id:"pnpm-outdated",title:"pnpm outdated",original_id:"pnpm-outdated"},p={unversionedId:"pnpm-outdated",id:"version-5.1/pnpm-outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Check for outdated packages. The check can be limited to a subset of the installed",source:"@site/versioned_docs/version-5.1/pnpm-outdated.md",slug:"/pnpm-outdated",permalink:"/5.1/pnpm-outdated",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.1/pnpm-outdated.md",version:"5.1",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},i=[{value:"Options",id:"options",children:[{value:"-r",id:"-r",children:[]}]}],u={toc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Check for outdated packages. The check can be limited to a subset of the installed\npackages by providing arguments (patterns are supported)."),Object(a.b)("p",null,"Examples:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pnpm outdated\npnpm outdated gulp-* @babel/core\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"-r"},"-r"),Object(a.b)("p",null,"Check for outdated dependencies in every package found in subdirectories\nor in every workspace package, when executed inside a workspace."))}d.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,b=l["".concat(c,".").concat(f)]||l[f]||s[f]||a;return n?o.a.createElement(b,p(p({ref:t},u),{},{components:n})):o.a.createElement(b,p({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);