"use strict";(self.webpackChunkluca_pizzagalli_website=self.webpackChunkluca_pizzagalli_website||[]).push([[647],{731:function(e,t,l){l.d(t,{Z:function(){return i}});var n=l(7294),a=l(1883);var r=function(e){let{title:t,description:l,pathname:r}=e,i=(0,a.useStaticQuery)("689148933"),{title:m,description:c,image:o,siteUrl:s}=i.site.siteMetadata,u={title:t||m,description:l||c,image:""+s+o,url:""+s+(r||"")};return n.createElement(n.Fragment,null,n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:u.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:u.title}),n.createElement("meta",{name:"twitter:url",content:u.url}),n.createElement("meta",{name:"twitter:description",content:u.description}),n.createElement("meta",{name:"twitter:image",content:u.image}),n.createElement("meta",{name:"twitter:creator",content:u.twitterUsername}),n.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}))};var i=function(e){let{title:t,description:l,pathname:a,children:i}=e;return n.createElement(n.Fragment,null,n.createElement(r,{title:t,description:l,pathname:a}),i)}},8678:function(e,t,l){var n=l(7294),a=l(7827);t.Z=function(e){let{loop:t,location:l,children:r}=e;return n.createElement("div",{className:"page"},n.createElement("main",null,r),n.createElement(a.Z,{loop:t,location:l}))}},7827:function(e,t,l){var n=l(1883),a=l(7294);let r=[{title:"Home",url:"/",folder:""},{title:"Things",url:"/things",folder:"things"},{title:"Words",url:"/words",folder:"words"},{title:"About",url:"/about",folder:"about"}];t.Z=function(e){let{location:t,loop:l=!1,foldable:i=!1,menuTheme:m=""}=e,{0:c,1:o}=(0,a.useState)(i),s=t.split("/")[1];return l&&36===l.level?a.createElement("div",{className:"website-menu"},a.createElement("menu",null,r.map((e=>a.createElement("li",{key:e.url},a.createElement(n.Link,{to:"/the-void"},e.title)))))):l&&l.level>0?a.createElement("div",{className:"website-menu"},a.createElement("menu",null,r.map((e=>a.createElement("li",{key:e.url},a.createElement("a",{href:()=>!1,onClick:()=>{l.setUrl(e.url)},style:e.folder===s?{cursor:"pointer",color:"var(--highlight-color)"}:{cursor:"pointer"}},e.title)))))):i?a.createElement("div",{key:c,className:m+" website-menu-wrapper "+(c?"reverse":"")},a.createElement("div",{className:"website-menu sliding-text-wrapper"},a.createElement("menu",{className:"sliding-text"},r.map((e=>a.createElement("li",{key:e.url},a.createElement(n.Link,{to:e.url,style:e.folder===s?{color:"inherit"}:{}},e.title)))))),a.createElement("button",{className:"menu-circle",onClick:()=>o(!1)},a.createElement("div",{className:"menu-half-circle-wrapper",style:{clipPath:"inset(0 50% 0 0)"}},a.createElement("div",{className:"menu-half-circle left-animated",style:{animationName:"animation-circle-left"}})),a.createElement("div",{className:"menu-half-circle-wrapper",style:{clipPath:"inset(0 0 0 50%)"}},a.createElement("div",{className:"menu-half-circle right-animated",style:{animationName:"animation-circle-right"}}))),a.createElement("button",{className:"menu-line",onClick:()=>o(!0)},a.createElement("div",{className:"menu-inner-line"}),a.createElement("span",{hidden:!0},"Close Menu"))):a.createElement("div",{className:"website-menu"},a.createElement("menu",null,r.map((e=>a.createElement("li",{key:e.url},a.createElement(n.Link,{to:e.url,style:e.folder===s?{color:"var(--highlight-color)"}:{}},e.title))))))}},4927:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i}});var n=l(7294),a=l(8678),r=l(731);function i(e){let{data:t}=e,l=t.markdownRemark.frontmatter;return n.createElement(r.Z,{title:l.title,description:l.excerpt})}t.default=function(e){let{data:t}=e,{frontmatter:l,html:r}=t.markdownRemark;return n.createElement(a.Z,{location:l.url},n.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))}}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-js-8fdc851a26367ecf0e94.js.map