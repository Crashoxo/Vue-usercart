<template>
  <!-- 產品各別頁面 -->
  <Loading :active="isLoading"></Loading>
  <div class="container justify-content-center pt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/product">Products</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center color">
      <article class="col-lg-8">
        <h2>{{ product.title }}</h2>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
      </article>
      <div class="col-lg-4 col-sm-12 pt-5">
        <hr />
        <div
          class="color"
        >
          <div class="color m-3">{{ product.content }}</div>
          <div class="color m-3">{{ product.description }}</div>
        </div>
         <hr />
        <div class="h5 m-3" v-if="!product.price">
          {{ product.origin_price }} 元
        </div>
        <del class="h6 m-3" v-if="product.price"
          >original price {{ product.origin_price }} 元</del
        >
        <div class="h5 m-3" v-if="product.price">
          special offer {{ product.price }} 元
        </div>
        <div class="input-group mb-3 m-3">
          <!-- v-model 綁定方法：text、textarea、number 抓輸入值 -->
          <!-- 此時qty會自動抓值 -->
          <input
            v-model="qty"
            min="1"
            number
            type="number"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          @click="addToCart(product.id, qty)"
          type="button"
          class="btn btn-outline-danger w-100 m-3"
          style="font-weight: bold"
        >
          <!-- BS樣式 -->
          <!-- https://getbootstrap.com/docs/5.1/components/spinners/ -->
          <div
            v-if="this.status.loadingItem === product.id"
            class="spinner-grow spinner-grow-sm text-danger"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          Add Cart
        </button>
      </div>
    </div>
  </div>
  <div style="height: 400px"></div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      id: "",
      qty: 1,
      status: {
        // 小小讀取效果 + 購物車按鈕暫時無法執行 倉庫
        loadingItem: "", //對應品項id
      },
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart(id, qty) {
      console.log(qty);
      this.status.loadingItem = id; // 按下按鈕送id，賦值給倉庫
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.status.loadingItem = ""; //資料庫更新成功後，空
        this.isLoading = false;
        this.$httpMessageState(response, "加入購物車 Add Cart");
        this.$router.push("/user/cart");
      });
    },
  },
  created() {
    // $route.params 抓網址列用
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>

<style>
.color {
  color: #ffeb7b;
}
</style>
