(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(6),s=n(4),u=n(5),l=n(8),d=n(7),h=n(2),g=n.n(h),p=n(3);function f(e){return function(){var t=Object(p.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:"SET_IMG",img:e})}catch(a){console.log("err in loadImg",a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function m(e){return function(){var t=Object(p.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:"SET_DEGREES",degrees:e})}catch(a){console.log("err in loadRotationDegreess",a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var b={uploadImg:function(e){return v.apply(this,arguments)}};function v(){return(v=Object(p.a)(g.a.mark((function e(t){var n,a,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"dcnijwmki",n="https://api.cloudinary.com/v1_1/".concat("dcnijwmki","/image/upload"),(a=new FormData).append("file",t.files[0]),a.append("upload_preset","iqbe0osh"),e.prev=5,e.next=8,fetch(n,{method:"POST",body:a});case 8:return r=e.sent,e.next=11,r.json();case 11:return o=e.sent,e.abrupt("return",o.url);case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}var j=n(1),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(){return function(){var t=Object(p.a)(g.a.mark((function t(n){var a,r,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target,t.next=3,b.uploadImg(a);case 3:r=t.sent,(o=new Image).crossOrigin="Anonymous",o.src=r,o.onload=function(){e.props.loadImg(o),e.props.loadRotationDegrees(0)};case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{className:"btn upload-btn",children:Object(j.jsxs)("label",{htmlFor:"file-upload",children:[Object(j.jsx)("div",{className:"square"}),Object(j.jsx)("input",{style:{display:"none"},onChange:this.handleChange("imgUrl"),type:"file",id:"file-upload",name:"file-upload",accept:"image/*"})]})})})}}]),n}(a.Component),O={loadImg:f,loadRotationDegrees:m},I=Object(i.b)(null,O)(w);var y={on:function(e,t){var n=function(e){var n=e.detail;t(n)};return window.addEventListener(e,n),function(){window.removeEventListener(e,n)}},emit:function(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}},x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).canvasRef=r.a.createRef(),e.loadImgToCanvas=function(){var t=e.props.img,n=e.canvasRef.current,a=n.getContext("2d");a.clearRect(0,0,n.width,n.height),e.drawImage(a,t,n.width,n.height)},e.rotateImg=function(){var t=e.props,n=t.img,a=t.degrees,r=e.canvasRef.current,o=r.width,c=r.height,i=r.getContext("2d");i.save(),i.clearRect(0,0,r.width,r.height),i.translate(r.width/2,r.height/2),i.rotate(a*Math.PI/180),e.drawImage(i,n,o,c,!0),i.restore()},e.drawImage=function(t,n,a,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=o?-a/2:0,i=o?-r/2:0,s=e._getImgOrientation(n);switch(s){case"sqaure":e._drawSquareImage(t,n,c,i,a,r);break;case"horizontal":e._drawHorizontalImage(t,n,c,i,a,r);break;case"vertical":e._drawVerticalImage(t,n,c,i,a,r)}},e._drawHorizontalImage=function(e,t,n,a,r,o){e.drawImage(t,t.width/7,0,t.width/7*5,t.height,n,a,r,o)},e._drawVerticalImage=function(e,t,n,a,r,o){e.drawImage(t,0,t.height/7,t.width,t.height/7*5,n,a,r,o)},e._drawSquareImage=function(e,t,n,a,r,o){t.height>o?e.drawImage(t,n,a,r,o):e.drawImage(t,(r-t.width)/2+n,(o-t.height)/2+a,t.width,t.height)},e._getImgOrientation=function(e){return e.naturalWidth===e.naturalHeight?"sqaure":e.naturalWidth>e.naturalHeight?"horizontal":"vertical"},e.handleClick=function(){var t=e.props.degrees;t+=90,e.props.loadRotationDegrees(t)},e.logBlobToConsole=function(){e.canvasRef.current.toBlob((function(e){var t=new Image;t.src=URL.createObjectURL(e),console.log("Link to the blob as an image from the canvas. (go to the full link, (include blob: in the beginning )): ".concat(t.src))}),"image/jpeg",.9)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=y.on("logToConsole",(function(){e.logBlobToConsole()}))}},{key:"componentDidUpdate",value:function(e){e.img!==this.props.img&&this.loadImgToCanvas(),e.degrees!==this.props.degrees&&this.rotateImg()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"content-container",children:[Object(j.jsx)("div",{className:"canvas-container",children:Object(j.jsx)("canvas",{ref:this.canvasRef,id:"canvas",height:"300",width:"300",children:"Canvas"})}),Object(j.jsx)("button",{className:"btn rotate-btn",onClick:this.handleClick,children:"Rotate"})]})}}]),n}(a.Component),C={loadImg:f,loadRotationDegrees:m},k=Object(i.b)((function(e){return{img:e.img,degrees:e.degrees}}),C)(x);function _(){return Object(j.jsx)("footer",{className:"footer",onClick:function(){y.emit("logToConsole")}})}var E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app main-container",children:[Object(j.jsx)(I,{}),Object(j.jsx)(k,{}),Object(j.jsx)(_,{})]})}}]),n}(a.Component),R=n(11),T=n(15),S=n(9),D={img:null,degrees:0};var N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.b,L=Object(R.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMG":return Object(S.a)(Object(S.a)({},e),{},{img:t.img});case"SET_DEGREES":return Object(S.a)(Object(S.a)({},e),{},{degrees:t.degrees});default:return e}}),N(Object(R.a)(T.a))),q=(n(26),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))});c.a.render(Object(j.jsx)(i.a,{store:L,children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(E,{})})}),document.getElementById("root")),q()}},[[27,1,2]]]);
//# sourceMappingURL=main.df7671f9.chunk.js.map