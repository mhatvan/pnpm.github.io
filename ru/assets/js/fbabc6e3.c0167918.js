(self.webpackChunk=self.webpackChunk||[]).push([[9757],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7689);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(t),f=i,y=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return t?n.createElement(y,l(l({ref:r},d),{},{components:t})):n.createElement(y,l({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=s;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8574:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>a,metadata:()=>p,toc:()=>c,default:()=>u});var n=t(1424),i=t(2489),o=(t(7689),t(9848)),l=["components"],a={id:"why",title:"pnpm why"},p={unversionedId:"cli/why",id:"version-5.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0435 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/ru/5.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/ru/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/ru/5.x/cli/run"}},c=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],d={toc:c};function u(e){var r=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0435 \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Added in: 3.7.0"),(0,o.kt)("p",null,"Show information in JSON format."),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Show verbose output."),(0,o.kt)("h3",{id:"--parseable"},"--parseable"),(0,o.kt)("p",null,"Show parseable output instead of tree view."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Only display the dependency tree for packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Only display the dependency tree for packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ru/5.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);