"use strict";(self.webpackChunkluca_pizzagalli_website=self.webpackChunkluca_pizzagalli_website||[]).push([[682],{731:function(e,t,l){l.d(t,{Z:function(){return i}});var n=l(7294),r=l(1883);var a=function(e){let{title:t,description:l,pathname:a}=e,i=(0,r.useStaticQuery)("689148933"),{title:c,description:o,image:m,siteUrl:u}=i.site.siteMetadata,s={title:t||c,description:l||o,image:""+u+m,url:""+u+(a||"")};return n.createElement(n.Fragment,null,n.createElement("title",null,s.title),n.createElement("meta",{name:"description",content:s.description}),n.createElement("meta",{name:"image",content:s.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:s.title}),n.createElement("meta",{name:"twitter:url",content:s.url}),n.createElement("meta",{name:"twitter:description",content:s.description}),n.createElement("meta",{name:"twitter:image",content:s.image}),n.createElement("meta",{name:"twitter:creator",content:s.twitterUsername}),n.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}))};var i=function(e){let{title:t,description:l,pathname:r,children:i}=e;return n.createElement(n.Fragment,null,n.createElement(a,{title:t,description:l,pathname:r}),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},n.createElement("defs",null,n.createElement("filter",{id:"retro-image-filter",filterUnits:"objectBoundingBox",primitiveUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},n.createElement("feColorMatrix",{type:"matrix",values:" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0s 0 0 0 1 0",in:"SourceGraphic"}),n.createElement("feComponentTransfer",null," ",n.createElement("feFuncR",{type:"table",tableValues:"0.4 0"})," ",n.createElement("feFuncG",{type:"table",tableValues:"0.4 1"}),n.createElement("feFuncB",{type:"table",tableValues:"0.4 0.44"})," ",n.createElement("feFuncA",{type:"table",tableValues:"0 1"})," "),n.createElement("feBlend",{in2:"SourceGraphic",mode:"hue"})),n.createElement("filter",{id:"noise2-filter",x:"-10%",y:"-10%",width:"120%",height:"120%"},n.createElement("feTurbulence",{baseFrequency:"0.01 0.4",result:"turbulence",numOctaves:"2"}),n.createElement("feDisplacementMap",{in:"SourceGraphic",in2:"turbulence",scale:"12",xChannelSelector:"R",yChannelSelector:"R"})),n.createElement("filter",{id:"noise-filter"},n.createElement("feTurbulence",{baseFrequency:"0.60,0.90"}),n.createElement("feColorMatrix",{type:"matrix",values:" .33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 2 0"}),n.createElement("feComposite",{operator:"in",in2:"SourceGraphic"}),n.createElement("feBlend",{in2:"SourceGraphic",mode:"multiply"})))),i)}},8678:function(e,t,l){var n=l(7294),r=l(7827);t.Z=function(e){let{loop:t,location:l,children:a}=e;return n.createElement("div",{className:"page"},n.createElement(r.Z,{loop:t,location:l}),n.createElement("main",null,a))}},7827:function(e,t,l){var n=l(1883),r=l(7294);let a=[{title:"Home",url:"/",folder:""},{title:"Things",url:"/things",folder:"things"},{title:"Words",url:"/words",folder:"words"},{title:"About",url:"/about",folder:"about"}];t.Z=function(e){let{location:t,loop:l=!1,foldable:i=!1}=e,{0:c,1:o}=(0,r.useState)(!0),m=t.split("/")[1];return l&&36===l.level?r.createElement("menu",null,a.map((e=>r.createElement("li",{key:e.url},r.createElement(n.Link,{to:"/the-void"},e.title))))):l&&l.level>0?r.createElement("menu",null,a.map((e=>r.createElement("li",{key:e.url},r.createElement("a",{href:()=>!1,onClick:()=>{l.setUrl(e.url)},style:e.folder===m?{cursor:"pointer",color:"var(--highlight-color)"}:{cursor:"pointer"}},e.title))))):i&&c?r.createElement("menu",{style:{minWidth:"20px"}},r.createElement("button",{class:"menu",onClick:()=>{o(!1)}},r.createElement("span",{hidden:!0},"menu"))):r.createElement("menu",null,a.map((e=>r.createElement("li",{key:e.url},r.createElement(n.Link,{to:e.url,style:e.folder===m?{color:"var(--highlight-color)"}:{}},e.title)))))}},5465:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i}});var n=l(7294),r=l(8678),a=l(731);function i(){return n.createElement(a.Z,{title:"Contacts",description:""})}t.default=function(e){let{loop:t}=e;return n.createElement(r.Z,{loop:t,location:"/about"},n.createElement("h1",null,"About me"),n.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",margin:"0 auto 8rem auto",width:"100%",maxWidth:"48rem"}},n.createElement("a",{href:"/curriculumLucaPizzagalli.pdf",target:"_blank"},"Curriculum"),n.createElement("a",{href:"https://www.linkedin.com/in/luca-pizzagalli"},"LinkedIn"),n.createElement("a",{href:"https://github.com/LucaPizzagalli"},"GitHub")),n.createElement("p",null,"Or, you can contact me at ",n.createElement("a",{href:"mailto:web@lucapizzagalli.com"},"web@lucapizzagalli.com"),"."))}}}]);
//# sourceMappingURL=component---src-pages-about-js-0b8ec86e4649be396b8f.js.map