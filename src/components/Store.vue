<template>
  <div>
    <div v-for="(word, idx) in words" :key="idx">
      <h1>{{ word.word_first }}</h1>
      <h1>{{ word.word_second }}</h1>
      <h1>{{ word.word_descr }}</h1>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import { db } from '../main.js'

  export default {
    name: 'Store',
    data () {
      return {
        words: []
      }
    },
    firestore () {
      return {
        words: db.collection('words')
      }
    }
  }
</script>
