<template>
  <div id="app">
    <Header/>
    <Store/>
  </div>
</template>

<script>
import Store from './components/Store'
import Header from './components/Header'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Header,
    Store
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Philosopher');
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Philosopher', sans-serif;
  }
</style>
