(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["screen-shot"],{"14dd":function(t,e,i){t.exports=i.p+"img/ss-4.60dab33e.png"},"17d6":function(t,e,i){},2781:function(t,e,i){"use strict";function n(t,e,i){return e>t?e:i<t?i:t}function s(t){return+(t>0)-+(t<0)}function r(t){return Math.round(1e4*t)/1e4}var o,c={};function a(t){return"-"+t[0].toLowerCase()}function l(t){return c[t]||(c[t]=t.replace(/([A-Z])/g,a))}function d(t,e){return t&&0!==t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(e||document.documentElement).querySelectorAll(t)):[]}function h(t,e){for(var i in e)i.indexOf("_")&&t.setAttribute("data-"+l(i),e[i])}function u(t){return function(e,i){for(var n in i)n.indexOf("_")&&(!0===t||t[n])&&e.style.setProperty("--"+l(n),r(i[n]))}}var f=[];function g(){o=0,f.slice().forEach((function(t){return t()})),p()}function p(){!o&&f.length&&(o=requestAnimationFrame(g))}function m(t){return f.push(t),p(),function(){f=f.filter((function(e){return e!==t})),!f.length&&o&&(cancelAnimationFrame(o),o=0)}}function v(t,e,i,n){return"function"===typeof t?t(e,i,n):t}function S(){}function b(t){t=t||{};var e,i,r,o=t.onChange||S,c=t.onHidden||S,a=t.onShown||S,l=t.onScroll||S,f=t.cssProps?u(t.cssProps):S,g=t.scrollingElement,p=g?d(g)[0]:window,b=g?d(g)[0]:document.documentElement,w=!1,A={},y=[];function E(){y=d(t.targets||"[data-scroll]",d(t.scope||b)[0]).map((function(t){return{element:t}}))}function Y(){var o=b.clientWidth,c=b.clientHeight,a=s(-e+(e=b.scrollLeft||window.pageXOffset)),l=s(-i+(i=b.scrollTop||window.pageYOffset)),d=b.scrollLeft/(b.scrollWidth-o||1),h=b.scrollTop/(b.scrollHeight-c||1);w=w||A.scrollDirX!==a||A.scrollDirY!==l||A.scrollPercentX!==d||A.scrollPercentY!==h,A.scrollDirX=a,A.scrollDirY=l,A.scrollPercentX=d,A.scrollPercentY=h;for(var u=!1,f=0;f<y.length;f++){var g=y[f],S=g.element,E=S,Y=0,O=0;do{Y+=E.offsetLeft,O+=E.offsetTop,E=E.offsetParent}while(E&&E!==p);var R=S.clientHeight||S.offsetHeight||0,I=S.clientWidth||S.offsetWidth||0,_=(n(Y+I,e,e+o)-n(Y,e,e+o))/I,j=(n(O+R,i,i+c)-n(O,i,i+c))/R,z=1===_?0:s(Y-e),x=1===j?0:s(O-i),C=n((e-(I/2+Y-o/2))/(o/2),-1,1),L=n((i-(R/2+O-c/2))/(c/2),-1,1),N=void 0;N=t.offset?v(t.offset,S,g,b)<=i?1:0:(v(t.threshold,S,g,b)||0)<_*j?1:0;var G=g.visible!==N,M=g._changed||G||g.visibleX!==_||g.visibleY!==j||g.index!==f||g.elementHeight!==R||g.elementWidth!==I||g.offsetX!==Y||g.offsetY!==O||g.intersectX!==g.intersectX||g.intersectY!==g.intersectY||g.viewportX!==C||g.viewportY!==L;M&&(u=!0,g._changed=!0,g._visibleChanged=G,g.visible=N,g.elementHeight=R,g.elementWidth=I,g.index=f,g.offsetX=Y,g.offsetY=O,g.visibleX=_,g.visibleY=j,g.intersectX=z,g.intersectY=x,g.viewportX=C,g.viewportY=L,g.visible=N)}r||!w&&!u||(r=m(D))}function D(){O(),w&&(w=!1,h(b,{scrollDirX:A.scrollDirX,scrollDirY:A.scrollDirY}),f(b,A),l(b,A,y));for(var e=y.length,i=e-1;i>-1;i--){var n=y[i],s=n.element,r=n.visible,d=s.hasAttribute("scrollout-once")||!1;n._changed&&(n._changed=!1,f(s,n)),n._visibleChanged&&(h(s,{scroll:r?"in":"out"}),o(s,n,b),(r?a:c)(s,n,b)),r&&(t.once||d)&&y.splice(i,1)}}function O(){r&&(r(),r=void 0)}E(),Y(),D();var R=0,I=function(){R=R||setTimeout((function(){R=0,Y()}),0)};return window.addEventListener("resize",I),p.addEventListener("scroll",I),{index:E,update:Y,teardown:function(){O(),window.removeEventListener("resize",I),p.removeEventListener("scroll",I)}}}t.exports=b},"2dc0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column justify-start align-center",attrs:{id:"screen-shot"}},[n("v-container",[n("div",{staticClass:"mt-10 d-flex flex-column justify-center align-center"},[n("p",{staticClass:"screen-shot-title text-center scroll-out-item-top"},[t._v(" ChatApp Screen Shot ")]),n("v-img",{staticClass:"my-2 mb-15",attrs:{src:i("a5c4"),contain:"",width:"100"}})],1),n("div",{staticClass:"d-flex justify-center align-center"},t._l(4,(function(t){return n("v-img",{key:t,staticClass:"scroll-out-item-center mx-1",attrs:{src:i("a982")("./ss-"+t+".png"),eager:"",width:"100"}})})),1)])],1)},s=[],r=i("5530"),o=i("2781"),c=i.n(o),a=i("2f62"),l=(i("bbe3"),{name:"ScreenShot",components:{},mounted:function(){this.so=c()({scope:this.$el,once:this.getScrollOutOnce,threshold:.5,targets:".scroll-out-item-top, .scroll-out-item-center"})},destroyed:function(){this.so.teardown()},computed:Object(r["a"])({},Object(a["c"])({getScrollOutOnce:"getScrollOutOnce"})),data:function(){return{swiperOption:{slidesPerView:5,spaceBetween:50,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}}}}),d=l,h=(i("7990"),i("2877")),u=i("6544"),f=i.n(u),g=i("a523"),p=i("adda"),m=Object(h["a"])(d,n,s,!1,null,"52f4f95a",null);e["default"]=m.exports;f()(m,{VContainer:g["a"],VImg:p["a"]})},"36a7":function(t,e,i){},"667e":function(t,e,i){t.exports=i.p+"img/ss-1.10fc2c32.png"},7990:function(t,e,i){"use strict";i("17d6")},"7f24":function(t,e,i){t.exports=i.p+"img/ss-2.b5375f58.png"},"8efc":function(t,e,i){},"982d":function(t,e,i){t.exports=i.p+"img/ss-3.87e110ba.png"},a5c4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAFCAYAAADFcPsgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QUQyMDJBNkEyREUxMUU4OTBGMkEwODg0NzE2ODY0NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QUQyMDJBN0EyREUxMUU4OTBGMkEwODg0NzE2ODY0NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlBRDIwMkE0QTJERTExRTg5MEYyQTA4ODQ3MTY4NjQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlBRDIwMkE1QTJERTExRTg5MEYyQTA4ODQ3MTY4NjQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gFNh5QAAACxJREFUeNpi/A8EDJiAEYsYJeqGIqBqGDAxjAK6gNGAHg3o0YAeBWQAgAADAGePCAZdfDQxAAAAAElFTkSuQmCC"},a982:function(t,e,i){var n={"./ss-1.png":"667e","./ss-2.png":"7f24","./ss-3.png":"982d","./ss-4.png":"14dd"};function s(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="a982"},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3");var n=i("53ca"),s=(i("8efc"),i("90a2")),r=(i("36a7"),i("24b2")),o=i("58df"),c=Object(o["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=c,l=i("7560"),d=i("d9f7"),h=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(a,l["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var s=t.naturalHeight,r=t.naturalWidth;s||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/s):null!=i&&!e.hasError&&setTimeout(n,i)};n()},genContent:function(){var t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=a.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},bbe3:function(t,e,i){}}]);
//# sourceMappingURL=screen-shot.6362c2cd.js.map