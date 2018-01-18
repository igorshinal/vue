<template>
    <div class="elevation-demo">

      <md-content class="md-elevation-1">
        <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
        <div class="child">Less container Load (LCL)</div>
      </md-content>
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Full container Load (FCL)</div>
        </md-content>
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Air cargo load</div>
        </md-content>
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Road Haulage</div>
        </md-content>
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Rail Freight</div>
        </md-content>
    </div>


</template>
<script>
  export default {
    name: 'Transport'
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/transport.scss';
</style>
