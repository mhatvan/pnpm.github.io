(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},494:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(3064)),p={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml",original_id:"pnpm-workspace_yaml"},c={unversionedId:"pnpm-workspace_yaml",id:"version-4.14/pnpm-workspace_yaml",isDocsHomePage:!1,title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml defines the root of the workspace and it allows to",source:"@site/versioned_docs/version-4.14/pnpm-workspace_yaml.md",slug:"/pnpm-workspace_yaml",permalink:"/4.14/pnpm-workspace_yaml",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.14/pnpm-workspace_yaml.md",version:"4.14",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-4.14/docs",previous:{title:".npmrc",permalink:"/4.14/npmrc"},next:{title:"pnpmfile.js",permalink:"/4.14/pnpmfile"}},i=[],l={toc:i};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," defines the root of the ",Object(o.b)("a",{parentName:"p",href:"workspaces"},"workspace")," and it allows to\ninclude/exclude directories from the workspace. By default, all packages\nof all subdirectories are included."),Object(o.b)("p",null,"An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test/ directories\n  - '!**/test/**'\n")),Object(o.b)("p",null,"The root ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," is always included, even when custom location wildcards are used."))}s.isMDXComponent=!0}}]);