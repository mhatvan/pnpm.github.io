(window.webpackJsonp=window.webpackJsonp||[]).push([[2611],{2683:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),o=(t(0),t(3064)),p={id:"workspace",title:"Workspace",original_id:"workspace"},i={unversionedId:"workspace",id:"version-4.8/workspace",isDocsHomePage:!1,title:"Workspace",description:"pnpm supports concurrent actions in multi-package repositories (workspaces).",source:"@site/versioned_docs/version-4.8/workspace.md",slug:"/workspace",permalink:"/4.8/workspace",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.8/workspace.md",version:"4.8",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},c=[{value:"Workspace ranges (workspace:)",id:"workspace-ranges-workspace",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm supports concurrent actions in multi-package repositories (workspaces)."),Object(o.b)("p",null,"By default, when you run the ",Object(o.b)("a",{parentName:"p",href:"pnpm-recursive"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm recursive [action]"))," commands,\nall the directories are searched for packages (directories with ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file).\nYou can control what directories are searched by passing an array of globs to ",Object(o.b)("inlineCode",{parentName:"p"},"packages")," in ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),"."),Object(o.b)("p",null,"An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  # the root package.json\n  - '.'\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test/ directories\n  - '!**/test/**'\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," should be in the root of the workspace."),Object(o.b)("h2",{id:"workspace-ranges-workspace"},"Workspace ranges (workspace:)"),Object(o.b)("p",null,"Supported since v3.7.0."),Object(o.b)("p",null,"By default, pnpm will link packages from the workspace if the available packages match\nthe declared ranges. For instance, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in dependencies.\nBut if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace then\n",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),Object(o.b)("p",null,"Luckily, pnpm supports the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol (same as in Yarn v2). When this protocol is used pnpm will refuse\nto resolve to anything else than a local workspace package. So if you set ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," installation\nwill fail telling that no ",Object(o.b)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," is present in the workspace."),Object(o.b)("h2",{id:"publishing-workspace-packages"},"Publishing workspace packages"),Object(o.b)("p",null,"When a workspace package is packed into an archive (whether it's through ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",Object(o.b)("inlineCode",{parentName:"li"},"*"),")"),Object(o.b)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),Object(o.b)("p",null,"So for example, if we assume we have three workspace packages whose current version is ",Object(o.b)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "workspace:*",\n    "bar": "workspace:^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"Will be transformed into:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "1.5.0",\n    "bar": "^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"This feature allows you to not have to depend on something else than your local workspace packages, while still being able to publish the resulting packages to the remote registry without having to run intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefiting from the guarantees semver offers."))}l.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||o;return t?r.a.createElement(m,i(i({ref:n},s),{},{components:t})):r.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);