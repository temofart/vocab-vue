<template>
  <div>
    <div class="enter-word">
      <input
        v-model="first"
        type="text"
        placeholder="English word">
      <input
        v-model="second"
        type="text"
        placeholder="Russian word">
      <input
        v-model="description"
        type="text"
        placeholder="Описание">
      <button @click="addWord(first, second, description)">Добавить слово</button>
    </div>
  </div>
</template>

<script>
  import { db } from '../main.js'

  export default {
    name: 'Header',
    data () {
      return {
        first: '',
        second: '',
        description: ''
      }
    },
    methods: {
      addWord(first, second, description) {
        db.collection('words').add({first, second, description})
      }
    }
  }
</script>

<style lang="scss">
  .enter-word {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #90c1f3;

    input {
      width: 200px;
      height: 50px;
      margin-left: 15px;
      padding: 0 10px;
      font-size: 26px;
      border-radius: 4px;
      outline: none;
      border: 0;
    }

    button {
      width: 200px;
      height: 50px;
      margin-left: 20px;
      border-radius: 4px;
      font-size: 20px;
      cursor: pointer;
      border: 0;
      transition: all .5s ease;
      background: linear-gradient(287deg, #00bbfe, #005cff);
      color: white;
      box-shadow: 0 15px 17px -15px #2588ed;

      &:hover {
        box-shadow: none;
      }
    }
  }
</style>

