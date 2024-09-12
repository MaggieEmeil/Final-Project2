<template>
  <div v-if="displayInfo" class=" max-h-full fixed inset-0 backdrop-blur-lg z-50 shadow-black shadow-md flex items-center justify-center">
    <div class="overflow-y-auto max-h-[600px] p-10 rounded-md bg-yellow-100 shadow-lg shadow-black hover:shadow-black sm:w-3/4  lg:w-2/5 md:w-3/4" @submit.prevent='emitDone'>
      <nav class=" border-gray-200 dark:bg-blue-900 mb-11">  
        <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">ADD SHOPPING ITEM</span>
            <button type="submit" @click="cancel" class="rounded-full mr-3">
              <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="8" x2="16" y2="16" /> 
                <line x1="16" y1="8" x2="8" y2="16" /> 
              </svg>
            </button>
        </div>
      </nav> 
      <div class="overflow-y-auto">
        <form class="overflow-y-auto font-serif text-lg">
          <div class="mt-6 flex items-center justify-between ">
            <label class="font-semibold text-gray-800 text-md mb-2 block  ">Item Name</label>
            <input name="item name" type="text"  class="w-80 bg-white border  border-shadow-black text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter item name" v-model="newCard.ItemName" />
          </div>
        <span v-if="nameerror" class="text-red-500 text-sm">{{ nameerror }}</span>
        <div class="mt-6 flex items-center justify-between ">
          <label class="font-semibold  text-gray-800 text-md mb-2 block">Item Quantity</label>
          <div class="bg-blue-200  flex items-center text-center rounded-full ">
            <button @click="dec" type="button"  class="flex items-center justify-center  align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg text-center font-bold ">-</span></button>
            <input type="text" class=" text-center rounded-full bg-blue-200 border-x-0 border-gray-300 h-8 font-bold  text-gray-900 w-64 text-md "  required  v-model="newCard.number" >
            <button @click="inc" type="button"  class="flex items-center justify-center align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg  font-bold  text-center flex justify-center pb-1">+</span></button>
          </div>
        </div>
          <span v-if="numbererror" class="text-red-500 text-sm">{{ numbererror }}</span>
        <div class="mt-6  flex items-center justify-between  ">
          <label class="font-semibold text-gray-800 text-md mb-2 block ">Total({{ newCard.price }}) $</label>
          <input name="price" type="number" class="bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500 w-80" placeholder="Single Item Price $ " v-model="newCard.price" />
        </div>
          <span v-if="priceerror" class="text-red-500 text-sm">{{ priceerror }}</span>
         <div class="mt-6  flex items-center justify-between">
          <label class="font-semibold text-gray-800 text-md mb-2 block ">Total({{newCard.FreeWeight}}) Kg</label>
          <input name="item name" type="number"  class="w-80 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Weight" v-model="newCard.FreeWeight" />
        </div>
         <span v-if="kiloerror" class="text-red-500 text-sm">{{ kiloerror }}</span> 
          <div class="mt-6  flex items-center justify-between">
              <label class="font-semibold text-gray-800 text-md mb-2 block">From Country</label>
              <select v-model="newCard.From" class="w-80 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500">
                <option  disabled value="">Select country</option>
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
          </div>
         <span v-if="fromerror" class="text-red-500 text-sm">{{ fromerror }}</span>
          <div class="mt-6  flex items-center justify-between">
              <label class="font-semibold text-gray-800 text-md mb-2 block">To Country</label>
              <select v-model="newCard.To" class="w-80 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500">
                <option disabled value="">Select country</option>
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
          </div>
          <span v-if="toerror" class="text-red-500 text-sm">{{ toerror }}</span>
          <div class="mt-6  flex items-center justify-between">
              <label class="font-semibold text-gray-800 text-md mb-2 block">Delivery Date</label>
              <input name="Date" type="date" class="w-80 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Date" v-model="newCard.Date" />
          </div>
          <span v-if="dateerror" class="text-red-500 text-sm">{{ dateerror }}</span>
          <div class="mt-6  flex items-center justify-between">
            <label class="font-semibold text-gray-800 text-md mb-2 block">userName</label>
              <input v-model="newCard.username" name="name" type="text" class="w-80 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Item name"/>
            </div>
             <span v-if="nameerror" class="text-red-500 text-sm">{{ nameerror }}</span>
              <div class="mt-8 flex flex-wrap">
                    <label for="shipmentImg" class="font-semibold text-gray-800 text-md mb-2 block">Shipment Image</label>
                    <input
                        type="file"
                        @change="onFileChange"
                        className="
                        text-sm text-white file:rounded-md file:w-28 file:h-10
                        file:mr-5 file:py-1 file:px-3 file:border-none
                        file:font-medium
                        file:bg-gradient-to-tr from-blue-700 to-blue-400 file:text-white
                        hover:file:cursor-pointer 
                        hover:file:text-black ml-10"
                     
                    />
                    <img v-if="newCard.img" :src="newCard.img" class="mt-2 h-24 w-24 object-cover rounded-md"/>
              </div>
              <div class="mt-12 w-full md:w-3/4 lg:w-2/3 mx-auto flex">
            <button @click="cancel" class="w-full mr-4 py-3 px-4 text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full">
               cancel
            </button>
            <button type="button" @click="emitDone" class="w-full py-3 px-4 tracking-wider text-sm text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">
              Done
            </button>
           </div>
        </form>
      </div> 
    </div>
  </div>
</template>
<script setup>
import { ref, watch} from 'vue';
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['done', 'cancel']); 
const displayInfo = ref(true);
const newCard = ref({
  username: '',
  From: '',
  To: '',
  FreeWeight: '',
  ItemName: '',
  price: '',
  number: 1,
  img: '',
  Date: ''
});
const nameerror = ref('');
const priceerror = ref('');
const kiloerror = ref('');
const numbererror = ref('');
const fromerror = ref('');
const toerror = ref('');
const dateerror = ref('');
const usererror = ref('');
const imgerror = ref('');
const countries = ref([
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
  'Australia', 'India', 'China', 'Brazil', 'Mexico'
]);
const dec = () => { if (newCard.value.number> 1) newCard.value.number--; };
const inc = () => {newCard.value.number ++; };
const itemData = ref({}); 
const validateForm = () => {
  if (!newCard.value.ItemName) {
      nameerror.value = 'Please enter the item name';
    return false;
  }
  else if (!newCard.value.price || newCard.value.price<= 0 ) {
    priceerror.value = 'Please enter the item price,it should be a positive number';
    return false;
  }
  else if (!newCard.value.FreeWeight || newCard.value.FreeWeight<= 0) {
    kiloerror.value = 'Please enter the item weight,it should be a positive number ';
    return false;
  }
  else   if (!newCard.value.From|| /^\d/.test(newCard.value.From)) {
    fromerror.value = 'Please enter from Country & should not start with a number';
    return false;
  } else if (!newCard.value.To || /^\d/.test(newCard.value.To)) {
    toerror.value = 'Please enter to country & should not start with a number';
    return false;
  } else if (!newCard.value.Date) {
    dateerror.value = 'Please enter the date';
    return false;
  } else if (!newCard.value.username) {
    usererror.value = 'Please enter your shipment name';
    return false;
  }
  else if (!newCard.value.img) {
    imgerror.value = 'Please enter your shipment name';
    return false;
  }
   
  return true;
};
const emitDone = () => {
  if (validateForm()) {
    emit('done', newCard.value);
  }
};
const next = ()=>{
  displayInfo.value = false;
}
const cancel = () => {
  emit('cancel');
};
const onFileChange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    newCard.value.img = reader.result;
                };
                reader.readAsDataURL(file);
            }
        };
</script>

<style scoped>

</style>