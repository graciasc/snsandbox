import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {}
});

// Install the store instance as a plugin
