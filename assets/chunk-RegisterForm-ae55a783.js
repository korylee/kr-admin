var y=(t,e,o)=>new Promise((a,r)=>{var i=n=>{try{s(o.next(n))}catch(m){r(m)}},u=n=>{try{s(o.throw(n))}catch(m){r(m)}},s=n=>n.done?a(n.value):Promise.resolve(n.value).then(i,u);s((o=o.apply(t,e)).next())});import{p as d,Y as f,W as z,a as C,B as $,j as h,aF as D,i as v,aX as L,a1 as p,a2 as I,af as w,a4 as c,aK as g,aJ as _,a$ as b,a0 as T,c as l,b as E,a3 as N,ab as A,ag as R}from"./entry-index-cce5698a.js";import{L as P,u as V,a as j}from"./chunk-LoginFormTitle-88230cbd.js";/* empty css                     *//* empty css                    */import{I as B}from"./chunk-index-caaf3c9d.js";import{F}from"./chunk-Form-cbe2e2e8.js";import"./chunk-antInputDirective-fe4d28a4.js";import"./chunk-FormItemContext-5e33ae15.js";import"./chunk-omit-dfc15483.js";import"./chunk-_flatRest-7b2c478a.js";import"./chunk-_setToString-1b74bec6.js";import"./chunk-Col-bc6a30fd.js";import"./chunk-responsiveObserve-511e1d53.js";import"./chunk-_baseIteratee-631e95e3.js";import"./chunk-get-8ba8e5c9.js";import"./chunk-hasIn-49e7c776.js";import"./chunk-useSize-9240c9cc.js";import"./chunk-intersection-6249fa18.js";function G(t){const e=d(t),o=d(!1);let a;function r(){a&&window.clearInterval(a)}function i(){o.value=!1,r(),a=null}function u(){f(o)||!!a||(o.value=!0,a=setInterval(()=>{f(e)===1?(i(),e.value=t):e.value-=1},1e3))}function s(){e.value=t,i()}function n(){s(),u()}return z(()=>s()),{start:u,reset:s,restart:n,clear:r,stop:i,currentCount:e,isStart:o}}const J=C({name:"CountButton",components:{Button:$},inheritAttrs:!1,props:{value:null,count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(t){const e=d(!1),{t:o}=h(),{currentCount:a,isStart:r,start:i,reset:u}=G(t.count);D(()=>t.value===void 0&&u());function s(){return y(this,null,function*(){const{beforeStartFunc:n}=t;if(n&&L(n)){e.value=!0;try{(yield n())&&i()}finally{e.value=!1}}else i()})}return{t:o,loading:e,handleStart:s,currentCount:a,isStart:r}}});function K(t,e,o,a,r,i){const u=p("Button");return I(),w(u,b(t.$attrs,{disable:t.isStart,loading:t.loading,onClick:t.handleStart}),{default:c(()=>[g(_(t.isStart?t.t("component.countDown.sendText",[t.currentCount]):t.t("component.countDown.normalText")),1)]),_:1},16,["disable","loading","onClick"])}var O=v(J,[["render",K]]);const U=C({name:"CountDownInput",components:{CountButton:O,Input:B},props:{value:String,size:{type:String,default:"default"},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const{getPrefixCls:e}=T();return{prefixCls:e("countdown-input")}}});function W(t,e,o,a,r,i){const u=p("CountButton"),s=p("Input");return I(),w(s,b(t.$attrs,{class:t.prefixCls,size:t.size}),{addonAfter:c(()=>[l(u,{size:t.size,count:t.count,"before-start-func":t.sendCodeApi},null,8,["size","count","before-start-func"])]),_:1},16,["class","size"])}var X=v(U,[["render",W]]);const Y=C({name:"RegisterForm",components:{CountDownInput:X,LoginFormTitle:P,Form:F,FormItem:F.Item,Button:$,Input:B},setup(){const t=d(!1),{t:e}=h(),{handleBackLogin:o,getLoginState:a}=V(),r=E(()=>f(a)===j.REGISTER);return{loading:t,getShow:r,handleBackLogin:o,t:e}}});function q(t,e,o,a,r,i){const u=p("LoginFormTitle"),s=p("Input"),n=p("FormItem"),m=p("CountDownInput"),S=p("Button"),k=p("Form");return t.getShow?(I(),N(A,{key:0},[l(u,{class:"enter-x"}),l(k,{class:"p-4 enter-x"},{default:c(()=>[l(n,{name:"account",class:"enter-x"},{default:c(()=>[l(s,{placeholder:t.t("sys.login.username"),size:"large"},null,8,["placeholder"])]),_:1}),l(n,{name:"mobile",class:"enter-x"},{default:c(()=>[l(s,{placeholder:t.t("sys.login.mobile"),size:"large"},null,8,["placeholder"])]),_:1}),l(n,{name:"sms",class:"enter-x"},{default:c(()=>[l(m,{size:"large",placeholder:t.t("sys.login.smsCode")},null,8,["placeholder"])]),_:1}),l(n,{class:"enter-x"},{default:c(()=>[l(S,{block:"",loading:t.loading,type:"primary",size:"large"},{default:c(()=>[g(_(t.t("common.resetText")),1)]),_:1},8,["loading"]),l(S,{block:"",size:"large",class:"mt-4",onClick:t.handleBackLogin},{default:c(()=>[g(_(t.t("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],64)):R("v-if",!0)}var ft=v(Y,[["render",q]]);export{ft as default};