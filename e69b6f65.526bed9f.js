(window.webpackJsonp=window.webpackJsonp||[]).push([[2694],{2766:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(3064)),l={id:"only-allow-pnpm",title:"Only allow pnpm",original_id:"only-allow-pnpm"},p={unversionedId:"only-allow-pnpm",id:"version-5.16/only-allow-pnpm",isDocsHomePage:!1,title:"Only allow pnpm",description:"When you use pnpm on a project, you don't want others to accidentally run npm install or yarn.",source:"@site/versioned_docs/version-5.16/only-allow-pnpm.md",slug:"/only-allow-pnpm",permalink:"/5.16/only-allow-pnpm",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.16/only-allow-pnpm.md",version:"5.16",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.16/docs",previous:{title:"Continuous Integration",permalink:"/5.16/continuous-integration"},next:{title:"Working with Git",permalink:"/5.16/git"}},i=[],c={toc:i};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you use pnpm on a project, you don't want others to accidentally run ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),".\nTo prevent devs from using other package managers, add the following ",Object(a.b)("inlineCode",{parentName:"p"},"preinstall")," script to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "preinstall": "npx only-allow pnpm"\n  }\n}\n')),Object(a.b)("p",null,"Next time, when someone runs ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn install"),", they'll get an error message in the console."),Object(a.b)("p",null,"If you use npm v7, this is the command that needs to be added to ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "preinstall": "npx -y only-allow pnpm"\n  }\n}\n')))}s.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),s=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?o.a.createElement(b,p(p({ref:n},c),{},{components:t})):o.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);