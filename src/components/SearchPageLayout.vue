<template>
  <main class="Search-Container">
    <ol 
      v-if="$store.state.jobs && $store.state.jobs.length" 
      class="Job">
      <li 
        v-for ="(job, index) in $store.state.jobs"
        :key="index"
        class="Job-item Group"
      >
        <SearchResult :job="job"/>
      </li>
    </ol>
  </main>
</template>

<script>
import axios from 'axios'

import SearchResult from './SearchResult'

export default {
  name: 'SearchPage',
  components: {
    'SearchResult': SearchResult,
  },
  data() {
    return {
      config: {
        getResultsUrl: '/api/search/jobs',
      },
      ui: {
        loading: true,
      },
    }
  },

  mounted() {
    this.getResults()
  },

  methods: {
    getResults: function() {
      axios.get(this.config.getResultsUrl).then((response) => {
        this.$store.commit('pushJobs', response.data)
      })
    }
  },
}
</script>

<style scoped type="text/less" lang="less">
  .Search-Container {
    max-width: 700px;
    margin: auto;
    padding: 0 15px;
  }

  .Job {
    margin:0 0 60px 0;
    width: 100%;
    padding: 0;
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
    /*padding: 0;*/
    text-align: left;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  }

  .Job-item {
    padding: 15px;
    border-bottom: 1px solid #dddddd;
    display: block;
    list-style: none;
    position: relative;
    &:last-child {
      border: none;
    }
  }

  .Job-item,
  .Group {
    display: flex;
  }


</style>
