(self.webpackChunk=self.webpackChunk||[]).push([[9514,7425],{2838:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ie});var n=a(7689),i=a(9848),o=a(6735),l=a(5854),r=a(6663),s=a(1424),c=a(2489),u=a(1626),d=a(3879),m=a(6481),b=a(1897),p=a(4755),h=a(3429),f=a(9233),v=a(1799),E=a(7110);const k=function(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var g=a(5655),_=a(1742);const C="sidebar_hLw3",Z="sidebarWithHideableNavbar_7hD-",N="sidebarHidden_3FX2",S="sidebarLogo_3xc-",I="menu_rQmv",y="menuLinkText_1soK",T="menuWithAnnouncementBar_2dZD",w="collapseSidebarButton_oPmU",x="collapseSidebarButtonIcon_3P02",L="sidebarMenuIcon_qPiY",P="sidebarMenuCloseIcon_3Xxh",R="menuLinkExternal_NnHm";var A=["items"],B=["item","onItemClick","collapsible","activePath"],M=["item","onItemClick","activePath","collapsible"];var D=function e(t,a){return"link"===t.type?(0,d.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},H=(0,n.memo)((function(e){var t=e.items,a=(0,c.Z)(e,A);return t.map((function(e,t){return n.createElement(F,(0,s.Z)({key:t,item:e},a))}))}));function F(e){switch(e.item.type){case"category":return n.createElement(O,e);case"link":default:return n.createElement(W,e)}}function O(e){var t,a,i,o=e.item,l=e.onItemClick,r=e.collapsible,d=e.activePath,m=(0,c.Z)(e,B),b=o.items,p=o.label,h=D(o,d),f=(a=h,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),v=(0,n.useState)((function(){return!!r&&(!h&&o.collapsed)})),E=v[0],k=v[1],g=(0,n.useRef)(null),_=(0,n.useState)(void 0),C=_[0],Z=_[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){h&&!f&&E&&k(!1)}),[h,f,E]);var S=(0,n.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:n.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&h},t[y]=!r,t)),onClick:r?S:void 0,href:r?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){E||N(!1)}},n.createElement(H,{items:b,tabIndex:E?"-1":"0",onItemClick:l,collapsible:r,activePath:d})))}function W(e){var t,a=e.item,i=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,c.Z)(e,M)),r=a.href,d=a.label,m=D(a,o);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(f.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[R]=!(0,v.Z)(r),t)),to:r},(0,v.Z)(r)&&{isNavLink:!0,exact:!0,onClick:i},l),d))}function X(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",w),onClick:t},n.createElement(k,{className:x}))}function U(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,u.Z)(L,P)},"\xd7"):n.createElement(g.Z,{className:L,height:24,width:24}))}const Y=function(e){var t,a,i=e.path,o=e.sidebar,l=e.sidebarCollapsible,r=void 0===l||l,s=e.onCollapse,c=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,h.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),v=(0,d.LU)(),k=v.navbar.hideOnScroll,g=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,n.useEffect)((function(){i===p.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),w=y.showResponsiveSidebar,x=y.closeResponsiveSidebar,L=y.toggleResponsiveSidebar;return n.createElement("div",{className:(0,u.Z)(C,(t={},t[Z]=k,t[N]=c,t))},k&&n.createElement(E.Z,{tabIndex:-1,className:S}),n.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":w},a[T]=!_&&f,a))},n.createElement(U,{responsiveSidebarOpened:w,onClick:L}),n.createElement("ul",{className:"menu__list"},n.createElement(H,{items:o,onItemClick:x,collapsible:r,activePath:i}))),g&&n.createElement(X,{onClick:s}))};var z=a(6784),K=a(7425),q=a(5762);const Q="docPage_10tT",j="docMainContainer_2TNu",G="docMainContainerEnhanced_3ytB",J="docSidebarContainer_3DCa",V="docSidebarContainerHidden_fSZd",$="collapsedDocSidebar_19S2",ee="expandSidebarButtonIcon_1mvY",te="docItemWrapperEnhanced_1SOf",ae="docItemWrapper_3lpX";function ne(e){var t,a,l,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,o.default)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,g=b.permalinkToSidebar,C=b.docsSidebars,Z=b.version,N=g[m.path],S=C[N],I=(0,n.useState)(!1),y=I[0],T=I[1],w=(0,n.useState)(!1),x=w[0],L=w[1],P=(0,n.useCallback)((function(){x&&L(!1),T(!y)}),[x]);return n.createElement(r.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},n.createElement("div",{className:Q},S&&n.createElement("div",{className:(0,u.Z)(J,(t={},t[V]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J)&&y&&L(!0)},role:"complementary"},n.createElement(Y,{key:N,sidebar:S,path:m.path,sidebarCollapsible:null==(a=null==(l=f.themeConfig)?void 0:l.sidebarCollapsible)||a,onCollapse:P,isHidden:x}),x&&n.createElement("div",{className:$,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},n.createElement(k,{className:ee}))),n.createElement("main",{className:(0,u.Z)(j,(s={},s[G]=y||!S,s))},n.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ae,(c={},c[te]=y,c))},n.createElement(i.Zo,{components:z.Z},p)))))}const ie=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,o=t.find((function(e){return(0,q.LX)(i.pathname,e)}));return o?n.createElement(ne,{currentDocRoute:o,versionMetadata:a},(0,l.Z)(t)):n.createElement(K.default,e)}},7425:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(7689),i=a(6663),o=a(1742);const l=function(){return n.createElement(i.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);