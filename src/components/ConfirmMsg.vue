<template>
  <div class="bg-white shadow-md rounded-lg p-6 m-4">
    <h3 class="text-2xl font-bold mb-4">Confirm Your Shipment</h3>
    <div class="mb-4">
      <h4 class="text-xl font-semibold">Shipment Details</h4>
      <p><span>From:</span> {{ shipment.from }}</p>
      <p><span>To:</span> {{ shipment.to }}</p>
      <p><span>Date:</span> {{ shipment.date }}</p>
      <p><span>Shipment Name:</span> {{ shipment.name }}</p>
    </div>
    <div v-if="shipment.item" class="bg-gray-100 p-4 rounded-md">
      <h4 class="text-xl font-semibold">Item Details</h4>
      <p><span>Item Name:</span> {{ shipment.item.itemName }}</p>
      <p><span>Quantity:</span> {{ shipment.item.quantity }}</p>
      <p><span>Price:</span> {{ shipment.item.price }}</p>
      <p><span>Weight:</span> {{ shipment.item.weight }}</p>
    </div>
    <div class="mt-6">
      <button @click="confirm" class="py-2 px-4 text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full hover:bg-blue-600">
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import {useRouter} from 'vue-router';

const router=useRouter();
const props = defineProps({
  shipment: {
    required: true
  }
});

const confirm = () => {
  alert('Shipment Confirmed!');
  
      router.push({ name: 'ShipmentsPage' });

};
</script>


 