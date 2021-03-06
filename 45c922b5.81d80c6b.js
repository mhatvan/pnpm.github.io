(window.webpackJsonp=window.webpackJsonp||[]).push([[777],{3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||l;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},846:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(3064)),o={id:"installation",title:"Installation",original_id:"installation"},i={unversionedId:"installation",id:"version-5.9/installation",isDocsHomePage:!1,title:"Installation",description:"The easiest way to install pnpm is using npm:",source:"@site/versioned_docs/version-5.9/installation.md",slug:"/installation",permalink:"/5.9/installation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.9/installation.md",version:"5.9",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.9/docs",previous:{title:"Motivation",permalink:"/5.9/motivation"},next:{title:"pnpm CLI",permalink:"/5.9/pnpm-cli"}},p=[{value:"Compatibility",id:"compatibility",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The easiest way to install pnpm is using npm:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),Object(l.b)("p",null,"Other solutions are:"),Object(l.b)("p",null,"Using a ",Object(l.b)("a",{parentName:"p",href:"https://github.com/pnpm/self-installer#readme"},"standalone script"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -L https://raw.githubusercontent.com/pnpm/self-installer/master/install.js | node\n")),Object(l.b)("p",null,"On Windows (PowerShell):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://raw.githubusercontent.com/pnpm/self-installer/master/install.js').Content | node\n")),Object(l.b)("p",null,"Via npx:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),Object(l.b)("p",null,"Once you first installed pnpm, you can upgrade it using pnpm:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Do you wanna use pnpm on CI servers? See: ",Object(l.b)("a",{parentName:"p",href:"continuous-integration"},"Continuous Integration"),".")),Object(l.b)("h2",{id:"compatibility"},"Compatibility"),Object(l.b)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Node.js"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"6"),Object(l.b)("td",{parentName:"tr",align:null},"2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"8"),Object(l.b)("td",{parentName:"tr",align:null},"3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"10, 12, 14"),Object(l.b)("td",{parentName:"tr",align:null},"4, 5")))))}s.isMDXComponent=!0}}]);