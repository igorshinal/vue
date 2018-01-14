<template>
  <div class="elevation-demo">
    <md-content class="md-elevation-1">
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
  <div class="child">Auto & Transportation</div>
    </md-content>
    <md-content class="md-elevation-2">
      <div class="child">Packaging, Advertising, Office</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-3">
      <div class="child">Bags, Shoes & Accessories</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-4">
      <div class="child">Apparel, Textiles & Accessories</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-5">
      <div class="child">Metallurgy, Chemicals, Rubber & Plastics</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-6">
      <div class="child">Home, Lights, Construction</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-7">
      <div class="child">Agriculture & Food</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-8">
      <div class="child">Health & Beauty</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-9">
      <div class="child">Electronics</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-10">
      <div class="child">Gifts, Sports & Toys</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-11">
      <div class="child">Electrical Equipment, Components & Telecoms</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
    </md-content>
    <md-content class="md-elevation-12">
      <div class="child">Machinery, Industrial Parts & Tools</div>
      <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
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
    background: $background;
    justify-content: center;
    padding: 16px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: center;
  }
  .md-content {
    cursor: pointer;
    font-size: $font-size;
    color: $color;
    border: $border;
    margin: -1px -1px 0 0;
    box-shadow: none !important;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 165px;
    height: 165px;
    &:hover {
      box-shadow: $box-shadow;
    }
    .child {
      margin-top: 25px;
      position: absolute;
      font-family: $font-family;
      width: 150px;
      text-align: center;
    }
  }
  .img {
    margin-top: 30px;
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 60px;
      background-size: contain;
    }
  }


</style>
