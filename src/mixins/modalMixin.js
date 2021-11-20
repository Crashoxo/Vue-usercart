// 把重複的放進來
// 載入 BS Modal
import Modal from "bootstrap/js/dist/modal";

export default {
  methods: {
    showModal() {
      this.modal.show(); //顯示
    },
    hideModal() {
      this.modal.hide(); //隱藏
    },
  },
  // html跑完的時候執行(此時抓html的DOM元素)
  mounted() {
    //  6. 使用BS modal的方法 把 ref="modal" 放進來 裝進 this.modal
    //  https://bootstrap5.hexschool.com/docs/5.1/components/modal/#methods
    this.modal = new Modal(this.$refs.modal); // this.modal = 建立一個Modal去抓 html ref 的 modal
    // this.modal.show(); //顯示
  },
};
