const Login = () =>
  import(/* webpackChunkName: "login" */ "@/pages/login/index.vue");
const Register = () =>
  import(/* webpackChunkName: "Register" */ "@/pages/register/Register.vue");
const ForgotPassword = () =>
  import(
    /* webpackChunkName: "forgot password" */ "@/pages/forgot-password/ForgotPassword.vue"
  );
const DashboardLayout = () =>
  import(/* webpackChunkName: "dashboard layout" */ "@/layouts/dashboard.vue");
const DashboardPage = () =>
  import(
    /* webpackChunkName: "dashboard page" */ "@/pages/dashboard/index.vue"
  );
const ProfilePage = () =>
  import(/* webpackChunkName: "users" */ "@/pages/profile/index.vue");

const CategoryPage = () =>
  import(/* webpackChunkName: "users" */ "@/pages/category/index.vue");

const CartPage = () =>
  import(/* webpackChunkName: "users" */ "@/pages/cart/index.vue");

const ProductPage = () =>
  import(/* webpackChunkName: "users" */ "@/pages/product/index.vue");

export {
  DashboardLayout,
  DashboardPage,
  ForgotPassword,
  Login,
  ProfilePage,
  Register,
  CategoryPage,
  CartPage,
  ProductPage
};
