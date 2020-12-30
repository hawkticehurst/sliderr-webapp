(this["webpackJsonpsliderr-webapp"]=this["webpackJsonpsliderr-webapp"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(1),r=n.n(o),s=n(5),a=n.n(s),i=n(3);n(22);var u=function(e){var t=e.buttonText,n=e.buttonCallback;return Object(c.jsx)("button",{onClick:function(){return n()},children:t})};n(23);var l=function(e){var t=e.callback;return Object(c.jsxs)("section",{id:"welcome-container",children:[Object(c.jsx)("p",{children:"Welcome to"}),Object(c.jsx)("h1",{children:"sliderr"}),Object(c.jsx)(u,{buttonText:"continue",buttonCallback:t})]})};var b,j,d=function(e){var t=e.supportsBluetooth,n=e.connectToDevice;return Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)("h1",{children:"connect to sliderr"}),t?Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)("p",{children:"Yay! It looks like your device supports Bluetooth."}),Object(c.jsx)(u,{buttonText:"connect",buttonCallback:n})]}):Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)("p",{children:"Shoot! It looks like Bluetooth is not supported. Try using a different device or browser."}),Object(c.jsx)("p",{children:"Typically using Chrome on a computer or Android phone works."})]})]})},h=n(7),f=n.n(h),O=n(10),x="0000ffe0-0000-1000-8000-00805f9b34fb",p=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:[x]});case 3:if((b=e.sent).addEventListener("gattserverdisconnected",(function(e){m(e,t)})),!b.gatt){e.next=17;break}return e.next=8,b.gatt.connect();case 8:return n=e.sent,t(!0),e.next=12,n.getPrimaryService(x);case 12:return c=e.sent,e.next=15,c.getCharacteristic("0000ffe1-0000-1000-8000-00805f9b34fb");case 15:o=e.sent,j=o;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("There was an error: ".concat(e.t0));case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e,t){alert("The device ".concat(e.target," is disconnected")),t(!1)},v=function(){B("stop!")},g=function(){B("movL!")},y=function(){B("movR!")},k=function(){B("home!")},N=function(e){B("setA:".concat(e,"!"))},C=function(e){B("setS:".concat(e,"!"))};function B(e){for(var t=[],n=0;n<e.length;n++)t[n]=e.charCodeAt(n);j.writeValue(Uint8Array.of.apply(Uint8Array,t))}var w=n(6);n(25);var S=function(e){var t=e.isLeftBoundary,n=e.setLeftBoundary,r=e.setRightBoundary;return Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)("h1",{children:"Set Boundaries"}),t?Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)("p",{children:"Great! Now move the slider to the right edge and set the right boundary."}),Object(c.jsxs)("section",{className:"set-boundary-container",children:[Object(c.jsxs)("section",{className:"button-container",children:[Object(c.jsx)("button",{className:"circle-button-2",onMouseDown:g,onMouseUp:v,children:Object(c.jsx)(w.a,{className:"circle-button-icon-2"})}),Object(c.jsx)("button",{className:"circle-button-2",onMouseDown:y,onMouseUp:v,children:Object(c.jsx)(w.b,{className:"circle-button-icon-2"})})]}),Object(c.jsx)(u,{buttonText:"set right boundary",buttonCallback:r})]})]}):Object(c.jsxs)(o.Fragment,{children:[Object(c.jsx)("p",{children:"Before you can use the slider you need to manually set its boundaries."}),Object(c.jsx)("p",{children:"Please move the slider to the left edge and then set the left boundary."}),Object(c.jsxs)("section",{className:"set-boundary-container",children:[Object(c.jsxs)("section",{className:"button-container",children:[Object(c.jsx)("button",{className:"circle-button-2",onMouseDown:g,onMouseUp:v,children:Object(c.jsx)(w.a,{className:"circle-button-icon-2"})}),Object(c.jsx)("button",{className:"circle-button-2",onMouseDown:y,onMouseUp:v,children:Object(c.jsx)(w.b,{className:"circle-button-icon-2"})})]}),Object(c.jsx)(u,{buttonText:"set left boundary",buttonCallback:n})]})]})]})};var M=function(e){var t=e.supportsBluetooth,n=e.isConnected,o=e.setIsConnected,r=e.isLeftBoundary,s=e.setIsLeftBoundary,a=e.setIsRightBoundary;return Object(c.jsx)("section",{id:"setup-container",children:n?Object(c.jsx)(S,{isLeftBoundary:r,setLeftBoundary:function(){!function(e){B("setL!"),e(!0)}(s)},setRightBoundary:function(){!function(e){B("setR!"),e(!0)}(a)}}):Object(c.jsx)(d,{supportsBluetooth:t,connectToDevice:function(){p(o)}})})};n(26);var T=function(){return Object(c.jsx)("section",{id:"navbar-container",children:Object(c.jsx)("h1",{children:"sliderr"})})},L=n(12);n(29),n(30);var D=function(e){var t=e.title,n=e.onChangeFunc,o=e.defaultVal,r=Object(L.a)(L.b);return Object(c.jsxs)("section",{className:"slider-controller-container",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)(r,{className:"slider-controller-slider",onAfterChange:n,defaultValue:o,trackStyle:{backgroundColor:"rgb(250, 250, 250)",height:3},handleStyle:{borderColor:"white",borderWidth:3,height:28,width:28,marginTop:-13,backgroundColor:"rgb(27, 28, 31)"},railStyle:{backgroundColor:"rgb(230, 230, 230)",height:2},tipProps:{placement:"bottom"}})]})},F=n(16);n(31);var A=function(){return Object(c.jsxs)("section",{id:"controls-container",children:[Object(c.jsx)(T,{}),Object(c.jsx)(D,{title:"Acceleration",onChangeFunc:N,defaultVal:75}),Object(c.jsx)(D,{title:"Speed",onChangeFunc:C,defaultVal:50}),Object(c.jsxs)("section",{className:"left-right-button-container",children:[Object(c.jsx)("button",{className:"circle-button",onMouseDown:g,onMouseUp:v,children:Object(c.jsx)(w.a,{className:"circle-button-icon"})}),Object(c.jsx)("button",{className:"circle-button",onClick:k,children:Object(c.jsx)(F.a,{className:"circle-button-icon"})}),Object(c.jsx)("button",{className:"circle-button",onMouseDown:y,onMouseUp:v,children:Object(c.jsx)(w.b,{className:"circle-button-icon"})})]})]})};n(32);var I=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(o.useState)(!1),a=Object(i.a)(s,2),u=a[0],l=a[1],b=Object(o.useState)(!1),j=Object(i.a)(b,2),d=j[0],h=j[1],f=Object(o.useState)(!1),O=Object(i.a)(f,2),x=O[0],p=O[1],m=Object(o.useState)(!1),v=Object(i.a)(m,2),g=v[0],y=v[1];return Object(o.useEffect)((function(){navigator.bluetooth&&r(!0)}),[]),Object(o.useEffect)((function(){u&&d&&x&&y(!0)}),[u,d,x]),Object(c.jsx)(o.Fragment,{children:g?Object(c.jsx)(A,{}):Object(c.jsx)(M,{supportsBluetooth:n,isConnected:u,setIsConnected:l,isLeftBoundary:d,setIsLeftBoundary:h,setIsRightBoundary:p})})};n(33);var U=function(){var e=Object(o.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)("div",{className:"App",children:n?Object(c.jsx)(l,{callback:function(){r(!1)}}):Object(c.jsx)(I,{})})};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9e376b1b.chunk.js.map