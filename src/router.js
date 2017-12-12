import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Attachlist from '@/components/attachlist'
import TableInfo from '@/components/tableInfo'

Vue.use(Router)

export default new Router({
  routes:
  [{
    path: '/main',
    name: 'Main',
    component: Main,
    alias: '/'
  },{
    path: '/attachlist',
    name: 'Attachlist',
    component: Attachlist,
  },{
    path: '/tableInfo',
    name: 'TableInfo',
    component: TableInfo,
  }]
})
