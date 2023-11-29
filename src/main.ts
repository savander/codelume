import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";

// Global store
const pinia = createPinia();

// Vue initialization
const app = createApp(App);

app.use(pinia);
app.mount("#app");
