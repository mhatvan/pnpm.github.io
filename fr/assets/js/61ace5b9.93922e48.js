(self.webpackChunk=self.webpackChunk||[]).push([[8714],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>s,kt:()=>d});var t=r(7689);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||p;return r?t.createElement(f,o(o({ref:n},s),{},{components:r})):t.createElement(f,o({ref:n},s))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=r.length,o=new Array(p);o[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9167:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>l,metadata:()=>a,toc:()=>c,default:()=>u});var t=r(1424),i=r(2489),p=(r(7689),r(9848)),o=["components"],l={id:"pnpm-dislink",title:"pnpm dislink",original_id:"pnpm-dislink"},a={unversionedId:"pnpm-dislink",id:"version-4.x/pnpm-dislink",isDocsHomePage:!1,title:"pnpm dislink",description:"pnpm dislink",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-4.x/pnpm-dislink.md",sourceDirName:".",slug:"/pnpm-dislink",permalink:"/fr/4.x/pnpm-dislink",editUrl:"https://crowdin.com/project/pnpm/fr",version:"4.x",frontMatter:{id:"pnpm-dislink",title:"pnpm dislink",original_id:"pnpm-dislink"}},c=[{value:"pnpm dislink",id:"pnpm-dislink",children:[]}],s={toc:c};function u(e){var n=e.components,r=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"pnpm-dislink"},"pnpm dislink"),(0,p.kt)("p",null,"Unlinks a package. Like ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency after removing the external link."))}u.isMDXComponent=!0}}]);