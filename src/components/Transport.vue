<template>

    <div class="elevation-demo">
      <router-link :to="{ name: 'Additional' }">
      <md-content class="md-elevation-1">
        <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
        <div class="child">Less container Load (LCL)</div>
      </md-content>
      </router-link>
      <router-link :to="{ name: 'Additional' }">
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Full container Load (FCL)</div>
        </md-content>
      </router-link>
      <router-link :to="{ name: 'Additional' }">
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Air cargo load</div>
        </md-content>
      </router-link>
      <router-link :to="{ name: 'Additional' }">
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Road Haulage</div>
        </md-content>
      </router-link>
      <router-link :to="{ name: 'Additional' }">
        <md-content class="md-elevation-1">
          <div class="img"><img src="../assets/img/suv.svg" alt=""></div>
          <div class="child">Rail Freight</div>
        </md-content>
      </router-link>
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
