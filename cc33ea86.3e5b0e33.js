(window.webpackJsonp=window.webpackJsonp||[]).push([[2368],{2441:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),l=(t(0),t(3064)),a={id:"unlink",title:"pnpm unlink",original_id:"unlink"},c={unversionedId:"cli/unlink",id:"version-5.11/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Alias: dislink",source:"@site/versioned_docs/version-5.11/cli/unlink.md",slug:"/cli/unlink",permalink:"/5.11/cli/unlink",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.11/cli/unlink.md",version:"5.11",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.11/docs",previous:{title:"pnpm link",permalink:"/5.11/cli/link"},next:{title:"pnpm import",permalink:"/5.11/cli/import"}},o=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:o};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Alias: ",Object(l.b)("inlineCode",{parentName:"p"},"dislink")),Object(l.b)("p",null,"Unlinks a package. Like ",Object(l.b)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency\nafter removing the external link."),Object(l.b)("p",null,"If called without arguments, all linked-in dependencies will be unlinked."),Object(l.b)("h2",{id:"synopsis"},"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"pnpm unlink [-r] [--filter &lt;package_selector>] [&lt;pkg>...]\npnpm recursive unlink [--filter &lt;package_selector>] [&lt;pkg>...]\npnpm multi unlink [--filter &lt;package_selector>] [&lt;pkg>...]\n")),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(l.b)("p",null,"Unlink in every package found in subdirectories\nor in every workspace package, when executed inside a ",Object(l.b)("a",{parentName:"p",href:"../workspaces"},"workspace"),"."),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||l;return t?i.a.createElement(f,c(c({ref:n},p),{},{components:t})):i.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=b;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<l;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);