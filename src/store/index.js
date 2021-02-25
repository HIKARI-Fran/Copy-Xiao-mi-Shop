import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    cartNum: 0
  },
  mutations: {
    saveUserName(state, username) {
      state.username = username
    },
    saveCartNum(state, cartNum) {
      state.cartNum = cartNum
    }
  },
  actions: {
    saveUserName(context, username) {
      context.commit('saveUserName', username)
    },
    saveCartNum(context, cartNum) {
      context.commit('saveCartNum', cartNum)
    }
  },
  modules: {}
})
