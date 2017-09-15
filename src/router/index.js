import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Friend from '@/components/Friend'
import Posting from '@/components/Posting'

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
      path: '/Posting',
      name: 'Posting',
      component: Posting
    }

    ]
})