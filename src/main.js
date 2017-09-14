// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)
Vue.config.productionTip = false
Vue.use(resource)
/* eslint-disable no-new */
new Vue(
  {
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  }
)
