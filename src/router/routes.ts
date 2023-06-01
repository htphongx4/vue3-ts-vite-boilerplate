import { auth, checkLoggedIn } from "@/middleware";
import {
  DashboardLayout,
  DashboardPage,
  ForgotPassword,
  Login,
  ProfilePage,
  Register,
  CategoryPage,
  CartPage,
  ProductPage,
} from "./import";

export const routes = [
  {
    name: "Login",
    path: "/login",
    beforeEnter: checkLoggedIn,
    component: Login,
  },
  {
    name: "Register",
    path: "/register",
    beforeEnter: checkLoggedIn,
    component: Register,
  },
  {
    name: "Forgot password",
    path: "/forgot-password",
    beforeEnter: checkLoggedIn,
    component: ForgotPassword,
  },
  {
    name: "Dashboard Layout",
    path: "/",
    component: DashboardLayout,
    beforeEnter: auth,
    children: [
      {
        name: "Home Page",
        path: "/",
        component: DashboardPage,
      },
      {
        name: "Profile Page",
        path: "profile",
        component: ProfilePage,
      },
      {
        name: "Category Page",
        path: "/:categoryId",
        component: CategoryPage,
      },
      {
        name: "Cart Page",
        path: "/cart",
        component: CartPage,
      },
      {
        name: "Product Details Page",
        path: "/p/:productId",
        component: ProductPage,
      },
    ],
  },
];
