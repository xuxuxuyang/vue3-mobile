import { createApp } from 'vue'
import App from './App.vue'
// 初始化CSS
import './css/reset.css'
//引入SPA路由
import  router from './Router'
//引入pinia数据管理
import pinia from './Stores'

//引入vant组件库
import 'vant/lib/index.css';

createApp(App).use(router).use(pinia).mount('#app')






