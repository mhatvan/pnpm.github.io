(self.webpackChunk=self.webpackChunk||[]).push([[6343],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5928:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>d});var o=n(2791),a=n(9698),r=(n(7689),n(9848)),i=["components"],l={title:"Node-Modules configuration options with pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},s=void 0,p={permalink:"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/tr",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Node-Modules configuration options with pnpm",description:"There are many ways to create a nodemodules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 Ekim 2020",tags:[],readingTime:1.86,truncated:!0,nextItem:{title:"D\xfcz, klasik node_modules yap\u0131s\u0131 art\u0131k tek yol de\u011fil",permalink:"/tr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},c=[{value:"The default setup",id:"the-default-setup",children:[]},{value:"Plug&#39;n&#39;Play. The strictest configuration",id:"plugnplay-the-strictest-configuration",children:[]},{value:"A strict, traditional modules directory",id:"a-strict-traditional-modules-directory",children:[]},{value:"The worst case - hoisting to the root",id:"the-worst-case---hoisting-to-the-root",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are many ways to create a node_modules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well."),(0,r.kt)("h2",{id:"the-default-setup"},"The default setup"),(0,r.kt)("p",null,"By default, pnpm v5 will create a semi-strict node_modules. Semi-strict means that your application will only be able to require packages that are added as dependencies to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (with a few exceptions). However, your dependencies will be able to access any packages."),(0,r.kt)("p",null,"The default configuration looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"; All packages are hoisted to node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n; All types are hoisted to the root in order to make TypeScript happy\npublic-hoist-pattern[]=*types*\n\n; All ESLint-related packages are hoisted to the root as well\npublic-hoist-pattern[]=*eslint*\n")),(0,r.kt)("h2",{id:"plugnplay-the-strictest-configuration"},"Plug'n'Play. The strictest configuration"),(0,r.kt)("p",null,"pnpm supports ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn's Plug'n'Play")," since v5.9. With PnP, both your application and the dependencies of your application will have access only to their declared dependencies. This is even stricter then setting ",(0,r.kt)("inlineCode",{parentName:"p"},"hoist=false")," because inside a monorepo, you're application will not be able to access even the dependencies of the root project."),(0,r.kt)("p",null,"To use Plug'n'Play, set these settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,r.kt)("h2",{id:"a-strict-traditional-modules-directory"},"A strict, traditional modules directory"),(0,r.kt)("p",null,"If you are not ready to use PnP yet, you can still be strict and only allow packages to access their own dependencies by setting the hoist configuration to false:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,r.kt)("p",null,"However, if some of your dependencies are trying to access packages that they don't have in dependencies, you have two options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," and use a ",(0,r.kt)("a",{parentName:"p",href:"/pnpmfile"},"hook")," to add the missing dependency to the package's manifest.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a pattern to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hoist-pattern")," setting. For instance, if the not found module is ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-core"),", add the following setting to ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,r.kt)("h2",{id:"the-worst-case---hoisting-to-the-root"},"The worst case - hoisting to the root"),(0,r.kt)("p",null,"Some tools might not work even with the default configuration of pnpm, which hoists everything to the root of the virtual store and some packages to the root. In this case, you can hoist either everything or a subset of dependencies to the root of the modules directory."),(0,r.kt)("p",null,"Hoisting everything to the the root of node_modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,r.kt)("p",null,"Hoisting only packages that match a pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}d.isMDXComponent=!0}}]);