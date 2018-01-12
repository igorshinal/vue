import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'


Vue.use({ VueMaterial })
Vue.use(VueRouter)


new Vue({
  el: '#app',
  render: h => h(App)
})
