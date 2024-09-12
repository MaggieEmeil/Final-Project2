<template>
  

<div class="card bg-white rounded-lg shadow-md p-4 mb-4 w-full lg:max-w-4xl mx-auto hover:shadow-2xl transform transition-transform duration-500 ease-out hover:-translate-y-2">
    <!-- Top section (From-To + Time) -->
    <div class="flex justify-between items-center mb-2">
      <div>
        <p class="text-lg font-bold">{{ From }}Germany</p>
      </div>
      <div class="text-gray-400 text-2xl animate-bounce">✈️</div>
      <div>
         <p class="text-lg font-bold">{{ To }}EGYPT</p>
      </div>
    </div>
    
    <div>
      <p class="text-sm text-gray-500">Departs on {{ depart_Date }}</p>
      <p class="text-sm text-gray-500">at {{ depart_Time }}</p>
    </div>
    
    <!-- Available & Consumed Weight -->
    <div class="flex justify-between items-center text-gray-500 mb-4">
      <div class="flex items-center">
        <span class="text-yellow-600 text-xl mr-2">📦</span>
        <p class="font-semibold hover:text-yellow-500 transition duration-300">{{ FreeWeight }} KG Available</p>
      </div>
      <div class="flex items-center">
        <span class="text-yellow-600 text-xl mr-2">📦</span>
        <p class="font-semibold hover:text-yellow-500 transition duration-300">{{ ConsumedWeight }} KG Consumed</p>
      </div>
    </div>

    <!-- User Section -->
    <div class="flex items-center mb-4">
      <img src="https://www.svgrepo.com/show/530412/user.svg" class="h-8 me-3 rounded-full border-2 border-yellow-500 hover:border-yellow-600 transition duration-300" />
      <div>
        <p class="font-semibold hover:text-blue-500 transition duration-300">{{ username }}</p>
      </div>
    </div>

    <!-- Send Request Button -->
    <button
      class="bg-blue-500 text-white rounded-full px-4 py-2 font-bold w-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
      @click="openPopup"
    >
      SEND REQUEST
    </button>

    <!-- Modal Popup for Confirmation -->
    <div v-if="isPopupVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform scale-95 transition-transform duration-300 ease-in-out">
        <h2 class="text-lg font-bold mb-4">Request Confirmation</h2>
        <p>Are you sure you want to send a request to {{ username }}?</p>
        <div class="mt-4 flex justify-end space-x-4">
          <button @click="closePopup" class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-300">Cancel</button>
          <button @click="confirmRequest" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Data properties (to be populated from the backend)
const props = defineProps({
  From: String,
  To: String,
  depart_Date: String,
  depart_Time: String,
  FreeWeight: Number,
  ConsumedWeight: Number,
  username: String,
  cardId: { type: String, required: true },
    showSendRequestButton: { type: Boolean, default: true }
});

// Modal visibility state
const isPopupVisible = ref(false);

// Function to open the confirmation popup
const openPopup = () => {
  isPopupVisible.value = true;
};

// Function to close the confirmation popup
const closePopup = () => {
  isPopupVisible.value = false;
};

// Function to confirm the request
const confirmRequest = () => {
  console.log('Request confirmed!');
  closePopup();
};
</script>

<style scoped>
/* Keyframes for animations */
@keyframes popup-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animations applied */
.animate-fade-in-left {
  animation: fade-in-left 0.6s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.6s ease-out;
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}

.animate-slide-in {
  animation: slide-in 0.7s ease-out;
}

.animate-popup-in {
  animation: popup-in 0.5s ease-out;
}
</style>