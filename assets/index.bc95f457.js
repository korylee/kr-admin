import{R as t,C as e}from"./index.87bc91b4.js";import{d as o,g as s,a,b as n,F as r,k as l,j as c,t as m,e as d,h as u}from"./vendor.9dfb8857.js";import"./responsiveObserve.c545f1cc.js";const i=[{amount:"20",type:"成品总数"},{amount:"50",type:"未发布"},{amount:"80",type:"发布中"},{amount:"100",type:"异常"}];(()=>{const t=[];for(let e=0;e<3;e++)t.push({id:e,sbmter:"张三",sbmtTimer:(new Date).toLocaleString(),title:"主要",memo:"工作任务"})})(),(()=>{const t=[];for(let e=0;e<3;e++)t.push({id:e,sender:"里斯",sendTime:(new Date).toLocaleString(),title:"代码",memo:"工作任务",cnteId:`c${e}`,cnteStatus:"opened",cnteRepo:e})})();var p=o({components:{[t.name]:t,[e.name]:e},setup:()=>({workProd:i})});const f=d(),_=f(((t,e,o,d,u,i)=>{const p=s("a-col"),_=s("a-row");return a(),n(_,{class:"prod-total"},{default:f((()=>[(a(!0),n(r,null,l(t.workProd,((t,e)=>(a(),n(p,{key:t.type,xs:12,sm:6,class:`prod-total__item prod-total__item-${e}`},{default:f((()=>[c("div",{class:["img",`prod-total__item-${e}-img`]},null,2),c("div",null,m(t.amount),1),c("span",null,m(t.type),1)])),_:2},1032,["class"])))),128))])),_:1})}));p.render=_,p.__scopeId="data-v-42496c3c";var b=o({name:"TodoList",setup(){}});b.render=function(t,e,o,s,r,l){return a(),n("div",null,"todo")};var g=o({name:"Workbench",components:{ProdTotal:p,TodoList:b,"a-col":e,"a-row":t},setup:()=>({workImg:"/assets/workbench.f373341e.png"})});g.render=function(t,e,o,r,l,m){const d=s("ProdTotal"),i=s("TodoList"),p=s("a-col"),f=s("a-row");return a(),n(f,{class:"workbench p-4",gutter:12},{default:u((()=>[c(p,{md:24,lg:17},{default:u((()=>[c(d,{class:"mb-3"}),c(i,{class:"mb-3"})])),_:1}),c(p,{md:24,lg:7},{default:u((()=>[c("img",{src:t.workImg,class:"workbench__img mb-3"},null,8,["src"])])),_:1})])),_:1})};export default g;