var f=(e,n,t)=>new Promise((s,a)=>{var c=o=>{try{i(t.next(o))}catch(l){a(l)}},r=o=>{try{i(t.throw(o))}catch(l){a(l)}},i=o=>o.done?s(o.value):Promise.resolve(o.value).then(c,r);i((t=t.apply(e,n)).next())});import{cd as C,e6 as u,e7 as k,bv as L,i as v,a as y,B,j as $,a9 as S,b as _,aa as g,ab as M,am as b,ad as h,ae as m,af as d,aQ as I,c as N,aR as w,b7 as R,bw as P}from"./index.618dfac3.js";import{B as U,u as O}from"./index.4ad98f14.js";import"./index.beb0008c.js";import"./DownOutlined.65cc595a.js";import"./_baseIteratee.3aa4677f.js";import"./get.23e28aa8.js";import"./_flatRest.f15a88bc.js";import"./_setToString.6466c55e.js";import"./hasIn.9685c9c3.js";import"./createAsyncComponent.61f638ff.js";import"./errorLog.70d12da1.js";import"./exceptionEnum.1496ab9e.js";import"./index.6d21abc6.js";import"./omit.1204a9e6.js";import"./LeftOutlined.06d4e0b7.js";import"./useTabs.fc040ea7.js";import"./index.4418cfc9.js";import"./useTimeout.c3906ed2.js";import"./index.9af925d1.js";const V=C({id:"lock",state:()=>({lockInfo:u.getLocal(k)}),getters:{getLockInfo(e){return this.lockInfo}},actions:{setLockInfo(e){this.lockInfo=Object.assign({},this.lockInfo,e),u.setLocal(k,this.lockInfo)},resetLockInfo(){u.removeLocal(k),this.lockInfo=null},unLock(e=""){return f(this,null,function*(){var s;const n=L();return((s=this.lockInfo)==null?void 0:s.pwd)===e?(this.resetLockInfo(),!0):yield(()=>f(this,null,function*(){var a;try{const c=(a=n.getUserInfo)==null?void 0:a.username,r=yield n.login({username:c,password:e,goHome:!1,mode:"none"});return r&&this.resetLockInfo(),r}catch(c){return!1}}))()})}}});const j=y({name:"LockModal",components:{BasicModal:U,Button:B},setup(){const{t:e}=$(),{getPrefixCls:n}=S(),t=n("header-lock-modal"),s=L(),a=V(),c=_(()=>{var p;return(p=s.getUserInfo)==null?void 0:p.realName}),[r,{closeModal:i}]=O();function o(){return f(this,null,function*(){i(),a.setLockInfo({isLock:!0,pwd:"1321"})})}const l=_(()=>{var p;return((p=s.getUserInfo)==null?void 0:p.avatar)||P});return{t:e,prefixCls:t,getRealName:c,register:r,handleLock:o,avatar:l}}}),x=["src"];function K(e,n,t,s,a,c){const r=g("Button"),i=g("BasicModal");return M(),b(i,R(e.$attrs,{footer:null,title:e.t("layout.header.lockScreen"),class:e.prefixCls,onRegister:e.register}),{default:h(()=>[m("div",{class:d(`${e.prefixCls}__entry`)},[m("div",{class:d(`${e.prefixCls}__header`)},[m("img",{src:e.avatar,class:d(`${e.prefixCls}__header-img`),alt:""},null,10,x),m("p",{class:d(`${e.prefixCls}__header-name`)},I(e.getRealName),3)],2),m("div",{class:d(`${e.prefixCls}__footer`)},[N(r,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[w(I(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var re=v(j,[["render",K],["__scopeId","data-v-f2e2dcfc"]]);export{re as default};
