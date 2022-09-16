"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[959],{1959:function(t,n,e){e.r(n),e.d(n,{ThemeContext:function(){return $},default:function(){return q}});var o,i,s,r,a,h,l=e(885),c=e(2791),u=e(4942),d=e(1413),p=e(168),f=e(6031),b=f.ZP.form(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  font-size: 22px;\n  width: 40%;\n"]))),m=f.ZP.input(i||(i=(0,p.Z)(["\n  margin-bottom: 15px;\n  margin-top: 15px;\n  border: transparent;\n  background-color: transparent;\n  border-bottom: 1px solid white;\n  outline: none;\n  color: white;\n  height: 20px;\n  font-family: inherit;\n  font-size: 18px;\n\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.56);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,\n      0 0 60px #008296;\n  }\n"]))),x=f.ZP.button(s||(s=(0,p.Z)(["\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: ",";\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),(function(t){return t.disabled?"#7c7a7a":" #0f1111"}),(function(t){return t.disabled?"#afaaaa":"white"}),(function(t){return t.disabled?"#afaaaa":"#d5d9d9"}),(function(t){return t.disabled?"none":"rgba(213, 217, 217, 0.5) 0 2px 5px 0"}),(function(t){return t.disabled?"#7c7a7a":"  white"}),(function(t){return t.disabled?"#afaaaa":"#008296"}),(function(t){return t.disabled?"none":"0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296"})),g=e(184);function v(t){var n=t.onData,e={name:"",number:""},o=(0,c.useState)((0,d.Z)({},e)),i=(0,l.Z)(o,2),s=i[0],r=i[1],a=s.name,h=s.number,p=function(t){var n=t.target,e=n.name,o=n.value;r((function(t){return(0,d.Z)((0,d.Z)({},t),{},(0,u.Z)({},e,o))}))};return(0,g.jsxs)(b,{onSubmit:function(t){t.preventDefault(),n((0,d.Z)({},s)),r((0,d.Z)({},e))},children:[(0,g.jsxs)("label",{children:["Name",(0,g.jsx)(m,{type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name...",onChange:p})]}),(0,g.jsxs)("label",{children:["Phone number",(0,g.jsx)(m,{type:"tel",name:"number",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number...",onChange:p})]}),(0,g.jsx)(x,{type:"submit",disabled:!a||!h,children:"Add contact"})]})}var y,w=f.ZP.ul(r||(r=(0,p.Z)(["\n  padding-inline-start: 0;\n  margin: 0;\n  margin-top: 30px;\n  width: 400px;\n"]))),k=f.ZP.li(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n\n  & > span {\n    width: 50%;\n    font-size: 22px;\n  }\n"]))),j=f.ZP.button(h||(h=(0,p.Z)(["\n  /* margin-left: 20px; */\n"]))),C=function(t){var n=t.contacts,e=t.onDeleteContact;return(0,g.jsx)(w,{children:n.map((function(t){var n=t.id,o=t.name,i=t.number;return(0,g.jsxs)(k,{children:[(0,g.jsxs)("span",{children:["- ",o,": "]}),(0,g.jsx)("span",{children:i}),(0,g.jsx)(j,{type:"button",onClick:function(){return e(n)},children:"Delete"})]},n)}))})},Z=f.ZP.input(y||(y=(0,p.Z)(["\n  margin-left: 15px;\n  margin-right: 10px;\n  border: transparent;\n  background-color: transparent;\n  border-bottom: 1px solid white;\n  outline: none;\n  color: white;\n  height: 20px;\n  font-family: inherit;\n  font-size: 18px;\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.56);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,\n      0 0 60px #008296;\n  }\n"]))),M=function(t){var n=t.value,e=t.onChangeFilter,o=t.theme;return(0,g.jsxs)("label",{style:{fontSize:"22px"},children:["Search contacts:",(0,g.jsx)(Z,{type:"text",value:n,onChange:e,placeholder:"Enter contact...",theme:o})]})};function S(){return S=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},S.apply(this,arguments)}var D=c.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},c.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),T=c.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},c.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function E(t){if(7===t.length)return t;for(var n="#",e=1;e<4;e+=1)n+=t[e]+t[e];return n}function z(t,n,e,o,i){return function(t,n,e,o,i){var s=(t-e)/(n-e);if(0===s)return o;if(1===s)return i;for(var r="#",a=1;a<6;a+=2){var h=parseInt(o.substr(a,2),16),l=parseInt(i.substr(a,2),16),c=Math.round((1-s)*h+s*l).toString(16);1===c.length&&(c="0"+c),r+=c}return r}(t,n,e,E(o),E(i))}var L,P=function(t){function n(n){t.call(this,n);var e=n.height,o=n.width,i=n.checked;this.t=n.handleDiameter||e-2,this.i=Math.max(o-e,o-(e+this.t)/2),this.o=Math.max(0,(e-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n,n.prototype.componentDidMount=function(){this.W=!0},n.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},n.prototype.componentWillUnmount=function(){this.W=!1},n.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},n.prototype.L=function(t){var n=this.state,e=n.R,o=n.h,i=(this.props.checked?this.i:this.o)+t-e;n.N||t===e||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,i));s!==o&&this.setState({h:s})},n.prototype.U=function(t){var n=this.state,e=n.h,o=n.N,i=n.B,s=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-i;(!o||a<250||s&&e<=r||!s&&e>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},n.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},n.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},n.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},n.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},n.prototype.m=function(t){this.L(t.touches[0].clientX)},n.prototype.M=function(t){t.preventDefault(),this.U(t)},n.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},n.prototype.C=function(){this.u=Date.now()},n.prototype.D=function(){this.setState({j:!0})},n.prototype.O=function(){this.setState({j:!1})},n.prototype.S=function(t){this.H=t},n.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},n.prototype.A=function(t){var n=this.props;(0,n.onChange)(!n.checked,t,n.id)},n.prototype.render=function(){var t=this.props,n=t.checked,e=t.disabled,o=t.className,i=t.offColor,s=t.onColor,r=t.offHandleColor,a=t.onHandleColor,h=t.checkedIcon,l=t.uncheckedIcon,u=t.checkedHandleIcon,d=t.uncheckedHandleIcon,p=t.boxShadow,f=t.activeBoxShadow,b=t.height,m=t.width,x=t.borderRadius,g=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===n.indexOf(o)&&(e[o]=t[o]);return e}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),v=this.state,y=v.h,w=v.N,k=v.j,j={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:b,width:m,margin:Math.max(0,(this.t-b)/2),position:"relative",background:z(y,this.i,this.o,i,s),borderRadius:"number"==typeof x?x:b/2,cursor:e?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},Z={height:b,width:Math.min(1.5*b,m-(this.t+b)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},M={height:b,width:Math.min(1.5*b,m-(this.t+b)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:z(y,this.i,this.o,r,a),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"number"==typeof x?x-1:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:k?f:p,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},T={height:this.t,width:this.t,opacity:Math.max(2*(1-(y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},E={height:this.t,width:this.t,opacity:Math.max(2*((y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return c.createElement("div",{className:o,style:j},c.createElement("div",{className:"react-switch-bg",style:C,onClick:e?null:this.T,onMouseDown:function(t){return t.preventDefault()}},h&&c.createElement("div",{style:Z},h),l&&c.createElement("div",{style:M},l)),c.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.p,onTouchStart:e?null:this.k,onTouchMove:e?null:this.m,onTouchEnd:e?null:this.M,onTouchCancel:e?null:this.O},d&&c.createElement("div",{style:T},d),u&&c.createElement("div",{style:E},u)),c.createElement("input",S({},{type:"checkbox",role:"switch","aria-checked":n,checked:n,disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},n}(c.Component);P.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:D,checkedIcon:T,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};var I,W,A=function(t){var n=t.theme,e=t.toggleTheme;return(0,g.jsxs)(H,{children:[(0,g.jsx)("label",{style:{marginRight:"10px"},children:"light"===n?"Light Mood":"Dark Mood"}),(0,g.jsx)(P,{onChange:e,checked:"dark"===n,onColor:"#007c7c"})]})},H=f.ZP.div(L||(L=(0,p.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 60px;\n"]))),O=e(4808),N=function(t){return t.filter},_=function(t){var n=t.contacts,e=t.filter;return e?n.items.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):n.items},R=e(9434),B=e(1921),U=e(5218),F=f.ZP.div(I||(I=(0,p.Z)(["\n  display: flex;\n  padding: 30px;\n  /* outline: 1px solid white; */\n  justify-content: space-around;\n  /* box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,\n    0 0 60px #008296, 0 0 80px #008296; */\n"]))),X=f.ZP.h3(W||(W=(0,p.Z)(["\n  margin-top: 50px;\n  font-size: 22px;\n"]))),$=(0,c.createContext)(null),q=function(){var t=(0,c.useState)("dark"),n=(0,l.Z)(t,2),e=n[0],o=n[1],i=function(){var t=(0,R.v9)(N),n=(0,R.I0)();return[t,function(t){var e=t.target;n((0,O.T)(e.value))}]}(),s=(0,l.Z)(i,2),r=s[0],a=s[1],h=function(){var t=(0,R.v9)(_),n=(0,R.I0)();return(0,c.useEffect)((function(){n((0,B.yF)())}),[n]),[t,function(e){t.find((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()}))?U.Am.error("".concat(e.name," is in your Contacts")):n((0,B.uK)(e))},function(t){n((0,B.zY)(t))}]}(),u=(0,l.Z)(h,3),d=u[0],p=u[1],f=u[2],b=function(){o((function(t){return"light"===t?"dark":"light"}))};return(0,g.jsx)($.Provider,{value:{theme:e,toggleTheme:b},children:(0,g.jsxs)(F,{id:e,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{children:"Phonebook"}),(0,g.jsx)(v,{onData:p})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(M,{value:r,onChangeFilter:a}),d.length>0?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(C,{contacts:d,onDeleteContact:f})}):(0,g.jsxs)(X,{children:["Phonebook is empty! ",(0,g.jsx)("br",{})," Add your contacts."]}),(0,g.jsx)(A,{theme:e,toggleTheme:b})]})]})})}}}]);
//# sourceMappingURL=959.8874ac86.chunk.js.map