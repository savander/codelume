import { defineStore } from "pinia";
import { shallowRef } from "vue";
import { routes, RouteName, defaultRoute } from "@/routes/routes";

export const useRouting = defineStore("routing", () => {
  const currentPage = shallowRef(routes[defaultRoute]);

  const setCurrentPage = (routeName: RouteName) => {
    currentPage.value = routes[routeName];
  };

  return {
    currentPage,
    setCurrentPage,
  };
});
