(self.webpackChunk=self.webpackChunk||[]).push([[3929],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=i,d=s["".concat(a,".").concat(f)]||s[f]||m[f]||p;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=s;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<p;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3961:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,metadata:()=>a,toc:()=>c,default:()=>m});var r=t(1424),i=t(2489),p=(t(7689),t(9848)),o=["components"],l={id:"pnpm-unlink",title:"pnpm unlink",original_id:"pnpm-unlink"},a={unversionedId:"pnpm-unlink",id:"version-4.x/pnpm-unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"pnpm unlink",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/pnpm-unlink.md",sourceDirName:".",slug:"/pnpm-unlink",permalink:"/es/4.x/pnpm-unlink",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",frontMatter:{id:"pnpm-unlink",title:"pnpm unlink",original_id:"pnpm-unlink"}},c=[{value:"pnpm unlink",id:"pnpm-unlink",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"pnpm-unlink"},"pnpm unlink"),(0,p.kt)("p",null,"Alias: ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm dislink")),(0,p.kt)("p",null,"Unlinks a package. Like ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency after removing the external link."))}m.isMDXComponent=!0}}]);