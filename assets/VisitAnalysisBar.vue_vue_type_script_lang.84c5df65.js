import{p as e,J as s,c as i}from"./index.93b2f4f4.js";import{b as o}from"./props.f48aca0b.js";import{u as p}from"./useEcharts.4882eb35.js";var m={name:"VisitAnalysisBar",props:o,setup(r){const t=e(null),{setOptions:a}=p(t);return s(()=>{a({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),()=>i("div",{ref:t,style:r},null)}};export{m as _};