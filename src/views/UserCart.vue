<template>
  <div>
    <!-- 購物車列表 -->
    <div class="my-5 row justify-content-center">
      <!-- col-md-6 寬度 -->
      <div class="col-md-6">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="status.loadingItem === item.id"
                      @click="removeCartItem(item.id)"
                    >
                      <!-- 使用material-icons main.js已匯入 -->
                      <span class="material-icons-outlined"> clear </span>
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm mx-4">
                      <!-- 預防增減數量太快 讀取中禁止使用(disabled) -->
                      <!-- :disabled="item.id === status.loadingItem" -->
                      <!-- v-on:change改變 觸發 -->
                      <input
                        v-model.number="item.qty"
                        min="1"
                        v-on:change="updateCart(item)"
                        :disabled="item.id === status.loadingItem"
                        type="number"
                        class="form-control"
                      />
                      <div class="input-group-text">
                        / {{ item.product.unit }}
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cart.final_total !== cart.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    <!-- $filters 全域方法 變更$格式 -->
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <!-- 如果不相同 顯示此tr -->
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">
                  {{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                v-on:click="addCouponCode"
                class="btn btn-outline-secondary"
                type="button"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 結帳頁面 -->
    <!-- 使用vee-validate套件 對應標籤(main.js)-->
    <!-- v-slot 插入文字or外部標籤 vee-validate套件用法 引入zh_TW.json-->
    <!-- 邏輯：利用v-slot抓全部的zh_TW.json再靠rules="email|required"判斷，v-slot顯示文字-->
    <div class="my-5 row justify-content-center">
      <Form class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: {
        // 小小讀取效果 + 購物車按鈕暫時無法執行 倉庫
        loadingItem: "", //對應品項id
      },
      cart: {},
      coupon_code: "", //優惠卷
      // 表單資料
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      // 供轉址使用
      orderId: "",
    };
  },
  methods: {
    // 抓購物車內容
    // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E8%B3%BC%E7%89%A9%E8%BB%8A%E5%88%97%E8%A1%A8
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log("抓購物車內容", response);
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    updateCart(item) {
      // API 更新購物車
      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E6%9B%B4%E6%96%B0%E8%B3%BC%E7%89%A9%E8%BB%8A
      // product_id(String)、qty(Number) 為必填欄位 才能計算
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id; // 按下按鈕送id，賦值給倉庫
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        this.status.loadingItem = ""; // 按下按鈕送id，賦值給倉庫
        console.log("res", res);
        this.getCart();
      });
    },
    // 移除購物車商品
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, "移除購物車品項"); //吐司跳窗
        this.status.loadingItem = "";
        this.getCart();
        this.isLoading = false;
      });
    },
    // 使用優惠卷
    // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%A5%97%E7%94%A8%E5%84%AA%E6%83%A0%E5%88%B8
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, "加入優惠券"); //吐司跳窗
        this.getCart();
        this.isLoading = false;
      });
    },
    // 建立訂單
    createOrder() {
      this.isLoading = true;
      // API 結帳頁面
      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E7%B5%90%E5%B8%B3%E9%A0%81%E9%9D%A2
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res); // orderId
        this.isLoading = false;
        // 後端有方法會直接清空購物車
        this.getCart();

        // 抓ID送轉跳網址列
        this.orderId = res.data.orderId;
        this.$router.push(`checkout/${this.orderId}`);
      });
    },
  },
  // 生命週期，網頁開始就跑
  created() {
    this.getCart();
  },
};
</script>
