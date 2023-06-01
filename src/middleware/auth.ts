import { ACCESS_TOKEN_KEY, USER_ID } from "@/utils/constants";
import useAuthStore from "@store/auth";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

export const auth = async (
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { getUserInfo } = useAuthStore();
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
};
