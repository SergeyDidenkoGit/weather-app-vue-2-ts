import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Pages } from "@/enums/pages";
import Main from "@/pages/Main.vue";
import Favorites from "@/pages/Favorites.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/weather-app/",
    name: Pages.MAIN,
    component: Main,
  },
  {
    path: "/weather-app/favorites",
    name: Pages.FAVORITES,
    component: Favorites,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router




