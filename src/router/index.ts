import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import EmptySlots from '../views/EmptySlots.vue'
import ComponentState from '../views/ComponentState.vue'
import VuexState from '../views/VuexState.vue'
import MirageAPI from '../views/MirageAPI.vue'
import ServerAPI from '../views/ServerAPI.vue'

Vue.use(VueRouter)

const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
  {
    path: '/',
    name: 'Empty Slots',
    component: EmptySlots
  },
  {
    path: '/slot',
    name: 'Empty Slots',
    component: EmptySlots
  },
  {
    path: '/local',
    name: 'Component State',
    component: ComponentState
  },
  {
    path: '/vuex',
    name: 'Vuex State',
    component: VuexState
  },
  {
    path: '/mirage',
    name: 'Mirage API',
    component: MirageAPI
  },
  {
    path: '/serverAPI',
    name: 'Server',
    component: ServerAPI
  }
]

const router = new VueRouter({
  routes
})

export default router
