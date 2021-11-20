<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">範例作品</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link"
            >產品</router-link
          >
          <router-link to="/dashboard/orders" class="nav-link"
            >訂單</router-link
          >
          <router-link to="/dashboard/coupons" class="nav-link"
            >優惠券</router-link
          >
          <!-- 登出製作 -->
          <!-- click 習慣性加上 prevent 移除預設方法-->
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
      <div>
        <router-link to="/user/cart" class="nav-link">產品頁面</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      // 製作登出方法
      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%99%BB%E5%85%A5%E5%8F%8A%E9%A9%97%E8%AD%89
      const api = `${process.env.VUE_APP_API}logout`;
      console.log(api);

      // axios post(api, 欲傳送的值)方法方法
      this.$http.post(api, this.user).then((res) => {
        //
        if (res.data.success) {
          console.log(res);
          // 轉跳登入頁面
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
