import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: localStorage.getItem("session_id") || null,
      username: ""
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
