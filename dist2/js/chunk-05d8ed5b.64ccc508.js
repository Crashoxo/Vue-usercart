(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05d8ed5b"],{1166:function(t,a,e){"use strict";e("74a1")},7277:function(t,a,e){"use strict";e.r(a);var n=e("7a23"),c=Object(n["h"])("div",null,"Dashboard",-1),o={class:"container-fluid mt-3 position-relative"};function s(t,a,e,s,r,l){var u=Object(n["J"])("Navber"),i=Object(n["J"])("ToastMessages"),b=Object(n["J"])("router-view");return Object(n["z"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(u),c,Object(n["h"])("div",o,[Object(n["k"])(i),Object(n["k"])(b)])],64)}e("ac1f"),e("5319");var r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},l={class:"container-fluid"},u=Object(n["j"])("範例作品"),i=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav"},v=Object(n["j"])("產品"),h=Object(n["j"])("訂單"),j=Object(n["j"])("優惠券"),p={class:"navbar-nav"},O=Object(n["j"])("產品頁面");function f(t,a,e,c,o,s){var f=Object(n["J"])("router-link");return Object(n["z"])(),Object(n["g"])("nav",r,[Object(n["h"])("div",l,[Object(n["k"])(f,{class:"navbar-brand",to:"/user/product"},{default:Object(n["U"])((function(){return[u]})),_:1}),i,Object(n["h"])("div",b,[Object(n["h"])("div",d,[Object(n["k"])(f,{to:"/dashboard/products",class:"nav-link"},{default:Object(n["U"])((function(){return[v]})),_:1}),Object(n["k"])(f,{to:"/dashboard/orders",class:"nav-link"},{default:Object(n["U"])((function(){return[h]})),_:1}),Object(n["k"])(f,{to:"/dashboard/coupons",class:"nav-link"},{default:Object(n["U"])((function(){return[j]})),_:1}),Object(n["h"])("a",{href:"#",onClick:a[0]||(a[0]=Object(n["W"])((function(){return s.logout&&s.logout.apply(s,arguments)}),["prevent"])),class:"nav-link"},"登出")])]),Object(n["h"])("div",p,[Object(n["k"])(f,{to:"/user/product",class:"nav-link"},{default:Object(n["U"])((function(){return[O]})),_:1})])])])}var g={methods:{logout:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","logout");console.log(a),this.$http.post(a,this.user).then((function(a){a.data.success&&(console.log(a),t.$router.push("/login"))}))}}},k=(e("1166"),e("6b0d")),$=e.n(k);const m=$()(g,[["render",f]]);var w=m,J=e("f367"),x=e("cfb9"),M={components:{Navber:w,ToastMessages:J["a"]},provide:function(){return{emitter:x["a"]}},created:function(){var t=this,a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");console.log(a),this.$http.defaults.headers.common.Authorization=a;var e="".concat("https://vue3-course-api.hexschool.io/","api/user/check");console.log(e),this.$http.post(e,this.user).then((function(a){console.log(a),a.data.success||t.$router.push("/login")}))}};const N=$()(M,[["render",s]]);a["default"]=N},"74a1":function(t,a,e){}}]);
//# sourceMappingURL=chunk-05d8ed5b.64ccc508.js.map