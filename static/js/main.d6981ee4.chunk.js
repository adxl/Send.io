(this["webpackJsonpsend.io"]=this["webpackJsonpsend.io"]||[]).push([[0],{110:function(e,t){},115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),a=n(12),i=n.n(a),o=n(121),l=n(128),j=n(9),d=n(10),u=n(27),b=n.n(u),h=n(40),m=n(7),f=n(127),x=n(122);function O(e){var t=e.URL,n=Object(s.useState)(),r=Object(m.a)(n,2),a=r[0],i=r[1],l=Object(s.useRef)(),j=Object(s.useRef)(),d=function(){var e=Object(h.a)(b.a.mark((function e(n){var c,s,r,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={username:l.current.value,password:j.current.value},s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},e.next=5,fetch("".concat(t,"/login"),s);case 5:if(!(r=e.sent).ok){e.next=14;break}return e.next=9,r.text();case 9:a=e.sent,localStorage.setItem("send-io-usertoken",a),window.location.reload(),e.next=18;break;case 14:return e.next=16,r.text();case 16:o=e.sent,i(o);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{className:"d-flex align-items-center justify-content-center ",children:Object(c.jsxs)(f.a,{onSubmit:d,children:[Object(c.jsx)("h1",{className:"mb-3 text-center",children:"Login"}),Object(c.jsx)("p",{className:"mb-2 mt-2 text-center text-danger",children:a}),Object(c.jsx)(f.a.Group,{controlId:"formBasicEmail",className:"d-flex justify-content-center",children:Object(c.jsx)(f.a.Control,{autoComplete:"off",className:"bg-3 border-0",ref:l,type:"text",placeholder:"Username",required:!0})}),Object(c.jsx)(f.a.Group,{controlId:"formBasicPassword",children:Object(c.jsx)(f.a.Control,{className:"bg-3 border-0",ref:j,type:"password",placeholder:"Password",required:!0})}),Object(c.jsx)("hr",{}),Object(c.jsx)(x.a,{type:"submit",className:"w-100",children:"Login"})]})})})}function p(e){var t=e.URL,n=Object(s.useState)(!0),r=Object(m.a)(n,2),a=r[0],i=r[1],l=Object(s.useState)(),j=Object(m.a)(l,2),d=j[0],u=j[1],O=Object(s.useRef)(),p=Object(s.useRef)(),g=Object(s.useRef)(),v=function(){var e=Object(h.a)(b.a.mark((function e(n){var c,s,r,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={username:O.current.value,password:p.current.value},s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},e.next=5,fetch("".concat(t,"/register"),s);case 5:if(!(r=e.sent).ok){e.next=14;break}return e.next=9,r.text();case 9:a=e.sent,localStorage.setItem("send-io-usertoken",a),window.location.reload(),e.next=18;break;case 14:return e.next=16,r.text();case 16:i=e.sent,u(i);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{className:"d-flex align-items-center justify-content-center ",children:Object(c.jsxs)(f.a,{onSubmit:v,children:[Object(c.jsx)("h1",{className:"mb-3 text-center",children:"Register"}),Object(c.jsx)("p",{className:"mb-2 mt-2 text-center text-danger",children:d}),Object(c.jsx)(f.a.Group,{className:"d-flex justify-content-center",children:Object(c.jsx)(f.a.Control,{autoComplete:"off",className:"bg-3 border-0 mb-3",ref:O,type:"text",placeholder:"Username",required:!0})}),Object(c.jsx)(f.a.Group,{children:Object(c.jsx)(f.a.Control,{className:"bg-3 border-0",ref:p,type:"password",placeholder:"Password",required:!0})}),Object(c.jsx)(f.a.Group,{children:Object(c.jsx)(f.a.Control,{className:"bg-3 border-0",onChange:function(){p.current.value!==g.current.value?(u("Passwords don't match"),i(!1)):(u(""),i(!0))},ref:g,type:"password",placeholder:"Password confirmation",required:!0})}),Object(c.jsx)("hr",{}),a&&Object(c.jsx)(x.a,{type:"submit",variant:"success",className:"w-100",children:"Register"})]})})})}var g="https://send-io.herokuapp.com";function v(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.a,{fluid:!0,className:"d-flex flex-column justify-content-center align-items-center m-0 h-100 bg-4 p-0",children:[Object(c.jsxs)(o.a,{fluid:!0,className:"d-flex flex-column justify-content-center align-items-center m-0 h-100 p-15",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3 w-100 px-5",children:[Object(c.jsx)("h1",{className:"m-0",children:Object(c.jsxs)("a",{href:"https://github.com/adxl",className:"wt",children:[Object(c.jsx)("span",{className:"pr-3",children:Object(c.jsx)(j.a,{icon:d.d})}),"Send.io"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)(l.a,{className:"align-items-center",children:[Object(c.jsx)(l.a.Link,{className:"wt",children:"Home"}),Object(c.jsx)(l.a.Link,{target:"_blank",href:"https://github.com/adxl/Send.io",className:"wt",children:"Features"}),Object(c.jsx)(l.a.Link,{target:"_blank",href:"https://github.com/adxl/Send.io",className:"wt",children:"Source"}),Object(c.jsx)(l.a.Item,{className:"wt",children:"|"}),Object(c.jsx)(l.a.Link,{target:"_blank",href:"https://github.com/adxl",className:"wt",children:"About"})]})})]}),Object(c.jsxs)("div",{className:"mt-auto mb-5 text-center px-5",children:[Object(c.jsx)("h1",{className:"mb-1",children:"Welcome to Send.io"}),Object(c.jsx)("p",{className:"",children:"Sign in or create an account and start chatting with your friends"})]}),Object(c.jsxs)("div",{className:"d-flex w-100 align-items-center mb-auto px-5",children:[Object(c.jsx)(p,{URL:g}),Object(c.jsx)("h1",{children:Object(c.jsx)("u",{children:"OR"})}),Object(c.jsx)(O,{URL:g})]})]}),Object(c.jsxs)("small",{className:"w-100 py-2 bg-3 text-center",children:["\xa9 ",Object(c.jsx)("a",{className:"wt",href:"https://github.com/adxl",children:"Adel Senhadji"})," - 2020 "]})]})})}var N=r.a.createContext();function y(){return Object(s.useContext)(N)}function w(e){var t=e.children;return Object(c.jsx)(N.Provider,{value:function(e){var t=function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);var c=(16777215&t).toString(16).toUpperCase();return"00000".substring(0,6-c.length)+c}(e);return"https://eu.ui-avatars.com/api/?size=500&color=fff"+"&background=".concat(t,"&name=").concat(e.charAt(0))},children:t})}var S=n(125),k=n(67),C=n(123),I=n(69),A=n.n(I),P=r.a.createContext();function R(){return Object(s.useContext)(P)}function T(e){var t=e.children,n=Object(s.useState)((function(){return JSON.parse(localStorage.getItem("send-io-current-conversation"))||null})),r=Object(m.a)(n,2),a=r[0],i=r[1];return Object(c.jsx)(P.Provider,{value:{conversation:a,selectConversation:function(e){i(e);var t=JSON.stringify(e);localStorage.setItem("send-io-current-conversation",t)}},children:t})}var E=r.a.createContext();function F(e){var t=e.username,n=e.children,r=Object(s.useState)(),a=Object(m.a)(r,2),i=a[0],o=a[1],l=R().conversation;return Object(s.useEffect)((function(){if(l){var e=A()("https://send-io.herokuapp.com",{query:{id:l.id,username:t}});return o(e),function(){return e.close()}}return 0}),[l]),Object(c.jsx)(E.Provider,{value:i,children:n})}var q=n(129),z=n(124);function J(e){var t=e.username,n=Object(s.useState)([]),r=Object(m.a)(n,2),a=r[0],i=r[1],l=Object(s.useRef)(),u=Object(s.useRef)(),b=Object(s.useContext)(E),h=R().conversation,O=y(),p=function(){if(h){var e=h.friend;fetch("".concat("https://send-io.herokuapp.com","/conversations/").concat(e,"/messages"),{headers:{Authorization:localStorage.getItem("send-io-usertoken")}}).then((function(e){return e.json()})).then((function(e){i(e),u&&u.current.scrollIntoView({behavior:"auto"})})).catch((function(e){throw e}))}};return Object(s.useEffect)((function(){p()}),[h]),Object(s.useEffect)((function(){b&&b.on("receive-message",(function(){p()}))}),[b]),Object(c.jsx)(c.Fragment,{children:h?Object(c.jsxs)(o.a,{className:"framed border-top-0 d-flex flex-column p-0 h-100",children:[Object(c.jsxs)("div",{className:"framed-bottom d-flex align-items-center p-2 bg-1",children:[Object(c.jsx)("div",{className:"ring",children:Object(c.jsx)(C.a,{roundedCircle:!0,className:"no-tiny",src:O(h.friend),alt:"profile-pic"})}),Object(c.jsx)("div",{className:"pl-2",children:Object(c.jsx)("p",{children:h.friend})})]}),Object(c.jsxs)(o.a,{className:"pb-4 mt-auto scroll",children:[a.length>0?a.map((function(e){return e.sender===t?Object(c.jsx)("div",{className:"d-flex align-items-center justify-content-end mb-1 ",children:Object(c.jsx)(q.a,{placement:"right",delay:{show:50,hide:0},overlay:Object(c.jsx)(z.a,{id:"button-tooltip",children:e.createdAt.time}),children:Object(c.jsx)("p",{className:" text-white bubble bg-primary py-1 px-2 no-stretch",children:e.text})})},e.id):Object(c.jsx)("div",{className:"d-flex align-items-center justify-content-start mb-1",children:Object(c.jsx)(q.a,{placement:"left",delay:{show:50,hide:0},overlay:Object(c.jsx)(z.a,{id:"button-tooltip",children:e.createdAt.time}),children:Object(c.jsx)("p",{className:"bubble bg-secondary py-1 px-2 no-stretch",children:e.text})})},e.id)})):Object(c.jsx)("p",{className:"pb-5 text-center text-muted",children:"No messages yet, say something"}),Object(c.jsx)("div",{ref:u})]}),Object(c.jsx)(f.a,{onSubmit:function(e){e.preventDefault();var n={conversationId:h.id,sender:t,text:l.current.value};b.emit("send-message",n),l.current.value="",p()},className:"w-100 framed-top",children:Object(c.jsxs)(o.a,{fluid:!0,className:" d-flex align-items-end justify-content-between p-0 ",children:[Object(c.jsx)(f.a.Group,{className:"m-0 w-100",children:Object(c.jsx)(f.a.Control,{className:"w-100 square border-0 bg-3",required:!0,placeholder:"Type a message..",ref:l,type:"text"})}),Object(c.jsx)(x.a,{type:"submit",className:"square",children:Object(c.jsx)(j.a,{icon:d.d})})]})})]}):Object(c.jsx)(o.a,{className:" d-flex align-items-center justify-content-center p-0 h-100",children:Object(c.jsx)("p",{className:"w-100 p-4 text-center",children:"Select a conversation to start chatting"})})})}var L=n(126);function G(e){var t=e.hideModal,n=e.fetchConversations,r=Object(s.useState)(),a=Object(m.a)(r,2),i=a[0],o=a[1],l=Object(s.useRef)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L.a.Header,{closeButton:!0,id:"modal-header",className:"bg-1 border-0 wt",children:"Create a new conversation"}),Object(c.jsx)(L.a.Body,{className:"bg-2",children:Object(c.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),function(e){var c={friend:e},s={method:"POST",headers:{Authorization:localStorage.getItem("send-io-usertoken"),"Content-Type":"application/json"},body:JSON.stringify(c)};fetch("".concat("https://send-io.herokuapp.com","/conversations/new"),s).then((function(e){return e.ok&&(t(),n()),e.text()})).then((function(e){return o(e)})).catch((function(){o("An error occured, please try again")}))}(l.current.value)},children:[Object(c.jsx)(f.a.Group,{children:Object(c.jsx)(f.a.Control,{className:"bg-3 border-0",ref:l,placeholder:"Entre a friend name",type:"text",required:!0})}),Object(c.jsx)("p",{className:"mb-2 text-danger",children:i}),Object(c.jsx)(x.a,{type:"submit",className:"w-100",children:"Create conversation"})]})})]})}function M(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(!1),i=Object(m.a)(a,2),l=i[0],u=i[1],b=R().selectConversation,h=y(),f=function(){fetch("".concat("https://send-io.herokuapp.com","/conversations"),{headers:{Authorization:localStorage.getItem("send-io-usertoken")}}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){throw e}))};Object(s.useEffect)((function(){f()}),[]);var O=function(){u(!1)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.a,{className:"p-0",children:[Object(c.jsxs)(o.a,{className:"d-flex align-items-center justify-content-between pl-3",children:[Object(c.jsx)("h1",{className:"m-0",children:"Conversations"}),Object(c.jsx)(x.a,{type:"button",onClick:function(){u(!0)},className:"rounded-circle circle",children:Object(c.jsx)(j.a,{icon:d.b})})]}),Object(c.jsx)("div",{children:n.length>0?n.map((function(e){var t={id:e.id,friend:e.friend};return Object(c.jsx)(o.a,{className:"d-flex align-items-center justify-content-between",children:Object(c.jsx)("p",{className:" w-100",children:Object(c.jsx)(x.a,{variant:"white",className:" w-100 text-left",onClick:function(){return b(t)},children:Object(c.jsxs)("div",{className:"d-flex align-items-center ",children:[Object(c.jsx)("div",{className:"ring",children:Object(c.jsx)(C.a,{roundedCircle:!0,className:"no-tiny",src:h(e.friend),alt:"profile-pic"})}),Object(c.jsxs)("div",{className:"pl-2",children:[Object(c.jsx)("p",{className:"wt",children:e.friend}),Object(c.jsx)("small",{className:"text-muted",children:e.lastMessage.length<=30?e.lastMessage:"".concat(e.lastMessage.substring(0,30),"...")})]})]})})})},e.id)})):Object(c.jsx)("p",{className:"pl-5 mt-3",children:"No conversations"})}),Object(c.jsx)(L.a,{show:l,onHide:O,children:Object(c.jsx)(G,{hideModal:O,fetchConversations:f})})]})})}var U=r.a.createContext();function B(){return Object(s.useContext)(U)}function D(e){var t=e.children,n=Object(s.useState)([]),r=Object(m.a)(n,2),a=r[0],i=r[1],o=Object(s.useState)([]),l=Object(m.a)(o,2),j=l[0],d=l[1],u="https://send-io.herokuapp.com",b=function(){fetch("".concat(u,"/invites"),{headers:{Authorization:localStorage.getItem("send-io-usertoken")}}).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){throw e}))},h=function(){fetch("".concat(u,"/friends"),{headers:{Authorization:localStorage.getItem("send-io-usertoken")}}).then((function(e){return e.json()})).then((function(e){d(e)})).catch((function(e){throw e}))};return Object(s.useEffect)((function(){b(),h()}),[]),Object(c.jsx)(U.Provider,{value:{invites:a,fetchInvites:b,friends:j,fetchFriends:h},children:t})}function H(){var e=Object(s.useState)(),t=Object(m.a)(e,2),n=t[0],r=t[1],a=B(),i=a.friends,l=a.fetchFriends,u=y(),b=function(e){r(e)};return Object(c.jsx)(c.Fragment,{children:i.length>0&&Object(c.jsxs)(o.a,{className:"scroll",children:[Object(c.jsx)("h1",{children:"Friends"}),i.map((function(e){return Object(c.jsx)(o.a,{className:"d-flex align-items-center justify-content-between  pb-2",children:Object(c.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-100",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)("div",{className:"ring",children:Object(c.jsx)(C.a,{roundedCircle:!0,className:"no-tiny",src:u(e),alt:"profile-pic"})}),Object(c.jsx)("p",{className:"pl-2",children:e})]}),Object(c.jsx)("div",{onMouseEnter:function(){return b(e)},onMouseLeave:function(){return b(!1)},children:n===e?Object(c.jsx)(x.a,{className:"rounded-circle circle",variant:"danger",type:"button",onClick:function(){return function(e){var t={method:"POST",headers:{Authorization:localStorage.getItem("send-io-usertoken"),"Content-Type":"application/json"},body:JSON.stringify({friend:e})};fetch("".concat("https://send-io.herokuapp.com","/friends/unfriend"),t).then((function(e){if(!e.ok)throw new Error("An error occured");l()})).catch((function(e){throw e}))}(e)},children:Object(c.jsx)(j.a,{icon:d.h})}):Object(c.jsx)(x.a,{className:"wt",variant:"transparent",type:"button",children:Object(c.jsx)(j.a,{icon:d.c})})})]})},e)}))]})})}var _="https://send-io.herokuapp.com";function V(){var e=Object(s.useState)(),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(s.useRef)(),i=B(),l=i.invites,u=i.fetchInvites,b=i.fetchFriends,h=y();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.a,{className:"d-flex flex-column h-50",children:[Object(c.jsx)("h1",{children:"Add friend"}),Object(c.jsxs)(f.a,{onSubmit:function(e){e.preventDefault();var t={friend:a.current.value},n={method:"POST",headers:{Authorization:localStorage.getItem("send-io-usertoken"),"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("".concat(_,"/invites/send"),n).then((function(e){return e.text()})).then((function(e){r(e),a.current.value=""})).catch((function(e){throw e}))},className:"w-100",children:[Object(c.jsxs)(o.a,{className:"d-flex justify-content-between pl-2",children:[Object(c.jsx)(f.a.Group,{className:"m-0 w-100",children:Object(c.jsx)(f.a.Control,{className:"bg-3 border-0",ref:a,type:"text",placeholder:"Username",required:!0})}),Object(c.jsx)(x.a,{type:"submit",className:"align-items-center justify-content-center",children:Object(c.jsx)(j.a,{icon:d.g})})]}),Object(c.jsx)("p",{className:"mt-2 pl-4",children:n})]}),Object(c.jsx)("br",{}),l.length>0&&Object(c.jsxs)(o.a,{className:"h-100 py-2 px-0 scroll mb-auto framed-bottom",children:[Object(c.jsx)("h1",{children:"Invites"}),l.map((function(e){var t=e.user;return Object(c.jsx)(o.a,{className:"d-flex align-items-center justify-content-center",children:Object(c.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-100",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsx)("div",{className:"ring",children:Object(c.jsx)(C.a,{roundedCircle:!0,className:"no-tiny",src:h(t),alt:"profile-pic"})}),Object(c.jsx)("p",{className:"pl-2",children:t})]}),Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)(x.a,{className:"rounded-circle circle mr-2",variant:"success",type:"button",onClick:function(){return function(e){var t={method:"POST",headers:{Authorization:localStorage.getItem("send-io-usertoken"),"Content-Type":"application/json"},body:JSON.stringify({friend:e})};fetch("".concat(_,"/invites/accept"),t).then((function(e){if(!e.ok)throw new Error("An error occured");u(),b()})).catch((function(e){throw e}))}(t)},children:Object(c.jsx)(j.a,{icon:d.a})}),Object(c.jsx)(x.a,{className:"rounded-circle circle",variant:"danger",type:"button",onClick:function(){return function(e){var t={method:"POST",headers:{Authorization:localStorage.getItem("send-io-usertoken"),"Content-Type":"application/json"},body:JSON.stringify({friend:e})};fetch("".concat(_,"/invites/deny"),t).then((function(e){if(!e.ok)throw new Error("An error occured");u()})).catch((function(e){throw e}))}(t)},children:Object(c.jsx)(j.a,{icon:d.f})})]})]})},t)}))]})]})})}function W(){var e=Object(s.useState)(),t=Object(m.a)(e,2),n=t[0],r=t[1],a=y();Object(s.useEffect)((function(){fetch("".concat("https://send-io.herokuapp.com","/users/me"),{headers:{Authorization:localStorage.getItem("send-io-usertoken")}}).then((function(e){return e.json()})).then((function(e){r(e.username)})).catch((function(e){throw e}))}),[]);return Object(c.jsx)(o.a,{fluid:!0,className:"d-flex  flex-column m-0 p-0 h-100 bg-3",children:Object(c.jsxs)(S.a,{className:"d-flex justify-content-between m-0 p-0 h-100",children:[Object(c.jsx)(k.a,{xs:9,className:"p-0  h-100",children:Object(c.jsx)(S.a,{className:"m-0 h-100 d-flex ",children:Object(c.jsxs)(T,{children:[Object(c.jsxs)(k.a,{xs:4,className:"p-0 h-100 bg-1",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center p-2",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[n&&Object(c.jsx)("div",{className:"ring",children:Object(c.jsx)(C.a,{roundedCircle:!0,className:"no-tiny",src:a(n),alt:"profile-pic"})}),Object(c.jsx)("p",{className:"pl-2",children:n})]}),Object(c.jsx)(f.a,{onSubmit:function(){localStorage.removeItem("send-io-usertoken"),localStorage.removeItem("send-io-current-conversation")},children:Object(c.jsx)(x.a,{type:"submit",className:"bg-3 border-0",children:Object(c.jsx)(j.a,{icon:d.e})})})]}),Object(c.jsx)("br",{}),Object(c.jsx)(M,{})]}),Object(c.jsx)(k.a,{xs:8,className:"p-0 h-100 bg-2",children:Object(c.jsx)(F,{username:n,children:Object(c.jsx)(J,{username:n})})})]})})}),Object(c.jsx)(k.a,{xs:3,className:"p-0 pt-5 bg-1 h-100",children:Object(c.jsx)(D,{children:Object(c.jsxs)(o.a,{className:"d-flex flex-column align-items-center p-0 h-100",children:[Object(c.jsx)(V,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(H,{})]})})})]})})}function K(){var e=localStorage.getItem("send-io-usertoken");return Object(s.useEffect)((function(){fetch("https://send-io.herokuapp.com")})),Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)(w,{children:Object(c.jsx)(W,{})}):Object(c.jsx)(v,{})})}n(114),n(115);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.d6981ee4.chunk.js.map