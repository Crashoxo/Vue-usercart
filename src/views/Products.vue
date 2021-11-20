<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <!-- 抓ref.productModal 使用 showModal()-->
    <!-- 因為把ProductModal元件抓來用了 所以可以使用showModal() -->
    <!-- v-on:click="$refs.productModal" -->
    <!-- 傳送參數true = 點此按鈕時新增商品-->
    <button v-on:click="openModal(true)" class="btn btn-primary" type="button">
      增加一個產品
    </button>
  </div>
  <div>
    <table class="table mt-4">
      <thead>
        products.vue
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <!-- 7. 渲染 -->
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <!-- 使用區域匯入方法 -->
          <td class="text-right">{{ currency(item.origin_price) }}</td>
          <!-- 使用全域匯入方法 -->
          <td class="text-right">{{ $filters.currency(item.price) }}</td>
          <td>
            <!-- 8. 判斷是否啟用(1 or 0)，並套用各class -->
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <!-- "openModal(false,item) , item = v-for="item in products"-->
            <!-- false = 點此按鈕時非新增商品 = 編輯商品 -->
            <div class="btn-group">
              <button
                v-on:click="openModal(false, item)"
                class="btn btn-outline-primary btn-sm"
              >
                編輯
              </button>
              <button
                v-on:click="openDelProductModal(item)"
                class="btn btn-outline-danger btn-sm"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </div>
  <!-- 使用元件 ref似id 之後可以用this.$refs抓 -->
  <!-- 製作傳送資料 v-bind props-->
  <!-- 製作接受emit資料 v-on:update-product="updateProduct"-->
  <ProductModal
    :product="tempProduct"
    v-on:update-product="updateProduct"
    ref="productModal"
  ></ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct" />
</template>

<script>
// 引用元件 元件內的 data methods mounted 都可以拿來用
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";

//匯入分頁元件
import Pagination from "@/components/Pagination.vue";

//千分號 方法匯入
import { currency } from "../methods/filters.js";

export default {
  data() {
    return {
      products: [],
      // 1.分頁資訊
      pagination: {},
      // 新增產品倉庫
      tempProduct: {},
      // 判斷是否新增商品
      isNew: false,
      // 判斷是否要loading轉圈圈 倉庫
      isLoading: false,
    };
  },
  components: {
    // 區域註冊元件
    ProductModal,
    DelModal,
    Pagination,
  },
  // 引用emitter (因 Dashboard.vue provide )
  inject: ["emitter"],
  methods: {
    // 千分號 方法引用
    currency,

    // 2.產品列表 (撈資料)
    // page = 1 預設
    getProducts(page = 1) {
      // 3.使用API抓值 取得商品列表及分頁
      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      // 撈到資料前有loding圈圈
      this.isLoading = true;
      console.log("api", api);

      // 4.axios get(api, 欲傳送的值)方法
      this.$http.get(api).then((res) => {
        // 撈到資料loding圈圈關閉
        this.isLoading = false;
        if (res.data.success) {
          console.log("res", res);
          // 6. 把 產品資訊 products 與 分頁資訊 pagination 存起來
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },

    // 按鈕跳窗方法
    // (是否新增, 帶入產品資料)
    openModal(isNew, item) {
      // if isNew = true
      if (isNew) {
        // 新增商品
        this.tempProduct = {};
      } else {
        // 編輯商品
        // ... 展開舊的item
        this.tempProduct = { ...item };
      }
      // 儲存狀態
      this.isNew = isNew;
      // this.$refs.productModal = html 內 <ProductModal ref="productModal"></ProductModal>
      const productComponent = this.$refs.productModal;
      // 顯示<ProductModal ref="productModal"></ProductModal> (方法在ProductModal.vue)
      productComponent.showModal();
    },
    updateProduct(item) {
      // 從內層(ProductModal.vue)接收資料, 送進tempProduct倉庫
      this.tempProduct = item;
      let api = ""; //API初始化
      let httpMethod = ""; //api (get,post,put,delect)方法初始化
      console.log(this.isNew);
      this.isLoading = true;
      if (this.isNew) {
        // 新增
        // API使用方式 取得商品列表
        // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%95%86%E5%93%81%E5%BB%BA%E7%AB%8B
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
        httpMethod = "post";
        console.log("新增");
      } else {
        // 編輯
        // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E4%BF%AE%E6%94%B9%E7%94%A2%E5%93%81
        console.log("修改");
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      // this.$refs.productModal = html 內 <ProductModal ref="productModal"></ProductModal>
      const productComponent = this.$refs.productModal;
      // axios post(api, 欲傳送的值)方法方法
      // title(String)、category(String)、unit(String)、origin_price(Number)、price(Number) 為必填欄位
      // [動態，隨時抽換]
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false;
        // then 成功
        console.log(res);
        // 執行 ProductModal.vue 的 hideModal()
        productComponent.hideModal();

        // 錯誤訊息(吐司樣式) 判斷式
        if (res.data.success) {
          this.getProducts();
          this.emitter.emit("push-message", {
            style: "success",
            title: "更新成功",
          });
        } else {
          this.emitter.emit("push-message", {
            style: "danger",
            title: "更新失敗",
            content: res.data.message.join("、"),
          });
        }
        // 但 吐司錯誤訊息程式碼 會因為點擊越來越多，故拆開 製作成另一方法
        // 因此 methods > pushMessageState.js 
        // 並 全域匯入 給 Coupons.vue & Orders.vue 用
        // 邏輯：因為直接用全域只會有全域一個倉庫(提升效能)，但區域就會到處都有倉庫
      });
    },

    // 開啟刪除 Modal
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    // API 刪除產品
    // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E5%88%AA%E9%99%A4%E7%94%A2%E5%93%81
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.isLoading = false;
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },

  //  5.生命週期 馬上執行
  created() {
    this.getProducts();
  },
  mounted() {
    console.log("refs", this.$refs.productModal);
  },
};
</script>
