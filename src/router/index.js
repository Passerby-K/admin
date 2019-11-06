import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import home from '@/components/home'
// import user from '@/view/user/userList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children:[{
        path: '/',
        component : () => import('@/components/home')
      }]
    },
    {
      path: '/user',
      component: index,
      children:[{
        path: '/user',
        component : () => import('@/view/user/userList')
      }]
    },
  ]
})
