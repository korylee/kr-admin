import{as as _,a as v,aE as f,i as g,a1 as t,a2 as e,a3 as c,ab as C,ac as x,af as w,a4 as n,c as a,aK as E,aJ as i,a5 as s,a6 as B}from"./entry-index-cce5698a.js";import{C as T}from"./chunk-index-b98884d5.js";import"./chunk-index-7be20e0c.js";/* empty css                    */import{T as y}from"./chunk-index-00f6b993.js";import{c as $}from"./chunk-createAsyncComponent-3692a679.js";import"./chunk-index-a4dd9d78.js";import"./chunk-index-3d383efb.js";import"./chunk-Col-bc6a30fd.js";import"./chunk-responsiveObserve-511e1d53.js";import"./chunk-_flatRest-7b2c478a.js";import"./chunk-_setToString-1b74bec6.js";import"./chunk-useRefs-52ebb367.js";import"./chunk-hasIn-49e7c776.js";const h=[{title:"\u8BBF\u95EE\u6570",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"\u6708"},{title:"\u6210\u4EA4\u989D",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"\u6708"},{title:"\u4E0B\u8F7D\u6570",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"\u5468"},{title:"\u6210\u4EA4\u6570",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"\u5E74"}],b=$(()=>_(()=>import("./chunk-index-481b001f.js"),["assets/chunk-index-481b001f.js","assets/entry-index-cce5698a.js","assets/index.33abb3b7.css"])),k=v({name:"GrowCard",components:{Card:T,Tag:y,Icon:f,CountTo:b},props:{loading:Boolean},setup(){return{growCardList:h}}}),A={class:"md:flex"},D={class:"py-4 px-4 flex justify-between"},I={class:"p-2 px-4 flex justify-between"};function L(l,V,z,F,N,j){const u=t("Tag"),r=t("CountTo"),p=t("Icon"),d=t("Card");return e(),c("div",A,[(e(!0),c(C,null,x(l.growCardList,(o,m)=>(e(),w(d,{key:o.title,loading:l.loading,title:o.title,"can-expan":!1,class:B([[m+1<4&&"!md:mr-4"],"md:w-1/4 w-full !md:mt-0 !mt-4"]),size:"small"},{extra:n(()=>[a(u,{color:o.color},{default:n(()=>[E(i(o.action),1)]),_:2},1032,["color"])]),default:n(()=>[s("div",D,[a(r,{prefix:"$","start-val":1,"end-val":o.value,class:"text-2xl"},null,8,["end-val"]),a(p,{icon:o.icon,size:40},null,8,["icon"])]),s("div",I,[s("span",null,"\u603B"+i(o.title),1),a(r,{prefix:"$","start-val":1,"end-val":o.total},null,8,["end-val"])])]),_:2},1032,["loading","title","class"]))),128))])}var Y=g(k,[["render",L]]);export{Y as default};