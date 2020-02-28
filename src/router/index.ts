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
  {
    path: '/',
    name: 'Home',
    component: Home
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
