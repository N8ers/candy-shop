import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Bag from "../components/Bag.vue";
import VueRouter from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/bag",
    component: Bag
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
