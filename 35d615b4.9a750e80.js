(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||i;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},670:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(3064)),p={id:"pnpm-publish",title:"pnpm publish",original_id:"pnpm-publish"},o={unversionedId:"pnpm-publish",id:"version-4.0/pnpm-publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/versioned_docs/version-4.0/pnpm-publish.md",slug:"/pnpm-publish",permalink:"/4.0/pnpm-publish",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.0/pnpm-publish.md",version:"4.0",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},c=[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"package.json publishConfig",id:"packagejson-publishconfig",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Publishes a package to the registry."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pnpm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]\n")),Object(i.b)("p",null,"When publishing a package inside a ",Object(i.b)("a",{parentName:"p",href:"workspace"},"workspace"),", the LICENSE file from the\nroot of the workspace is packed with the package (unless the package has a license of its own)."),Object(i.b)("h2",{id:"--tag-tag"},"--tag ","<","tag>"),Object(i.b)("p",null,"Publishes the package with the given tag. By default, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),Object(i.b)("h2",{id:"--access-publicrestricted"},"--access ","<","public|restricted>"),Object(i.b)("p",null,"Tells the registry whether the published package should be public or restricted."),Object(i.b)("h2",{id:"packagejson-publishconfig"},"package.json publishConfig"),Object(i.b)("p",null,"Added in: v3.4.0"),Object(i.b)("p",null,"It is possible to override some fields in the manifest, before the package is packed.\nThe following fields may be overriden: ",Object(i.b)("inlineCode",{parentName:"p"},"typings"),", ",Object(i.b)("inlineCode",{parentName:"p"},"types"),", ",Object(i.b)("inlineCode",{parentName:"p"},"main")," and ",Object(i.b)("inlineCode",{parentName:"p"},"module"),".\nTo override a field, add the publish version of the field to ",Object(i.b)("inlineCode",{parentName:"p"},"publishConfig"),"."),Object(i.b)("p",null,"For instance, the following ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),Object(i.b)("p",null,"Will be published as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')))}s.isMDXComponent=!0}}]);