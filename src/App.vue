<template>
  <div id="app">
    <Header/>
    <Store/>
  </div>
</template>

<script>
import Header from './components/Header'
import Store from './components/Store'

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