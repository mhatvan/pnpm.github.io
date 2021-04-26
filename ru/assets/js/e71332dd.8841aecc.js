(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{292:function(I,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return n})),i.d(e,"metadata",(function(){return b})),i.d(e,"toc",(function(){return g})),i.d(e,"default",(function(){return r}));var t=i(3),a=i(8),l=(i(0),i(318)),n={},b={type:"mdx",permalink:"/ru/benchmarks",source:"@site/src/pages/benchmarks.md"},g=[{value:"Lots of Files",id:"lots-of-files",children:[]}],j={toc:g};function r(I){var e=I.components,n=Object(a.a)(I,["components"]);return Object(l.b)("wrapper",Object(t.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),Object(l.b)("p",null,"This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant)."),Object(l.b)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),Object(l.b)("h2",{id:"lots-of-files"},"Lots of Files"),Object(l.b)("p",null,"The app's ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(l.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"action"),Object(l.b)("th",{parentName:"tr",align:null},"cache"),Object(l.b)("th",{parentName:"tr",align:null},"lockfile"),Object(l.b)("th",{parentName:"tr",align:null},"node_modules"),Object(l.b)("th",{parentName:"tr",align:null},"npm"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm"),Object(l.b)("th",{parentName:"tr",align:null},"Yarn"),Object(l.b)("th",{parentName:"tr",align:null},"Yarn PnP"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"51.6s"),Object(l.b)("td",{parentName:"tr",align:null},"13.2s"),Object(l.b)("td",{parentName:"tr",align:null},"39.1s"),Object(l.b)("td",{parentName:"tr",align:null},"29.1s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"1.5s"),Object(l.b)("td",{parentName:"tr",align:null},"1.2s"),Object(l.b)("td",{parentName:"tr",align:null},"707ms"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"9.2s"),Object(l.b)("td",{parentName:"tr",align:null},"3.5s"),Object(l.b)("td",{parentName:"tr",align:null},"11s"),Object(l.b)("td",{parentName:"tr",align:null},"1.8s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"25.3s"),Object(l.b)("td",{parentName:"tr",align:null},"6.2s"),Object(l.b)("td",{parentName:"tr",align:null},"26.5s"),Object(l.b)("td",{parentName:"tr",align:null},"17.2s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"24.4s"),Object(l.b)("td",{parentName:"tr",align:null},"11.3s"),Object(l.b)("td",{parentName:"tr",align:null},"23.3s"),Object(l.b)("td",{parentName:"tr",align:null},"14.2s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"2s"),Object(l.b)("td",{parentName:"tr",align:null},"1.6s"),Object(l.b)("td",{parentName:"tr",align:null},"22.1s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"1.5s"),Object(l.b)("td",{parentName:"tr",align:null},"1.2s"),Object(l.b)("td",{parentName:"tr",align:null},"713ms"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"2s"),Object(l.b)("td",{parentName:"tr",align:null},"5.2s"),Object(l.b)("td",{parentName:"tr",align:null},"41.1s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"update"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"1.5s"),Object(l.b)("td",{parentName:"tr",align:null},"9.6s"),Object(l.b)("td",{parentName:"tr",align:null},"35.4s"),Object(l.b)("td",{parentName:"tr",align:null},"28.3s")))),Object(l.b)("p",null,Object(l.b)("img",{alt:"Graph of the alotta-files results",src:i(407).default})))}r.isMDXComponent=!0},318:function(I,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return N}));var t=i(0),a=i.n(t);function l(I,e,i){return e in I?Object.defineProperty(I,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[e]=i,I}function n(I,e){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(I,e).enumerable}))),i.push.apply(i,t)}return i}function b(I){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){l(I,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(I,e,Object.getOwnPropertyDescriptor(i,e))}))}return I}function g(I,e){if(null==I)return{};var i,t,a=function(I,e){if(null==I)return{};var i,t,a={},l=Object.keys(I);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||(a[i]=I[i]);return a}(I,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(I);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(a[i]=I[i])}return a}var j=a.a.createContext({}),r=function(I){var e=a.a.useContext(j),i=e;return I&&(i="function"==typeof I?I(e):b(b({},e),I)),i},c=function(I){var e=r(I.components);return a.a.createElement(j.Provider,{value:e},I.children)},d={inlineCode:"code",wrapper:function(I){var e=I.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(I,e){var i=I.components,t=I.mdxType,l=I.originalType,n=I.parentName,j=g(I,["components","mdxType","originalType","parentName"]),c=r(i),m=t,N=c["".concat(n,".").concat(m)]||c[m]||d[m]||l;return i?a.a.createElement(N,b(b({ref:e},j),{},{components:i})):a.a.createElement(N,b({ref:e},j))}));function N(I,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof I||t){var l=i.length,n=new Array(l);n[0]=m;var b={};for(var g in e)hasOwnProperty.call(e,g)&&(b[g]=e[g]);b.originalType=I,b.mdxType="string"==typeof I?I:t,n[1]=b;for(var j=2;j<l;j++)n[j]=i[j];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},407:function(I,e,i){"use strict";i.r(e),e.default="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMTkiPgogIDxzdHlsZT4KICAgIC5mb250IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH0KICAgIC5zMyB7IGZvbnQtc2l6ZTogM3B4OyB9CiAgICAuczQgeyBmb250LXNpemU6IDRweDsgfQogICAgLnM1IHsgZm9udC1zaXplOiA1cHg7IH0KICAgIC5saW5lIHsgc3Ryb2tlOiAjY2FjYWNhOyB9CiAgICAud2lkdGggeyBzdHJva2Utd2lkdGg6IDAuNTsgfQogICAgLnRleHQgeyBmaWxsOiAjODg4OyB9CiAgPC9zdHlsZT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMxOSIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjQ0IiBjeT0iNiIgcj0iNCIgZmlsbD0iI2NkMzczMSI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNDQiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnBtPC90ZXh0PgogIDx0ZXh0IHg9IjQ0IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY3LjExLjE8L3RleHQ+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2IiByPSI0IiBmaWxsPSIjZmJhZTAwIj48L2NpcmNsZT4KICA8dGV4dCB4PSI2MCIgeT0iMTQiIGNsYXNzPSJmb250IHM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wbnBtPC90ZXh0PgogIDx0ZXh0IHg9IjYwIiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY2LjIuMTwvdGV4dD4KICA8Y2lyY2xlIGN4PSI3NiIgY3k9IjYiIHI9IjQiIGZpbGw9IiMyNDhlYmQiPjwvY2lyY2xlPgogIDx0ZXh0IHg9Ijc2IiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm48L3RleHQ+CiAgPHRleHQgeD0iNzYiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djEuMjIuMTA8L3RleHQ+CiAgPGNpcmNsZSBjeD0iOTIiIGN5PSI2IiByPSI0IiBmaWxsPSIjMjQ4ZWJkIj48L2NpcmNsZT4KICA8dGV4dCB4PSI5MiIgeT0iMTQiIGNsYXNzPSJmb250IHM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ZYXJuIFBuUDwvdGV4dD4KICA8dGV4dCB4PSI5MiIgeT0iMTgiIGNsYXNzPSJmb250IHMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52MS4yMi4xMDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+CiAgPHRleHQgeD0iNDAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8bGluZSB4MT0iOTAiIHkxPSIzMSIgeDI9IjkwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTE8L3RleHQ+CiAgPHRleHQgeD0iOTAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTE8L3RleHQ+CiAgPGxpbmUgeDE9IjE0MCIgeTE9IjMxIiB4Mj0iMTQwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjE0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIyPC90ZXh0PgogIDx0ZXh0IHg9IjE0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMjwvdGV4dD4KICA8bGluZSB4MT0iMTkwIiB5MT0iMzEiIHgyPSIxOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMTkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzM8L3RleHQ+CiAgPHRleHQgeD0iMTkwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMzPC90ZXh0PgogIDxsaW5lIHgxPSIyNDAuMDAwMDAwMDAwMDAwMDMiIHkxPSIzMSIgeDI9IjI0MC4wMDAwMDAwMDAwMDAwMyIgeTI9IjMwNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIyNDAuMDAwMDAwMDAwMDAwMDMiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40NDwvdGV4dD4KICA8dGV4dCB4PSIyNDAuMDAwMDAwMDAwMDAwMDMiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDQ8L3RleHQ+CiAgPGxpbmUgeDE9IjI5MCIgeTE9IjMxIiB4Mj0iMjkwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjI5MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjU1PC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41NTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjIwIiBjbGFzcz0iZm9udCBzNCB0ZXh0IiBmb250LXN0eWxlPSJpdGFsaWMiIHRleHQtYW5jaG9yPSJlbmQiPkluc3RhbGxhdGlvbiB0aW1lIGluIHNlY29uZHMgKGxvd2VyIGlzIGJldHRlcik8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjM1IiB3aWR0aD0iMjM1IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0MS41IiB3aWR0aD0iNjAiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjQ4IiB3aWR0aD0iMTc4IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI1NC41IiB3aWR0aD0iMTMzIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI2NSIgd2lkdGg9IjciIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjcxLjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI3OCIgd2lkdGg9IjMiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijg0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI5NSIgd2lkdGg9IjQyIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMDEuNSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMDgiIHdpZHRoPSI1MCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTE0LjUiIHdpZHRoPSI4IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMjUiIHdpZHRoPSIxMTUiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzMS41IiB3aWR0aD0iMjgiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzOCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTQ0LjUiIHdpZHRoPSI3OCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTU1IiB3aWR0aD0iMTExIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjEuNSIgd2lkdGg9IjUxIiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjgiIHdpZHRoPSIxMDYiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE3NC41IiB3aWR0aD0iNjUiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE4NSIgd2lkdGg9IjkiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5MS41IiB3aWR0aD0iNyIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTk4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMDQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIxNSIgd2lkdGg9IjciIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIyMS41IiB3aWR0aD0iNSIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjI4IiB3aWR0aD0iMyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjM0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNDUiIHdpZHRoPSI5IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTEuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTgiIHdpZHRoPSIxODciIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI2NC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjc1IiB3aWR0aD0iNyIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjgxLjUiIHdpZHRoPSI0NCIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjg4IiB3aWR0aD0iMTYxIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyOTQuNSIgd2lkdGg9IjEyOSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8bGluZSB4MT0iNDAiIHkxPSIzMSIgeDI9IjQwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSI+PC9saW5lPgogIDx0ZXh0IHg9IjM4IiB5PSI0NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+Y2xlYW4gaW5zdGFsbDwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzAuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9Ijc0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI3OC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjEwMi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTA2LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxMzQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjE2NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTkyLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxOTYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyMjIuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyMjYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjI1NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjI4NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+dXBkYXRlPC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMzE3IiBjbGFzcz0iZm9udCBzNCB0ZXh0IiB0ZXh0LWFuY2hvcj0iZW5kIj5UZXN0cyB3ZXJlIHJ1biB1c2luZyBOb2RlLmpzIHYxMi4yMi4xPC90ZXh0Pgo8L3N2Zz4K"}}]);