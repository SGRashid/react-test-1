(this["webpackJsonpreact-test-1"]=this["webpackJsonpreact-test-1"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"data":["\u0410\u0431\u0430\u043a\u0430\u043d","\u0410\u0440\u0442\u0435\u043c","\u0410\u0437\u043e\u0432","\u041c\u043e\u0441\u043a\u0432\u0430","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a","\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u0441\u043a","\u0422\u0430\u0433\u0438\u043b","\u041a\u0430\u043c\u0435\u043d\u0441\u043a-\u0423\u0440\u0430\u043b\u044c\u0441\u043a\u0438\u0439","\u041a\u0443\u0448\u0432\u0430","\u0421\u0430\u0431\u0438\u043a","\u0411\u0435\u0440\u043b\u043e\u0433\u0430","\u0428\u0430\u043b\u044f","\u041a\u0443\u0440\u0433\u0430\u043d","\u041d\u044f\u0433\u0430\u043d\u044c","\u0421\u0430\u0440\u0430\u0442\u043e\u0432"]}')},25:function(e,t,a){e.exports=a(41)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(15),l=a.n(i),s=(a(30),a(8)),r=a(5),o=a(12),u=a(16),m=a(17),h=a(23),f=a(18),E=a(24),d=(a(31),a(19)),v=(a(32),function(){return c.a.createElement("div",{className:"menu"},c.a.createElement(s.b,{className:"main-menu white bold",to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"))}),p=(a(38),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"white main-footer"},c.a.createElement("span",null,"\u0421\u0435\u0440\u0433\u0435\u0439 \u0413\u0430\u0431\u0434\u0443\u043b\u043b\u0438\u043d"),c.a.createElement("a",{className:"black mail",href:"mailto:s.gabdullin@gmail.com"},"\xa0S.Gabdullin@gmail.com")))}),y=d.data,b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.filter=function(e){if(a.state.value.length<3)return!0;var t=a.state.value.length;return e.slice(0,t).toLowerCase()===a.state.value.toLowerCase()},a.cityAdd=function(e){if(!a.state.cityes.includes(e)){var t=[].concat(Object(o.a)(a.state.cityes),[e]).sort();a.setState({value:"",cityes:t}),localStorage.setItem("cityes",JSON.stringify(t))}},a.cityDelete=function(e){var t=Object(o.a)(a.state.cityes.filter((function(t){return t!==e})));a.setState({cityes:t}),localStorage.setItem("cityes",JSON.stringify(t))},a.choiceListVisibility=function(){return a.setState({choiceList:!a.state.choiceList})},a.state={value:"",cityes:[],choiceList:!0},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){if(!(this.state.cityes.length>0)){var e=JSON.parse(localStorage.cityes);this.setState({cityes:e})}}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"city-list"},c.a.createElement("input",{type:"search",value:this.state.value,onChange:this.handleChange}),c.a.createElement("button",{className:"button"},"\u041f\u043e\u0438\u0441\u043a"),y.filter(this.filter).map((function(t){return c.a.createElement("p",{className:"list-element",onClick:function(){return e.cityAdd(t)}},t,c.a.createElement("span",{className:"plus"},"\xa0+"))}))),c.a.createElement("div",{className:"choice"},c.a.createElement("p",{onClick:this.choiceListVisibility},this.state.choiceList?c.a.createElement("span",{className:"red"},"\u25bc"):c.a.createElement("span",{className:"red"},"\u25ba"),c.a.createElement("b",null,"\xa0\u0412\u044b\u0431\u0440\u0430\u043d\u043e:")),c.a.createElement("div",{className:"choice-list",hidden:!this.state.choiceList},this.state.cityes.map((function(t){return c.a.createElement("p",{className:"choice-list-element"},t,c.a.createElement("span",{className:"x",onClick:function(){return e.cityDelete(t)}},"\xa0\u2716"))}))))),c.a.createElement(p,null))}}]),t}(c.a.Component),g=(a(39),a(22)),N=(a(40),function(){var e=Object(n.useState)(0),t=Object(g.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){document.title="\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ".concat(a," \u0440\u0430\u0437")})),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Hello!"),c.a.createElement("p",null,"\u0412\u044b \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 ",a," \u0440\u0430\u0437"),c.a.createElement("button",{onClick:function(){return i(a+1)}},"\u041a\u043b\u0438\u043a\u043d\u0443\u0442\u044c"))});var O=function(){return c.a.createElement(s.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(r.c,null,c.a.createElement(r.a,{path:"/",exact:!0,component:b}),c.a.createElement(r.a,{path:"/test",exact:!0,component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.89634f17.chunk.js.map