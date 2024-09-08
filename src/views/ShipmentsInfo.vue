<template>
  <nav class="border-gray-200 dark:bg-gray-900">  
    <div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">Create shipment</span>
    
    </div>
  </nav> 

  <div class="bg-gradient-to-r from-sky-200 to-sky-900 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4">
    <div class="lg:mx-auto md:mx-auto shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2 m-auto">
      <div class="grid text-center items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-50 overflow-hidden">
        
        <!-- Form -->
        <ShipmentPop v-if="show" @done="Done"></ShipmentPop>

        <form class="p-6 space-y-6 flex flex-col items-center" @submit.prevent="input">
          <div class="mb-6 text-center">
            <h5 class="text-gray-800 text-2xl font-bold">Shipment details</h5>
          </div>

          <div class="space-y-6 w-full md:w-3/4 lg:w-2/3">
            <div class="mx-auto">
              <input name="From" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="From (City, Country)" v-model="From" />
              <span v-if="fromerror" class="text-red-500 text-sm">{{ fromerror }}</span>
            </div>

            <div class="mx-auto">
              <input name="To" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="To (City, Country)" v-model="To" />
              <span v-if="toerror" class="text-red-500 text-sm">{{ toerror }}</span>
            </div>

            <div class="mx-auto">
              <input name="Date" type="date" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Date" v-model="Date" />
              <span v-if="dateerror" class="text-red-500 text-sm">{{ dateerror }}</span>
            </div>

            <div class="mx-auto">
              <input name="name" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Item name" v-model="name" />
              <span v-if="nameerror" class="text-red-500 text-sm">{{ nameerror }}</span>
            </div>
          </div>
                      <p class="text-gray-800 text-sm mt-6 font-semibold mb-5">Shopping items</p>

          <div  v-for="(item, index) in items" :key="index" class="bg-white shadow-md rounded-lg p-4 mt-4 w-full md:w-3/4 lg:w-2/3 mx-auto">
            <h5 class="text-xl font-bold">{{ item.itemName }}</h5>
            <p>Quantity: {{ item.quantity }}</p>
            <p>Price: {{ item.price }}</p>
            <p>Weight: {{ item.weight }}</p>
          </div>

          <div class="mt-12 w-full md:w-3/4 lg:w-2/3 mx-auto flex">
            <button type="submit" @click="addMore" class="w-full py-3 px-4 tracking-wider text-sm text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">
              Add Shopping item
             
            </button>
              <button @click="goToConfirm" class="w-full py-3 px-4 text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full">
        Next
      </button>
          </div>

          <ConfirmMsg v-if="display" :shipment="shipmentData" ></ConfirmMsg>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ConfirmMsg from '../components/ConfirmMsg.vue';
import ShipmentPop from "../components/ShipmentPop.vue";

const display = ref(false);
const show = ref(true);
const items = ref([]);
const From = ref('');
const To = ref('');
const Date = ref('');
const name = ref('');
const router = useRouter();
const fromerror = ref('');
const toerror = ref('');
const dateerror = ref('');
const nameerror = ref('');
const shipmentData = ref({}); 

const validateForm = () => {
  if (!From.value || /^\d/.test(From.value)) {
    fromerror.value = 'Please enter from Country & should not start with a number';
    return false;
  } else if (!To.value || /^\d/.test(To.value)) {
    toerror.value = 'Please enter to country & should not start with a number';
    return false;
  } else if (!Date.value) {
    dateerror.value = 'Please enter the date';
    return false;
  } else if (!name.value) {
    nameerror.value = 'Please enter your shipment name';
    return false;
  }
  return true;
};

const Done = (itemData) => {
  show.value = false;
  items.value.push(itemData);
};

const goToConfirm = () => {
  if (validateForm()) {
    shipmentData.value={
      from: From.value,
      to: To.value,
      date: Date.value,
      name:name.value,
      items: items.value
    };
    display.value = true;
  }
};

const input = () => {
  if (validateForm()) {
    router.push({ name: 'ConfirmMsg' });
  }
};
const addMore = () => {
  show.value=true;
    router.push({ name: 'ShipmentPop' });
  
};
</script>
