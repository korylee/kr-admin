var f=(e,n,t)=>new Promise((s,a)=>{var i=o=>{try{c(t.next(o))}catch(l){a(l)}},r=o=>{try{c(t.throw(o))}catch(l){a(l)}},c=o=>o.done?s(o.value):Promise.resolve(o.value).then(i,r);c((t=t.apply(e,n)).next())});import{ec as C,em as u,en as k,bo as L,i as v,a as y,B,j as $,a0 as M,b as _,a1 as g,a2 as S,af as N,a4 as h,a5 as p,a6 as d,aJ as I,c as b,aK as w,a$ as P,bp as R}from"./entry-index-f8c73ed4.js";import{B as U,u as K}from"./chunk-index-97817da5.js";import"./chunk-index-2aa5eece.js";import"./chunk-DownOutlined-b59a1777.js";import"./chunk-_baseIteratee-bbaf3434.js";import"./chunk-get-a33eb25b.js";import"./chunk-_flatRest-9949ca52.js";import"./chunk-_setToString-44645b14.js";import"./chunk-hasIn-ddcfe20e.js";import"./chunk-createAsyncComponent-a1558b2a.js";import"./chunk-siteSetting-42f4f75f.js";import"./chunk-index-255bae12.js";import"./chunk-omit-c44cd89e.js";import"./chunk-isPlainObject-77c92b7a.js";import"./chunk-useDesign-810930d3.js";import"./chunk-useLocaleSetting-87626d57.js";import"./chunk-LeftOutlined-4e65f2e0.js";import"./chunk-useTabs-44a4b907.js";import"./chunk-index-5a145503.js";import"./chunk-useState-86a27c50.js";import"./chunk-useRefs-da5133cc.js";import"./chunk-useTimeout-86364757.js";import"./chunk-index-c214622f.js";const O=C({id:"lock",state:()=>({lockInfo:u.getLocal(k)}),getters:{getLockInfo(e){return this.lockInfo}},actions:{setLockInfo(e){this.lockInfo=Object.assign({},this.lockInfo,e),u.setLocal(k,this.lockInfo)},resetLockInfo(){u.removeLocal(k),this.lockInfo=null},unLock(e=""){return f(this,null,function*(){var s;const n=L();return((s=this.lockInfo)==null?void 0:s.pwd)===e?(this.resetLockInfo(),!0):yield(()=>f(this,null,function*(){var a;try{const i=(a=n.getUserInfo)==null?void 0:a.username,r=yield n.login({username:i,password:e,goHome:!1,mode:"none"});return r&&this.resetLockInfo(),r}catch(i){return!1}}))()})}}});const V=y({name:"LockModal",components:{BasicModal:U,Button:B},setup(){const{t:e}=$(),{getPrefixCls:n}=M(),t=n("header-lock-modal"),s=L(),a=O(),i=_(()=>{var m;return(m=s.getUserInfo)==null?void 0:m.realName}),[r,{closeModal:c}]=K();function o(){return f(this,null,function*(){c(),a.setLockInfo({isLock:!0,pwd:"1321"})})}const l=_(()=>{var m;return((m=s.getUserInfo)==null?void 0:m.avatar)||R});return{t:e,prefixCls:t,getRealName:i,register:r,handleLock:o,avatar:l}}}),j=["src"];function x(e,n,t,s,a,i){const r=g("Button"),c=g("BasicModal");return S(),N(c,P(e.$attrs,{footer:null,title:e.t("layout.header.lockScreen"),class:e.prefixCls,onRegister:e.register}),{default:h(()=>[p("div",{class:d(`${e.prefixCls}__entry`)},[p("div",{class:d(`${e.prefixCls}__header`)},[p("img",{src:e.avatar,class:d(`${e.prefixCls}__header-img`),alt:""},null,10,j),p("p",{class:d(`${e.prefixCls}__header-name`)},I(e.getRealName),3)],2),p("div",{class:d(`${e.prefixCls}__footer`)},[b(r,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[w(I(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var le=v(V,[["render",x],["__scopeId","data-v-f2e2dcfc"],["__file","/home/runner/work/admin/admin/src/layouts/default/header/components/lock/LockModal.vue"]]);export{le as default};