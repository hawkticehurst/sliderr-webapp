(this["webpackJsonpsliderr-webapp"]=this["webpackJsonpsliderr-webapp"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),o=n.n(r),s=n(5),a=n.n(s),i=n(3);n(22);var l=function(e){var t=e.buttonText,n=e.buttonCallback;return Object(c.jsx)("button",{onClick:function(){return n()},children:t})};n(23);var u=function(e){var t=e.callback;return Object(c.jsxs)("section",{id:"welcome-container",children:[Object(c.jsx)("p",{children:"Welcome to"}),Object(c.jsx)("h1",{children:"sliderr"}),Object(c.jsx)(l,{buttonText:"continue",buttonCallback:t})]})};var b=function(e){var t=e.supportsBluetooth,n=e.connectToDevice;return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("h1",{children:"connect to sliderr"}),t?Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("p",{children:"Yay! It looks like your device supports Bluetooth."}),Object(c.jsx)(l,{buttonText:"connect",buttonCallback:n})]}):Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("p",{children:"Shoot! It looks like Bluetooth is not supported. Try using a different device or browser."}),Object(c.jsx)("p",{children:"Typically using Chrome on a computer or Android phone works."})]})]})},j=n(6);n(24);var d,h=function(e){var t=e.isLeftBoundary,n=e.setLeftBoundary,o=e.setRightBoundary;return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("h1",{children:"Set Boundaries"}),t?Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("p",{children:"Great! Now move the slider to the right edge and set the right boundary."}),Object(c.jsxs)("section",{className:"set-boundary-button-container",children:[Object(c.jsx)("button",{className:"circle-button-2",children:Object(c.jsx)(j.b,{className:"circle-button-icon-2"})}),Object(c.jsx)(l,{buttonText:"set right boundary",buttonCallback:o})]})]}):Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("p",{children:"Before you can use the slider you need to manually set its boundaries."}),Object(c.jsx)("p",{children:"Please move the slider to the left edge and then set the left boundary."}),Object(c.jsxs)("section",{className:"set-boundary-button-container",children:[Object(c.jsx)("button",{className:"circle-button-2",children:Object(c.jsx)(j.a,{className:"circle-button-icon-2"})}),Object(c.jsx)(l,{buttonText:"set left boundary",buttonCallback:n})]})]})]})},O=n(7),x=n.n(O),f=n(10),v=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,c,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.bluetooth.requestDevice({acceptAllDevices:!0});case 3:if(d=e.sent,t(!0),d.addEventListener("gattserverdisconnected",(function(e){p(e,t)})),!d.gatt){e.next=22;break}return e.next=9,d.gatt.connect();case 9:return n=e.sent,e.next=12,n.getPrimaryService("battery_service");case 12:return c=e.sent,e.next=15,c.getCharacteristic("battery_level");case 15:return(r=e.sent).startNotifications(),r.addEventListener("characteristicvaluechanged",g),e.next=20,r.readValue();case 20:o=e.sent,console.log(o);case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.log("There was an error: ".concat(e.t0));case 27:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e,t){alert("The device ".concat(e.target," is disconnected")),t(!1)},g=function(e){console.log("handleCharacteristicValueChanged")};var m=function(e){var t=e.supportsBluetooth,n=e.isConnected,r=e.setIsConnected,o=e.isLeftBoundary,s=e.setIsLeftBoundary,a=e.setIsRightBoundary;return Object(c.jsx)("section",{id:"setup-container",children:n?Object(c.jsx)(h,{isLeftBoundary:o,setLeftBoundary:function(){!function(e){e(!0)}(s)},setRightBoundary:function(){!function(e){e(!0)}(a)}}):Object(c.jsx)(b,{supportsBluetooth:t,connectToDevice:function(){v(r)}})})};n(26);var y=function(){return Object(c.jsx)("section",{id:"navbar-container",children:Object(c.jsx)("h1",{children:"sliderr"})})};n(27);var k=function(e){var t=e.buttonText,n=e.buttonCallback;return Object(c.jsx)("button",{className:"wide-button",onClick:function(){return n()},children:t})},C=n(12);n(30),n(31);var B=function(e){var t=e.title,n=e.defaultVal,r=Object(C.a)(C.b);return Object(c.jsxs)("section",{className:"slider-controller-container",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)(r,{className:"slider-controller-slider",defaultValue:n,trackStyle:{backgroundColor:"rgb(250, 250, 250)",height:3},handleStyle:{borderColor:"white",borderWidth:3,height:28,width:28,marginTop:-13,backgroundColor:"rgb(27, 28, 31)"},railStyle:{backgroundColor:"rgb(230, 230, 230)",height:2},tipProps:{placement:"bottom"}})]})},N=n(16);n(32);var w=function(){return Object(c.jsxs)("section",{id:"controls-container",children:[Object(c.jsx)(y,{}),Object(c.jsx)(k,{buttonText:"Create New Move",buttonCallback:function(){alert("create new move")}}),Object(c.jsx)(B,{title:"Acceleration",defaultVal:75}),Object(c.jsx)(B,{title:"Speed",defaultVal:35}),Object(c.jsxs)("section",{className:"left-right-button-container",children:[Object(c.jsx)("button",{className:"circle-button",children:Object(c.jsx)(j.a,{className:"circle-button-icon"})}),Object(c.jsx)("button",{className:"circle-button",children:Object(c.jsx)(N.a,{className:"circle-button-icon"})}),Object(c.jsx)("button",{className:"circle-button",children:Object(c.jsx)(j.b,{className:"circle-button-icon"})})]})]})};n(33);var S=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(r.useState)(!1),a=Object(i.a)(s,2),l=a[0],u=a[1],b=Object(r.useState)(!1),j=Object(i.a)(b,2),d=j[0],h=j[1],O=Object(r.useState)(!1),x=Object(i.a)(O,2),f=x[0],v=x[1],p=Object(r.useState)(!1),g=Object(i.a)(p,2),y=g[0],k=g[1];return Object(r.useEffect)((function(){navigator.bluetooth&&o(!0)}),[]),Object(r.useEffect)((function(){l&&d&&f&&k(!0)}),[l,d,f]),Object(c.jsx)(r.Fragment,{children:y?Object(c.jsx)(w,{}):Object(c.jsx)(m,{supportsBluetooth:n,isConnected:l,setIsConnected:u,isLeftBoundary:d,setIsLeftBoundary:h,setIsRightBoundary:v})})};n(34);var T=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.jsx)("div",{className:"App",children:n?Object(c.jsx)(u,{callback:function(){o(!1)}}):Object(c.jsx)(S,{})})};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b82e0c3d.chunk.js.map