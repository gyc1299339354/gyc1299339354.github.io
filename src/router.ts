import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/views/Loading/Loading.vue'
import Home from '@/views/Home/Home.vue'
import Egoonet from '@/views/Egoonet/Egoonet.vue'
import Dada from '@/views/Dada/Dada.vue'
import Hanlan from '@/views/Hanlan/Hanlan.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'loading',
    component: Loading
  }, {
    path: '/home',
    name: 'home',
    // component: () => import( /* webpackChunkName: "home" */ './views/Home/Home.vue')
    component: Home
  }, {
    path: '/company/egoonet',
    name: 'company_egoonet',
    // component: () => import( /* webpackChunkName: "company_egoonet" */ './views/Egoonet/Egoonet.vue')
    component: Egoonet
  }, {
    path: '/company/dada',
    name: 'company_dada',
    // component: () => import( /* webpackChunkName: "company_dada" */ './views/Dada/Dada.vue')
    component: Dada
  }, {
    path: '/company/hanlan',
    name: 'company_hanlan',
    // component: () => import( /* webpackChunkName: "company_hanlan" */ './views/Hanlan/Hanlan.vue')
    component: Hanlan
  }]
})
