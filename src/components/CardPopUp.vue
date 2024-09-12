<!-- CardComponent.vue -->
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
  </div>
</template>

<script setup>
const props = defineProps({
  productName: String,
  fromCountry: String,
  toCountry: String,
  deliveryDate: String,
  weight: Number,
  userName: String,
  rewardAmount: String
});
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

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    background-color: #1d4ed8;
  }
  50% {
    transform: scale(1.05);
    background-color: #1e40af;
  }
}
</style>
