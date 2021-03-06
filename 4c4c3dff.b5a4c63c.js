(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||l;return n?r.a.createElement(u,i(i({ref:t},o),{},{components:n})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},934:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(3064)),c={id:"filtering",title:"Filtering"},i={unversionedId:"filtering",id:"version-3.3/filtering",isDocsHomePage:!1,title:"Filtering",description:"Added in: v2.13.0",source:"@site/versioned_docs/version-3.3/filtering.md",slug:"/filtering",permalink:"/3.3/filtering",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.3/filtering.md",version:"3.3",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},p=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[]},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[]},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[]},{value:"Multiplicity",id:"multiplicity",children:[]},{value:"Excluding",id:"excluding",children:[]},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[]}],o={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"Filtering allows you to restrict commands to specific subsets of packages."),Object(l.b)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by\nrelation."),Object(l.b)("p",null,"Selectors may be specified via the ",Object(l.b)("inlineCode",{parentName:"p"},"--filter")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"An article that compares Lerna's filtering to pnpm's"))),Object(l.b)("h2",{id:"--filter-package_name"},"--filter \\<package_name",">"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"To select an exact package, just specify its name (",Object(l.b)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a\npattern to select a set of packages (",Object(l.b)("inlineCode",{parentName:"p"},"@scope/*"),")."),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),Object(l.b)("h2",{id:"--filter-package_name-1"},"--filter \\<package_name",">","..."),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the\npackage name with an ellipsis: ",Object(l.b)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next\ncommand will run tests of ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),Object(l.b)("p",null,"You may use a pattern to select a set of root packages:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),Object(l.b)("h2",{id:"--filter-package_name-2"},"--filter \\<package_name",">","^..."),Object(l.b)("p",null,"Added in: v4.4.0"),Object(l.b)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct),\nsuffix the name with the aforementioned ellipsis preceded by a chevron. For\ninstance, the next command will run tests for all of ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),"'s\ndependencies:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),Object(l.b)("h2",{id:"--filter-package_name-3"},"--filter ...\\<package_name",">"),Object(l.b)("p",null,"Added in: v2.14.0"),Object(l.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix\nthe package name with an ellipsis: ",Object(l.b)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will\nrun the tests of ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),Object(l.b)("h2",{id:"--filter-package_name-4"},'--filter "...^\\<package_name',">",'"'),Object(l.b)("p",null,"Added in: v4.4.0"),Object(l.b)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the\npackage name with an ellipsis followed by a chevron. For instance, this will\nrun tests for all packages dependent on ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),Object(l.b)("h2",{id:"--filter-directory"},"--filter ./\\<directory",">"),Object(l.b)("p",null,"Added in: v2.15.0"),Object(l.b)("p",null,"To only select packages under the specified directory, you may specify any\nabsolute path, typically in POSIX format."),Object(l.b)("h2",{id:"--filter-directory-1"},"--filter {\\<directory",">","}"),Object(l.b)("p",null,"Added in: v4.7.0"),Object(l.b)("p",null,"Includes all projects that are under the specified directory."),Object(l.b)("p",null,"It may be used with the ellipsis and chevron operators to select\ndependents/dependencies as well:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),Object(l.b)("p",null,"It may also be combined with ",Object(l.b)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed\nprojects inside a directory:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),Object(l.b)("p",null,"Or you may select all packages from a directory with names matching the given\npattern:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),Object(l.b)("h2",{id:"--filter-since"},'--filter "',"[\\<since",">]",'"'),Object(l.b)("p",null,"Added in: v4.6.0"),Object(l.b)("p",null,"Selects all the packages changed since the specified commit/branch. May be\nsuffixed or prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),Object(l.b)("p",null,"For example, the next command will run tests in all changed packages since\n",Object(l.b)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),Object(l.b)("h2",{id:"multiplicity"},"Multiplicity"),Object(l.b)("p",null,"When packages are filtered, every package is taken that matches at least one of\nthe selectors. You can use as many filters as you want:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),Object(l.b)("h2",{id:"excluding"},"Excluding"),Object(l.b)("p",null,"Added in: v5.8.0"),Object(l.b)("p",null,'Any of the filter selectors may work as exclusion operators when they have a\nleading "!". In zsh (and possibly other shells), "!" should be escaped: ',Object(l.b)("inlineCode",{parentName:"p"},"\\!"),"."),Object(l.b)("p",null,"For instance, this will run a command in all projects except for ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm \\<cmd> --filter=!foo\n")),Object(l.b)("p",null,"And this will run a command in all projects that are not under the ",Object(l.b)("inlineCode",{parentName:"p"},"lib"),"\ndirectory:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm \\<cmd> --filter=!./lib\n")),Object(l.b)("h2",{id:"--test-pattern-glob"},"--test-pattern \\<glob",">"),Object(l.b)("p",null,"Added in: v5.14.0"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests.\nIf they are, the dependent packages of such modified packages are not included."),Object(l.b)("p",null,'This option is useful with the "changed since" filter. For instance, the next\ncommand will run tests in all changed packages, and if the changes are in the\nsource code of the package, tests will run in the dependent packages as well:'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')))}s.isMDXComponent=!0}}]);