import{c as f,A as p,i as O,a as b,a9 as h,e5 as M,bQ as y,aa as u,ab as a,ac as C,am as i,af as P}from"./index.93b2f4f4.js";var z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},$=z;function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable}))),r.forEach(function(l){F(e,l,n[l])})}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(t,n){var r=d({},t,n.attrs);return f(p,d({},r,{icon:$}),null)};o.displayName="MenuFoldOutlined";o.inheritAttrs=!1;var H=o,S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},U=S;function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable}))),r.forEach(function(l){_(e,l,n[l])})}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(t,n){var r=s({},t,n.attrs);return f(p,s({},r,{icon:U}),null)};c.displayName="MenuUnfoldOutlined";c.inheritAttrs=!1;var j=c;const w=b({name:"HeaderTrigger",components:{MenuUnfoldOutlined:j,MenuFoldOutlined:H},props:{theme:{type:String,default:"light"}},emits:["click"],setup(){const{getPrefixCls:e}=h();return{prefixCls:e("layout-header-trigger"),toggleCollapsed:M,getCollapsed:y}}});function B(e,t,n,r,l,x){const m=u("MenuUnfoldOutlined"),v=u("MenuFoldOutlined");return a(),C("span",{class:P([e.prefixCls,e.theme]),onClick:t[0]||(t[0]=(...g)=>e.toggleCollapsed&&e.toggleCollapsed(...g))},[e.getCollapsed?(a(),i(m,{key:0})):(a(),i(v,{key:1}))],2)}var L=O(w,[["render",B]]);export{L as default};