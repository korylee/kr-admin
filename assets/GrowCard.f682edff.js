import{a as B,P as m,u as h,f as y,z as _,c as e,b as I,az as G,aL as P,i as $,aa as f,ab as C,ac as E,ak as j,al as k,am as z,ad as g,aR as L,aQ as b,ae as x,af as N}from"./index.618dfac3.js";import{C as s}from"./index.fdc030ed.js";import"./index.4418cfc9.js";import"./index.9646fc39.js";import{T as M}from"./index.fe10856c.js";import{c as R}from"./createAsyncComponent.61f638ff.js";import"./index.80b65a8a.js";import"./_flatRest.f15a88bc.js";import"./_setToString.6466c55e.js";import"./hasIn.9685c9c3.js";import"./responsiveObserve.9d31ff62.js";var T=B({name:"ACardMeta",props:{prefixCls:m.string,title:m.any,description:m.any,avatar:m.any},slots:["title","description","avatar"],setup:function(r,c){var l=c.slots,u=h("card",r),n=u.prefixCls;return function(){var i=y({},"".concat(n.value,"-meta"),!0),a=_(l,r,"avatar"),d=_(l,r,"title"),v=_(l,r,"description"),t=a?e("div",{class:"".concat(n.value,"-meta-avatar")},[a]):null,p=d?e("div",{class:"".concat(n.value,"-meta-title")},[d]):null,D=v?e("div",{class:"".concat(n.value,"-meta-description")},[v]):null,A=p||D?e("div",{class:"".concat(n.value,"-meta-detail")},[p,D]):null;return e("div",{class:i},[t,A])}}}),w=B({name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:String,hoverable:{type:Boolean,default:!0}},setup:function(r,c){var l=c.slots,u=h("card",r),n=u.prefixCls,i=I(function(){var a;return a={},y(a,"".concat(n.value,"-grid"),!0),y(a,"".concat(n.value,"-grid-hoverable"),r.hoverable),a});return function(){var a;return e("div",{class:i.value},[(a=l.default)===null||a===void 0?void 0:a.call(l)])}}});s.Meta=T;s.Grid=w;s.install=function(o){return o.component(s.name,s),o.component(T.name,T),o.component(w.name,w),o};const S=[{title:"\u8BBF\u95EE\u6570",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"\u6708"},{title:"\u6210\u4EA4\u989D",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"\u6708"},{title:"\u4E0B\u8F7D\u6570",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"\u5468"},{title:"\u6210\u4EA4\u6570",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"\u5E74"}],V=R(()=>G(()=>import("./index.9d0a259d.js"),["assets/index.9d0a259d.js","assets/index.618dfac3.js","assets/index.b4e8e511.css"])),F=B({name:"GrowCard",components:{Card:s,Tag:M,Icon:P,CountTo:V},props:{loading:Boolean},setup(){return{growCardList:S}}}),O={class:"md:flex"},Q={class:"py-4 px-4 flex justify-between"},q={class:"p-2 px-4 flex justify-between"};function H(o,r,c,l,u,n){const i=f("Tag"),a=f("CountTo"),d=f("Icon"),v=f("Card");return C(),E("div",O,[(C(!0),E(j,null,k(o.growCardList,(t,p)=>(C(),z(v,{key:t.title,loading:o.loading,title:t.title,"can-expan":!1,class:N([[p+1<4&&"!md:mr-4"],"md:w-1/4 w-full !md:mt-0 !mt-4"]),size:"small"},{extra:g(()=>[e(i,{color:t.color},{default:g(()=>[L(b(t.action),1)]),_:2},1032,["color"])]),default:g(()=>[x("div",Q,[e(a,{prefix:"$","start-val":1,"end-val":t.value,class:"text-2xl"},null,8,["end-val"]),e(d,{icon:t.icon,size:40},null,8,["icon"])]),x("div",q,[x("span",null,"\u603B"+b(t.title),1),e(a,{prefix:"$","start-val":1,"end-val":t.total},null,8,["end-val"])])]),_:2},1032,["loading","title","class"]))),128))])}var na=$(F,[["render",H]]);export{na as default};
