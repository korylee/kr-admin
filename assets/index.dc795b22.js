var Q=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var N=(e,t,s)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f=(e,t)=>{for(var s in t||(t={}))Y.call(t,s)&&N(e,s,t[s]);if(q)for(var s of q(t))Z.call(t,s)&&N(e,s,t[s]);return e},B=(e,t)=>K(e,X(t));import{d as E,bp as ee,r as R,bq as te,f as T,o as g,a as C,h as y,y as j,b as x,g as M,a0 as se,a1 as ne,v as ie,c as k,u as l,q as p,br as L,m as re,aJ as A,bs as oe,aI as ae,ac as le,bt as ce,l as U,x as pe,aE as ue}from"./vendor.4f112e74.js";import{P as de}from"./PageWrapper.c56cf791.js";import{c as H,_ as J,J as V,Q as fe}from"./index.a8042b0d.js";import{t as ge,D as me,S as ve,G}from"./index.c9ee953e.js";/* empty css               */import"./index.1dce4060.js";/* empty css               */var ye={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:Object};const he=E({name:"CollapseContainer",components:{Skeleton:ee},props:{title:{type:String,default:""},canExpand:{type:Boolean,default:!0},helpMessage:{type:[Array,String],default:""},triggerWindowResize:Boolean,loading:{type:Boolean,default:!1},active:{type:Boolean,default:!0},lazyTime:{type:Number,default:0}},setup(e){const t=R(!0),{getPrefixCls:s}=H(),o=s("collapse-container");function u(){t.value=!t.value,e.triggerWindowResize&&te(ge,200)}return{show:t,prefixCls:o,handleExpand:u}}}),be={class:"p-2"};function _e(e,t,s,o,u,c){const a=T("Skeleton");return g(),C("div",{class:y(e.prefixCls)},[e.$slots.header?(g(),C("div",{key:0,class:y(`${e.prefixCls}__header`)},[j(e.$slots,"header",{},void 0,!0)],2)):(g(),C("div",{key:1,class:y(`${e.prefixCls}__header px-2 py-4`)},[x("div",{class:y(`${e.prefixCls}__action`)},[j(e.$slots,"action",{},void 0,!0)],2)],2)),x("div",be,[e.loading?(g(),M(a,{key:0,active:e.active},null,8,["active"])):se((g(),C("div",{key:1,class:y(`${e.prefixCls}__body`)},[j(e.$slots,"default",{},void 0,!0)],2)),[[ne,e.show]])]),e.$slots.footer?(g(),C("div",{key:2,class:y(`${e.prefixCls}__footer`)},[j(e.$slots,"footer",{},void 0,!0)],2)):ie("",!0)],2)}var Ce=J(he,[["render",_e],["__scopeId","data-v-4244cd33"]]);function xe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!A(e)}var $e=E({name:"Description",props:ye,emits:["register"],setup(e,{attrs:t,emit:s,slots:o}){const u=R(null),{getPrefixCls:c}=H(),a=c("description"),d=k(()=>f(f({},e),l(u))),$=k(()=>!!l(d).title),D=k(()=>f({canExpand:!1},l(d).collapseOptions));function h({label:i,labelMinWidth:n,labelStyle:r}){if(!r&&!n)return i;const m=B(f({},r),{minWidth:`${n}px`});return p("div",{style:m},[i])}function S(){const{schema:i,data:n}=l(d);return l(i).map(r=>{const{render:m,field:_,span:F,show:w,contentMinWidth:I}=r;if(w&&V(w)&&!w(n))return null;const W=()=>{if(!n)return null;const v=oe(n,_);return V(m)?m(v,n):v!=null?v:""};return p(L.Item,{span:F,key:_,label:h(r)},{default:()=>{if(!I)return W();const v={minWidth:`${I}px`};return p("div",{style:v},[W()])}})}).filter(r=>!!r)}const b=()=>{let i;const n=k(()=>B(f(f({},t),l(d)),{title:void 0}));return p(L,re({class:a},l(n)),xe(i=S())?i:{default:()=>[i]})},P=()=>{const i=e.useCollapse?b():p("div",null,[b()]);if(!e.useCollapse)return i;const{canExpand:n,helpMessage:r}=l(D),{title:m}=l(d);return p(Ce,{title:m,canExpand:n,helpMessage:r},{default:()=>i,action:()=>{var _;return(_=o==null?void 0:o.action)==null?void 0:_.call(o)}})};return s("register",{setDescProps(i){u.value=f(f({},l(u)),i)}}),()=>l($)?P():b()}});function O(e){if(!ae())throw new Error("Please put useDescription function in the setup function");const t=R(null),s=R(!1);function o(c){l(s)&&fe()||(t.value=c,e&&c.setDescProps(e),s.value=!0)}return[o,{setDescProps:c=>{var a;(a=l(t))==null||a.setDescProps(c)}}]}function De(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!A(e)}var je=E({name:"AboutPage",components:{PageWrapper:de,Description:$e},setup(){const{t:e}=le(),{pkg:t,lastBuildTime:s}={pkg:{dependencies:{"@iconify/iconify":"^2.2.0","@vueuse/core":"^8.1.2","ant-design-vue":"^2.2.0-beta.1",axios:"^0.26.1","crypto-js":"^4.0.0",echarts:"^5.3.1","lodash-es":"^4.17.21",mockjs:"^1.1.0",moment:"^2.29.1",nprogress:"^0.2.0","path-to-regexp":"^6.2.0",pinia:"^2.0.12",qrcode:"^1.4.4",qs:"^6.10.0","resize-observer-polyfill":"^1.5.1",sortablejs:"^1.13.0",vditor:"^3.8.12",vue:"^3.2.31","vue-echarts":"^6.0.0-rc.5","vue-i18n":"^9.1.5","vue-router":"^4.0.14",xlsx:"^0.18.4"},devDependencies:{"@commitlint/cli":"^13.2.0","@commitlint/config-conventional":"^13.2.0","@iconify/json":"^1.1.353","@purge-icons/generated":"^0.7.0","@types/crypto-js":"^4.0.1","@types/fs-extra":"^9.0.11","@types/http-proxy":"^1.17.6","@types/lodash-es":"^4.17.5","@types/mockjs":"^1.0.3","@types/nprogress":"^0.2.0","@types/qrcode":"^1.4.0","@types/qs":"^6.9.6","@types/yargs":"^17.0.0","@typescript-eslint/eslint-plugin":"^4.26.0","@typescript-eslint/parser":"^4.26.0","@vitejs/plugin-legacy":"^1.4.1","@vitejs/plugin-vue":"^1.2.3","@vitejs/plugin-vue-jsx":"^1.1.5","@vue/compiler-sfc":"^3.1.1",autoprefixer:"^10.2.6",commitizen:"^4.2.3","conventional-changelog-cli":"^2.1.1","cross-env":"^7.0.3","dot-prop":"^6.0.1",dotenv:"^10.0.0",eslint:"^7.28.0","eslint-config-prettier":"^8.3.0","eslint-define-config":"^1.0.8","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^7.10.0",esno:"^0.10.1","fs-extra":"^10.0.0","http-server":"^13.0.2","is-ci":"^3.0.0",less:"^4.1.1","lint-staged":"^11.0.0",postcss:"^8.3.0",prettier:"^2.3.1","pretty-quick":"^3.1.0",rimraf:"^3.0.2","rollup-plugin-visualizer":"^5.5.0",stylelint:"^13.13.1","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^22.0.0","stylelint-order":"^4.1.0","ts-node":"^10.0.0",typescript:"^4.3.2",vite:"^2.3.7","vite-plugin-compression":"^0.3.5","vite-plugin-html":"^2.0.7","vite-plugin-imagemin":"^0.4.6","vite-plugin-mock":"^2.7.0","vite-plugin-purge-icons":"^0.7.0","vite-plugin-pwa":"^0.11.3","vite-plugin-style-import":"^1.2.1","vite-plugin-svg-icons":"^1.0.5","vite-plugin-theme":"^0.8.1","vite-plugin-windicss":"1.4.9","vue-eslint-parser":"^7.6.0","vue-tsc":"^0.28.0"},name:"kory-admin",version:"0.0.1"},lastBuildTime:"2022-03-20 22:12:48"},{name:o,version:u,dependencies:c,devDependencies:a}=t,d=[],$=[],D=n=>r=>p(ce,{color:n},De(r)?r:{default:()=>[r]}),h=n=>r=>p("a",{href:r,target:"_blank"},[n]),S=[{label:"\u7248\u672C",field:"version",render:D("blue")},{label:"\u6700\u540E\u7F16\u8BD1\u65F6\u95F4",field:"lastBuildTime",render:D("blue")},{label:"\u6587\u6863\u5730\u5740",field:"doc",render:h("\u6587\u6863\u5730\u5740")},{label:"\u9884\u89C8\u5730\u5740",field:"preview",render:h("\u9884\u89C8\u5730\u5740")},{label:"Github",field:"github",render:h("Github")}],b={version:u,lastBuildTime:s,doc:me,preview:ve,github:G};Object.keys(c).forEach(n=>{d.push({field:n,label:n})}),Object.keys(a).forEach(n=>{$.push({field:n,label:n})});const[P]=O({title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56",data:c,schema:d,column:{xs:2,sm:2,md:3,xl:4}}),[z]=O({title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56",data:a,schema:$,column:{xs:2,sm:2,md:3,xl:4}}),[i]=O({title:"\u9879\u76EE\u4FE1\u606F",data:b,schema:S,column:{xs:2,sm:2,xl:3}});return{name:o,t:e,register:P,registerDev:z,infoRegister:i,GITHUB_URL:G}}});const ke={class:"flex justify-between items-center"},Re={class:"flex-1"},Se=["href"],Pe=ue(" \u662F\u4E00\u4E2A\u57FA\u4E8EVue3,\u3001Vite\u3001Ant-Design-Vue\u3001TypeScript\u7684\u5B66\u4E60\u9879\u76EE ");function we(e,t,s,o,u,c){const a=T("Description"),d=T("PageWrapper");return g(),M(d,{title:e.t("routes.dashboard.about"),class:"about"},{headerContent:U(()=>[x("div",ke,[x("span",Re,[x("a",{href:e.GITHUB_URL,target:"_blank"},pe(e.name),9,Se),Pe])])]),default:U(()=>[p(a,{class:"enter-y",onRegister:e.infoRegister},null,8,["onRegister"]),p(a,{class:"enter-y",onRegister:e.register},null,8,["onRegister"]),p(a,{class:"enter-y",onRegister:e.registerDev},null,8,["onRegister"])]),_:1},8,["title"])}var Ne=J(je,[["render",we]]);export{Ne as default};