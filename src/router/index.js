import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import New from '@/components/New'
import Class from '@/components/Class'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/class/:id',
      name: 'class',
      component: Class
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
