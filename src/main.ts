import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/assets/css/bootstrap.css";
import "@/assets/css/ui.css";
import "@/assets/css/responsive.css";
import "@/assets/fonts/fontawesome/css/all.min.css";

import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/js/script.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
