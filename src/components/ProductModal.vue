<template>
  <div>
    <!-- 1. 放入 BS Modal -->
    <!-- 4. ref似id 之後可以用this.$refs抓-->
    <div
      ref="modal"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label"
                    >或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input
                    v-on:change="uploadfile"
                    ref="fileInput"
                    type="file"
                    id="customFile"
                    class="form-control"
                  />
                </div>
                <img class="img-fluid" alt="" />
                <!-- 延伸技巧，多圖 -->
                <div class="mt-5">
                  <div class="mb-3 input-group">
                    <input
                      type="url"
                      class="form-control form-control"
                      placeholder="請輸入連結"
                    />
                    <button type="button" class="btn btn-outline-danger">
                      移除
                    </button>
                  </div>
                  <div>
                    <button
                      class="btn btn-outline-primary btn-sm d-block w-100"
                    >
                      新增圖片
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input
                      v-model="tempProduct.category"
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input
                      v-model="tempProduct.unit"
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      v-model.number="tempProduct.origin_price"
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input
                      v-model.number="tempProduct.price"
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    v-model="tempProduct.description"
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    v-model="tempProduct.content"
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      v-model="tempProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <!-- $emit 資料內傳外 -->
            <button
              v-on:click="$emit('update-product', tempProduct)"
              type="button"
              class="btn btn-primary"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ = src
import modalMixin from "@/mixins/modalMixin";

// 2.製作元件方法
export default {
  // props外傳內，props接收
  props: {
    product: {
      // 收到物件表示收到資料(修改)*********
      type: Object,
      // 預設值 如果tempProduct沒傳遞進來(新增)*********
      default() {
        //空物件
        return {};
      },
    },
  },
  // 監聽，如果product變更 寫入
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  mixins: [modalMixin],
  data() {
    return {
      // 3.製作跳窗倉庫
      modal: {},
      // 接收外層(products.vue)輸入資料 倉庫 Or v-model
      tempProduct: {},
    };
  },
  methods: {
    //   https://bootstrap5.hexschool.com/docs/5.1/components/modal/#methods

    uploadfile() {
      // 抓取檔案
      // this.$refs.fileInput = ref="fileInput"
      const uploadfile = this.$refs.fileInput.files[0];
      console.dir(uploadfile);
      // 製作成FormData格式
      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E4%B8%8A%E5%82%B3%E5%9C%96%E7%89%87
      const formData = new FormData(); //Js
      formData.append("file-to-upload", uploadfile); // "file-to-upload" API接收格式

      //API收圖片 表單傳送 action
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      //  axios post(api, 欲傳送的值)方法方法
      this.$http.post(url, formData).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.tempProduct.imageUrl = response.data.imageUrl;
        }
      });
    },
  },
};
</script>
