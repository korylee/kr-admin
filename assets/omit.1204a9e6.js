import{cu as Z,cv as M,cw as U,cx as p,cy as B,cz as V,cA as z,cB as k,cC as _,cD as ee,cE as ne,cF as re,cG as w,cH as j,cI as G,cJ as A,cK as T,cL as N,cM as te,cN as ae,cO as oe,cP as ie,cQ as se,co as D,cR as ce}from"./index.618dfac3.js";import{g as K,b as fe,i as ue,f as le}from"./_flatRest.f15a88bc.js";function ge(e,n,r){var t=-1,i=e.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var o=Array(i);++t<i;)o[t]=e[t+n];return o}function be(e,n){for(var r=-1,t=e==null?0:e.length;++r<t&&n(e[r],r,e)!==!1;);return e}function b(e,n,r,t){var i=!r;r||(r={});for(var o=-1,s=n.length;++o<s;){var c=n[o],f=t?t(r[c],e[c],c,r,e):void 0;f===void 0&&(f=e[c]),i?Z(r,c,f):M(r,c,f)}return r}function ye(e,n){return e&&b(n,U(n),e)}function Te(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var pe=Object.prototype,Ae=pe.hasOwnProperty;function de(e){if(!p(e))return Te(e);var n=B(e),r=[];for(var t in e)t=="constructor"&&(n||!Ae.call(e,t))||r.push(t);return r}function d(e){return V(e)?z(e,!0):de(e)}function ve(e,n){return e&&b(n,d(n),e)}var R=typeof exports=="object"&&exports&&!exports.nodeType&&exports,S=R&&typeof module=="object"&&module&&!module.nodeType&&module,$e=S&&S.exports===R,L=$e?k.Buffer:void 0,x=L?L.allocUnsafe:void 0;function Oe(e,n){if(n)return e.slice();var r=e.length,t=x?x(r):new e.constructor(r);return e.copy(t),t}function he(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function me(e,n){return b(e,_(e),n)}var we=Object.getOwnPropertySymbols,je=we?function(e){for(var n=[];e;)ne(n,_(e)),e=K(e);return n}:ee,Y=je;function Se(e,n){return b(e,Y(e),n)}function H(e){return re(e,d,Y)}var Le=Object.prototype,xe=Le.hasOwnProperty;function Ie(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&xe.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function v(e){var n=new e.constructor(e.byteLength);return new w(n).set(new w(e)),n}function Ce(e,n){var r=n?v(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Ee=/\w*$/;function Fe(e){var n=new e.constructor(e.source,Ee.exec(e));return n.lastIndex=e.lastIndex,n}var I=j?j.prototype:void 0,C=I?I.valueOf:void 0;function Pe(e){return C?Object(C.call(e)):{}}function Me(e,n){var r=n?v(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Ue="[object Boolean]",Be="[object Date]",_e="[object Map]",Ge="[object Number]",Ne="[object RegExp]",De="[object Set]",Ke="[object String]",Re="[object Symbol]",Ye="[object ArrayBuffer]",He="[object DataView]",Je="[object Float32Array]",Qe="[object Float64Array]",We="[object Int8Array]",qe="[object Int16Array]",Xe="[object Int32Array]",Ze="[object Uint8Array]",Ve="[object Uint8ClampedArray]",ze="[object Uint16Array]",ke="[object Uint32Array]";function en(e,n,r){var t=e.constructor;switch(n){case Ye:return v(e);case Ue:case Be:return new t(+e);case He:return Ce(e,r);case Je:case Qe:case We:case qe:case Xe:case Ze:case Ve:case ze:case ke:return Me(e,r);case _e:return new t;case Ge:case Ke:return new t(e);case Ne:return Fe(e);case De:return new t;case Re:return Pe(e)}}var E=Object.create,nn=function(){function e(){}return function(n){if(!p(n))return{};if(E)return E(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}(),rn=nn;function tn(e){return typeof e.constructor=="function"&&!B(e)?rn(K(e)):{}}var an="[object Map]";function on(e){return G(e)&&A(e)==an}var F=T&&T.isMap,sn=F?N(F):on,cn=sn,fn="[object Set]";function un(e){return G(e)&&A(e)==fn}var P=T&&T.isSet,ln=P?N(P):un,gn=ln,bn=1,yn=2,Tn=4,J="[object Arguments]",pn="[object Array]",An="[object Boolean]",dn="[object Date]",vn="[object Error]",Q="[object Function]",$n="[object GeneratorFunction]",On="[object Map]",hn="[object Number]",W="[object Object]",mn="[object RegExp]",wn="[object Set]",jn="[object String]",Sn="[object Symbol]",Ln="[object WeakMap]",xn="[object ArrayBuffer]",In="[object DataView]",Cn="[object Float32Array]",En="[object Float64Array]",Fn="[object Int8Array]",Pn="[object Int16Array]",Mn="[object Int32Array]",Un="[object Uint8Array]",Bn="[object Uint8ClampedArray]",_n="[object Uint16Array]",Gn="[object Uint32Array]",a={};a[J]=a[pn]=a[xn]=a[In]=a[An]=a[dn]=a[Cn]=a[En]=a[Fn]=a[Pn]=a[Mn]=a[On]=a[hn]=a[W]=a[mn]=a[wn]=a[jn]=a[Sn]=a[Un]=a[Bn]=a[_n]=a[Gn]=!0;a[vn]=a[Q]=a[Ln]=!1;function y(e,n,r,t,i,o){var s,c=n&bn,f=n&yn,q=n&Tn;if(r&&(s=i?r(e,t,i,o):r(e)),s!==void 0)return s;if(!p(e))return e;var $=te(e);if($){if(s=Ie(e),!c)return he(e,s)}else{var g=A(e),O=g==Q||g==$n;if(ae(e))return Oe(e,c);if(g==W||g==J||O&&!i){if(s=f||O?{}:tn(e),!c)return f?Se(e,ve(s,e)):me(e,ye(s,e))}else{if(!a[g])return i?e:{};s=en(e,g,c)}}o||(o=new oe);var h=o.get(e);if(h)return h;o.set(e,s),gn(e)?e.forEach(function(u){s.add(y(u,n,r,u,e,o))}):cn(e)&&e.forEach(function(u,l){s.set(l,y(u,n,r,l,e,o))});var X=q?f?H:ie:f?d:U,m=$?void 0:X(e);return be(m||e,function(u,l){m&&(l=u,u=e[l]),M(s,l,y(u,n,r,l,e,o))}),s}function Nn(e){var n=e==null?0:e.length;return n?e[n-1]:void 0}function Dn(e,n){return n.length<2?e:fe(e,ge(n,0,-1))}function Kn(e,n){return n=D(n,e),e=Dn(e,n),e==null||delete e[se(Nn(n))]}function Rn(e){return ue(e)?void 0:e}var Yn=1,Hn=2,Jn=4,Qn=le(function(e,n){var r={};if(e==null)return r;var t=!1;n=ce(n,function(o){return o=D(o,e),t||(t=o.length>1),o}),b(e,H(e),r),t&&(r=y(r,Yn|Hn|Jn,Rn));for(var i=n.length;i--;)Kn(r,n[i]);return r}),Xn=Qn;export{y as b,Xn as o};
