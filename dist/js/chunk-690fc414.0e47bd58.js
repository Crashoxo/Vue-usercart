(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-690fc414"],{"1dde":function(t,e,c){var a=c("d039"),o=c("b622"),n=c("2d00"),s=o("species");t.exports=function(t){return n>=51||!a((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"344c":function(t,e,c){"use strict";c("758e")},"758e":function(t,e,c){},"76db":function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),o=Object(a["h"])("div",{style:{height:"100px"}},null,-1),n={class:"row justify-content-center"},s={class:"col-md-6"},r={class:"sticky-top"},l={class:"table align-middle"},i=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th"),Object(a["h"])("th",null,"品名"),Object(a["h"])("th",{style:{width:"110px"}},"數量"),Object(a["h"])("th",null,"單價")])],-1),d=["disabled","onClick"],u=Object(a["h"])("span",{class:"material-icons-outlined"}," clear ",-1),b=[u],h={key:0,class:"text-success"},m={class:"input-group input-group-sm mx-4"},f=["onUpdate:modelValue","onChange","disabled"],p={class:"input-group-text"},j={class:"text-end"},O={key:0,class:"text-success"},g=Object(a["h"])("td",{colspan:"3",class:"text-end"},"Total",-1),v={class:"text-end"},x={key:0},y=Object(a["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),k={class:"text-end text-success"},C={class:"input-group mb-3 input-group-sm"},V={class:"input-group-append"},I={class:"my-5 row justify-content-center"},w={class:"mb-3"},$=Object(a["h"])("label",{for:"email",class:"form-label"},"Email",-1),_={class:"mb-3"},M=Object(a["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),L={class:"mb-3"},S=Object(a["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),U={class:"mb-3"},q=Object(a["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),z={class:"mb-3"},E=Object(a["h"])("label",{for:"message",class:"form-label"},"留言",-1),J=Object(a["h"])("div",{class:"text-end"},[Object(a["h"])("button",{class:"btn btn-danger"},"Send an Order")],-1),F=Object(a["h"])("div",{style:{height:"200px"}},null,-1);function Q(t,e,c,u,Q,T){var A=Object(a["J"])("Field"),D=Object(a["J"])("ErrorMessage"),N=Object(a["J"])("Form");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",null,[o,Object(a["h"])("div",n,[Object(a["h"])("div",s,[Object(a["h"])("div",r,[Object(a["h"])("table",l,[i,Object(a["h"])("tbody",null,[Q.cart.carts?(Object(a["z"])(!0),Object(a["g"])(a["a"],{key:0},Object(a["H"])(Q.cart.carts,(function(e){return Object(a["z"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",null,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:Q.status.loadingItem===e.id,onClick:function(t){return T.removeCartItem(e.id)}},b,8,d)]),Object(a["h"])("td",null,[Object(a["j"])(Object(a["M"])(e.product.title)+" ",1),e.coupon?(Object(a["z"])(),Object(a["g"])("div",h," 已套用優惠券 ")):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("div",m,[Object(a["V"])(Object(a["h"])("input",{"onUpdate:modelValue":function(t){return e.qty=t},min:"1",onChange:function(t){return T.updateCart(e)},disabled:e.id===Q.status.loadingItem,type:"number",class:"form-control"},null,40,f),[[a["Q"],e.qty,void 0,{number:!0}]]),Object(a["h"])("div",p," / "+Object(a["M"])(e.product.unit),1)])]),Object(a["h"])("td",j,[Q.cart.final_total!==Q.cart.total?(Object(a["z"])(),Object(a["g"])("small",O,"折扣價：")):Object(a["f"])("",!0),Object(a["j"])(Object(a["M"])(t.$filters.currency(e.final_total)),1)])])})),128)):Object(a["f"])("",!0)]),Object(a["h"])("tfoot",null,[Object(a["h"])("tr",null,[g,Object(a["h"])("td",v,Object(a["M"])(t.$filters.currency(Q.cart.total)),1)]),Q.cart.final_total!==Q.cart.total?(Object(a["z"])(),Object(a["g"])("tr",x,[y,Object(a["h"])("td",k,Object(a["M"])(t.$filters.currency(Q.cart.final_total)),1)])):Object(a["f"])("",!0)])]),Object(a["h"])("div",C,[Object(a["V"])(Object(a["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return Q.coupon_code=t}),placeholder:"請輸入優惠碼 shop666 享有9折優惠 (Discount code: shop666 )"},null,512),[[a["Q"],Q.coupon_code]]),Object(a["h"])("div",V,[Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return T.addCouponCode&&T.addCouponCode.apply(T,arguments)}),class:"btn btn-outline-secondary",type:"button"}," 套用優惠碼 Discount code ")])])])])]),Object(a["h"])("div",I,[Object(a["k"])(N,{class:"col-md-6",onSubmit:T.createOrder},{default:Object(a["U"])((function(t){var c=t.errors;return[Object(a["h"])("div",w,[$,Object(a["k"])(A,{id:"email",name:"email",type:"email",class:Object(a["s"])(["form-control",{"is-invalid":c["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:Q.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return Q.form.user.email=t})},null,8,["class","modelValue"]),Object(a["k"])(D,{name:"email",class:"invalid-feedback"})]),Object(a["h"])("div",_,[M,Object(a["k"])(A,{id:"name",name:"姓名",type:"text",class:Object(a["s"])(["form-control",{"is-invalid":c["姓名"]}]),placeholder:"請輸入姓名 ( Name )",rules:"required",modelValue:Q.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return Q.form.user.name=t})},null,8,["class","modelValue"]),Object(a["k"])(D,{name:"姓名",class:"invalid-feedback"})]),Object(a["h"])("div",L,[S,Object(a["k"])(A,{id:"tel",name:"電話",type:"tel",class:Object(a["s"])(["form-control",{"is-invalid":c["電話"]}]),placeholder:"請輸入電話 (PhoneNumber)",rules:"required",modelValue:Q.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return Q.form.user.tel=t})},null,8,["class","modelValue"]),Object(a["k"])(D,{name:"電話",class:"invalid-feedback"})]),Object(a["h"])("div",U,[q,Object(a["k"])(A,{id:"address",name:"地址",type:"text",class:Object(a["s"])(["form-control",{"is-invalid":c["地址"]}]),placeholder:"請輸入地址 (Address)",rules:"required",modelValue:Q.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return Q.form.user.address=t})},null,8,["class","modelValue"]),Object(a["k"])(D,{name:"地址",class:"invalid-feedback"})]),Object(a["h"])("div",z,[E,Object(a["V"])(Object(a["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=function(t){return Q.form.message=t}),placeholder:"留言 (Message)"},null,512),[[a["Q"],Q.form.message]])]),J]})),_:1},8,["onSubmit"])])]),F],64)}c("99af");var T={data:function(){return{status:{loadingItem:""},cart:{},coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:""}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rouoxo","/cart");this.isLoading=!0,this.$http.get(e).then((function(e){console.log("抓購物車內容",e),t.cart=e.data.data,t.isLoading=!1}))},updateCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rouoxo","/cart/").concat(t.id);this.isLoading=!0,this.status.loadingItem=t.id;var a={product_id:t.product_id,qty:t.qty};this.$http.put(c,{data:a}).then((function(t){e.status.loadingItem="",console.log("res",t),e.getCart()}))},removeCartItem:function(t){var e=this;this.status.loadingItem=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rouoxo","/cart/").concat(t);this.isLoading=!0,this.$http.delete(c).then((function(t){e.$httpMessageState(t,"移除購物車品項"),e.status.loadingItem="",e.getCart(),e.isLoading=!1}))},addCouponCode:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rouoxo","/coupon"),c={code:this.coupon_code};this.isLoading=!0,this.$http.post(e,{data:c}).then((function(e){t.$httpMessageState(e,"加入優惠券"),t.getCart(),t.isLoading=!1}))},createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rouoxo","/order"),c=this.form;this.$http.post(e,{data:c}).then((function(e){console.log(e),t.isLoading=!1,t.getCart(),t.orderId=e.data.orderId,t.$router.push("checkout/".concat(t.orderId))}))}},created:function(){this.getCart()}},A=(c("344c"),c("6b0d")),D=c.n(A);const N=D()(T,[["render",Q]]);e["default"]=N},8418:function(t,e,c){"use strict";var a=c("a04b"),o=c("9bf2"),n=c("5c6c");t.exports=function(t,e,c){var s=a(e);s in t?o.f(t,s,n(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),o=c("da84"),n=c("d039"),s=c("e8b5"),r=c("861d"),l=c("7b0b"),i=c("07fa"),d=c("8418"),u=c("65f0"),b=c("1dde"),h=c("b622"),m=c("2d00"),f=h("isConcatSpreadable"),p=9007199254740991,j="Maximum allowed index exceeded",O=o.TypeError,g=m>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),v=b("concat"),x=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},y=!g||!v;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,a,o,n,s=l(this),r=u(s,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?s:arguments[e],x(n)){if(o=i(n),b+o>p)throw O(j);for(c=0;c<o;c++,b++)c in n&&d(r,b,n[c])}else{if(b>=p)throw O(j);d(r,b++,n)}return r.length=b,r}})},b0c0:function(t,e,c){var a=c("83ab"),o=c("5e77").EXISTS,n=c("e330"),s=c("9bf2").f,r=Function.prototype,l=n(r.toString),i=/^\s*function ([^ (]*)/,d=n(i.exec),u="name";a&&!o&&s(r,u,{configurable:!0,get:function(){try{return d(i,l(this))[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-690fc414.0e47bd58.js.map