// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store'
window.$ = window.JQuery = require('jquery')
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import '@fortawesome/fontawesome/styles.css'

fontawesome.config = {
  autoAddCss: false,
}
fontawesome.library.add(brands, faSpinner)
fontawesome.library.add(brands, faSearch)
fontawesome.library.add(brands, faHeart)
fontawesome.library.add(brands, faCompass)
fontawesome.library.add(brands, faUser)
fontawesome.library.add(brands, faCog)
Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
