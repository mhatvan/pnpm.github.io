(self.webpackChunk=self.webpackChunk||[]).push([[7342],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7689);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=p,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3297:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>m});var r=n(2791),p=n(9698),i=(n(7689),n(9848)),o=["components"],a={id:"pnpm-cli",title:"pnpm CLI",original_id:"pnpm-cli"},l=void 0,c={unversionedId:"pnpm-cli",id:"version-4.x/pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Just use pnpm in place of npm:",source:"@site/versioned_docs/version-4.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/4.x/pnpm-cli",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-4.x/pnpm-cli.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",frontMatter:{id:"pnpm-cli",title:"pnpm CLI",original_id:"pnpm-cli"},sidebar:"version-4.x/docs",previous:{title:"Installation",permalink:"/4.x/installation"},next:{title:"pnpx CLI",permalink:"/4.x/pnpx-cli"}},s=[{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[]}]}],u={toc:s};function m(e){var t=e.components,n=(0,p.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Just use pnpm in place of npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path>, --dir ","<","path>"),(0,i.kt)("p",null,"Run as if pnpm was started in ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."))}m.isMDXComponent=!0}}]);