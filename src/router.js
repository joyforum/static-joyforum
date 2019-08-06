import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Expo from "./views/Expo.vue";
import Conference from "./views/Conference.vue";
import Workshops from "./views/Workshops.vue";
import SpecialEvents from "./views/SpecialEvents.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/expo",
      name: "expo",
      component: Expo
    },
    {
      path: "/conference",
      name: "home",
      component: Conference
    },
    {
      path: "/workshops",
      name: "workshops",
      component: Workshops
    },
    {
      path: "/specialevents",
      name: "specialevents",
      component: SpecialEvents
    }
  ]
});
