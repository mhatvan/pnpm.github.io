(self.webpackChunk=self.webpackChunk||[]).push([[1771],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>c,kt:()=>k});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),k=a,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||i;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8683:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>u});var n=t(2791),a=t(9698),i=(t(7689),t(9848)),l=["components"],o={id:"remove",title:"pnpm remove"},p=void 0,d={unversionedId:"cli/remove",id:"version-5.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Belirtilen paketleri/k\xfct\xfcphaneleri, projenin package.json dosyas\u0131ndan ve node_modules klas\xf6r\xfcnden kald\u0131r\u0131r.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/tr/5.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/tr",version:"5.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-5.x/docs",previous:{title:"pnpm update",permalink:"/tr/5.x/cli/update"},next:{title:"pnpm link",permalink:"/tr/5.x/cli/link"}},c=[{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[]}]}],s={toc:c};function u(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Belirtilen paketleri/k\xfct\xfcphaneleri, projenin ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," dosyas\u0131ndan ve ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r\xfcnden kald\u0131r\u0131r."),(0,i.kt)("p",null,"Ayr\u0131ca: rm, uninstall, un"),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Belirtilen paketleri/k\xfct\xfcphaneleri, ",(0,i.kt)("a",{parentName:"p",href:"/tr/5.x/workspaces"},"workspace (\xe7al\u0131\u015fma alan\u0131)")," i\xe7erisindeki projelerden/paketlerden kald\u0131r\u0131r."),(0,i.kt)("p",null,"Workspace i\xe7erisinde kullan\u0131lmad\u0131\u011f\u0131 takdirde belirtilen paketi/k\xfct\xfcphaneyi (birden fazla da olabilir), alt klas\xf6rlerdeki t\xfcm projelerden kald\u0131r\u0131r."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Global olarak y\xfcklenen paketi/k\xfct\xfcphaneyi (birden fazla da olabilir) kald\u0131r\u0131r."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Belirtilen paket/k\xfct\xfcphane ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131ysa kald\u0131r\u0131r."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Belirtilen paket/k\xfct\xfcphane ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131ysa kald\u0131r\u0131r."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Belirtilen paket/k\xfct\xfcphane ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131ysa kald\u0131r\u0131r."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/5.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}u.isMDXComponent=!0}}]);