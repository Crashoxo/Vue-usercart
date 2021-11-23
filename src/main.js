import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// BS Js
import "bootstrap";
// or get all of the named exports for further usage
// import * as bootstrap from 'bootstrap';  //錯誤所以註解 about Eslink = import "bootstrap";

// axios匯入
// https://www.npmjs.com/package/vue-axios
import axios from "axios";
import VueAxios from "vue-axios";

// 讀取動畫套件
// Import component
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

//bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
//material Icons
import "material-icons/iconfont/material-icons.css";

// 1.vee-validate 套件 檢查表單輸入值 有無錯誤
// https://vee-validate.logaretm.com/v4/
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate"; //標籤名稱
import AllRules from "@vee-validate/rules"; //規則
import { localize, setLocale } from "@vee-validate/i18n"; //語言包
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json"; //錯誤提示包

// 將轉千位數 及 時間方法 匯入
import { currency, date } from "./methods/filters.js";

// 錯誤訊息吐司增加 for Coupons.vue & Orders.vue
import $httpMessageState from "./methods/pushMessageState";

//2.製作 vee-validate 裡面的方法都抓出來用
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale("zh_TW");

const app = createApp(App);

// 全域定義 方法
// https://v3.cn.vuejs.org/api/application-config.html#globalproperties
app.config.globalProperties.$filters = {
  // 轉千位數 及 時間方法
  currency,
  date,
};

// 全域定義 方法
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

// axios引用
app.use(VueAxios, axios);
app.use(router);

// 3.vee-validate引用 於該網頁使用標籤
// 全域註冊
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);

// 全域註冊 因為多數網頁用的到
app.component("Loading", Loading);

app.mount("#app");
