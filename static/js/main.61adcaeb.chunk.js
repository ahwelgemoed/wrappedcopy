(this["webpackJsonpwrappedcopy-example"]=this["webpackJsonpwrappedcopy-example"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},4:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);n(4);var r=n(0),c=n.n(r),o=n(2),u=n.n(o),l=c.a.createContext({}),a=function(e){var t=e.children,n=Object(r.useState)(""),o=n[0],u=n[1];return c.a.createElement(l.Provider,{value:{copiedText:o,setCopiedText:u}},t)},i=function(e){var t=e.children;return Object(r.createElement)(a,null,t)},s=function(){return Object(r.useContext)(l)},p=function(e){var t=e.children,n=Object(r.useRef)(null),c=s().setCopiedText;return Object(r.createElement)("div",{ref:n,onClick:function(){return function(){try{var e=n.current&&n.current.textContent||"",t=function(){if(e)return Promise.resolve(navigator.clipboard.writeText(e)).then((function(){c&&c(e)}))}();return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}()}},t)},f=function(){return c.a.createElement(i,null,c.a.createElement(d,null))},d=function(){var e=s();return console.log(e),c.a.createElement("div",null,c.a.createElement(p,null,"Hello"))};u.a.render(c.a.createElement(f,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.61adcaeb.chunk.js.map