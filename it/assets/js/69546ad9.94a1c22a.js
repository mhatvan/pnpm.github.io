(self.webpackChunk=self.webpackChunk||[]).push([[3424],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7689);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2738:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>c,toc:()=>p,default:()=>u});var r=n(1424),i=n(2489),o=(n(7689),n(9848)),a=["components"],l={id:"git",title:"Lavorare con Git"},c={unversionedId:"git",id:"version-4.x/git",isDocsHomePage:!1,title:"Lavorare con Git",description:"File Lock",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-4.x/git.md",sourceDirName:".",slug:"/git",permalink:"/it/4.x/git",editUrl:"https://crowdin.com/project/pnpm/it",version:"4.x",frontMatter:{id:"git",title:"Lavorare con Git"}},p=[{value:"File Lock",id:"file-lock",children:[{value:"Conflitti Merge",id:"conflitti-merge",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"file-lock"},"File Lock"),(0,o.kt)("p",null,"Dovresti eseguire sempre il commit del file lock (",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Questo per molte ragioni, le principali sono:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"permette di avere installazioni veloci per CI e ambienti di produzione, grazie alla possibilit\xe0 di saltare la risoluzione dei pacchetti"),(0,o.kt)("li",{parentName:"ul"},"it enforces consistent installations and resolution between development, testing, and production environments, meaning the packages used in testing and production will be exactly the same as when you developed your project")),(0,o.kt)("h3",{id:"conflitti-merge"},"Conflitti Merge"),(0,o.kt)("p",null,"pnpm pu\xf2 risolvere automaticamente i conflitti di merge in ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Se hai conflitti, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," ed esegui il commit dei cambiamenti."),(0,o.kt)("p",null,"Attenzione, per\xf2. It is advised that you review the changes prior to staging a commit, because we cannot guarantee that pnpm will choose the correct head - it instead builds with the most updated of lockfiles, which is ideal in most cases."))}u.isMDXComponent=!0}}]);