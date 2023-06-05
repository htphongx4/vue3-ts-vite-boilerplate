import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { storeToRefs } from "pinia";
import useAuthStore from "@/store/auth";
import { ACCESS_TOKEN_KEY, USER_ID } from "@/utils/constants";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
});

// const unAuthPages = ["login", "register", "forgot-password"];

router.beforeEach(async (from, to, next) => {
  const { getUserInfo } = useAuthStore();
  const { loggedIn } = storeToRefs(useAuthStore());
  if (from.meta.requiresAuth && !loggedIn) {
    const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
    const userId = localStorage.getItem(USER_ID);

    if (access_token && userId) {
      try {
        const user = await getUserInfo(userId);

        if (user) {
          next();
        }
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        next(`/login?redirect=${to.path}`);
      }
    } else {
      next(`/login?redirect=${to.path}`);
    }
  } else {
    next();
  }
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
