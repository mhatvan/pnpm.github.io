(self.webpackChunk=self.webpackChunk||[]).push([[3117],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),f=r,u=m["".concat(c,".").concat(f)]||m[f]||d[f]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7601:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>c,toc:()=>o,default:()=>d});var a=n(1424),r=n(2489),l=(n(7689),n(9848)),i=["components"],p={id:"filtering",title:"\u8fc7\u6ee4",original_id:"filtering"},c={unversionedId:"filtering",id:"version-4.x/filtering",isDocsHomePage:!1,title:"\u8fc7\u6ee4",description:"\u6dfb\u52a0\u4e8e\uff1av2.13.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/zh/4.x/filtering",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"filtering",title:"\u8fc7\u6ee4",original_id:"filtering"},sidebar:"version-4.x/docs",previous:{title:"\u914d\u7f6e",permalink:"/zh/4.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/zh/4.x/cli/add"}},o=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[]},{value:"--filter ...^&lt;package_name&gt;",id:"--filter-package_name-4",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[]},{value:"--filter <since>",id:"--filter-since",children:[]}],s={toc:o};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,l.kt)("p",null,"Filtering allows to restrict commands to subsets of packages."),(0,l.kt)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by relation."),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," \u6807\u5fd7\u6307\u5b9a\u9009\u62e9\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm <command> --filter <package_selector>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"An article that compares Lerna's filtering to pnpm's: ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"))),(0,l.kt)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,l.kt)("p",null,"To select an exact package, just specify its name (",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core"),") or use a pattern to select a set of packages (",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/*"),")."),(0,l.kt)("p",null,"Usage examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm test --filter @babel/core\npnpm test --filter @babel/*\npnpm test --filter *core\n")),(0,l.kt)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,l.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with 3 dots: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run installation in all dependencies of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and in ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter foo...\n")),(0,l.kt)("p",null,'You may use a pattern to select a set of "root" packages:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter @babel/preset-*...\n")),(0,l.kt)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"Selects dependencies of a package (both direct and non-direct). For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter foo^...\n")),(0,l.kt)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with 3 dots: ",(0,l.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, the next command will run installation in all dependents of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and in ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...foo\n")),(0,l.kt)("p",null,"When packages in the workspace are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...foo --filter bar --filter qar...\n")),(0,l.kt)("h2",{id:"--filter-package_name-4"},"--filter ...^","<","package_name>"),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"Selects dependent of a package (both direct and non-direct). For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...^foo\n")),(0,l.kt)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,l.kt)("p",null,"Added in: v2.15.0"),(0,l.kt)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,l.kt)("p",null,"Added in: v4.7.0"),(0,l.kt)("p",null,"Includes all projects that are under the specified directory."),(0,l.kt)("p",null,'It may be used with "..." to select dependents/dependencies as well:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),(0,l.kt)("p",null,"It may be combined with ",(0,l.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter {packages}[origin/master]\npnpm <cmd> --filter ...{packages}[origin/master]\npnpm <cmd> --filter {packages}[origin/master]...\npnpm <cmd> --filter ...{packages}[origin/master]...\n")),(0,l.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter @babel/*{components}\npnpm <cmd> --filter @babel/*{components}[origin/master]\npnpm <cmd> --filter ...@babel/*{components}[origin/master]\n")),(0,l.kt)("h2",{id:"--filter-since"},"--filter ","[<","since>]"),(0,l.kt)("p",null,"Added in: v4.6.0"),(0,l.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,l.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm test --filter ...[origin/master]\n")))}d.isMDXComponent=!0}}]);