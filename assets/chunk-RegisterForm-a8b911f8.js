var I=(t,n,o)=>new Promise((a,r)=>{var i=e=>{try{s(o.next(e))}catch(p){r(p)}},u=e=>{try{s(o.throw(e))}catch(p){r(p)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,u);s((o=o.apply(t,n)).next())});import{p as d,V as f,ch as D,a as C,B as S,j as F,aD as z,i as v,bl as L,$ as m,a0 as h,ad as $,a2 as c,aI as g,aH as _,bh as b,Z as T,c as l,b as E,a1 as N,a9 as R,ae as A}from"./entry-index-200dc0c4.js";import{L as V,u as P,a as j}from"./chunk-LoginFormTitle-b188ffb9.js";/* empty css                     *//* empty css                    */import{I as k}from"./chunk-index-87ccb20e.js";import{F as y}from"./chunk-Form-672c6b02.js";import"./chunk-antInputDirective-fe4d28a4.js";import"./chunk-FormItemContext-67cbf678.js";import"./chunk-Col-887bee1d.js";import"./chunk-responsiveObserve-c715527b.js";import"./chunk-_baseIteratee-89e892a7.js";import"./chunk-get-352bef31.js";import"./chunk-hasIn-0b294fc1.js";import"./chunk-useSize-6fd0bed9.js";import"./chunk-intersection-ced10484.js";function G(t){const n=d(t),o=d(!1);let a;function r(){a&&window.clearInterval(a)}function i(){o.value=!1,r(),a=null}function u(){f(o)||!!a||(o.value=!0,a=setInterval(()=>{f(n)===1?(i(),n.value=t):n.value-=1},1e3))}function s(){n.value=t,i()}function e(){s(),u()}return D(()=>s()),{start:u,reset:s,restart:e,clear:r,stop:i,currentCount:n,isStart:o}}const H=C({name:"CountButton",components:{Button:S},inheritAttrs:!1,props:{value:null,count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(t){const n=d(!1),{t:o}=F(),{currentCount:a,isStart:r,start:i,reset:u}=G(t.count);z(()=>t.value===void 0&&u());function s(){return I(this,null,function*(){const{beforeStartFunc:e}=t;if(e&&L(e)){n.value=!0;try{(yield e())&&i()}finally{n.value=!1}}else i()})}return{t:o,loading:n,handleStart:s,currentCount:a,isStart:r}}});function O(t,n,o,a,r,i){const u=m("Button");return h(),$(u,b(t.$attrs,{disable:t.isStart,loading:t.loading,onClick:t.handleStart}),{default:c(()=>[g(_(t.isStart?t.t("component.countDown.sendText",[t.currentCount]):t.t("component.countDown.normalText")),1)]),_:1},16,["disable","loading","onClick"])}var U=v(H,[["render",O],["__file","/home/runner/work/admin/admin/src/components/CountDown/src/CountButton.vue"]]);const Z=C({name:"CountDownInput",components:{CountButton:U,Input:k},props:{value:String,size:{type:String,default:"default"},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(){const{getPrefixCls:t}=T();return{prefixCls:t("countdown-input")}}});function q(t,n,o,a,r,i){const u=m("CountButton"),s=m("Input");return h(),$(s,b(t.$attrs,{class:t.prefixCls,size:t.size}),{addonAfter:c(()=>[l(u,{size:t.size,count:t.count,"before-start-func":t.sendCodeApi},null,8,["size","count","before-start-func"])]),_:1},16,["class","size"])}var J=v(Z,[["render",q],["__file","/home/runner/work/admin/admin/src/components/CountDown/src/CountDownInput.vue"]]);const K=C({name:"RegisterForm",components:{CountDownInput:J,LoginFormTitle:V,Form:y,FormItem:y.Item,Button:S,Input:k},setup(){const t=d(!1),{t:n}=F(),{handleBackLogin:o,getLoginState:a}=P(),r=E(()=>f(a)===j.REGISTER);return{loading:t,getShow:r,handleBackLogin:o,t:n}}});function M(t,n,o,a,r,i){const u=m("LoginFormTitle"),s=m("Input"),e=m("FormItem"),p=m("CountDownInput"),w=m("Button"),B=m("Form");return t.getShow?(h(),N(R,{key:0},[l(u,{class:"enter-x"}),l(B,{class:"p-4 enter-x"},{default:c(()=>[l(e,{name:"account",class:"enter-x"},{default:c(()=>[l(s,{placeholder:t.t("sys.login.username"),size:"large"},null,8,["placeholder"])]),_:1}),l(e,{name:"mobile",class:"enter-x"},{default:c(()=>[l(s,{placeholder:t.t("sys.login.mobile"),size:"large"},null,8,["placeholder"])]),_:1}),l(e,{name:"sms",class:"enter-x"},{default:c(()=>[l(p,{size:"large",placeholder:t.t("sys.login.smsCode")},null,8,["placeholder"])]),_:1}),l(e,{class:"enter-x"},{default:c(()=>[l(w,{block:"",loading:t.loading,type:"primary",size:"large"},{default:c(()=>[g(_(t.t("common.resetText")),1)]),_:1},8,["loading"]),l(w,{block:"",size:"large",class:"mt-4",onClick:t.handleBackLogin},{default:c(()=>[g(_(t.t("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],64)):A("v-if",!0)}var mt=v(K,[["render",M],["__file","/home/runner/work/admin/admin/src/views/sys/login/components/RegisterForm.vue"]]);export{mt as default};
