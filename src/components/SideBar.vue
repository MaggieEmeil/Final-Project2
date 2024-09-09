<!-- src/components/Sidebar.vue -->
<template>
  <div id="main" :class="{ 'overflow-hidden': !isSidebarOpen }">
    <!-- Navbar -->
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <!-- Toggle Button for Mobile -->
          <button @click="toggleSidebar" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 bg-blue-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <!-- Logo -->
          <router-link id="logo" to="" class="flex items-center">
            <img src="https://www.svgrepo.com/show/372594/plane.svg" class="h-8 me-3">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">HetchHicker</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Sidebar -->
    <aside id="sidebar" :class="{'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen, 'sm:translate-x-0': true}" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <router-link to="" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 me-3" viewBox="0 0 24 24" fill="currentColor">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.5 19.5L21 8.6l-7.5 2L5.4 3m0 0l1.8 7.6-2 7.5-3.2-1L3 5.4z" />
          </g>
        </svg>
        <span id="logo2" class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">HetchHicker</span>
      </router-link>
      <br />
      <div class="h-full px-3 pb-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li><router-link to="/Search-page" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Home</router-link></li>
          
          <li><router-link to="/shipments-page" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Shipments</router-link></li>
          <li><router-link to="/trips-page" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Trips</router-link></li>
          <li><router-link to="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Profile</router-link></li>
        </ul>
      </div>
    </aside>
    </div>
</template>

<script setup>
import { ref } from 'vue'
  const isSidebarOpen = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
