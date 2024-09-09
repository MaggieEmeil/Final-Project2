<template>
  <div class="search-form top-0 left-0 w-full bg-gray-100 p-6 rounded-b-lg shadow-md z-50 fade-in">
    <!-- Search Fields -->
    <div class="grid gap-6 md:grid-cols-3">
      <!-- From Location -->
      <div class="flex items-center bg-white rounded-lg shadow-sm input-field">
        <span class="text-gray-500 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.121a4 4 0 0 1 0-5.657L16.95 1.637a4 4 0 0 1 5.657 5.657L10.778 18.93a4 4 0 0 1-5.657 0z" />
          </svg>
        </span>
        <input
          v-model="fromLocation"
          type="text"
          placeholder="From (City, Country)"
          class="w-full p-3 bg-transparent outline-none rounded-r-lg"
        />
      </div>

      <!-- To Location -->
      <div class="flex items-center bg-white rounded-lg shadow-sm input-field">
        <span class="text-gray-500 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.121a4 4 0 0 1 0-5.657L16.95 1.637a4 4 0 0 1 5.657 5.657L10.778 18.93a4 4 0 0 1-5.657 0z" />
          </svg>
        </span>
        <input
          v-model="toLocation"
          type="text"
          placeholder="To (City, Country)"
          class="w-full p-3 bg-transparent outline-none rounded-r-lg"
        />
      </div>

      <!-- Custom Date Picker with Icon -->
      <div class="relative max-w-sm date-picker">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </div>
        <input
          v-model="departureDate"
          type="date"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Select date"
        />
      </div>

      <!-- Weight Input -->
      <div class="flex items-center bg-white rounded-lg shadow-sm input-field">
        <span class="text-gray-500 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4v2a1 1 0 0 0 1 1h2v12h10V7h2a1 1 0 0 0 1-1V4M5 4h14M7 12h4m-4 4h4" />
          </svg>
        </span>
        <input
          v-model="weight"
          type="number"
          step="0.1"
          placeholder="Weight (kg)"
          class="w-full p-3 bg-transparent outline-none rounded-r-lg"
        />
      </div>
    </div>

    <!-- Toggle Switch for Shipments and Trips -->
    <div class="flex justify-center mt-4">
      <div class="flex bg-gray-200 rounded-full p-1 w-auto">
        <router-link
          to="/shipments"
          :class="[
            'px-6 py-2 rounded-full text-sm font-semibold transition duration-200',
            activeTab === 'shipments' ? 'bg-gray-400 text-white' : 'text-black'
          ]"
          @click="() => setActiveTab('shipments')"
        >
          Shipments
        </router-link>
        <router-link
          to="/trips"
          :class="[
            'px-6 py-2 rounded-full text-sm font-semibold transition duration-200',
            activeTab === 'trips' ? 'bg-gray-400 text-white' : 'text-black'
          ]"
          @click="() => setActiveTab('trips')"
        >
          Trips
        </router-link>
      </div>
    </div>

    <!-- Search Button -->
    <button
      @click="searchShipments"
      class="search-button bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
      Search
    </button>

    <!-- Display Results -->
    <div v-if="results.length" class="mt-6">
      <h2 class="text-xl font-bold mb-4">Search Results</h2>
      <ul>
        <li v-for="(result, index) in results" :key="index" class="border-b py-2 result-item">
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';

const fromLocation = ref('');
const toLocation = ref('');
const departureDate = ref('');
const weight = ref('');
const activeTab = ref('shipments');
const results = ref([]);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const searchShipments = async () => {
  try {
    // Make a POST request to the backend with the input data
    const response = await axios.post('/api/search', {
      from: fromLocation.value,
      to: toLocation.value,
      date: departureDate.value,
      weight: parseFloat(weight.value) || 0,
    });
    // Update the results with the fetched data
    results.value = response.data;
  } catch (error) {
    console.error('Search Error:', error);
  }
};

// Watchers to fetch data from backend whenever inputs change
watch([fromLocation, toLocation, departureDate, weight], (newValues, oldValues) => {
  if (newValues.some((value, index) => value !== oldValues[index])) {
    searchShipments();
  }
}, { immediate: true });
</script>

<style scoped>
.search-form {
  backdrop-filter: blur(10px); 
  background-color: rgba(255, 255, 255, 0.8); 
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1px;
  opacity: 0;
  animation: fadeIn 1s forwards;
  width: 87%;
    margin-left: 6%;
}

.input-field {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.input-field:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

.date-picker {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.date-picker:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

.search-button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.search-button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}

.result-item {
  transition: background-color 0.3s ease, padding-left 0.3s ease;
}

.result-item:hover {
  background-color: #f0f4f8;
  padding-left: 10px;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
