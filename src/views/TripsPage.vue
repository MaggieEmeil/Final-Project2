<template>
  <nav class=" border-gray-200 dark:bg-gray-900">  
  <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">MY SHIPMENTS</span>
  </div>
  </nav> 
     <div class="bg-[url('../images/airplane.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4" >
        <div class=" max-w-lg shadow-lg rounded-lg overflow-hidden  me-8 md:me-0 md:w-2/3 lg:w-1/2 " @submit.prevent="input">
        <div class=" mt-11 block items-center text-center  ">
        
          <p>You don't have any trips .</p>
          <br>
          <p>Add a new one .</p>
        </div>
        
             <button @click="btn" class="mt-11 block items-center text-center  w-96 py-3 px-4 font-semibold text-md m-auto mb-7 rounded-md text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800 ">
               Add Trips
              </button>
              <ShipmentPop v-if="show">     
              </ShipmentPop>
         </div>
     </div>
</template>
<script setup>
import { ref } from 'vue';
import ShipmentPop from "../components/ShipmentPop.vue";
const show=ref(false);
const btn=()=>{
  return show.value=(true);
}
</script>
<style scoped>

</style>

