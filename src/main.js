import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import plugin from './plugin/indicator/index'
import FastClick from 'fastclick'
import {post,login,url} from './util/http'
import './assets/css/default.css'

// Vue.use(mint)
Vue.use(plugin)

/* document.addEventListener('touchstart',function (event) {  
  if(event.touches.length>1){  
      event.preventDefault();  
  }  
})  
var lastTouchEnd=0;  
document.addEventListener('touchend',function (event) {  
  var now=(new Date()).getTime();  
  if(now-lastTouchEnd<=300){  
      event.preventDefault();  
  }  
  lastTouchEnd=now;  
},false)   */


FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$login = login
Vue.prototype.$url = url

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
