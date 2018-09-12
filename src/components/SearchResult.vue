<template>
  <div class="Search-result">
    <a 
      class="Job-logo"
      href="#">
      <img
        :src = "job.logo"
        :alt = "img_alt(job.company_name)">
    </a>
    <a 
      class="Job-link"
      href="">
      <span class="Job-info">
        <span class="Job-company">{{ job.company_name }}</span>
        <span class="Job-desc">{{ job.title }}</span>
      </span>
      <span class="Job-meta">
        <i class="far fa-calendar-alt"/> {{ job.deadline }},
        <i class="fas fa-pound-sign"/> {{ job.salary }},
        {{ job.title }}
      </span>
    </a>
    <a 
      @click ="shortlist(job)"
      v-bind:class ="{ active: isActive }">
      <span>
        <i class="fa-heart" v-bind:class ="{ far: isActive, fas: !isActive }"></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    job: {
      type: Object,
      default: () => {},
    },
    jobIndex:{
      type: Number
    }
  },
  methods: {
    img_alt (name) {
      return `${name} logo`
    },
    shortlist(job, jobIndex){
      //this.$store.commit('shortlist', job)

      this.toggle()

      this.clicks += 1;
      let clicksWhenCalled = this.clicks;
      let timer = setTimeout(()=> {
        if (this.clicks == clicksWhenCalled){
          //alert('shortlisted')
          if (!this.$store.getters.isShortlisted(job)){
            console.log('hello')
            this.job.shortlisted = true;
            this.$store.commit('pushToArray', this.job, 'shortlisted');
          } else {
            // otherwise unshortlist it
            this.job.shortlisted = false;
            this.$store.commit('removeFromArray', this.job, 'shortlisted');
            alert('unshortlisted')
          }
          this.$store.commit('pushToArray', this.job, 'outgoing_notifications');
        
        } else {
          clearTimeout(timer)
          timer();
        }
      
      },3000);

    },
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  data (job) {
    return {
      isActive: this.$store.getters.isShortlisted,
      clicks: 0
    }
  },
}
</script>


<style scoped>

  .Search-result {
    display: flex;
    width: 100%;
  }
  
  a {
    text-decoration: none;
  }

  span {
    display: block;
  }

  .Job-meta {
    display: block;
    color: #666;
  }

  .Job-desc {
    font-size: 18px;
    font-weight: 700;
  }

  .Job-link {
    padding-left: 15px;
    width: 100%;
  }

  .IconHeart {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(0, -50%);
    i {
      color: red;
      font-size: 25px;
    }
  }
</style>
