(self.webpackChunk=self.webpackChunk||[]).push([[2415],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7689);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||p;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},213:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>l,toc:()=>s,default:()=>d});var r=t(1424),a=t(2489),p=(t(7689),t(9848)),o=["components"],i={id:"package_json",title:"package.json"},l={unversionedId:"package_json",id:"version-5.x/package_json",isDocsHomePage:!1,title:"package.json",description:"\u4e00\u4e2a\u5305\u7684\u6e05\u5355\u6587\u4ef6\u3002 \u5b83\u5305\u542b\u5305\u7684\u6240\u6709\u5143\u6570\u636e\uff0c\u5305\u62ec\u4f9d\u8d56\u9879\u3001\u6807\u9898\u3001\u4f5c\u8005\u7b49\u7b49\u3002 \u8fd9\u662f\u6240\u6709\u4e3b\u8981\u7684 Node.JS \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u5305\u62ec pnpm \u7684\u4fdd\u7559\u6807\u51c6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/zh/5.x/package_json",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"5.x",frontMatter:{id:"package_json",title:"package.json"},sidebar:"version-5.x/docs",previous:{title:"pnpm store",permalink:"/zh/5.x/cli/store"},next:{title:".npmrc",permalink:"/zh/5.x/npmrc"}},s=[{value:"\u5b57\u6bb5",id:"\u5b57\u6bb5",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]},{value:"pnpm.overrides",id:"pnpmoverrides",children:[]},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[]}]}],c={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4e00\u4e2a\u5305\u7684\u6e05\u5355\u6587\u4ef6\u3002 \u5b83\u5305\u542b\u5305\u7684\u6240\u6709\u5143\u6570\u636e\uff0c\u5305\u62ec\u4f9d\u8d56\u9879\u3001\u6807\u9898\u3001\u4f5c\u8005\u7b49\u7b49\u3002 \u8fd9\u662f\u6240\u6709\u4e3b\u8981\u7684 Node.JS \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u5305\u62ec pnpm \u7684\u4fdd\u7559\u6807\u51c6\u3002"),(0,p.kt)("h2",{id:"\u5b57\u6bb5"},"\u5b57\u6bb5"),(0,p.kt)("h3",{id:"engines"},"engines"),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u6307\u5b9a\u4f60\u7684\u8f6f\u4ef6\u80fd\u591f\u8fd0\u884c\u7684 Node \u7248\u672c\u548c pnpm \u7248\u672c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,p.kt)("p",null,"\u5728\u672c\u5730\u5f00\u53d1\u65f6\uff0c \u5982\u679c\u5176\u7248\u672c\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"engines")," \u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684\u7248\u672c\u4e0d\u5339\u914d\uff0cpnpm \u5c06\u59cb\u7ec8\u5931\u8d25\u5e76\u62a5\u9519\u3002"),(0,p.kt)("p",null,"\u5f53\u4f60\u7684\u5305\u4f5c\u4e3a\u4f9d\u8d56\u88ab\u5b89\u88c5\u65f6\uff0c\u9664\u975e\u7528\u6237\u5df2\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"engine-strict")," \u914d\u7f6e\u6807\u5fd7 (\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh/5.x/npmrc#engine-strict"},".npmrc"),")\uff0c\u5426\u5219\u6b64\u5b57\u6bb5\u4ec5\u4f9b\u53c2\u8003\uff0c\u4e14\u53ea\u4f1a\u4ea7\u751f\u8b66\u544a\u3002"),(0,p.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,p.kt)("p",null,"\u6b64\u5b57\u6bb5\u5217\u51fa\u4e86\u4e00\u4e9b\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u5b57\u6bb5\u4e2d\u5217\u51fa\u7684\u4f9d\u8d56\u5173\u7cfb\u76f8\u5173\u7684\u989d\u5916\u4fe1\u606f\u3002"),(0,p.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,p.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u6240\u9009\u5bf9 peer dependency \u5c06\u88ab\u5305\u7ba1\u7406\u5de5\u5177\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u3002 \u56e0\u6b64\uff0c\u7701\u7565\u5b83\u5c06\u4e0d\u518d\u662f\u88ab\u62a5\u544a\u4e3a\u9519\u8bef\u3002"),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,p.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5373\u4f7f\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"\u4e2d\u6ca1\u6709\u6307\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"bar"),", \u4f46\u5b83\u662f\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u3002 \u56e0\u6b64\uff0cpnpm \u5c06\u5047\u5b9a\u4efb\u4f55\u7248\u672c\u7684 bar \u90fd\u662f\u53ef\u4ee5\u7684\u3002 \u7136\u800c\uff0c ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u662f\u53ef\u9009\u7684\uff0c\u4f46\u4ec5\u9002\u7528\u4e8e\u6240\u6307\u5b9a\u7684\u7248\u672c\u3002"),(0,p.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av3.4.0"),(0,p.kt)("p",null,"It is possible to override some fields in the manifest before the package is packed. The following fields may be overridden: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,p.kt)("inlineCode",{parentName:"a"},"bin")),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,p.kt)("inlineCode",{parentName:"a"},"main")),", ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,p.kt)("inlineCode",{parentName:"a"},"exports")),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,p.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,p.kt)("inlineCode",{parentName:"a"},"typings")),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,p.kt)("inlineCode",{parentName:"a"},"module")),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,p.kt)("inlineCode",{parentName:"a"},"browser")),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,p.kt)("inlineCode",{parentName:"a"},"esnext")),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,p.kt)("inlineCode",{parentName:"a"},"es2015")),", ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,p.kt)("inlineCode",{parentName:"a"},"unpkg"))," and ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,p.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,p.kt)("p",null,"To override a field, add the publish version of the field to ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,p.kt)("p",null,"For instance, the following ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,p.kt)("p",null,"Will be published as:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,p.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,p.kt)("p",null,"Added in: v5.10.1"),(0,p.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),(0,p.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,p.kt)("p",null,"An example of the ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,p.kt)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',(0,p.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,p.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,p.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),(0,p.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,p.kt)("p",null,"Added in: v5.16.0"),(0,p.kt)("p",null,"This field allows to ignore the builds of specific dependencies."),(0,p.kt)("p",null,"An example of the ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);