(self.webpackChunk=self.webpackChunk||[]).push([[8978],{9848:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>o,kt:()=>u});var t=n(7689);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=t.createContext({}),k=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},o=function(e){var a=k(e.components);return t.createElement(d.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=k(n),u=l,c=m["".concat(d,".").concat(u)]||m[u]||s[u]||r;return n?t.createElement(c,i(i({ref:a},o),{},{components:n})):t.createElement(c,i({ref:a},o))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6451:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>p,metadata:()=>d,toc:()=>k,default:()=>s});var t=n(1424),l=n(2489),r=(n(7689),n(9848)),i=["components"],p={id:"add",title:"pnpm add <pkg>"},d={unversionedId:"cli/add",id:"version-6.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. Varsay\u0131lan olarak, herhangi bir yeni paket bir sunum ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 olarak y\xfcklenir.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/tr/cli/add",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-6.x/docs",previous:{title:"Filtering",permalink:"/tr/filtering"},next:{title:"pnpm install",permalink:"/tr/cli/install"}},k=[{value:"TL;DR",id:"tldr",children:[]},{value:"Desteklenen paket konumlar\u0131",id:"desteklenen-paket-konumlar\u0131",children:[{value:"Npm kay\u0131t defterinden y\xfckleyin",id:"npm-kay\u0131t-defterinden-y\xfckleyin",children:[]},{value:"\xc7al\u0131\u015fma alan\u0131ndan y\xfckleyin",id:"\xe7al\u0131\u015fma-alan\u0131ndan-y\xfckleyin",children:[]},{value:"Yerel dosya sisteminden y\xfckleyin",id:"yerel-dosya-sisteminden-y\xfckleyin",children:[]},{value:"Uzak tarball&#39;dan y\xfckle",id:"uzak-tarballdan-y\xfckle",children:[]},{value:"Git deposundan y\xfckleyin",id:"git-deposundan-y\xfckleyin",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:k};function s(e){var a=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. Varsay\u0131lan olarak, herhangi bir yeni paket bir sunum ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 olarak y\xfcklenir."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dependencies")," k\u0131sm\u0131na kaydet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies")," k\u0131sm\u0131na kaydet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies")," k\u0131sm\u0131na kaydet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"next")," etiketinden kaydet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"S\xfcr\xfcm belirt ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,r.kt)("h2",{id:"desteklenen-paket-konumlar\u0131"},"Desteklenen paket konumlar\u0131"),(0,r.kt)("h3",{id:"npm-kay\u0131t-defterinden-y\xfckleyin"},"Npm kay\u0131t defterinden y\xfckleyin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add paket-ismi"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paket-ismi")," paketinin son s\xfcr\xfcm\xfcn\xfc varsay\u0131lan olarak ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm kay\u0131t defterinden")," y\xfckler. Paketi ba\u015fka kay\u0131t defterinden y\xfcklemek i\xe7in tarball dosyas\u0131n\u0131n linkini kullanabilirsiniz (bkz. ",(0,r.kt)("a",{parentName:"p",href:"#install-from-remote-tarball"},"ilgili rehber"),")."),(0,r.kt)("p",null,"Paketleri \u015fu \u015fekilde de kurabilirsiniz:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"etiket: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0<0.2.0"'))),(0,r.kt)("h3",{id:"\xe7al\u0131\u015fma-alan\u0131ndan-y\xfckleyin"},"\xc7al\u0131\u015fma alan\u0131ndan y\xfckleyin"),(0,r.kt)("p",null,"Note that when adding dependencies and working within a ",(0,r.kt)("a",{parentName:"p",href:"/tr/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,r.kt)("a",{parentName:"p",href:"/tr/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,r.kt)("a",{parentName:"p",href:"/tr/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,r.kt)("h3",{id:"yerel-dosya-sisteminden-y\xfckleyin"},"Yerel dosya sisteminden y\xfckleyin"),(0,r.kt)("p",null,"Yerel dosya sisteminden y\xfcklemenin iki yolu vard\u0131r:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"tarball dosyas\u0131ndan (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz")," veya ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"dizinden")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"Bir dizinden kurulum yapt\u0131\u011f\u0131n\u0131zda, ge\xe7erli projenin ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," k\u0131sm\u0131nda bir sembolik ba\u011flant\u0131 olu\u015fturulacakt\u0131r, bu nedenle ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link")," komutunu \xe7al\u0131\u015ft\u0131rmakla ayn\u0131d\u0131r."),(0,r.kt)("h3",{id:"uzak-tarballdan-y\xfckle"},"Uzak tarball'dan y\xfckle"),(0,r.kt)("p",null,'Arg\xfcman "http://" ya da "https://" ile ba\u015flayan \xe7ekilebilir bir URL olmal\u0131d\u0131r.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"git-deposundan-y\xfckleyin"},"Git deposundan y\xfckleyin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"Paketi, Git ile klonlayarak bar\u0131nd\u0131r\u0131lan Git sa\u011flay\u0131c\u0131s\u0131ndan y\xfckler. Belirli Git sa\u011flay\u0131c\u0131lar\u0131 i\xe7in bir protokol kullanabilirsiniz. \xd6rne\u011fin ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add github:kullan\u0131c\u0131/repo")),(0,r.kt)("p",null,"Git'ten \u015fu \u015fekilde kurabilirsiniz:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"master'dan son commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"bran\u015f: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"Belirtilen paketleri ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," k\u0131sm\u0131na kurar."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Belirtilen paketleri ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131na kurar."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Belirtilen paketleri ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131na kurar."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Kaydedilen ba\u011f\u0131ml\u0131l\u0131klar, pnpm'in varsay\u0131lan anlamsal s\xfcr\xfcmlendirme aral\u0131\u011f\u0131 i\u015flecini kullanmak yerine tam bir s\xfcr\xfcmle yap\u0131land\u0131r\u0131lacakt\u0131r."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Added in: v3.2.0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," kullanmak bir veya birden fazla paketi ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," k\u0131sm\u0131na ekler ve geli\u015ftirici gereklili\u011fi olarak kurar."),(0,r.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,r.kt)("p",null,"v3.6.0 ile eklendi"),(0,r.kt)("p",null,"K\xf6k \xe7al\u0131\u015fma alan\u0131na yeni ba\u011f\u0131ml\u0131l\u0131k eklerken ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," ya da ",(0,r.kt)("inlineCode",{parentName:"p"},"-W")," bayra\u011f\u0131 kullan\u0131lmazsa hata verir."),(0,r.kt)("p",null,"\xd6rne\u011fin, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,r.kt)("h3",{id:"--global"},"--global"),(0,r.kt)("p",null,"Global olarak bir paket y\xfckler."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"Yeni ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 yaln\u0131zca \xe7al\u0131\u015fma alan\u0131nda bulunursa ekler."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);