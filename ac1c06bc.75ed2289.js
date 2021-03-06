(window.webpackJsonp=window.webpackJsonp||[]).push([[2019],{2089:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),o=(r(0),r(3064)),a={id:"test",title:"pnpm test",original_id:"test"},c={unversionedId:"cli/test",id:"version-5.7/cli/test",isDocsHomePage:!1,title:"pnpm test",description:"Aliases: run test, t, tst",source:"@site/versioned_docs/version-5.7/cli/test.md",slug:"/cli/test",permalink:"/5.7/cli/test",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.7/cli/test.md",version:"5.7",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.7/docs",previous:{title:"pnpm run",permalink:"/5.7/cli/run"},next:{title:"pnpm start",permalink:"/5.7/cli/start"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:p};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aliases: ",Object(o.b)("inlineCode",{parentName:"p"},"run test"),", ",Object(o.b)("inlineCode",{parentName:"p"},"t"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tst")),Object(o.b)("p",null,"Runs a package's ",Object(o.b)("inlineCode",{parentName:"p"},'"test"')," script, if one was provided.\nThis is just a shortcut to ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm run test"),", so for more details you\nmay read about ",Object(o.b)("a",{parentName:"p",href:"run"},"pnpm run"),"."),Object(o.b)("h2",{id:"synopsis"},"Synopsis"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"pnpm test [-r] [-- &lt;args>...]\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"Run the tests in every package found in subdirectories\nor every workspace package, when executed inside a workspace."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}l.isMDXComponent=!0},3064:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return r?i.a.createElement(f,c(c({ref:t},s),{},{components:r})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);