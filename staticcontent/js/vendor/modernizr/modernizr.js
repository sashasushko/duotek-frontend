/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-appearance-csspositionsticky-flexbox-flexboxlegacy-inlinesvg-objectfit-picture-pointerevents-sizes-srcset-svg-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function i(){var e,n,t,i,o,s,a;for(var f in y)if(y.hasOwnProperty(f)){if(e=[],n=y[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),C.push((i?"":"no-")+a.join("-"))}}function o(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function f(){var e=n.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function l(e,t,r,i){var o,a,l,u,c="modernizr",d=s("div"),p=f();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=i?i[r]:c+(r+1),d.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!a}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,r){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(u(n[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+u(n[i])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,i,o){function f(){u&&(delete z.style,delete z.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=c(e,i);if(!r(l,"undefined"))return l}for(var u,p,v,A,g,h=["modernizr","tspan"];!z.style;)u=!0,z.modElem=s(h.shift()),z.style=z.modElem.style;for(v=e.length,p=0;v>p;p++)if(A=e[p],g=z.style[A],a(A,"-")&&(A=d(A)),z.style[A]!==t){if(o||r(i,"undefined"))return f(),"pfx"==n?A:!0;try{z.style[A]=i}catch(m){}if(z.style[A]!=g)return f(),"pfx"==n?A:!0}return f(),!1}function v(e,n){return function(){return e.apply(n,arguments)}}function A(e,n,t){var i;for(var o in e)if(e[o]in n)return t===!1?e[o]:(i=n[e[o]],r(i,"function")?v(i,t||n):i);return!1}function g(e,n,t,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?p(a,n,i,o):(a=(e+" "+T.join(s+" ")+s).split(" "),A(a,n,t))}function h(e,n,r){return g(e,t,t,n,r)}function m(e,n){if("object"==typeof e)for(var t in e)B(e,t)&&m(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),o([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var y=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C=[],_=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b="Moz O ms Webkit",T=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=T;var E=function(){function e(e,n){var i;return e?(n&&"string"!=typeof n||(n=s(n||"div")),e="on"+e,i=e in n,!i&&r&&(n.setAttribute||(n=s("div")),n.setAttribute(e,""),i="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),i):!1}var r=!("onblur"in n.documentElement);return e}();w.hasEvent=E,Modernizr.addTest("pointerevents",function(){var e=!1,n=T.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)E(T[n]+"pointerdown")&&(e=!0);return e}),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var S=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=S;var P={elem:s("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),w.testAllProps=g,w.testAllProps=h,Modernizr.addTest("appearance",h("appearance")),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",h("boxDirection","reverse",!0));var j=function(n){var r,i=L.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+n;for(var s=0;i>s;s++){var a=L[s],f=a.toUpperCase()+"_"+r;if(f in o)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=j;var O=w.prefixed=function(e,n,t){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=d(e)),n?g(e,n,t):g(e,"pfx"))};Modernizr.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]});var L=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=L,Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",t=s("a"),r=t.style;return r.cssText=e+L.join(n+";"+e).slice(0,-e.length),-1!==r.position.indexOf(n)}),Modernizr.addTest("picture","HTMLPictureElement"in e);var B;!function(){var e={}.hasOwnProperty;B=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=m}),Modernizr.addAsyncTest(function(){var e,n,t,r=s("img"),i="sizes"in r;!i&&"srcset"in r?(n="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){m("sizes",2==r.width)},r.onload=t,r.onerror=t,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+n+" 8w",r.src=e):m("sizes",i)}),Modernizr.addTest("srcset","srcset"in s("img")),i(),o(C),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);