<template>
  <div
    class="toast-container position-absolute pe-3 top-0 end-0"
    style="z-index: 1050"
  >
    <!-- Toast 元件內的訊息 會有好幾筆 使用 v-for -->
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
// 吐司元件 引用
import Toast from "@/components/Toast.vue";

export default {
  // 吐司元件 區域註冊
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  // 引用emitter (因 Dashboard.vue provide )
  inject: ["emitter"],
  // 生命週期(html跑完)
  mounted() {
    this.emitter.on("push-message", (message) => {
      console.log(message);
      //  解析附值 ES6
      const { style, title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
