import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

//VueNumberAnimation
import VueNumber from "vue-number-animation";
Vue.use(VueNumber);

// VueAwesomeSwiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
