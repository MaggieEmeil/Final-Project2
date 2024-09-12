<template>
  <div class="bg-gradient-to-r from-sky-200 to-sky-900 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4">
   <div class="lg:mx-auto md:mx-auto shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2 m-auto">
    <div class="grid text-center items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-50 overflow-hidden">
      <!-- Form -->
      <ShipmentPop v-if="show" @done="Done"></ShipmentPop>
        <form class="p-6 space-y-6 flex flex-col items-center" @submit.prevent="input">
          <div class="mb-6 text-center">
            <h5 class="text-gray-800 text-2xl font-bold">Shipment trip details</h5>
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
              <input name="productName" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="product name" v-model="productName" />
              <span v-if="nameerror" class="text-red-500 text-sm">{{ nameerror }}</span>
            </div>
            <div class="mx-auto">
              <input name="weight" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="weight" v-model="weight" />
              <span v-if="weighterror" class="text-red-500 text-sm">{{ weighterror }}</span>
            </div>
            <div class="mx-auto">
              <input name="userName" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="userName" v-model="userName" />
              <span v-if="usererror" class="text-red-500 text-sm">{{ usererror }}</span>
            </div>
            <div class="mx-auto">
              <input name="rewardAmount" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="rewardAmount" v-model="rewardAmount" />
              <span v-if="rewarderror" class="text-red-500 text-sm">{{ rewarderror }}</span>
            </div>
          </div>
            
           <p class="text-gray-800 text-2xl mt-11 font-bold ">Shopping items</p>
           <div  v-for="(itemData, index) in items" :key="index"   class="bg-blue-100 border border-gray-300  shadow-md shadow-grey-300 rounded-lg p-4 mt-7 w-full md:w-3/4 lg:w-2/3 mx-auto">
            <h5 class="text-xl font-bold">{{ itemData.itemName }}</h5>
            <p>Quantity: {{ itemData.quantity }}</p>
            <p>Price: ${{ itemData.price }}</p>
            <p>Weight: {{ itemData.weight }}</p>
             <div class="flex-shrink-0 w-1/3 h-full mr-4">
             <img :src="itemData.image" alt="Item Image" class="w-full h-full object-cover rounded-lg" />
             </div>
           </div>
           <div class="mt-12 w-full md:w-3/4 lg:w-2/3 mx-auto flex">
            <button type="button" @click="addMore" class="w-full py-3 px-4 tracking-wider text-sm text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">
              Add More Shopping item
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
const productName = ref('');
const rewardAmount = ref('');
const userName=ref('');
const router = useRouter();
const fromerror = ref('');
const toerror = ref('');
const dateerror = ref('');
const rewarderror = ref('');
const usererror = ref('');
const weighterror = ref('');
const nameerror = ref('');
const weight=ref('');
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
  } else if (!productName.value) {
    nameerror.value = 'Please enter your shipment name';
    return false;
  }
   else if (!weight.value) {
    weighterror.value = 'Please enter shipment weight';
    return false;
  }
     else if (!userName.value) {
    usererror.value = 'Please enter your username';
    return false;
  }
     else if (!rewardAmount.value) {
    rewarderror.value = 'Please enter your reward';
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
      productName:productName.value,
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