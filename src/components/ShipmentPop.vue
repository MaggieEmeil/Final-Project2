<template>
<div class=" min-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div class=" p-6 rounded-md bg-yellow-100 shadow-lg shadow-gray-200 hover:shadow-gray-200 sm:w-96 lg:w-2/5 md:w-1/2" @submit.prevent='input'>
        <nav class=" border-gray-200 dark:bg-gray-900">  
         <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">ADD SHOPPING ITEM</span>
        </div>              
        </nav>  
        <div class=" mt-11 flex items-center ms-20 ">
              <label class="font-semibold text-gray-800 text-md mb-2 block md:me-30 md:ms-0">Item Details</label>
              <input name="item name" type="text"  class="ml-8 md:me-30 md:ms-0  bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter item name" v-model="ItemName" />
                <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
        </div>
         <div class="mt-6 flex items-center ms-20">
             <label class="font-semibold  text-gray-800 text-md mb-2 block">Item Quantity</label>
             <div class="bg-blue-200  flex items-center text-center rounded-full ml-8">
             <button @click="dec" type="button"  class="ms-2 align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 ">-</button>
             <input type="text" class="font-semibold text-center rounded-full bg-blue-200 border-x-0 border-gray-300 h-8 font-medium  text-gray-900 w-32 text-md "  required  v-model="number" >
             <button @click="inc" type="button"  class="me-2 align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 ">+</button>
             </div>
        </div>
        <div class="mt-6  flex items-center ms-20">
              <input name="price" type="text"  class=" bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Price" v-model="Price" />
                <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
              <label class="font-semibold text-gray-800 text-md mb-2 block ml-11">Total(0)</label>
        </div>
         <div class="mt-6  flex items-center ms-20">
              <input name="item name" type="text"  class="w-48 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Weight" v-model="kilo" />
                <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
              <select id="weight" class="w-8  items-center  text-center bg-white  text-md rounded focus:ring-blue-500 focus:border-blue-500 block  p-2.5   border border-gray-300 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="g">G</option>
              <option value="kg">KG</option>
              <option value="lb">Lbs</option>
              <option value="oz">Oz</option>
              </select>
                <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
              <label class="font-semibold text-gray-800 text-md mb-2 block ml-11">Total(0)</label>
        </div>
            <div class="mt-6 ms-20 items-center">
              <label class="font-semibold text-gray-800 text-md mb-2 block">Category</label>
              <select id="categories" class="w-44 mt-6 bg-gradient-to-r from-sky-900 to-sky-600  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose Category</option>
              <option value="food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Watches">Watches</option>
              <option value="Books">Books</option>
              </select>
                <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
            </div>
              <div class="mt-6  items-center ms-20">
             <label class="font-semibold text-gray-800 text-md mb-2 block">Item Photos</label>
             <div class="border-lined border-4  rounded border-sky-800 w-20">
             <button @click="image" type="button" id="photo-button" class=" rounded-full bg-white  p-3 h-11 ">
                  <svg class="w-4 h-4 ml-4 text-gray-900 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                  </svg>
             </button>
               <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
             </div>
              </div>

            <br>
   <button type="submit" class="mb-11 w-3/4 ms-20 m-auto w-20 py-3 px-4 font-semibold text-sm rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800 ">
                    DONE
   </button> 
 
        </div>
         </div>
     
</template>
<script setup>

import {ref} from 'vue';
import {useRouter} from 'vue-router';
const ItemName=ref('');
const Price=ref('');
const kilo=ref('');
const number=ref(1);
const error=ref('');


const router=useRouter();
const dec=()=>{
  number.value--;
  return number.value;
}
const inc=()=>{
  number.value++;
  return number.value;
}
const validateForm=()=>{
if(!ItemName.value){
error.value=('Please enter the item name');
return false;
}
else if(!Price.value){
  error.value=('Please enter the item price');
return false;
}
else if(!kilo.value){
  error.value=('Please enter the item weight');
return false;
}
else if(!image()){
  error.value=('Please enter the item image');
return false;
}
return true;
}
const input=() =>{
  if(validateForm()){
    router.push({ name: 'SearchPage' });

  }
}



</script>

<style scoped>

</style>