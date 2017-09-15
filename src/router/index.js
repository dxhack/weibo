import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
<<<<<<< HEAD
import class1 from '@/components/class1'
import Home from '@/components/Home'
import login from '@/components/login'

=======
import Friend from '@/components/Friend'
import Posting from '@/components/Posting'
>>>>>>> 3a35a4c93031fdb56c092e1fc5216c8a3c294645

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'This is Hello',
      component: Hello
    },
    {
      path: '/Friend',
      name: 'This is Hi',
      component: Friend
    },
    {
<<<<<<< HEAD
      path: '/Home',
      name: 'This is Hi',
      component: Home
    },{
      path:'/login',
      name:'Tis is login',
      component:login
=======
      path: '/Posting',
      name: 'Posting',
      component: Posting
>>>>>>> 3a35a4c93031fdb56c092e1fc5216c8a3c294645
    }

    ]
})