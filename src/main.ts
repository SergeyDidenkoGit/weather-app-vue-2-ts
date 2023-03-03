import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UI from "@/components/UI";

Vue.config.productionTip = false;

UI.forEach((UI) => {
  Vue.component(UI.name, UI);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
