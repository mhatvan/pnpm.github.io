(window.webpackJsonp=window.webpackJsonp||[]).push([[2198],{2270:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),o=(t(0),t(3064)),i={id:"package_json",title:"package.json",original_id:"package_json"},p={unversionedId:"package_json",id:"version-5.9/package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package.",source:"@site/versioned_docs/version-5.9/package_json.md",slug:"/package_json",permalink:"/5.9/package_json",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.9/package_json.md",version:"5.9",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.9/docs",previous:{title:"pnpm store",permalink:"/5.9/cli/store"},next:{title:".npmrc",permalink:"/5.9/npmrc"}},s=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]}]}],c={toc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The manifest file of a package."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"engines"},"engines"),Object(o.b)("p",null,"You can specify the version of Node and pnpm that your stuff works on:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),Object(o.b)("p",null,"During local development, pnpm will always fail with an error message\nwhen its version will not match the one in ",Object(o.b)("inlineCode",{parentName:"p"},"engines.pnpm"),"."),Object(o.b)("p",null,"Unless the user has set the ",Object(o.b)("inlineCode",{parentName:"p"},"engine-strict")," config flag, this field is advisory only and will only produce warnings when your package is installed as a dependency."),Object(o.b)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),Object(o.b)("p",null,"This field lists some extra information related to the dependencies listed in the ",Object(o.b)("inlineCode",{parentName:"p"},"peerDependencies")," field."),Object(o.b)("h4",{id:"peerdependenciesmetapkgoptional"},"peerDependenciesMeta","[pkg]",".optional"),Object(o.b)("p",null,"If true, the selected peer dependency will be marked as optional by the package manager and the consumer omitting it won't be reported as an error."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "react-dom": "1"\n    },\n    "peerDependenciesMeta": {\n        "react-dom": {\n            "optional": true\n        },\n        // express is not specified in the peerDependencies field,\n        // so pnpm will assume that any version of express is fine\n        "express": {\n            "optional": true\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"publishconfig"},"publishConfig"),Object(o.b)("p",null,"Added in: v3.4.0"),Object(o.b)("p",null,"It is possible to override some fields in the manifest, before the package is packed.\nThe following fields may be overridden:\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},Object(o.b)("inlineCode",{parentName:"a"},"bin")),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},Object(o.b)("inlineCode",{parentName:"a"},"main")),",\n",Object(o.b)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},Object(o.b)("inlineCode",{parentName:"a"},"exports")),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},Object(o.b)("inlineCode",{parentName:"a"},"types")," or ",Object(o.b)("inlineCode",{parentName:"a"},"typings")),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},Object(o.b)("inlineCode",{parentName:"a"},"module")),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},Object(o.b)("inlineCode",{parentName:"a"},"browser")),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},Object(o.b)("inlineCode",{parentName:"a"},"esnext")),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},Object(o.b)("inlineCode",{parentName:"a"},"es2015")),",\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},Object(o.b)("inlineCode",{parentName:"a"},"unpkg"))," and\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},Object(o.b)("inlineCode",{parentName:"a"},"umd:main")),"."),Object(o.b)("p",null,"To override a field, add the publish version of the field to ",Object(o.b)("inlineCode",{parentName:"p"},"publishConfig"),"."),Object(o.b)("p",null,"For instance, the following ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),Object(o.b)("p",null,"Will be published as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')))}l.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(t),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return t?r.a.createElement(u,p(p({ref:n},c),{},{components:t})):r.a.createElement(u,p({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);