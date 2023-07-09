"use strict";(self.webpackChunkluca_pizzagalli_website=self.webpackChunkluca_pizzagalli_website||[]).push([[159,682,678,842,243],{731:function(e,t,l){l.d(t,{Z:function(){return i}});var n=l(7294),a=l(1883);var r=function(e){let{title:t,description:l,pathname:r}=e,i=(0,a.useStaticQuery)("689148933"),{title:o,description:c,image:m,siteUrl:u}=i.site.siteMetadata,s={title:t||o,description:l||c,image:""+u+m,url:""+u+(r||"")};return n.createElement(n.Fragment,null,n.createElement("title",null,s.title),n.createElement("meta",{name:"description",content:s.description}),n.createElement("meta",{name:"image",content:s.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:s.title}),n.createElement("meta",{name:"twitter:url",content:s.url}),n.createElement("meta",{name:"twitter:description",content:s.description}),n.createElement("meta",{name:"twitter:image",content:s.image}),n.createElement("meta",{name:"twitter:creator",content:s.twitterUsername}),n.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}))};var i=function(e){let{title:t,description:l,pathname:a,children:i}=e;return n.createElement(n.Fragment,null,n.createElement(r,{title:t,description:l,pathname:a}),i)}},8678:function(e,t,l){var n=l(7294),a=l(7827);t.Z=function(e){let{loop:t,location:l,children:r}=e;return n.createElement("div",{className:"page"},n.createElement("main",null,r),n.createElement(a.Z,{loop:t,location:l}))}},7827:function(e,t,l){var n=l(1883),a=l(7294);let r=[{title:"Home",url:"/",folder:""},{title:"Things",url:"/things",folder:"things"},{title:"Words",url:"/words",folder:"words"},{title:"About",url:"/about",folder:"about"}];t.Z=function(e){let{location:t,loop:l=!1,foldable:i=!1,menuTheme:o=""}=e,{0:c,1:m}=(0,a.useState)(i),u=t.split("/")[1];return l&&36===l.level?a.createElement("div",{className:"website-menu"},a.createElement("menu",null,r.map((e=>a.createElement("li",{key:e.url},a.createElement(n.Link,{to:"/the-void"},e.title)))))):l&&l.level>0?a.createElement("div",{className:"website-menu"},a.createElement("menu",null,r.map((e=>a.createElement("li",{key:e.url},a.createElement("a",{href:()=>!1,onClick:()=>{l.setUrl(e.url)},style:e.folder===u?{cursor:"pointer",color:"var(--highlight-color)"}:{cursor:"pointer"}},e.title)))))):i?a.createElement("div",{key:c,className:o+" website-menu-wrapper "+(c?"reverse":"")},a.createElement("div",{className:"website-menu sliding-text-wrapper"},a.createElement("menu",{className:"sliding-text"},r.map((e=>a.createElement("li",{key:e.url},a.createElement(n.Link,{to:e.url,style:e.folder===u?{color:"inherit"}:{}},e.title)))))),a.createElement("button",{className:"menu-circle",onClick:()=>m(!1)},a.createElement("div",{className:"menu-half-circle-wrapper",style:{clipPath:"inset(0 50% 0 0)"}},a.createElement("div",{className:"menu-half-circle left-animated",style:{animationName:"animation-circle-left"}})),a.createElement("div",{className:"menu-half-circle-wrapper",style:{clipPath:"inset(0 0 0 50%)"}},a.createElement("div",{className:"menu-half-circle right-animated",style:{animationName:"animation-circle-right"}}))),a.createElement("button",{className:"menu-line",onClick:()=>m(!0)},a.createElement("div",{className:"menu-inner-line"}),a.createElement("span",{hidden:!0},"Close Menu"))):a.createElement("div",{className:"website-menu"},a.createElement("menu",null,r.map((e=>a.createElement("li",{key:e.url},a.createElement(n.Link,{to:e.url,style:e.folder===u?{color:"var(--highlight-color)"}:{}},e.title))))))}},5465:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i}});var n=l(7294),a=l(8678),r=l(731);function i(){return n.createElement(r.Z,{title:"Contacts",description:""})}t.default=function(e){let{loop:t}=e;return n.createElement(a.Z,{loop:t,location:"/about"},n.createElement("h1",null,"About me"),n.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",margin:"0 auto 8rem auto",width:"100%",maxWidth:"48rem"}},n.createElement("a",{href:"/curriculumLucaPizzagalli.pdf",target:"_blank"},"Curriculum"),n.createElement("a",{href:"https://www.linkedin.com/in/luca-pizzagalli"},"LinkedIn"),n.createElement("a",{href:"https://github.com/LucaPizzagalli"},"GitHub")),n.createElement("p",null,"Or, you can contact me at ",n.createElement("a",{href:"mailto:web@lucapizzagalli.com"},"web@lucapizzagalli.com"),"."))}},6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i}});var n=l(7294),a=l(8678),r=l(731);function i(){return n.createElement(r.Z,{title:"Luca Pizzagalli",description:""})}t.default=function(e){let{loop:t}=e;return n.createElement(a.Z,{loop:t,location:"/"},n.createElement("h1",null,"Hello."),n.createElement("div",null,n.createElement("div",null,n.createElement("p",null,"I'm Luca."),n.createElement("p",null,"The place you are now in is the website I put together in a bunch of days for declaring to the world that",n.createElement("em",{style:{textDecoration:"line-through"}},"I'm looking for a job")," ",n.createElement("strong",null,"I found a job"),". A job in ",n.createElement("strong",null,"data science"),", or something related. Every place in ",n.createElement("em",{style:{textDecoration:"line-through"}},"the world")," ",n.createElement("strong",null,"Berlin")," is fine."))))}},5374:function(e,t,l){l.r(t);var n=l(7294),a=l(8678),r=l(6558),i=l(4895),o=l(5465),c=l(480);let m=["Well, you are already seeing my website. Anyway, here it is again.","Mmm... Sure, same stuff.","Yeah, it works, it just goes on.","Yup, nothing new.","...","Ehm... what are you looking for?","...Still here. I see.","...","...","Congratulation! You won! There is nothing more. You can stop now.","Daamn.","You know, sometimes it fells quite lonely down here.","They all just want. Click here, click there... Give me this page, show me that text... But you are different, you care.","I'm starting to like you ;)","Oh! something weird is happening, I think you're going to deep.","Whoaaaoaah! You have to stop it!","Screw you, I'll try to fix that.","Maybe if I restart it..."];t.default=function e(t){let{loop:l={level:0}}=t,{0:u,1:s}=(0,n.useState)(n.createElement(r.default,null)),d={level:l.level+1,setUrl:t=>{"/"===t?s(n.createElement(r.default,null)):"/things"===t?s(n.createElement(i.default,null)):"/about"===t?s(n.createElement(o.default,null)):"/words"===t?s(n.createElement(c.default,null)):"/loop"===t&&s(n.createElement(e,null))}};return n.createElement(a.Z,{loop:l,location:"/loop"},n.createElement("h1",null,"My website"),n.createElement("p",null,m[l.level%m.length]),n.createElement("div",{style:l.level%m.length==15?{border:"3px solid var(--highlight-color)",filter:"var(--noise-filter)"}:{border:"3px solid var(--highlight-color)"}},n.cloneElement(u,{loop:d})))}},4895:function(e,t,l){l.r(t),l.d(t,{Head:function(){return m}});var n=l(7294),a=l(1883),r=l(8032),i=l(8678),o=l(731);function c(e){let{loop:t,data:l}=e,i=(0,r.c)(l.previewImage);return n.createElement("section",{className:"card"},"nope"===l.url?t?n.createElement("a",{href:()=>!1,onClick:()=>t.setUrl("/loop"),style:{cursor:"pointer"}},n.createElement(r.G,{image:i,alt:l.altText,style:{marginBottom:"2rem"}}),n.createElement("h2",{className:"internal-text"}," ",l.coverTitle," ")):n.createElement(a.Link,{to:"/loop"},n.createElement(r.G,{image:i,alt:l.altText,style:{marginBottom:"2rem"}}),n.createElement("h2",{className:"internal-text"}," ",l.coverTitle," ")):l.staticLink?n.createElement("a",{href:l.url},n.createElement(r.G,{image:i,alt:l.altText,style:{marginBottom:"2rem"}}),n.createElement("h2",{className:"internal-text"}," ",l.coverTitle," ")):n.createElement(a.Link,{to:l.url},n.createElement(r.G,{image:i,alt:l.altText,style:{marginBottom:"2rem"}}),n.createElement("h2",{className:"internal-text"}," ",l.coverTitle," ")),n.createElement("p",{className:"internal-text",style:{flexGrow:1}},l.excerpt),n.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center"}},l.technologies.map((e=>n.createElement("div",{key:e,className:"chip"},e))),n.createElement("div",{key:"empty",style:{flexGrow:1}}),l.github&&n.createElement("a",{key:"github",href:l.github,style:{margin:"1rem"}},"GitHub")))}function m(){return n.createElement(o.Z,{title:"Things",description:""})}t.default=function(e){let{loop:t}=e,l=(0,a.useStaticQuery)("4206179821");return n.createElement(i.Z,{loop:t,location:"/things"},n.createElement("h1",null,"My projects"),n.createElement("p",null,"Some of the projects for which I have a nice pic."),n.createElement("div",{className:"grid",style:t&&t.level>8?{margin:"0rem"}:{}},l.allMarkdownRemark.edges.map((e=>{let{frontmatter:l}=e.node;return n.createElement("div",{key:l.url,className:"grid-item",style:t&&t.level>8?{width:"100%"}:{}},n.createElement(c,{loop:t,data:l}))}))))}},480:function(e,t,l){l.r(t),l.d(t,{Head:function(){return c}});var n=l(7294),a=l(1883),r=l(8678),i=l(731);function o(){let e=(0,a.useStaticQuery)("3053019680");return n.createElement("ul",null,e.allMarkdownRemark.edges.map((e=>{let{frontmatter:t}=e.node;return n.createElement("li",{key:t.url},n.createElement(a.Link,{to:t.url},t.title))})))}function c(){return n.createElement(i.Z,{title:"Words",description:""})}t.default=function(e){let{loop:t}=e;return n.createElement(r.Z,{loop:t,location:"/words"},n.createElement("h1",null,"Words"),n.createElement("p",null,"I wrote something once. Let's call it a blog."),n.createElement(o,null),n.createElement("p",null,"If you want to receive the new posts I will (not) write, here you have a ",n.createElement("a",{href:"/rss.xml"},"RSS feed")," and a ",n.createElement("a",{href:"/words/newsletter.html"},"newsletter"),"."))}}}]);
//# sourceMappingURL=component---src-pages-loop-js-8a0de0fa7825a0c30d75.js.map