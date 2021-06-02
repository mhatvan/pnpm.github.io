(self.webpackChunk=self.webpackChunk||[]).push([[5512],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),d=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,h=u["".concat(a,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(h,l(l({ref:n},s),{},{components:t})):r.createElement(h,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8104:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,metadata:()=>a,toc:()=>d,default:()=>c});var r=t(1424),i=t(2489),o=(t(7689),t(9848)),l=["components"],p={id:"pnpm-list",title:"pnpm list",original_id:"pnpm-list"},a={unversionedId:"pnpm-list",id:"version-4.x/pnpm-list",isDocsHomePage:!1,title:"pnpm list",description:"This command will print to stdout all the versions of packages that are installed, as well as their dependencies, in a tree-structure.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/pnpm-list.md",sourceDirName:".",slug:"/pnpm-list",permalink:"/ru/4.x/pnpm-list",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"pnpm-list",title:"pnpm list",original_id:"pnpm-list"}},d=[{value:"Options",id:"options",children:[{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"-r",id:"-r",children:[]},{value:"--prod, --production, --only prod",id:"--prod---production---only-prod",children:[]},{value:"--dev, --only dev",id:"--dev---only-dev",children:[]}]}],s={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command will print to stdout all the versions of packages that are installed, as well as their dependencies, in a tree-structure."),(0,o.kt)("p",null,"Positional arguments are ",(0,o.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm list babel-* eslint-* semver@5")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Added in: 3.7.0"),(0,o.kt)("p",null,"Show information in JSON format."),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Show extended information."),(0,o.kt)("h3",{id:"--parseable"},"--parseable"),(0,o.kt)("p",null,"Show parseable output instead of tree view."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"List packages in the global install prefix instead of in the current project."),(0,o.kt)("h3",{id:"--depth-number"},"--depth ","<","number>"),(0,o.kt)("p",null,"Max display depth of the dependency tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," option."),(0,o.kt)("h3",{id:"-r"},"-r"),(0,o.kt)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),(0,o.kt)("h3",{id:"--prod---production---only-prod"},"--prod, --production, --only prod"),(0,o.kt)("p",null,"Display only the dependency tree for packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--dev---only-dev"},"--dev, --only dev"),(0,o.kt)("p",null,"Display only the dependency tree for packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."))}c.isMDXComponent=!0}}]);