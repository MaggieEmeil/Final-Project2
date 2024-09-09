<template>
  

    <!-- Main Content -->
    <div id="content" :class="{ 'ml-64': isSidebarOpen, 'ml-0': !isSidebarOpen }" class="transition-margin duration-300 ease-in-out">
      <SearchForm />
      <div id="cards" class="grid grid-cols-auto-fit-minmax gap-4 ">
        <CardSearch
          productName="Smartphone"
          fromCountry="USA"
          toCountry="Canada"
          deliveryDate="2024-09-30"
          :weight="2"
          userName="John Doe"
          rewardAmount="$50"
        />
         <CardSearch
          productName="Smartphone"
          fromCountry="USA"
          toCountry="Canada"
          deliveryDate="2024-09-30"
          :weight="2"
          userName="John Doe"
          rewardAmount="$50"
        /> <CardSearch
          productName="Smartphone"
          fromCountry="USA"
          toCountry="Canada"
          deliveryDate="2024-09-30"
          :weight="2"
          userName="John Doe"
          rewardAmount="$50"
        /> <CardSearch
          productName="Smartphone"
          fromCountry="USA"
          toCountry="Canada"
          deliveryDate="2024-09-30"
          :weight="2"
          userName="John Doe"
          rewardAmount="$50"
        /> <CardSearch
          productName="Smartphone"
          fromCountry="USA"
          toCountry="Canada"
          deliveryDate="2024-09-30"
          :weight="2"
          userName="John Doe"
          rewardAmount="$50"
        /> <CardSearch
          productName="Smartphone"
          fromCountry="USA"
          toCountry="Canada"
          deliveryDate="2024-09-30"
          :weight="2"
          userName="John Doe"
          rewardAmount="$50"
        />
        <!-- Repeat Card components as needed -->
      </div>
    </div>
  
</template>

<script setup>
import { ref } from 'vue'
import SearchForm from '../components/SearchBar.vue'
import CardSearch from '../components/CardSearch.vue'

const isSidebarOpen = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}

/* Sidebar */
#sidebar {
  padding-top: 5rem;
  transition: transform 0.3s ease;
}

#content {
  padding-top: 4rem; /* Adjust for the navbar height */
  transition: margin-left 0.3s ease;
  
}

/* Cards layout */
#cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48.5%, 1fr)); /* Responsive grid */
  gap: 20px;
  margin-top: 1%;
  width: 87%;
  margin-left: 6%;
}

/* Fade-in keyframes for cards */
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#cards div {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease-out forwards;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#cards div:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
