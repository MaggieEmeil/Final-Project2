<template>
  <div id="main">
    <aside
      id="sidebar"
      :class="{
        'translate-x-0': isSidebarOpen,
        '-translate-x-full': !isSidebarOpen,
        'sm:translate-x-0': true,
      }"
      class="w-64 max-h-[100vh] p-5 min-h-full transition-transform bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 "
    >
      <router-link to="" class="flex items-center">
        <span
          id="logo2"
          class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
          >HetchHicker</span
        >
      </router-link>
      <br />
      <div class="h-full px-3 pb-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <router-link
              :to="{
                name: 'searchPage',
              }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >Home</router-link
            >
          </li>

          <li>
            <router-link
              :to="{
                name: 'shipmentPage',
              }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >Shipments</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'tripsPage',
              }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >Trips</router-link
            >
          </li>
          <!-- <li>
            <router-link
              :to="{
                name: 'shipmentPage',
              }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >Profile</router-link
            >
          </li> -->
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isSidebarOpen = ref(true);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>