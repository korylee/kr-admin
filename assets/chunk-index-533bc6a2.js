import{G as z,H as G,a as J,P as i,u as K,p as m,M as h,e as q,f as s,c as t,N as Q,c2 as R,c1 as U,dz as W,ab as X,ac as Y,x as N,dI as Z,C as ee,dJ as ae,h as ne,E as le,dK as te,dL as oe,dM as se,dN as ce}from"./entry-index-200dc0c4.js";var ie={success:ee,info:ae,error:ne,warning:le},re={success:te,info:oe,error:se,warning:ce},ue=G("success","info","warning","error"),de=function(){return{type:i.oneOf(ue),closable:{type:Boolean,default:void 0},closeText:i.any,message:i.any,description:i.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:i.any,closeIcon:i.any,onClose:Function}},ve=J({name:"AAlert",inheritAttrs:!1,props:de(),setup:function(a,v){var c=v.slots,H=v.emit,y=v.attrs,L=v.expose,I=K("alert",a),B=I.prefixCls,S=I.direction,r=m(!1),b=m(!1),w=m(),_=function(l){l.preventDefault();var o=w.value;o.style.height="".concat(o.offsetHeight,"px"),o.style.height="".concat(o.offsetHeight,"px"),r.value=!0,H("close",l)},A=function(){var l;r.value=!1,b.value=!0,(l=a.afterClose)===null||l===void 0||l.call(a)};L({animationEnd:A});var M=m({});return function(){var n,l,o=a.banner,E=a.closeIcon,P=E===void 0?(l=c.closeIcon)===null||l===void 0?void 0:l.call(c):E,g=a.closable,u=a.type,d=a.showIcon,x=h(c,a,"closeText"),f=h(c,a,"description"),T=h(c,a,"message"),p=h(c,a,"icon");d=o&&d===void 0?!0:d,u=o&&u===void 0?"warning":u||"info";var j=(f?re:ie)[u]||null;x&&(g=!0);var e=B.value,k=q(e,(n={},s(n,"".concat(e,"-").concat(u),!0),s(n,"".concat(e,"-closing"),r.value),s(n,"".concat(e,"-with-description"),!!f),s(n,"".concat(e,"-no-icon"),!d),s(n,"".concat(e,"-banner"),!!o),s(n,"".concat(e,"-closable"),g),s(n,"".concat(e,"-rtl"),S.value==="rtl"),n)),V=g?t("button",{type:"button",onClick:_,class:"".concat(e,"-close-icon"),tabindex:0},[x?t("span",{class:"".concat(e,"-close-text")},[x]):P===void 0?t(Q,null,null):P]):null,D=p&&(R(p)?U(p,{class:"".concat(e,"-icon")}):t("span",{class:"".concat(e,"-icon")},[p]))||t(j,{class:"".concat(e,"-icon")},null),$=W("".concat(e,"-motion"),{appear:!1,css:!0,onAfterLeave:A,onBeforeLeave:function(C){C.style.maxHeight="".concat(C.offsetHeight,"px")},onLeave:function(C){C.style.maxHeight="0px"}});return b.value?null:t(Z,$,{default:function(){return[X(t("div",N(N({role:"alert"},y),{},{style:[y.style,M.value],class:[y.class,k],"data-show":!r.value,ref:w}),[d?D:null,t("div",{class:"".concat(e,"-content")},[T?t("div",{class:"".concat(e,"-message")},[T]):null,f?t("div",{class:"".concat(e,"-description")},[f]):null]),V]),[[Y,!r.value]])]}})}}}),pe=z(ve);export{pe as A};
