<!-- src/components/Layout.vue -->
<template>
  <Header class="" />
  <div class="mt-14 layout">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from "../components/SideBar.vue"; // Adjust the path as needed
import Header from "../components/Header.vue"; // Adjust the path as needed
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 1000px;
  height: 100%;
}
</style>
