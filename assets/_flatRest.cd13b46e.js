import{cS as b,cI as u,cT as y,co as O,cQ as P,cH as c,cM as h,cU as p,cE as v}from"./index.93b2f4f4.js";import{s as j,o as m}from"./_setToString.202d4e94.js";var S=b(Object.getPrototypeOf,Object),d=S,T="[object Object]",w=Function.prototype,x=Object.prototype,f=w.toString,A=x.hasOwnProperty,C=f.call(Object);function k(t){if(!u(t)||y(t)!=T)return!1;var n=d(t);if(n===null)return!0;var r=A.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&f.call(r)==C}function E(t,n){n=O(n,t);for(var r=0,o=n.length;t!=null&&r<o;)t=t[P(n[r++])];return r&&r==o?t:void 0}var i=c?c.isConcatSpreadable:void 0;function F(t){return h(t)||p(t)||!!(i&&t&&t[i])}function l(t,n,r,o,e){var s=-1,g=t.length;for(r||(r=F),e||(e=[]);++s<g;){var a=t[s];n>0&&r(a)?n>1?l(a,n-1,r,o,e):v(e,a):o||(e[e.length]=a)}return e}function G(t){var n=t==null?0:t.length;return n?l(t,1):[]}function H(t){return j(m(t,void 0,G),t+"")}export{E as b,H as f,d as g,k as i};