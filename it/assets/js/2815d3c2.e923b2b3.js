(self.webpackChunk=self.webpackChunk||[]).push([[76],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||p;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<p;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2138:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,metadata:()=>a,toc:()=>c,default:()=>u});var r=t(1424),i=t(2489),p=(t(7689),t(9848)),o=["components"],l={id:"pnpm-dislink",title:"pnpm dislink",original_id:"pnpm-dislink"},a={unversionedId:"pnpm-dislink",id:"version-4.x/pnpm-dislink",isDocsHomePage:!1,title:"pnpm dislink",description:"pnpm dislink",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-4.x/pnpm-dislink.md",sourceDirName:".",slug:"/pnpm-dislink",permalink:"/it/4.x/pnpm-dislink",editUrl:"https://crowdin.com/project/pnpm/it",version:"4.x",frontMatter:{id:"pnpm-dislink",title:"pnpm dislink",original_id:"pnpm-dislink"}},c=[{value:"pnpm dislink",id:"pnpm-dislink",children:[]}],s={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"pnpm-dislink"},"pnpm dislink"),(0,p.kt)("p",null,"Unlinks a package. Like ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency after removing the external link."))}u.isMDXComponent=!0}}]);