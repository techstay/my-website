import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ClientInfo from '@/components/ClientInfo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/clientinfo',
      name: 'ClientInfo',
      component: ClientInfo
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
