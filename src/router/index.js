import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/log-in',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/search-page',
      name: 'SearchPage',
      component: () => import('../views/SearchPage.vue')
    },
    {
      path: '/trips-page',
      name: 'TripsPage',
      component: () => import('../views/TripsPage.vue')
    },
    {
      path: '/shipments-page',
      name: 'ShipmentsPage',
      component: () => import('../views/ShipmentsPage.vue')
    },

  ]
})

export default router
