import { createRouter, createWebHistory } from 'vue-router'
import RandomNumber from '../components/RandomNumber.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RandomNumber
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_HASH),
  routes
})

export default router
