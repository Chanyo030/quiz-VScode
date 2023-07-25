import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 安裝 fontawesome (10、15行也是)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

// 執行Vue環境
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

// bootstrap 的 JS 檔
import "bootstrap"

// 我們自己的 scss 入口檔案 (將main.css 改成 scss)
// 不需要點 Watch Sass 轉譯
import './assets/main.scss'



// 安裝綁定套件
app.use(router)

// mount 一定要放在最後面
app.mount('#app')
