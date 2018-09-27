<template>
  <div class="all-words">
    <div 
      v-for="(word, idx) in words"
      :key="idx"
      class="item">
      <div class="word first-word">{{ word.first }}</div>
      <div class="word second-word">{{ word.second }}</div>
      <div class="word description">{{ word.description }}</div>
      <div @click="removeWord(word.id)" class="close"/>
    </div>
  </div>
</template>

<script>
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
    },
    methods: {
      removeWord(id) {
        db.collection('words').doc(id).delete()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .all-words {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    min-height: 300px;
  }

  .close {
    display: none;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 5px;
    right: 5px;
    background: url('../assets/close.svg') no-repeat center center;
    padding: 3px;
  }

  .item {
    border: 1px solid #dedede;
    border-radius: 5px;
    margin: 10px 15px;
    background: #fff;
    box-shadow: 2px 2px 4px #dedede;
    transition: all .3s ease;
    min-width: 200px;
    max-height: 100px;
    cursor: pointer;
    position: relative;

    &:hover {
      box-shadow: 0px 0px 5px 3px #90c1f3;

      .close {
        display: inline-block;
      }
    }

    .word {
      height: 33.3%;
      display: flex;
      align-items: center;
      padding: 0 5px;

      &.first-word {
        background: #E6E6E6;
      }

      &.second-word {
        background: #F2F2F2;
      }

      &.description {
        background: white;
        font-size: 12px;
      }
    }
  }
</style>

