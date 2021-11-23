import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    // http://localhost:8080/#/login
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    // http://localhost:8080/#/dashboard
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    // 多個，陣列
    children: [
      {
        // http://localhost:8080/#/dashboard/products
        path: "products",
        component: () => import("../views/Products.vue"),
      },
      {
        // http://localhost:8080/#/dashboard/orders
        path: "orders",
        component: () => import("../views/Orders.vue"),
      },
      {
        // http://localhost:8080/#/dashboard/coupons
        path: "coupons",
        component: () => import("../views/Coupons.vue"),
      },
    ],
  },
  {
    // 使用者頁面
    // http://localhost:8080/#/user
    path: "/user",
    component: () => import("../views/Userboard.vue"),
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("../views/index.vue"),
      },
      {
        path: "product",
        component: () => import("../views/UserProductAll.vue"),
      },
      {
        // 搭配$route.params
        path: "product/:productId",
        component: () => import("../views/UserProduct.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/UserCart.vue"),
      },
      {
        // 搭配$route.params
        path: "checkout/:orderId",
        component: () => import("../views/UserCheckout.vue"),
      },
      {
       
        path: "777",
        component: () => import("../views/777.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(), //# 模擬後端路徑
  routes,
});

export default router;
