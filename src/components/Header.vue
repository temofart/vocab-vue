<template>
  <div>
    <div class="enter-word">
      <input id="word" type="text" placeholder="English word">
      <input id="translate" value="" type="text" placeholder="Russian word">
      <input id="description" value="" type="text" placeholder="Описание">
      <button id="addWord">Добавить слово</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
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

  .all-words {
    padding: 50px;
    background: #FBEFFB;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    min-height: 100vh;
  }

  .item {
    border: 1px solid #dedede;
    border-radius: 5px;
    margin: 10px 15px;
    background: #fff;
    box-shadow: 2px 2px 4px #dedede;
    transition: all .3s ease;
    min-width: 200px;
    min-height: 100px;
    cursor: pointer;
    position: relative;

    &:hover {
      box-shadow: 0px 0px 5px 3px #90c1f3;;
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

  .close {
    width: 10px;
    height: 10px;
    display: inline-block;
    position: absolute;
    top: 5px;
    right: 5px;
    /*background: url('../img/close.svg') no-repeat center center;*/
    padding: 3px;
  }
</style>

