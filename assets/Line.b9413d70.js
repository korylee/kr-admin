import{a as s,p as n,J as c,c as d}from"./index.618dfac3.js";import{u as f}from"./useEcharts.997b058d.js";import{g as p}from"./data.29a5f341.js";import"./useTimeout.c3906ed2.js";var u=s({props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"}},setup(o){const t=n(null),{setOptions:r,echarts:a}=f(t),{barData:i,lineData:e,category:l}=p;return c(()=>{r({backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:l,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:"auto",symbol:"emptyCircle",symbolSize:15,data:e},{name:"bar",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])},data:i},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{color:new a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20, 200, 212, 0.5)"},{offset:.2,color:"rgba(20, 200, 212, 0.2)"},{offset:1,color:"rgba(20, 200, 212, 0)"}])},z:-12,data:e},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#0f375f"},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:e}]})}),()=>d("div",{ref:t,style:o},null)}});export{u as default};
