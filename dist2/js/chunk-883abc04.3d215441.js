(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-883abc04"],{"1dde":function(t,e,n){var o=n("d039"),r=n("b622"),s=n("2d00"),a=r("species");t.exports=function(t){return s>=51||!o((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,n){"use strict";var o=n("a04b"),r=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var a=o(e);a in t?r.f(t,a,s(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var o=n("23e7"),r=n("da84"),s=n("d039"),a=n("e8b5"),c=n("861d"),i=n("7b0b"),u=n("07fa"),l=n("8418"),d=n("65f0"),b=n("1dde"),f=n("b622"),h=n("2d00"),p=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=r.TypeError,w=h>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),j=b("concat"),O=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},x=!w||!j;o({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,o,r,s,a=i(this),c=d(a,0),b=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?a:arguments[e],O(s)){if(r=u(s),b+r>m)throw g(v);for(n=0;n<r;n++,b++)n in s&&l(c,b,s[n])}else{if(b>=m)throw g(v);l(c,b++,s)}return c.length=b,c}})},a55b:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),r={class:"container mt-5"},s={class:"col-md-6"},a=Object(o["h"])("h1",{class:"h3 mb-3 font-weight-normal text-light"},"請先登入",-1),c={class:"mb-2"},i=Object(o["h"])("label",{for:"inputEmail",class:"sr-only text-light"},"Email address",-1),u={class:"mb-2"},l=Object(o["h"])("label",{for:"inputPassword",class:"sr-only text-light"},"Password",-1),d=Object(o["h"])("div",{class:"text-end mt-4"},[Object(o["h"])("button",{class:"btn btn-lg btn-dark btn-outline-light btn-block",type:"submit"}," 登入 ")],-1);function b(t,e,n,b,f,h){var p=Object(o["J"])("Loading");return Object(o["z"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(p,{active:f.isLoading},null,8,["active"]),Object(o["h"])("div",r,[Object(o["h"])("form",{onSubmit:e[2]||(e[2]=Object(o["W"])((function(){return h.signIn&&h.signIn.apply(h,arguments)}),["prevent"])),class:"row justify-content-center"},[Object(o["h"])("div",s,[a,Object(o["h"])("div",c,[i,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return f.user.username=t}),type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:""},null,512),[[o["Q"],f.user.username]])]),Object(o["h"])("div",u,[l,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return f.user.password=t}),type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:""},null,512),[[o["Q"],f.user.password]])]),d])],32)])],64)}n("99af");var f={data:function(){return{user:{username:"littlegirlrou@yahoo.com.tw",password:"irisiris"},isLoading:!1}},methods:{signIn:function(){var t=this;console.log("process.env.VUE_APP_API");var e="".concat("https://vue3-course-api.hexschool.io/","admin/signin");console.log(e),this.isLoading=!0,this.$http.post(e,this.user).then((function(e){if(t.isLoading=!1,e.data.success){console.log(e);var n=e.data,o=n.token,r=n.expired;console.log(o,r),document.cookie="hexToken=".concat(o,"; expired=").concat(new Date(r)),t.$router.push("/dashboard/products")}}))}}},h=n("6b0d"),p=n.n(h);const m=p()(f,[["render",b]]);e["default"]=m}}]);
//# sourceMappingURL=chunk-883abc04.3d215441.js.map