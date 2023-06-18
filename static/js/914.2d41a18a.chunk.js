"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[914],{3309:function(n,e,t){t.d(e,{Bc:function(){return m},__:function(){return f},gN:function(){return x},l0:function(){return p},nF:function(){return b},zx:function(){return h}});var r,i,o,a,s,d,c=t(168),u=t(6444),l=t(5705),p=(0,u.ZP)(l.l0)(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  padding-top: 80px;\n"]))),m=(0,u.ZP)(l.Bc)(i||(i=(0,c.Z)(["\n  color: red;\n"]))),x=(0,u.ZP)(l.gN)(o||(o=(0,c.Z)(["\n  @media screen and (min-width: 320px) {\n    min-width: 220px;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n  }\n\n  border-right: none;\n  border-bottom: 2px solid rgb(33, 150, 243);\n  border-left: none;\n  border-top: none;\n\n  outline: none;\n\n  background-color: transparent;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: white;\n\n  &:focus {\n    border-bottom: 2px solid rgba(33, 243, 215, 0.6);\n    border-left: none;\n    border-top: none;\n\n    outline: none;\n  }\n"]))),f=u.ZP.label(a||(a=(0,c.Z)(["\n  @media screen and (min-width: 320px) {\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 300px;\n  color: white;\n"]))),h=u.ZP.button(s||(s=(0,c.Z)(["\n  @media screen and (min-width: 320px) {\n    padding: 5px;\n\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 5px 10px;\n\n    font-size: 16px;\n  }\n\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: #2196f3;\n  color: #ffffff;\n\n  border-radius: 4px;\n  border: transparent;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #188ce8;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),b=u.ZP.div(d||(d=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"])))},7687:function(n,e,t){t.d(e,{I:function(){return d},_:function(){return s}});var r,i,o=t(168),a=t(6444),s=a.ZP.label(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n"]))),d=a.ZP.input(i||(i=(0,o.Z)(["\n  @media screen and (min-width: 320px) {\n    min-width: 225px;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n  }\n\n  margin-bottom: 15px;\n\n  border-right: none;\n  border-bottom: 2px solid rgb(33, 150, 243);\n  border-left: none;\n  border-top: none;\n\n  outline: none;\n\n  background-color: transparent;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: white;\n\n  &:focus {\n    border-bottom: 2px solid rgba(33, 243, 215, 0.6);\n    border-left: none;\n    border-top: none;\n\n    outline: none;\n  }\n"])))},2036:function(n,e,t){t.d(e,{D:function(){return s},l:function(){return d}});var r,i,o=t(168),a=t(6444),s=a.ZP.form(r||(r=(0,o.Z)(["\n  @media screen and (min-width: 320px) {\n    padding-top: 80px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-top: 130px;\n  }\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),d=a.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])))},8914:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,s,d=t(9439),c=t(1413),u=t(5705),l=t(6727),p=t(3309),m=t(9434),x=t(6916),f=function(n){return n.contacts.contacts},h=function(n){return n.filter},b=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},j=(0,x.P1)([f,h],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=t(3634),w=t(5880),Z=t(184),y=l.Ry().shape({name:l.Z_().required("Must be required"),number:l.Z_().required("Must be required")}),z=function(){var n=(0,m.I0)(),e=(0,m.v9)(f),t=function(t){var r=t.name,i=t.number;if(function(n){var t=n.name,r=n.number,i=t.toLowerCase().trim(),o=r.trim(),a=e.find((function(n){return n.name.toLowerCase()===i||n.number===o}));return Boolean(a)}({name:r,number:i}))return alert("".concat(r," or ").concat(i," is already in contacts."));n((0,v.uK)({name:r,number:i}))};return(0,Z.jsx)(u.J9,{initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(n,e){var r=e.resetForm;t((0,c.Z)({},n)),r()},children:(0,Z.jsxs)(p.l0,{children:[(0,Z.jsxs)(p.__,{children:[(0,Z.jsxs)(p.nF,{children:[(0,Z.jsx)(w.toF,{size:"18"}),"Name"]}),(0,Z.jsx)(p.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"off",required:!0})]}),(0,Z.jsx)(p.Bc,{name:"name",component:"div"}),(0,Z.jsxs)(p.__,{children:[(0,Z.jsxs)(p.nF,{children:[(0,Z.jsx)(w.qo$,{size:"18"}),"Number"]}),(0,Z.jsx)(p.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"off",required:!0})]}),(0,Z.jsx)(p.Bc,{name:"number",component:"div"}),(0,Z.jsxs)(p.zx,{type:"submit",children:["Add contact",(0,Z.jsx)(w.wZc,{size:"18",style:{fill:"white",verticalAlign:"middle",marginLeft:"5px"}})]})]})})},k=t(297),C=t(2791),P=function(n){var e=n.isOpenModal,t=(0,m.I0)(),r=(0,m.v9)(j),i=(0,m.v9)(b);(0,C.useEffect)((function(){t((0,v.yF)())}),[t]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("ul",{children:r.map((function(n){var r=n.id,o=n.name,a=n.number;return(0,Z.jsxs)(k.HC,{children:[(0,Z.jsxs)(k.r8,{children:[(0,Z.jsxs)(k.VG,{children:[(0,Z.jsx)(w.toF,{size:"18"}),o]}),(0,Z.jsxs)(k.Mr,{children:[(0,Z.jsx)(w.qo$,{size:"18"}),a]})]}),(0,Z.jsxs)(k.P9,{children:[(0,Z.jsx)(k.zx,{disabled:i,type:"button",onClick:function(){return e(o,a,r)},children:(0,Z.jsx)(w.HSD,{size:"18"})}),(0,Z.jsx)(k.zx,{disabled:i,type:"button",onClick:function(){return n=r,void t((0,v.GK)(n));var n},children:(0,Z.jsx)(w.Fuw,{size:"18"})})]})]},r)}))})})},_=t(7687),F=t(2036),q=t(168),I=t(6444),N=I.ZP.div(r||(r=(0,q.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.4);\n\n  padding: 20px;\n"]))),S=I.ZP.div(i||(i=(0,q.Z)(["\n  @media screen and (min-width: 320px) {\n    padding: 30px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 40px;\n  }\n\n  position: relative;\n\n  border-radius: 10px;\n\n  background-image: linear-gradient(\n      to right,\n      rgba(47, 48, 58, 0.4),\n      rgba(47, 48, 58, 0.4)\n    ),\n    url(https://st.depositphotos.com/3322093/4547/i/950/depositphotos_45475147-stock-photo-yellow-pages-phone-book.jpg);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n\n  max-width: 100%;\n"]))),L=I.ZP.form(o||(o=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),M=I.ZP.label(a||(a=(0,q.Z)(["\n  @media screen and (min-width: 320px) {\n    font-size: 14px;\n\n    min-width: 205px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n\n    min-width: 300px;\n  }\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  color: white;\n"]))),A=I.ZP.button(s||(s=(0,q.Z)(["\n  cursor: pointer;\n\n  margin: 0;\n\n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  color: white;\n  background-color: transparent;\n\n  border: none;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    color: #188ce8;\n  }\n"]))),E=function(n){var e=n.contactId,t=n.name,r=n.number,i=n.isCloseModal,o=(0,m.I0)(),a=(0,C.useState)(t),s=(0,d.Z)(a,2),c=s[0],u=s[1],l=(0,C.useState)(r),p=(0,d.Z)(l,2),x=p[0],f=p[1],h=function(n){var e=n.currentTarget,t=e.name,r=e.value;"number"===t?f(r):u(r)};(0,C.useEffect)((function(){var n=function(n){"Escape"===n.key&&i()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[i]);return(0,Z.jsx)(N,{onClick:function(n){n.currentTarget===n.target&&i()},children:(0,Z.jsx)(S,{children:(0,Z.jsxs)(L,{onSubmit:function(n){n.preventDefault(),o((0,v.mP)({contactId:e,userName:c,userNumber:x})),i()},children:[(0,Z.jsxs)(M,{children:[(0,Z.jsxs)(F.l,{children:[(0,Z.jsx)(w.toF,{size:"18"}),"Name"]}),(0,Z.jsx)(_.I,{type:"text",name:"name",placeholder:t,value:c,onChange:h,title:"Field can't be empty",autoComplete:"off",required:!0})]}),(0,Z.jsxs)(M,{children:[(0,Z.jsxs)(F.l,{children:[(0,Z.jsx)(w.qo$,{size:"18"}),"Number"]}),(0,Z.jsx)(_.I,{type:"tel",name:"number",placeholder:r,value:x,onChange:h,title:"Field can't be empty",autoComplete:"off",required:!0})]}),(0,Z.jsx)(A,{type:"button",onClick:i,children:(0,Z.jsx)(w.dc5,{size:"18"})}),(0,Z.jsx)(k.zx,{type:"submit",children:"Edit"})]})})})},B=t(4808),$=function(){var n=(0,m.I0)(),e=(0,m.v9)(h);return(0,Z.jsxs)(_._,{children:[(0,Z.jsx)(k.xv,{children:"Find contacts by name"}),(0,Z.jsx)(_.I,{type:"text",value:e,onChange:function(e){var t=e.target.value.trim();n((0,B.T)(t))}})]})},D=t(966),T=t(4270),G=function(){var n=(0,m.I0)(),e=(0,m.v9)(b),t=(0,m.v9)(g),r=(0,m.v9)(f),i=(0,m.v9)(j),o=(0,C.useState)(""),a=(0,d.Z)(o,2),s=a[0],c=a[1],u=(0,C.useState)(""),l=(0,d.Z)(u,2),p=l[0],x=l[1],h=(0,C.useState)(""),w=(0,d.Z)(h,2),y=w[0],k=w[1],_=(0,C.useState)(!1),F=(0,d.Z)(_,2),q=F[0],I=F[1];(0,C.useEffect)((function(){n((0,v.yF)())}),[n]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(T.q,{children:"Contacts"}),(0,Z.jsx)(z,{}),e&&(0,Z.jsx)(D.a,{}),0!==r.length&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)($,{}),0!==i.length&&(0,Z.jsx)(P,{isOpenModal:function(n,e,t){I(!0),c(n),x(e),k(t)}})]}),t&&(0,Z.jsx)("b",{style:{color:"red"},children:t}),q&&(0,Z.jsx)(E,{name:s,number:p,contactId:y,isCloseModal:function(){I(!1)}})]})}}}]);
//# sourceMappingURL=914.2d41a18a.chunk.js.map