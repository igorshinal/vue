import Vue from 'vue'
import Router from 'vue-router'
import Cat from '../components/Cat'
import Transport from '../components/Transport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/transport',
      name: 'Transport',
      component: Transport
    }
  ]
})
