(window.webpackJsonp=window.webpackJsonp||[]).push([[1797],{1866:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(3064)),a={id:"audit",title:"pnpm audit"},c={unversionedId:"cli/audit",id:"version-3.5/cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Added in: 4.3.0",source:"@site/versioned_docs/version-3.5/cli/audit.md",slug:"/cli/audit",permalink:"/3.5/cli/audit",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.5/cli/audit.md",version:"3.5",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},l=[{value:"Options",id:"options",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[]},{value:"--json",id:"--json",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Added in: 4.3.0"),Object(o.b)("p",null,"Checks for known security issues with the installed packages."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--audit-level-severity"},"--audit-level \\<severity",">"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"low"),", ",Object(o.b)("strong",{parentName:"li"},"moderate"),", ",Object(o.b)("strong",{parentName:"li"},"high"),", ",Object(o.b)("strong",{parentName:"li"},"critical")),Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"low"))),Object(o.b)("p",null,"Only print advisories with severity greater than or equal to ",Object(o.b)("inlineCode",{parentName:"p"},"<severity>"),"."),Object(o.b)("h3",{id:"--json"},"--json"),Object(o.b)("p",null,"Output audit report in JSON format."),Object(o.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(o.b)("p",null,"Only audit dev dependencies."),Object(o.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(o.b)("p",null,"Only audit production dependencies."),Object(o.b)("h3",{id:"--no-optional"},"--no-optional"),Object(o.b)("p",null,"Don't audit ",Object(o.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}u.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,O=d["".concat(a,".").concat(b)]||d[b]||s[b]||o;return n?i.a.createElement(O,c(c({ref:t},p),{},{components:n})):i.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);