import{a as i,p as s,w as n,i as m,a1 as d,a2 as l,af as p,a4 as u,a5 as c,a7 as f}from"./entry-index-f8c73ed4.js";import{C as h}from"./chunk-index-b8e654f7.js";import"./chunk-index-5a145503.js";/* empty css                    */import{u as x}from"./chunk-useEcharts-844e4402.js";import"./chunk-index-4c6228c0.js";import"./chunk-Col-9a7bf20e.js";import"./chunk-responsiveObserve-f9e799ea.js";import"./chunk-isPlainObject-77c92b7a.js";import"./chunk-useState-86a27c50.js";import"./chunk-useRefs-da5133cc.js";import"./chunk-_flatRest-9949ca52.js";import"./chunk-_setToString-44645b14.js";import"./chunk-hasIn-ddcfe20e.js";import"./chunk-useTimeout-86364757.js";const w=i({name:"SaleRadar",components:{Card:h},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"380px"}},setup(t){const a=s(null),{setOptions:e}=x(a);return n(()=>t.loading,o=>{o||e({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),{chartRef:a}}});function g(t,a,e,o,S,y){const r=d("Card");return l(),p(r,{loading:t.loading,title:"\u9500\u552E\u7EDF\u8BA1"},{default:u(()=>[c("div",{ref:"chartRef",style:f({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"])}var F=m(w,[["render",g],["__file","/home/runner/work/admin/admin/src/views/dashboard/workbench/components/SaleRadar.vue"]]);export{F as default};