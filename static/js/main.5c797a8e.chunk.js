(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{12:function(e,t,n){e.exports={links:"Header_links__3Kimz",link:"Header_link__te_Jh",active:"Header_active__19JK0",burger:"Header_burger__pfb0Z"}},13:function(e,t,n){e.exports={message:"Message_message__fzFco",messageWrapper:"Message_messageWrapper__2nb8Z",avatar:"Message_avatar__2RXX9",text:"Message_text__3KLoW",name:"Message_name__3BxMt",messageText:"Message_messageText__f3Co-",time:"Message_time__vkRaR"}},20:function(e,t,n){e.exports={greeting:"Greeting_greeting__4Ifh4",greetingWrapper:"Greeting_greetingWrapper__1ysyw",error:"Greeting_error__2O-Q0",success:"Greeting_success__3sk8J"}},21:function(e,t,n){e.exports={input:"SuperInputText_input__3VexP",superInput:"SuperInputText_superInput__2CRBP",errorInput:"SuperInputText_errorInput__3yf-E",error:"SuperInputText_error__2Irmb"}},24:function(e,t,n){e.exports={button:"SuperButton_button__3tBmM",default:"SuperButton_default__1gCrQ",red:"SuperButton_red__3UcXR"}},26:function(e,t,n){e.exports={dark:"HW12_dark__-cYKg","dark-text":"HW12_dark-text__263l6",red:"HW12_red__2Mwht","red-text":"HW12_red-text__IAG88",some:"HW12_some__15zRj","some-text":"HW12_some-text__2KBbj",france:"HW12_france__1_fZt","france-text":"HW12_france-text__q1PvA"}},27:function(e,t,n){e.exports={blue:"HW4_blue__3JqRg",column:"HW4_column__3Vj5C",testSpanError:"HW4_testSpanError__Vx7Qp"}},28:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1vps-",spanClassName:"SuperCheckbox_spanClassName__35lsQ"}},41:function(e,t,n){e.exports={App:"App_App__1yuVT"}},42:function(e,t,n){e.exports={range:"SuperRange_range__c-_q1"}},44:function(e,t,n){e.exports={spanClassName:"spanClassName_spanClassName__jNVZF"}},54:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),s=n.n(r),i=n(14),o=(n(54),n(41)),j=n.n(o),l=n(16),u=n(12),b=n.n(u),d=n(4),O=n(0);var h=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"404"}),Object(O.jsx)("div",{children:"Page not found!"}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},x=n(3),p=n(5),m=n(24),v=n.n(m),f=function(e){var t=e.red,n=e.className,c=Object(p.a)(e,["red","className"]),a="".concat(v.a.button," ").concat(t?v.a.red:v.a.default," ").concat(n);return Object(O.jsx)("button",Object(x.a)({className:a},c))},g={isLoading:!1},_=function(e){return{type:"SET-LOADING",payload:e}};var C=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.loading.isLoading}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 10",t?Object(O.jsx)("div",{children:"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."}):Object(O.jsx)("div",{children:Object(O.jsx)(f,{onClick:function(){e(_(!0)),setTimeout((function(){e(_(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},k=n(2),N=n(42),y=n.n(N),S=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,a=e.value,r=Object(p.a)(e,["type","onChange","onChangeRange","className","value"]),s="".concat(y.a.range," ").concat(c||"");return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("input",Object(x.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s,value:a},r))})},w=n(88),T=function(e){var t=e.onChangeRange,n=e.value;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{width:"300px"},children:Object(O.jsx)(w.a,{value:n,onChange:function(e,n){t&&t(n)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"})})})};var E=function(){var e=Object(c.useState)(0),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(100),s=Object(k.a)(r,2),i=s[0],o=s[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 11",Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:n}),Object(O.jsx)(S,{value:n,onChangeRange:a})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:n}),Object(O.jsx)(T,{value:[n,i],onChangeRange:function(e){a(e[0]),o(e[1])}}),Object(O.jsx)("span",{children:i})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},W=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=Object(p.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(O.jsx)("select",Object(x.a)(Object(x.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},a),{},{children:r}))},H=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){a&&a(e),r&&r(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(x.a)({type:"radio",name:t,value:e,checked:c===e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:o})},I=["x","y","z"];var A=function(){var e=Object(c.useState)(I[1]),t=Object(k.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(W,{options:I,value:n,onChangeOption:a})}),Object(O.jsx)("div",{children:Object(O.jsx)(H,{name:"radio",options:I,value:n,onChangeOption:a})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},F=n(19),M=function(e,t){switch(t.type){case"sort":var n=Object(F.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return Object(F.a)(e).filter((function(e){return e.age>=t.payload}));default:return e}},R=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var B=function(){var e=Object(c.useState)(R),t=Object(k.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"150px"},children:[Object(O.jsxs)("span",{children:[e.name," "]}),Object(O.jsx)("span",{children:e.age})]},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 8",r,Object(O.jsx)("div",{children:Object(O.jsx)(f,{onClick:function(){return a(M(R,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(O.jsx)("div",{children:Object(O.jsx)(f,{onClick:function(){return a(M(R,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(O.jsx)("div",{children:Object(O.jsx)(f,{onClick:function(){return a(M(R,{type:"check",payload:18}))},children:"check"})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var L=function(){var e=Object(c.useState)(0),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(k.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(!1),l=Object(k.a)(j,2),u=l[0],b=l[1],d=function(){clearInterval(n)},h=null===i||void 0===i?void 0:i.toLocaleTimeString(),x=null===i||void 0===i?void 0:i.toLocaleDateString();return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u&&Object(O.jsx)("div",{children:x}),Object(O.jsx)(f,{onClick:function(){d();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(O.jsx)(f,{onClick:d,children:"stop"})]})};var P=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 9",Object(O.jsx)(L,{}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var D=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(A,{}),Object(O.jsx)(B,{}),Object(O.jsx)(P,{}),Object(O.jsx)(C,{}),Object(O.jsx)(E,{})]})},J=n(26),G=n.n(J),K={theme:"some"},U=["dark","red","some","france"];var q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.theme.theme}));return Object(O.jsxs)("div",{className:G.a[t],children:[Object(O.jsx)("hr",{}),Object(O.jsx)("span",{className:G.a[t+"-text"],children:"homeworks 12"}),Object(O.jsx)(H,{name:"radio",options:U,value:t,onChangeOption:function(t){e({type:"SET-THEME",payload:t})}}),Object(O.jsx)("hr",{})]})},V=n(43),X=n.n(V),Z=function(e){return X.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e})},z=function(){var e=Object(c.useState)(!1),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(k.a)(r,2),i=s[0],o=s[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return a(!n)}}),Object(O.jsx)("button",{onClick:function(){Z(n).then((function(e){console.log(e.data),o(e.data.errorText)})).catch((function(e){console.log(Object(x.a)({},e)),console.log(e.response?e.response.data.errorText:e.message),o(e.response.data.errorText)}))},children:"SEND"}),Object(O.jsx)("div",{children:i})]})};function Q(){return Object(O.jsx)("div",{children:Object(O.jsx)(z,{})})}var Y=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(q,{}),Object(O.jsx)(Q,{})]})},$=n(13),ee=n.n($);var te=function(e){return Object(O.jsx)("div",{className:ee.a.message,children:Object(O.jsxs)("div",{className:ee.a.messageWrapper,children:[Object(O.jsx)("div",{className:ee.a.avatar,children:Object(O.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(O.jsxs)("div",{className:ee.a.text,children:[Object(O.jsx)("span",{className:ee.a.name,children:e.name}),Object(O.jsxs)("div",{className:ee.a.messageText,children:[Object(O.jsx)("div",{className:ee.a.ug}),e.message]}),Object(O.jsx)("span",{className:ee.a.time,children:e.time})]})]})})},ne={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Artem",message:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b? \u0435\u0441\u043b\u0438 \u043d\u0435\u0442, \u0442\u043e \u043d\u0430\u0436\u043c\u0438. \u0417\u0434\u0435\u0441\u044c\u043e\u0447\u0435\u043d\u044c\u0434\u043b\u0438\u043d\u043d\u043e\u0435\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435\u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f\u043b\u0438\u0431\u043e\u0443\u0434\u043b\u0438\u043d\u043d\u044f\u0435\u0442\u0431\u043b\u043e\u043a. \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u0412\u0441\u0435 \u043f\u043e\u043a\u0430 \u0438 \u0441\u043b\u0430\u0434\u043a\u0438\u0445 \u0441\u043d\u043e\u0432.",time:(new Date).toLocaleTimeString()};var ce=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1",Object(O.jsx)(te,{avatar:ne.avatar,name:ne.name,message:ne.message,time:ne.time}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ae=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{marginRight:10},children:e.affair.name}),Object(O.jsx)("span",{style:{marginRight:10},children:e.affair.priority}),Object(O.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var re=function(e){var t=e.data.map((function(t){return Object(O.jsx)(ae,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{children:[t,Object(O.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},se=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var ie=function(){var e=Object(c.useState)(se),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(k.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(re,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},oe=n(20),je=n.n(oe),le=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s=a?je.a.error:je.a.success;return Object(O.jsxs)("div",{className:je.a.greeting,children:[Object(O.jsxs)("div",{className:je.a.greetingWrapper,children:[Object(O.jsx)("input",{value:t,onChange:n,className:s}),Object(O.jsx)("button",{onClick:c,children:"add"}),Object(O.jsx)("span",{children:r})]}),Object(O.jsx)("span",{children:a})]})},ue=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(k.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),j=Object(k.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(O.jsx)(le,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t.length<=0?(i(t),u("name is required")):(i(t),u(""))},addUser:function(){s.length>0&&(alert("Hello ".concat(s,"!")),n(s),i(""),u(""))},error:l,totalUsers:b})},be=n(89);var de=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(ue,{users:n,addUserCallback:function(e){var t={_id:Object(be.a)(),name:e};a([].concat(Object(F.a)(n),[t]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},Oe=n(21),he=n.n(Oe),xe=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(he.a.error," ").concat(i||""),l="".concat(he.a.input," ").concat(r?he.a.errorInput:he.a.superInput," ").concat(s);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(x.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:l},o)),r&&Object(O.jsx)("span",{className:j,children:r})]})},pe=n(27),me=n.n(pe),ve=n(28),fe=n.n(ve),ge=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(fe.a.checkbox," ").concat(c||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(x.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(O.jsx)("span",{className:fe.a.spanClassName,children:a})]})};var _e=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(k.a)(i,2),j=o[0],l=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:me.a.column,children:[Object(O.jsx)(xe,{value:n,onChangeText:a,onEnter:s,error:r}),Object(O.jsx)(xe,{className:me.a.blue}),Object(O.jsx)(f,{children:"default"}),Object(O.jsx)(f,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(f,{disabled:!0,children:"disabled"}),Object(O.jsx)(ge,{checked:j,onChangeChecked:l,children:"some text "}),Object(O.jsx)(ge,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},Ce=n(44),ke=n.n(Ce),Ne=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(k.a)(s,2),o=i[0],j=i[1],l=a||{},u=l.children,b=l.onDoubleClick,d=l.className,h=Object(p.a)(l,["children","onDoubleClick","className"]),m="".concat(ke.a.spanClassName," ").concat(d);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(xe,Object(x.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){n&&n()}},r)):Object(O.jsx)("span",Object(x.a)(Object(x.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:m},h),{},{children:u||r.value}))})};function ye(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Se(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}ye("test",{x:"A",y:1});Se("test",{x:"",y:0});var we=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(Ne,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(f,{onClick:function(){ye("editable-span-value",n)},children:"save"}),Object(O.jsx)(f,{onClick:function(){a(Se("editable-span-value",n))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var Te=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(ce,{}),Object(O.jsx)(ie,{}),Object(O.jsx)(de,{}),Object(O.jsx)(_e,{}),Object(O.jsx)(we,{})]})},Ee="/pre-junior",We="/junior",He="/junior-plus";var Ie=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(d.a,{to:Ee})}}),Object(O.jsx)(d.b,{path:Ee,render:function(){return Object(O.jsx)(Te,{})}}),Object(O.jsx)(d.b,{path:We,render:function(){return Object(O.jsx)(D,{})}}),Object(O.jsx)(d.b,{path:He,render:function(){return Object(O.jsx)(Y,{})}}),"// add routes",Object(O.jsx)(d.b,{render:function(){return Object(O.jsx)(h,{})}})]})})};var Ae=function(){return Object(O.jsxs)("div",{className:b.a.links,children:[Object(O.jsx)(l.b,{className:b.a.link,activeClassName:b.a.active,to:Ee,children:"pre junior"}),Object(O.jsx)(l.b,{className:b.a.link,activeClassName:b.a.active,to:We,children:"junior"}),Object(O.jsx)(l.b,{className:b.a.link,activeClassName:b.a.active,to:He,children:"junior+"}),Object(O.jsx)("div",{className:b.a.burger})]})};var Fe=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(Ae,{}),Object(O.jsx)(Ie,{})]})})};var Me=function(){return Object(O.jsxs)("div",{className:j.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(Fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=n(31),Be=Object(Re.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOADING":return Object(x.a)(Object(x.a)({},e),{},{isLoading:t.payload});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-THEME":return Object(x.a)(Object(x.a)({},e),{},{theme:t.payload});default:return e}}}),Le=Object(Re.b)(Be),Pe=Le;window.store=Le,s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(i.a,{store:Pe,children:Object(O.jsx)(Me,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.5c797a8e.chunk.js.map