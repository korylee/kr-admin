import{cQ as l}from"./entry-index-f8c73ed4.js";function v(n,e,r){switch(r.length){case 0:return n.call(e);case 1:return n.call(e,r[0]);case 2:return n.call(e,r[0],r[1]);case 3:return n.call(e,r[0],r[1],r[2])}return n.apply(e,r)}var c=Math.max;function b(n,e,r){return e=c(e===void 0?n.length-1:e,0),function(){for(var a=arguments,t=-1,u=c(a.length-e,0),o=Array(u);++t<u;)o[t]=a[e+t];t=-1;for(var i=Array(e+1);++t<e;)i[t]=a[t];return i[e]=r(o),v(n,this,i)}}function f(n){return function(){return n}}function p(n){return n}var m=l?function(n,e){return l(n,"toString",{configurable:!0,enumerable:!1,value:f(e),writable:!0})}:p,s=m,d=800,y=16,S=Date.now;function h(n){var e=0,r=0;return function(){var a=S(),t=y-(a-r);if(r=a,t>0){if(++e>=d)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}var T=h(s),g=T;export{p as i,b as o,g as s};