import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  token: window.localStorage.getItem('authToken'),
  user: window.localStorage.getItem('user')
}

const mutations = {
  updateToken (state, token) {
    state.token = token
    window.localStorage.setItem('authToken', token)
  },
  updateUser (state, user) {
    state.user = user
    window.localStorage.setItem('user', JSON.stringify(user))
  }

}

export default new Vuex.Store({
  state,
  mutations
})
