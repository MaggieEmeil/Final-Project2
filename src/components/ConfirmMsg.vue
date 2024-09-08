<template>
  <div class="bg-white shadow-md rounded-lg p-6 m-4">
    <h3 class="text-2xl font-bold mb-4">Confirm Your Shipment</h3>
    
    <!-- Shipment Details -->
    <div class="mb-4">
      <h4 class="text-xl font-semibold">Shipment Details</h4>
      <p><span class="font-medium">From:</span> {{ shipment.from }}</p>
      <p><span class="font-medium">To:</span> {{ shipment.to }}</p>
      <p><span class="font-medium">Date:</span> {{ shipment.date }}</p>
      <p><span class="font-medium">Name:</span> {{ shipment.name }}</p>

    </div>
    
    <!-- Item Details -->
    <div class="space-y-4">
      <h4 class="text-xl font-semibold mb-2">Shopping items</h4>
      <div v-for="(item, index) in shipment.items" :key="index" class="border p-4 rounded-md shadow-md">
        <h5 class="text-lg font-semibold">{{ item.itemName }}</h5>
        <p><span class="font-medium float-left">Quantity:</span> {{ item.quantity }}</p>
        <p><span class="font-medium float-left">Price:</span> ${{ item.price }}</p>
        <p><span class="font-medium float-left">Weight:</span> {{ item.weight }} kg</p>
        <p><span class="font-medium float-left">Category:</span> {{ item.category }}</p>
      </div>
    </div>
    
   
    
    <!-- Confirm Button -->
    <div class="mt-6">
      <button @click="confirm" class="py-2 px-4 text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full hover:bg-blue-600">
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps ,defineEmits } from 'vue';
import { useRouter } from 'vue-router';
// const emit = defineEmits(['done']); 
const router = useRouter();
// const shipmentData = ref({});
const props = defineProps({
  shipment: {
    type: Object,
    required: true
  }
});

const confirm = () => {
  alert('Shipment Confirmed!');
  router.push({ name: 'ShipmentsPage' });
  // emit('done', { 
  // shipmentData       
  //   });
};
</script>