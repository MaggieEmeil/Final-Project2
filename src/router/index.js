import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'; // Ensure this path is correct
import SearchPage from '@/views/SearchPage.vue'; // Ensure this path is correct
import LoginPage from '@/views/LogIn.vue'; // Ensure this path is
import ShipmentsPage from '@/views/ShipmentsPage.vue'; // Ensure this path is correct
import TripsPage from '@/views/TripsPage.vue'; // Ensure this path is correct
// import Section4 from '@/views/Section4.vue'; // Ensure this path is correct

// import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'search-page', component: SearchPage },
      { path: 'login', component: LoginPage } ,      // { path: 'section3', component: Section3 },
      { path: 'shipments-page', component: ShipmentsPage  },
      { path: 'trips-page', component: TripsPage  },
      { path: '', redirect: '' }, // Redirect to default section if needed
    ],
  },
];

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routers,
//   routes: [
//     {
//       path: '/',
//       name: 'LogIn',
//       component: () => import('../views/LogIn.vue')
//     },
//     {
//       path: '/sign-up',
//       name: 'SignUp',
//       component: () => import('../views/SignUp.vue')
//     },
   
//     {
//       path: '/search-page',
//       name: 'SearchPage',
//       component: () => import('../views/SearchPage.vue')
//     },
//     {
//       path: '/trips-page',
//       name: 'TripsPage',
//       component: () => import('../views/TripsPage.vue')
//     }
//     ,
//     {
//       path: '/TripsPage/:trips-info',
//       name: 'TripsInfo',
//       component: () => import('../views/TripsInfo.vue')
//     },
//     {
//       path: '/shipments-page',
//       name: 'ShipmentsPage',
//       component: () => import('../views/ShipmentsPage.vue')
//     },
//     {
//       path: '/shipments-info',
//       name: 'ShipmentsInfo',
//       component: () => import('../views/ShipmentsInfo.vue')
//     },

//   ]
// })
const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,})
     
export default router
