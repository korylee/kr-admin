import{ag as t,d as o,a8 as n,p as r,o as e,bt as a,r as c,i as s,ah as f,ao as u,j as i,af as l,aP as p}from"./vendor.9dfb8857.js";import{r as y,a as b}from"./responsiveObserve.c545f1cc.js";function d(){return(d=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var g=t("top","middle","bottom","stretch"),x=t("start","end","center","space-around","space-between"),h=o({name:"ARow",setup:function(t,o){var l,p=o.slots,g=n({gutter:void 0});r("rowContext",g),e((function(){l=y.subscribe((function(o){var n=t.gutter||0;(!Array.isArray(n)&&"object"===v(n)||Array.isArray(n)&&("object"===v(n[0])||"object"===v(n[1])))&&(x.value=o)}))})),a((function(){y.unsubscribe(l)}));var x=c({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),h=s("configProvider",f).getPrefixCls;return function(){var o,n,r=t.prefixCls,e=t.justify,a=t.align,c=h("row",r),s=function(){var o=[0,0],n=t.gutter,r=void 0===n?0:n;return(Array.isArray(r)?r:[r,0]).forEach((function(t,n){if("object"===v(t))for(var r=0;r<b.length;r++){var e=b[r];if(x.value[e]&&void 0!==t[e]){o[n]=t[e];break}}else o[n]=t||0})),o}(),f=u(c,(m(o={},"".concat(c,"-").concat(e),e),m(o,"".concat(c,"-").concat(a),a),o)),l=d(d({},s[0]>0?{marginLeft:"".concat(s[0]/-2,"px"),marginRight:"".concat(s[0]/-2,"px")}:{}),s[1]>0?{marginTop:"".concat(s[1]/-2,"px"),marginBottom:"".concat(s[1]/-2,"px")}:{});return g.gutter=s,i("div",{class:f,style:l},[null===(n=p.default)||void 0===n?void 0:n.call(p)])}}});function j(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function O(){return(O=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}h.props={type:l.oneOf(["flex"]),align:l.oneOf(g),justify:l.oneOf(x),prefixCls:l.string,gutter:l.oneOfType([l.object,l.number,l.array]).def(0)};var S=o({name:"ACol",setup:function(t,o){var n=o.slots,r=s("configProvider",f),e=s("rowContext",{});return function(){var o,a,c=e.gutter,s=t.prefixCls,f=t.span,l=t.order,p=t.offset,y=t.push,b=t.pull,d=t.flex,m=r.getPrefixCls("col",s),v={};["xs","sm","md","lg","xl","xxl"].forEach((function(o){var n,r={},e=t[o];"number"==typeof e?r.span=e:"object"===C(e)&&(r=e||{}),v=O(O({},v),(j(n={},"".concat(m,"-").concat(o,"-").concat(r.span),void 0!==r.span),j(n,"".concat(m,"-").concat(o,"-order-").concat(r.order),r.order||0===r.order),j(n,"".concat(m,"-").concat(o,"-offset-").concat(r.offset),r.offset||0===r.offset),j(n,"".concat(m,"-").concat(o,"-push-").concat(r.push),r.push||0===r.push),j(n,"".concat(m,"-").concat(o,"-pull-").concat(r.pull),r.pull||0===r.pull),n))}));var g=u(m,(j(o={},"".concat(m,"-").concat(f),void 0!==f),j(o,"".concat(m,"-order-").concat(l),l),j(o,"".concat(m,"-offset-").concat(p),p),j(o,"".concat(m,"-push-").concat(y),y),j(o,"".concat(m,"-pull-").concat(b),b),o),v),x={};return c&&(x=O(O(O({},c[0]>0?{paddingLeft:"".concat(c[0]/2,"px"),paddingRight:"".concat(c[0]/2,"px")}:{}),c[1]>0?{paddingTop:"".concat(c[1]/2,"px"),paddingBottom:"".concat(c[1]/2,"px")}:{}),x)),d&&(x.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(d)),i("div",{class:g,style:x},[null===(a=n.default)||void 0===a?void 0:a.call(n)])}}}),w=l.oneOfType([l.string,l.number]),A=l.shape({span:w,order:w,offset:w,push:w,pull:w}).loose,P=l.oneOfType([l.string,l.number,A]);S.props={span:w,order:w,offset:w,push:w,pull:w,xs:P,sm:P,md:P,lg:P,xl:P,xxl:P,prefixCls:l.string,flex:w};var T=p(h),R=p(S);export{S as A,R as C,T as R,h as a};