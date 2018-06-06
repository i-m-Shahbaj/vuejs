// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store'
window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuex)
Vue.http.options.root = 'http://example.localhost/api/v1'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
