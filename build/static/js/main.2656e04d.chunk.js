(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(72)},47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),u=n(13),l=n(22),i=n(15),s=n(37),p=n(23),h={cart:[]},d={CartReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CART":return Object(p.a)({},e,{cart:[].concat(Object(s.a)(e.cart),[t.payload])});case"UPDATE_CART":return Object(p.a)({},e,{cart:e.cart.map(function(e){return e.id===t.payload.id?t.payload:e})});case"DELETE_CART":return Object(p.a)({},e,{cart:e.cart.filter(function(e){return e.id!==t.payload.id})});default:return e}}},m=Object(i.b)(d),f=Object(i.c)(m),v=(n(47),n(14)),b=n(1),j=n(2),O=n(4),E=n(3),g=n(5),y=function(e){return function(t){function n(){var e;return Object(b.a)(this,n),(e=Object(O.a)(this,Object(E.a)(n).call(this))).state={component:null},e}return Object(g.a)(n,t),Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),n}(r.a.Component)},C=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).forFatherValue=function(){n.props.getChildValue(n.state.child)},n.state={child:"child",toMountValue:""},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"\u6211\u662f\u5b50\u7ec4\u4ef6"),r.a.createElement("p",null,this.props.value),r.a.createElement("p",{onClick:this.forFatherValue},"\u70b9\u6211\u7ed9\u7236\u7ec4\u4ef6\u4f20\u9012\u53c2\u6570"))}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).changeRoute=function(){n.props.history.push("/twoPage")},n.getChildValue=function(e){e&&n.setState({childValue:e})},n.state={father:"father",childValue:""},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"\u6211\u662fHome2\u7ec4\u4ef6"),r.a.createElement(u.b,{to:"/onePage"},"\u70b9\u6211\u8df3\u8f6c\u5230one\u9875\u9762"),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/twoPage/2"},"\u70b9\u6211\u8df3\u8f6c\u5230two\u9875\u9762"),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/this"},"\u70b9\u6211\u8df3\u8f6c\u5230this\u9875\u9762"),r.a.createElement("p",{onClick:this.changeRoute},"\u70b9\u6211\u8bd5\u8bd5")),r.a.createElement("div",null,r.a.createElement("p",null,"\u6211\u662f\u7236\u7ec4\u4ef6"),r.a.createElement(C,{value:this.state.father,getChildValue:this.getChildValue}),r.a.createElement("p",null,this.state.childValue)))}}]),t}(r.a.Component),w=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u6211\u662fOnePage\u7ec4\u4ef6")}}]),t}(r.a.Component),V=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u6211\u662fTwoPage\u7ec4\u4ef6")}}]),t}(r.a.Component),D=n(18),T=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(O.a)(this,Object(E.a)(t).call(this))).changeValue2=function(){e.setState({value:"changeValue2"})},e.state={value:""},e.changeValue1=e.changeValue1.bind(Object(D.a)(Object(D.a)(e))),e}return Object(g.a)(t,e),Object(j.a)(t,[{key:"changeValue1",value:function(){this.setState({value:"changeValue1"})}},{key:"changeValue3",value:function(e){this.setState({value:"changeValue3"}),this.props.history.push("/twoPage/".concat(e))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{onClick:this.changeValue1},"this1"),r.a.createElement("p",{onClick:this.changeValue2},"this2"),r.a.createElement("p",{onClick:this.changeValue3.bind(this,666)},"this3"),r.a.createElement("p",null,this.state.value))}}]),t}(r.a.Component),P=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),"componentDidMount"===t.value&&(console.log("shouldComponentUpdate"),this.setState({value:"shouldComponentUpdate"})),!0}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),"getDerivedStateFromProps"===this.state.value&&this.setState({value:"componentDidMount"})}},{key:"render",value:function(){return console.log("render"),r.a.createElement("div",null,"\u6211\u662f\u751f\u547d\u5468\u671f\u7ec4\u4ef6",this.props.value,this.state.value)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return!e.value&&""!==t.value||(console.log("getDerivedStateFromProps"),{value:"getDerivedStateFromProps"})}}]),t}(r.a.Component),S=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).state={count:0},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return e.setState({count:e.state.count+1})}},"\u70b9\u6211\u8bd5\u8bd5",this.state.count))}}]),t}(r.a.Component),A=n(12),R=n.n(A);R.a.defaults.timeout=5e3,R.a.defaults.headers.post["Content-Type"]="application/json",R.a.defaults.headers.get["Content-Type"]="application/json",R.a.defaults.headers.delete["Content-Type"]="application/json",R.a.defaults.headers.put["Content-Type"]="application/json",R.a.defaults.baseURL="http://localhost:3000",R.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),R.a.interceptors.response.use(function(e){return 40008===e.data.code?(window.location.reload(),{code:12e3,message:"\u767b\u5f55\u8fc7\u65f6,\u9000\u51fa\u8bf7\u91cd\u65b0\u767b\u5f55"}):e.data},function(e){return Promise.reject(e.response)});var M=R.a,U=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).state={data:[]},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"componentWillMount",value:function(){var e=this;M.get("/mock.json",{}).then(function(t){200===t.code&&e.setState({data:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.data?this.state.data.map(function(e){return r.a.createElement("p",{key:e.id},e.name," => ",e.grade)}):null)}}]),t}(r.a.Component),x=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).ref3=r.a.createRef(),n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){console.log(this.refs.input),console.log(this.ref2),console.log(this.ref3),this.refs.input.value="ref1",this.ref2.value="ref2",this.ref3.current.value="ref3"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{ref:"input"}),r.a.createElement("input",{ref:function(t){e.ref2=t}}),r.a.createElement("input",{ref:this.ref3}))}}]),t}(r.a.Component),F=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(E.a)(t).call(this,e))).add=function(){var e=n.state.count+1;n.props.addCart("a"+e,2,500,e),n.setState({count:e})},n.update=function(e){var t=n.state.count;n.props.updateCart("b"+t,3,900,e)},n.delete=function(e){n.props.deleteCart(e)},n.state={count:0},n}return Object(g.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:500,textAlign:"center",margin:"30px auto"}},this.props.cart&&this.props.cart.map(function(t,n){return r.a.createElement("div",{key:n},r.a.createElement("p",null,t.name," => ",t.num," => ",t.weight,r.a.createElement("button",{onClick:e.update.bind(e,t.id)},"\u66f4\u65b0"),r.a.createElement("button",{onClick:e.delete.bind(e,t.id)},"\u5220\u9664")))}),r.a.createElement("button",{onClick:this.add},"\u6dfb\u52a0"))}}]),t}(a.Component),_=Object(l.b)(function(e){return{cart:e.CartReducers.cart}},function(e){return{addCart:function(){return e(function(e,t,n,a){return{type:"ADD_CART",payload:{name:e,num:t,weight:n,id:a}}}.apply(void 0,arguments))},updateCart:function(){return e(function(e,t,n,a){return{type:"UPDATE_CART",payload:{name:e,num:t,weight:n,id:a}}}.apply(void 0,arguments))},deleteCart:function(){return e(function(e){return{type:"DELETE_CART",payload:{id:e}}}.apply(void 0,arguments))}}})(F),L=y(function(){return n.e(3).then(n.bind(null,73))}),W=r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:k}),r.a.createElement(v.a,{path:"/onePage",component:w}),r.a.createElement(v.a,{path:"/twoPage/:id",component:V}),r.a.createElement(v.a,{path:"/this",component:T}),r.a.createElement(v.a,{path:"/mount",component:P}),r.a.createElement(v.a,{path:"/hooksTest1",component:S}),r.a.createElement(v.a,{path:"/axiosTest",component:U}),r.a.createElement(v.a,{path:"/refs",component:x}),r.a.createElement(v.a,{path:"/reduxComponent",component:_}),r.a.createElement(v.a,{path:"/hooksUseState",component:L}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{store:f},r.a.createElement(u.a,null,W)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.2656e04d.chunk.js.map