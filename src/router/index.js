import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloMenu from '@/components/HelloMenu'
import HelloIndex from '@/views/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloMenu',
      component: HelloMenu
    },
    {
      path: '/index',
      name: '订餐',
      component: HelloIndex
    }
  ]
})
