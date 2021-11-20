<template>
  <!-- 吐司元件 -->

  <!-- BS 吐司樣式 -->
  <!-- ref="toast" = this.$refs.toast-->
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="toast-header">
      <span
        :class="`bg-${msg.style}`"
        class="p-2 rounded me-2 d-inline-block"
      ></span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>
<script>
import Toast from "bootstrap/js/dist/toast";

export default {
  name: "Toast",
  // 接 ToastMessages.vue msg
  props: ["msg"],
  mounted() {
    // html ref="toast"
    const toastEl = this.$refs.toast;
    // 製作吐司(物件, 參數)
    const toast = new Toast(toastEl, {
      delay: 6000,
    });
    // 顯示
    toast.show();
  },
};
</script>
