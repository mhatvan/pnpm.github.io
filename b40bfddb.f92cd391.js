(window.webpackJsonp=window.webpackJsonp||[]).push([[2102],{2174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(3064)),p={id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"},i={unversionedId:"pnpm-run",id:"version-5.10/pnpm-run",isDocsHomePage:!1,title:"pnpm run",description:"Runs a defined package script.",source:"@site/versioned_docs/version-5.10/pnpm-run.md",slug:"/pnpm-run",permalink:"/5.10/pnpm-run",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.10/pnpm-run.md",version:"5.10",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},c=[],u={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Runs a defined package script."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pnpm run <command> [-- <args>...]\n")),Object(a.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run")," adds ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\nto the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace,\n",Object(a.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool\nis installed in the workspace root, it may be called in any workspace package's ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),"."))}s.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,b=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);