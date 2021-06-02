(self.webpackChunk=self.webpackChunk||[]).push([[8573],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>l,kt:()=>m});var a=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=c(t),m=i,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||s;return t?a.createElement(d,r(r({ref:n},l),{},{components:t})):a.createElement(d,r({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},194:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>u});var a=t(1424),i=t(2489),s=(t(7689),t(9848)),r=["components"],o={id:"using-changesets",title:"Using Changesets with pnpm"},p={unversionedId:"using-changesets",id:"using-changesets",isDocsHomePage:!1,title:"Using Changesets with pnpm",description:"At the time of writing this documentation, the latest pnpm version was v6.3.0. The latest Changesets version was v2.16.0.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/pt/next/using-changesets",editUrl:"https://crowdin.com/project/pnpm/pt",version:"current",frontMatter:{id:"using-changesets",title:"Using Changesets with pnpm"},sidebar:"docs",previous:{title:"Command line tab-completion",permalink:"/pt/next/completion"},next:{title:"Continuous Integration",permalink:"/pt/next/continuous-integration"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Adding new changesets",id:"adding-new-changesets",children:[]},{value:"Releasing changes",id:"releasing-changes",children:[]},{value:"Using GitHub Actions",id:"using-github-actions",children:[{value:"Bumb up packages",id:"bumb-up-packages",children:[]},{value:"Publishing",id:"publishing",children:[]}]}],l={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"At the time of writing this documentation, the latest pnpm version was v6.3.0. The latest ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets"},"Changesets")," version was v2.16.0."))),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency in the root of the workspace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,s.kt)("p",null,"Then changesets' init command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),(0,s.kt)("h2",{id:"adding-new-changesets"},"Adding new changesets"),(0,s.kt)("p",null,"To generate a new changeset, run ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository. The generated markdown files in the ",(0,s.kt)("inlineCode",{parentName:"p"},".changeset")," directory should be committed to the repository."),(0,s.kt)("h2",{id:"releasing-changes"},"Releasing changes"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages previously specified with ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and update the changelog files."),(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),(0,s.kt)("li",{parentName:"ol"},"Commit the changes."),(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have bumped versions not yet present in the registry.")),(0,s.kt)("h2",{id:"using-github-actions"},"Using GitHub Actions"),(0,s.kt)("p",null,"To automate the process, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,s.kt)("h3",{id:"bumb-up-packages"},"Bumb up packages"),(0,s.kt)("p",null,"The action will detect when changeset files arrive in the ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," branch, the action will open a new PR listing all the packages with bumped versions. Once merged, the packages will be updated and you can decide whether to publish or not by adding the ",(0,s.kt)("inlineCode",{parentName:"p"},"publish")," property."),(0,s.kt)("h3",{id:"publishing"},"Publishing"),(0,s.kt)("p",null,"By adding ",(0,s.kt)("inlineCode",{parentName:"p"},"publish: pnpm ci:publish")," which is a script that executes ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset publish")," will publish to the registry once the PR is opened by ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,s.kt)("p",null,"More info and documentation regarding this action can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."))}u.isMDXComponent=!0}}]);