(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{8199:function(e,t){"use strict";var r,n,o,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return s},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let l="refresh",u="navigate",a="restore",s="server-patch",c="prefetch",f="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(i=n||(n={})).fresh="fresh",i.reusable="reusable",i.expired="expired",i.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(8754),o=r(1757),i=r(5893),l=o._(r(7294)),u=n._(r(3935)),a=n._(r(3867)),s=r(5283),c=r(6594),f=r(3945);r(3179);let d=r(1928),p=n._(r(3872)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,o,i,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:a,decoding:s,className:c,style:f,fetchPriority:d,placeholder:p,loading:g,unoptimized:b,fill:v,onLoadRef:y,onLoadingCompleteRef:O,setBlurComplete:j,setShowAltText:w,sizesInput:_,onLoad:P,onError:C,...E}=e;return(0,i.jsx)("img",{...E,...m(d),loading:g,width:a,height:u,decoding:s,"data-nimg":v?"fill":"1",className:c,style:f,sizes:o,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,p,y,O,j,b,_))},[r,p,y,O,j,C,b,_,t]),onLoad:e=>{h(e.currentTarget,p,y,O,j,b,_)},onError:e=>{w(!0),"empty"!==p&&j(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(a.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(f.ImageConfigContext),o=(0,l.useMemo)(()=>{var e;let t=g||n||c.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),i=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:o,qualities:i}},[n]),{onLoad:u,onLoadingComplete:a}=e,h=(0,l.useRef)(u);(0,l.useEffect)(()=>{h.current=u},[u]);let m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let[y,O]=(0,l.useState)(!1),[j,w]=(0,l.useState)(!1),{props:_,meta:P}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:O,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.priority?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let n=r(8754),o=r(5893),i=n._(r(7294)),l=r(6075),u=r(3955),a=r(8041),s=r(9903),c=r(5490),f=r(1928),d=r(257),p=r(4229),g=r(7195),h=r(9470),m=r(8199),b=new Set;function v(e,t,r,n,o,i){if(i||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let O=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:b,children:O,prefetch:j=null,passHref:w,replace:_,shallow:P,scroll:C,locale:E,onClick:S,onMouseEnter:x,onTouchStart:M,legacyBehavior:R=!1,...I}=e;r=O,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let z=i.default.useContext(f.RouterContext),k=i.default.useContext(d.AppRouterContext),A=null!=z?z:k,T=!z,N=!1!==j,L=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:D,as:F}=i.default.useMemo(()=>{if(!z){let e=y(a);return{href:e,as:b?y(b):e}}let[e,t]=(0,l.resolveHref)(z,a,!0);return{href:e,as:b?(0,l.resolveHref)(z,b):t||e}},[z,a,b]),U=i.default.useRef(D),B=i.default.useRef(F);R&&(n=i.default.Children.only(r));let G=R?n&&"object"==typeof n&&n.ref:t,[H,K,q]=(0,p.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(B.current!==F||U.current!==D)&&(q(),B.current=F,U.current=D),H(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[F,G,D,q,H]);i.default.useEffect(()=>{A&&K&&N&&v(A,D,F,{locale:E},{kind:L},T)},[F,D,K,E,N,null==z?void 0:z.locale,A,T,L]);let W={ref:V,onClick(e){R||"function"!=typeof S||S(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,l,a,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(d):d()}(e,A,D,F,_,P,C,E,T)},onMouseEnter(e){R||"function"!=typeof x||x(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(N||!T)&&v(A,D,F,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},T)},onTouchStart:function(e){R||"function"!=typeof M||M(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(N||!T)&&v(A,D,F,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:L},T)}};if((0,s.isAbsoluteUrl)(F))W.href=F;else if(!R||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&(0,g.getDomainLocale)(F,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);W.href=t||(0,h.addBasePath)((0,c.addLocale)(F,e,null==z?void 0:z.defaultLocale))}return R?i.default.cloneElement(n,W):(0,o.jsx)("a",{...I,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(4474),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(3179);let n=r(6630),o=r(6594);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r,u;let a,s,c,{src:f,sizes:d,unoptimized:p=!1,priority:g=!1,loading:h,className:m,quality:b,width:v,height:y,fill:O=!1,style:j,overrideSrc:w,onLoad:_,onLoadingComplete:P,placeholder:C="empty",blurDataURL:E,fetchPriority:S,decoding:x="async",layout:M,objectFit:R,objectPosition:I,lazyBoundary:z,lazyRoot:k,...A}=e,{imgConf:T,showAltText:N,blurComplete:L,defaultLoader:D}=t,F=T||o.imageConfigDefault;if("allSizes"in F)a=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),n=null==(r=F.qualities)?void 0:r.sort((e,t)=>e-t);a={...F,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=A.loader||D;delete A.loader,delete A.srcSet;let B="__next_img_default"in U;if(B){if("custom"===a.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(O=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!d&&(d=t)}let G="",H=l(v),K=l(y);if("object"==typeof(u=f)&&(i(u)||void 0!==u.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,G=e.src,!O){if(H||K){if(H&&!K){let t=H/e.width;K=Math.round(e.height*t)}else if(!H&&K){let t=K/e.height;H=Math.round(e.width*t)}}else H=e.width,K=e.height}}let q=!g&&("lazy"===h||void 0===h);(!(f="string"==typeof f?f:G)||f.startsWith("data:")||f.startsWith("blob:"))&&(p=!0,q=!1),a.unoptimized&&(p=!0),B&&f.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0),g&&(S="high");let V=l(b),W=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:I}:{},N?{}:{color:"transparent"},j),Y=L||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:H,heightInt:K,blurWidth:s,blurHeight:c,blurDataURL:E||"",objectFit:W.objectFit})+'")':'url("'+C+'")',J=Y?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),c=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[c]})}}({config:a,src:f,unoptimized:p,width:H,quality:V,sizes:d,loader:U});return{props:{...A,loading:q?"lazy":h,fetchPriority:S,width:H,height:K,decoding:x,className:m,style:{...W,...J},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:p,priority:g,placeholder:C,fill:O}}}},6630:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,a=o?40*o:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return u}});let n=r(8754),o=r(5283),i=r(4080),l=n._(r(3872));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=i.Image},3872:function(e,t){"use strict";function r(e){var t;let{config:r,src:n,width:o,quality:i}=e,l=i||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+l}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9008:function(e,t,r){e.exports=r(3867)},5675:function(e,t,r){e.exports=r(6210)},1664:function(e,t,r){e.exports=r(8342)},7796:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(f,u({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:a}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);