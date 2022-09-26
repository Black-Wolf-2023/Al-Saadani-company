import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue')
  },
  {
    path: '/machine',
    name: 'machine',
    component: () => import('../views/MachineView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-1",
  linkExactActiveClass: "active-2"
})

export default router
