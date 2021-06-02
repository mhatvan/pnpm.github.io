(self.webpackChunk=self.webpackChunk||[]).push([[6103],{8854:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(7689),r=a(1626),l=a(9848),i=a(1742),s=a(9233),o=a(6784),m=a(9022);const c="blogPostTitle_AVF7",d="blogPostDate_3KPR";var u=a(3879);const g=function(e){var t,a,g=(t=(0,u.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),v=e.children,p=e.frontMatter,E=e.metadata,h=e.truncated,b=e.isBlogPostPage,_=void 0!==b&&b,f=E.date,N=E.formattedDate,Z=E.permalink,k=E.tags,w=E.readingTime,T=p.author,I=p.title,L=p.image,P=p.keywords,C=p.author_url||p.authorURL,x=p.author_title||p.authorTitle,M=p.author_image_url||p.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:P,image:L}),n.createElement("article",{className:_?void 0:"margin-bottom--xl"},(a=_?"h1":"h2",n.createElement("header",null,n.createElement(a,{className:(0,r.Z)("margin-bottom--sm",c)},_?I:n.createElement(s.Z,{to:Z},I)),n.createElement("div",{className:"margin-vert--md"},n.createElement("time",{dateTime:f,className:d},N,w&&n.createElement(n.Fragment,null," \xb7 ",g(w)))),n.createElement("div",{className:"avatar margin-vert--md"},M&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:C},n.createElement("img",{src:M,alt:T})),n.createElement("div",{className:"avatar__intro"},T&&n.createElement(n.Fragment,null,n.createElement("h4",{className:"avatar__name"},n.createElement(s.Z,{href:C},T)),n.createElement("small",{className:"avatar__subtitle"},x)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},v)),(k.length>0||h)&&n.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.createElement("div",{className:"col"},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),h&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:E.permalink,"aria-label":"Read more about "+I},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},266:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var n=a(7689),r=a(6663),l=a(8854),i=a(1742),s=a(9233);const o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var m=a(1884),c=a(2293),d=a(5987),u=a(3879);const g=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,s=t.metadata,g=s.title,v=s.description,p=s.nextItem,E=s.prevItem,h=s.editUrl,b=i.hide_table_of_contents;return n.createElement(r.Z,{title:g,description:v,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(m.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(l.Z,{frontMatter:i,metadata:s,isBlogPostPage:!0},n.createElement(t,null)),n.createElement("div",null,h&&n.createElement(d.Z,{editUrl:h})),(p||E)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement(o,{nextItem:p,prevItem:E}))),!b&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(c.Z,{toc:t.toc})))))}},1884:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(7689),r=a(1626),l=a(9233);const i="sidebar_1UcC",s="sidebarItemTitle_2E0M",o="sidebarItemList_1_Yt",m="sidebarItem_2fVW",c="sidebarItemLink_MiY7",d="sidebarItemLinkActive_1REc";function u(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement("h3",{className:s},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},5987:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(7689),r=a(1742),l=a(1424),i=a(2489),s=a(1626);const o="iconEdit_3awo";var m=["className"];const c=function(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-label":"Edit page"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(c,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2293:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(7689),r=a(1626);const l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var m=o[r],c=m.href,d=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),m.classList.add(t),i(m),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_3q6Y";var s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}const m=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);