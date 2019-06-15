import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
      // redirect: "auth"
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("./views/Auth.vue"),
      beforeEnter: (to, from, next) => {
        const state = store.getters.userId;
        if (state) {
          next("/events");
        } else {
          next();
        }
      }
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./views/Events.vue")
    },
    {
      path: "/bookings",
      name: "bookings",
      component: () => import("./views/Bookings.vue"),
      beforeEnter: (to, from, next) => {
        const state = store.getters.userId;
        if (!state) {
          next("/auth");
        } else {
          next();
        }
      }
    }
  ]
});
