(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[0],{1187:function(e,t,n){"use strict";var r=n(2),o=n(4),i=n(280),a=n(216),s=n(166),f=n(92);function c(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function u(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function l(e){return e instanceof p(e).Element||e instanceof Element}function d(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function m(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}function h(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function b(e){return c(v(e)).left+u(e).scrollLeft}function g(e){return p(e).getComputedStyle(e)}function y(e){var t=g(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function w(e,t,n){void 0===n&&(n=!1);var r=d(t),o=d(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),i=v(t),a=c(e,o),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==h(t)||y(i))&&(s=function(e){return e!==p(e)&&d(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:u(e);var t}(t)),d(t)?((f=c(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=b(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function O(e){var t=c(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function x(e){return"html"===h(e)?e:e.assignedSlot||e.parentNode||(m(e)?e.host:null)||v(e)}function j(e){return["html","body","#document"].indexOf(h(e))>=0?e.ownerDocument.body:d(e)&&y(e)?e:j(x(e))}function E(e,t){var n;void 0===t&&(t=[]);var r=j(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=p(r),a=o?[i].concat(i.visualViewport||[],y(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(E(x(a)))}function D(e){return["table","td","th"].indexOf(h(e))>=0}function P(e){return d(e)&&"fixed"!==g(e).position?e.offsetParent:null}function k(e){for(var t=p(e),n=P(e);n&&D(n)&&"static"===g(n).position;)n=P(n);return n&&("html"===h(n)||"body"===h(n)&&"static"===g(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&d(e)&&"fixed"===g(e).position)return null;for(var n=x(e);d(n)&&["html","body"].indexOf(h(n))<0;){var r=g(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var R="top",L="bottom",M="right",B="left",W="auto",T=[R,L,M,B],A="start",H="end",S="viewport",C="popper",q=T.reduce((function(e,t){return e.concat([t+"-"+A,t+"-"+H])}),[]),N=[].concat(T,[W]).reduce((function(e,t){return e.concat([t,t+"-"+A,t+"-"+H])}),[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function V(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var z={placement:"bottom",modifiers:[],strategy:"absolute"};function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function F(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?z:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:l(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var p=function(e){var t=U(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(_(t,n)){o.rects={reference:w(t,k(n),"fixed"===o.options.strategy),popper:O(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,p=void 0===c?{}:c,u=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:u,instance:f})||o)}else o.reset=!1,r=-1}}},update:V((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!_(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var J={passive:!0};var X={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=p(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,J)})),s&&f.addEventListener("resize",n.update,J),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),s&&f.removeEventListener("resize",n.update,J)}},data:{}};function Y(e){return e.split("-")[0]}function G(e){return e.split("-")[1]}function K(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Q(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Y(o):null,a=o?G(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case R:t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:f};break;case B:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?K(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case A:t[c]=t[c]-(n[p]/2-r[p]/2);break;case H:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Q({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},$=Math.max,ee=Math.min,te=Math.round,ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,l=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:te(te(t*r)/r)||0,y:te(te(n*r)/r)||0}}(a):"function"===typeof u?u(a):a,d=l.x,m=void 0===d?0:d,h=l.y,b=void 0===h?0:h,y=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),O=B,x=R,j=window;if(c){var E=k(n),D="clientHeight",P="clientWidth";E===p(n)&&"static"!==g(E=v(n)).position&&"absolute"===s&&(D="scrollHeight",P="scrollWidth"),E=E,o!==R&&(o!==B&&o!==M||i!==H)||(x=L,b-=E[D]-r.height,b*=f?1:-1),o!==B&&(o!==R&&o!==L||i!==H)||(O=M,m-=E[P]-r.width,m*=f?1:-1)}var W,T=Object.assign({position:s},c&&ne);return f?Object.assign({},T,((W={})[x]=w?"0":"",W[O]=y?"0":"",W.transform=(j.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",W)):Object.assign({},T,((t={})[x]=w?b+"px":"",t[O]=y?m+"px":"",t.transform="",t))}var oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function fe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&m(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e,t){return t===S?ce(function(e){var t=p(e),n=v(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+b(e),y:s}}(e)):d(t)?function(e){var t=c(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ce(function(e){var t,n=v(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=$(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=$(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+b(e),f=-r.scrollTop;return"rtl"===g(o||n).direction&&(s+=$(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(v(e)))}function ue(e,t,n){var r="clippingParents"===t?function(e){var t=E(x(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&d(e)?k(e):e;return l(n)?t.filter((function(e){return l(e)&&fe(e,n)&&"body"!==h(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=pe(e,n);return t.top=$(r.top,t.top),t.right=ee(r.right,t.right),t.bottom=ee(r.bottom,t.bottom),t.left=$(r.left,t.left),t}),pe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function le(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function de(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function me(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,f=void 0===s?S:s,p=n.elementContext,u=void 0===p?C:p,d=n.altBoundary,m=void 0!==d&&d,h=n.padding,b=void 0===h?0:h,g=le("number"!==typeof b?b:de(b,T)),y=u===C?"reference":C,w=e.rects.popper,O=e.elements[m?y:u],x=ue(l(O)?O:O.contextElement||v(e.elements.popper),a,f),j=c(e.elements.reference),E=Q({reference:j,element:w,strategy:"absolute",placement:o}),D=ce(Object.assign({},w,E)),P=u===C?D:j,k={top:x.top-P.top+g.top,bottom:P.bottom-x.bottom+g.bottom,left:x.left-P.left+g.left,right:P.right-x.right+g.right},B=e.modifiersData.offset;if(u===C&&B){var W=B[o];Object.keys(k).forEach((function(e){var t=[M,L].indexOf(e)>=0?1:-1,n=[R,L].indexOf(e)>=0?"y":"x";k[e]+=W[n]*t}))}return k}function he(e,t,n){return $(e,ee(t,n))}function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[R,M,L,B].some((function(t){return e[t]>=0}))}var ge=F({defaultModifiers:[X,Z,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:Y(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];d(o)&&h(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});d(r)&&h(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=N.reduce((function(e,n){return e[n]=function(e,t,n){var r=Y(e),o=[B,R].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[B,M].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,b=Y(v),g=f||(b===v||!m?[ie(v)]:function(e){if(Y(e)===W)return[];var t=ie(e);return[se(e),t,se(t)]}(v)),y=[v].concat(g).reduce((function(e,n){return e.concat(Y(n)===W?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?N:f,p=G(r),u=p?s?q:q.filter((function(e){return G(e)===p})):T,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Y(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,j=!0,E=y[0],D=0;D<y.length;D++){var P=y[D],k=Y(P),H=G(P)===A,S=[R,L].indexOf(k)>=0,C=S?"width":"height",I=me(t,{placement:P,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),U=S?H?M:B:H?L:R;w[C]>O[C]&&(U=ie(U));var V=ie(U),z=[];if(i&&z.push(I[k]<=0),s&&z.push(I[U]<=0,I[V]<=0),z.every((function(e){return e}))){E=P,j=!1;break}x.set(P,z)}if(j)for(var _=function(e){var t=y.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},F=m?3:1;F>0;F--){if("break"===_(F))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=me(t,{boundary:f,rootBoundary:c,padding:u,altBoundary:p}),b=Y(t.placement),g=G(t.placement),y=!g,w=K(b),x="x"===w?"y":"x",j=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,P="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,W={x:0,y:0};if(j){if(i||s){var T="y"===w?R:B,H="y"===w?L:M,S="y"===w?"height":"width",C=j[w],q=j[w]+v[T],N=j[w]-v[H],I=d?-D[S]/2:0,U=g===A?E[S]:D[S],V=g===A?-D[S]:-E[S],z=t.elements.arrow,_=d&&z?O(z):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=F[T],X=F[H],Q=he(0,E[S],_[S]),Z=y?E[S]/2-I-Q-J-P:U-Q-J-P,te=y?-E[S]/2+I+Q+X+P:V+Q+X+P,ne=t.elements.arrow&&k(t.elements.arrow),re=ne?"y"===w?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ie=j[w]+Z-oe-re,ae=j[w]+te-oe;if(i){var se=he(d?ee(q,ie):q,C,d?$(N,ae):N);j[w]=se,W[w]=se-C}if(s){var fe="x"===w?R:B,ce="x"===w?L:M,pe=j[x],ue=pe+v[fe],le=pe-v[ce],de=he(d?ee(ue,ie):ue,pe,d?$(le,ae):le);j[x]=de,W[x]=de-pe}}t.modifiersData[r]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Y(n.placement),f=K(s),c=[B,M].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return le("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:de(e,T))}(o.padding,n),u=O(i),l="y"===f?R:B,d="y"===f?L:M,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=k(i),b=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,y=p[l],w=b-u[c]-p[d],x=b/2-u[c]/2+g,j=he(y,x,w),E=f;n.modifiersData[r]=((t={})[E]=j,t.centerOffset=j-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&fe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=be(f),u=be(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),ye=(n(8),n(0)),we=n(1006),Oe=n(1);const xe=["anchorEl","children","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],je=["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ee(e){return"function"===typeof e?e():e}const De={},Pe=ye.forwardRef((function(e,t){const{anchorEl:n,children:f,disablePortal:c,modifiers:p,open:u,placement:l,popperOptions:d,popperRef:m,TransitionProps:h}=e,v=Object(o.a)(e,xe),b=ye.useRef(null),g=Object(a.a)(b,t),y=ye.useRef(null),w=Object(a.a)(y,m),O=ye.useRef(w);Object(s.a)((()=>{O.current=w}),[w]),ye.useImperativeHandle(m,(()=>y.current),[]);const x=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(l,Object(i.a)()),[j,E]=ye.useState(x);ye.useEffect((()=>{y.current&&y.current.forceUpdate()})),Object(s.a)((()=>{if(!n||!u)return;Ee(n);let e=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;E(t.placement)}}];null!=p&&(e=e.concat(p)),d&&null!=d.modifiers&&(e=e.concat(d.modifiers));const t=ge(Ee(n),b.current,Object(r.a)({placement:x},d,{modifiers:e}));return O.current(t),()=>{t.destroy(),O.current(null)}}),[n,c,p,u,d,x]);const D={placement:j};return null!==h&&(D.TransitionProps=h),Object(Oe.jsx)("div",Object(r.a)({ref:g,role:"tooltip"},v,{children:"function"===typeof f?f(D):f}))})),ke=ye.forwardRef((function(e,t){const{anchorEl:n,children:i,container:a,disablePortal:s=!1,keepMounted:c=!1,modifiers:p,open:u,placement:l="bottom",popperOptions:d=De,popperRef:m,style:h,transition:v=!1}=e,b=Object(o.a)(e,je),[g,y]=ye.useState(!0);if(!c&&!u&&(!v||g))return null;const w=a||(n?Object(f.a)(Ee(n)).body:void 0);return Object(Oe.jsx)(we.a,{disablePortal:s,container:w,children:Object(Oe.jsx)(Pe,Object(r.a)({anchorEl:n,disablePortal:s,modifiers:p,ref:t,open:v?!g:u,placement:l,popperOptions:d,popperRef:m},b,{style:Object(r.a)({position:"fixed",top:0,left:0,display:u||!c||v&&!g?null:"none"},h),TransitionProps:v?{in:u,onEnter:()=>{y(!1)},onExited:()=>{y(!0)}}:null,children:i}))})}));t.a=ke}}]);
//# sourceMappingURL=0.1906cd52.chunk.js.map