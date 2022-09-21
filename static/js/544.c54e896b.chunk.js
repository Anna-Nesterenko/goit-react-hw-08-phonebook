"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[544],{3544:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(1413),n=t(5861),s=t(885),c=t(7757),i=t.n(c),d=t(2791),p=t(4569),o=t.n(p),h={weather_name:"WeatherApp_weather_name__fNndV",wrapper:"WeatherApp_wrapper__OSQmf",city_search:"WeatherApp_city_search__Hd-l+",city_name:"WeatherApp_city_name__mbInJ",date:"WeatherApp_date__ppxVU",icon_temp:"WeatherApp_icon_temp__Imz91",deg:"WeatherApp_deg__ToNVB",des_wind:"WeatherApp_des_wind__x8mY5",error_message:"WeatherApp_error_message__rPdNA"},u=t(184);var _,l,m=function(){var e=(0,d.useState)(),a=(0,s.Z)(e,2),t=a[0],c=a[1],p=(0,d.useState)({data:{},error:!1}),_=(0,s.Z)(p,2),l=_[0],m=_[1],x=function(){var e=(0,n.Z)(i().mark((function e(a){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==a.key){e.next=8;break}return a.preventDefault(),c(""),m((0,r.Z)({},l)),"https://api.openweathermap.org/data/2.5/weather","f00c38e0279b7bc85480c3fe775d518c",e.next=8,o().get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",appid:"f00c38e0279b7bc85480c3fe775d518c"}}).then((function(e){m({data:e.data,error:!1})})).catch((function(e){m((0,r.Z)((0,r.Z)({},l),{},{data:{},error:!0})),c(""),console.log("error",e.message)}));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:h.wrapper,children:[(0,u.jsxs)("h1",{className:h.weather_name,children:["Weather App ",(0,u.jsx)("span",{children:" \ud83c\udf24 "})]}),(0,u.jsx)("div",{className:h.search_bar,children:(0,u.jsx)("input",{autoFocus:!0,type:"text",className:h.city_search,placeholder:"Search City..",name:"query",value:t,onChange:function(e){return c(e.target.value)},onKeyPress:x})}),l.error&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("span",{className:h.error_message,children:(0,u.jsx)("span",{style:{fontSize:"26px"},children:" Sorry, City not found"})})}),l&&l.data&&l.data.main&&(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:h.city_name,children:(0,u.jsxs)("h2",{children:[l.data.name,", ",(0,u.jsx)("span",{children:l.data.sys.country})]})}),(0,u.jsx)("div",{className:h.date,children:(0,u.jsx)("span",{children:function(){var e=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],", ").concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","Nocvember","December"][e.getMonth()])}()})}),(0,u.jsxs)("div",{className:h.icon_temp,children:[(0,u.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(l.data.weather[0].icon,"@2x.png"),alt:l.data.weather[0].description}),Math.round(l.data.main.temp),(0,u.jsx)("span",{className:h.deg,children:"\xb0C"})]}),(0,u.jsxs)("div",{className:h.des_wind,children:[(0,u.jsx)("p",{children:l.data.weather[0].description.toUpperCase()}),(0,u.jsxs)("p",{children:["Wind Speed: ",l.data.wind.speed,"m/s"]})]})]})]})},x=t(168),y=t(6031),w=y.ZP.p(_||(_=(0,x.Z)(["\n  width: 400px;\n  font-size: 32px;\n  font-weight: 700;\n  margin-top: 30px;\n  text-align: center;\n"]))),f=y.ZP.div(l||(l=(0,x.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 40px;\n"]))),g=function(){return(0,u.jsxs)(f,{children:[(0,u.jsx)(m,{}),(0,u.jsx)(w,{children:"Hello, this is your PhoneBook. It is designed to help your brain not remember numbers, but write them down. Create your own unique account and get the opportunity to record your contacts."})]})}}}]);
//# sourceMappingURL=544.c54e896b.chunk.js.map