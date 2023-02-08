import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/dogs.vue";
import Dog from "../pages/dog.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dog/:dogUrl", component: Dog, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
