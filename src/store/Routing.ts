import { defineStore } from "pinia";
import { shallowRef } from "vue";
import Home from "@/routes/Home.vue";
import Info from "@/routes/Info.vue";

const routes = {
  home: Home,
  info: Info,
};

export type RouteName = keyof typeof routes;

export const useRouting = defineStore("routing", () => {
  const currentPage = shallowRef(routes["home"]);

  const setCurrentPage = (routeName: RouteName) => {
    currentPage.value = routes[routeName];
  };

  return {
    currentPage,
    setCurrentPage,
  };
});
