(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},85:function(e,t,c){},90:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(30),i=c.n(a),r=(c(76),c(16)),o=(c(77),c(78),c(114)),l=c(51),j=c.n(l),d=c(53),u=c.n(d),h=c(54),b=c.n(h),m=c(3),O=Object(n.createContext)(),x=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(m.jsx)(O.Provider,{value:Object(n.useReducer)(t,c),children:s})},p=function(){return Object(n.useContext)(O)};var v=function(){var e=p(),t=Object(r.a)(e,1)[0].user;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"header__left",children:Object(m.jsx)(j.a,{})}),Object(m.jsxs)("div",{className:"header__search",children:[Object(m.jsx)(u.a,{}),Object(m.jsx)("input",{placeholder:"Search Piyush Kumar",type:"text"})]}),Object(m.jsxs)("div",{className:"header__right",children:[Object(m.jsx)(b.a,{}),Object(m.jsx)(o.a,{className:"header__avatar",alt:null===t||void 0===t?void 0:t.displayName,src:null===t||void 0===t?void 0:t.photoURL})]})]})},f=(c(85),c(55)),g=c.n(f),_=c(56),N=c.n(_),I=c(10),S=c(33),k=S.a.initializeApp({apiKey:"AIzaSyDjV72Pl4Ib4Hh6MBMSDbB9b9kWtU-hoPg",authDomain:"slack-clone-7dd27.firebaseapp.com",projectId:"slack-clone-7dd27",storageBucket:"slack-clone-7dd27.appspot.com",messagingSenderId:"483158241525",appId:"1:483158241525:web:9e0fa8a211dcc62cf4d5bc",measurementId:"G-CPY1Z955DR"}).firestore(),C=S.a.auth(),y=new S.a.auth.GoogleAuthProvider,w=k;c(90);var P=function(e){var t=e.Icon,c=e.title,n=e.id,s=e.addChannelOption,a=Object(I.f)();return Object(m.jsxs)("div",{className:"sidebarOption",onClick:s?function(){var e=prompt("Please enter the Channel name");e&&w.collection("rooms").add({name:e})}:function(){n?a.push("/room/".concat(n)):a.push(c)},children:[t&&Object(m.jsx)(t,{className:"sidebarOption__icon"}),t?Object(m.jsx)("h3",{children:c}):Object(m.jsxs)("h3",{className:"sidebarOption__channel",children:[Object(m.jsx)("span",{className:"sidebarOption__hash",children:"#"}),c]})]})},D=c(57),B=c.n(D),F=c(58),E=c.n(F),R=c(59),T=c.n(R),A=c(60),L=c.n(A),M=c(61),U=c.n(M),G=c(62),W=c.n(G),z=c(63),H=c.n(z),J=c(64),K=c.n(J),V=c(65),Q=c.n(V),Y=c(66),Z=c.n(Y);var q=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=p(),i=Object(r.a)(a,1)[0].user;return Object(n.useEffect)((function(){w.collection("rooms").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),Object(m.jsxs)("div",{className:"sidebar",children:[Object(m.jsxs)("div",{className:"sidebar__header",children:[Object(m.jsxs)("div",{className:"sidebar__info",children:[Object(m.jsx)("h2",{children:null===i||void 0===i?void 0:i.displayName}),Object(m.jsxs)("h3",{children:[Object(m.jsx)(g.a,{}),null===i||void 0===i?void 0:i.displayName]})]}),Object(m.jsx)(N.a,{})]}),Object(m.jsx)(P,{Icon:B.a,title:"Threads"}),Object(m.jsx)(P,{Icon:E.a,title:"Mentions & reactions"}),Object(m.jsx)(P,{Icon:T.a,title:"Saved items"}),Object(m.jsx)(P,{Icon:L.a,title:"Channel browser"}),Object(m.jsx)(P,{Icon:U.a,title:"People & user groups"}),Object(m.jsx)(P,{Icon:W.a,title:"Apps"}),Object(m.jsx)(P,{Icon:H.a,title:"File browser"}),Object(m.jsx)(P,{Icon:K.a,title:"Show less"}),Object(m.jsx)("hr",{}),Object(m.jsx)(P,{Icon:Q.a,title:"Channels"}),Object(m.jsx)("hr",{}),Object(m.jsx)(P,{Icon:Z.a,addChannelOption:!0,title:"Add Channels"}),c.map((function(e){return Object(m.jsx)(P,{title:e.name,id:e.id})}))]})},X=c(44),$=(c(94),c(67)),ee=c.n($),te=c(68),ce=c.n(te);c(95);var ne=function(e){var t=e.message,c=e.timestamp,n=e.user,s=e.userImage;return Object(m.jsxs)("div",{className:"message",children:[Object(m.jsx)("img",{src:s,alt:"user"}),Object(m.jsxs)("div",{className:"message__info",children:[Object(m.jsxs)("h4",{children:[n,Object(m.jsx)("span",{className:"message__timestamp",children:new Date(null===c||void 0===c?void 0:c.toDate()).toUTCString()})]}),Object(m.jsx)("p",{children:t})]})]})};c(96);var se=function(e){var t=e.channelName,c=e.channelId,s=Object(n.useState)(""),a=Object(r.a)(s,2),i=a[0],o=a[1],l=p(),j=Object(r.a)(l,1)[0].user;return Object(m.jsx)("div",{className:"chatInput",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},placeholder:"Message #".concat(t)}),Object(m.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),c&&w.collection("rooms").doc(c).collection("messages").add({message:i,timestamp:S.a.firestore.FieldValue.serverTimestamp(),user:j.displayName,userImage:j.photoURL}),o("")},children:"SEND"})]})})};var ae=function(){var e=Object(I.g)().roomId,t=Object(n.useState)(null),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),l=o[0],j=o[1];return Object(n.useEffect)((function(){e&&w.collection("rooms").doc(e).onSnapshot((function(e){return a(e.data())})),w.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return j(e.docs.map((function(e){return e.data()})))}))}),[e]),Object(m.jsxs)("div",{className:"chat",children:[Object(m.jsxs)("div",{className:"chat__header",children:[Object(m.jsx)("div",{className:"chat__headerLeft",children:Object(m.jsxs)("h4",{className:"chat__channelName",children:[Object(m.jsxs)("strong",{children:["#",null===s||void 0===s?void 0:s.name]}),Object(m.jsx)(ee.a,{})]})}),Object(m.jsx)("div",{className:"chat__headerRight",children:Object(m.jsxs)("p",{children:[Object(m.jsx)(ce.a,{})," Details"]})})]}),Object(m.jsxs)("div",{className:"chat__messages",children:[l.map((function(e){var t=e.message,c=e.timestamp,n=e.user,s=e.userImage;return Object(m.jsx)(ne,{message:t,timestamp:c,user:n,userImage:s})})),";"]}),Object(m.jsx)(se,{channelName:null===s||void 0===s?void 0:s.name,channelId:null===s||void 0===s?void 0:s.roomId})]})},ie=c(113),re=(c(97),c(47)),oe="SET_USER",le=function(e,t){switch(console.log(t),t.type){case oe:return Object(re.a)(Object(re.a)({},e),{},{user:t.user});default:return e}};var je=function(){var e=p(),t=Object(r.a)(e,2),c=(t[0],t[1]);return Object(m.jsx)("div",{className:"login",children:Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png",alt:"logo"}),Object(m.jsx)("h1",{children:"Sign in to Base HQ"}),Object(m.jsx)("p",{children:"piyushkumar.slack.com"}),Object(m.jsx)(ie.a,{onClick:function(){C.signInWithPopup(y).then((function(e){console.log(e),c({type:oe,user:e.user})})).catch((function(e){alert(e.message)}))},children:"Sign in with Google"})]})})};var de=function(){var e=p(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(m.jsx)("div",{className:"app",children:Object(m.jsx)(X.a,{children:c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsxs)("div",{className:"app__body",children:[Object(m.jsx)(q,{}),Object(m.jsxs)(I.c,{children:[Object(m.jsx)(I.a,{path:"/room/:roomId",children:Object(m.jsx)(ae,{})}),Object(m.jsx)(I.a,{path:"/",children:Object(m.jsx)("h1",{children:"Welcome"})})]})]})]}):Object(m.jsx)(je,{})})})},ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,115)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{initialState:{user:null},reducer:le,children:Object(m.jsx)(de,{})})}),document.getElementById("root")),ue()}},[[98,1,2]]]);
//# sourceMappingURL=main.2dc95fb2.chunk.js.map