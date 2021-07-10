(self.webpackChunk=self.webpackChunk||[]).push([[5935],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(f,r(r({ref:n},c),{},{components:t})):o.createElement(f,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3257:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>p});var o=t(2791),i=t(9698),a=(t(7689),t(9848)),r=["components"],l={id:"motivation",title:"Motivazione"},s=void 0,d={unversionedId:"motivation",id:"version-5.x/motivation",isDocsHomePage:!1,title:"Motivazione",description:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/it/5.x/motivation",editUrl:"https://crowdin.com/project/pnpm/it",version:"5.x",frontMatter:{id:"motivation",title:"Motivazione"},sidebar:"version-5.x/docs",next:{title:"Installazione",permalink:"/it/5.x/installation"}},c=[{value:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione"},"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione"),(0,a.kt)("p",null,"Quando si usa npm o Yarn, se hai 100 progetti che usano una dipendenza, avrai 100 copie di quella dipendenza salvata su disco. Con pnpm, le dipendenze sono salvate in uno store content-addressable, di conseguenza:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Se dipendi da versioni diverse della dipendenza, solo i file diversi sono aggiunti allo store. Ad esempio, se una dipendenza ha 100 file e una nuova versione ha cambiamenti in un solo file, ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm update")," aggiunger\xe0 solamente un nuovo file all'interno dello store, invece di clonare l'intera dipendenza solo per una modifica singola."),(0,a.kt)("li",{parentName:"ol"},"Tutti i file sono salvati in un'unica posizione su disco. Quando i pacchetti vengono installati, i loro file sono hard-linkati da quella singola posizione, non consumando spazio su disco aggiuntivo. Ci\xf2 consente di condividere dipendenze della stessa versione tra progetti.")),(0,a.kt)("p",null,"Di conseguenza, \xe8 possibile risparmiare molto spazio su disco proporzionalmente al numero di progetti e dipendenze, e avrai installazioni molto pi\xf9 veloci!"),(0,a.kt)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),(0,a.kt)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project."),(0,a.kt)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory. If you'd like more details about the unique ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and why it works fine with the Node.js ecosystem, read:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/it/5.x/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}p.isMDXComponent=!0}}]);