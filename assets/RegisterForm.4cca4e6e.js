var h=(e,t,o)=>new Promise((a,r)=>{var c=n=>{try{s(o.next(n))}catch(m){r(m)}},u=n=>{try{s(o.throw(n))}catch(m){r(m)}},s=n=>n.done?a(n.value):Promise.resolve(n.value).then(c,u);s((o=o.apply(e,t)).next())});import{L as z,u as D,a as L}from"./LoginFormTitle.09c93419.js";import{r as d,u as f,aw as T,d as C,at as F,ac as $,J as E,f as p,o as v,g as w,l as i,aE as g,x as _,m as b,bg as B,q as l,bh as y,c as N,a as A,F as R,v as P}from"./vendor.4f112e74.js";/* empty css              *//* empty css               */import{_ as I,J as V,c as J}from"./index.a8042b0d.js";function q(e){const t=d(e),o=d(!1);let a;function r(){a&&window.clearInterval(a)}function c(){o.value=!1,r(),a=null}function u(){f(o)||!!a||(o.value=!0,a=setInterval(()=>{f(t)===1?(c(),t.value=e):t.value-=1},1e3))}function s(){t.value=e,c()}function n(){s(),u()}return T(()=>s()),{start:u,reset:s,restart:n,clear:r,stop:c,currentCount:t,isStart:o}}const G=C({name:"CountButton",components:{Button:F},inheritAttrs:!1,props:{value:null,count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(e){const t=d(!1),{t:o}=$(),{currentCount:a,isStart:r,start:c,reset:u}=q(e.count);E(()=>e.value===void 0&&u());function s(){return h(this,null,function*(){const{beforeStartFunc:n}=e;if(n&&V(n)){t.value=!0;try{(yield n())&&c()}finally{t.value=!1}}else c()})}return{t:o,loading:t,handleStart:s,currentCount:a,isStart:r}}});function O(e,t,o,a,r,c){const u=p("Button");return v(),w(u,b(e.$attrs,{disable:e.isStart,loading:e.loading,onClick:e.handleStart}),{default:i(()=>[g(_(e.isStart?e.t("component.countDown.sendText",[e.currentCount]):e.t("component.countDown.normalText")),1)]),_:1},16,["disable","loading","onClick"])}var U=I(G,[["render",O]]);const j=C({name:"CountDownInput",components:{CountButton:U,Input:B},props:{value:String,size:{type:String,default:"default"},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(e){const{getPrefixCls:t}=J();return{prefixCls:t("countdown-input")}}});function x(e,t,o,a,r,c){const u=p("CountButton"),s=p("Input");return v(),w(s,b(e.$attrs,{class:e.prefixCls,size:e.size}),{addonAfter:i(()=>[l(u,{size:e.size,count:e.count,"before-start-func":e.sendCodeApi},null,8,["size","count","before-start-func"])]),_:1},16,["class","size"])}var H=I(j,[["render",x]]);const K=C({name:"RegisterForm",components:{CountDownInput:H,LoginFormTitle:z,Form:y,FormItem:y.Item,Button:F,Input:B},setup(){const e=d(!1),{t}=$(),{handleBackLogin:o,getLoginState:a}=D(),r=N(()=>f(a)===L.REGISTER);return{loading:e,getShow:r,handleBackLogin:o,t}}});function M(e,t,o,a,r,c){const u=p("LoginFormTitle"),s=p("Input"),n=p("FormItem"),m=p("CountDownInput"),S=p("Button"),k=p("Form");return e.getShow?(v(),A(R,{key:0},[l(u,{class:"enter-x"}),l(k,{class:"p-4 enter-x"},{default:i(()=>[l(n,{name:"account",class:"enter-x"},{default:i(()=>[l(s,{placeholder:e.t("sys.login.username"),size:"large"},null,8,["placeholder"])]),_:1}),l(n,{name:"mobile",class:"enter-x"},{default:i(()=>[l(s,{placeholder:e.t("sys.login.mobile"),size:"large"},null,8,["placeholder"])]),_:1}),l(n,{name:"sms",class:"enter-x"},{default:i(()=>[l(m,{size:"large",placeholder:e.t("sys.login.smsCode")},null,8,["placeholder"])]),_:1}),l(n,{class:"enter-x"},{default:i(()=>[l(S,{block:"",loading:e.loading,type:"primary",size:"large"},{default:i(()=>[g(_(e.t("common.resetText")),1)]),_:1},8,["loading"]),l(S,{block:"",size:"large",class:"mt-4",onClick:e.handleBackLogin},{default:i(()=>[g(_(e.t("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],64)):P("",!0)}var te=I(K,[["render",M]]);export{te as default};