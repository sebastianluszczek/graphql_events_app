import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "auth"
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("./views/Auth.vue")
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./views/Events.vue")
    },
    {
      path: "/bookings",
      name: "bookings",
      component: () => import("./views/Bookings.vue")
    }
  ]
});
