import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout.vue";
import SearchPage from "@/views/SearchPage.vue";
import LoginPage from "@/views/LogIn.vue";
import ShipmentsPage from "@/views/ShipmentsPage.vue";
import TripsPage from "@/views/TripsPage.vue";

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/home",
    component: Layout,
    children: [
      { path: "", name: "searchPage", component: SearchPage },
      {
        path: "shipments-page",
        name: "shipmentPage",
        component: ShipmentsPage,
      },
      {
        path: "shipments-info",
        name: "ShipmentsInfo",
        component: () => import("../views/ShipmentsInfo.vue"),
      },
      {
        path: "trips",
        name: "tripsPage",
        component: () => import("../views/TripsPage.vue"),
      },
      {
        path: "trips-page/:tripId",
        name: "TripsInfo",
        component: () => import("../views/TripsInfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
