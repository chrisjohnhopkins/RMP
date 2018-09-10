import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    following: [],
    shortlisted: [],
    jobs: null,
  },

  mutations: {
    pushJobs (state, jobs) {
      state.jobs = jobs
    },
    shortlist (state, job) {
      if (this.getters.isShortlisted(job) > 0){
        state.shortlisted = state.shortlisted.filter((item)=>{
          item.id != job.id
        })
      } else {
        state.shortlisted.push(job);
      }
    }
  },
  getters: {
    isShortlisted: (state) => (job)=> {
      return state.shortlisted.filter(item => item.id == job.id).length
    }
  }
})

export default store