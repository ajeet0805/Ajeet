(this.webpackJsonpmydata=this.webpackJsonpmydata||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),c=t.n(o),l=(t(9),t(10),t(1)),i=[{id:"PRODUCT_ID_1",name:"Product1",brand:"Brand1",Variant:[{type:"default",variationId:"PRODUCT_ID_1_VAR_ID_0",cost:123,color:"red",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_1_VAR_ID_1",cost:106,color:"orange",months:["November","December","January"]}]},{id:"PRODUCT_ID_2",name:"roduct2",brand:"Brand2",Variant:[{type:"default",variationId:"PRODUCT_ID_2_VAR_ID_0",cost:225,color:"green",months:["January","Feburary"]},{type:"variation",variationId:"PRODUCT_ID_2_VAR_ID_1",cost:350,color:"purple",months:["January","February","March"]}]}],s=["January","Feburary","March","April","May","June","August","September","October","November","December"];var m=function(e){var a=Object(n.useState)(s),t=Object(l.a)(a,1)[0],o=Object(n.useState)("January"),c=Object(l.a)(o,2),m=c[0],u=c[1],d=Object(n.useState)(i),w=Object(l.a)(d,1)[0],b=Object(n.useState)(),v=Object(l.a)(b,2),p=v[0],_=v[1],g=Object(n.useState)(null),h=Object(l.a)(g,2),E=h[0],y=h[1],f=Object(n.useState)(null),N=Object(l.a)(f,2),O=N[0],D=N[1],I=Object(n.useState)(null),V=Object(l.a)(I,2),j=V[0],k=V[1];function C(e){var a=e.target.id,t=a.split("_");console.log(a);var n=w[t[1]].Variant[t[2]].cost;if(-1===w[t[1]].Variant[t[2]].months.indexOf(m))return alert("This color is not available for this Month"),!1;k(parseInt(t[1])),D(n),y(parseInt(t[1])),_(e.target.name)}function R(e){var a=e.target.id.split("_"),t=w[a[1]].Variant[a[2]].cost,n=w[a[1]].Variant[a[2]].months;console.log(n),k(parseInt(a[1])),D(t),y(parseInt(a[1])),_(e.target.name)}return r.a.createElement("div",{className:"w3-container"},r.a.createElement("div",{className:"w3-bar w3-black"},r.a.createElement("button",{className:"w3-button"},"Test")),r.a.createElement("div",{className:"w3-row w3-border"},r.a.createElement("div",{className:"w3-third w3-container w3-margin-top"},r.a.createElement("select",{onChange:function(e){e.preventDefault(),u(e.target.value)},className:"w3-input w3-border"},t.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),w.map((function(e,a){return r.a.createElement("div",{className:"w3-section",key:a},e.Variant.map((function(e,t){return r.a.createElement("button",{className:"w3-button w3-large w3-circle w3-xlarge w3-ripple w3-margin-right",key:a+"_"+e.color,name:e.color,id:e.color+"_"+a+"_"+t,style:{backgroundColor:e.color},onMouseEnter:C})})))}))),r.a.createElement("div",{className:"w3-twothird w3-container w3-border"},w.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-row"},r.a.createElement("div",{className:"w3-half w3-container w3-border",style:{height:"125px",backgroundColor:E===a?p:e.Variant[a].color}},E===a?p:e.Variant[a].color),r.a.createElement("div",{className:"w3-half w3-container w3-border"},r.a.createElement("div",{className:"w3-container"},r.a.createElement("span",null,"Product Name :",e.name)),r.a.createElement("div",{className:"w3-container"},r.a.createElement("span",null,"By  :",e.brand)),r.a.createElement("div",{className:"w3-container"},r.a.createElement("span",null,"Cost :",j===a?O:e.Variant[a].cost)),r.a.createElement("div",{className:"w3-container"},r.a.createElement("div",{className:"w3-section"},e.Variant.map((function(e,t){return r.a.createElement("button",{className:"w3-button w3-large w3-circle w3-xlarge w3-ripple w3-margin-right",key:e.color+"_"+a+"_",name:e.color,id:e.color+"_"+a+"_"+t,style:{backgroundColor:e.color},onMouseEnter:R})})))))))})))))};var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(11);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.649ddd04.chunk.js.map