import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Friend from '@/components/Friend'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'This is Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'This is Hi',
      component: Home
    },
    {
      path: '/Friend',
      name: 'This is Hi',
      component: Friend
    }

  ]
})
