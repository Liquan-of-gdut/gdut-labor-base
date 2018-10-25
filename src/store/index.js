import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
export const commit = store.commit
