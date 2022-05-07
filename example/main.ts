/*
 * @Author: Yaowen Liu
 * @Date: 2022-03-11 16:26:27
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-05-07 15:23:17
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
