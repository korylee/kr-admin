import{a as d,B as g,p as f,j as F,b as k,a6 as I,i as S,aa as e,ab as L,ac as B,c as o,ad as n,aR as h,aQ as C,ak as w,an as T}from"./index.93b2f4f4.js";import{L as b,u as x,a as E}from"./LoginFormTitle.ce4ac262.js";import{F as c,I as $}from"./index.1e36112c.js";import"./index.74292b44.js";import"./omit.c29e50c6.js";import"./_flatRest.cd13b46e.js";import"./_setToString.202d4e94.js";import"./FormItemContext.cee52160.js";import"./_baseIteratee.614507fa.js";import"./get.1129afb1.js";import"./hasIn.8dc52d85.js";import"./useSize.fe3f5276.js";import"./intersection.45cff103.js";import"./responsiveObserve.77bcdacc.js";const v=d({name:"ForgetPasswordForm",components:{LoginFormTitle:b,Form:c,FormItem:c.Item,Button:g,Input:$},setup(){const t=f(!1),{t:a}=F(),{handleBackLogin:s,getLoginState:r}=x(),m=k(()=>I(r)===E.RESET_PASSWORD);return{t:a,getShow:m,handleBackLogin:s,loading:t}}});function y(t,a,s,r,m,N){const p=e("LoginFormTitle"),l=e("Input"),i=e("FormItem"),u=e("Button"),_=e("Form");return t.getShow?(L(),B(w,{key:0},[o(p,{class:"enter-x"}),o(_,{class:"p-4 enter-x"},{default:n(()=>[o(i,null,{default:n(()=>[o(l)]),_:1}),o(i,null,{default:n(()=>[o(u,{size:"large",block:"",class:"mt-4",onClick:t.handleBackLogin},{default:n(()=>[h(C(t.t("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],64)):T("v-if",!0)}var K=S(v,[["render",y]]);export{K as default};