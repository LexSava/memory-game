(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(12),s=a.n(i),l=(a(89),a(156)),r=a(75),o=a(13),b=a(11),u=a(155),j=a(153),d=a(38),m=a(141),O=a(72),f=a(52),h=a(30),g=a(47);var p=new(function(){function e(){Object(f.a)(this,e),this.name="",this.histoty=[],this.accessToken=void 0,Object(g.b)(this,{},{autoBind:!0}),this.accessToken="",function(e,t){var a=localStorage.getItem(t);a&&Object(g.c)(e,JSON.parse(a)),Object(g.a)((function(){var a=Object(g.d)(e);localStorage.setItem(t,JSON.stringify(a))}))}(this,"authStore")}return Object(h.a)(e,[{key:"getName",value:function(e){this.name=e}},{key:"getHistoty",value:function(e){this.histoty=this.histoty.concat(e)}}]),e}()),v=(a(90),a(5)),x=function(e){var t=Object(O.useStopwatch)({autoStart:!1}),a=t.seconds,n=t.minutes,i=t.start,s=t.pause,l=t.reset;Object(c.useEffect)((function(){"start"===e.getTimer&&i(),"stop"===e.getTimer&&(p.getHistoty(60*n+a),s()),"reset"===e.getTimer&&l()}),[e.getTimer]);return Object(v.jsxs)(u.a,{display:"flex",justifyContent:"space-between",pl:4,pr:4,pt:2,pb:2,className:"header-block",children:[Object(v.jsx)(d.a,{className:"logo",children:"Memory game"}),Object(v.jsxs)(u.a,{display:"flex",alignItems:"center",className:"stopwatch",children:[n," : ",a]}),Object(v.jsx)(m.a,{variant:"contained",color:"secondary",onClick:function(){e.onRunRestertGame(!0),l()},children:"Restart"})]})},y=a(20),S=a(8),k=a.p+"static/media/fox.4c13be4a.svg",C=a.p+"static/media/mouse.f3239556.svg",T=a.p+"static/media/panda.bf1e07ce.svg",N=a.p+"static/media/penguin.28a6c7fe.svg",R=a.p+"static/media/giraffe.5b06f41a.svg",w=a.p+"static/media/hare.31cbdde7.svg",G=a.p+"static/media/bear.2a1821b9.svg",E=a.p+"static/media/camel.f628f5f2.svg",H=a.p+"static/media/crab.080f60ad.svg",F=a.p+"static/media/pig.a089e089.svg",I=a.p+"static/media/turtle.0710488d.svg",M=a.p+"static/media/tiger.ec08f237.svg",P=a.p+"static/media/battleship.d7f07a99.svg",B=a.p+"static/media/cat.43ecf4be.svg",W=a.p+"static/media/dog.cb011b99.svg",D=a.p+"static/media/elephant.b30b177a.svg",J=a.p+"static/media/raccoon.c3bdf204.svg",L=a.p+"static/media/sloth.e28b4a64.svg",A=[{label:"Fox",img:k,id:Object(S.v4)()},{label:"Fox",img:k,id:Object(S.v4)()},{label:"Mouse",img:C,id:Object(S.v4)()},{label:"Mouse",img:C,id:Object(S.v4)()},{label:"Panda",img:T,id:Object(S.v4)()},{label:"Panda",img:T,id:Object(S.v4)()},{label:"Penguin",img:N,id:Object(S.v4)()},{label:"Penguin",img:N,id:Object(S.v4)()},{label:"Giraffe",img:R,id:Object(S.v4)()},{label:"Giraffe",img:R,id:Object(S.v4)()},{label:"Hare",img:w,id:Object(S.v4)()},{label:"Hare",img:w,id:Object(S.v4)()},{label:"Bear",img:G,id:Object(S.v4)()},{label:"Bear",img:G,id:Object(S.v4)()},{label:"\u0421amel",img:E,id:Object(S.v4)()},{label:"\u0421amel",img:E,id:Object(S.v4)()},{label:"\u0421rab",img:H,id:Object(S.v4)()},{label:"\u0421rab",img:H,id:Object(S.v4)()},{label:"Pig",img:F,id:Object(S.v4)()},{label:"Pig",img:F,id:Object(S.v4)()},{label:"Turtle",img:I,id:Object(S.v4)()},{label:"Turtle",img:I,id:Object(S.v4)()},{label:"Tiger",img:M,id:Object(S.v4)()},{label:"Tiger",img:M,id:Object(S.v4)()},{label:"Battleship",img:P,id:Object(S.v4)()},{label:"Battleship",img:P,id:Object(S.v4)()},{label:"Cat",img:B,id:Object(S.v4)()},{label:"Cat",img:B,id:Object(S.v4)()},{label:"Dog",img:W,id:Object(S.v4)()},{label:"Dog",img:W,id:Object(S.v4)()},{label:"Elephant",img:D,id:Object(S.v4)()},{label:"Elephant",img:D,id:Object(S.v4)()},{label:"Raccoon",img:J,id:Object(S.v4)()},{label:"Raccoon",img:J,id:Object(S.v4)()},{label:"Sloth",img:L,id:Object(S.v4)()},{label:"Sloth",img:L,id:Object(S.v4)()}],K=(a(98),function(e){var t=e.isFlipped,a=e.onClick,c=e.value,n=t?" flipped":"";return Object(v.jsx)(u.a,{mt:2,mx:1,className:"animal-card",onClick:a,children:Object(v.jsxs)(u.a,{className:"card-inner".concat(n),children:[Object(v.jsx)(u.a,{className:"card-front"}),Object(v.jsx)(u.a,{className:"card-back",children:Object(v.jsx)("img",{src:c.img,alt:"elem-name",width:"100"})})]})})}),U=(a(99),function(e){var t=Object(c.useState)([]),a=Object(b.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)([]),l=Object(b.a)(s,2),r=l[0],o=l[1],j=Object(c.useState)(0),d=Object(b.a)(j,2),m=(d[0],d[1]),O=Object(c.useState)(null),f=Object(b.a)(O,2),h=f[0],g=f[1],p=Object(c.useState)(null),x=Object(b.a)(p,2),S=x[0],k=x[1],C=Object(c.useState)(0),T=Object(b.a)(C,2),N=T[0],R=T[1],w=function(){return Math.random()-.5};Object(c.useEffect)((function(){o(Object(y.a)(A).sort(w))}),[]),Object(c.useEffect)((function(){var t;return e.restertGame&&(t=setTimeout((function(){i([]),g(null),k(null),R(0),e.onRunRestertGame(!1),o(Object(y.a)(A).sort(w))}),500)),function(){return clearTimeout(t)}}),[e.restertGame]),Object(c.useEffect)((function(){var e=setInterval((function(){m((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){var t;return n.length&&(null!==h?(R((function(e){return e+1})),h.label===(null===S||void 0===S?void 0:S.label)?(n.length===A.length&&(e.onStopTimer("stop"),e.onCheckHistoryGame(!0),t=setTimeout((function(){i([]),g(null),k(null),R(0),o(Object(y.a)(A).sort(w)),e.onRunRestertGame(!1),e.onCheckHistoryGame(!1)}),500)),g(null),k(null),R(0)):t=setTimeout((function(){i(n.filter((function(e){return e!==(null===S||void 0===S?void 0:S.id)&&e!==(null===h||void 0===h?void 0:h.id)}))),g(null),k(null),R(0)}),1e3)):(g(S),R((function(e){return e+1})))),function(){return clearTimeout(t)}}),[n]);return Object(v.jsx)(u.a,{mx:"auto",p:4,display:"flex",flexWrap:"wrap",justifyContent:"space-around",className:"main-block cards",children:r.map((function(e){return Object(v.jsx)(K,{value:e,onClick:function(){return function(e){return N>=2||n.includes(e.id)?null:(k(e),i((function(){return[].concat(Object(y.a)(n),[e.id])})))}(e)},isFlipped:n.includes(e.id)},e.id)}))})}),_=a(159),q=a(142),z=a(143),Q=a(144),V=a(154),X=a(146),Y=(a(100),function(e){var t=Object(c.useState)(!1),a=Object(b.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(p.name),l=Object(b.a)(s,2),r=l[0],o=l[1];Object(c.useEffect)((function(){0===p.name.length&&j()}),[]);var j=function(){i(!0)},d=function(){p.getName(r),e.onCheckSwitchModalWindow(r),i(!1)};return Object(v.jsx)(u.a,{children:Object(v.jsxs)(_.a,{open:n,onClose:function(){i(!1)},"aria-labelledby":"form-dialog-title",children:[Object(v.jsx)(q.a,{id:"form-dialog-title",children:"Registration new User."}),Object(v.jsxs)(z.a,{children:[Object(v.jsx)(Q.a,{children:"Enter your name or nickname."}),Object(v.jsx)(V.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name or Nickname",type:"text",fullWidth:!0,className:"modal-window",onInput:function(e){o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(d(),e.preventDefault())}})]}),Object(v.jsx)(X.a,{children:Object(v.jsx)(m.a,{onClick:d,color:"primary",children:"Register"})})]})})}),Z=(a(102),function(e){var t=n.a.useState(!1),a=Object(b.a)(t,2),i=a[0],s=a[1],l=Object(c.useState)(p.name),r=Object(b.a)(l,2),o=r[0],j=r[1];Object(c.useEffect)((function(){j(p.name)}),[]),Object(c.useEffect)((function(){0!==p.name.length&&s(!0)}),[]);var d=function(){e.onRunTimer("start"),s(!1)};return Object(v.jsx)(u.a,{children:Object(v.jsxs)(_.a,{open:i,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(v.jsxs)(q.a,{id:"alert-dialog-title",children:["Welcome ",o,"."]}),Object(v.jsx)(z.a,{children:Object(v.jsx)(Q.a,{id:"alert-dialog-description",children:'The game "Memory" is a field on which cards with pictures are located. The cards are in random order, and each of them is represented on the field 2 times. Initially, the cards are closed and can be opened by clicking the mouse. Only two cards can be opened at a time (not counting the pairs already found), so the location of the pictures must be remembered. If the open symbols match, the found pairs remain on the field in an open form. The goal of the game is to consistently open the entire field. Are you ready?'})}),Object(v.jsx)(X.a,{children:Object(v.jsx)(m.a,{onClick:d,color:"primary",children:"Start the game"})})]})})}),$=a(147),ee=a(148),te=a(149),ae=a(145),ce=a(150),ne=a(151),ie=a(152),se=a(74),le=a.n(se),re=(a(103),function(e){var t=Object(c.useState)(!1),a=Object(b.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(p.histoty),l=Object(b.a)(s,2),r=l[0],o=l[1];Object(c.useEffect)((function(){o(p.histoty.sort((function(e,t){return e-t})))}),[p.histoty]),Object(c.useEffect)((function(){e.openHistoryGame&&j()}),[e.openHistoryGame]);var j=function(){i(!0)},O=function(){e.onCheckHistoryGame(!1),e.onRunTimer("reset"),i(!1)};return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(m.a,{variant:"contained",color:"secondary",onClick:j,children:"Open game result"}),Object(v.jsxs)(_.a,{fullScreen:!0,open:n,onClose:O,children:[Object(v.jsx)($.a,{className:"app-bar header-block",children:Object(v.jsxs)(ee.a,{children:[Object(v.jsx)(te.a,{edge:"start",color:"inherit",onClick:O,"aria-label":"close",className:"color-text-headr",children:Object(v.jsx)(le.a,{className:"color-text-headr"})}),Object(v.jsx)(d.a,{variant:"h6",className:"title",children:"Results table"}),Object(v.jsx)(m.a,{autoFocus:!0,color:"inherit",onClick:O,children:"Close"})]})}),Object(v.jsx)(ae.a,{children:r.map((function(e,t){return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(ce.a,{children:Object(v.jsx)(ne.a,{primary:"".concat(t+1," result -  ").concat(Math.floor(e/60),": ").concat(e%60)})}),Object(v.jsx)(ie.a,{})]},Object(S.v4)())}))})]})]})}),oe=(a(108),function(e){var t=Object(c.useState)([]),a=Object(b.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)([]),l=Object(b.a)(s,2),r=l[0],o=l[1],d=Object(c.useState)(""),m=Object(b.a)(d,2),O=m[0],f=m[1],h=Object(c.useState)("pause"),g=Object(b.a)(h,2),y=g[0],S=g[1],k=Object(c.useState)(!1),C=Object(b.a)(k,2),T=C[0],N=C[1],R=Object(c.useState)(!1),w=Object(b.a)(R,2),G=w[0],E=w[1];Object(c.useEffect)((function(){0!==p.name.length?i(Object(v.jsx)(Z,{onRunTimer:I})):i(Object(v.jsx)(Y,{onCheckSwitchModalWindow:H}))}),[O]),Object(c.useEffect)((function(){o(Object(v.jsx)(re,{onRunTimer:I,onCheckHistoryGame:F,openHistoryGame:G}))}),[G]);var H=function(e){f(e)},F=function(e){E(e)},I=function(e){S(e)},M=function(e){N(e)};return Object(v.jsxs)(u.a,{maxWidth:"1920px",mx:"auto",children:[Object(v.jsx)(x,{getTimer:y,onRunRestertGame:M}),Object(v.jsx)(U,{onStopTimer:I,restertGame:T,onRunRestertGame:M,onCheckHistoryGame:F}),n,Object(v.jsxs)(u.a,{className:"header-block ",pl:4,pr:4,pt:2,pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(v.jsx)(j.a,{href:"https://github.com/LexSava/memory-game",color:"inherit",target:"_blank",children:"App GitHub"}),r]})]})}),be=(a(109),function(){return Object(v.jsx)(l.b,{injectFirst:!0,children:Object(v.jsx)(r.a,{children:Object(v.jsx)(o.a,{exact:!0,path:"/",component:oe})})})}),ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(be,{})}),document.getElementById("root")),ue()},89:function(e,t,a){},90:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.fc3f1c30.chunk.js.map