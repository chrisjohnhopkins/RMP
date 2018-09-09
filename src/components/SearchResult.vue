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
      href=""
      class="IconLike">
      <!-- <span class="IconHeart IconHeart--unlike">
            <i class="fas fa-heart"></i>
          </span>
          -->
      <span class="IconHeart IconHeart--like">
        <i class="far fa-heart"/>
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
  },
  methods: {
    img_alt (name) {
      return `${name} logo`
    }
  }
}
</script>


<style scoped>

  .Search-result {
    display: flex;
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
    width: ~'calc(100% - 130px)';
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
