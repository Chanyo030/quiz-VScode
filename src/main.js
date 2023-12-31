import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 安裝 fontawesome (10、15行也是)
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// 安裝 pinia
import { createPinia } from "pinia";

library.add(fas,far,fab);


// 執行Vue環境
const app = createApp(App);
const pinia = createPinia();

app.component("font-awesome-icon", FontAwesomeIcon);

// bootstrap 的 JS 檔
import "bootstrap";

// 我們自己的 scss 入口檔案 (將main.css 改成 scss)
// 不需要點 Watch Sass 轉譯
import "./assets/main.scss";

// 安裝綁定套件
app.use(router);
app.use(pinia);

// mount 一定要放在最後面
app.mount("#app");
