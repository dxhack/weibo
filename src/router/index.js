import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import New from '@/components/New'
import Class from '@/components/Class'
import Home from '@/components/Home'

import login from '@/components/login'
import Friend from '@/components/Friend'
import Posting from '@/components/Posting'
import comment from '@/components/comment'


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
    },
    {
      path: '/Hello',
      name: 'This is Home',
      component: Hello
    },
    {
      path: '/Friend',
      name: 'This is Hi',
      component: Friend
    },
    {
      path:'/login',
      name:'Tis is login',
      component:login
    },
      {
        path: '/Posting',
        name: 'Posting',
        component: Posting
    },{
      path: '/comment',
      name: 'comment',
      component: comment
    }
  ]
})

