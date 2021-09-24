import Vue from 'vue'
import Vuex from '../core/mini-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    add(state) {
        console.log('m', this)
      state.counter++
    }
  },
  actions: {
    add({commit}) {
        
      setTimeout(() => {
        console.log('aad', this)
        commit('add')
      }, 1000)
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  }
})
