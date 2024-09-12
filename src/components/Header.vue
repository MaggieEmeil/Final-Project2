<template>
  <header>
    <nav class="top-0 z-50 w-full bg-blue-500 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <!-- Toggle Button for Mobile -->
          <button
            v-if="isMobile"
            @click="$emit('toggleSidebar')"
            class="inline-flex items-center p-2 text-sm text-black rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 bg-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          
          <!-- Logo -->
          <router-link v-if="!isMobile" id="logo" to="" class="flex items-center">
            <img src="https://www.svgrepo.com/show/372594/plane.svg" class="h-8 me-3" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">HetchHicker</span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMobile = ref(false);

function handleResize() {
  isMobile.value = window.innerWidth < 640; // Toggle for screens smaller than 640px
}

onMounted(() => {
  handleResize(); // Check initial size
  window.addEventListener('resize', handleResize); // Watch for resize events
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize); // Clean up listener
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>
