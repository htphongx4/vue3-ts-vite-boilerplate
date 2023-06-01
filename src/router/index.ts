import { routes } from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
});

router.afterEach((to) => {
  const defaultDocumentTitle = "Vue 3 + Vite App";
  if (to.name) {
    document.title = `${String(to.name)} — ${defaultDocumentTitle}`;
  } else {
    document.title = defaultDocumentTitle;
  }
});

export default router;
