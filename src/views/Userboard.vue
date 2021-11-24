<template>
  <!-- 產品navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand btn btn-outline-light" to="/user/product"
        >❀ Products ❀
      </router-link>
    </div>
    <div>
      <router-link class="navbar-brand btn btn-outline-light" to="/user/cart"
        >♥ Cart ♥</router-link
      >
    </div>
    <div>
      <router-link class="navbar-brand btn btn-outline-light" to="/login"
        >♥ 管理者登入 ♥</router-link
      >
    </div>
  </nav>
  <div class="productBackground container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {},
};
</script>

<style>
.navbar-dark {
  background-color: rgba(255, 255, 204, 0.2);
}
body {
  background-color: rgb(10, 10, 10);
}
.table {
  color: aliceblue;
}
a {
  text-decoration: none;
}
.btn {
  border-color: transparent;
}
.btn-outline-light:hover {
  background-color: rgb(0, 0, 0);
}
.productBackground {
  background-image: url("../assets/img/012.jpg");
  background-color: rgba(150, 150, 150, 1.0);
  /* 設置背景混和模式為相乘模式 */
  background-blend-mode: multiply;

  background-attachment: fixed;
  background-position: right;
  background-size: cover;
  margin-bottom: -6%;
  /* padding-top: -5%; */
  /* background-repeat: no-repeat; */
}
</style>
