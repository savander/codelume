import { createApp } from "vue";
import App from "@/App.vue";
import "@/main.css";

import { createPinia } from "pinia";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/routes/routes";

import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

// Vue initialization
const app = createApp(App);

// Global store
const pinia = createPinia();
app.use(pinia);

// Routing
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

app.use(router);

// AutoAnimate plugin
app.use(autoAnimatePlugin);

app.mount("#app");
