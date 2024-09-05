import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
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
    {
      path: '/shipments-info',
      name: 'ShipmentsInfo',
      component: () => import('../views/ShipmentsInfo.vue')
    },

  ]
})

export default router
