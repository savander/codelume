import Home from "@/routes/Home.vue";
import Info from "@/routes/Info.vue";

export const routes = {
  home: Home,
  info: Info,
};

export type RouteName = keyof typeof routes;

export const defaultRoute: RouteName = "home";
