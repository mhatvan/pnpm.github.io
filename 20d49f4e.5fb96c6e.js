(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(f,p(p({ref:n},s),{},{components:t})):a.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},435:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(3064)),c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},p={unversionedId:"pnpm-workspace_yaml",id:"version-3.0.0/pnpm-workspace_yaml",isDocsHomePage:!1,title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml defines the root of the [workspace] and enables you to",source:"@site/versioned_docs/version-3.0.0/pnpm-workspace_yaml.md",slug:"/pnpm-workspace_yaml",permalink:"/3.0.0/pnpm-workspace_yaml",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.0.0/pnpm-workspace_yaml.md",version:"3.0.0",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},i=[],s={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," defines the root of the ",Object(o.b)("a",{parentName:"p",href:"workspaces"},"workspace")," and enables you to\ninclude / exclude directories from the workspace. By default, all packages of\nall subdirectories are included."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),Object(o.b)("p",null,"The root package is always included, even when custom location wildcards are\nused."))}l.isMDXComponent=!0}}]);