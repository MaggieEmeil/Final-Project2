<template>
  <div>
    <!-- Search Form -->
    <div class="search-form top-0 left-0 w-full bg-gray-100 p-6 rounded-b-lg shadow-md z-50 fade-in">
      <!-- Search Fields -->
      <div class="grid gap-6 md:grid-cols-3">
        
        <!-- From Location (Dropdown) -->
        <div class="flex items-center bg-white rounded-lg shadow-sm input-field">
          <span class="text-gray-500 px-4">
            <img src="https://www.svgrepo.com/show/314476/plane-departure-solid.svg" class="h-6 me-3 rounded-full"/>
          </span>
          <select v-model="fromLocation" class="w-full p-3 bg-transparent outline-none rounded-r-lg">
            <option value="" disabled>From (City, Country)</option>
            <option v-for="location in locations" :key="location" :value="location">
              {{ location }}
            </option>
          </select>
        </div>

        <!-- To Location (Dropdown) -->
        <div class="flex items-center bg-white rounded-lg shadow-sm input-field">
          <span class="text-gray-500 px-4">
            <img src="https://www.svgrepo.com/show/314477/plane-arrival-solid.svg" class="h-6 me-3 rounded-full"/>
          </span>
          <select v-model="toLocation" class="w-full p-3 bg-transparent outline-none rounded-r-lg">
            <option value="" disabled>To (City, Country)</option>
            <option v-for="location in locations" :key="location" :value="location">
              {{ location }}
            </option>
          </select>
        </div>

        <!-- Custom Date Picker -->
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
            <img src="https://www.svgrepo.com/show/323633/weight.svg" class="h-6 me-3 rounded-full"/>
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

      <!-- Search Button -->
      <div class="mt-4 flex justify-center">
        <button
          @click="search"
          class="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      <!-- Toggle Switch for Shipments and Trips -->
      <div class="mt-4 flex justify-center">
        <button
          @click="fetchShipmentsData"
          :class="[
            'px-4 py-2 rounded-full mr-2 text-lg font-semibold',
            showShipments ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 border-2 border-gray-500 hover:bg-gray-100'
          ]"
        >
          Shipments
        </button>
        <button
          @click="fetchTripsData"
          :class="[
            'px-4 py-2 rounded-full text-lg font-semibold',
            showTrips ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 border-2 border-gray-500 hover:bg-gray-100'
          ]"
        >
          Trips
        </button>
      </div>
    </div>

    <!-- Display Cards for Shipments and Trips (Outside of Search Form) -->
    <div class="mt-8">
      <div v-show="showShipments" class="ShipmentsCards">
        <CardSearch
          v-for="card in shipmentsCards"
          :key="card.id"
          :productName="card.title"
          :fromCountry="card.price"
          :toCountry="'N/A'"
          :deliveryDate="'N/A'"
          :weight="card.price"
          :userName="'N/A'"
          :rewardAmount="card.price"
          :cardId="card.id"
          @close="removeCard(card.id)"
        />
      </div>
      <div v-show="showTrips" class="TripsCards">
        <TripCard
          v-for="card in tripsCards"
          :key="card.id"
          :productName="card.title"
          :fromCountry="'N/A'"
          :toCountry="'N/A'"
          :deliveryDate="'N/A'"
          :weight="card.price"
          :userName="card.title"
          :rewardAmount="card.price"
          :cardId="card.id"
          @close="removeCard(card.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import TripCard from '../components/TripCard.vue'; // Adjust the path as needed
import CardSearch from '../components/CardSearch.vue';

const showShipments = ref(true); // Default to showing shipments
const showTrips = ref(false);
const shipmentsCards = ref([]);
const tripsCards = ref([]);
const locations = [
  'New York, USA',
  'Los Angeles, USA',
  'London, UK',
  'Paris, France',
  'Berlin, Germany',
  'Tokyo, Japan',
  'Sydney, Australia',
  'Mumbai, India'
];

// Reactive data
const fromLocation = ref('');
const toLocation = ref('');
const departureDate = ref('');
const weight = ref('');

// Fetch Shipments
const fetchShipmentsData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products', {
      params: {
        from: fromLocation.value,
        to: toLocation.value,
        date: departureDate.value,
        weight: parseFloat(weight.value) || 0,
      }
    });
    console.log('Shipments Response:', response.data); // Debug response
    shipmentsCards.value = response.data;
    showShipments.value = true;
    showTrips.value = false;
  } catch (error) {
    console.error('Error fetching shipments:', error);
  }
};

// Fetch Trips
const fetchTripsData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products', {
      params: {
        from: fromLocation.value,
        to: toLocation.value,
        date: departureDate.value,
        weight: parseFloat(weight.value) || 0,
      }
    });
    console.log('Trips Response:', response.data); // Debug response
    tripsCards.value = response.data;
    showShipments.value = false;
    showTrips.value = true;
  } catch (error) {
    console.error('Error fetching trips:', error);
  }
};

// Perform Search
const search = () => {
  if (showShipments.value) {
    fetchShipmentsData();
  } else if (showTrips.value) {
    fetchTripsData();
  }
};

// Watchers for real-time updates
watch([fromLocation, toLocation, departureDate, weight], () => {
  search(); // Perform search when inputs change
});
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
.TripsCards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48.5%, 1fr)); /* Responsive grid */
  gap: 20px;
  
  width: 87%;
}
.ShipmentsCards{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48.5%, 1fr) );
  gap: 20px;
  margin-top: 1%;
  width: 87%;
  margin-left: 6%;
}
</style>

display: grid;
    grid-template-columns: repeat( auto-fit, minmax(48.5%, 1fr) );
    gap: 20px;
    margin-top: 1%;
    width: 87%;
    margin-left: 6%;