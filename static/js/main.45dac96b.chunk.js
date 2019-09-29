(window.webpackJsonpb=window.webpackJsonpb||[]).push([[0],{38:function(n,e,t){n.exports=t(84)},84:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),u=t(8),i=t.n(u),o=t(9),c=t(27),l=t(28),E=t(35),s=t(29),S=t(36),f=t(3),d=t(2),p=t(86);function m(){var n=Object(f.a)(["\n  color: #4d4d4d;\n  font-size: 12px;\n"]);return m=function(){return n},n}function h(){var n=Object(f.a)(["\n  text-decoration: none;\n  margin-right: 10px;\n"]);return h=function(){return n},n}function R(){var n=Object(f.a)(["\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  text-decoration: none;\n  margin-bottom: 5px;\n"]);return R=function(){return n},n}function T(){var n=Object(f.a)(["\n  width: 50px;\n  height: 50px;\n"]);return T=function(){return n},n}function _(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 600px;\n  height: 90px;\n  list-style: none;\n  border-bottom: 1px solid silver;\n  margin-bottom: 10px;\n"]);return _=function(){return n},n}function v(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  color: #4d4d4d;\n"]);return v=function(){return n},n}function b(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return b=function(){return n},n}function g(){var n=Object(f.a)(["\n  color: #4d4d4d;\n  width: 15px;\n  height: 15px;\n  margin-left: -3px;\n"]);return g=function(){return n},n}var O=Object(d.a)(p.a)(g()),y=d.a.div(b()),j=d.a.div(v()),U=d.a.li(_()),w=d.a.img(T()),x=d.a.p(R()),G=d.a.a(h()),C=d.a.span(m()),A=function(n){var e=n.item;return a.a.createElement(U,null,a.a.createElement(w,{src:e.avatar_url}),a.a.createElement(j,null,a.a.createElement(y,null,a.a.createElement(x,null,a.a.createElement(G,{href:e.html_url,target:"_blank"},e.login)),a.a.createElement(x,null,e.name)),a.a.createElement(x,null,e.bio),a.a.createElement(C,null,a.a.createElement(O,null),e.location)))},k=function(n){var e=n.items;return a.a.createElement("ul",null,e.map((function(n){return a.a.createElement(A,{key:n.id,item:n})})))},L=function(n){return n.users},M=function(n){return n.loading},D=function(n){return n.error},z=t(15),J=t.n(z),q={GET_USERS_START:"GET_USERS_START",GET_USERS_SUCCESS:"GET_USERS_SUCCESS",GET_USERS_ERROR:"GET_USERS_ERROR",GET_STARTS_START:"GET_STARTS_START",GET_STARTS_SUCCESS:"GET_STARTS_SUCCESS",GET_STARTS_ERROR:"GET_STARTS_ERROR"},B=(t(64),t(32)),I=t.n(B);function P(){var n=Object(f.a)(["\n  margin: auto;\n"]);return P=function(){return n},n}function W(){var n=Object(f.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n"]);return W=function(){return n},n}var F=d.a.div(W()),H=d.a.div(P()),K=function(){return a.a.createElement(F,null,a.a.createElement(H,null,a.a.createElement(I.a,{type:"ThreeDots",color:"black",height:100,width:100})))};function N(){var n=Object(f.a)(["\n  margin: auto;\n  color: #bd0000;\n"]);return N=function(){return n},n}function Q(){var n=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n"]);return Q=function(){return n},n}var V=d.a.div(Q()),X=d.a.h1(N()),Y=function(n){var e=n.error;return a.a.createElement(V,null,a.a.createElement(X,null,"Oh, something went wrong: ",e))},Z=function(n){function e(){return Object(c.a)(this,e),Object(E.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(S.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.getUserList)()}},{key:"render",value:function(){var n=this.props,e=n.userList,t=n.loader,r=n.errorMessage;return a.a.createElement("div",null,a.a.createElement(k,{items:e}),t&&a.a.createElement(K,null),r&&a.a.createElement(Y,{error:r}))}}]),e}(r.Component),$={getUserList:function(){return function(n){n({type:q.GET_USERS_START}),J.a.get("https://api.github.com/search/users?q=location:kyiv&per_page=10").then((function(n){return n.data.items.map((function(n){return n.login}))})).then((function(n){return Promise.all(n.map((function(n){return J.a.get("https://api.github.com/users/".concat(n))})))})).then((function(n){return n.map((function(n){return n.data}))})).then((function(e){return n({type:q.GET_USERS_SUCCESS,payload:e})})).catch((function(e){return n(function(n){return{type:q.GET_USERS_ERROR,payload:n}}(e))}))}}},nn=Object(o.b)((function(n){return{userList:L(n),loader:M(n),errorMessage:D(n)}}),$)(Z),en=function(){return a.a.createElement(nn,null)},tn=t(6),rn=t(33),an=t(34),un=Object(tn.combineReducers)({users:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case q.GET_USERS_SUCCESS:return r;default:return n}},loading:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,t=e.type;switch(t){case q.GET_USERS_START:return!0;case q.GET_USERS_SUCCESS:case q.GET_USERS_ERROR:return!1;default:return n}},error:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case q.GET_USERS_START:return"";case q.GET_USERS_ERROR:return r.message;default:return n}}}),on=Object(tn.createStore)(un,Object(rn.composeWithDevTools)(Object(tn.applyMiddleware)(an.a)));i.a.render(a.a.createElement(o.a,{store:on},a.a.createElement(en,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.45dac96b.chunk.js.map