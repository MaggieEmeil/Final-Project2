<template>
  <nav class=" border-gray-200 dark:bg-gray-900">  
  <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">MY SHIPMENTS</span>
      <button @click="addMore" class="rounded-full mr-3">
                    <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
       </button>
  </div>
  </nav> 
 <div class=" bg-white max-w-lg shadow-lg rounded-lg overflow-hidden  me-8 md:me-0 md:w-2/3 lg:w-1/2 " @submit.prevent="input">
<!-- <div   class="bg-gradient-to-r from-sky-200 to-sky-900 bg-cover bg-center flex items-center justify-center min-h-screen p-4">
        <div class=" mt-11 block items-center text-center  " >
          <p class="text-md" >You don't have any shipments .</p>
          <br>
          <p class="text-md" >Add a new one .</p>
           <button  class="mt-11 block items-center text-center  w-96 py-3 px-4 font-semibold text-md m-auto mb-7 rounded-md text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800 ">
               Add Shipments 
              </button>
       </div>
</div> -->

<div @click="display" class="mt-11 flex items-center text-center">
       <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../images/blog/image-4.jpg" alt="">
       <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       </div>
       </a>
 </div>

      
<div v-show="displyItem" class=" min-h-full fixed inset-0 backdrop-opacity-sm flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 sm:w-96 lg:w-2/5 md:w-1/2">
<div class="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
    <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
        <div class="relative w-full md:w-48 flex justify-center items-center">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png" alt="shopping image"
                class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none">
        </div>
        <form class="flex-auto p-6">
            <div class="flex flex-wrap">
                <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">T-shirt</h1>
                <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">$110.00</div>
                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">3</div>
            </div>
      <div>
            </div>
            <div class="flex mb-4 text-sm font-medium">
                <button @click="show" type="button"
                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Close
                    </button>
            </div>
        </form>
    </div>
</div>
            </div>
  
 </div>
              
            
                <!-- <ConfirmMsg v-if="show" @done="Done"></ConfirmMsg> -->
                               <!-- <p class="text-gray-800 text-sm mt-6 font-semibold mb-5">Shopping items</p> -->
      </div>
    
</template> 
<script setup>
import { ref } from 'vue';
// import ConfirmMsg from '../components/ConfirmMsg.vue';
const arr=ref([]);
import {useRouter} from 'vue-router';
const router=useRouter();
const show=()=>{displyItem.value=false;};
// const items = ref([]);
const displyItem=ref(false)
const display=()=>{displyItem.value=true;}
const btn=()=>{
      router.push({ name: 'ShipmentsInfo' });

}
const addMore=()=>{
     router.push({ name: 'ShipmentsInfo' });
}
// const Done = (itemData) => {
//   shipmentData.value.push(itemData); 
// };
</script>
<style scoped>

</style>

