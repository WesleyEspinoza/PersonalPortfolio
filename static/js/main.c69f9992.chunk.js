(window.webpackJsonpfirst_ever_react_app=window.webpackJsonpfirst_ever_react_app||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),o=a(14),l=a(5);a(28),a(18),a(29);var s=function(){var e=Object(l.e)(function(e){var t=e.history;return r.a.createElement("button",{className:"Button",type:"button",onClick:function(){t.push("/Repos")}},"Repos")}),t=Object(l.e)(function(e){var t=e.history;return r.a.createElement("button",{className:"Button",type:"button",onClick:function(){t.push("/About")}},"About")}),a=Object(l.e)(function(e){var t=e.history;return r.a.createElement("button",{className:"Button",type:"button",onClick:function(){t.push("/Resume")}},"Resume")});return r.a.createElement("div",{className:"MainContent"},r.a.createElement("h1",{className:"Name"},"Erick Wesley Espinoza"),r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement(e,null),r.a.createElement(t,null),r.a.createElement(a,null)))};var u=function(){return r.a.createElement(s,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35);var m=function(){return r.a.createElement("div",{className:"HeaderComponent"},r.a.createElement("div",{className:"Header"},r.a.createElement("a",{href:"#home"},"Home "),r.a.createElement("a",{href:"#about"},"About "),r.a.createElement("a",{href:"#resume"},"Resume "),"Erick Wesley Espinoza"))},h=a(8),p=a(9),E=a(11),d=a(10),f=a(12),g=(a(36),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(E.a)(this,Object(d.a)(t).call(this))).state={image:"python.png"},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.language){case"Swift":this.setState({image:"img/iphone.png"});break;case"JavaScript":this.setState({image:"img/js.png"});break;case"Python":this.setState({image:"img/python.png"});break;case"Kotlin":this.setState({image:"img/android.png"});break;case"C++":this.setState({image:"img/c++.png"})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"p"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,this.props.title),r.a.createElement("h2",null,r.a.createElement("img",{src:"".concat("").concat(this.state.image),alt:""})),r.a.createElement("a",{href:this.props.link},"Link to project")))}}]),t}(r.a.Component)),v=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(E.a)(this,Object(d.a)(t).call(this))).state={data:null},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"fetchUser",value:function(){var e=this;fetch("https://api.github.com/users/WesleyEspinoza/repos").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=[],t=[],a=[];return this.state&&this.state.data&&(a=this.state.data.map(function(a,n){var c=a.id,i=a.name,o=a.language,l=a.html_url,s=a.description,u=[],m=void 0;return s&&("[{--Cur--}]"===(u=s.split(" "))[u.length-1]?e.push(r.a.createElement(g,{key:"project-".concat(c),title:i,language:o,link:l})):"[{--Updt--}]"===u[u.length-1]?t.push(r.a.createElement(g,{key:"project-".concat(c),title:i,language:o,link:l})):"[{--Fin--}]"===u[u.length-1]&&(m=r.a.createElement(g,{key:"project-".concat(c),title:i,language:o,link:l}))),m})),r.a.createElement("div",{className:"PageContent"},r.a.createElement("h1",{className:"Title"},"Currently Working on"),r.a.createElement("div",{className:"ProjectsGrid"},e),r.a.createElement("h1",null,"Will Update"),r.a.createElement("div",{className:"ProjectsGrid"},t),r.a.createElement("h1",null,"No Future plans"),r.a.createElement("div",{className:"ProjectsGrid"},a))}}]),t}(r.a.Component),b=r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement("div",null,r.a.createElement(l.a,{path:"/",component:u}),r.a.createElement(l.a,{path:"/repos",component:v})));i.a.render(b,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.c69f9992.chunk.js.map