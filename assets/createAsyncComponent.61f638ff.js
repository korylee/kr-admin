import{c9 as p,c as d,a8 as f,ca as u}from"./index.618dfac3.js";function y(e,n={}){const{size:o="small",delay:t=100,timeout:a=3e4,loading:s=!1,retry:r=!0}=n;return p({loader:e,loadingComponent:s?d(f,{spinning:!0,size:o},null):void 0,timeout:a,delay:t,onError:r?(i,c,l,m)=>{i.message.match(/fetch/)&&m<=3?c():l()}:u})}export{y as c};
