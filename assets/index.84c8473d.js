var Me=Object.defineProperty,We=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var be=(t,e,r)=>e in t?Me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,D=(t,e)=>{for(var r in e||(e={}))Ue.call(e,r)&&be(t,r,e[r]);if(ge)for(var r of ge(e))Ve.call(e,r)&&be(t,r,e[r]);return t},te=(t,e)=>We(t,Ne(e));import{c as o,f as b,U as Fe,p as L,dt as Ge,du as He,dv as Qe,_ as y,ak as Xe,P as x,a as j,t as he,u as U,bX as Ze,F as oe,a0 as Je,W as Ke,bc as Ce,b as z,D as Ye,v as et,cb as tt,Z as nt,e as A,Q as se,y as N,M as je,a9 as Be,i as Ie,dw as rt,aa as le,ab as q,ac as F,af as M,b6 as H,ae as G,am as De,H as at,I as lt,an as ot,a6 as P,b7 as st,b3 as xe,b5 as ze,b2 as it,bs as ct,j as ut,ad as Se,aQ as dt,aR as pt}from"./index.618dfac3.js";import{P as vt}from"./PageWrapper.3118f720.js";import{g as ft}from"./get.23e28aa8.js";import{t as mt,D as yt,S as gt,G as ke}from"./index.6d21abc6.js";import{R as _e,r as we}from"./responsiveObserve.9d31ff62.js";import{T as bt}from"./index.fe10856c.js";import"./index.beb0008c.js";import"./DownOutlined.65cc595a.js";import"./index.92e4b7aa.js";import"./eagerComputed.2a896764.js";import"./useSize.70cd43c0.js";import"./index.9af925d1.js";import"./omit.1204a9e6.js";import"./_flatRest.f15a88bc.js";import"./_setToString.6466c55e.js";function Q(t){return t!=null}var ht=function(e){var r=e.itemPrefixCls,n=e.component,a=e.span,l=e.labelStyle,s=e.contentStyle,c=e.bordered,u=e.label,f=e.content,p=e.colon,S=n;if(c){var h;return o(S,{class:[(h={},b(h,"".concat(r,"-item-label"),Q(u)),b(h,"".concat(r,"-item-content"),Q(f)),h)],colSpan:a},{default:function(){return[Q(u)&&o("span",{style:l},[u]),Q(f)&&o("span",{style:s},[f])]}})}return o(S,{class:["".concat(r,"-item")],colSpan:a},{default:function(){return[o("div",{class:"".concat(r,"-item-container")},[u&&o("span",{class:["".concat(r,"-item-label"),b({},"".concat(r,"-item-no-colon"),!p)],style:l},[u]),f&&o("span",{class:"".concat(r,"-item-content"),style:s},[f])])]}})},ne=ht,Ct=function(e){var r=function(h,k,m){var d=k.colon,i=k.prefixCls,v=k.bordered,C=m.component,w=m.type,E=m.showLabel,B=m.showContent,$=m.labelStyle,I=m.contentStyle;return h.map(function(g,T){var R,V,O=g.props||{},ce=O.prefixCls,J=ce===void 0?i:ce,ue=O.span,de=ue===void 0?1:ue,pe=O.labelStyle,ve=O.contentStyle,fe=O.label,me=fe===void 0?(V=(R=g.children)===null||R===void 0?void 0:R.label)===null||V===void 0?void 0:V.call(R):fe,ye=Ge(g),K=He(g),Y=Qe(g),ee=g.key;return typeof C=="string"?o(ne,{key:"".concat(w,"-").concat(String(ee)||T),class:K,style:Y,labelStyle:y(y({},$.value),pe),contentStyle:y(y({},I.value),ve),span:de,colon:d,component:C,itemPrefixCls:J,bordered:v,label:E?me:null,content:B?ye:null},null):[o(ne,{key:"label-".concat(String(ee)||T),class:K,style:y(y(y({},$.value),Y),pe),span:1,colon:d,component:C[0],itemPrefixCls:J,bordered:v,label:me},null),o(ne,{key:"content-".concat(String(ee)||T),class:K,style:y(y(y({},I.value),Y),ve),span:de*2-1,component:C[1],itemPrefixCls:J,bordered:v,content:ye},null)]})},n=e.prefixCls,a=e.vertical,l=e.row,s=e.index,c=e.bordered,u=Fe(Oe,{labelStyle:L({}),contentStyle:L({})}),f=u.labelStyle,p=u.contentStyle;return a?o(Xe,null,[o("tr",{key:"label-".concat(s),class:"".concat(n,"-row")},[r(l,e,{component:"th",type:"label",showLabel:!0,labelStyle:f,contentStyle:p})]),o("tr",{key:"content-".concat(s),class:"".concat(n,"-row")},[r(l,e,{component:"td",type:"content",showContent:!0,labelStyle:f,contentStyle:p})])]):o("tr",{key:s,class:"".concat(n,"-row")},[r(l,e,{component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:f,contentStyle:p})])},xt=Ct;x.string,x.any,x.number;var St={prefixCls:x.string,label:x.any,labelStyle:x.style,contentStyle:x.style,span:x.number.def(1)},kt=j({name:"ADescriptionsItem",props:St,slots:["label"],setup:function(e,r){var n=r.slots;return function(){var a;return(a=n.default)===null||a===void 0?void 0:a.call(n)}}}),Re={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function _t(t,e){if(typeof t=="number")return t;if(oe(t)==="object")for(var r=0;r<we.length;r++){var n=we[r];if(e[n]&&t[n]!==void 0)return t[n]||Re[n]}return 3}function Pe(t,e,r){var n=t;return(e===void 0||e>r)&&(n=et(t,{span:r}),tt(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),n}function wt(t,e){var r=Ye(t),n=[],a=[],l=e;return r.forEach(function(s,c){var u,f=(u=s.props)===null||u===void 0?void 0:u.span,p=f||1;if(c===r.length-1){a.push(Pe(s,f,l)),n.push(a);return}p<l?(l-=p,a.push(s)):(a.push(Pe(s,p,l)),n.push(a),l=e,a=[])}),n}var Pt={prefixCls:x.string,bordered:x.looseBool,size:x.oneOf(he("default","middle","small")).def("default"),title:x.any,extra:x.any,column:{type:[Number,Object],default:function(){return Re}},layout:x.oneOf(he("horizontal","vertical")),colon:x.looseBool,labelStyle:x.style,contentStyle:x.style},Oe=Symbol("descriptionsContext"),W=j({name:"ADescriptions",props:Pt,slots:["title","extra"],Item:kt,setup:function(e,r){var n=r.slots,a=U("descriptions",e),l=a.prefixCls,s=a.direction,c,u=L({});Ze(function(){c=_e.subscribe(function(p){oe(e.column)==="object"&&(u.value=p)})}),Je(function(){_e.unsubscribe(c)}),Ke(Oe,{labelStyle:Ce(e,"labelStyle"),contentStyle:Ce(e,"contentStyle")});var f=z(function(){return _t(e.column,u.value)});return function(){var p,S,h,k,m=e.size,d=e.bordered,i=d===void 0?!1:d,v=e.layout,C=v===void 0?"horizontal":v,w=e.colon,E=w===void 0?!0:w,B=e.title,$=B===void 0?(S=n.title)===null||S===void 0?void 0:S.call(n):B,I=e.extra,g=I===void 0?(h=n.extra)===null||h===void 0?void 0:h.call(n):I,T=(k=n.default)===null||k===void 0?void 0:k.call(n),R=wt(T,f.value);return o("div",{class:[l.value,(p={},b(p,"".concat(l.value,"-").concat(m),m!=="default"),b(p,"".concat(l.value,"-bordered"),!!i),b(p,"".concat(l.value,"-rtl"),s.value==="rtl"),p)]},[($||g)&&o("div",{class:"".concat(l.value,"-header")},[$&&o("div",{class:"".concat(l.value,"-title")},[$]),g&&o("div",{class:"".concat(l.value,"-extra")},[g])]),o("div",{class:"".concat(l.value,"-view")},[o("table",null,[o("tbody",null,[R.map(function(V,O){return o(xt,{key:O,index:O,colon:E,prefixCls:l.value,vertical:C==="vertical",bordered:i,row:V},null)})])])])])}}});W.install=function(t){return t.component(W.name,W),t.component(W.Item.name,W.Item),t};var $e=W,$t=function(){return{prefixCls:String,width:{type:[Number,String]}}},jt=j({name:"SkeletonTitle",props:$t(),setup:function(e){return function(){var r=e.prefixCls,n=e.width,a=typeof n=="number"?"".concat(n,"px"):n;return o("h3",{class:r,style:{width:a}},null)}}}),ie=jt,Bt=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},It=j({name:"SkeletonParagraph",props:Bt(),setup:function(e){var r=function(a){var l=e.width,s=e.rows,c=s===void 0?2:s;if(Array.isArray(l))return l[a];if(c-1===a)return l};return function(){var n=e.prefixCls,a=e.rows,l=nt(Array(a)).map(function(s,c){var u=r(c);return o("li",{key:c,style:{width:typeof u=="number"?"".concat(u,"px"):u}},null)});return o("ul",{class:n},[l])}}}),Dt=It,X=function(){return{prefixCls:String,size:[String,Number],shape:String,active:{type:Boolean,default:void 0}}},Ae=function(e){var r,n,a=e.prefixCls,l=e.size,s=e.shape,c=A((r={},b(r,"".concat(a,"-lg"),l==="large"),b(r,"".concat(a,"-sm"),l==="small"),r)),u=A((n={},b(n,"".concat(a,"-circle"),s==="circle"),b(n,"".concat(a,"-square"),s==="square"),b(n,"".concat(a,"-round"),s==="round"),n)),f=typeof l=="number"?{width:"".concat(l,"px"),height:"".concat(l,"px"),lineHeight:"".concat(l,"px")}:{};return o("span",{class:A(a,c,u),style:f},null)};Ae.displayName="SkeletonElement";var Z=Ae,zt=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function re(t){return t&&oe(t)==="object"?t:{}}function Rt(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Ot(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function At(t,e){var r={};return(!t||!e)&&(r.width="61%"),!t&&e?r.rows=3:r.rows=2,r}var Et=j({name:"ASkeleton",props:se(zt(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,r){var n=r.slots,a=U("skeleton",e),l=a.prefixCls,s=a.direction;return function(){var c,u=e.loading,f=e.avatar,p=e.title,S=e.paragraph,h=e.active,k=e.round,m=l.value;if(u||e.loading===void 0){var d,i=!!f||f==="",v=!!p||p==="",C=!!S||S==="",w;if(i){var E=y(y({prefixCls:"".concat(m,"-avatar")},Rt(v,C)),re(f));w=o("div",{class:"".concat(m,"-header")},[o(Z,E,null)])}var B;if(v||C){var $;if(v){var I=y(y({prefixCls:"".concat(m,"-title")},Ot(i,C)),re(p));$=o(ie,I,null)}var g;if(C){var T=y(y({prefixCls:"".concat(m,"-paragraph")},At(i,v)),re(S));g=o(Dt,T,null)}B=o("div",{class:"".concat(m,"-content")},[$,g])}var R=A(m,(d={},b(d,"".concat(m,"-with-avatar"),i),b(d,"".concat(m,"-active"),h),b(d,"".concat(m,"-rtl"),s.value==="rtl"),b(d,"".concat(m,"-round"),k),d));return o("div",{class:R},[w,B])}return(c=n.default)===null||c===void 0?void 0:c.call(n)}}}),_=Et,Tt=function(){return y(y({},X()),{size:String,block:Boolean})},qt=j({name:"ASkeletonButton",props:se(Tt(),{size:"default"}),setup:function(e){var r=U("skeleton",e),n=r.prefixCls,a=z(function(){var l;return A(n.value,"".concat(n.value,"-element"),(l={},b(l,"".concat(n.value,"-active"),e.active),b(l,"".concat(n.value,"-block"),e.block),l))});return function(){return o("div",{class:a.value},[o(Z,N(N({},e),{},{prefixCls:"".concat(n.value,"-button")}),null)])}}}),Ee=qt,Lt=j({name:"ASkeletonInput",props:y(y({},je(X(),["shape"])),{size:String}),setup:function(e){var r=U("skeleton",e),n=r.prefixCls,a=z(function(){return A(n.value,"".concat(n.value,"-element"),b({},"".concat(n.value,"-active"),e.active))});return function(){return o("div",{class:a.value},[o(Z,N(N({},e),{},{prefixCls:"".concat(n.value,"-input")}),null)])}}}),Te=Lt,Mt="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Wt=j({name:"ASkeletonImage",props:je(X(),["size","shape","active"]),setup:function(e){var r=U("skeleton",e),n=r.prefixCls,a=z(function(){return A(n.value,"".concat(n.value,"-element"))});return function(){return o("div",{class:a.value},[o("div",{class:"".concat(n.value,"-image")},[o("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",class:"".concat(n.value,"-image-svg")},[o("path",{d:Mt,class:"".concat(n.value,"-image-path")},null)])])])}}}),qe=Wt,Nt=function(){return y(y({},X()),{shape:String})},Ut=j({name:"ASkeletonAvatar",props:se(Nt(),{size:"default",shape:"circle"}),setup:function(e){var r=U("skeleton",e),n=r.prefixCls,a=z(function(){return A(n.value,"".concat(n.value,"-element"),b({},"".concat(n.value,"-active"),e.active))});return function(){return o("div",{class:a.value},[o(Z,N(N({},e),{},{prefixCls:"".concat(n.value,"-avatar")}),null)])}}}),Le=Ut;_.Button=Ee;_.Avatar=Le;_.Input=Te;_.Image=qe;_.Title=ie;_.install=function(t){return t.component(_.name,_),t.component(_.Button.name,Ee),t.component(_.Avatar.name,Le),t.component(_.Input.name,Te),t.component(_.Image.name,qe),t.component(_.Title.name,ie),t};var Vt={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:Object};const Ft=j({name:"CollapseContainer",components:{Skeleton:_},props:{title:{type:String,default:""},canExpand:{type:Boolean,default:!0},helpMessage:{type:[Array,String],default:""},triggerWindowResize:Boolean,loading:{type:Boolean,default:!1},active:{type:Boolean,default:!0},lazyTime:{type:Number,default:0}},setup(t){const e=L(!0),{getPrefixCls:r}=Be(),n=r("collapse-container");function a(){e.value=!e.value,t.triggerWindowResize&&rt(mt,200)}return{show:e,prefixCls:n,handleExpand:a}}}),Gt={class:"p-2"};function Ht(t,e,r,n,a,l){const s=le("Skeleton");return q(),F("div",{class:M(t.prefixCls)},[t.$slots.header?(q(),F("div",{key:0,class:M(`${t.prefixCls}__header`)},[H(t.$slots,"header",{},void 0,!0)],2)):(q(),F("div",{key:1,class:M(`${t.prefixCls}__header px-2 py-4`)},[G("div",{class:M(`${t.prefixCls}__action`)},[H(t.$slots,"action",{},void 0,!0)],2)],2)),G("div",Gt,[t.loading?(q(),De(s,{key:0,active:t.active},null,8,["active"])):at((q(),F("div",{key:1,class:M(`${t.prefixCls}__body`)},[H(t.$slots,"default",{},void 0,!0)],2)),[[lt,t.show]])]),t.$slots.footer?(q(),F("div",{key:2,class:M(`${t.prefixCls}__footer`)},[H(t.$slots,"footer",{},void 0,!0)],2)):ot("v-if",!0)],2)}var Qt=Ie(Ft,[["render",Ht],["__scopeId","data-v-72719b4a"]]);function Xt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ze(t)}var Zt=j({name:"Description",props:Vt,emits:["register"],setup(t,{attrs:e,emit:r,slots:n}){const a=L(null),{getPrefixCls:l}=Be(),s=l("description"),c=z(()=>D(D({},t),P(a))),u=z(()=>!!P(c).title),f=z(()=>D({canExpand:!1},P(c).collapseOptions));function p({label:d,labelMinWidth:i,labelStyle:v}){if(!v&&!i)return d;const C=te(D({},v),{minWidth:`${i}px`});return o("div",{style:C},[d])}function S(){const{schema:d,data:i}=P(c);return P(d).map(v=>{const{render:C,field:w,span:E,show:B,contentMinWidth:$}=v;if(B&&xe(B)&&!B(i))return null;const I=()=>{if(!i)return null;const g=ft(i,w);return xe(C)?C(g,i):g!=null?g:""};return o($e.Item,{span:E,key:w,label:p(v)},{default:()=>{if(!$)return I();const g={minWidth:`${$}px`};return o("div",{style:g},[I()])}})}).filter(v=>!!v)}const h=()=>{let d;const i=z(()=>te(D(D({},e),P(c)),{title:void 0}));return o($e,st({class:s},P(i)),Xt(d=S())?d:{default:()=>[d]})},k=()=>{const d=t.useCollapse?h():o("div",null,[h()]);if(!t.useCollapse)return d;const{canExpand:i,helpMessage:v}=P(f),{title:C}=P(c);return o(Qt,{title:C,canExpand:i,helpMessage:v},{default:()=>d,action:()=>{var w;return(w=n==null?void 0:n.action)==null?void 0:w.call(n)}})};return r("register",{setDescProps(d){a.value=D(D({},P(a)),d)}}),()=>P(u)?k():h()}});function ae(t){if(!it())throw new Error("Please put useDescription function in the setup function");const e=L(null),r=L(!1);function n(l){P(r)&&ct()||(e.value=l,t&&l.setDescProps(t),r.value=!0)}return[n,{setDescProps:l=>{var s;(s=P(e))==null||s.setDescProps(l)}}]}function Jt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ze(t)}var Kt=j({name:"AboutPage",components:{PageWrapper:vt,Description:Zt},setup(){const{t}=ut(),{pkg:e,lastBuildTime:r}={pkg:{dependencies:{"@iconify/iconify":"^2.2.0","@vueuse/core":"^8.2.4","ant-design-vue":"3.1.0-rc.3",axios:"^0.26.1","crypto-js":"^4.0.0",dayjs:"^1.11.0",echarts:"^5.3.1","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.0",pinia:"^2.0.13",qrcode:"^1.4.4",qs:"^6.10.0","resize-observer-polyfill":"^1.5.1",sortablejs:"^1.13.0",vditor:"^3.8.12",vue:"^3.2.31","vue-i18n":"^9.1.5","vue-router":"^4.0.14",xlsx:"^0.18.4"},devDependencies:{"@commitlint/cli":"^13.2.0","@commitlint/config-conventional":"^13.2.0","@iconify/json":"^1.1.353","@purge-icons/generated":"^0.7.0","@types/crypto-js":"^4.0.1","@types/fs-extra":"^9.0.11","@types/http-proxy":"^1.17.6","@types/lodash-es":"^4.17.5","@types/mockjs":"^1.0.3","@types/nprogress":"^0.2.0","@types/qrcode":"^1.4.0","@types/qs":"^6.9.6","@types/yargs":"^17.0.0","@typescript-eslint/eslint-plugin":"^4.26.0","@typescript-eslint/parser":"^4.26.0","@vitejs/plugin-legacy":"^1.4.1","@vitejs/plugin-vue":"^1.2.3","@vitejs/plugin-vue-jsx":"^1.1.5","@vue/compiler-sfc":"^3.1.1",autoprefixer:"^10.2.6",commitizen:"^4.2.3",consola:"^2.15.3","conventional-changelog-cli":"^2.1.1","cross-env":"^7.0.3","dot-prop":"^6.0.1",dotenv:"^10.0.0",eslint:"^7.28.0","eslint-config-prettier":"^8.3.0","eslint-define-config":"^1.0.8","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^7.10.0",esno:"^0.10.1","fs-extra":"^10.0.0","http-server":"^13.0.2","is-ci":"^3.0.0",less:"^4.1.1","lint-staged":"^11.0.0",postcss:"^8.3.0",prettier:"^2.3.1","pretty-quick":"^3.1.0",rimraf:"^3.0.2","rollup-plugin-visualizer":"^5.5.0",stylelint:"^13.13.1","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^22.0.0","stylelint-order":"^4.1.0","ts-node":"^10.0.0",typescript:"^4.3.2","unplugin-vue-components":"^0.18.5",vite:"^2.9.1","vite-plugin-compression":"^0.3.5","vite-plugin-html":"^3.2.0","vite-plugin-imagemin":"^0.4.6","vite-plugin-mkcert":"^1.6.0","vite-plugin-mock":"^2.7.0","vite-plugin-purge-icons":"^0.7.0","vite-plugin-pwa":"^0.11.3","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^1.0.5","vite-plugin-theme":"^0.8.1","vite-plugin-vue-setup-extend":"^0.4.0","vite-plugin-windicss":"^1.8.3","vue-eslint-parser":"^7.6.0","vue-tsc":"^0.28.0"},name:"kory-admin",version:"0.0.1"},lastBuildTime:"2022-04-04 23:16:36"},{name:n,version:a,dependencies:l,devDependencies:s}=e,c=[],u=[],f=i=>v=>o(bt,{color:i},Jt(v)?v:{default:()=>[v]}),p=i=>v=>o("a",{href:v,target:"_blank"},[i]),S=[{label:"\u7248\u672C",field:"version",render:f("blue")},{label:"\u6700\u540E\u7F16\u8BD1\u65F6\u95F4",field:"lastBuildTime",render:f("blue")},{label:"\u6587\u6863\u5730\u5740",field:"doc",render:p("\u6587\u6863\u5730\u5740")},{label:"\u9884\u89C8\u5730\u5740",field:"preview",render:p("\u9884\u89C8\u5730\u5740")},{label:"Github",field:"github",render:p("Github")}],h={version:a,lastBuildTime:r,doc:yt,preview:gt,github:ke};Object.keys(l).forEach(i=>{c.push({field:i,label:i})}),Object.keys(s).forEach(i=>{u.push({field:i,label:i})});const[k]=ae({title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56",data:l,schema:c,column:{xs:2,sm:2,md:3,xl:4}}),[m]=ae({title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56",data:s,schema:u,column:{xs:2,sm:2,md:3,xl:4}}),[d]=ae({title:"\u9879\u76EE\u4FE1\u606F",data:h,schema:S,column:{xs:2,sm:2,xl:3}});return{name:n,t,register:k,registerDev:m,infoRegister:d,GITHUB_URL:ke}}});const Yt={class:"flex justify-between items-center"},en={class:"flex-1"},tn=["href"],nn=pt(" \u662F\u4E00\u4E2A\u57FA\u4E8EVue3,\u3001Vite\u3001Ant-Design-Vue\u3001TypeScript\u7684\u5B66\u4E60\u9879\u76EE ");function rn(t,e,r,n,a,l){const s=le("Description"),c=le("PageWrapper");return q(),De(c,{title:t.t("routes.dashboard.about"),class:"about"},{headerContent:Se(()=>[G("div",Yt,[G("span",en,[G("a",{href:t.GITHUB_URL,target:"_blank"},dt(t.name),9,tn),nn])])]),default:Se(()=>[o(s,{class:"enter-y",onRegister:t.infoRegister},null,8,["onRegister"]),o(s,{class:"enter-y",onRegister:t.register},null,8,["onRegister"]),o(s,{class:"enter-y",onRegister:t.registerDev},null,8,["onRegister"])]),_:1},8,["title"])}var xn=Ie(Kt,[["render",rn]]);export{xn as default};
