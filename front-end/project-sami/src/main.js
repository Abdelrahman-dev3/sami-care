import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import './assets/styles/home.css'
import './assets/styles/layout-header.css'
import './assets/styles/motion.css'
const app = createApp(App).use(router)
router.isReady().then(() => app.mount('#app'))
