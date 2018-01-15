import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import router from './routes'

Vue.config.productionTip = false


Vue.use(VueMaterial)



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
