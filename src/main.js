import "./styles/main.scss";

import Vue from "vue";
import router from "./router";
import store from "./store";

import App from "./components/App";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
