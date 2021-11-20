<template>
  <Navber></Navber>
  <div>Dashboard</div>
  <!-- 讓版面不要太貼齊周邊 BS樣式 -->
  <div class="container-fluid mt-3 position-relative">
    <!-- 跳錯誤吐司訊息 元件 -->
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import Navber from "../components/Navbar.vue";
import ToastMessages from "@/components/ToastMessages.vue";
import emitter from "@/methods/emitter";

export default {
  // 註冊元件
  components: {
    Navber,
    ToastMessages,
  },
  // provide 讓內部可以使用該元件
  provide() {
    return {
      emitter,
    };
  },
  created() {
    //   https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    const token = document.cookie.replace(
      // 1.從cookie拿出token
      // hexToken cookie名稱
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(token);
    // https://github.com/axios/axios
    // 2.token 放入 Header, 用axios方法
    // 因為main已經全域套用axios, 可直接呼叫
    this.$http.defaults.headers.common.Authorization = token;

    // 3.登入驗證
    // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89
    const api = `${process.env.VUE_APP_API}api/user/check`;
    console.log(api);
    this.$http.post(api, this.user).then((res) => {
      console.log(res);
      // 如果登入失敗Dashboard.vue會轉回Login.vue
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
