(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),i=(t(0),t(446)),p={id:"prune",title:"pnpm prune",original_id:"prune"},c={unversionedId:"cli/prune",id:"version-3.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes extraneous packages",source:"@site/versioned_docs/version-3.x/cli/prune.md",slug:"/cli/prune",permalink:"/3.x/cli/prune",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-3.x/cli/prune.md",version:"3.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",sidebar:"version-3.x/docs",previous:{title:"pnpm rebuild",permalink:"/3.x/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/3.x/cli/install-test"}},a=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--prod, --production",id:"--prod---production",children:[]}]}],u={toc:a};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Removes extraneous packages"),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm prune [--production | --prod]\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--prod---production"},"--prod, --production"),Object(i.b)("p",null,"Remove the packages specified in ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."))}l.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(t),b=r,f=s["".concat(p,".").concat(b)]||s[b]||d[b]||i;return t?o.a.createElement(f,c(c({ref:n},u),{},{components:t})):o.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=b;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var u=2;u<i;u++)p[u]=t[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);