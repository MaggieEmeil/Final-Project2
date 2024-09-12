<!-- src/components/Layout.vue -->
<template>
  <!-- Header remains at the top -->
  <Header @toggleSidebar="toggleSidebar" />
  
  <div :class="{ 'grid-template-sidebar': isSidebarOpen, 'grid-template-full': !isSidebarOpen }" class="layout transition-all duration-300">
    <!-- Sidebar -->
    <Sidebar :isSidebarOpen="isSidebarOpen" />

    <!-- Main content -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from "../components/SideBar.vue";
import Header from "../components/Header.vue";

const isSidebarOpen = ref(false)

// Toggle function to open/close the sidebar
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style scoped>
/* Layout grid for when the sidebar is open */
.layout {
  display: grid;
  grid-template-rows: auto 1fr; /* Header and content */
  min-height: 100vh; /* Full screen height */
  height: 100%;
}

/* Sidebar open: Sidebar takes 250px and content fills the rest */
.grid-template-sidebar {
  grid-template-columns: 250px 1fr;
}

/* Sidebar closed: Content takes full width */
.grid-template-full {
  grid-template-columns: 0 1fr;
}

.main-content {
  padding: 1rem;
  overflow: auto; /* Ensures content is scrollable */
  transition: margin-left 0.3s ease;
  width: 70%;
    display: grid;
    margin-left: 21%;
}
</style>
