import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/routes/routes";
import "@/main.css";
import App from "@/App.vue";

// Vue initialization
const app = createApp(App);

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

app.use(router);

// Global store
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
