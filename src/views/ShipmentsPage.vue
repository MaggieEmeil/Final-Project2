<template>
  <nav class=" border-gray-200 dark:bg-gray-900">  
  <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">MY SHIPMENTS</span>
      <button @click="addMore" class="rounded-full mr-3">
                    <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
       </button>
  </div>
  </nav> 
  <div class="bg-gradient-to-r from-sky-200 to-sky-700 bg-cover flex items-center justify-center min-h-screen p-4">
 <div class=" bg-white max-w-lg shadow-lg rounded-lg overflow-hidden  me-8 md:me-0 md:w-2/3 lg:w-1/2 " @submit.prevent="input">
<div  v-if="arr.length == 0"  class="bg-gradient-to-r from-sky-200 to-sky-900 bg-cover bg-center flex items-center justify-center min-h-screen p-4">
        <div class=" mt-11 block items-center text-center  " >
          <p class="text-md" >You don't have any shipments .</p>
          <br>
          <p class="text-md" >Add a new one .</p>
           <button  @click="btn" class="mt-11 block items-center text-center  w-96 py-3 px-4 font-semibold text-md m-auto mb-7 rounded-md text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800 ">
               Add Shipments 
              </button>
       </div>
</div>


<Card v-else @click="display "> </Card>   
       
 </div>
  </div>  
</template> 
<script setup>
import { ref } from 'vue';
 import {useRouter} from 'vue-router';
 import Card from '../components/Card.vue';
const arr=ref(['l']);
const shipmentData = ref({from:'',
      to: '',
      date: '',
      name:'',
      items: ''}); 
const router=useRouter();
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

