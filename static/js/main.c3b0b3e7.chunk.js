(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{134:function(e,n){},148:function(e,n,t){},149:function(e,n,t){},218:function(e,n){},220:function(e,n){},262:function(e,n){},265:function(e,n){},314:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),i=t(58),a=t.n(i),s=(t(148),t(143)),o=(t(149),t(139)),d=t(12),l=[{id:"3",name:"API v3",specUrl:"https://www.gmodstore.com/openapi"},{id:"2",name:"API v2",specUrl:"https://raw.githubusercontent.com/everyday-as/gmodstore-api-docs/master/openapi/api-v2.yaml"}];var p=function(){var e=Object(c.useState)(l[0].specUrl),n=Object(s.a)(e,2),t=n[0],r=n[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("div",{className:"header__container",children:Object(d.jsxs)("div",{className:"header__container__input-group",children:[Object(d.jsx)("label",{htmlFor:"versionSelector",children:"API version"}),Object(d.jsx)("select",{id:"versionSelector",onChange:function(e){return function(e){var n=l.find((function(n){return n.id===e.target.value}));n&&r(n.specUrl)}(e)},children:l.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})})}),Object(d.jsx)(o.RedocStandalone,{specUrl:t})]})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[314,1,2]]]);
//# sourceMappingURL=main.c3b0b3e7.chunk.js.map