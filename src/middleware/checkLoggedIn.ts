import { ACCESS_TOKEN_KEY } from "@/utils/constants";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

const checkLoggedIn = async (
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (access_token) {
    next("/");
  } else {
    next();
  }
};

export { checkLoggedIn };
