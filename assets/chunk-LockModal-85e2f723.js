var k=(e,r,s)=>new Promise((a,t)=>{var c=o=>{try{l(s.next(o))}catch(i){t(i)}},n=o=>{try{l(s.throw(o))}catch(i){t(i)}},l=o=>o.done?a(o.value):Promise.resolve(o.value).then(c,n);l((s=s.apply(e,r)).next())});import{dQ as C,d_ as p,d$ as m,aV as L,i as v,a as y,e0 as $,B,j as M,Z as S,b as _,e1 as N,$ as g,a0 as w,ad as b,a2 as h,a3 as f,a4 as u,aH as I,c as P,aI as R,bh as U,aX as V}from"./entry-index-200dc0c4.js";const O=C({id:"lock",state:()=>({lockInfo:p.getLocal(m)}),getters:{getLockInfo(e){return this.lockInfo}},actions:{setLockInfo(e){this.lockInfo=Object.assign({},this.lockInfo,e),p.setLocal(m,this.lockInfo)},resetLockInfo(){p.removeLocal(m),this.lockInfo=null},unLock(e=""){return k(this,null,function*(){var a;const r=L();return((a=this.lockInfo)==null?void 0:a.pwd)===e?(this.resetLockInfo(),!0):yield(()=>k(this,null,function*(){var t;try{const c=(t=r.getUserInfo)==null?void 0:t.username,n=yield r.login({username:c,password:e,goHome:!1,mode:"none"});return n&&this.resetLockInfo(),n}catch(c){return!1}}))()})}}});const j=y({name:"LockModal",components:{BasicModal:$,Button:B},setup(){const{t:e}=M(),{getPrefixCls:r}=S(),s=r("header-lock-modal"),a=L(),t=O(),c=_(()=>{var d;return(d=a.getUserInfo)==null?void 0:d.realName}),[n,{closeModal:l}]=N();function o(){return k(this,null,function*(){l(),t.setLockInfo({isLock:!0,pwd:"1321"})})}const i=_(()=>{var d;return((d=a.getUserInfo)==null?void 0:d.avatar)||V});return{t:e,prefixCls:s,getRealName:c,register:n,handleLock:o,avatar:i}}}),x=["src"];function H(e,r,s,a,t,c){const n=g("Button"),l=g("BasicModal");return w(),b(l,U(e.$attrs,{footer:null,title:e.t("layout.header.lockScreen"),class:e.prefixCls,onRegister:e.register}),{default:h(()=>[f("div",{class:u(`${e.prefixCls}__entry`)},[f("div",{class:u(`${e.prefixCls}__header`)},[f("img",{src:e.avatar,class:u(`${e.prefixCls}__header-img`),alt:""},null,10,x),f("p",{class:u(`${e.prefixCls}__header-name`)},I(e.getRealName),3)],2),f("div",{class:u(`${e.prefixCls}__footer`)},[P(n,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[R(I(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var D=v(j,[["render",H],["__scopeId","data-v-f2e2dcfc"],["__file","/home/runner/work/admin/admin/src/layouts/default/header/components/lock/LockModal.vue"]]);export{D as default};
