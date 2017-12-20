import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Attachlist from '@/components/attachlist'
import TableInfo from '@/components/tableInfo'
import ChoosePersonUnderOrg from '@/components/choosePersonUnderOrg'
import WriteOpinion from '@/components/writeOpinion'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
  },{
    path: '/choosePersonUnderOrg',
    name: 'ChoosePersonUnderOrg',
    component: ChoosePersonUnderOrg,
  },{
    path: '/writeOpinion',
    name: 'WriteOpinion',
    component: WriteOpinion,
  }]
})
