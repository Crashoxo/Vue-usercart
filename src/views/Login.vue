<template>
  <Loading :active="isLoading"></Loading>
  <div class="container mt-5">
    <!-- 3. 製作submit事件綁方法 -->
    <form v-on:submit.prevent="signIn" class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <!-- 2. v-model雙向綁定，需有倉庫 -->
          <input
            v-model="user.username"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <!-- 2. v-model雙向綁定，需有倉庫 -->
          <input
            v-model="user.password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // 1.製作輸入值倉庫
  data() {
    return {
      user: {
        username: "littlegirlrou@yahoo.com.tw",
        password: "irisiris",
      },
      // 判斷是否要loading轉圈圈 倉庫
      isLoading: false,
    };
  },
  // 4.製作連接資料庫方法
  methods: {
    signIn() {
      // http://localhost:8080/#/login
      console.log("process.env.VUE_APP_API");

      // .env內變數
      const api = `${process.env.VUE_APP_API}admin/signin`;
      console.log(api);

      // 登入前有loding圈圈
      this.isLoading = true;

      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89
      // axios post(api, 欲傳送的值)方法方法
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;

        // 如果登入成功轉跳dashboard/products頁面
        if (res.data.success) {
          console.log(res);
          // 目標：將token存進Cookie
          // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
          const { token, expired } = res.data; //token、expired = data內的token、expired
          console.log(token, expired);
          document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;
          // 轉跳
          this.$router.push("/dashboard/products");
        }
      });
    },
  },
};
</script>
