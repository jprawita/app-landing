(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["divider-download"],{"1f16":function(t,e,n){"use strict";n("6b75c")},2781:function(t,e,n){"use strict";function o(t,e,n){return e>t?e:n<t?n:t}function i(t){return+(t>0)-+(t<0)}function r(t){return Math.round(1e4*t)/1e4}var l,c={};function s(t){return"-"+t[0].toLowerCase()}function a(t){return c[t]||(c[t]=t.replace(/([A-Z])/g,s))}function f(t,e){return t&&0!==t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(e||document.documentElement).querySelectorAll(t)):[]}function u(t,e){for(var n in e)n.indexOf("_")&&t.setAttribute("data-"+a(n),e[n])}function d(t){return function(e,n){for(var o in n)o.indexOf("_")&&(!0===t||t[o])&&e.style.setProperty("--"+a(o),r(n[o]))}}var v=[];function h(){l=0,v.slice().forEach((function(t){return t()})),p()}function p(){!l&&v.length&&(l=requestAnimationFrame(h))}function m(t){return v.push(t),p(),function(){v=v.filter((function(e){return e!==t})),!v.length&&l&&(cancelAnimationFrame(l),l=0)}}function w(t,e,n,o){return"function"===typeof t?t(e,n,o):t}function g(){}function b(t){t=t||{};var e,n,r,l=t.onChange||g,c=t.onHidden||g,s=t.onShown||g,a=t.onScroll||g,v=t.cssProps?d(t.cssProps):g,h=t.scrollingElement,p=h?f(h)[0]:window,b=h?f(h)[0]:document.documentElement,x=!1,C={},X=[];function Y(){X=f(t.targets||"[data-scroll]",f(t.scope||b)[0]).map((function(t){return{element:t}}))}function _(){var l=b.clientWidth,c=b.clientHeight,s=i(-e+(e=b.scrollLeft||window.pageXOffset)),a=i(-n+(n=b.scrollTop||window.pageYOffset)),f=b.scrollLeft/(b.scrollWidth-l||1),u=b.scrollTop/(b.scrollHeight-c||1);x=x||C.scrollDirX!==s||C.scrollDirY!==a||C.scrollPercentX!==f||C.scrollPercentY!==u,C.scrollDirX=s,C.scrollDirY=a,C.scrollPercentX=f,C.scrollPercentY=u;for(var d=!1,v=0;v<X.length;v++){var h=X[v],g=h.element,Y=g,_=0,y=0;do{_+=Y.offsetLeft,y+=Y.offsetTop,Y=Y.offsetParent}while(Y&&Y!==p);var D=g.clientHeight||g.offsetHeight||0,S=g.clientWidth||g.offsetWidth||0,A=(o(_+S,e,e+l)-o(_,e,e+l))/S,E=(o(y+D,n,n+c)-o(y,n,n+c))/D,P=1===A?0:i(_-e),L=1===E?0:i(y-n),H=o((e-(S/2+_-l/2))/(l/2),-1,1),j=o((n-(D/2+y-c/2))/(c/2),-1,1),W=void 0;W=t.offset?w(t.offset,g,h,b)<=n?1:0:(w(t.threshold,g,h,b)||0)<A*E?1:0;var T=h.visible!==W,V=h._changed||T||h.visibleX!==A||h.visibleY!==E||h.index!==v||h.elementHeight!==D||h.elementWidth!==S||h.offsetX!==_||h.offsetY!==y||h.intersectX!==h.intersectX||h.intersectY!==h.intersectY||h.viewportX!==H||h.viewportY!==j;V&&(d=!0,h._changed=!0,h._visibleChanged=T,h.visible=W,h.elementHeight=D,h.elementWidth=S,h.index=v,h.offsetX=_,h.offsetY=y,h.visibleX=A,h.visibleY=E,h.intersectX=P,h.intersectY=L,h.viewportX=H,h.viewportY=j,h.visible=W)}r||!x&&!d||(r=m(O))}function O(){y(),x&&(x=!1,u(b,{scrollDirX:C.scrollDirX,scrollDirY:C.scrollDirY}),v(b,C),a(b,C,X));for(var e=X.length,n=e-1;n>-1;n--){var o=X[n],i=o.element,r=o.visible,f=i.hasAttribute("scrollout-once")||!1;o._changed&&(o._changed=!1,v(i,o)),o._visibleChanged&&(u(i,{scroll:r?"in":"out"}),l(i,o,b),(r?s:c)(i,o,b)),r&&(t.once||f)&&X.splice(n,1)}}function y(){r&&(r(),r=void 0)}Y(),_(),O();var D=0,S=function(){D=D||setTimeout((function(){D=0,_()}),0)};return window.addEventListener("resize",S),p.addEventListener("scroll",S),{index:Y,update:_,teardown:function(){y(),window.removeEventListener("resize",S),p.removeEventListener("scroll",S)}}}t.exports=b},"6b75c":function(t,e,n){},b9b0:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-center align-center",attrs:{id:"divider-download"}},[n("v-container",[n("v-row",{staticClass:"d-flex justify-center align-center"},[n("v-col",{staticClass:"scroll-out-item-center text-center",attrs:{cols:"12",md:"3"}},[n("span",{staticClass:"download-title"},[t._v("ChatApp")])]),n("v-col",{staticClass:"scroll-out-item-center text-center",attrs:{cols:"12",md:"5"}},[n("span",{staticClass:"download-text"},[t._v("Download the ChatApp app and enjoy it")])]),n("v-col",{staticClass:"scroll-out-item-right",attrs:{cols:"12",md:"4"}},[n("v-btn",{staticClass:"mx-1",attrs:{color:"white",elevation:"0","x-large":""}},[n("span",{staticStyle:{color:"#9248dd","font-weight":"600"}},[t._v("Play Store")])]),n("v-btn",{staticClass:"mx-1",attrs:{color:"white",elevation:"0","x-large":""}},[n("span",{staticStyle:{color:"#9248dd","font-weight":"600"}},[t._v("App Store")])])],1)],1)],1)],1)},i=[],r=n("5530"),l=n("2781"),c=n.n(l),s=n("2f62"),a={name:"DividerDownload",mounted:function(){this.so=c()({scope:this.$el,once:this.getScrollOutOnce,threshold:.5,targets:".scroll-out-item-center, .scroll-out-item-right"})},destroyed:function(){this.so.teardown()},computed:Object(r["a"])({},Object(s["c"])({getScrollOutOnce:"getScrollOutOnce"})),data:function(){return{}}},f=a,u=(n("1f16"),n("2877")),d=n("6544"),v=n.n(d),h=n("8336"),p=n("62ad"),m=n("a523"),w=n("0fd9"),g=Object(u["a"])(f,o,i,!1,null,"09e6cb62",null);e["default"]=g.exports;v()(g,{VBtn:h["a"],VCol:p["a"],VContainer:m["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=divider-download.403e8f4b.js.map