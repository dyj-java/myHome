import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'

// 顺序不能错：先use路由，再mount
createApp(App).use(router).mount('#app')
