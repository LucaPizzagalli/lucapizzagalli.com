"use strict";(self.webpackChunkluca_pizzagalli_website=self.webpackChunkluca_pizzagalli_website||[]).push([[647],{731:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),r=n(1883);var a=function(e){let{title:t,description:n,pathname:a}=e,i=(0,r.useStaticQuery)("689148933"),{title:c,description:m,image:o,siteUrl:u}=i.site.siteMetadata,s={title:t||c,description:n||m,image:""+u+o,url:""+u+(a||"")};return l.createElement(l.Fragment,null,l.createElement("title",null,s.title),l.createElement("meta",{name:"description",content:s.description}),l.createElement("meta",{name:"image",content:s.image}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:s.title}),l.createElement("meta",{name:"twitter:url",content:s.url}),l.createElement("meta",{name:"twitter:description",content:s.description}),l.createElement("meta",{name:"twitter:image",content:s.image}),l.createElement("meta",{name:"twitter:creator",content:s.twitterUsername}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}))};var i=function(e){let{title:t,description:n,pathname:r,children:i}=e;return l.createElement(l.Fragment,null,l.createElement(a,{title:t,description:n,pathname:r}),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},l.createElement("defs",null,l.createElement("filter",{id:"retro-image-filter",filterUnits:"objectBoundingBox",primitiveUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},l.createElement("feColorMatrix",{type:"matrix",values:" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0s 0 0 0 1 0",in:"SourceGraphic"}),l.createElement("feComponentTransfer",null," ",l.createElement("feFuncR",{type:"table",tableValues:"0.4 0"})," ",l.createElement("feFuncG",{type:"table",tableValues:"0.4 1"}),l.createElement("feFuncB",{type:"table",tableValues:"0.4 0.44"})," ",l.createElement("feFuncA",{type:"table",tableValues:"0 1"})," "),l.createElement("feBlend",{in2:"SourceGraphic",mode:"hue"})),l.createElement("filter",{id:"noise2-filter",x:"-10%",y:"-10%",width:"120%",height:"120%"},l.createElement("feTurbulence",{baseFrequency:"0.01 0.4",result:"turbulence",numOctaves:"2"}),l.createElement("feDisplacementMap",{in:"SourceGraphic",in2:"turbulence",scale:"12",xChannelSelector:"R",yChannelSelector:"R"})),l.createElement("filter",{id:"noise-filter"},l.createElement("feTurbulence",{baseFrequency:"0.60,0.90"}),l.createElement("feColorMatrix",{type:"matrix",values:" .33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 2 0"}),l.createElement("feComposite",{operator:"in",in2:"SourceGraphic"}),l.createElement("feBlend",{in2:"SourceGraphic",mode:"multiply"})))),i)}},8678:function(e,t,n){var l=n(7294),r=n(7827);t.Z=function(e){let{loop:t,location:n,children:a}=e;return l.createElement("div",{className:"page"},l.createElement(r.Z,{loop:t,location:n}),l.createElement("main",null,a))}},7827:function(e,t,n){var l=n(1883),r=n(7294);let a=[{title:"Home",url:"/",folder:""},{title:"Things",url:"/things",folder:"things"},{title:"Words",url:"/words",folder:"words"},{title:"About",url:"/about",folder:"about"}];t.Z=function(e){let{location:t,loop:n=!1,foldable:i=!1}=e,{0:c,1:m}=(0,r.useState)(!0),o=t.split("/")[1];return n&&36===n.level?r.createElement("menu",null,a.map((e=>r.createElement("li",{key:e.url},r.createElement(l.Link,{to:"/the-void"},e.title))))):n&&n.level>0?r.createElement("menu",null,a.map((e=>r.createElement("li",{key:e.url},r.createElement("a",{href:()=>!1,onClick:()=>{n.setUrl(e.url)},style:e.folder===o?{cursor:"pointer",color:"var(--highlight-color)"}:{cursor:"pointer"}},e.title))))):i&&c?r.createElement("menu",{style:{minWidth:"20px"}},r.createElement("button",{class:"menu",onClick:()=>{m(!1)}},r.createElement("span",{hidden:!0},"menu"))):r.createElement("menu",null,a.map((e=>r.createElement("li",{key:e.url},r.createElement(l.Link,{to:e.url,style:e.folder===o?{color:"var(--highlight-color)"}:{}},e.title)))))}},4927:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i}});var l=n(7294),r=n(8678),a=n(731);function i(e){let{data:t}=e,n=t.markdownRemark.frontmatter;return l.createElement(a.Z,{title:n.title,description:n.excerpt})}t.default=function(e){let{data:t}=e,{frontmatter:n,html:a}=t.markdownRemark;return l.createElement(r.Z,{location:n.url},l.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))}}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-js-c7aa304b39fddbbeca7b.js.map