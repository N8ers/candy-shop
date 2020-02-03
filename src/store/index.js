import Vuex from "vuex";
import Vue from "vue";
import bag from "./modules/bag";
import candy from "./modules/candy";

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  modules: {
    bag,
    candy
  }
});
