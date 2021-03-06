(window.webpackJsonp=window.webpackJsonp||[]).push([[1959],{2029:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(7),o=(t(0),t(3064)),p={id:"installation",title:"Installation",original_id:"installation"},i={unversionedId:"installation",id:"version-5.2/installation",isDocsHomePage:!1,title:"Installation",description:"The easiest way to install pnpm is using npm:",source:"@site/versioned_docs/version-5.2/installation.md",slug:"/installation",permalink:"/5.2/installation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.2/installation.md",version:"5.2",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.2/docs",previous:{title:"Motivation",permalink:"/5.2/motivation"},next:{title:"pnpm CLI",permalink:"/5.2/pnpm-cli"}},l=[],s={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The easiest way to install pnpm is using npm:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),Object(o.b)("p",null,"Other solutions are:"),Object(o.b)("p",null,"Using a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pnpm/self-installer#readme"},"standalone script"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"curl -L https://raw.githubusercontent.com/pnpm/self-installer/master/install.js | node\n")),Object(o.b)("p",null,"On Windows (PowerShell):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://raw.githubusercontent.com/pnpm/self-installer/master/install.js').Content | node\n")),Object(o.b)("p",null,"Via npx:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),Object(o.b)("p",null,"Once you first installed pnpm, you can upgrade it using pnpm (but see the NOTE below):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE!")," There are ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1203"},"some issues")," with ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm add -g <pkg>")," on some systems. Any help is appreciated."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Do you wanna use pnpm on CI servers? See: ",Object(o.b)("a",{parentName:"p",href:"continuous-integration"},"Continuous Integration"),".")))}c.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),c=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,i(i({ref:n},s),{},{components:t})):a.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);