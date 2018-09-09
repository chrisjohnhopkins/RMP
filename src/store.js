import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jobs: null,
    shortlisted: [],
    following: []
  },

  mutations: {
    pushJobs (state, jobs) {
      state.jobs = jobs
    }
  },

  getters: {
  },

  actions: {
  }
})

export default store