import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Posting from '@/components/Posting'
import Friend from '@/components/Friend'
import comment from '@/components/comment'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'This is Home',
      component: Hello
    },
    {
      path: '/Posting',
      name: 'Posting',
      component: Posting
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    }

    ]
})