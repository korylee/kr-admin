import{c9 as b,O as $,c as g,A as P,G as V,a as E,u as H,p as F,r as I,w as L,s as _,q as M,dy as N,dU as R,R as j,_ as B,f as k,dX as U,ad as X,ae as q,x as D,e4 as z,ed as W,i as G,ee as Y,a1 as J,a2 as Q,af as Z,ag as K}from"./entry-index-67938f7f.js";function ee(e){var t,n=function(l){return function(){t=null,e.apply(void 0,$(l))}},r=function(){if(t==null){for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];t=b(n(i))}};return r.cancel=function(){return b.cancel(t)},r}function C(e){return e!=null&&e===e.window}function S(e,t){var n;if(typeof window=="undefined")return 0;var r=t?"scrollTop":"scrollLeft",a=0;return C(e)?a=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?a=e.documentElement[r]:e&&(a=e[r]),e&&!C(e)&&typeof a!="number"&&(a=(n=(e.ownerDocument||e).documentElement)===null||n===void 0?void 0:n[r]),a}function te(e,t,n,r){var a=n-t;return e/=r/2,e<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t}function ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.getContainer,r=n===void 0?function(){return window}:n,a=t.callback,l=t.duration,i=l===void 0?450:l,o=r(),h=S(o,!0),p=Date.now(),f=function w(){var O=Date.now(),v=O-p,d=te(v>i?i:v,h,e,i);C(o)?o.scrollTo(window.pageXOffset,d):o instanceof HTMLDocument||o.constructor.name==="HTMLDocument"?o.documentElement.scrollTop=d:o.scrollTop=d,v<i?b(w):typeof a=="function"&&a()};b(f)}var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},re=ae;function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){oe(e,a,n[a])})}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(t,n){var r=x({},t,n.attrs);return g(P,x({},r,{icon:re}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var ie=A,ce=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},le=E({name:"ABackTop",inheritAttrs:!1,props:ce(),setup:function(t,n){var r=n.slots,a=n.attrs,l=n.emit,i=H("back-top",t),o=i.prefixCls,h=i.direction,p=F(),f=I({visible:!1,scrollEvent:null}),w=function(){return p.value&&p.value.ownerDocument?p.value.ownerDocument:window},O=function(u){var s=t.target,m=s===void 0?w:s,T=t.duration;ne(0,{getContainer:m,duration:T}),l("click",u)},v=ee(function(c){var u=t.visibilityHeight,s=S(c.target,!0);f.visible=s>u}),d=function(){var u=t.target,s=u||w,m=s();f.scrollEvent=W(m,"scroll",function(T){v(T)}),v({target:m})},y=function(){f.scrollEvent&&f.scrollEvent.remove(),v.cancel()};return L(function(){return t.target},function(){y(),_(function(){d()})}),M(function(){_(function(){d()})}),N(function(){_(function(){d()})}),R(function(){y()}),j(function(){y()}),function(){var c,u,s=g("div",{class:"".concat(o.value,"-content")},[g("div",{class:"".concat(o.value,"-icon")},[g(ie,null,null)])]),m=B(B({},a),{onClick:O,class:(c={},k(c,"".concat(o.value),!0),k(c,"".concat(a.class),a.class),k(c,"".concat(o.value,"-rtl"),h.value==="rtl"),c)}),T=U("fade");return g(z,T,{default:function(){return[X(g("div",D(D({},m),{},{ref:p}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||s]),[[q,f.visible]])]}})}}}),ue=V(le);const se=E({name:"LayoutFeatures",components:{BackTop:ue},setup(){return{getUseOpenBackTop:Y,getTarget:()=>document.body}}});function fe(e,t,n,r,a,l){const i=J("BackTop");return e.getUseOpenBackTop?(Q(),Z(i,{key:0,target:e.getTarget},null,8,["target"])):K("v-if",!0)}var pe=G(se,[["render",fe],["__file","/home/runner/work/admin/admin/src/layouts/default/feature/index.vue"]]);export{pe as default};