(self.webpackChunk=self.webpackChunk||[]).push([[9221],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>c});var l=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),c=a,m=k["".concat(s,".").concat(c)]||k[c]||d[c]||r;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8319:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>k});var l=n(2791),a=n(9698),r=(n(7689),n(9848)),i=["components"],o={id:"npmrc",title:".npmrc",original_id:"npmrc"},s=void 0,p={unversionedId:"npmrc",id:"version-4.x/npmrc",isDocsHomePage:!1,title:".npmrc",description:"pnpm gets its config settings from the command line, environment variables, and .npmrc files.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/npmrc.md",sourceDirName:".",slug:"/npmrc",permalink:"/es/4.x/npmrc",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",frontMatter:{id:"npmrc",title:".npmrc",original_id:"npmrc"},sidebar:"version-4.x/docs",previous:{title:"package.json",permalink:"/es/4.x/package_json"},next:{title:"pnpm-workspace.yaml",permalink:"/es/4.x/pnpm-workspace_yaml"}},u=[{value:"Settings",id:"settings",children:[{value:"always-auth",id:"always-auth",children:[]},{value:"ca",id:"ca",children:[]},{value:"cafile",id:"cafile",children:[]},{value:"cert",id:"cert",children:[]},{value:"color",id:"color",children:[]},{value:"store-dir",id:"store-dir",children:[]},{value:"modules-dir",id:"modules-dir",children:[]},{value:"network-concurrency",id:"network-concurrency",children:[]},{value:"child-concurrency",id:"child-concurrency",children:[]},{value:"lock",id:"lock",children:[]},{value:"loglevel",id:"loglevel",children:[]},{value:"independent-leaves",id:"independent-leaves",children:[]},{value:"verify-store-integrity",id:"verify-store-integrity",children:[]},{value:"virtual-store-dir",id:"virtual-store-dir",children:[]},{value:"package-import-method",id:"package-import-method",children:[]},{value:"publish-branch",id:"publish-branch",children:[]},{value:"lockfile",id:"lockfile",children:[]},{value:"prefer-frozen-lockfile",id:"prefer-frozen-lockfile",children:[]},{value:"use-running-store-server",id:"use-running-store-server",children:[]},{value:"side-effects-cache",id:"side-effects-cache",children:[]},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",children:[]},{value:"hoist",id:"hoist",children:[]},{value:"hoist-pattern",id:"hoist-pattern",children:[]},{value:"shamefully-hoist",id:"shamefully-hoist",children:[]},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",children:[]},{value:"resolution-strategy",id:"resolution-strategy",children:[]},{value:"use-beta-cli",id:"use-beta-cli",children:[]},{value:"engine-strict",id:"engine-strict",children:[]},{value:"fetch-retries",id:"fetch-retries",children:[]},{value:"fetch-retry-factor",id:"fetch-retry-factor",children:[]},{value:"fetch-retry-mintimeout",id:"fetch-retry-mintimeout",children:[]},{value:"fetch-retry-maxtimeout",id:"fetch-retry-maxtimeout",children:[]},{value:"https-proxy",id:"https-proxy",children:[]},{value:"key",id:"key",children:[]},{value:"local-address",id:"local-address",children:[]},{value:"proxy",id:"proxy",children:[]},{value:"registry",id:"registry",children:[]},{value:"save-prefix",id:"save-prefix",children:[]},{value:"strict-ssl",id:"strict-ssl",children:[]},{value:"tag",id:"tag",children:[]},{value:"unsafe-perm",id:"unsafe-perm",children:[]},{value:"git-checks",id:"git-checks",children:[]},{value:"global-dir",id:"global-dir",children:[]},{value:"npm-path",id:"npm-path",children:[]}]}],d={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm gets its config settings from the command line, environment variables, and ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm config")," command can be used to update and edit the contents of the user and global ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," files."),(0,r.kt)("p",null,"The four relevant files are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"per-project config file (/path/to/my/project/.npmrc)"),(0,r.kt)("li",{parentName:"ul"},"per-workspace config file (the directory that contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm-workspace.yaml")," file)"),(0,r.kt)("li",{parentName:"ul"},"per-user config file (",(0,r.kt)("inlineCode",{parentName:"li"},"~/.npmrc"),")"),(0,r.kt)("li",{parentName:"ul"},"global config file (",(0,r.kt)("inlineCode",{parentName:"li"},"$PREFIX/etc/npmrc"),")")),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," files are an ini-formatted list of ",(0,r.kt)("inlineCode",{parentName:"p"},"key = value")," parameters."),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("h3",{id:"always-auth"},"always-auth"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Force pnpm to always require authentication when accessing the registry, even for GET requests."),(0,r.kt)("h3",{id:"ca"},"ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"The npm CA certificate")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String, Array or null"))),(0,r.kt)("p",null,'The Certificate Authority signing certificate that is trusted for SSL connections to the registry. Values should be in PEM format (Windows calls it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string "\\n". For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'ca="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),(0,r.kt)("p",null,'Set to null to only allow "known" registrars, or to a specific CA cert to trust only that specific signing authority.'),(0,r.kt)("p",null,"Multiple CAs can be trusted by specifying an array of certificates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-test"},'ca[]="..."\nca[]="..."\n')),(0,r.kt)("p",null,"See also the ",(0,r.kt)("inlineCode",{parentName:"p"},"strict-ssl")," config."),(0,r.kt)("h3",{id:"cafile"},"cafile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"A path to a file containing one or multiple Certificate Authority signing certificates. Similar to the ca setting, but allows for multiple CA\u2019s, as well as for the CA information to be stored in a file on disk."),(0,r.kt)("h3",{id:"cert"},"cert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,'A client certificate to pass when accessing the registry. Values should be in PEM format (Windows calls it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string "\\n". For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-test"},'cert="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),(0,r.kt)("p",null,'It is not the path to a certificate file (and there is no "certfile" option).'),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("p",null,"Added in: v4.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"auto")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"auto"),", ",(0,r.kt)("strong",{parentName:"li"},"always"),", ",(0,r.kt)("strong",{parentName:"li"},"never"))),(0,r.kt)("p",null,"Controls colors in the output."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"auto")," - output uses colors when the stdout is a TTY (i.e. when the output goes straight to a terminal)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"always")," - ignore the difference between terminals and pipes. You\u2019ll rarely want this; in most scenarios, if you want color codes in your redirected output, you can instead pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"--color")," flag to the pnpm command to force it to use color codes. The default setting is almost always what you\u2019ll want."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"never")," - turns off colors. You can also turn off colors via the ",(0,r.kt)("inlineCode",{parentName:"li"},"--no-color")," flag.")),(0,r.kt)("h3",{id:"store-dir"},"store-dir"),(0,r.kt)("p",null,"Added in: v4.2.0 (renamed from ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"~/.pnpm-store")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The location where all the packages are saved on the disk."),(0,r.kt)("p",null,"The store should be always on the same disk on which installation is happening. So there will be one store per disk. If there is a home directory on the current disk, then the store is created in ",(0,r.kt)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no homedir on the disk, then the store is created in the root. For example, if installation is happening on disk ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," then the store will be created in ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,r.kt)("p",null,"It is possible to set a store from a different disk but in that case pnpm will copy, not link, packages from the store. Hard links are possible only inside a filesystem."),(0,r.kt)("h3",{id:"modules-dir"},"modules-dir"),(0,r.kt)("p",null,"Added in: v4.14.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"node_modules")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The directory in which dependencies will be installed (instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),")."),(0,r.kt)("h3",{id:"network-concurrency"},"network-concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"16")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,"Controls the maximum number of HTTP requests that can be done simultaneously."),(0,r.kt)("h3",{id:"child-concurrency"},"child-concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"5")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,"Controls the number of child processes run parallelly to build node modules."),(0,r.kt)("h3",{id:"lock"},"lock"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Dangerous! If false, the store is not locked. It means that several installations using the same store can run simultaneously."),(0,r.kt)("p",null,"Can be passed in via a CLI option. ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-lock")," to set it to false. E.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install --no-lock"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you experience issues similar to the ones described in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/594"},"#594"),", use this option to disable locking. In the meanwhile, we'll try to find a solution that will make locking work for everyone.")),(0,r.kt)("h3",{id:"loglevel"},"loglevel"),(0,r.kt)("p",null,"Added in: v4.13.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"info")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"debug"),", ",(0,r.kt)("strong",{parentName:"li"},"info"),", ",(0,r.kt)("strong",{parentName:"li"},"warn"),", ",(0,r.kt)("strong",{parentName:"li"},"error"))),(0,r.kt)("p",null,"What level of logs to report. Any logs at or higher than the given level will be shown. Or use ",(0,r.kt)("inlineCode",{parentName:"p"},"--silent")," to turn off all logging."),(0,r.kt)("h3",{id:"independent-leaves"},"independent-leaves"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If true, symlinks leaf dependencies directly from the global store. Leaf dependencies are packages that have no dependencies of their own. Setting this config to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," might break some packages that rely on location but gives an average of ",(0,r.kt)("strong",{parentName:"p"},"8% installation speed improvement"),"."),(0,r.kt)("h3",{id:"verify-store-integrity"},"verify-store-integrity"),(0,r.kt)("p",null,"Added in: v1.8.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If false, doesn't check whether packages in the store were mutated."),(0,r.kt)("h3",{id:"virtual-store-dir"},"virtual-store-dir"),(0,r.kt)("p",null,"Added in: v4.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"node_modules/.pnpm")),(0,r.kt)("li",{parentName:"ul"},"Types: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The directory with links to the store. All direct and indirect dependencies of the project are linked into this directory."),(0,r.kt)("p",null,"This is a useful setting that can solve issues with long paths on Windows. If you have some dependencies with very long paths, you can select a virtual store in the root of your drive (for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\my-project-store"),")."),(0,r.kt)("p",null,"Or you can set the virtual store to ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," and add it to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),". This will make the stacktraces nicer as paths to dependencies will have one directory less."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," the virtual store cannot be shared between several projects. Every project should have its own virtual store."),(0,r.kt)("h3",{id:"package-import-method"},"package-import-method"),(0,r.kt)("p",null,"Added in: v1.25.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"auto")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"auto"),", ",(0,r.kt)("strong",{parentName:"li"},"hardlink"),", ",(0,r.kt)("strong",{parentName:"li"},"copy"),", ",(0,r.kt)("strong",{parentName:"li"},"clone"))),(0,r.kt)("p",null,"Controls the way packages are imported from the store."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"auto")," - try to clone packages from the store. If cloning is not supported then hardlink packages from the store. If neither cloning nor linking is possible, falls back to copying"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hardlink")," - hardlink packages from the store"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"copy")," - copy packages from the store"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clone")," - clone (aka copy-on-write or reflink) packages from the store")),(0,r.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,r.kt)("p",null,"Added in: v4.11.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"master")),(0,r.kt)("li",{parentName:"ul"},"Types: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,"The main branch of the repository which is used for publishing the latest changes."),(0,r.kt)("h3",{id:"lockfile"},"lockfile"),(0,r.kt)("p",null,"Added in: v1.32.0 (initially named ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file."),(0,r.kt)("h3",{id:"prefer-frozen-lockfile"},"prefer-frozen-lockfile"),(0,r.kt)("p",null,"Added in: v1.37.1 (initially named ",(0,r.kt)("inlineCode",{parentName:"p"},"prefer-frozen-shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")," (from v1.38.0)"),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the available ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," satisfies the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," then a headless installation is performed. A headless installation is faster than a regular one because it skips dependencies resolution and peers resolution."),(0,r.kt)("h3",{id:"use-running-store-server"},"use-running-store-server"),(0,r.kt)("p",null,"Added in: v2.5.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Only allows installation with a store server. If no store server is running, installation will fail."),(0,r.kt)("h3",{id:"side-effects-cache"},"side-effects-cache"),(0,r.kt)("p",null,"Added in: v1.31.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stability: Experimental")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Use and cache the results of (pre/post)install hooks."),(0,r.kt)("h3",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),(0,r.kt)("p",null,"Added in: v1.31.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stability: Experimental")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Only use the side effects cache if present, do not create it for new packages."),(0,r.kt)("h3",{id:"hoist"},"hoist"),(0,r.kt)("p",null,"Added in: v4.0.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", all dependencies are hoisted to ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". This makes unlisted dependencies accessible to all packages inside ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,r.kt)("h3",{id:"hoist-pattern"},"hoist-pattern"),(0,r.kt)("p",null,"Added in: v4.0.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"['","*","']")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"string[]"))),(0,r.kt)("p",null,"Tells pnpm, which packages should be hoisted to ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". By default, all packages are hoisted. However, if you know that only some buggy packages are requiring unlisted dependencies, you may hoist just them."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hoist-pattern[]=*eslint*\nhoist-pattern[]=*babel*\n")),(0,r.kt)("h3",{id:"shamefully-hoist"},"shamefully-hoist"),(0,r.kt)("p",null,"Added in: v1.34.0 (Renamed from ",(0,r.kt)("inlineCode",{parentName:"p"},"shamefully-flatten")," in v4.0.0)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"By default, pnpm creates a semistrict ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". It means that your dependencies have access to undeclared dependencies but your code does not. With this layout, most of the packages in the ecosystem work with no issues. However, if some tooling only works when the hoisted dependencies are in the root of ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", you can set this config to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),(0,r.kt)("p",null,"Added in: v2.15.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If true, commands fail on missing or invalid peer dependencies."),(0,r.kt)("h3",{id:"resolution-strategy"},"resolution-strategy"),(0,r.kt)("p",null,"Added in: v3.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"fewer-dependencies")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"fast"),", ",(0,r.kt)("strong",{parentName:"li"},"fewer-dependencies"))),(0,r.kt)("p",null,"Sets the resolutions strategy used during installation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fewer-dependencies")," - the default resolution strategy. Already installed dependencies are preferred even if newer versions satisfy a range"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fast")," - speed is preferred over deduplication")),(0,r.kt)("h3",{id:"use-beta-cli"},"use-beta-cli"),(0,r.kt)("p",null,"Added in: v3.6.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", beta features of the CLI are used. This means that you may get some changes to the CLI functionality that are breaking changes."),(0,r.kt)("h3",{id:"engine-strict"},"engine-strict"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If set to true, then pnpm will stubbornly refuse to install (or even consider installing) any package that claims to not be compatible with the current Node.js version."),(0,r.kt)("p",null,"Regardless of this config, installation will always fail when a project (not a dependency) will specify an incompatible pnpm version in its ",(0,r.kt)("inlineCode",{parentName:"p"},"engines")," field."),(0,r.kt)("h3",{id:"fetch-retries"},"fetch-retries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"2")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,'The "retries" config for the retry module to use when fetching packages from the registry.'),(0,r.kt)("h3",{id:"fetch-retry-factor"},"fetch-retry-factor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"10")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,'The "factor" config for the retry module to use when fetching packages.'),(0,r.kt)("h3",{id:"fetch-retry-mintimeout"},"fetch-retry-mintimeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"10000 (10 seconds)")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,'The "minTimeout" config for the retry module to use when fetching packages.'),(0,r.kt)("h3",{id:"fetch-retry-maxtimeout"},"fetch-retry-maxtimeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"60000 (1 minute)")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Number"))),(0,r.kt)("p",null,'The "maxTimeout" config for the retry module to use when fetching packages.'),(0,r.kt)("h3",{id:"https-proxy"},"https-proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"url"))),(0,r.kt)("p",null,"A proxy to use for outgoing https requests. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"https_proxy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"http_proxy")," environment variables are set, proxy settings will be honored by the underlying request library."),(0,r.kt)("h3",{id:"key"},"key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,'A client key to pass when accessing the registry. Values should be in PEM format with newlines replaced by the string "\\n". For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'key="-----BEGIN PRIVATE KEY-----\\nXXXX\\nXXXX\\n-----END PRIVATE KEY-----"\n')),(0,r.kt)("p",null,'It is not the path to a key file (and there is no "keyfile" option).'),(0,r.kt)("h3",{id:"local-address"},"local-address"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"IP Address"))),(0,r.kt)("p",null,"The IP address of the local interface to use when making connections to the npm registry. Must be IPv4 in versions of Node prior to 0.12."),(0,r.kt)("h3",{id:"proxy"},"proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"url"))),(0,r.kt)("p",null,"A proxy to use for outgoing http requests. If the HTTP_PROXY or http_proxy environment variables are set, proxy settings will be honored by the underlying request library."),(0,r.kt)("h3",{id:"registry"},"registry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/"))),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"url"))),(0,r.kt)("p",null,"The base URL of the npm package registry."),(0,r.kt)("h3",{id:"save-prefix"},"save-prefix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"'^'")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,"Configure how versions of packages installed to a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file get prefixed."),(0,r.kt)("p",null,"For example, if a package has version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.3"),", by default its version is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"^1.2.3")," which allows minor upgrades for that package, but after ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm config set save-prefix='~'")," it would be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"~1.2.3")," which only allows patch upgrades."),(0,r.kt)("p",null,"This config is ignored when the added package has a range specified. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add foo@2")," will add ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", regardless of the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"save-prefix"),"."),(0,r.kt)("h3",{id:"strict-ssl"},"strict-ssl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Whether or not to do SSL key validation when making requests to the registry via https."),(0,r.kt)("p",null,"See also the ",(0,r.kt)("inlineCode",{parentName:"p"},"ca")," config."),(0,r.kt)("h3",{id:"tag"},"tag"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"latest")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,"If you ask pnpm to install a package and don\u2019t tell it a specific version, then it will install the specified tag."),(0,r.kt)("p",null,"Also the tag that is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"package@version")," specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm tag")," command, if no explicit tag is given."),(0,r.kt)("h3",{id:"unsafe-perm"},"unsafe-perm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false if running as root, true otherwise")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Set to true to suppress the UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail."),(0,r.kt)("h3",{id:"git-checks"},"git-checks"),(0,r.kt)("p",null,"Added in: v4.11.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default : ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When true, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm publish")," checks if current branch is your publish branch (master by default), clean, and up-to-date."),(0,r.kt)("h3",{id:"global-dir"},"global-dir"),(0,r.kt)("p",null,"Added in: v4.2.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"<","Node path>/pnpm-global")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"Specify a custom directory to store global packages."),(0,r.kt)("h3",{id:"npm-path"},"npm-path"),(0,r.kt)("p",null,"Added in: v4.8.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The location of the npm binary that pnpm uses for some actions (like publishing)."))}k.isMDXComponent=!0}}]);