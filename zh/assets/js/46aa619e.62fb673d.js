(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),i=(a(0),a(394)),p={id:"filtering",title:"Filtering"},c={unversionedId:"filtering",id:"filtering",isDocsHomePage:!1,title:"Filtering",description:"Added in: v2.13.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/filtering.md",slug:"/filtering",permalink:"/zh/next/filtering",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/filtering.md",version:"current",sidebar:"docs",previous:{title:"Configuring",permalink:"/zh/next/configuring"},next:{title:"pnpm add <pkg>",permalink:"/zh/next/cli/add"}},o=[],d={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"Filtering allows you to restrict commands to specific subsets of packages."),Object(i.b)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by relation."),Object(i.b)("p",null,"Selectors may be specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),Object(i.b)("a",{parentName:"h5",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"An article that compares Lerna's filtering to pnpm's")," :::")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("h2",{parentName:"div",id:"--filter-package_name"},"--filter ","<","package_name>"),Object(i.b)("p",{parentName:"div"},"Added in: v2.13.0"),Object(i.b)("p",{parentName:"div"},"To select an exact package, just specify its name (",Object(i.b)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a pattern to select a set of packages (",Object(i.b)("inlineCode",{parentName:"p"},"@scope/*"),")."),Object(i.b)("p",{parentName:"div"},"Examples:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),Object(i.b)("h2",{parentName:"div",id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(i.b)("p",{parentName:"div"},"Added in: v2.13.0"),Object(i.b)("p",{parentName:"div"},"To select a package and its dependencies (direct and non-direct), suffix the package name with an ellipsis: ",Object(i.b)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run tests of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),Object(i.b)("p",{parentName:"div"},"You may use a pattern to select a set of root packages:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),Object(i.b)("h2",{parentName:"div",id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),Object(i.b)("p",{parentName:"div"},"Added in: v4.4.0"),Object(i.b)("p",{parentName:"div"},"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),Object(i.b)("h2",{parentName:"div",id:"--filter-package_name-3"},"--filter ...","<","package_name>"),Object(i.b)("p",{parentName:"div"},"Added in: v2.14.0"),Object(i.b)("p",{parentName:"div"},"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",Object(i.b)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),Object(i.b)("h2",{parentName:"div",id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),Object(i.b)("p",{parentName:"div"},"Added in: v4.4.0"),Object(i.b)("p",{parentName:"div"},"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),Object(i.b)("h2",{parentName:"div",id:"--filter-directory"},"--filter ./","<","directory>"),Object(i.b)("p",{parentName:"div"},"Added in: v2.15.0"),Object(i.b)("p",{parentName:"div"},"To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format."),Object(i.b)("h2",{parentName:"div",id:"--filter-directory-1"},"--filter {","<","directory>}"),Object(i.b)("p",{parentName:"div"},"Added in: v4.7.0"),Object(i.b)("p",{parentName:"div"},"Includes all projects that are under the specified directory."),Object(i.b)("p",{parentName:"div"},"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),Object(i.b)("p",{parentName:"div"},"It may also be combined with ",Object(i.b)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),Object(i.b)("p",{parentName:"div"},"Or you may select all packages from a directory with names matching the given pattern:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),Object(i.b)("h2",{parentName:"div",id:"--filter-since"},'--filter "',"[<","since>]",'"'),Object(i.b)("p",{parentName:"div"},"Added in: v4.6.0"),Object(i.b)("p",{parentName:"div"},"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),Object(i.b)("p",{parentName:"div"},"For example, the next command will run tests in all changed packages since ",Object(i.b)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),Object(i.b)("h2",{parentName:"div",id:"multiplicity"},"Multiplicity"),Object(i.b)("p",{parentName:"div"},"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),Object(i.b)("h2",{parentName:"div",id:"excluding"},"Excluding"),Object(i.b)("p",{parentName:"div"},"Added in: v5.8.0"),Object(i.b)("p",{parentName:"div"},'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',Object(i.b)("inlineCode",{parentName:"p"},"\\!"),"."),Object(i.b)("p",{parentName:"div"},"For instance, this will run a command in all projects except for ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),Object(i.b)("p",{parentName:"div"},"And this will run a command in all projects that are not under the ",Object(i.b)("inlineCode",{parentName:"p"},"lib")," directory:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),Object(i.b)("h2",{parentName:"div",id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),Object(i.b)("p",{parentName:"div"},"Added in: v5.14.0"),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),Object(i.b)("p",{parentName:"div"},'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')))))}s.isMDXComponent=!0},394:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=s(a),b=n,f=l["".concat(p,".").concat(b)]||l[b]||m[b]||i;return a?r.a.createElement(f,c(c({ref:t},d),{},{components:a})):r.a.createElement(f,c({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var d=2;d<i;d++)p[d]=a[d];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);