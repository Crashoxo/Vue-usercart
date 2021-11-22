<template>
  <!-- 產品總頁面/購物車 -->
  <h1 class="aaa">Hello world, askie.</h1>

  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-4">
      <!-- "col-md-7" -->
      <div class="">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>
                <a href="#" class="text-dark">{{ item.title }}</a>
              </td>
              <td>
                <div class="h5" v-if="!item.price">
                  {{ item.origin_price }} 元
                </div>
                <del class="h6" v-if="item.price"
                  >原價 {{ item.origin_price }} 元</del
                >
                <div class="h5" v-if="item.price">
                  現在只要 {{ item.price }} 元
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="getProduct(item.id)"
                  >
                    查看更多
                  </button>
                  <!-- API需要product_id(String)、qty(Number) -->
                  <!-- 樣式：disabled 按鈕不能按 -->
                  <!-- 如果倉庫收到的值 === 當前id -->
                  <button
                    v-on:click="addCart(item.id)"
                    v-bind:disabled="this.status.loadingItem === item.id"
                    type="button"
                    class="btn btn-outline-danger"
                  >
                    <!-- BS樣式 -->
                    <!-- https://getbootstrap.com/docs/5.1/components/spinners/ -->
                    <div
                      v-if="this.status.loadingItem === item.id"
                      class="spinner-grow spinner-grow-sm text-danger"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 分頁元件 -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        // 小小讀取效果 + 購物車按鈕暫時無法執行 倉庫
        loadingItem: "", //對應品項id
      },
      cart: {},
      // 供轉址使用
      orderId: "",
      // 分頁資訊
      pagination: {},
      // 判斷是否要loading轉圈圈 倉庫
      isLoading: false,
    };
  },
  // 引用emitter (因 Dashboard.vue provide )
  inject: ["emitter"],
  methods: {
    getProducts() {
      // 商品 啟用 才會顯示在前台
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log("products:", response);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      // 推給 index.js網址列
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      // 新增購物車
      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8A%A0%E5%85%A5%E8%B3%BC%E7%89%A9%E8%BB%8A
      this.status.loadingItem = id; // 按下按鈕送id，賦值給倉庫
      console.log("id", id);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ""; //資料庫更新成功後，空
        console.log("res", res);
        // 轉跳登入頁面
        this.$router.push("/user/cart");
      });
    },
  },
  // 生命週期，網頁開始就跑
  created() {
    this.getProducts();
  },
};
</script>

<style>
.aaa {
  font-size: 2rem;
  color: rgb(0, 0, 0);
  background-color: blueviolet;
}
</style>
