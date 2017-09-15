import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
      path: '/',
      name: 'Posting',
      component: Posting
    }

  ]
})
