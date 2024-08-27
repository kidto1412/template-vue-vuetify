import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/index.vue";
import AboutView from "../pages/about.vue";
// import AboutView from "../AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    children: [
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
    ],
  },

  // Tambahkan rute lain di sini
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
