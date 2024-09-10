<template>
  <div class="p-4 mt-8 border border-gray-300 rounded-md shadow-lg shadow-sky-800/40 hover:shadow-sky-950/40 transition-shadow duration-300 
    max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto bg-white">
    <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">Confirm Your Shipment</h3>
    
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
      <!-- Shipment Details -->
      <div class="flex-1 bg-blue-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 p-4">
        <h4 class="text-lg font-semibold">Shipment Details</h4>
        <p><span class="font-medium">From:</span> {{ shipment.from }}</p>
        <p><span class="font-medium">To:</span> {{ shipment.to }}</p>
        <p><span class="font-medium">Date:</span> {{ shipment.date }}</p>
        <p><span class="font-medium">Name:</span> {{ shipment.name }}</p>
      </div>

      <!-- Item Details -->
      <div class="flex-1 bg-blue-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 p-4">
        <h4 class="text-lg font-semibold">Shopping Items</h4>
        <div v-for="(item, index) in shipment.items" :key="index" class="p-4 border-b last:border-b-0">
          <p><span class="font-medium">Name:</span> {{ item.itemName }}</p>
          <p><span class="font-medium">Quantity:</span> {{ item.quantity }}</p>
          <p><span class="font-medium">Price:</span> ${{ item.price }}</p>
          <p><span class="font-medium">Weight:</span> {{ item.weight }} kg</p>
        </div>
      </div>
    </div>

    <!-- Confirm Button -->
    <div class="mt-6 text-center">
      <button @click="confirm" class="py-2 px-4 text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full hover:bg-blue-600">
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['done']); 
const router = useRouter();

const props = defineProps({
  shipment: {
    type: Object,
    required: true
  }
});

const confirm = () => {
  alert('Shipment Confirmed!');
  router.push({ name: 'shipmentPage' });
};
</script>
