import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
  },
  {
    path: "/boards/:id",
    name: "Board",
    component: () => import(/* webpackChunkName: "board" */ "@/views/Board"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
