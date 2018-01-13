<template>
  <div class="elevation-demo">
    <md-content class="md-elevation-1">1</md-content>
    <md-content class="md-elevation-2">2</md-content>
    <md-content class="md-elevation-3">3</md-content>
    <md-content class="md-elevation-4">4</md-content>
    <md-content class="md-elevation-5">5</md-content>
    <md-content class="md-elevation-6">6</md-content>
    <md-content class="md-elevation-7">7</md-content>
    <md-content class="md-elevation-8">8</md-content>
    <md-content class="md-elevation-9">9</md-content>
    <md-content class="md-elevation-10">10</md-content>
    <md-content class="md-elevation-11">11</md-content>
    <md-content class="md-elevation-12">12</md-content>
    <md-content class="md-elevation-13">13</md-content>
  </div>
</template>

<script>
  export default {
    name: "Cat"
  }
</script>

<style lang="scss" scoped>

  .elevation-demo {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  .md-content {
    cursor: pointer;
    border: 1px solid #cfd8dc;
    margin: -1px -1px 0 0;
    box-shadow: none !important;
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      box-shadow: 0 10px 10px 0 rgba(36,50,56,0.2)!important;
    }
  }

</style>
