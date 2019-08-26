import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Expo from "./views/Expo.vue";
import Conference from "./views/Conference.vue";
import Workshops from "./views/Workshops.vue";
import SpecialEvents from "./views/SpecialEvents.vue";
import Exhibit from "./views/Exhibit.vue";
import Success from "./views/Success.vue";

import goTo from "vuetify/lib/services/goto";

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
      name: "conference",
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
    },
    {
      path: "/exhibit",
      name: "exhibit",
      component: Exhibit
    },
    {
      path: "/success",
      name: "success",
      component: Success
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.name != from.name) {
      let scrollTo = 0;
      if (to.hash) {
        scrollTo = to.hash;
      } else if (savedPosition) {
        scrollTo = savedPosition.y;
      }
      return goTo(scrollTo);
    } else {
      return;
    }
  }
});
