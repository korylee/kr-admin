import{d as e,r as t,o as a,j as o}from"./vendor.9dfb8857.js";import{u as r}from"./useEcharts.cd9f6531.js";import"./index.19d428bb.js";import"./useTimeout.a3cd46a7.js";const l=(()=>{const e=[];let t=+new Date;const a=[],o=[];for(let r=0;r<20;r++){const r=new Date(t+=864e5);e.push([r.getFullYear(),r.getMonth()+1,r.getDate()].join("-"));const l=200*Math.random(),i=200*Math.random();o.push(l),a.push(i+l)}return{barData:o,category:e,lineData:a}})();var i=e({props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},setup(e){const i=t(null),{setOptions:s,echarts:n}=r(i),{barData:c,lineData:d,category:p}=l;return a((()=>{s({backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:p,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:"auto",symbol:"emptyCircle",symbolSize:15,data:d},{name:"bar",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new n.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])},data:c},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{color:new n.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20, 200, 212, 0.5)"},{offset:.2,color:"rbga(20, 200, 212, 0.2)"},{offset:1,color:"rgba(20, 200, 212, 0)"}])},z:-12,data:d},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#0f375f"},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:d}]})})),()=>o("div",{ref:i,style:e},null)}});export default i;