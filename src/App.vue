<template>
  <div id="app">
    <cat></cat>
    <transport></transport>
    <add></add>
  </div>
</template>

<script>
  import Add from './components/Additional'
  import Cat from './components/Cat'
  import Transport from './components/Transport'
  export default {
    name: 'app',
    data() {
      return {
        msg: ''
      }
    },
    components: {
      Add,
      Cat,
      Transport
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Rokkitt', serif;
    font-size: 14px;
  }

</style>
