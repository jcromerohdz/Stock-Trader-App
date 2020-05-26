import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { routes } from './routes'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

