(this["webpackJsonpwaveshop-frontend"]=this["webpackJsonpwaveshop-frontend"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(20),a=n.n(s),i=(n(34),n(11)),o=n(12),u=n(14),j=n(13),l=(n(35),n(5)),b=n(0),h=function(){return Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("p",{children:"WaveShop"})})},d=n(7),O="https://waveshop-backend.herokuapp.com",p=function(){return function(e){e({type:"START_GET_SYNTHS_REQUEST"}),fetch(O+"/synths").then((function(e){return e.json()})).then((function(t){return e({type:"GET_SYNTHS",payload:t})}))}},m=Object(l.b)((function(e){return{user:e.user,cart:e.user.cart}}),{logout:function(){return function(e){localStorage.clear("token"),e({type:"LOGOUT"})}},getSynths:p})((function(e){var t=e.cart.reduce((function(e,t){return e+t.qty}),0);return Object(b.jsxs)("nav",{children:[Object(b.jsxs)("div",{className:"nav-buttons",children:[Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("button",{onClick:e.getSynths,children:"Home"})}),Object(b.jsx)(d.b,{to:"/about",children:Object(b.jsx)("button",{children:"About"})})]}),Object(b.jsxs)("div",{className:"user-container",children:[e.user.id?Object(b.jsx)("button",{onClick:e.logout,children:"Logout"}):Object(b.jsx)(d.b,{to:"/login",children:Object(b.jsx)("button",{children:"Login / Sign Up"})}),Object(b.jsx)(d.b,{to:"/cart",children:Object(b.jsxs)("button",{children:["Cart: ",t]})})]})]})})),f=function(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("h1",{children:"About"}),Object(b.jsxs)("p",{children:["Welcome to ",Object(b.jsx)("strong",{children:"WaveShop"}),"! This website will allow you to explore synthesizers for sale and review them."]})]})},y=Object(l.b)((function(e){return{cart:e.user.cart}}),{removeFromCart:function(e){return function(t){t({type:"REMOVE_FROM_CART",payload:{id:e}})}}})((function(e){var t=e.cart.reduce((function(e,t){return e+t.qty}),0),n=e.cart.reduce((function(e,t){return e+t.price*t.qty}),0);return Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsxs)("h1",{children:["Cart: ",0===t?"Empty":t]}),Object(b.jsxs)("div",{className:"total-price-box",children:["Total: $",n.toFixed(2)]}),Object(b.jsx)("ul",{children:e.cart.map((function(t){return Object(b.jsxs)("div",{className:"cart-items",children:[Object(b.jsxs)("li",{children:[t.name," - Qty: ",t.qty]}),Object(b.jsx)("img",{src:t.image,alt:t.name}),Object(b.jsx)("br",{}),Object(b.jsxs)("h3",{children:["$",t.price]}),Object(b.jsx)(d.b,{to:"/synths/"+t.id,children:Object(b.jsx)("button",{children:"View"})}),Object(b.jsx)("button",{onClick:function(){return e.removeFromCart(t.id)},children:"Remove"})]})}))})]})})),x=n(2),g=function(e){var t=e.image,n=e.name,r=e.shortDesc,c=e.price,s=e.id;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h3",{children:Object(b.jsx)(d.b,{to:"/synths/"+s,children:n})}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("ul",{className:"images",children:Object(b.jsxs)("li",{className:"crop",children:[Object(b.jsx)("img",{src:t,alt:n}),Object(b.jsx)("br",{})]})}),Object(b.jsxs)("h3",{children:["$",c.toFixed(2)]}),Object(b.jsx)(d.b,{to:"/synths/"+s,children:Object(b.jsx)("button",{children:"View"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})},v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),e.props.searchSynths(e.state.query)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"search-form",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{type:"text",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})}}),Object(b.jsx)("input",{className:"submit-button",type:"submit",value:"Search"})]})})}}]),n}(r.Component),S=Object(l.b)(null,{searchSynths:function(e){return function(t){fetch(O+"/synths").then((function(e){return e.json()})).then((function(t){return t.filter((function(t){return t.name.includes(e)}))})).then((function(e){return t({type:"SEARCH_SYNTHS",payload:e})}))}}})(v),T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).renderPage=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)("div",{className:"cards",children:e.props.synths.map((function(e){return Object(b.jsx)(g,Object(x.a)({},e),e.id)}))})]})},e.renderSpinner=function(){return Object(b.jsx)("div",{className:"loader"})},e}return Object(o.a)(n,[{key:"render",value:function(){return this.props.requesting?this.renderSpinner():this.renderPage()}}]),n}(r.Component),C=Object(l.b)((function(e){return{synths:e.synths.synths,requesting:e.synths.requesting}}))(T),E=function(e){var t=e.username,n=e.content,r=e.rating;return Object(b.jsxs)("div",{className:"review",children:[Object(b.jsxs)("p",{children:[t,": ",r," STARS"]}),Object(b.jsx)("p",{children:n})]})},w=Object(l.b)((function(e){return{form:e.synths.reviewForm}}),{reviewFormChange:function(e){return{type:"REVIEW_FORM_CHANGE",payload:{name:e.target.name,value:e.target.value}}},submitReview:function(e){return function(t){fetch(O+"/reviews",{method:"POST",headers:{Authorization:localStorage.token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:"SET_REVIEW",payload:e})}))}}})((function(e){var t=e.form,n=t.content,r=t.rating;return Object(b.jsxs)("div",{className:"reviewForm",children:[Object(b.jsx)("h3",{children:"Write a review!"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.submitReview(Object(x.a)(Object(x.a)({},e.form),{},{synth_id:e.synth_id}))},children:[Object(b.jsx)("label",{htmlFor:"rating",children:"Rating: "}),Object(b.jsx)("input",{type:"number",min:"0",max:"5",id:"rating",name:"rating",value:r,onChange:e.reviewFormChange}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"content",children:"Content: "}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{id:"content",name:"content",value:n,onChange:e.reviewFormChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})]})})),N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).renderPage=function(){var t=e.props,n=t.id,r=t.name,c=t.image,s=t.price,a=t.shortDesc,i=t.longDesc,o=t.stock,u=t.history,j=t.reviews,l=t.user_id;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"show",children:[Object(b.jsx)("h3",{children:r}),Object(b.jsx)("p",{children:a}),Object(b.jsx)("img",{src:c,alt:r}),Object(b.jsxs)("p",{children:["$",s]}),Object(b.jsxs)("p",{children:["In-Stock: ",o]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){e.props.addToCart(n)},children:"Add To Cart"}),Object(b.jsx)("button",{className:"back-button",onClick:u.goBack,children:"Back"}),Object(b.jsx)("p",{children:i})]}),Object(b.jsxs)("div",{className:"reviews",children:[l&&Object(b.jsx)(w,{synth_id:n}),j.map((function(e){return Object(b.jsx)(E,Object(x.a)({},e),e.id)}))]})]})},e.renderSpinner=function(){return Object(b.jsx)("div",{className:"loader"})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.setSelectedSynth(e)}},{key:"componentWillUnmount",value:function(){this.props.unsetSynth()}},{key:"render",value:function(){return this.props.id?this.renderPage():this.renderSpinner()}}]),n}(r.Component),_=Object(l.b)((function(e){return Object(x.a)(Object(x.a)({},e.synths.selectedSynth),{},{user_id:e.user.id})}),{setSelectedSynth:function(e){return function(t){fetch(O+"/synths/"+e).then((function(e){return e.json()})).then((function(e){return t({type:"SET_SELECTED_SYNTH",payload:e})}))}},unsetSynth:function(){return{type:"UNSET_SYNTH"}},addToCart:function(e){return function(t,n){var r=n().synths.synths;t({type:"ADD_TO_CART",payload:{id:e,synths:r}})}}})(N),F=Object(l.b)((function(e){return{signup:e.user.signup,form:e.user.loginForm}}),{toggleSignup:function(){return{type:"TOGGLE_SIGNUP"}},handleLoginFormChange:function(e){return{type:"LOGIN_FORM_CHANGE",payload:{name:e.target.name,value:e.target.value}}},sendSignup:function(e){return function(t){fetch(O+"/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){localStorage.token=e.token,t({type:"SET_USER",payload:{user:e.user}})}))}},sendLogin:function(e){return function(t){fetch(O+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.error&&alert(e.error),localStorage.token=e.token,t({type:"SET_USER",payload:{user:e.user}})}))}}})((function(e){var t=e.signup,n=e.toggleSignup,r=e.form,c=e.handleLoginFormChange,s=e.sendSignup,a=e.sendLogin,i=r.username,o=r.password,u=r.passConf;return Object(b.jsxs)("div",{className:"loginForm",children:[Object(b.jsx)("h2",{children:t?"Sign Up":"Login"}),Object(b.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t?o===u?(s({username:i,password:o}),e.history.goBack()):alert("Passwords must match"):(a({username:i,password:o}),e.history.goBack())},children:[Object(b.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(b.jsx)("input",{type:"text",id:"username",name:"username",value:i,onChange:c}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"userPassword",children:"Password: "}),Object(b.jsx)("input",{type:"password",id:"userPassword",name:"password",value:o,onChange:c}),Object(b.jsx)("br",{}),t&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"passConf",children:"Confirm Password: "}),Object(b.jsx)("input",{type:"password",id:"passConf",name:"passConf",value:u,onChange:c}),Object(b.jsx)("br",{})]}),Object(b.jsx)("input",{className:"submit-button",type:"submit",value:"Continue"}),Object(b.jsx)("p",{children:"Or"})]}),Object(b.jsxs)("button",{onClick:n,children:[" ",t?"Login":"Sign Up"]})]})})),k=n(4),R=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){localStorage.token&&this.props.autoLogin(),this.props.getSynths()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"nav-area",children:Object(b.jsx)(m,{})}),Object(b.jsxs)(k.c,{children:[Object(b.jsx)(k.a,{exact:!0,path:"/",component:C}),Object(b.jsx)(k.a,{exact:!0,path:"/synths",component:C}),Object(b.jsx)(k.a,{exact:!0,path:"/synths/:id",component:_}),Object(b.jsx)(k.a,{exact:!0,path:"/about",component:f}),Object(b.jsx)(k.a,{exact:!0,path:"/login",component:F}),Object(b.jsx)(k.a,{exact:!0,path:"/cart",component:y})]})]})}}]),n}(r.Component),A=Object(l.b)(null,{getSynths:p,autoLogin:function(){return function(e){fetch(O+"/autologin",{method:"POST",headers:{Authorization:localStorage.token}}).then((function(e){return e.json()})).then((function(t){e({type:"SET_USER",payload:{user:t.user}})}))}}})(R),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},G=n(15),q=n(17),D=n(19),H={id:null,name:"",image:"",price:"",shortDesc:"",longDesc:"",stock:"",reviews:[]},P={content:"",rating:0},U={synths:[],selectedSynth:H,reviewForm:P,requesting:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_GET_SYNTHS_REQUEST":return Object(x.a)(Object(x.a)({},e),{},{synths:Object(D.a)(e.synths),requesting:!0});case"GET_SYNTHS":return Object(x.a)(Object(x.a)({},e),{},{synths:t.payload,requesting:!1});case"SET_SELECTED_SYNTH":return Object(x.a)(Object(x.a)({},e),{},{selectedSynth:t.payload});case"UNSET_SYNTH":return Object(x.a)(Object(x.a)({},e),{},{selectedSynth:H});case"REVIEW_FORM_CHANGE":return Object(x.a)(Object(x.a)({},e),{},{reviewForm:Object(x.a)(Object(x.a)({},e.reviewForm),{},Object(q.a)({},t.payload.name,t.payload.value))});case"SET_REVIEW":return Object(x.a)(Object(x.a)({},e),{},{selectedSynth:Object(x.a)(Object(x.a)({},e.selectedSynth),{},{reviews:[].concat(Object(D.a)(e.selectedSynth.reviews),[t.payload])}),reviewForm:P});case"SEARCH_SYNTHS":return Object(x.a)(Object(x.a)({},e),{},{synths:t.payload});default:return e}},M={username:"",password:"",passConf:""},Y={id:null,username:null,signup:!1,loginForm:M,cart:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SIGNUP":return Object(x.a)(Object(x.a)({},e),{},{signup:!e.signup});case"LOGIN_FORM_CHANGE":return Object(x.a)(Object(x.a)({},e),{},{loginForm:Object(x.a)(Object(x.a)({},e.loginForm),{},Object(q.a)({},t.payload.name,t.payload.value))});case"SET_USER":return Object(x.a)(Object(x.a)({},e),t.payload.user);case"LOGOUT":return Object(x.a)(Object(x.a)({},e),{},{id:null,username:null,loginForm:M});case"ADD_TO_CART":var n=t.payload.synths.find((function(e){return e.id===t.payload.id})),r=e.cart.find((function(e){return e.id===t.payload.id}));return Object(x.a)(Object(x.a)({},e),{},{cart:r?e.cart.map((function(e){return e.id===t.payload.id?Object(x.a)(Object(x.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(D.a)(e.cart),[Object(x.a)(Object(x.a)({},n),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(x.a)(Object(x.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});default:return e}},V=Object(G.c)({synths:I,user:W}),B=n(29),J=Object(G.e)(V,Object(G.d)(Object(G.a)(B.a)));a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(l.a,{store:J,children:Object(b.jsx)(A,{})})})}),document.getElementById("root")),L()}},[[42,1,2]]]);
//# sourceMappingURL=main.49fdc8d9.chunk.js.map