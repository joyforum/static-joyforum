import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV == "production";

//VueNumberAnimation
import VueNumber from "vue-number-animation";
Vue.use(VueNumber);

// VueAwesomeSwiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

// analytics
Vue.use(VueAnalytics, {
  id: "UA-146433089-1",
  router,
  debug: {
    enabled: false,
    sendHitTask: isProd
  }
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
