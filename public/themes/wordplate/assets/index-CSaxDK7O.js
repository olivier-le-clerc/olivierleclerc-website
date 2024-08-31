var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lt(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var st={exports:{}},M={exports:{}},D={exports:{}},Q;function at(){return Q||(Q=1,function(g){(function(f,l){g.exports?g.exports=l():f.EvEmitter=l()})(typeof window<"u"?window:ft,function(){function f(){}var l=f.prototype;return l.on=function(m,h){if(!(!m||!h)){var a=this._events=this._events||{},u=a[m]=a[m]||[];return u.indexOf(h)==-1&&u.push(h),this}},l.once=function(m,h){if(!(!m||!h)){this.on(m,h);var a=this._onceEvents=this._onceEvents||{},u=a[m]=a[m]||{};return u[h]=!0,this}},l.off=function(m,h){var a=this._events&&this._events[m];if(!(!a||!a.length)){var u=a.indexOf(h);return u!=-1&&a.splice(u,1),this}},l.emitEvent=function(m,h){var a=this._events&&this._events[m];if(!(!a||!a.length)){a=a.slice(0),h=h||[];for(var u=this._onceEvents&&this._onceEvents[m],n=0;n<a.length;n++){var o=a[n],p=u&&u[o];p&&(this.off(m,o),delete u[o]),o.apply(this,h)}return this}},l.allOff=function(){delete this._events,delete this._onceEvents},f})}(D)),D.exports}var P={exports:{}};/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */var $;function T(){return $||($=1,function(g){(function(f,l){g.exports?g.exports=l():f.getSize=l()})(window,function(){function l(s){var x=parseFloat(s),_=s.indexOf("%")==-1&&!isNaN(x);return _&&x}function m(){}var h=typeof console>"u"?m:function(s){console.error(s)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=a.length;function n(){for(var s={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},x=0;x<u;x++){var _=a[x];s[_]=0}return s}function o(s){var x=getComputedStyle(s);return x||h("Style returned "+x+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),x}var p=!1,I;function c(){if(!p){p=!0;var s=document.createElement("div");s.style.width="200px",s.style.padding="1px 2px 3px 4px",s.style.borderStyle="solid",s.style.borderWidth="1px 2px 3px 4px",s.style.boxSizing="border-box";var x=document.body||document.documentElement;x.appendChild(s);var _=o(s);I=Math.round(l(_.width))==200,d.isBoxSizeOuter=I,x.removeChild(s)}}function d(s){if(c(),typeof s=="string"&&(s=document.querySelector(s)),!(!s||typeof s!="object"||!s.nodeType)){var x=o(s);if(x.display=="none")return n();var _={};_.width=s.offsetWidth,_.height=s.offsetHeight;for(var i=_.isBorderBox=x.boxSizing=="border-box",t=0;t<u;t++){var e=a[t],r=x[e],v=parseFloat(r);_[e]=isNaN(v)?0:v}var y=_.paddingLeft+_.paddingRight,z=_.paddingTop+_.paddingBottom,S=_.marginLeft+_.marginRight,E=_.marginTop+_.marginBottom,L=_.borderLeftWidth+_.borderRightWidth,C=_.borderTopWidth+_.borderBottomWidth,b=i&&I,V=l(x.width);V!==!1&&(_.width=V+(b?0:y+L));var N=l(x.height);return N!==!1&&(_.height=N+(b?0:z+C)),_.innerWidth=_.width-(y+L),_.innerHeight=_.height-(z+C),_.outerWidth=_.width+S,_.outerHeight=_.height+E,_}}return d})}(P)),P.exports}var H={exports:{}},q={exports:{}},j;function ut(){return j||(j=1,function(g){(function(f,l){g.exports?g.exports=l():f.matchesSelector=l()})(window,function(){var l=function(){var m=window.Element.prototype;if(m.matches)return"matches";if(m.matchesSelector)return"matchesSelector";for(var h=["webkit","moz","ms","o"],a=0;a<h.length;a++){var u=h[a],n=u+"MatchesSelector";if(m[n])return n}}();return function(h,a){return h[l](a)}})}(q)),q.exports}var w;function ht(){return w||(w=1,function(g){(function(f,l){g.exports?g.exports=l(f,ut()):f.fizzyUIUtils=l(f,f.matchesSelector)})(window,function(l,m){var h={};h.extend=function(n,o){for(var p in o)n[p]=o[p];return n},h.modulo=function(n,o){return(n%o+o)%o};var a=Array.prototype.slice;h.makeArray=function(n){if(Array.isArray(n))return n;if(n==null)return[];var o=typeof n=="object"&&typeof n.length=="number";return o?a.call(n):[n]},h.removeFrom=function(n,o){var p=n.indexOf(o);p!=-1&&n.splice(p,1)},h.getParent=function(n,o){for(;n.parentNode&&n!=document.body;)if(n=n.parentNode,m(n,o))return n},h.getQueryElement=function(n){return typeof n=="string"?document.querySelector(n):n},h.handleEvent=function(n){var o="on"+n.type;this[o]&&this[o](n)},h.filterFindElements=function(n,o){n=h.makeArray(n);var p=[];return n.forEach(function(I){if(I instanceof HTMLElement){if(!o){p.push(I);return}m(I,o)&&p.push(I);for(var c=I.querySelectorAll(o),d=0;d<c.length;d++)p.push(c[d])}}),p},h.debounceMethod=function(n,o,p){p=p||100;var I=n.prototype[o],c=o+"Timeout";n.prototype[o]=function(){var d=this[c];clearTimeout(d);var s=arguments,x=this;this[c]=setTimeout(function(){I.apply(x,s),delete x[c]},p)}},h.docReady=function(n){var o=document.readyState;o=="complete"||o=="interactive"?setTimeout(n):document.addEventListener("DOMContentLoaded",n)},h.toDashed=function(n){return n.replace(/(.)([A-Z])/g,function(o,p,I){return p+"-"+I}).toLowerCase()};var u=l.console;return h.htmlInit=function(n,o){h.docReady(function(){var p=h.toDashed(o),I="data-"+p,c=document.querySelectorAll("["+I+"]"),d=document.querySelectorAll(".js-"+p),s=h.makeArray(c).concat(h.makeArray(d)),x=I+"-options",_=l.jQuery;s.forEach(function(i){var t=i.getAttribute(I)||i.getAttribute(x),e;try{e=t&&JSON.parse(t)}catch(v){u&&u.error("Error parsing "+I+" on "+i.className+": "+v);return}var r=new n(i,e);_&&_.data(i,o,r)})})},h})}(H)),H.exports}var F={exports:{}},X;function ct(){return X||(X=1,function(g){(function(f,l){g.exports?g.exports=l(at(),T()):(f.Outlayer={},f.Outlayer.Item=l(f.EvEmitter,f.getSize))})(window,function(l,m){function h(i){for(var t in i)return!1;return t=null,!0}var a=document.documentElement.style,u=typeof a.transition=="string"?"transition":"WebkitTransition",n=typeof a.transform=="string"?"transform":"WebkitTransform",o={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[u],p={transform:n,transition:u,transitionDuration:u+"Duration",transitionProperty:u+"Property",transitionDelay:u+"Delay"};function I(i,t){i&&(this.element=i,this.layout=t,this.position={x:0,y:0},this._create())}var c=I.prototype=Object.create(l.prototype);c.constructor=I,c._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},c.handleEvent=function(i){var t="on"+i.type;this[t]&&this[t](i)},c.getSize=function(){this.size=m(this.element)},c.css=function(i){var t=this.element.style;for(var e in i){var r=p[e]||e;t[r]=i[e]}},c.getPosition=function(){var i=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),e=this.layout._getOption("originTop"),r=i[t?"left":"right"],v=i[e?"top":"bottom"],y=parseFloat(r),z=parseFloat(v),S=this.layout.size;r.indexOf("%")!=-1&&(y=y/100*S.width),v.indexOf("%")!=-1&&(z=z/100*S.height),y=isNaN(y)?0:y,z=isNaN(z)?0:z,y-=t?S.paddingLeft:S.paddingRight,z-=e?S.paddingTop:S.paddingBottom,this.position.x=y,this.position.y=z},c.layoutPosition=function(){var i=this.layout.size,t={},e=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop"),v=e?"paddingLeft":"paddingRight",y=e?"left":"right",z=e?"right":"left",S=this.position.x+i[v];t[y]=this.getXValue(S),t[z]="";var E=r?"paddingTop":"paddingBottom",L=r?"top":"bottom",C=r?"bottom":"top",b=this.position.y+i[E];t[L]=this.getYValue(b),t[C]="",this.css(t),this.emitEvent("layout",[this])},c.getXValue=function(i){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?i/this.layout.size.width*100+"%":i+"px"},c.getYValue=function(i){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?i/this.layout.size.height*100+"%":i+"px"},c._transitionTo=function(i,t){this.getPosition();var e=this.position.x,r=this.position.y,v=i==this.position.x&&t==this.position.y;if(this.setPosition(i,t),v&&!this.isTransitioning){this.layoutPosition();return}var y=i-e,z=t-r,S={};S.transform=this.getTranslate(y,z),this.transition({to:S,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},c.getTranslate=function(i,t){var e=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop");return i=e?i:-i,t=r?t:-t,"translate3d("+i+"px, "+t+"px, 0)"},c.goTo=function(i,t){this.setPosition(i,t),this.layoutPosition()},c.moveTo=c._transitionTo,c.setPosition=function(i,t){this.position.x=parseFloat(i),this.position.y=parseFloat(t)},c._nonTransition=function(i){this.css(i.to),i.isCleaning&&this._removeStyles(i.to);for(var t in i.onTransitionEnd)i.onTransitionEnd[t].call(this)},c.transition=function(i){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(i);return}var t=this._transn;for(var e in i.onTransitionEnd)t.onEnd[e]=i.onTransitionEnd[e];for(e in i.to)t.ingProperties[e]=!0,i.isCleaning&&(t.clean[e]=!0);i.from&&(this.css(i.from),this.element.offsetHeight),this.enableTransition(i.to),this.css(i.to),this.isTransitioning=!0};function d(i){return i.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s="opacity,"+d(n);c.enableTransition=function(){if(!this.isTransitioning){var i=this.layout.options.transitionDuration;i=typeof i=="number"?i+"ms":i,this.css({transitionProperty:s,transitionDuration:i,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(o,this,!1)}},c.onwebkitTransitionEnd=function(i){this.ontransitionend(i)},c.onotransitionend=function(i){this.ontransitionend(i)};var x={"-webkit-transform":"transform"};c.ontransitionend=function(i){if(i.target===this.element){var t=this._transn,e=x[i.propertyName]||i.propertyName;if(delete t.ingProperties[e],h(t.ingProperties)&&this.disableTransition(),e in t.clean&&(this.element.style[i.propertyName]="",delete t.clean[e]),e in t.onEnd){var r=t.onEnd[e];r.call(this),delete t.onEnd[e]}this.emitEvent("transitionEnd",[this])}},c.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},c._removeStyles=function(i){var t={};for(var e in i)t[e]="";this.css(t)};var _={transitionProperty:"",transitionDuration:"",transitionDelay:""};return c.removeTransitionStyles=function(){this.css(_)},c.stagger=function(i){i=isNaN(i)?0:i,this.staggerDelay=i+"ms"},c.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},c.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},c.reveal=function(){delete this.isHidden,this.css({display:""});var i=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("visibleStyle");t[e]=this.onRevealTransitionEnd,this.transition({from:i.hiddenStyle,to:i.visibleStyle,isCleaning:!0,onTransitionEnd:t})},c.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},c.getHideRevealTransitionEndProperty=function(i){var t=this.layout.options[i];if(t.opacity)return"opacity";for(var e in t)return e},c.hide=function(){this.isHidden=!0,this.css({display:""});var i=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("hiddenStyle");t[e]=this.onHideTransitionEnd,this.transition({from:i.visibleStyle,to:i.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},c.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},c.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},I})}(F)),F.exports}/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */var J;function O(){return J||(J=1,function(g){(function(f,l){g.exports?g.exports=l(f,at(),T(),ht(),ct()):f.Outlayer=l(f,f.EvEmitter,f.getSize,f.fizzyUIUtils,f.Outlayer.Item)})(window,function(l,m,h,a,u){var n=l.console,o=l.jQuery,p=function(){},I=0,c={};function d(t,e){var r=a.getQueryElement(t);if(!r){n&&n.error("Bad element for "+this.constructor.namespace+": "+(r||t));return}this.element=r,o&&(this.$element=o(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e);var v=++I;this.element.outlayerGUID=v,c[v]=this,this._create();var y=this._getOption("initLayout");y&&this.layout()}d.namespace="outlayer",d.Item=u,d.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var s=d.prototype;a.extend(s,m.prototype),s.option=function(t){a.extend(this.options,t)},s._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&this.options[e]!==void 0?this.options[e]:this.options[t]},d.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},s._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),a.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},s.reloadItems=function(){this.items=this._itemize(this.element.children)},s._itemize=function(t){for(var e=this._filterFindItemElements(t),r=this.constructor.Item,v=[],y=0;y<e.length;y++){var z=e[y],S=new r(z,this);v.push(S)}return v},s._filterFindItemElements=function(t){return a.filterFindElements(t,this.options.itemSelector)},s.getItemElements=function(){return this.items.map(function(t){return t.element})},s.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=t!==void 0?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},s._init=s.layout,s._resetLayout=function(){this.getSize()},s.getSize=function(){this.size=h(this.element)},s._getMeasurement=function(t,e){var r=this.options[t],v;r?(typeof r=="string"?v=this.element.querySelector(r):r instanceof HTMLElement&&(v=r),this[t]=v?h(v)[e]:r):this[t]=0},s.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},s._getItemsForLayout=function(t){return t.filter(function(e){return!e.isIgnored})},s._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),!(!t||!t.length)){var r=[];t.forEach(function(v){var y=this._getItemLayoutPosition(v);y.item=v,y.isInstant=e||v.isLayoutInstant,r.push(y)},this),this._processLayoutQueue(r)}},s._getItemLayoutPosition=function(){return{x:0,y:0}},s._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(e,r){this._positionItem(e.item,e.x,e.y,e.isInstant,r)},this)},s.updateStagger=function(){var t=this.options.stagger;if(t==null){this.stagger=0;return}return this.stagger=i(t),this.stagger},s._positionItem=function(t,e,r,v,y){v?t.goTo(e,r):(t.stagger(y*this.stagger),t.moveTo(e,r))},s._postLayout=function(){this.resizeContainer()},s.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},s._getContainerSize=p,s._setContainerMeasure=function(t,e){if(t!==void 0){var r=this.size;r.isBorderBox&&(t+=e?r.paddingLeft+r.paddingRight+r.borderLeftWidth+r.borderRightWidth:r.paddingBottom+r.paddingTop+r.borderTopWidth+r.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},s._emitCompleteOnItems=function(t,e){var r=this;function v(){r.dispatchEvent(t+"Complete",null,[e])}var y=e.length;if(!e||!y){v();return}var z=0;function S(){z++,z==y&&v()}e.forEach(function(E){E.once(t,S)})},s.dispatchEvent=function(t,e,r){var v=e?[e].concat(r):r;if(this.emitEvent(t,v),o)if(this.$element=this.$element||o(this.element),e){var y=o.Event(e);y.type=t,this.$element.trigger(y,r)}else this.$element.trigger(t,r)},s.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},s.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},s.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},s.unstamp=function(t){t=this._find(t),t&&t.forEach(function(e){a.removeFrom(this.stamps,e),this.unignore(e)},this)},s._find=function(t){if(t)return typeof t=="string"&&(t=this.element.querySelectorAll(t)),t=a.makeArray(t),t},s._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},s._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},s._manageStamp=p,s._getElementOffset=function(t){var e=t.getBoundingClientRect(),r=this._boundingRect,v=h(t),y={left:e.left-r.left-v.marginLeft,top:e.top-r.top-v.marginTop,right:r.right-e.right-v.marginRight,bottom:r.bottom-e.bottom-v.marginBottom};return y},s.handleEvent=a.handleEvent,s.bindResize=function(){l.addEventListener("resize",this),this.isResizeBound=!0},s.unbindResize=function(){l.removeEventListener("resize",this),this.isResizeBound=!1},s.onresize=function(){this.resize()},a.debounceMethod(d,"onresize",100),s.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},s.needsResizeLayout=function(){var t=h(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},s.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},s.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},s.prepended=function(t){var e=this._itemize(t);if(e.length){var r=this.items.slice(0);this.items=e.concat(r),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(r)}},s.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),!(!t||!t.length)){var e=this.updateStagger();t.forEach(function(r,v){r.stagger(v*e),r.reveal()})}},s.hide=function(t){if(this._emitCompleteOnItems("hide",t),!(!t||!t.length)){var e=this.updateStagger();t.forEach(function(r,v){r.stagger(v*e),r.hide()})}},s.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},s.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},s.getItem=function(t){for(var e=0;e<this.items.length;e++){var r=this.items[e];if(r.element==t)return r}},s.getItems=function(t){t=a.makeArray(t);var e=[];return t.forEach(function(r){var v=this.getItem(r);v&&e.push(v)},this),e},s.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),!(!e||!e.length)&&e.forEach(function(r){r.remove(),a.removeFrom(this.items,r)},this)},s.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(r){r.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,o&&o.removeData(this.element,this.constructor.namespace)},d.data=function(t){t=a.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},d.create=function(t,e){var r=x(d);return r.defaults=a.extend({},d.defaults),a.extend(r.defaults,e),r.compatOptions=a.extend({},d.compatOptions),r.namespace=t,r.data=d.data,r.Item=x(u),a.htmlInit(r,t),o&&o.bridget&&o.bridget(t,r),r};function x(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var _={ms:1,s:1e3};function i(t){if(typeof t=="number")return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),r=e&&e[1],v=e&&e[2];if(!r.length)return 0;r=parseFloat(r);var y=_[v]||1;return r*y}return d.Item=u,d})}(M)),M.exports}var A={exports:{}},Z;function dt(){return Z||(Z=1,function(g){(function(f,l){g.exports?g.exports=l(O()):(f.Isotope=f.Isotope||{},f.Isotope.Item=l(f.Outlayer))})(window,function(l){function m(){l.Item.apply(this,arguments)}var h=m.prototype=Object.create(l.Item.prototype),a=h._create;h._create=function(){this.id=this.layout.itemGUID++,a.call(this),this.sortData={}},h.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var n=this.layout.options.getSortData,o=this.layout._sorters;for(var p in n){var I=o[p];this.sortData[p]=I(this.element,this)}}};var u=h.destroy;return h.destroy=function(){u.apply(this,arguments),this.css({display:""})},m})}(A)),A.exports}var B={exports:{}},K;function R(){return K||(K=1,function(g){(function(f,l){g.exports?g.exports=l(T(),O()):(f.Isotope=f.Isotope||{},f.Isotope.LayoutMode=l(f.getSize,f.Outlayer))})(window,function(l,m){function h(n){this.isotope=n,n&&(this.options=n.options[this.namespace],this.element=n.element,this.items=n.filteredItems,this.size=n.size)}var a=h.prototype,u=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return u.forEach(function(n){a[n]=function(){return m.prototype[n].apply(this.isotope,arguments)}}),a.needsVerticalResizeLayout=function(){var n=l(this.isotope.element),o=this.isotope.size&&n;return o&&n.innerHeight!=this.isotope.size.innerHeight},a._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},a.getColumnWidth=function(){this.getSegmentSize("column","Width")},a.getRowHeight=function(){this.getSegmentSize("row","Height")},a.getSegmentSize=function(n,o){var p=n+o,I="outer"+o;if(this._getMeasurement(p,I),!this[p]){var c=this.getFirstItemSize();this[p]=c&&c[I]||this.isotope.size["inner"+o]}},a.getFirstItemSize=function(){var n=this.isotope.filteredItems[0];return n&&n.element&&l(n.element)},a.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},a.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},h.modes={},h.create=function(n,o){function p(){h.apply(this,arguments)}return p.prototype=Object.create(a),p.prototype.constructor=p,o&&(p.options=o),p.prototype.namespace=n,h.modes[n]=p,p},h})}(B)),B.exports}var Y={exports:{}},k={exports:{}};/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */var tt;function pt(){return tt||(tt=1,function(g){(function(f,l){g.exports?g.exports=l(O(),T()):f.Masonry=l(f.Outlayer,f.getSize)})(window,function(l,m){var h=l.create("masonry");h.compatOptions.fitWidth="isFitWidth";var a=h.prototype;return a._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var u=0;u<this.cols;u++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},a.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var u=this.items[0],n=u&&u.element;this.columnWidth=n&&m(n).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,p=this.containerWidth+this.gutter,I=p/o,c=o-p%o,d=c&&c<1?"round":"floor";I=Math[d](I),this.cols=Math.max(I,1)},a.getContainerWidth=function(){var u=this._getOption("fitWidth"),n=u?this.element.parentNode:this.element,o=m(n);this.containerWidth=o&&o.innerWidth},a._getItemLayoutPosition=function(u){u.getSize();var n=u.size.outerWidth%this.columnWidth,o=n&&n<1?"round":"ceil",p=Math[o](u.size.outerWidth/this.columnWidth);p=Math.min(p,this.cols);for(var I=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",c=this[I](p,u),d={x:this.columnWidth*c.col,y:c.y},s=c.y+u.size.outerHeight,x=p+c.col,_=c.col;_<x;_++)this.colYs[_]=s;return d},a._getTopColPosition=function(u){var n=this._getTopColGroup(u),o=Math.min.apply(Math,n);return{col:n.indexOf(o),y:o}},a._getTopColGroup=function(u){if(u<2)return this.colYs;for(var n=[],o=this.cols+1-u,p=0;p<o;p++)n[p]=this._getColGroupY(p,u);return n},a._getColGroupY=function(u,n){if(n<2)return this.colYs[u];var o=this.colYs.slice(u,u+n);return Math.max.apply(Math,o)},a._getHorizontalColPosition=function(u,n){var o=this.horizontalColIndex%this.cols,p=u>1&&o+u>this.cols;o=p?0:o;var I=n.size.outerWidth&&n.size.outerHeight;return this.horizontalColIndex=I?o+u:this.horizontalColIndex,{col:o,y:this._getColGroupY(o,u)}},a._manageStamp=function(u){var n=m(u),o=this._getElementOffset(u),p=this._getOption("originLeft"),I=p?o.left:o.right,c=I+n.outerWidth,d=Math.floor(I/this.columnWidth);d=Math.max(0,d);var s=Math.floor(c/this.columnWidth);s-=c%this.columnWidth?0:1,s=Math.min(this.cols-1,s);for(var x=this._getOption("originTop"),_=(x?o.top:o.bottom)+n.outerHeight,i=d;i<=s;i++)this.colYs[i]=Math.max(_,this.colYs[i])},a._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var u={height:this.maxY};return this._getOption("fitWidth")&&(u.width=this._getContainerFitWidth()),u},a._getContainerFitWidth=function(){for(var u=0,n=this.cols;--n&&this.colYs[n]===0;)u++;return(this.cols-u)*this.columnWidth-this.gutter},a.needsResizeLayout=function(){var u=this.containerWidth;return this.getContainerWidth(),u!=this.containerWidth},h})}(k)),k.exports}/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */var et;function vt(){return et||(et=1,function(g){(function(f,l){g.exports?g.exports=l(R(),pt()):l(f.Isotope.LayoutMode,f.Masonry)})(window,function(l,m){var h=l.create("masonry"),a=h.prototype,u={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var n in m.prototype)u[n]||(a[n]=m.prototype[n]);var o=a.measureColumns;a.measureColumns=function(){this.items=this.isotope.filteredItems,o.call(this)};var p=a._getOption;return a._getOption=function(I){return I=="fitWidth"?this.options.isFitWidth!==void 0?this.options.isFitWidth:this.options.fitWidth:p.apply(this.isotope,arguments)},h})}(Y)),Y.exports}var G={exports:{}},it;function mt(){return it||(it=1,function(g,f){(function(l,m){g.exports=m(R())})(window,function(m){var h=m.create("fitRows"),a=h.prototype;return a._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},a._getItemLayoutPosition=function(u){u.getSize();var n=u.size.outerWidth+this.gutter,o=this.isotope.size.innerWidth+this.gutter;this.x!==0&&n+this.x>o&&(this.x=0,this.y=this.maxY);var p={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+u.size.outerHeight),this.x+=n,p},a._getContainerSize=function(){return{height:this.maxY}},h})}(G)),G.exports}var U={exports:{}},nt;function gt(){return nt||(nt=1,function(g){(function(f,l){g.exports?g.exports=l(R()):l(f.Isotope.LayoutMode)})(window,function(l){var m=l.create("vertical",{horizontalAlignment:0}),h=m.prototype;return h._resetLayout=function(){this.y=0},h._getItemLayoutPosition=function(a){a.getSize();var u=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,n=this.y;return this.y+=a.size.outerHeight,{x:u,y:n}},h._getContainerSize=function(){return{height:this.y}},m})}(U)),U.exports}/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */(function(g){(function(f,l){g.exports?g.exports=l(f,O(),T(),ut(),ht(),dt(),R(),vt(),mt(),gt()):f.Isotope=l(f,f.Outlayer,f.getSize,f.matchesSelector,f.fizzyUIUtils,f.Isotope.Item,f.Isotope.LayoutMode)})(window,function(l,m,h,a,u,n,o){var p=l.jQuery,I=String.prototype.trim?function(i){return i.trim()}:function(i){return i.replace(/^\s+|\s+$/g,"")},c=m.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=n,c.LayoutMode=o;var d=c.prototype;d._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),m.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var i in o.modes)this._initLayoutMode(i)},d.reloadItems=function(){this.itemGUID=0,m.prototype.reloadItems.call(this)},d._itemize=function(){for(var i=m.prototype._itemize.apply(this,arguments),t=0;t<i.length;t++){var e=i[t];e.id=this.itemGUID++}return this._updateItemsSortData(i),i},d._initLayoutMode=function(i){var t=o.modes[i],e=this.options[i]||{};this.options[i]=t.options?u.extend(t.options,e):e,this.modes[i]=new t(this)},d.layout=function(){if(!this._isLayoutInited&&this._getOption("initLayout")){this.arrange();return}this._layout()},d._layout=function(){var i=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,i),this._isLayoutInited=!0},d.arrange=function(i){this.option(i),this._getIsInstant();var t=this._filter(this.items);this.filteredItems=t.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[t]):this._hideReveal(t),this._sort(),this._layout()},d._init=d.arrange,d._hideReveal=function(i){this.reveal(i.needReveal),this.hide(i.needHide)},d._getIsInstant=function(){var i=this._getOption("layoutInstant"),t=i!==void 0?i:!this._isLayoutInited;return this._isInstant=t,t},d._bindArrangeComplete=function(){var i,t,e,r=this;function v(){i&&t&&e&&r.dispatchEvent("arrangeComplete",null,[r.filteredItems])}this.once("layoutComplete",function(){i=!0,v()}),this.once("hideComplete",function(){t=!0,v()}),this.once("revealComplete",function(){e=!0,v()})},d._filter=function(i){var t=this.options.filter;t=t||"*";for(var e=[],r=[],v=[],y=this._getFilterTest(t),z=0;z<i.length;z++){var S=i[z];if(!S.isIgnored){var E=y(S);E&&e.push(S),E&&S.isHidden?r.push(S):!E&&!S.isHidden&&v.push(S)}}return{matches:e,needReveal:r,needHide:v}},d._getFilterTest=function(i){return p&&this.options.isJQueryFiltering?function(t){return p(t.element).is(i)}:typeof i=="function"?function(t){return i(t.element)}:function(t){return a(t.element,i)}},d.updateSortData=function(i){var t;i?(i=u.makeArray(i),t=this.getItems(i)):t=this.items,this._getSorters(),this._updateItemsSortData(t)},d._getSorters=function(){var i=this.options.getSortData;for(var t in i){var e=i[t];this._sorters[t]=s(e)}},d._updateItemsSortData=function(i){for(var t=i&&i.length,e=0;t&&e<t;e++){var r=i[e];r.updateSortData()}};var s=function(){function i(e){if(typeof e!="string")return e;var r=I(e).split(" "),v=r[0],y=v.match(/^\[(.+)\]$/),z=y&&y[1],S=t(z,v),E=c.sortDataParsers[r[1]];return e=E?function(L){return L&&E(S(L))}:function(L){return L&&S(L)},e}function t(e,r){return e?function(y){return y.getAttribute(e)}:function(y){var z=y.querySelector(r);return z&&z.textContent}}return i}();c.sortDataParsers={parseInt:function(i){return parseInt(i,10)},parseFloat:function(i){return parseFloat(i)}},d._sort=function(){if(this.options.sortBy){var i=u.makeArray(this.options.sortBy);this._getIsSameSortBy(i)||(this.sortHistory=i.concat(this.sortHistory));var t=x(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(t)}},d._getIsSameSortBy=function(i){for(var t=0;t<i.length;t++)if(i[t]!=this.sortHistory[t])return!1;return!0};function x(i,t){return function(r,v){for(var y=0;y<i.length;y++){var z=i[y],S=r.sortData[z],E=v.sortData[z];if(S>E||S<E){var L=t[z]!==void 0?t[z]:t,C=L?1:-1;return(S>E?1:-1)*C}}return 0}}d._mode=function(){var i=this.options.layoutMode,t=this.modes[i];if(!t)throw new Error("No layout mode: "+i);return t.options=this.options[i],t},d._resetLayout=function(){m.prototype._resetLayout.call(this),this._mode()._resetLayout()},d._getItemLayoutPosition=function(i){return this._mode()._getItemLayoutPosition(i)},d._manageStamp=function(i){this._mode()._manageStamp(i)},d._getContainerSize=function(){return this._mode()._getContainerSize()},d.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.appended=function(i){var t=this.addItems(i);if(t.length){var e=this._filterRevealAdded(t);this.filteredItems=this.filteredItems.concat(e)}},d.prepended=function(i){var t=this._itemize(i);if(t.length){this._resetLayout(),this._manageStamps();var e=this._filterRevealAdded(t);this.layoutItems(this.filteredItems),this.filteredItems=e.concat(this.filteredItems),this.items=t.concat(this.items)}},d._filterRevealAdded=function(i){var t=this._filter(i);return this.hide(t.needHide),this.reveal(t.matches),this.layoutItems(t.matches,!0),t.matches},d.insert=function(i){var t=this.addItems(i);if(t.length){var e,r,v=t.length;for(e=0;e<v;e++)r=t[e],this.element.appendChild(r.element);var y=this._filter(t).matches;for(e=0;e<v;e++)t[e].isLayoutInstant=!0;for(this.arrange(),e=0;e<v;e++)delete t[e].isLayoutInstant;this.reveal(y)}};var _=d.remove;return d.remove=function(i){i=u.makeArray(i);var t=this.getItems(i);_.call(this,i);for(var e=t&&t.length,r=0;e&&r<e;r++){var v=t[r];u.removeFrom(this.filteredItems,v)}},d.shuffle=function(){for(var i=0;i<this.items.length;i++){var t=this.items[i];t.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d._noTransition=function(i,t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var r=i.apply(this,t);return this.options.transitionDuration=e,r},d.getFilteredItemElements=function(){return this.filteredItems.map(function(i){return i.element})},c})})(st);var yt=st.exports;const _t=lt(yt);document.querySelectorAll('[role="navmenu-toggle"').forEach(g=>{g.addEventListener("click",f=>{document.getElementById("main-navmenu").classList.toggle("is-open")})});let W,rt=document.querySelector(".gallery");var ot;rt&&(W=new _t(rt,{itemSelector:".portfolio",masonry:{fitWidth:!0,gutter:20}}),window.addEventListener("resize",function(g){console.log("resize"),this.setTimeout(function(){W.layout()},1e3)}),(ot=document.querySelector(".portfolio-filters"))==null||ot.addEventListener("click",function(g){if(!g.target.matches("button"))return;let f=g.target.dataset.filter;W.arrange({filter:f})}),document.querySelector(".filters-select-dropdown").addEventListener("change",function(g){var f=g.target.selectedOptions.item(0).value;W.arrange({filter:f})}));
