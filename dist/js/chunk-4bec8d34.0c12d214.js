(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bec8d34"],{"1dde":function(e,t,n){var o=n("d039"),r=n("b622"),s=n("2d00"),c=r("species");e.exports=function(e){return s>=51||!o((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,n){"use strict";var o=n("a04b"),r=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var c=o(t);c in e?r.f(e,c,s(0,n)):e[c]=n}},"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("da84"),s=n("d039"),c=n("e8b5"),a=n("861d"),i=n("7b0b"),u=n("07fa"),d=n("8418"),l=n("65f0"),b=n("1dde"),f=n("b622"),p=n("2d00"),h=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",w=r.TypeError,g=p>=51||!s((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),j=b("concat"),O=function(e){if(!a(e))return!1;var t=e[h];return void 0!==t?!!t:c(e)},y=!g||!j;o({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,o,r,s,c=i(this),a=l(c,0),b=0;for(t=-1,o=arguments.length;t<o;t++)if(s=-1===t?c:arguments[t],O(s)){if(r=u(s),b+r>m)throw w(v);for(n=0;n<r;n++,b++)n in s&&d(a,b,s[n])}else{if(b>=m)throw w(v);d(a,b++,s)}return a.length=b,a}})},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"container mt-5"},s={class:"col-md-6"},c=Object(o["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),a={class:"mb-2"},i=Object(o["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u={class:"mb-2"},d=Object(o["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),l=Object(o["h"])("div",{class:"text-end mt-4"},[Object(o["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function b(e,t,n,b,f,p){var h=Object(o["J"])("Loading");return Object(o["z"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(h,{active:f.isLoading},null,8,["active"]),Object(o["h"])("div",r,[Object(o["h"])("form",{onSubmit:t[2]||(t[2]=Object(o["W"])((function(){return p.signIn&&p.signIn.apply(p,arguments)}),["prevent"])),class:"row justify-content-center"},[Object(o["h"])("div",s,[c,Object(o["h"])("div",a,[i,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.user.username=e}),type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:""},null,512),[[o["Q"],f.user.username]])]),Object(o["h"])("div",u,[d,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.user.password=e}),type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:""},null,512),[[o["Q"],f.user.password]])]),l])],32)])],64)}n("99af");var f={data:function(){return{user:{username:"littlegirlrou@yahoo.com.tw",password:"irisiris"},isLoading:!1}},methods:{signIn:function(){var e=this;console.log("process.env.VUE_APP_API");var t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");console.log(t),this.isLoading=!0,this.$http.post(t,this.user).then((function(t){if(e.isLoading=!1,t.data.success){console.log(t);var n=t.data,o=n.token,r=n.expired;console.log(o,r),document.cookie="hexToken=".concat(o,"; expired=").concat(new Date(r)),e.$router.push("/dashboard/products")}}))}}},p=n("6b0d"),h=n.n(p);const m=h()(f,[["render",b]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-4bec8d34.0c12d214.js.map