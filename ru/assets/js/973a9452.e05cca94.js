(self.webpackChunk=self.webpackChunk||[]).push([[7541],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2298:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>d});var n=r(2791),i=r(9698),o=(r(7689),r(9848)),a=["components"],p={id:"test",title:"pnpm test",original_id:"test"},s=void 0,c={unversionedId:"cli/test",id:"version-4.x/cli/test",isDocsHomePage:!1,title:"pnpm test",description:"Aliases: run test, t, tst",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/cli/test.md",sourceDirName:"cli",slug:"/cli/test",permalink:"/ru/4.x/cli/test",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"test",title:"pnpm test",original_id:"test"},sidebar:"version-4.x/docs",previous:{title:"pnpm run",permalink:"/ru/4.x/cli/run"},next:{title:"pnpm start",permalink:"/ru/4.x/cli/start"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"run test"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tst")),(0,o.kt)("p",null,"Runs a package's ",(0,o.kt)("inlineCode",{parentName:"p"},'"test"')," script, if one was provided. This is just a shortcut to ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test"),", so for more details you may read about ",(0,o.kt)("a",{parentName:"p",href:"/ru/4.x/cli/run"},"pnpm run"),"."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm test [-r] [-- <args>...]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Run the tests in every package found in subdirectories or every workspace package, when executed inside a workspace."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ru/4.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);