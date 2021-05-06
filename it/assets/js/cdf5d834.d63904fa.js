(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{274:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),l=(a(0),a(318)),r={id:"add",title:"pnpm add <pkg>"},o={unversionedId:"cli/add",id:"version-6.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Installa un pacchetto e gli eventuali pacchetti da cui dipende. Di default, qualsiasi nuovo pacchetto \xe8 installato come dipendenza di produzione.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/add.md",slug:"/cli/add",permalink:"/it/cli/add",editUrl:"https://crowdin.com/project/pnpm/it",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"Filtering",permalink:"/it/filtering"},next:{title:"pnpm install",permalink:"/it/cli/install"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"Percorsi dei pacchetti supportati",id:"percorsi-dei-pacchetti-supportati",children:[{value:"Installazione dal registro npm",id:"installazione-dal-registro-npm",children:[]},{value:"Installazione da workspace",id:"installazione-da-workspace",children:[]},{value:"Installazione dal file system locale",id:"installazione-dal-file-system-locale",children:[]},{value:"Install from remote tarball",id:"install-from-remote-tarball",children:[]},{value:"Installazione da un repository Git",id:"installazione-da-un-repository-git",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:p};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Installa un pacchetto e gli eventuali pacchetti da cui dipende. Di default, qualsiasi nuovo pacchetto \xe8 installato come dipendenza di produzione."),Object(l.b)("h2",{id:"tldr"},"TL;DR"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Command"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax")),Object(l.b)("td",{parentName:"tr",align:null},"Salva in ",Object(l.b)("inlineCode",{parentName:"td"},"dependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add -D sax")),Object(l.b)("td",{parentName:"tr",align:null},"Salva in ",Object(l.b)("inlineCode",{parentName:"td"},"devDependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add -O sax")),Object(l.b)("td",{parentName:"tr",align:null},"Salva in ",Object(l.b)("inlineCode",{parentName:"td"},"optionalDependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax@next")),Object(l.b)("td",{parentName:"tr",align:null},"Installa dal tag ",Object(l.b)("inlineCode",{parentName:"td"},"next"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),Object(l.b)("td",{parentName:"tr",align:null},"Specifica la versione ",Object(l.b)("inlineCode",{parentName:"td"},"3.0.0"))))),Object(l.b)("h2",{id:"percorsi-dei-pacchetti-supportati"},"Percorsi dei pacchetti supportati"),Object(l.b)("h3",{id:"installazione-dal-registro-npm"},"Installazione dal registro npm"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pnpm add nome-pacchetto")," installer\xe0 l'ultima versione di ",Object(l.b)("inlineCode",{parentName:"p"},"nome-pacchetto")," dal ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"registro npm")," di default. Per installare un pacchetto da un altro registro, puoi usare il link del tarball (vedi ",Object(l.b)("a",{parentName:"p",href:"#install-from-remote-tarball"},"la guida corrispondente"),")."),Object(l.b)("p",null,"\xc8 inoltre possibile installare pacchetti per:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"tag: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),Object(l.b)("li",{parentName:"ul"},"versione: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),Object(l.b)("li",{parentName:"ul"},"intervallo di versioni: ",Object(l.b)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),Object(l.b)("h3",{id:"installazione-da-workspace"},"Installazione da workspace"),Object(l.b)("p",null,"Note that when adding dependencies and working within a ",Object(l.b)("a",{parentName:"p",href:"/it/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",Object(l.b)("a",{parentName:"p",href:"/it/workspaces#link-workspace-packages"},Object(l.b)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",Object(l.b)("a",{parentName:"p",href:"/it/workspaces#workspace-ranges-workspace"},Object(l.b)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),Object(l.b)("h3",{id:"installazione-dal-file-system-locale"},"Installazione dal file system locale"),Object(l.b)("p",null,"Ci sono due possibili metodi per installare da file system locale:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"da un file tarball (",Object(l.b)("inlineCode",{parentName:"li"},".tar"),", ",Object(l.b)("inlineCode",{parentName:"li"},".tar.gz"),", or ",Object(l.b)("inlineCode",{parentName:"li"},".tgz"),")"),Object(l.b)("li",{parentName:"ol"},"da una cartella")),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),Object(l.b)("p",null,"When you install from a directory, a symlink will be created in the current project's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm link"),"."),Object(l.b)("h3",{id:"install-from-remote-tarball"},"Install from remote tarball"),Object(l.b)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),Object(l.b)("h3",{id:"installazione-da-un-repository-git"},"Installazione da un repository Git"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),Object(l.b)("p",null,"Installs the package from the hosted Git provider, cloning it with Git. You can use a protocol for certain Git providers. Exempli gratia, ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),Object(l.b)("p",null,"You may install from Git by:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"latest commit from master: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),Object(l.b)("li",{parentName:"ul"},"commit: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),Object(l.b)("li",{parentName:"ul"},"branch: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),Object(l.b)("li",{parentName:"ul"},"version range: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(l.b)("p",null,"Installa i pacchetti specificati come ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies")," normali."),Object(l.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(l.b)("p",null,"Installa i pacchetti specificati come ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(l.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(l.b)("p",null,"Install the specified packages as ",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(l.b)("h3",{id:"--save-exact--e"},"--save-exact, -E"),Object(l.b)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),Object(l.b)("h3",{id:"--save-peer"},"--save-peer"),Object(l.b)("p",null,"Added in: v3.2.0"),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),Object(l.b)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),Object(l.b)("p",null,"Aggiunto in: v3.6.0"),Object(l.b)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",Object(l.b)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-W")," flag is used."),Object(l.b)("p",null,"For instance, ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),Object(l.b)("h3",{id:"--global"},"--global"),Object(l.b)("p",null,"Install a package globally."),Object(l.b)("h3",{id:"--workspace"},"--workspace"),Object(l.b)("p",null,"Added in: v4.4.0"),Object(l.b)("p",null,"Only adds the new dependency if it is found in the workspace."),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/it/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},318:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,u=b["".concat(r,".").concat(m)]||b[m]||s[m]||l;return a?i.a.createElement(u,o(o({ref:t},c),{},{components:a})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);