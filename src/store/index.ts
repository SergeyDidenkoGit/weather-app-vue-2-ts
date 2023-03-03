import Vue from "vue";
import Vuex from "vuex";
import { ipModule } from "@/store/modules/ipModule/ipModule";
import { weatherModule } from "@/store/modules/weatherModule/weatherModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ipModule,
    weatherModule,
  },
});
