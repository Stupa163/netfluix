import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

Vue.config.productionTip = false;

new Vue({
  mode: 'history',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
