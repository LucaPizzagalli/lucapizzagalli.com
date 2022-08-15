"use strict";(self.webpackChunkluca_pizzagalli_website=self.webpackChunkluca_pizzagalli_website||[]).push([[159,682,7,678,853],{5465:function(e,t,l){l.r(t);var a=l(7294),n=l(3837),r=l(262);t.default=function(e){var t=e.loop;return a.createElement(n.Z,{loop:t,location:"/about"},a.createElement(r.Z,{title:"Contacts",description:"",lang:"en",meta:[]}),a.createElement("h1",null,"About me"),a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",margin:"0 auto 8rem auto",width:"100%",maxWidth:"48rem"}},a.createElement("a",{href:"/curriculumLucaPizzagalli.pdf",target:"_blank"},"Curriculum"),a.createElement("a",{href:"https://www.linkedin.com/in/luca-pizzagalli"},"LinkedIn"),a.createElement("a",{href:"https://github.com/LucaPizzagalli"},"GitHub")),a.createElement("p",null,"Or, you can contact me at ",a.createElement("a",{href:"mailto:web@lucapizzagalli.com"},"web@lucapizzagalli.com"),"."))}},5502:function(e,t,l){l.r(t);var a=l(7294),n=l(1597),r=l(3837),o=l(262);function i(){return a.createElement(n.StaticQuery,{query:"2145721474",render:function(e){return a.createElement("ul",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node.frontmatter;return a.createElement("li",{key:t.url},a.createElement(n.Link,{to:t.url},t.title))})))}})}t.default=function(e){var t=e.loop;return a.createElement(r.Z,{loop:t,location:"/blog"},a.createElement(o.Z,{title:"Blog",description:"",lang:"en",meta:[]}),a.createElement("h1",null,"Blog"),a.createElement("p",null,"I wrote something once. Let's call it a blog.",a.createElement("br",null),"If you want to receive the new posts I will (not) write, here you have a ",a.createElement("a",{href:"/rss.xml"},"RSS feed")," and a ",a.createElement("a",{href:"newsletter.html"},"newsletter"),"."),a.createElement(i,null))}},6558:function(e,t,l){l.r(t);var a=l(7294),n=l(3837),r=l(262);t.default=function(e){var t=e.loop;return a.createElement(n.Z,{loop:t,location:"/"},a.createElement(r.Z,{title:"Luca Pizzagalli",description:"",lang:"en",meta:[]}),a.createElement("h1",null,"Hello."),a.createElement("div",null,a.createElement("div",null,a.createElement("p",null,"I'm Luca."),a.createElement("p",null,"The place you are now in is the website I put together in a bunch of days for declaring to the world that ",a.createElement("em",{style:{textDecoration:"line-through"}},"I'm looking for a job")," ",a.createElement("strong",null,"I found a job"),". A job in ",a.createElement("strong",null,"data science"),", or something related. Every place in ",a.createElement("em",{style:{textDecoration:"line-through"}},"the world")," ",a.createElement("strong",null,"Berlin")," is fine."))))}},5374:function(e,t,l){l.r(t);var a=l(7294),n=l(3837),r=l(6558),o=l(7219),i=l(5465),c=l(5502),m=["Well, you are already seeing my website, anyway, here it is again.","Mmm... Sure, same stuff.","Yeah, it works, it just goes on.","Yup, nothing new.","...","...","Hem... what are you looking for?","...Still here. I see.","...","...","Congratulation! You won, there is nothing more. You can stop now.","Damn.","So you're a stubborn one.","...","Actually, if you now watch outside the screen you'll see something weird.","Did you see it? yep, pretty weird.","...","Hey! Hey!, something weird is happening, you're going to deep.","You have to stop it!","Screw you, I'll try to fix that.","Maybe if I restart it..."];function u(e){var t=e.loop,l=(0,a.useState)(a.createElement(r.default,null)),s=l[0],p=l[1],h={level:t.level+1,setUrl:function(e){"/"===e?p(a.createElement(r.default,null)):"/projects"===e?p(a.createElement(o.default,null)):"/about"===e?p(a.createElement(i.default,null)):"/blog"===e?p(a.createElement(c.default,null)):"/loop"===e&&p(a.createElement(u,null))}};return a.createElement(n.Z,{loop:t,location:"/loop"},a.createElement("h1",null,"My website"),a.createElement("p",null,m[t.level%m.length]),a.createElement("div",{style:t.level%m.length==17?{border:"3px solid var(--highlight-color)",filter:"var(--noise-filter)"}:{border:"3px solid var(--highlight-color)"}},a.cloneElement(s,{loop:h})))}u.defaultProps={loop:{level:0}},t.default=u},7219:function(e,t,l){l.r(t);var a=l(7294),n=l(1597),r=l(7059),o=l(3837),i=l(262);function c(e){var t=e.loop,l=e.data,o=(0,r.c)(l.previewImage);return a.createElement("section",{className:"card"},"nope"===l.url?t?a.createElement("div",{onClick:function(){return t.setUrl("/loop")},style:{textDecoration:"underline",color:"#01ff70",cursor:"pointer"}},a.createElement(r.G,{image:o,alt:l.altText,style:{marginBottom:"2rem"}}),a.createElement("h2",{className:"internal-text"}," ",l.title," ")):a.createElement(n.Link,{to:"/loop"},a.createElement(r.G,{image:o,alt:l.altText,style:{marginBottom:"2rem"}}),a.createElement("h2",{className:"internal-text"}," ",l.title," ")):l.staticLink?a.createElement("a",{href:l.url},a.createElement(r.G,{image:o,alt:l.altText,style:{marginBottom:"2rem"}}),a.createElement("h2",{className:"internal-text"}," ",l.title," ")):a.createElement(n.Link,{to:l.url},a.createElement(r.G,{image:o,alt:l.altText,style:{marginBottom:"2rem"}}),a.createElement("h2",{className:"internal-text"}," ",l.title," ")),a.createElement("p",{className:"internal-text",style:{flexGrow:1}},l.excerpt),a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center"}},l.technologies.map((function(e){return a.createElement("div",{key:e,className:"chip"},e)})),a.createElement("div",{key:"empty",style:{flexGrow:1}}),l.github&&a.createElement("a",{key:"github",href:l.github,style:{margin:"1rem"}},"GitHub")))}t.default=function(e){var t=e.loop;return a.createElement(o.Z,{loop:t,location:"/projects"},a.createElement(i.Z,{title:"Projects",description:"",lang:"en",meta:[]}),a.createElement("h1",null,"My projects"),a.createElement("p",null,"Some of the projects for which I have a nice pic."),a.createElement("div",{className:"grid",style:t&&t.level>8?{margin:"0rem"}:{}},a.createElement(n.StaticQuery,{query:"1528093361",render:function(e){return e.allMarkdownRemark.edges.map((function(e){var l=e.node.frontmatter;return a.createElement("div",{key:l.url,className:"grid-item",style:t&&t.level>8?{width:"100%"}:{}},a.createElement(c,{loop:t,data:l}))}))}})))}}}]);
//# sourceMappingURL=component---src-pages-loop-js-4b04a5c8d98856040907.js.map