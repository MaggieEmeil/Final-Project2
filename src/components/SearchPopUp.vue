<template>
  <div class="card bg-white rounded-lg shadow-md p-4 mb-4">
    <!-- Top section (Product + Country info) -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center">
        <div class="bg-gray-300 rounded-full p-3 mr-2 icon">📦</div>
        <div>
          <p class="text-yellow-500 font-bold text-lg">{{ weight }} KG</p>
        </div>
      </div>
      <div>
        <p class="font-semibold">{{ productName }}</p>
        <p class="text-gray-500 text-sm">{{ fromCountry }} ✈ {{ toCountry }}</p>
        <p class="text-gray-400 text-xs">Before {{ deliveryDate }}</p>
      </div>
    </div>

    <!-- User Information Section -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <div class="bg-gray-200 rounded-full p-2 mr-2 icon">👤</div>
        <p class="font-medium">{{ userName }}</p>
      </div>
      <button
        class="send-request-button bg-blue-500 text-white px-4 py-2 rounded-full font-semibold"
        @click="openPopup"
      >
        SEND REQUEST
      </button>
    </div>

    <!-- Reward Section -->
    <div class="text-white bg-blue-500 text-center p-2 rounded-lg reward">
      <p>Reward {{ rewardAmount }}</p>
    </div>

    <!-- Dynamic Modal Popup -->
    <div v-if="isPopupVisible" class="fixed inset-0 flex items-center justify-center backdrop-blur">
      <div class="popup bg-white p-6 rounded-lg shadow-lg scale-up">
        <h2 class="text-lg font-bold mb-4">Request Confirmation</h2>
        
        <!-- Use v-for to loop through requestData and show cards -->
        <div v-for="(request, index) in requestData" :key="index" class="mb-4">
          <p>Request from {{ request.userName }} for {{ request.productName }}</p>
          <p>Reward: {{ request.rewardAmount }}</p>
        </div>

        <div class="mt-4 flex justify-end space-x-4">
          <button @click="closePopup" class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition">Cancel</button>
          <button @click="confirmRequest" class="px-4 py-2 focus:ring-blue-500 text-white rounded hover:bg-blue-600 transition">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// Props
const props = defineProps({
  productName: String,
  fromCountry: String,
  toCountry: String,
  deliveryDate: String,
  weight: Number,
  userName: String,
  rewardAmount: String,
  cardId: { type: String, required: true }
});

// Reactive variables
const isPopupVisible = ref(false);
const requestData = ref([]); // Store data from the backend
const router = useRouter();

// Functions
const openPopup = async () => {
  isPopupVisible.value = true;

  // Fetch data from the backend
  try {
    const response = await axios.get(`/api/requests/${props.cardId}`);
    requestData.value = response.data; // Store the fetched data in requestData
  } catch (error) {
    console.error("Error fetching request data:", error);
  }
};

const closePopup = () => {
  isPopupVisible.value = false;
};

const confirmRequest = () => {
  console.log('Request confirmed for card ID:', props.cardId);
  closePopup();
};
</script>

<style scoped>
.card {
  animation: scaleUp 0.5s ease-out;
}

.icon {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon:hover {
  transform: rotate(360deg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.send-request-button {
  animation: pulse 2.5s infinite;
}

.send-request-button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}

.reward {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.popup {
  animation: fadeInScale 0.5s ease-out;
}

@keyframes scaleUp {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    background-color: #1d4ed8; /* Blue */
  }
  50% {
    transform: scale(1.05);
    background-color: #1e40af; /* Darker Blue */
  }
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.backdrop-blur {
  backdrop-filter: blur(10px);
  animation: backdropFade 0.5s ease-out;
}

@keyframes backdropFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
