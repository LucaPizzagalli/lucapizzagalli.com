(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{236:function(e,t,a){"use strict";a.r(t);var i=a(266),r=a(0),n=a.n(r),s=a(83),o=a(263),c=a.n(o),l=a(232),d=a(233),f=a(268),u=function(){return n.a.createElement(s.b,{query:"2011440971",render:function(e){return n.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:f})},g=a(278);var p=function(){return n.a.createElement(s.b,{query:"30226412",render:function(e){return n.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:i})},m=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=0;return this.props.level&&(e=this.props.level),n.a.createElement(l.a,{level:e,active:this.props.active},n.a.createElement(d.a,{title:"Luca Pizzagalli"}),n.a.createElement("h1",null,"Hello."),n.a.createElement(g.a,{container:!0,spacing:10},n.a.createElement(g.a,{item:!0,sm:12,md:6},n.a.createElement("p",null,"I'm Luca."),n.a.createElement("p",null,"The place you are now in is the website I put together in a bunch of days for declaring to the world that I'm looking for a job. A job in data science, or something related. Every place in the world is fine."),n.a.createElement("p",null,"Now go build something great.")),n.a.createElement(g.a,{item:!0,sm:12,md:6},n.a.createElement("div",{style:{maxWidth:"300px",margin:"0 auto"}},n.a.createElement(p,null)))),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(u,null)))},i}(n.a.Component);t.default=m},263:function(e,t,a){"use strict";a(5),a(6),a(2),a(66),a(129),a(267);var i=a(36);t.__esModule=!0,t.default=void 0;var r,n=i(a(104)),s=i(a(105)),o=i(a(166)),c=i(a(167)),l=i(a(0)),d=i(a(11)),f=function(e){var t=(0,c.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=f(e),a=u(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function E(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=l.default.createElement(O,(0,c.default)({src:t},r));return a.length>1?l.default.createElement("picture",null,i(a),n):n},O=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,d=e.onError,f=e.loading,u=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,c.default)({sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:d,ref:t,loading:f,draggable:u,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=u(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,u=void 0===d?{}:d,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,A=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,c.default)({opacity:L?1:0,transition:z?"opacity "+b+"ms":"none"},o),R="boolean"==typeof h?"lightgray":h,W={transitionDelay:b+"ms"},T=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&W,{},o,{},u),V={title:t,alt:this.state.isVisible?"":a,style:T,className:g};if(p){var N=p,U=N[0];return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(U.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),R&&l.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&W)}),U.base64&&l.default.createElement(C,{src:U.base64,spreadProps:V,imageVariants:N,generateSources:w}),U.tracedSVG&&l.default.createElement(C,{src:U.tracedSVG,spreadProps:V,imageVariants:N,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,x(N),l.default.createElement(O,{alt:a,title:t,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:A})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:E},U,{imageVariants:N}))}}))}if(m){var M=m,B=M[0],H=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},R&&l.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:R,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},z&&W)}),B.base64&&l.default.createElement(C,{src:B.base64,spreadProps:V,imageVariants:M,generateSources:w}),B.tracedSVG&&l.default.createElement(C,{src:B.tracedSVG,spreadProps:V,imageVariants:M,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,x(M),l.default.createElement(O,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:A})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:E},B,{imageVariants:M}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),j=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:z,sizes:j,fixed:d.default.oneOfType([z,d.default.arrayOf(z)]),fluid:d.default.oneOfType([j,d.default.arrayOf(j)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=L;t.default=R},266:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFdklEQVQ4y02Ue0xTdxTHL/tjJs7EbS57ucxlm2aYseEI06ExS3TOFZVNROUNijxEXrWVNy2CBQtoW8qjvKGFllsECoW2PFXGawITxUd8DhEf6MANZYF7+/uurZJ4kpNzfuee7ye/80vuoebn5ymrzc7OUgDesOaTk5NLGIbxYlmWtsRxS521usUmLOf6hYUF/6dPn75l7Z36x2x3/9G0nTUffzhDvYI9t7MIbLml2d1sNt/AazY3N4fp6enXSyCE3LVcxod6ZVN//2uDUuz8HEWtmnkFY8SLAguUsQTmz+Ehs4crh2xwcCA1lZXEWiPE9s1mT2Ze5C9CZ55ZoA9nFmxjEjO7CLOOZh2RDPT2kjUff0I+WracvPfmUvLpOytIh9FoheL53Dx7f+o5Y218MbdQaGWUG6+/vOXorSfuE9NmTEw9Z/+bZ8xWgeUZiMfWLVj//goc274RGV4cpPnuQlzgfnJ+6CbpG5uCvvcu6Rq+z9x7ymJgbDLQBtO0Di3pufTgxsXbz9A9cp/tGr6HO48XiErdQH787EOk/uQMpT8HRr4vHtbLYcpNgSirELr+CUJ3XoXKNMZWt1+Dyjg6mU+fX06Z+m97dV98jLbBu8zZ4XHSNnCHdIw8IiclFeDYr0L8VmeUBbiCDvfAkCINvxcIkJxyAtrzN1Cl/4OUNQ2ipLGfobuuoLplMJSq6xzTNvf9BW3nZabx7BVCt1+EtvsaxJJyuDs7wHHlSuxztIeQsxGctauh4gciJz0TZY29KKztsHgXUWi72TLdAOQ17QZKZRwZ17SPokQ3YC5u6CVFGhOKG/uQFpuKg+vtsffrLxDkZI/WhEOQertiIC8FnaJ4lGsMkFbpIVfqicXNUqUJ2aXNVyl9aQHbVqlAvbKKqGkdqa5tgraxBbRGi0T3beC6rEWEiwMMgjAMiLm4pTmNHk051I1tKFU1QEnr0NhsIHSDAeVVmmnKIIljW9PD0Z7FIwZ5OimVZSFTxMPJjGTI4qMQ4LQae776HOmcTagM/g0jxSK0aRTQlorRXJiB2mIp6Ao5MWhK0FuTP0MVn0qY0NUU45xRS+pUOUSaGYOYKHekxfhBxg2En8s3OORsj5LAXWgRhKA1T4BzehWM9floq5ehp1VJjHUVZvVpAVSZ/GtUyvFdZ5KFbkhIdGOSj+8kAqE7OSHyRGZ6IIK9f4HnpnXwdvkWKfu2QX8iBhpZGASS3cgtDUBc2g7ECXcQRQmfpavEyM+KM1Lh8Y5+EQIncIU/MInCHYhKciZHEh2QJQmERHQUAZsc4bPBAbLgPTh7Kg6X6dPIzfPDUZETgrhfEl+vjfD22Mwk8fwgz0kIpwZLzy7lh3rdjjiyB1y+O8uLcwMv8VeSKDgM/727cWDzd4jc8j3UvACcy+Hjpvo0Lht16Ok7T5pMUsTwdrKubmvgFbjuEcftg3dtf0uCt4fnfs52hPn4MoXyPCKXysGP5hGfffvg4fozQl23QBLqidrj0WhQSNDZ3kEuXRzD9Su3SX9/30JJ+QmEHN4SbIPVKCttyyE2PFRWUqhAtjibSYpPYLmRUTgaFU2iIyJJjCVPTkiCVJpLqtU0adG3wmgwsSaDaeHCwDBGh6+WWxmefs521LFjsYvbh0oVpuamC48jOT4BvBguw7e4MDmFzUgXkZysbJInz2OLCovY8rIKRltbhxa9AXRtXdmi3tja9nLbxPJ5dovFeH6sT2Jc/HhqigBWt8BwKjsHMokURYoiqJTVqNOescYHyipV0KJO16B7ycgUZdpiSmISpShQ2IoZooxlYUHBB46EhDWJT4ovx0REzh709X/BjYweyxZntRTkFYSo1fTb1t7B/gt2WvqMTdfY0ET9D4Kf2NeN7OU3AAAAAElFTkSuQmCC","aspectRatio":1.0015037593984963,"src":"/static/876a38be0761cf356c26078bdc408985/fdbb0/me.png","srcSet":"/static/876a38be0761cf356c26078bdc408985/e22c9/me.png 75w,\\n/static/876a38be0761cf356c26078bdc408985/d3809/me.png 150w,\\n/static/876a38be0761cf356c26078bdc408985/fdbb0/me.png 300w,\\n/static/876a38be0761cf356c26078bdc408985/b5207/me.png 450w,\\n/static/876a38be0761cf356c26078bdc408985/59139/me.png 600w,\\n/static/876a38be0761cf356c26078bdc408985/5d04a/me.png 666w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},267:function(e,t,a){"use strict";a(168)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},268:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},278:function(e,t,a){"use strict";a(5),a(6),a(2),a(45),a(14),a(21);var i=a(3),r=a(1),n=a(0),s=a.n(n),o=(a(11),a(12)),c=a(26),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=s.a.forwardRef((function(e,t){var a=e.alignContent,n=void 0===a?"stretch":a,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,f=e.className,u=e.component,g=void 0===u?"div":u,p=e.container,m=void 0!==p&&p,h=e.direction,b=void 0===h?"row":h,v=e.item,x=void 0!==v&&v,S=e.justify,y=void 0===S?"flex-start":S,w=e.lg,E=void 0!==w&&w,A=e.md,I=void 0!==A&&A,C=e.sm,O=void 0!==C&&C,L=e.spacing,z=void 0===L?0:L,j=e.wrap,R=void 0===j?"wrap":j,W=e.xl,T=void 0!==W&&W,V=e.xs,N=void 0!==V&&V,U=e.zeroMinWidth,M=void 0!==U&&U,B=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=Object(o.a)(d.root,f,m&&[d.container,0!==z&&d["spacing-xs-".concat(String(z))]],x&&d.item,M&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==n&&d["align-content-xs-".concat(String(n))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==N&&d["grid-xs-".concat(String(N))],!1!==O&&d["grid-sm-".concat(String(O))],!1!==I&&d["grid-md-".concat(String(I))],!1!==E&&d["grid-lg-".concat(String(E))],!1!==T&&d["grid-xl-".concat(String(T))]);return s.a.createElement(g,Object(r.a)({className:H,ref:t},B))}));var g=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return l.forEach((function(i){var r=e.spacing(i);0!==r&&(a["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(f(r,2)),width:"calc(100% + ".concat(f(r),")"),"& > $item":{padding:f(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var i={};d.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,i):e[t.breakpoints.up(a)]=i}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-0bfbeef51f711521f4bb.js.map