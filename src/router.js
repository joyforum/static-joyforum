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
      component: Home,
      beforeEnter: (to, from, next) => {
        if (to.redirectedFrom == "/attend") {
          window.open("https://www.cvent.com/d/tyqfty/4W", "_blank");
        }
        if (to.redirectedFrom == "/attendexpo") {
          window.open("http://www.cvent.com/d/dyqvh8/4W", "_blank");
        }

        next();
      },
      children: [
        {
          path: "",
          name: "home"
        },
        {
          path: ":lang(ar|en)"
        }
      ]
    },
    {
      path: "/expo",
      component: Expo,
      children: [
        {
          path: "",
          name: "expo"
        },
        {
          path: ":lang(ar|en)"
        }
      ]
    },
    {
      path: "/conference",
      component: Conference,
      children: [
        {
          path: "",
          name: "conference"
        },
        {
          path: ":lang(ar|en)"
        }
      ]
    },
    {
      path: "/workshops",
      component: Workshops,
      children: [
        {
          path: "",
          name: "workshops"
        },
        {
          path: ":lang(ar|en)"
        }
      ]
    },
    {
      path: "/specialevents",
      component: SpecialEvents,
      children: [
        {
          path: "",
          name: "specialevents"
        },
        {
          path: ":lang(ar|en)"
        }
      ]
    },
    {
      path: "/exhibit",
      component: Exhibit,
      children: [
        {
          path: "",
          name: "exhibit"
        },
        {
          path: ":lang(ar|en)"
        }
      ]
    },
    {
      path: "/success",
      component: Success,
      children: [
        {
          path: "",
          name: "success"
        },
        {
          path: ":lang(ar|en)"
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;
    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }
    return goTo(scrollTo);
  }
});
