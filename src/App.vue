<template>
  <div id="app">
    <cat></cat>
  </div>
</template>

<script>
  import Cat from './components/Cat.vue'

  export default {

    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Cat
    }
  }
</script>

<style lang="scss">

</style>
