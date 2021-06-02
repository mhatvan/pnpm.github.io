(self.webpackChunk=self.webpackChunk||[]).push([[4170],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7689);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=p,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3160:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>c,toc:()=>l,default:()=>u});var r=t(1424),p=t(2489),a=(t(7689),t(9848)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"For new users",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/ru/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/ru/5.x/pnpm-cli"},next:{title:"Configuring",permalink:"/ru/5.x/configuring"}},l=[{value:"For new users",id:"for-new-users",children:[]},{value:"For npm users",id:"for-npm-users",children:[]}],s={toc:l};function u(e){var n=e.components,t=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"for-new-users"},"For new users"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,a.kt)("p",null,"For example, to use ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"This will fetch ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,a.kt)("h2",{id:"for-npm-users"},"For npm users"),(0,a.kt)("p",null,"npm has a great package runner called ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}u.isMDXComponent=!0}}]);