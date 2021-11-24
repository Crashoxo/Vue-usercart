<template>
  <Loading :active="isLoading"></Loading>
  <div style="height: 100px"></div>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <!-- $filters 全域方法 變更$格式 -->
            <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">Total</td>
            <!-- $filters 全域方法 變更$格式 -->
            <td class="text-end">{{ $filters.currency(order.total) }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款 Not Paid Yet</span>
              <span v-else class="text-success"
                >付款完成 Payment completed</span
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-danger">確認付款去 Confirm Payment</button>
      </div>
    </form>
    <div style="height: 400px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: "",
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      //  API 取得某一筆訂單
      //  https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E6%9F%90%E4%B8%80%E7%AD%86%E8%A8%82%E5%96%AE
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          console.log(this.order);
        }
      });
    },
    payOrder() {
      //  API 結帳付款
      //  https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E7%B5%90%E5%B8%B3%E4%BB%98%E6%AC%BE
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    // $route.params 抓網址列用
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    // 刷新頁面
    this.getOrder();
  },
};
</script>
