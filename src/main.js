import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { lazyLoad } from "./directives/lazyLoad.client";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.directive("lazy-load", lazyLoad);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
