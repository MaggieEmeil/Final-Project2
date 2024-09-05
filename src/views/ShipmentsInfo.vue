<template>
  <div class="bg-[url('../images/airplane.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4" >
  
    <div class="lg:ml-52 md-ml:3.5 bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full md:w-3/4  lg:w-1/2 m-auto">
      <div class="grid   md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-50 overflow-hidden">
        <!-- Form -->
        <form class="md:col-span-2 p-6 space-y-6" @submit.prevent="input">
          <div class="mb-6">
            <h5 class="text-gray-800 text-2xl font-bold">Shipment details</h5>
          </div>

          <div class="space-y-6">
            <div>
              <input name="From" type="text"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="From (City, Country)" v-model="From" />
                          <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
              <input name="To" type="text"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="To (City, Country)" v-model="To" />
                       <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>

            </div>
             <div>
              <input name="Date" type="date" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="i want it before" v-model="Date" />
                       <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>

            </div>
          </div>
            <div>
              <input name="from" type="text"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="From (City, Country)" v-model="name" />
                        <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>

            </div>
          <div class="mt-12">
            <p class="text-gray-800 text-sm mt-6 font-semibold mb-5">Shopping items</p>
            <button type="submit" class="w-full py-3 px-4 tracking-wider text-sm  text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full hover:bg-blue-600 focus:outline-none">
             Add Shopping item(at least one)
            </button>
          </div>
        </form>
      </div>
    </div> 
  </div>
</template>

<script setup>

import { ref } from 'vue';
import {useRouter} from 'vue-router';


const From = ref('');
const To = ref('');
const Date = ref('');
const name= ref('');
const router=useRouter();
const error= ref('');
const validateForm = () => {
  

if(!From.value || /^\d/.test(From.value)){
  error.value='Please enter from Country & should not start with a number';
   return false;
}
else if(!To.value || /^\d/.test(To.value)){
  error.value='Please enter to country & should not start with a number';
   return false;
}
else if(!Date.value){
  error.value='Please enter the date';
   return false;
}
else if(!name.value){
  error.value='Please enter your shippment name';
   return false;
}
return true;
};
const input=() =>{
  if(validateForm()){
    router.push({ name: 'SearchPage' });

  }
}
</script>

<style scoped>

</style>
