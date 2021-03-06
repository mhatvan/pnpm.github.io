(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),u=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,y=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return t?o.a.createElement(y,l(l({ref:n},i),{},{components:t})):o.a.createElement(y,l({ref:n},i))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<a;i++)p[i]=t[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},660:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(3064)),p={id:"only-allow-pnpm",title:"Only allow pnpm"},l={unversionedId:"only-allow-pnpm",id:"version-3.2/only-allow-pnpm",isDocsHomePage:!1,title:"Only allow pnpm",description:"When you use pnpm on a project, you don't want others to accidentally run",source:"@site/versioned_docs/version-3.2/only-allow-pnpm.md",slug:"/only-allow-pnpm",permalink:"/3.2/only-allow-pnpm",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.2/only-allow-pnpm.md",version:"3.2",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},c=[],i={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you use pnpm on a project, you don't want others to accidentally run\n",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),". To prevent devs from using other package managers,\nyou can add the following ",Object(a.b)("inlineCode",{parentName:"p"},"preinstall")," script to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "preinstall": "npx only-allow pnpm"\n    }\n}\n')),Object(a.b)("p",null,"Now, whenever someone runs ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),", they'll get an\nerror instead and installation will not proceed."),Object(a.b)("p",null,"If you use npm v7, use ",Object(a.b)("inlineCode",{parentName:"p"},"npx -y")," instead."))}u.isMDXComponent=!0}}]);