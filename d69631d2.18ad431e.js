(window.webpackJsonp=window.webpackJsonp||[]).push([[2517],{2589:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(7),r=(t(0),t(3064)),s={id:"using-changesets",title:"Using Changesets with pnpm",original_id:"using-changesets"},o={unversionedId:"using-changesets",id:"version-5.18/using-changesets",isDocsHomePage:!1,title:"Using Changesets with pnpm",description:"At the time of writing this documentation, the latest pnpm version was",source:"@site/versioned_docs/version-5.18/using-changesets.md",slug:"/using-changesets",permalink:"/using-changesets",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.18/using-changesets.md",version:"5.18",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.18/docs",previous:{title:"Command line tab-completion",permalink:"/completion"},next:{title:"Continuous Integration",permalink:"/continuous-integration"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Adding new changesets",id:"adding-new-changesets",children:[]},{value:"Releasing changes",id:"releasing-changes",children:[]},{value:"Using GitHub Actions",id:"using-github-actions",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"At the time of writing this documentation, the latest pnpm version was\nv5.17.3. The latest Changesets version was v2.14.1.")),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency\nin the root of the workspace:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),Object(r.b)("p",null,"Then changesets' init command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),Object(r.b)("h2",{id:"adding-new-changesets"},"Adding new changesets"),Object(r.b)("p",null,"To generate a new changeset, run ",Object(r.b)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository.\nThe generated markdown files in the ",Object(r.b)("inlineCode",{parentName:"p"},".changeset")," directory should be committed\nto the repository."),Object(r.b)("h2",{id:"releasing-changes"},"Releasing changes"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages\npreviously specified with ",Object(r.b)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and\nupdate the changelog files."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),Object(r.b)("li",{parentName:"ol"},"Commit the changes."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have\nbumped versions not yet present in the registry.")),Object(r.b)("h2",{id:"using-github-actions"},"Using GitHub Actions"),Object(r.b)("p",null,"To automate the process, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),Object(r.b)("p",null,"In a nutshell, the action will detect new changesets on the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch,\napply them, commit the updated metadata and changelogs, and open a Pull Request.\nYou could also publish your packages automatically."),Object(r.b)("p",null,"More info and documentation regarding this action can be found\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"name: Changesets\non:\n  push:\n    branches:\n      - master\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}l.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},h=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,b=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return t?i.a.createElement(b,o(o({ref:n},p),{},{components:t})):i.a.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);