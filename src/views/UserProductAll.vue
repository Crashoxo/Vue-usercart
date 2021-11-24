<template>
  <!-- 產品總頁面/購物車 -->
  <div>
    <Loading :active="isLoading"></Loading>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="../assets/img/a01.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>
              The greatest test of courage on earth is to bear defeat without
              losing heart.
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/img/a03.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>
              Life is the art of drawing sufficient conclusions form
              insufficient premises.
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/img/a02.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              There's only one corner of the universe you can be sure of
              improving, and that's your own self.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container">
      <!-- 卡片 -->
      <h1 class="title">可使用 管理者登入</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- transition-group 下必須馬上接 v-for 才吃的到 key-->
        <transition-group appear @before-enter="beforeEnter" @enter="enter">
          <div
            class="col"
            v-for="(item, key) in products"
            :data-index="key"
            :key="item.id + key"
          >
            <div class="card product">
              <img
                v-on:click.prevent="getProduct(item.id)"
                :src="`${item.imageUrl}`"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ item.title }}</h5>
                <div class="card-text text-center">
                  <div class="h5" v-if="!item.price">
                    {{ item.origin_price }} 元
                  </div>
                  <br />
                  <del class="h6" v-if="item.price"
                    >original price NT {{ item.origin_price }}
                  </del>

                  <div class="h5" v-if="item.price">
                    special offer NT {{ $filters.currency(item.price) }} -
                  </div>
                </div>
              </div>
              <button
                @click="getProduct(item.id)"
                type="button"
                class="btn btn-outline-secondary"
                style="font-weight: bold"
              >
                SEE MORE
              </button>
              <!-- API需要product_id(String)、qty(Number) -->
              <!-- 樣式：disabled 按鈕不能按 -->
              <!-- 如果倉庫收到的值 === 當前id -->
              <button
                v-on:click="addCart(item.id)"
                v-bind:disabled="this.status.loadingItem === item.id"
                type="button"
                class="btn btn-outline-danger"
                style="font-weight: bold"
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
                Add Cart
              </button>
            </div>
          </div>
        </transition-group>
      </div>

      <h1 class="title2">以下中文版產品列表</h1>

      <!-- 產品列表 -->
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
              <!-- transition-group 下必須馬上接 v-for 才吃的到 key-->
              <transition-group
                appear
                @before-enter="beforeEnterBottom"
                @enter="enterBottom"
              >
                <tr
                  v-for="(item, key) in products"
                  :data-index="key"
                  :key="item.id"
                >
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
                    <a
                      href=""
                      v-on:click.prevent="getProduct(item.id)"
                      class="btn-outline-light btn"
                      >{{ item.title }}</a
                    >
                  </td>
                  <td>
                    <div class="h5" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del class="h6" v-if="item.price"
                      >原價 {{ item.origin_price }} 元</del
                    >
                    <div class="h5" v-if="item.price">
                      現在只要 {{ $filters.currency(item.price) }} 元
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
              </transition-group>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div style="height: 500px"></div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        this.isLoading = false;
        console.log("res", res);
        this.$httpMessageState(res, "加入購物車 Add Cart"); //太上面了看不到
        // 轉跳登入頁面
        // this.$router.push("/user/cart");
      });
    },
    beforeEnter(el) {
      console.log("aaa");
      el.style.opacity = 0;
      el.style.transform = "translateY(60px)";
    },
    enter(el) {
      console.log("aaa");
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(el, {
        opacity: 1,
        // x: 100,
        y: 0,
        duration: 1,
        delay: el.dataset.index * 0.2,
        scrollTrigger: {
          trigger: el,
          // 在這個情境 trigger 要是物件，不是選擇器
          toggleActions: "play none none none",
          // scrub: true, // 物件動畫根據卷軸捲動程度跑
          start: "top center",
          // end: "+=100",
          // markers: true,
        },
      });
    },
    beforeEnterBottom(el) {
      console.log("aaa");
      el.style.opacity = 0;
      el.style.transform = "translateY(60px)";
    },
    enterBottom(el) {
      console.log("aaa");
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(
        el,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          delay: el.dataset.index * 0.2,
          scrollTrigger: {
            trigger: el,
            // 在這個情境 trigger 要是物件，不是選擇器
            toggleActions: "play none none none",
            // scrub: true, // 物件動畫根據卷軸捲動程度跑
            start: "top center",
            // end: "+=100",
            // markers: true,
          },
        },
        "1"
      );
    },
  },
  // 生命週期，網頁開始就跑
  created() {
    this.getProducts();
  },
  mounted() {
    // title動畫
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".title", {
      opacity: 0,
      duration: 1,
      y: 0,
      x: 100,
      // delay: 0.2,
      scrollTrigger: {
        trigger: ".title",
        // 在這個情境 trigger 要是物件，不是選擇器
        toggleActions: "play none none none",
        scrub: true, // 物件動畫根據卷軸捲動程度跑
        start: "top center",
        end: "",
        // markers: true,
      },
    });
    gsap.to(".title2", {
      // opacity: 0,
      // duration: 1,
      // y: 0,
      // x: 100,
      // scrollTrigger: {
      //   trigger: ".title2",
      //   // 在這個情境 trigger 要是物件，不是選擇器
      //   toggleActions: "play none none none",
      //   scrub: true, // 物件動畫根據卷軸捲動程度跑
      //   start: "top",
      //   // markers: true,
      // },
    });
  },
};
</script>

<style>
.title {
  font-size: 5rem;
  color: #b18d89;
  background-color: rgb(63, 31, 28, 0.8);
  /* 平均分給上下 */
  line-height: 250px;
  text-align: center;
  height: 250px;
  margin: 50px;
}
.title2 {
  font-size: 5rem;
  color: #b18d89;
  background-color: rgb(63, 31, 28, 0.8);
  /* 平均分給上下 */
  line-height: 250px;
  text-align: center;
  height: 250px;
  margin: 50px;
}
.btn {
  border-color: transparent;
  /* border: 0px solid; */
}
.btn-outline-light:hover {
  color: #ffeb7b;
  /* border-block-color: transparent; */
  /* border: 0px; */
  background-color: transparent;
}
.product {
  background-color: rgba(240, 241, 243, 0.8);
}
@media screen and (max-width: 800px) {
  .title {
    height: auto;
    font-size: 2rem;
    line-height: 100px;
    text-align: center;
    height: 100px;
    margin: 10px;
  }
  .title2 {
    height: auto;
    font-size: 2rem;
    line-height: 100px;
    text-align: center;
    height: 100px;
    margin: 10px;
  }
}
</style>
