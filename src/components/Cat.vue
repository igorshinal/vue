<template>
  <div class="elevation-demo">
    <md-content class="md-elevation-1">
      <div class="child">Auto & Transportation</div>
    </md-content>
    <md-content class="md-elevation-2">
      <div class="child">Packaging, Advertising, Office</div>
    </md-content>
    <md-content class="md-elevation-3">
      <div class="child">Bags, Shoes & Accessories</div>
    </md-content>
    <md-content class="md-elevation-4">
      <div class="child">Apparel, Textiles & Accessories</div>
    </md-content>
    <md-content class="md-elevation-5">
      <div class="child">Metallurgy, Chemicals, Rubber & Plastics</div>
    </md-content>
    <md-content class="md-elevation-6">
      <div class="child">Home, Lights, Construction</div>
    </md-content>
    <md-content class="md-elevation-7">
      <div class="child">Agriculture & Food</div>
    </md-content>
    <md-content class="md-elevation-8">
      <div class="child">Health & Beauty</div>
    </md-content>
    <md-content class="md-elevation-9">
      <div class="child">Electronics</div>
    </md-content>
    <md-content class="md-elevation-10">
      <div class="child">Gifts, Sports & Toys</div>
    </md-content>
    <md-content class="md-elevation-11">
      <div class="child">Electrical Equipment, Components & Telecoms</div>
    </md-content>
    <md-content class="md-elevation-12">
      <div class="child">Machinery, Industrial Parts & Tools</div>
    </md-content>
  </div>
</template>

<script>
  export default {
    name: "Cat"
  }
</script>

<style lang="scss" scoped>

  @import '../assets/css/variables';

  .elevation-demo {
    justify-content: center;
    padding: 16px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
  }

  .md-content {
    cursor: pointer;
    font-size: $font-size;
    color: #243238;
    border: $border;
    margin: -1px -1px 0 0;
    box-shadow: none !important;
    display: flex;
    align-items: center;
    width: 160px;
    height: 160px;
    justify-content: center;
    &:hover {
      box-shadow: $box-shadow;
    }
    .child {
      font-family: $font-family;
      width: 140px;
      text-align: center;
    }
  }
</style>
