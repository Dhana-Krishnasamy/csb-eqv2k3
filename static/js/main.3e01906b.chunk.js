(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{68:function(e,a,t){},85:function(e,a,t){e.exports=t(87)},87:function(e,a,t){"use strict";t.r(a);var n=t(15),l=t(13),r=t(0),c=t.n(r),o=t(29),m=t.n(o),u=t(129),i=t(130),s=t(131),d=t(134),b=t(132),f=t(128),p=t(71),E=t(72),v=t(135),h=(t(68),t(136)),j=t(84),C=t(53),O=r.forwardRef(function(e,a){var t=e.onChange,n=Object(j.a)(e,["onChange"]);return r.createElement(C.a,Object.assign({},n,{getInputRef:a,onValueChange:function(a){t({target:{name:e.name,value:a.value}})},thousandSeparator:!0,prefix:"\xa3",displayType:"number",decimalScale:2}))});function g(){var e=Object(r.useState)(1e4),a=Object(l.a)(e,2),t=a[0],o=a[1],m=Object(r.useState)([20,30,50]),j=Object(l.a)(m,2),C=j[0],g=j[1],x=Object(r.useState)(0),k=Object(l.a)(x,2),y=k[0],N=k[1];Object(r.useEffect)(function(){return N(C.reduce(function(e,a){return e+a},0))},[C]);var S=Object(r.useCallback)(function(e){return function(a){var t=Object(n.a)(C);t[e]=Number(a.target.value),g(t)}},[C]),w=Object(r.useCallback)(function(e){return function(a){if(t>0){var l=a.target.value,r=Object(n.a)(C);r[e]=Number(100*l/t),g(r)}}},[C,t]),T=Object(r.useCallback)(function(){g(function(e){return[].concat(Object(n.a)(e),[0])})},[]),z=Object(r.useCallback)(function(e){g(function(a){return a.splice(e,1),Object(n.a)(a)})},[]),F=Object(r.useCallback)(function(e){return o(Number(e.target.value))},[]);return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Rebalance Calculator"),c.a.createElement(h.a,{className:"split-section",sx:{"& > :not(style)":{m:1}}},c.a.createElement(f.a,{label:"Amount",value:t,onChange:F,name:"numberformat",id:"formatted-numberformat-input",InputProps:{inputComponent:O},variant:"standard"})),c.a.createElement(h.a,{className:"split-section",sx:{"& > :not(style)":{m:1}}},c.a.createElement(i.a,{fullWidth:!0,sx:{m:1}},c.a.createElement(s.a,{htmlFor:"total"},"Total"),c.a.createElement(d.a,{id:"total",size:"small",disabled:!0,value:y,endAdornment:c.a.createElement(b.a,{position:"end"},"%"),label:"Total",error:y>100})),c.a.createElement(i.a,{fullWidth:!0,sx:{m:1}},c.a.createElement(s.a,{htmlFor:"Total(\xa3)"},"Total(\xa3)"),c.a.createElement(d.a,{size:"small",id:"Total(\xa3)",label:"Total(\xa3)",disabled:!0,value:t*y/100,name:"numberformat",inputComponent:O,variant:"standard"})),c.a.createElement(i.a,{fullWidth:!0,sx:{m:1}},c.a.createElement(s.a,{htmlFor:"balance"},"Balance"),c.a.createElement(d.a,{size:"small",id:"balance",label:"Balance",disabled:!0,value:t-t*y/100,name:"numberformat",inputComponent:O,variant:"standard"}))),C.map(function(e,a){return c.a.createElement(h.a,{key:a,className:"split-section",sx:{"& > :not(style)":{m:1}}},c.a.createElement(i.a,{fullWidth:!0,sx:{m:1}},c.a.createElement(s.a,{htmlFor:"outlined-adornment-amount"},"Stock-".concat(a+1)),c.a.createElement(d.a,{size:"small",id:"outlined-adornment-amount",value:e.toFixed(0),onChange:S(a),endAdornment:c.a.createElement(b.a,{position:"end"},"%"),label:"Stock-".concat(a+1),error:y>100})),c.a.createElement(i.a,{fullWidth:!0,sx:{m:1}},c.a.createElement(s.a,{htmlFor:"amount".concat(a)},"\xa3"),c.a.createElement(d.a,{size:"small",id:"amount".concat(a),label:"\xa3",value:Number(t*e/100),name:"numberformat",inputComponent:O,variant:"standard",onChange:w(a)})),c.a.createElement(u.a,{color:"secondary",onClick:function(){return z(a)}},c.a.createElement(v.a,{fontSize:"small",sx:{color:p.a[500]}},"remove_circle")))}),c.a.createElement(u.a,{color:"primary","aria-label":"add to shopping cart",onClick:T},c.a.createElement(v.a,{sx:{color:E.a[500]}},"add_circle")))}var x=document.getElementById("root");m.a.render(c.a.createElement(g,null),x)}},[[85,2,1]]]);
//# sourceMappingURL=main.3e01906b.chunk.js.map