import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import class1 from '@/components/class1'
import Home from '@/components/Home'
import login from '@/components/login'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'This is Hello',
      component: Hello
    },
    {
      path: '/class1/:id',
      name: 'This is Hi',
      component: class1
    },
    {
      path: '/Home',
      name: 'This is Hi',
      component: Home
    },{
      path:'/login',
      name:'Tis is login',
      component:login
    }

  ]
})
