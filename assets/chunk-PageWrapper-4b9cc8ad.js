var ge=Object.defineProperty,he=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var te=(e,t,a)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,E=(e,t)=>{for(var a in t||(t={}))pe.call(t,a)&&te(e,a,t[a]);if(ee)for(var a of ee(t))be.call(t,a)&&te(e,a,t[a]);return e},q=(e,t)=>he(e,me(t));import{c as i,A as ie,H as _e,P as v,a as Q,u as Ce,p as x,dr as ye,b as H,c4 as $e,e as Pe,f as J,ds as Oe,ch as we,cW as Be,dt as He,q as ke,s as se,du as Ae,a0 as ce,bC as Se,i as ue,a2 as R,a3 as Y,a5 as G,a_ as P,a6 as T,a7 as de,Y as B,w as Fe,a1 as ae,af as re,b7 as Re,ac as Te,a4 as I,a$ as je,ag as ne,b8 as Le,b9 as Ie,ab as xe,aK as Ne,aJ as ze}from"./entry-index-cce5698a.js";import{B as De,u as We}from"./chunk-index-8dd04d4e.js";import{A as Me}from"./chunk-index-b61504c7.js";import{o as Ve}from"./chunk-omit-dfc15483.js";import"./chunk-index-7eba0095.js";import{T as Ee}from"./chunk-transButton-a9aa2140.js";var qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Je=qe;function oe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),c.forEach(function(r){Ye(e,r,a[r])})}return e}function Ye(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var U=function(t,a){var c=oe({},t,a.attrs);return i(ie,oe({},c,{icon:Je}),null)};U.displayName="ArrowLeftOutlined";U.inheritAttrs=!1;var Ge=U,Qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ue=Qe;function le(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),c.forEach(function(r){Xe(e,r,a[r])})}return e}function Xe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var X=function(t,a){var c=le({},t,a.attrs);return i(ie,le({},c,{icon:Ue}),null)};X.displayName="ArrowRightOutlined";X.inheritAttrs=!1;var Ze=X,Ke={backIcon:v.any,prefixCls:v.string,title:v.any,subTitle:v.any,breadcrumb:v.object,tags:v.any,footer:v.any,extra:v.any,avatar:v.object,ghost:v.looseBool,onBack:v.func},et=Q({name:"APageHeader",props:Ke,emits:["back"],slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,a){var c=a.emit,r=a.slots,_=Ce("page-header",t),u=_.prefixCls,p=_.direction,C=_.pageHeader,y=x(!1),k=ye(),j=function(n){var o=n.width;k.value||(y.value=o<768)},N=H(function(){var l,n,o;return(o=(l=t.ghost)!==null&&l!==void 0?l:(n=C.value)===null||n===void 0?void 0:n.ghost)!==null&&o!==void 0?o:!0}),z=function(){var n,o,s;return(s=(n=t.backIcon)!==null&&n!==void 0?n:(o=r.backIcon)===null||o===void 0?void 0:o.call(r))!==null&&s!==void 0?s:p.value==="rtl"?i(Ze,null,null):i(Ge,null,null)},D=function(n){return!n||!t.onBack?null:i(He,{componentName:"PageHeader",children:function(s){var f=s.back;return i("div",{class:"".concat(u.value,"-back")},[i(Ee,{onClick:function(h){c("back",h)},class:"".concat(u.value,"-back-button"),"aria-label":f},{default:function(){return[n]}})])}},null)},L=function(){var n;return t.breadcrumb?i(De,t.breadcrumb,null):(n=r.breadcrumb)===null||n===void 0?void 0:n.call(r)},b=function(){var n,o,s,f,d,h,O,A,m,W=t.avatar,S=(n=t.title)!==null&&n!==void 0?n:(o=r.title)===null||o===void 0?void 0:o.call(r),F=(s=t.subTitle)!==null&&s!==void 0?s:(f=r.subTitle)===null||f===void 0?void 0:f.call(r),M=(d=t.tags)!==null&&d!==void 0?d:(h=r.tags)===null||h===void 0?void 0:h.call(r),V=(O=t.extra)!==null&&O!==void 0?O:(A=r.extra)===null||A===void 0?void 0:A.call(r),w="".concat(u.value,"-heading"),Z=S||F||M||V;if(!Z)return null;var fe=z(),K=D(fe),ve=K||W||Z;return i("div",{class:w},[ve&&i("div",{class:"".concat(w,"-left")},[K,W?i(Me,W,null):(m=r.avatar)===null||m===void 0?void 0:m.call(r),S&&i("span",{class:"".concat(w,"-title"),title:typeof S=="string"?S:void 0},[S]),F&&i("span",{class:"".concat(w,"-sub-title"),title:typeof F=="string"?F:void 0},[F]),M&&i("span",{class:"".concat(w,"-tags")},[M])]),V&&i("span",{class:"".concat(w,"-extra")},[V])])},g=function(){var n,o,s=(n=t.footer)!==null&&n!==void 0?n:Be((o=r.footer)===null||o===void 0?void 0:o.call(r));return Oe(s)?null:i("div",{class:"".concat(u.value,"-footer")},[s])},$=function(n){return i("div",{class:"".concat(u.value,"-content")},[n])};return function(){var l,n,o,s=((n=t.breadcrumb)===null||n===void 0?void 0:n.routes)||r.breadcrumb,f=t.footer||r.footer,d=$e((o=r.default)===null||o===void 0?void 0:o.call(r)),h=Pe(u.value,(l={"has-breadcrumb":s,"has-footer":f},J(l,"".concat(u.value,"-ghost"),N.value),J(l,"".concat(u.value,"-rtl"),p.value==="rtl"),J(l,"".concat(u.value,"-compact"),y.value),l));return i(we,{onResize:j},{default:function(){return[i("div",{class:h},[L(),b(),d.length?$(d):null,g()])]}})}}}),tt=_e(et);function at(e){let t;ke(()=>{e(),se(()=>{t=!0})}),Ae(()=>{t&&e()})}const rt=Q({name:"PageFooter",inheritAttrs:!1,setup(){const{getPrefixCls:e}=ce();return{prefixCls:e("page-footer"),getCalcContentWidth:Se}}});function nt(e,t,a,c,r,_){return R(),Y("div",{class:T(e.prefixCls),style:de({width:e.getCalcContentWidth})},[G("div",{class:T(`${e.prefixCls}__left`)},[P(e.$slots,"left",{},void 0,!0)],2),P(e.$slots,"default",{},void 0,!0),G("div",{class:T(`${e.prefixCls}__right`)},[P(e.$slots,"right",{},void 0,!0)],2)],6)}var ot=ue(rt,[["render",nt],["__scopeId","data-v-3661f935"]]);const lt=Q({name:"PageWrapper",components:{PageHeader:tt,PageFooter:ot},inheritAttrs:!1,props:{title:{type:String,default:""},dense:Boolean,ghost:Boolean,content:{type:String,default:""},contentStyle:{type:Object,default:()=>({})},contentBackground:Boolean,contentFullHeight:Boolean,contentClass:{type:String,default:""},fixedHeight:Boolean},setup(e,{slots:t}){const a=x(null),c=x(null),r=x(0),{getPrefixCls:_}=ce(),u=_("page-wrapper"),{contentHeight:p,setPageHeight:C,pageHeight:y}=We(),k=H(()=>[u,{[`${u}-dense`]:e.dense}]),j=H(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),N=H(()=>Object.keys(Ve(t,"default","leftFooter","rightFooter","headerContent"))),z=H(()=>{const{contentBackground:b,contentClass:g}=e;return[`${u}-content`,g,{[`${u}-content-bg`]:b}]}),D=H(()=>{const{contentFullHeight:b,contentStyle:g,fixedHeight:$}=e;if(!b)return g;const l=`${B(y)}px`;return q(E(q(E({},g),{minHeight:l}),$?{height:l}:{}),{paddingBottom:`${B(r)}px`})});Fe(()=>[p==null?void 0:p.value,j.value],()=>{L()},{flush:"post",immediate:!0}),at(()=>{se(()=>L())});function L(){var h,O;if(!e.contentFullHeight)return;const b=B(c),g=B(a);r.value=0;const $=b==null?void 0:b.$el;$&&(r.value+=(h=$==null?void 0:$.offsetHeight)!=null?h:0);let l=0;const n=g==null?void 0:g.$el;n&&(l+=(O=n==null?void 0:n.offsetHeight)!=null?O:0);let o=0,s="0px",f="0px";const d=document.querySelectorAll(_("page-wrapper-content"));if(d!=null&&d.length){const A=d[0],m=getComputedStyle(A);s=m==null?void 0:m.marginBottom,f=m==null?void 0:m.marginTop}s&&(o+=Number(s.replace(/[^\d]/g,""))),f&&(o+=Number(f.replace(/[^\d]/g,""))),C==null||C(B(p)-B(r)-l-o)}return{getClass:k,getShowFooter:j,getHeaderSlots:N,getContentClass:z,getContentStyle:D,pageHeight:y}}});function it(e,t,a,c,r,_){var C;const u=ae("PageHeader"),p=ae("PageFooter");return R(),Y("div",{class:T(e.getClass)},[e.content||e.$slots.headerContent||e.title||((C=e.getHeaderSlots)==null?void 0:C.length)?(R(),re(u,je({key:0,ref:"headerRef"},e.$attrs,{ghost:e.ghost,title:e.title}),Re({default:I(()=>[e.content?(R(),Y(xe,{key:0},[Ne(ze(e.content),1)],2112)):P(e.$slots,"headerContent",{key:1},void 0,!0)]),_:2},[Te(e.getHeaderSlots,y=>({name:y,fn:I(k=>[P(e.$slots,y,Le(Ie(k)),void 0,!0)])}))]),1040,["ghost","title"])):ne("v-if",!0),G("div",{class:T([e.getContentClass,"overflow-hidden"]),style:de(e.getContentStyle)},[P(e.$slots,"default",{},void 0,!0)],6),e.getShowFooter?(R(),re(p,{key:1,ref:"footerRef"},{left:I(()=>[P(e.$slots,"leftFooter",{},void 0,!0)]),right:I(()=>[P(e.$slots,"rightFooter",{},void 0,!0)]),_:3},512)):ne("v-if",!0)],2)}var ht=ue(lt,[["render",it],["__scopeId","data-v-640ca12e"]]);export{ht as P,at as o};