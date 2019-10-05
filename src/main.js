import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAnalytics from "vue-analytics";
import VueGtm from "vue-gtm";
import vmodal from 'vue-js-modal';



Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV == "production";

//VueNumberAnimation
import VueNumber from "vue-number-animation";
Vue.use(VueNumber);

// VueAwesomeSwiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.use(vmodal, {componentName: "Modal"});

// analytics
Vue.use(VueAnalytics, {
  id: "UA-146433089-1",
  router,
  debug: {
    enabled: false,
    sendHitTask: isProd
  }
});

// GTM
Vue.use(VueGtm, {
  id: "GTM-W6KNLGD", // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
  enabled: isProd, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: !isProd, // Whether or not display console logs debugs (optional)
  vueRouter: router // Pass the router instance to automatically sync with router (optional)
});

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App)
}).$mount("#app");
