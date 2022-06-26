import {createApp} from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";
import store from "./stores/index.js";

// const pinia = createPinia()
const app = createApp(App)

// app.use(pinia)
app.use(store)
app.use(router)

app.mount('#app')
