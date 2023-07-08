import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { createStore } from "vuex";
import AthleteData from "@/assets/data.json";

Vue.use(Vuex);
Vue.config.productionTip = false;


export const store = createStore({
  state() {
    return {
      altheticInfo: { ...AthleteData }
    };
  },
  mutations: {
    updateAlthlesName(state, value) {
      // update the althetes name here
      state.name = value
    }
  },
  actions: {
    updateAlthlesName(context) {
      context.commit('updateAlthlesName')
    }
  }
});

// Install the store instance as a plugin
new Vue({
  el: "#app",
  store,
  // Binds to the #app element in public/index.html; Only works with this ID within codesandbox
  render: (h) => h(App)
});
