<template>
  <nav class=" border-gray-200 dark:bg-gray-900">  
  <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">MY SHIPMENTS</span>
  </div>
  </nav> 
     <div class=" bg-gradient-to-r from-sky-200 to-sky-900 bg-cover bg-center flex items-center justify-center min-h-screen p-4" >
        <div class=" bg-white max-w-lg shadow-lg rounded-lg overflow-hidden  me-8 md:me-0 md:w-2/3 lg:w-1/2 " @submit.prevent="input">
       <div class=" mt-11 block items-center text-center  ">
       </div>
         <div class=" mt-11 block items-center text-center  " v-show="show">
          <p class="text-md" >You don't have any shipments .</p>
          <br>
          <p class="text-md" >Add a new one .</p>
        </div>
  
             <button @click="btn" class="mt-11 block items-center text-center  w-96 py-3 px-4 font-semibold text-md m-auto mb-7 rounded-md text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800 ">
               Add Shipments 
              </button>
                <!-- <ConfirmMsg v-if="show" @done="Done"></ConfirmMsg> -->
                               <p class="text-gray-800 text-sm mt-6 font-semibold mb-5">Shopping items</p>
      </div>
      </div>

</template> 
<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
const router=useRouter();
// const items = ref([]);
const show=()=>{
  return true
}
const btn=()=>{
      router.push({ name: 'ShipmentsInfo' });
      show=(false);
}
// const Done = (itemData) => {
//   shipmentData.value.push(itemData);
// };
</script>
<style scoped>

</style>

