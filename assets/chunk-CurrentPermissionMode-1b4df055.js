var m=(s,i,o)=>new Promise((d,c)=>{var a=t=>{try{r(o.next(t))}catch(e){c(e)}},u=t=>{try{r(o.throw(t))}catch(e){c(e)}},r=t=>t.done?d(t.value):Promise.resolve(t.value).then(a,u);r((o=o.apply(s,i)).next())});import{aV as R,X as S,aB as b,dO as f,au as n,a7 as F,dP as y,av as C,bv as p,a as w,B as T,b as D,i as L,$ as h,a0 as O,a1 as k,c as _,a2 as A,aI as E,aH as v,a3 as N}from"./entry-index-200dc0c4.js";import{D as $}from"./chunk-index-115523e5.js";import{u as j}from"./chunk-useTabs-1e508b8b.js";import{i as B}from"./chunk-intersection-ced10484.js";function I(){const s=R(),i=S(),o=b(),{closeAll:d}=j(C);function c(){return m(this,null,function*(){i.setProjectConfig({permissionMode:f.permissionMode===n.BACK?n.ROUTE_MAPPING:n.BACK}),location.reload()})}function a(){return m(this,null,function*(){F().clearCacheTabs(),y(),(yield o.buildRoutesAction()).forEach(l=>{C.addRoute(l)}),o.setLastBuildMenuTime(),yield d()})}function u(e,M=!0){var P;if(!e)return M;const l=f.permissionMode;if([n.ROUTE_MAPPING,n.ROLE].includes(l))return p(e)?B(e,s.getRoleList).length>0:(P=s.getRoleList)==null?void 0:P.includes(e);if(n.BACK===l){const g=o.getPermCodeList;return p(e)?B(e,g).length>0:g.includes(e)}return!0}function r(e){return m(this,null,function*(){if(f.permissionMode!==n.ROUTE_MAPPING)throw new Error("please switch permissionModeEnum to ROLE mode in the configuration to operate");p(e)||(e=[e]),s.setRoleList(e),yield a()})}function t(){return m(this,null,function*(){a()})}return{togglePermissionMode:c,changeRole:r,hasPermission:u,resume:a,refreshMenu:t}}const K=w({name:"CurrentPermissionMode",components:{Divider:$,Button:T},setup(){const s=S(),i=D(()=>s.getProjectConfig.permissionMode===n.BACK),{togglePermissionMode:o}=I();return{togglePermissionMode:o,PermissionModeEnum:n,isBackPermissionMode:i}}}),U={class:"mt-2"},V=N("span",null,"\u5F53\u524D\u6743\u9650\u6A21\u5F0F: ",-1),x=E("\u5207\u6362\u6743\u9650\u6A21\u5F0F");function G(s,i,o,d,c,a){const u=h("Button"),r=h("Divider");return O(),k("div",U,[V,_(u,{class:"ml-4"},{default:A(()=>[E(v(s.isBackPermissionMode?"\u540E\u53F0\u6743\u9650\u6A21\u5F0F":"\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"),1)]),_:1}),_(u,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:A(()=>[x]),_:1},8,["onClick"]),_(r)])}var z=L(K,[["render",G],["__file","/home/runner/work/admin/admin/src/views/demo/permission/CurrentPermissionMode.vue"]]),W=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as C,W as a,I as u};
