(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{775:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(7401).A)("AlignJustify",[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]])},767:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(7401).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6046:(e,t,n)=>{"use strict";var r=n(6658);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},321:e=>{e.exports={style:{fontFamily:"'Outfit', 'Outfit Fallback'",fontStyle:"normal"},className:"__className_32b1bc"}},4908:(e,t,n)=>{"use strict";n.d(t,{bm:()=>to,UC:()=>tt,VY:()=>tr,hJ:()=>te,ZL:()=>e9,bL:()=>e7,hE:()=>tn,l9:()=>e4});var r,o,a,i=n(2115),l=n(3610),u=n(8068),c=n(8166),s=n(7668),d=n(1488),f=n(3360),m=n(1524),v=n(5155),p="dismissableLayer.update",h=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),g=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:g,onDismiss:E,...w}=e,C=i.useContext(h),[S,k]=i.useState(null),x=null!==(r=null==S?void 0:S.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,L]=i.useState({}),R=(0,u.s)(t,e=>k(e)),T=Array.from(C.layers),[A]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),D=T.indexOf(A),N=S?T.indexOf(S):-1,P=C.layersWithOutsidePointerEventsDisabled.size>0,O=N>=D,M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,m.c)(e),o=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){b("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!O||n||(null==s||s(e),null==g||g(e),e.defaultPrevented||null==E||E())},x),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,m.c)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&b("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==d||d(e),null==g||g(e),e.defaultPrevented||null==E||E())},x);return!function(e,t=globalThis?.document){let n=(0,m.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{N!==C.layers.size-1||(null==c||c(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},x),i.useEffect(()=>{if(S)return a&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(o=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(S)),C.layers.add(S),y(),()=>{a&&1===C.layersWithOutsidePointerEventsDisabled.size&&(x.body.style.pointerEvents=o)}},[S,x,a,C]),i.useEffect(()=>()=>{S&&(C.layers.delete(S),C.layersWithOutsidePointerEventsDisabled.delete(S),y())},[S,C]),i.useEffect(()=>{let e=()=>L({});return document.addEventListener(p,e),()=>document.removeEventListener(p,e)},[]),(0,v.jsx)(f.sG.div,{...w,ref:R,style:{pointerEvents:P?O?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.m)(e.onFocusCapture,j.onFocusCapture),onBlurCapture:(0,l.m)(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:(0,l.m)(e.onPointerDownCapture,M.onPointerDownCapture)})});function y(){let e=new CustomEvent(p);document.dispatchEvent(e)}function b(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,f.hO)(a,i):a.dispatchEvent(i)}g.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(h),r=i.useRef(null),o=(0,u.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,v.jsx)(f.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var E="focusScope.autoFocusOnMount",w="focusScope.autoFocusOnUnmount",C={bubbles:!1,cancelable:!0},S=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...l}=e,[c,s]=i.useState(null),d=(0,m.c)(o),p=(0,m.c)(a),h=i.useRef(null),g=(0,u.s)(t,e=>s(e)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(y.paused||!c)return;let t=e.target;c.contains(t)?h.current=t:L(h.current,{select:!0})},t=function(e){if(y.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||L(h.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&L(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,y.paused]),i.useEffect(()=>{if(c){R.add(y);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(E,C);c.addEventListener(E,d),c.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(L(r,{select:t}),document.activeElement!==n)return}(k(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&L(c))}return()=>{c.removeEventListener(E,d),setTimeout(()=>{let t=new CustomEvent(w,C);c.addEventListener(w,p),c.dispatchEvent(t),t.defaultPrevented||L(null!=e?e:document.body,{select:!0}),c.removeEventListener(w,p),R.remove(y)},0)}}},[c,d,p,y]);let b=i.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=k(e);return[x(t,e),x(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&L(a,{select:!0})):(e.preventDefault(),n&&L(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,v.jsx)(f.sG.div,{tabIndex:-1,...l,ref:g,onKeyDown:b})});function k(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function x(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function L(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}S.displayName="FocusScope";var R=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=T(e,t)).unshift(t)},remove(t){var n;null===(n=(e=T(e,t))[0])||void 0===n||n.resume()}}}();function T(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var A=n(7650),D=n(6611),N=i.forwardRef((e,t)=>{var n,r;let{container:o,...a}=e,[l,u]=i.useState(!1);(0,D.N)(()=>u(!0),[]);let c=o||l&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return c?A.createPortal((0,v.jsx)(f.sG.div,{...a,ref:t}),c):null});N.displayName="Portal";var P=n(7028),O=0;function M(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var j=function(){return(j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function I(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var F=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),W="width-before-scroll-bar";function _(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var B="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,K=new WeakMap;function G(e){return e}var X=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=G),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=j({async:!0,ssr:!1},e),o}(),Y=function(){},z=i.forwardRef(function(e,t){var n,r,o,a,l=i.useRef(null),u=i.useState({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:Y}),c=u[0],s=u[1],d=e.forwardProps,f=e.children,m=e.className,v=e.removeScrollBar,p=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,C=e.gapMode,S=I(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=(n=[l,t],r=function(e){return n.forEach(function(t){return _(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,B(function(){var e=K.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||_(e,null)}),r.forEach(function(e){t.has(e)||_(e,o)})}K.set(a,n)},[n]),a),x=j(j({},S),c);return i.createElement(i.Fragment,null,p&&i.createElement(g,{sideCar:X,removeScrollBar:v,shards:h,noIsolation:y,inert:b,setCallbacks:s,allowPinchZoom:!!E,lockRef:l,gapMode:C}),d?i.cloneElement(i.Children.only(f),j(j({},x),{ref:k})):i.createElement(void 0===w?"div":w,j({},x,{className:m,ref:k}),f))});z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},z.classNames={fullWidth:W,zeroRight:F};var H=function(e){var t=e.sideCar,n=I(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,j({},n))};H.isSideCarExport=!0;var Z=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},q=function(){var e=Z();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},U=function(){var e=q();return function(t){return e(t.styles,t.dynamic),null}},V={left:0,top:0,right:0,gap:0},J=function(e){return parseInt(e||"",10)||0},Q=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[J(n),J(r),J(o)]},$=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return V;var t=Q(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ee=U(),et="data-scroll-locked",en=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(et,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(F," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(W," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(F," .").concat(F," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(W," .").concat(W," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(et,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},er=function(){var e=parseInt(document.body.getAttribute(et)||"0",10);return isFinite(e)?e:0},eo=function(){i.useEffect(function(){return document.body.setAttribute(et,(er()+1).toString()),function(){var e=er()-1;e<=0?document.body.removeAttribute(et):document.body.setAttribute(et,e.toString())}},[])},ea=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;eo();var a=i.useMemo(function(){return $(o)},[o]);return i.createElement(ee,{styles:en(a,!t,o,n?"":"!important")})},ei=!1;if("undefined"!=typeof window)try{var el=Object.defineProperty({},"passive",{get:function(){return ei=!0,!0}});window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch(e){ei=!1}var eu=!!ei&&{passive:!1},ec=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},es=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ed(e,r)){var o=ef(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ed=function(e,t){return"v"===e?ec(t,"overflowY"):ec(t,"overflowX")},ef=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},em=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),l=i*r,u=n.target,c=t.contains(u),s=!1,d=l>0,f=0,m=0;do{var v=ef(e,u),p=v[0],h=v[1]-v[2]-i*p;(p||h)&&ed(e,u)&&(f+=h,m+=p),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!c&&u!==document.body||c&&(t.contains(u)||t===u));return d&&(o&&1>Math.abs(f)||!o&&l>f)?s=!0:!d&&(o&&1>Math.abs(m)||!o&&-l>m)&&(s=!0),s},ev=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ep=function(e){return[e.deltaX,e.deltaY]},eh=function(e){return e&&"current"in e?e.current:e},eg=0,ey=[];let eb=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(eg++)[0],a=i.useState(U)[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eh),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!l.current.allowPinchZoom;var o,a=ev(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(u)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=es(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=es(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||c)&&(r.current=o),!o)return!0;var m=r.current||o;return em(m,t,e,"h"===m?u:c,!0)},[]),c=i.useCallback(function(e){if(ey.length&&ey[ey.length-1]===a){var n="deltaY"in e?ep(e):ev(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(l.current.shards||[]).map(eh).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=ev(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,ep(t),t.target,u(t,e.lockRef.current))},[]),m=i.useCallback(function(t){s(t.type,ev(t),t.target,u(t,e.lockRef.current))},[]);i.useEffect(function(){return ey.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",c,eu),document.addEventListener("touchmove",c,eu),document.addEventListener("touchstart",d,eu),function(){ey=ey.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,eu),document.removeEventListener("touchmove",c,eu),document.removeEventListener("touchstart",d,eu)}},[]);var v=e.removeScrollBar,p=e.inert;return i.createElement(i.Fragment,null,p?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?i.createElement(ea,{gapMode:e.gapMode}):null)},X.useMedium(r),H);var eE=i.forwardRef(function(e,t){return i.createElement(z,j({},e,{ref:t,sideCar:eb}))});eE.classNames=z.classNames;var ew=new WeakMap,eC=new WeakMap,eS={},ek=0,ex=function(e){return e&&(e.host||ex(e.parentNode))},eL=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=ex(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eS[n]||(eS[n]=new WeakMap);var a=eS[n],i=[],l=new Set,u=new Set(o),c=function(e){!e||l.has(e)||(l.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||u.has(e)||Array.prototype.forEach.call(e.children,function(e){if(l.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,u=(ew.get(e)||0)+1,c=(a.get(e)||0)+1;ew.set(e,u),a.set(e,c),i.push(e),1===u&&o&&eC.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),l.clear(),ek++,function(){i.forEach(function(e){var t=ew.get(e)-1,o=a.get(e)-1;ew.set(e,t),a.set(e,o),t||(eC.has(e)||e.removeAttribute(r),eC.delete(e)),o||e.removeAttribute(n)}),--ek||(ew=new WeakMap,ew=new WeakMap,eC=new WeakMap,eS={})}},eR=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),eL(o,a,n,"aria-hidden")):function(){return null}},eT=n(2317),eA="Dialog",[eD,eN]=(0,c.A)(eA),[eP,eO]=eD(eA),eM=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:l=!0}=e,u=i.useRef(null),c=i.useRef(null),[f=!1,m]=(0,d.i)({prop:r,defaultProp:o,onChange:a});return(0,v.jsx)(eP,{scope:t,triggerRef:u,contentRef:c,contentId:(0,s.B)(),titleId:(0,s.B)(),descriptionId:(0,s.B)(),open:f,onOpenChange:m,onOpenToggle:i.useCallback(()=>m(e=>!e),[m]),modal:l,children:n})};eM.displayName=eA;var ej="DialogTrigger",eI=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO(ej,n),a=(0,u.s)(t,o.triggerRef);return(0,v.jsx)(f.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e1(o.open),...r,ref:a,onClick:(0,l.m)(e.onClick,o.onOpenToggle)})});eI.displayName=ej;var eF="DialogPortal",[eW,e_]=eD(eF,{forceMount:void 0}),eB=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eO(eF,t);return(0,v.jsx)(eW,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,v.jsx)(P.C,{present:n||a.open,children:(0,v.jsx)(N,{asChild:!0,container:o,children:e})}))})};eB.displayName=eF;var eK="DialogOverlay",eG=i.forwardRef((e,t)=>{let n=e_(eK,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eO(eK,e.__scopeDialog);return a.modal?(0,v.jsx)(P.C,{present:r||a.open,children:(0,v.jsx)(eX,{...o,ref:t})}):null});eG.displayName=eK;var eX=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO(eK,n);return(0,v.jsx)(eE,{as:eT.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,v.jsx)(f.sG.div,{"data-state":e1(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eY="DialogContent",ez=i.forwardRef((e,t)=>{let n=e_(eY,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eO(eY,e.__scopeDialog);return(0,v.jsx)(P.C,{present:r||a.open,children:a.modal?(0,v.jsx)(eH,{...o,ref:t}):(0,v.jsx)(eZ,{...o,ref:t})})});ez.displayName=eY;var eH=i.forwardRef((e,t)=>{let n=eO(eY,e.__scopeDialog),r=i.useRef(null),o=(0,u.s)(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return eR(e)},[]),(0,v.jsx)(eq,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,l.m)(e.onFocusOutside,e=>e.preventDefault())})}),eZ=i.forwardRef((e,t)=>{let n=eO(eY,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,v.jsx)(eq,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eq=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...l}=e,c=eO(eY,n),s=i.useRef(null),d=(0,u.s)(t,s);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:M()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:M()),O++,()=>{1===O&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),O--}},[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,v.jsx)(g,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":e1(c.open),...l,ref:d,onDismiss:()=>c.onOpenChange(!1)})}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(e3,{titleId:c.titleId}),(0,v.jsx)(e5,{contentRef:s,descriptionId:c.descriptionId})]})]})}),eU="DialogTitle",eV=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO(eU,n);return(0,v.jsx)(f.sG.h2,{id:o.titleId,...r,ref:t})});eV.displayName=eU;var eJ="DialogDescription",eQ=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO(eJ,n);return(0,v.jsx)(f.sG.p,{id:o.descriptionId,...r,ref:t})});eQ.displayName=eJ;var e$="DialogClose",e0=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO(e$,n);return(0,v.jsx)(f.sG.button,{type:"button",...r,ref:t,onClick:(0,l.m)(e.onClick,()=>o.onOpenChange(!1))})});function e1(e){return e?"open":"closed"}e0.displayName=e$;var e2="DialogTitleWarning",[e6,e8]=(0,c.q)(e2,{contentName:eY,titleName:eU,docsSlug:"dialog"}),e3=e=>{let{titleId:t}=e,n=e8(e2),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return i.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e5=e=>{let{contentRef:t,descriptionId:n}=e,r=e8("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return i.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e7=eM,e4=eI,e9=eB,te=eG,tt=ez,tn=eV,tr=eQ,to=e0},7113:(e,t,n)=>{"use strict";n.d(t,{D:()=>s,N:()=>d});var r=n(2115),o=(e,t,n,r,o,a,i,l)=>{let u=document.documentElement,c=["light","dark"];function s(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?o.map(e=>a[e]||e):o;n?(u.classList.remove(...r),u.classList.add(t)):u.setAttribute(e,t)}),l&&c.includes(t)&&(u.style.colorScheme=t)}if(r)s(r);else try{let e=localStorage.getItem(t)||n,r=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;s(r)}catch(e){}},a=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,u=r.createContext(void 0),c={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=r.useContext(u))?e:c},d=e=>r.useContext(u)?r.createElement(r.Fragment,null,e.children):r.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:s=f,defaultTheme:d=o?"system":"light",attribute:m="data-theme",value:y,children:b,nonce:E,scriptProps:w}=e,[C,S]=r.useState(()=>p(c,d)),[k,x]=r.useState(()=>p(c)),L=y?Object.values(y):s,R=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=g());let r=y?y[t]:t,i=n?h(E):null,u=document.documentElement,c=e=>{"class"===e?(u.classList.remove(...L),r&&u.classList.add(r)):e.startsWith("data-")&&(r?u.setAttribute(e,r):u.removeAttribute(e))};if(Array.isArray(m)?m.forEach(c):c(m),l){let e=a.includes(d)?d:null,n=a.includes(t)?t:e;u.style.colorScheme=n}null==i||i()},[E]),T=r.useCallback(e=>{let t="function"==typeof e?e(C):e;S(t);try{localStorage.setItem(c,t)}catch(e){}},[C]),A=r.useCallback(e=>{x(g(e)),"system"===C&&o&&!t&&R("system")},[C,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),r.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?S(e.newValue):T(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),r.useEffect(()=>{R(null!=t?t:C)},[t,C]);let D=r.useMemo(()=>({theme:C,setTheme:T,forcedTheme:t,resolvedTheme:"system"===C?k:C,themes:o?[...s,"system"]:s,systemTheme:o?k:void 0}),[C,T,t,k,o,s]);return r.createElement(u.Provider,{value:D},r.createElement(v,{forcedTheme:t,storageKey:c,attribute:m,enableSystem:o,enableColorScheme:l,defaultTheme:d,value:y,themes:s,nonce:E,scriptProps:w}),b)},v=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:i,enableColorScheme:l,defaultTheme:u,value:c,themes:s,nonce:d,scriptProps:f}=e,m=JSON.stringify([a,n,u,t,s,c,i,l]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(m,")")}})}),p=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},g=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);