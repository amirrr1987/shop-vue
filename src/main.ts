import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import "@/assets/css/bootstrap.css";
// import "@/assets/css/ui.css";
// import "@/assets/css/responsive.css";
// import "@/assets/fonts/fontawesome/css/all.min.css";

// import '@/assets/js/bootstrap.bundle.min.js'
// import '@/assets/js/script.js'

import 'ant-design-vue/dist/antd.css';
import 'virtual:windi.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
