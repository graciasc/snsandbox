import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { store } from "./store";
Vue.config.productionTip = false;
Vue.use(Vuex);
new Vue({
  el: "#app",
  // Binds to the #app element in public/index.html; Only works with this ID within codesandbox
  render: (h) => h(App)
});
