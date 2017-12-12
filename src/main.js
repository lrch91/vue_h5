import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import {post,login,login2,login3,url} from './util/http'
import './assets/css/default.css'

Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$login = login
Vue.prototype.$login2 = login2
Vue.prototype.$login3 = login3
Vue.prototype.$url = url

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
