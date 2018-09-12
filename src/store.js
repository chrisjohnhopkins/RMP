import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    following: [],
    shortlisted: [],
    outgoing_notifications: [],
    jobs: null,
  },

  mutations: {
    pushJobs (state, jobs) {
      state.jobs = jobs
    },
    pushToArray (state, job, x) {
      state['shortlisted'].push(job)
      console.log(this)
    },
    removeFromArray (state, job, array) {
      console.log('state  :', state, 'job: ', job, 'array', array)
      state[array] = state[array].filter((item)=>{
        item.id != job.id
      })
    }
  },
  getters: {
    isShortlisted: (state) => (job)=> {
      return state.shortlisted.filter(item => item.id == job.id).length > 0
    }
  }
})

export default store