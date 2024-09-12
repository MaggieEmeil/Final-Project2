<template>
  <div class="card bg-white rounded-lg shadow-md p-4 mb-4" @click="handleClick">
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
    </div>

    <!-- Reward Section -->
    <div class="text-white bg-blue-500 text-center p-2 rounded-lg reward">
      <p>Reward {{ rewardAmount }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);

const props = defineProps({
  productName: String,
  fromCountry: String,
  toCountry: String,
  deliveryDate: String,
  weight: Number,
  userName: String,
  rewardAmount: String
});

// Emit click event
const handleClick = () => {
  emit('click', props);
};
</script>

<style scoped>
/* Your existing styles remain unchanged */
</style>
