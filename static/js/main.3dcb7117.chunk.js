(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,o,c,r,a,d,s,l,h=t(0),u=t(12),b=t.n(u),j=(t(21),t(4)),p=t(16),g=t(6),x=t(2),f=t(3),O=t.p+"static/media/greenCompleted.0e6869a1.png",w=t(1),k=f.a.div(i||(i=Object(x.a)([""]))),v=f.a.div(o||(o=Object(x.a)(["\n  color: black;\n  font-size: 100px;\n  text-align: center;\n  margin-bottom: 40px;\n  font-weight: bolder;\n  -webkit-text-stroke: 3px #fff;\n"]))),C=f.a.div(c||(c=Object(x.a)(["\n  width: 1000px;\n  height: auto;\n  margin: auto;\n  margin-top: 50px;\n"]))),m=f.a.input(r||(r=Object(x.a)(["\n  margin-right: 20px;\n  border-radius: 8px;\n  padding: 18px;\n  font-size: 20px;\n  border: black solid 2px;\n"]))),D=f.a.div(a||(a=Object(x.a)(["\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border: 2px solid white;\n  & + & {\n    margin-top: 20px;\n  }\n  margin-top: 15px;\n"]))),E=f.a.div(d||(d=Object(x.a)(["\n  padding: 15px;\n  font-size: 25px;\n  color: rgba(2, 50, 80);\n  word-break: break-all;\n  width: 600px;\n  position: relative;\n  ","\n"])),(function(n){return n.isDone?"&:after {\n      content: '';\n      width: 180px;\n      height: 100px;\n      position: absolute;\n      left: 450px;\n      top: -43px;\n      background-image: url(".concat(O,");\n      background-size: 100%;\n      z-index: 1;\n    }"):""})),T=f.a.div(s||(s=Object(x.a)([""]))),A=f.a.button(l||(l=Object(x.a)(["\n  font-size: 25px;\n  padding: 15px;\n  color: white;\n  margin-right: 10px;\n  border-radius: 10px;\n  background: black;\n  border: white 2px outset;\n  transition: 0.5s;\n  &:hover {\n    color: black;\n    background: white;\n    border: black 2px outset;\n    transition: 0.2s;\n  }\n  ","\n"])),(function(n){return n.whichTabActive&&n.whichTabActive?"color: black;\n  background: white;\n  border: black 2px outset;\n  transition: 0.2s;":""}));function y(n){var e=n.content,t=n.handleContentChange,i=n.handleAdd,o=n.handleShow,c=n.whichTabActive;return Object(w.jsxs)("div",{style:{marginBottom:"45px"},children:[Object(w.jsx)(m,{type:"text",value:e,onChange:t,placeholder:"type anything you want to do",size:"25"}),Object(w.jsx)(A,{onClick:i,children:"add todo"}),Object(w.jsx)(A,{whichTabActive:c.current.showAll,onClick:o,children:"show all"}),Object(w.jsx)(A,{whichTabActive:c.current.showDone,onClick:o,children:"show done"}),Object(w.jsx)(A,{whichTabActive:c.current.showUndo,onClick:o,children:"show undo"})]})}function z(n){var e=n.todo,t=n.handleToggle,i=n.handleEditClick,o=n.handleDelete,c=n.handleEditChange,r=n.handleEditConfirm;return Object(w.jsxs)(D,{id:e.id,children:[e.isEditing?Object(w.jsx)(m,{type:"text",defaultValue:e.content,size:"30",onChange:c}):Object(w.jsx)(E,{isDone:e.isDone,children:e.content}),Object(w.jsxs)(T,{children:[e.isEditing?null:Object(w.jsx)(A,{onClick:function(){return t(e.id)},children:e.isDone?"undo":"done"}),e.isEditing?Object(w.jsx)(A,{onClick:function(){return i(e.id)},children:"Cancel"}):Object(w.jsx)(A,{onClick:function(){return i(e.id)},children:"Edit"}),e.isEditing?Object(w.jsx)(A,{onClick:function(){return r(e.id)},children:"Confirm"}):Object(w.jsx)(A,{onClick:function(){return o(e.id)},children:"Delete"})]})]})}var S=function(){var n=Object(h.useState)(""),e=Object(g.a)(n,2),t=e[0],i=e[1],o=Object(h.useRef)(3),c=Object(h.useRef)({showAll:!0,showDone:!1,showUndo:!1}),r=Object(h.useState)(""),a=Object(g.a)(r,2),d=a[0],s=a[1],l=Object(h.useState)("all"),u=Object(g.a)(l,2),b=u[0],x=u[1],f=Object(h.useState)([{id:1,content:"123",isDone:!0,isEditing:!1},{id:2,content:"456",isDone:!1,isEditing:!1}]),O=Object(g.a)(f,2),m=O[0],D=O[1];function E(n){s(n.target.value)}function T(n){D(m.filter((function(e){return e.id!==n})))}function A(n){D(m.map((function(e){return e.id!==n?e:Object(j.a)(Object(j.a)({},e),{},{content:d,isEditing:!e.isEditing})})))}function S(n){D(m.map((function(e){return e.id!==n?e:Object(j.a)(Object(j.a)({},e),{},{isEditing:!e.isEditing})})))}function U(n){D(m.map((function(e){return e.id!==n?e:Object(j.a)(Object(j.a)({},e),{},{isDone:!e.isDone})})))}return Object(w.jsx)(k,{children:Object(w.jsxs)(C,{children:[Object(w.jsx)(v,{children:"Todo List"}),Object(w.jsx)(y,{content:t,handleContentChange:function(n){i(n.target.value)},handleAdd:function(){if(""===t)return alert("Please type something in the input box");D([{id:o.current,content:t,isDone:!1,isEditing:!1}].concat(Object(p.a)(m))),o.current++,i("")},handleShow:function(n){return"show all"===n.target.innerText?(c.current={showAll:!0,showDone:!1,showUndo:!1},x("all")):"show undo"===n.target.innerText?(c.current={showAll:!1,showDone:!1,showUndo:!0},x("undo")):"show done"===n.target.innerText?(c.current={showAll:!1,showDone:!0,showUndo:!1},x("done")):void 0},whichTabActive:c}),m.filter((function(n){return"undo"===b?!1===n.isDone:"done"===b?!0===n.isDone:"all"===b||void 0})).map((function(n){return Object(w.jsx)(z,{todo:n,handleDelete:T,handleToggle:U,handleEditClick:S,handleEditChange:E,handleEditConfirm:A},n.id)}))]})})},U=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),o(n),c(n),r(n)}))};b.a.render(Object(w.jsx)(S,{}),document.getElementById("root")),U()}},[[25,1,2]]]);
//# sourceMappingURL=main.3dcb7117.chunk.js.map