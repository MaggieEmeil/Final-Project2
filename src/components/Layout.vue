<!-- src/components/Layout.vue -->
<template>
  <div class="flex h-screen">
    <Sidebar />
    <main class="flex-1 p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/SideBar.vue'; // Adjust the path as needed
</script>

<style scoped>
/* Add custom styles if needed */
</style>
