var t=(t,s,a)=>new Promise(((e,i)=>{var n=t=>{try{h(a.next(t))}catch(s){i(s)}},l=t=>{try{h(a.throw(t))}catch(s){i(s)}},h=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,l);h((a=a.apply(t,s)).next())}));import{B as s,u as a,H as e,V as i}from"./vendor.9dfb8857.js";import{am as n,an as l,ao as h,ap as r,a as o,P as u,aq as c,ar as b,b as f}from"./index.19d428bb.js";function L(t){o(t)(a(t.currentRoute).path,!0)}const d=n.multipleTabsSetting.cache,p=s({id:"multiple-tab",state:()=>({cacheTabList:new Set,tabList:d&&l.getLocal(h)||[],lastDragEndIndex:0}),getters:{getTabList(){return this.tabList},getCachedTabList(){return Array.from(this.cacheTabList)},getLastDragEndIndex(){return this.lastDragEndIndex}},actions:{updateCacheTab(){return t(this,null,(function*(){var t;const s=new Set;for(const a of this.tabList){const e=r(a);if(!!(null==(t=e.meta)?void 0:t.ignoreKeepAlive))return;const i=e.name;s.add(i)}this.cacheTabList=s}))},refreshPage(s){return t(this,null,(function*(){const{currentRoute:t}=s,e=a(t).name,i=this.getCachedTabList.find((t=>t===e));i&&this.cacheTabList.delete(i)}))},clearCacheTabs(){this.cacheTabList=new Set},resetState(){this.tabList=[],this.clearCacheTabs()},gotoPage(t){const s=o(t),e=this.tabList.length,{path:i}=a(t.currentRoute);let n=u.BASE_HOME;if(e>0){const t=this.tabList[e-1],s=t.fullPath||t.path;s&&(n=s)}i!==n&&s(n,!0)},addTab(s){return t(this,null,(function*(){const{path:t,name:a,fullPath:i,params:n,query:o}=r(s);if(t===u.ERROR_PAGE||!a||[c.name,b.name].includes(a))return;let f=-1;if(this.tabList.some(((s,a)=>(f=a,(s.fullPath||s.path)===(i||t))))){const t=e(this.tabList)[f];if(!t)return;return n&&(t.params=n),o&&(t.query=o),i&&(t.fullPath=i),void this.tabList.splice(f,1,t)}this.tabList.push(s),this.updateCacheTab(),d&&l.setLocal(h,this.tabList)}))},closeTab(s,e){return t(this,null,(function*(){const t=t=>{const{params:s={},path:a,query:e={}}=t;return{params:s,path:a,query:e}},i=t=>{const{fullPath:s,meta:{affix:a}={}}=t;if(a)return;const e=this.tabList.findIndex((t=>t.fullPath===s));-1!==e&&this.tabList.splice(e,1)},{currentRoute:n,replace:l}=e,{path:h}=a(n);if(h!==s.path)return void i(s);let r={};const o=this.tabList.findIndex((t=>t.path===h));if(0===o)if(1===this.tabList.length)r=u.BASE_HOME;else{r=t(this.tabList[o+1])}else{r=t(this.tabList[o-1])}i(n.value),yield l(r)}))},closeTabByKey(s,a){return t(this,null,(function*(){const t=this.tabList.findIndex((t=>(t.fullPath||t.path)===s));-1!==t&&this.closeTab(this.tabList[t],a)}))},sortTabs(s,a){return t(this,null,(function*(){const t=this.tabList[s];this.tabList.splice(s,1),this.tabList.splice(a,0,t),this.lastDragEndIndex=this.lastDragEndIndex+1}))},closeLeftTabs(s,a){return t(this,null,(function*(){var t,e;const i=this.tabList.findIndex((t=>t.path===s.path)),n=[];if(i>0){const s=this.tabList.slice(0,i);for(const a of s){null!=(e=null==(t=null==a?void 0:a.meta)?void 0:t.affix)&&e||n.push(a.fullPath)}}this.bulkCloseTabs(n),this.updateCacheTab(),L(a)}))},closeRightTabs(s,a){return t(this,null,(function*(){var t,e;const i=this.tabList.findIndex((t=>t.fullPath===s.fullPath)),n=[];if(i>=0&&i<this.tabList.length-1){const s=this.tabList.slice(i+1,this.tabList.length);for(const a of s){null!=(e=null==(t=null==a?void 0:a.meta)?void 0:t.affix)&&e||n.push(a.fullPath)}}this.bulkCloseTabs(n),this.updateCacheTab(),L(a)}))},closeAllTabs(s){return t(this,null,(function*(){this.tabList=this.tabList.filter((t=>{var s,a;return null!=(a=null==(s=null==t?void 0:t.meta)?void 0:s.affix)&&a})),this.clearCacheTabs(),this.gotoPage(s)}))},closeOtherTabs(s,a){return t(this,null,(function*(){var t,e;const i=this.tabList.map((t=>t.fullPath)),n=[];for(const a of i)if(a!==s.fullPath){const s=this.tabList.find((t=>t.path===a));if(!s)continue;null!=(e=null==(t=null==s?void 0:s.meta)?void 0:t.affix)&&e||n.push(s.fullPath)}this.bulkCloseTabs(n),this.updateCacheTab(),L(a)}))},bulkCloseTabs(s){return t(this,null,(function*(){s.length&&(this.tabList=this.tabList.filter((t=>!s.includes(t.fullPath))))}))}}});var T,E;function g(s){const e=f(),n=p();const l=s||i(),{currentRoute:h}=l;function r(s,i){return t(this,null,(function*(){if(!function(){const{show:t}=e.getMultiTabsSetting;if(!t)throw new Error("the multi-tab page is not open,please open it in the setting");return!!t}())return;const t=function(){const t=a(h);return n.getTabList.find((s=>s.path===t.path))}();switch(s){case 0:yield n.refreshPage(l);break;case 1:yield n.closeAllTabs(l);break;case 2:yield n.closeLeftTabs(t,l);break;case 3:yield n.closeRightTabs(t,l);break;case 4:yield n.closeOtherTabs(t,l);break;case 5:case 6:yield n.closeTab(i||t,l)}}))}return{refreshPage:()=>r(0),closeAll:()=>r(1),closeLeft:()=>r(2),closeRight:()=>r(3),closeOther:()=>r(4),closeCurrent:t=>r(5,t),close:t=>r(6,t)}}(E=T||(T={}))[E.REFRESH=0]="REFRESH",E[E.CLOSE_ALL=1]="CLOSE_ALL",E[E.CLOSE_LEFT=2]="CLOSE_LEFT",E[E.CLOSE_RIGHT=3]="CLOSE_RIGHT",E[E.CLOSE_OTHER=4]="CLOSE_OTHER",E[E.CLOSE_CURRENT=5]="CLOSE_CURRENT",E[E.CLOSE=6]="CLOSE";export{g as a,p as u};