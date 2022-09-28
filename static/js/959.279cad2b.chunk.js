"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[959],{1959:function(t,n,e){e.r(n),e.d(n,{ThemeContext:function(){return K},default:function(){return J}});var i,o,s,r,a,h,l,c,d,u=e(885),p=e(2791),f=e(168),b=e(6031),m=b.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  padding: 30px;\n  margin-top: 30px;\n  align-items: baseline;\n  justify-content: space-evenly;\n"]))),x=b.ZP.h3(o||(o=(0,f.Z)(["\n  margin-top: 50px;\n  font-size: 22px;\n  text-align: center;\n"]))),g=b.ZP.div(s||(s=(0,f.Z)(["\n  padding: 15px;\n  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;\n  @media screen and (max-width: 800px) {\n    margin-left: 10px;\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"]))),v=e(4942),y=e(1413),w=b.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  font-size: 22px;\n  width: 40%;\n"]))),k=b.ZP.input(a||(a=(0,f.Z)(["\n  margin-bottom: 25px;\n  margin-top: 15px;\n  border: transparent;\n  background-color: transparent;\n  border-bottom: 1px solid white;\n  outline: none;\n  color: white;\n  height: 20px;\n  font-family: inherit;\n  font-size: 18px;\n\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.56);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,\n      0 0 60px #008296;\n  }\n"]))),j=b.ZP.button(h||(h=(0,f.Z)(["\n  margin-bottom: 7px;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: ",";\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),(function(t){return t.disabled?"#7c7a7a":" #0f1111"}),(function(t){return t.disabled?"#afaaaa":"white"}),(function(t){return t.disabled?"#afaaaa":"#d5d9d9"}),(function(t){return t.disabled?"none":"rgba(213, 217, 217, 0.5) 0 2px 5px 0"}),(function(t){return t.disabled?"#7c7a7a":"  white"}),(function(t){return t.disabled?"#afaaaa":"#008296"}),(function(t){return t.disabled?"none":"0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296"})),C=e(184);function Z(t){var n=t.onData,e={name:"",number:""},i=(0,p.useState)((0,y.Z)({},e)),o=(0,u.Z)(i,2),s=o[0],r=o[1],a=s.name,h=s.number,l=function(t){var n=t.target,e=n.name,i=n.value;r((function(t){return(0,y.Z)((0,y.Z)({},t),{},(0,v.Z)({},e,i))}))};return(0,C.jsxs)(w,{onSubmit:function(t){t.preventDefault(),n((0,y.Z)({},s)),r((0,y.Z)({},e))},children:[(0,C.jsxs)("label",{children:["Name",(0,C.jsx)(k,{type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name...",onChange:l})]}),(0,C.jsxs)("label",{children:["Phone number",(0,C.jsx)(k,{type:"tel",name:"number",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number...",onChange:l})]}),(0,C.jsx)(j,{type:"submit",disabled:!a||!h,children:"Add contact"})]})}var M,S=b.ZP.ul(l||(l=(0,f.Z)(["\n  padding-inline-start: 0;\n  margin: 0;\n  margin-top: 20px;\n  @media (min-width: 600px) {\n    margin-top: 30px;\n    width: 400px;\n  }\n"]))),D=b.ZP.li(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n\n  & > span {\n    width: 30%;\n    font-size: 16px;\n    @media (min-width: 600px) {\n      width: 50%;\n      font-size: 22px;\n    }\n  }\n"]))),T=b.ZP.button(d||(d=(0,f.Z)(["\n  /* margin-left: 20px; */\n"]))),E=function(t){var n=t.contacts,e=t.onDeleteContact;return(0,C.jsx)(S,{children:n.map((function(t){var n=t.id,i=t.name,o=t.number;return(0,C.jsxs)(D,{children:[(0,C.jsxs)("span",{children:["- ",i,": "]}),(0,C.jsx)("span",{children:o}),(0,C.jsx)(T,{type:"button",onClick:function(){return e(n)},children:"Delete"})]},n)}))})},z=b.ZP.input(M||(M=(0,f.Z)(["\n  margin-left: 15px;\n  margin-right: 10px;\n  border: transparent;\n  background-color: transparent;\n  border-bottom: 1px solid white;\n  outline: none;\n  color: white;\n  height: 20px;\n  font-family: inherit;\n  font-size: 18px;\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.56);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,\n      0 0 60px #008296;\n  }\n"]))),P=function(t){var n=t.value,e=t.onChangeFilter,i=t.theme;return(0,C.jsxs)("label",{style:{fontSize:"22px"},children:["Search contacts:",(0,C.jsx)(z,{type:"text",value:n,onChange:e,placeholder:"Enter contact...",theme:i})]})};function L(){return L=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},L.apply(this,arguments)}var I=p.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},p.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),W=p.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},p.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function A(t){if(7===t.length)return t;for(var n="#",e=1;e<4;e+=1)n+=t[e]+t[e];return n}function H(t,n,e,i,o){return function(t,n,e,i,o){var s=(t-e)/(n-e);if(0===s)return i;if(1===s)return o;for(var r="#",a=1;a<6;a+=2){var h=parseInt(i.substr(a,2),16),l=parseInt(o.substr(a,2),16),c=Math.round((1-s)*h+s*l).toString(16);1===c.length&&(c="0"+c),r+=c}return r}(t,n,e,A(i),A(o))}var O,N=function(t){function n(n){t.call(this,n);var e=n.height,i=n.width,o=n.checked;this.t=n.handleDiameter||e-2,this.i=Math.max(i-e,i-(e+this.t)/2),this.o=Math.max(0,(e-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n,n.prototype.componentDidMount=function(){this.W=!0},n.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},n.prototype.componentWillUnmount=function(){this.W=!1},n.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},n.prototype.L=function(t){var n=this.state,e=n.R,i=n.h,o=(this.props.checked?this.i:this.o)+t-e;n.N||t===e||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==i&&this.setState({h:s})},n.prototype.U=function(t){var n=this.state,e=n.h,i=n.N,o=n.B,s=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-o;(!i||a<250||s&&e<=r||!s&&e>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},n.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},n.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},n.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},n.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},n.prototype.m=function(t){this.L(t.touches[0].clientX)},n.prototype.M=function(t){t.preventDefault(),this.U(t)},n.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},n.prototype.C=function(){this.u=Date.now()},n.prototype.D=function(){this.setState({j:!0})},n.prototype.O=function(){this.setState({j:!1})},n.prototype.S=function(t){this.H=t},n.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},n.prototype.A=function(t){var n=this.props;(0,n.onChange)(!n.checked,t,n.id)},n.prototype.render=function(){var t=this.props,n=t.checked,e=t.disabled,i=t.className,o=t.offColor,s=t.onColor,r=t.offHandleColor,a=t.onHandleColor,h=t.checkedIcon,l=t.uncheckedIcon,c=t.checkedHandleIcon,d=t.uncheckedHandleIcon,u=t.boxShadow,f=t.activeBoxShadow,b=t.height,m=t.width,x=t.borderRadius,g=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===n.indexOf(i)&&(e[i]=t[i]);return e}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),v=this.state,y=v.h,w=v.N,k=v.j,j={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:b,width:m,margin:Math.max(0,(this.t-b)/2),position:"relative",background:H(y,this.i,this.o,o,s),borderRadius:"number"==typeof x?x:b/2,cursor:e?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},Z={height:b,width:Math.min(1.5*b,m-(this.t+b)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},M={height:b,width:Math.min(1.5*b,m-(this.t+b)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},S={height:this.t,width:this.t,background:H(y,this.i,this.o,r,a),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"number"==typeof x?x-1:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:k?f:u,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},D={height:this.t,width:this.t,opacity:Math.max(2*(1-(y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},T={height:this.t,width:this.t,opacity:Math.max(2*((y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return p.createElement("div",{className:i,style:j},p.createElement("div",{className:"react-switch-bg",style:C,onClick:e?null:this.T,onMouseDown:function(t){return t.preventDefault()}},h&&p.createElement("div",{style:Z},h),l&&p.createElement("div",{style:M},l)),p.createElement("div",{className:"react-switch-handle",style:S,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.p,onTouchStart:e?null:this.k,onTouchMove:e?null:this.m,onTouchEnd:e?null:this.M,onTouchCancel:e?null:this.O},d&&p.createElement("div",{style:D},d),c&&p.createElement("div",{style:T},c)),p.createElement("input",L({},{type:"checkbox",role:"switch","aria-checked":n,checked:n,disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},n}(p.Component);N.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:I,checkedIcon:W,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};var _=function(t){var n=t.theme,e=t.toggleTheme;return(0,C.jsxs)(R,{children:[(0,C.jsx)("label",{style:{marginRight:"10px"},children:"light"===n?"Light Mood":"Dark Mood"}),(0,C.jsx)(N,{onChange:e,checked:"dark"===n,onColor:"#007c7c"})]})},R=b.ZP.div(O||(O=(0,f.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 60px;\n"]))),B=e(4808),U=function(t){return t.filter},F=function(t){var n=t.contacts,e=t.filter;return e?n.items.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):n.items},X=e(9434),$=e(1921),q=e(5218),K=(0,p.createContext)(null),J=function(){var t=(0,p.useState)("dark"),n=(0,u.Z)(t,2),e=n[0],i=n[1],o=function(){var t=(0,X.v9)(U),n=(0,X.I0)();return[t,function(t){var e=t.target;n((0,B.T)(e.value))}]}(),s=(0,u.Z)(o,2),r=s[0],a=s[1],h=function(){var t=(0,X.v9)(F),n=(0,X.I0)();return(0,p.useEffect)((function(){n((0,$.yF)())}),[n]),[t,function(e){t.find((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()}))?q.Am.error("".concat(e.name," is in your Contacts")):n((0,$.uK)(e))},function(t){n((0,$.zY)(t))}]}(),l=(0,u.Z)(h,3),c=l[0],d=l[1],f=l[2],b=function(){i((function(t){return"light"===t?"dark":"light"}))};return(0,C.jsx)(K.Provider,{value:{theme:e,toggleTheme:b},children:(0,C.jsxs)(m,{id:e,children:[(0,C.jsxs)(g,{children:[(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(Z,{onData:d})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)("h2",{children:"Contacts"}),(0,C.jsx)(P,{value:r,onChangeFilter:a}),c.length>0?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(E,{contacts:c,onDeleteContact:f})}):(0,C.jsxs)(x,{children:["Phonebook is empty! ",(0,C.jsx)("br",{})," Add your contacts."]}),(0,C.jsx)(_,{theme:e,toggleTheme:b})]})]})})}}}]);
//# sourceMappingURL=959.279cad2b.chunk.js.map