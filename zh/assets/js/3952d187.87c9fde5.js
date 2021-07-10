(self.webpackChunk=self.webpackChunk||[]).push([[7935],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>c});var p=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,p,o=function(e,n){if(null==e)return{};var t,p,o={},r=Object.keys(e);for(p=0;p<r.length;p++)t=r[p],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)t=r[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=p.createContext({}),s=function(e){var n=p.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return p.createElement(m.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},u=p.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=o,k=u["".concat(m,".").concat(c)]||u[c]||i[c]||r;return t?p.createElement(k,a(a({ref:n},d),{},{components:t})):p.createElement(k,a({ref:n},d))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=t[s];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3428:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>s,toc:()=>d,default:()=>u});var p=t(2791),o=t(9698),r=(t(7689),t(9848)),a=["components"],l={title:"\u6241\u5e73\u7684 node_modules \u4e0d\u662f\u552f\u4e00\u7684\u65b9\u6cd5",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},m=void 0,s={permalink:"/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/zh-CN",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\u6241\u5e73\u7684 node_modules \u4e0d\u662f\u552f\u4e00\u7684\u65b9\u6cd5",description:"Pnpm \u7684\u65b0\u7528\u6237\u4eec\u7ecf\u5e38\u4f1a\u95ee\u6211\u5173\u4e8e pnpm \u521b\u5efa\u7684\u5947\u602a\u7684 node_modules \u7ed3\u6784\u3002 \u4e3a\u4ec0\u4e48\u4e0d\u662f\u5e73\u94fa\u7684\uff1f \u6b21\u7ea7\u4f9d\u8d56\u53bb\u54ea\u4e86\uff1f",date:"2020-05-27T00:00:00.000Z",formattedDate:"2020\u5e745\u670827\u65e5",tags:[],readingTime:1.12,truncated:!0,prevItem:{title:"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879",permalink:"/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},d=[],i={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,p.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pnpm \u7684\u65b0\u7528\u6237\u4eec\u7ecf\u5e38\u4f1a\u95ee\u6211\u5173\u4e8e pnpm \u521b\u5efa\u7684\u5947\u602a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7ed3\u6784\u3002 \u4e3a\u4ec0\u4e48\u4e0d\u662f\u5e73\u94fa\u7684\uff1f \u6b21\u7ea7\u4f9d\u8d56\u53bb\u54ea\u4e86\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u5c06\u9ed8\u8ba4\u8fd9\u7bc7\u6587\u7ae0\u7684\u8bfb\u8005\u5df2\u7ecf\u719f\u6089\u4e86 npm \u4e0e yarn \u521b\u5efa\u7684\u5e73\u94fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u3002 \u5982\u679c\u4f60\u4e0d\u660e\u767d\u4e3a\u4ec0\u4e48 npm3 \u9700\u8981\u5f00\u59cb\u5728 v3 \u4e2d\u4f7f\u7528\u5e73\u94fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u4e00\u4e9b\u524d\u60c5\u63d0\u8981 ",(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Why should we use pnpm?"),"\u3002")),(0,r.kt)("p",null,"\u6240\u4ee5\u4e3a\u4ec0\u4e48 pnpm \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4f1a\u4e0d\u540c\u5bfb\u5e38\uff1f \u8ba9\u6211\u4eec\u521b\u5efa\u4e24\u4e2a\u8def\u5f84\u5e76\u5728\u5176\u4e2d\u4e00\u4e2a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm add express")," \u7136\u540e\u5728\u53e6\u4e00\u4e2a\u4e2d\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add express"),"\u3002 \u4ee5\u4e0b\u662f\u4f60\u5728\u7b2c\u4e00\u4e2a\u8def\u5f84\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u5f97\u5230\u7684\u9876\u7ea7\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"\u8fd9\u91cc"),"\u770b\u5230\u6574\u4e2a\u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u8fd9\u662f\u4f60\u5728 pnpm \u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u5f97\u5230\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"\u8fd9\u91cc"),"\u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u6240\u6709\u7684\u4f9d\u8d56\u53bb\u54ea\u4e86\u5462\uff1f ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u53ea\u6709\u4e00\u4e2a\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," \u7684\u6587\u4ef6\u5939\u4ee5\u53ca\u4e00\u4e2a\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u7684\u8f6f\u94fe\u3002 \u4e0d\u9519\uff0c\u6211\u4eec\u53ea\u5b89\u88c5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),"\uff0c\u6240\u4ee5\u5b83\u662f\u552f\u4e00\u4e00\u4e2a\u4f60\u7684\u5e94\u7528\u5fc5\u987b\u62e5\u6709\u8bbf\u95ee\u6743\u9650\u7684\u5305\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"\u8fd9\u91cc"),"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e\u4e3a\u4ec0\u4e48 pnpm \u7684\u4e25\u683c\u662f\u4e00\u4ef6\u597d\u4e8b\u3002")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u4e2d\u90fd\u6709\u4e9b\u4ec0\u4e48\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"? ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u7684\u6240\u6709\u4f9d\u8d56\u90fd\u53bb\u54ea\u91cc\u4e86\uff1f"),(0,r.kt)("p",null,"\u8bc0\u7a8d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u53ea\u662f\u4e00\u4e2a\u8f6f\u94fe\u3002 \u5f53 Node.js \u89e3\u6790\u4f9d\u8d56\u7684\u65f6\u5019\uff0c\u5b83\u4f7f\u7528\u8fd9\u4e9b\u4f9d\u8d56\u7684\u771f\u5b9e\u4f4d\u7f6e\uff0c\u6240\u4ee5\u5b83\u4e0d\u4fdd\u7559\u8f6f\u94fe\u3002 \u4f46\u662f\u4f60\u53ef\u80fd\u5c31\u4f1a\u95ee\u4e86\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u7684\u771f\u5b9e\u4f4d\u7f6e\u5728\u54ea\u5462\uff1f"),(0,r.kt)("p",null,"\u8fd9\u91cc\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"\u3002"),(0,r.kt)("p",null,"OK\uff0c\u6240\u4ee5\u6211\u4eec\u73b0\u5728\u77e5\u9053\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," \u6587\u4ef6\u5939\u7684\u7528\u9014\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," \u4ee5\u5e73\u94fa\u7684\u5f62\u5f0f\u50a8\u5b58\u7740\u6240\u6709\u7684\u5305\uff0c\u6240\u4ee5\u6bcf\u4e2a\u5305\u90fd\u53ef\u4ee5\u5728\u8fd9\u79cd\u547d\u540d\u6a21\u5f0f\u7684\u6587\u4ef6\u5939\u4e2d\u88ab\u627e\u5230\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,r.kt)("p",null,"\u6211\u4eec\u79f0\u4e4b\u4e3a\u865a\u62df\u5b58\u50a8\u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5e73\u94fa\u7684\u7ed3\u6784\u907f\u514d\u4e86 npm v2 \u521b\u5efa\u7684\u5d4c\u5957 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u5f15\u8d77\u7684\u957f\u8def\u5f84\u95ee\u9898\uff0c\u4f46\u4e0e npm v3,4,5,6 \u6216 yarn v1 \u521b\u5efa\u7684\u5e73\u94fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u4fdd\u7559\u4e86\u5305\u4e4b\u95f4\u7684\u76f8\u4e92\u9694\u79bb\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u7684\u771f\u5b9e\u4f4d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u4e2a\u9a97\u5c40\u5417\uff1f \u8fd8\u662f\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uff01 Pnmp \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7ed3\u6784\u7684\u7b2c\u4e8c\u4e2a\u8bc0\u7a8d\u662f\u5305\u7684\u4f9d\u8d56\u9879\u4e0e\u4f9d\u8d56\u5305\u7684\u5b9e\u9645\u4f4d\u7f6e\u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u7ea7\u522b\u3002 \u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u7684\u4f9d\u8d56\u4e0d\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," \u800c\u662f\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u6240\u6709\u7684\u4f9d\u8d56\u90fd\u8f6f\u94fe\u81f3\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/")," \u4e2d\u7684\u5bf9\u5e94\u76ee\u5f55\u3002 \u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \u7684\u4f9d\u8d56\u653e\u7f6e\u5728\u540c\u4e00\u7ea7\u522b\u907f\u514d\u4e86\u5faa\u73af\u7684\u8f6f\u94fe\u3002"),(0,r.kt)("p",null,"\u6b63\u5982\u4f60\u6240\u770b\u5230\u7684\uff0c\u5373\u4f7f pnpm \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7ed3\u6784\u4e00\u5f00\u59cb\u770b\u8d77\u6765\u5f88\u5947\u602a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b83\u5b8c\u5168\u9002\u914d\u4e86 Node.js\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5305\u4e0e\u5305\u7684\u4f9d\u8d56\u5f88\u597d\u7684\u88ab\u5206\u7ec4\u5728\u4e00\u8d77\u3002")),(0,r.kt)("p",null,"\u6709 peer \u4f9d\u8d56\u7684\u5305\u7684\u7ed3\u6784",(0,r.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"\u66f4\u52a0\u590d\u6742"),"\u4e00\u70b9\u70b9\u4f46\u601d\u8def\u662f\u4e00\u6837\u7684\uff1a\u4f7f\u7528\u8f6f\u94fe\u4e0e\u5e73\u94fa\u76ee\u5f55\u6765\u6784\u5efa\u4e00\u4e2a\u5d4c\u5957\u7ed3\u6784\u3002"))}u.isMDXComponent=!0}}]);