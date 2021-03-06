(window.webpackJsonp=window.webpackJsonp||[]).push([[2277],{2349:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return p})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(7),o=(a(0),a(3064)),p={id:"workspaces",title:"Workspace",original_id:"workspaces"},i={unversionedId:"workspaces",id:"version-5.17/workspaces",isDocsHomePage:!1,title:"Workspace",description:"pnpm has built-in support for monorepos (a.k.a. multi-package repositories,",source:"@site/versioned_docs/version-5.17/workspaces.md",slug:"/workspaces",permalink:"/5.17/workspaces",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.17/workspaces.md",version:"5.17",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.17/docs",previous:{title:"pnpmfile.js",permalink:"/5.17/pnpmfile"},next:{title:"Aliases",permalink:"/5.17/aliases"}},l=[{value:"Workspace protocol (workspace:)",id:"workspace-protocol-workspace",children:[{value:"Referencing workspace packages through aliases",id:"referencing-workspace-packages-through-aliases",children:[]},{value:"Referencing workspace packages through relative path",id:"referencing-workspace-packages-through-relative-path",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]}]},{value:"Release workflow",id:"release-workflow",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[]}]}],c={toc:l};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm has built-in support for monorepos (a.k.a. multi-package repositories,\nmulti-project repositories, or monolithic repositories). You can create a\nworkspace to unite multiple projects inside a single repository."),Object(o.b)("p",null,"A workspace must have a ",Object(o.b)("a",{parentName:"p",href:"pnpm-workspace_yaml"},"pnpm-workspace.yaml")," file in\nits root. A workspace also may have a ",Object(o.b)("a",{parentName:"p",href:"npmrc"},".npmrc")," in its root."),Object(o.b)("h2",{id:"workspace-protocol-workspace"},"Workspace protocol (workspace:)"),Object(o.b)("p",null,"Supported since v3.7.0."),Object(o.b)("p",null,"By default, pnpm will link packages from the workspace if the available packages match\nthe declared ranges. For instance, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in dependencies.\nBut if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace then\n",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),Object(o.b)("p",null,"Luckily, pnpm supports the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol (same as in Yarn v2). When this protocol is used pnpm will refuse\nto resolve to anything else than a local workspace package. So if you set ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," installation\nwill fail telling that no ",Object(o.b)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," is present in the workspace."),Object(o.b)("p",null,"This protocol is especially useful when the ",Object(o.b)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," config is set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nIn that case, pnpm will only link packages from the workspace if the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),Object(o.b)("h3",{id:"referencing-workspace-packages-through-aliases"},"Referencing workspace packages through aliases"),Object(o.b)("p",null,"Added in 5.12.0"),Object(o.b)("p",null,"For instance, the package in the workspace may be named ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),". Usually, you would reference it as ",Object(o.b)("inlineCode",{parentName:"p"},'{ "foo": "workspace:*" }'),"."),Object(o.b)("p",null,"If you want to use a different alias, the next syntax will work: ",Object(o.b)("inlineCode",{parentName:"p"},'{ "bar": "workspace:foo@*" }'),"."),Object(o.b)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above example will become: ",Object(o.b)("inlineCode",{parentName:"p"},'{ "bar": "npm:foo@1.0.0" }'),"."),Object(o.b)("h3",{id:"referencing-workspace-packages-through-relative-path"},"Referencing workspace packages through relative path"),Object(o.b)("p",null,"Added in 5.12.0"),Object(o.b)("p",null,"In a workspace with 2 packages:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"+ packages\n  + foo\n  + bar\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"bar")," may have ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as ",Object(o.b)("inlineCode",{parentName:"p"},'{ "foo": "workspace:../foo" }'),". Before publishing, these specs are converted to regular version specs supported by all package managers."),Object(o.b)("h3",{id:"publishing-workspace-packages"},"Publishing workspace packages"),Object(o.b)("p",null,"When a workspace package is packed into an archive (whether it's through ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",Object(o.b)("inlineCode",{parentName:"li"},"*"),")"),Object(o.b)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),Object(o.b)("p",null,"So for example, if we assume we have three workspace packages whose current version is ",Object(o.b)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "workspace:*",\n    "bar": "workspace:^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"Will be transformed into:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "1.5.0",\n    "bar": "^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"This feature allows you to not have to depend on something else than your local workspace packages, while still being able to publish the resulting packages to the remote registry without having to run intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefiting from the guarantees semver offers."),Object(o.b)("h2",{id:"release-workflow"},"Release workflow"),Object(o.b)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it.\nHowever, there are 2 well tested tools that handle versioning and support pnpm: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/atlassian/changesets"},"changesets")," and ",Object(o.b)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush"),"."),Object(o.b)("p",null,"For how to set up a repository, using Rush, read ",Object(o.b)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo/"},"this page"),"."),Object(o.b)("p",null,"For using Changesets with pnpm, read ",Object(o.b)("a",{parentName:"p",href:"using-changesets"},"this recipe"),"."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),Object(o.b)("p",null,"Added in: v2.14.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"true"),", ",Object(o.b)("strong",{parentName:"li"},"false"),", ",Object(o.b)("strong",{parentName:"li"},"deep"))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", locally available packages are linked to ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry.\nThis is very convenient in a monorepo. If you need local packages also be linked to subdependencies, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," range protocol. e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm add batman@workspace:*")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your monorepo with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"link-workspace-packages = true\n")),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - '**'\n")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install"),"."),Object(o.b)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),Object(o.b)("p",null,"Added in: v5.13.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"prefer-workspace-packages")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", local packages from the workspace are preferred over packages from the registry, even if there is a newer version of that package in the registry."),Object(o.b)("p",null,"This setting is only useful if the workspace doesn't use ",Object(o.b)("inlineCode",{parentName:"p"},"save-workspace-protocol=true"),"."),Object(o.b)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),Object(o.b)("p",null,"Added in: v2.17.0 (initially named ",Object(o.b)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap"),")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", pnpm creates a single ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace (in the directory that contains the ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file).\nA shared lockfile also means that all dependencies of all workspace packages will be in a single ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("p",null,"Advantages of this option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"every dependency is a singleton"),Object(o.b)("li",{parentName:"ul"},"faster installations in a monorepo"),Object(o.b)("li",{parentName:"ul"},"fewer changes in code reviews")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," even though all the dependencies will be hard linked into the root ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies\nthat are declared in their ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". So pnpm's strictness is preserved."),Object(o.b)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When true, new dependencies will be added with the workspace protocol, if they are present in the workspace."),Object(o.b)("p",null,"You might want to change this setting to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", if the tooling in your repository does not understand the workspace protocol."))}s.isMDXComponent=!0},3064:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return h}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},b=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=t,h=b["".concat(p,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(h,i(i({ref:n},c),{},{components:a})):r.a.createElement(h,i({ref:n},c))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);