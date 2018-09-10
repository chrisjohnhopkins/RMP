<template>
  <div id="app">
    <HeaderLayout/>
    <SearchPageLayout/>
  </div>
</template>

<script>
import SearchPageLayout from './components/SearchPageLayout'
import HeaderLayout from './components/HeaderLayout'
import SearchResult from './components/SearchResult'

export default {
  name: 'App',
  components: {
    'SearchPageLayout': SearchPageLayout,
    'HeaderLayout': HeaderLayout,
    'SearchResult': SearchResult,
  },
}
</script>

<style>
  body{
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
