(self.webpackChunk=self.webpackChunk||[]).push([[1465],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},293:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>d,default:()=>c});var r=n(1424),a=n(2489),o=(n(7689),n(9848)),i=["components"],l={id:"motivation",title:"Motivasyon"},s={unversionedId:"motivation",id:"version-5.x/motivation",isDocsHomePage:!1,title:"Motivasyon",description:"Disk alan\u0131ndan tasarruf etmek ve kurulum h\u0131z\u0131n\u0131 art\u0131rmak",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/tr/5.x/motivation",editUrl:"https://crowdin.com/project/pnpm/tr",version:"5.x",frontMatter:{id:"motivation",title:"Motivasyon"},sidebar:"version-5.x/docs",next:{title:"Installation",permalink:"/tr/5.x/installation"}},d=[{value:"Disk alan\u0131ndan tasarruf etmek ve kurulum h\u0131z\u0131n\u0131 art\u0131rmak",id:"disk-alan\u0131ndan-tasarruf-etmek-ve-kurulum-h\u0131z\u0131n\u0131-art\u0131rmak",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"disk-alan\u0131ndan-tasarruf-etmek-ve-kurulum-h\u0131z\u0131n\u0131-art\u0131rmak"},"Disk alan\u0131ndan tasarruf etmek ve kurulum h\u0131z\u0131n\u0131 art\u0131rmak"),(0,o.kt)("p",null,"Yarn veye npm kullan\u0131rken, e\u011fer bir ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 kullanan 100 projeniz varsa, disk \xfczerinde o ba\u011f\u0131ml\u0131l\u0131ktan 100 adet kopya kay\u0131tl\u0131 olur. Pnpm ile ba\u011f\u0131ml\u0131l\u0131k, i\xe7eri\u011fi adreslenebilir bir depoda kaydolur, bu nedenle:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that differ are added to the store. For instance, if it has 100 files, and a new version has a change in only one of those files, ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1 new file to the store, instead of cloning the entire dependency just for the singular change."),(0,o.kt)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are installed, their files are hard-linked from that single place, consuming no additional disk space. This allows you to share dependencies of the same version across projects.")),(0,o.kt)("p",null,"As a result, you save a lot of space on your disk proportional to the number of projects and dependencies, and you have a lot faster installations!"),(0,o.kt)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),(0,o.kt)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project."),(0,o.kt)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory. If you'd like more details about the unique ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and why it works fine with the Node.js ecosystem, read:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tr/5.x/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}c.isMDXComponent=!0}}]);