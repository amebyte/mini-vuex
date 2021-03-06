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
    add({ commit }, payload) {
        
      setTimeout(() => {
        console.log('aad', this)
        commit('add', payload)
      }, 1000)
    }
  },
  getters: {
    doubleCounter(state) {console.log('state', state)
      return state.counter * 2
    }
  }
})
