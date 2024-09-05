<template>
  <nav class=" border-gray-200 dark:bg-gray-900">  
  <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">ADD SHOPPING ITEM</span>
  </div>              
  </nav>  
     <div>
        <div class="bg-[url('../images/airplane.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4" >
        <div class="bg-yellow-100 max-w-lg shadow-lg rounded-lg overflow-hidden  me-8 md:w-1/2 lg:w-1/2">
        <div class=" mt-11 flex items-center ms-20">
              <label class="font-semibold text-gray-800 text-md mb-2 block">Item Details</label>
              <input name="item name" type="text" required class="ml-3.5 bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter item name" v-model="ItemName" />
        </div>
         <div class="mt-6 flex items-center ms-20">
             <label class="font-semibold  text-gray-800 text-md mb-2 block">Item Quantity</label>
             <div class="bg-blue-200  flex items-center rounded-full ml-3.5">
             <button @click="dec" type="button" id="decrement-button" class=" rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-11 ">-</button>
             <input type="number" id="number"  data-input-counter-max="100" class="font-semibold text-center bg-blue-200 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 w-32 text-md " placeholder="" value="1" required />
             <button @click="inc" type="button" id="incresment-button" class=" rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-11 ">+</button>
             </div>
        </div>
        <div class="mt-6  flex items-center ms-20">
              <input name="price" type="text"  class=" bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Price" v-model="Price" />
              <label class="font-semibold text-gray-800 text-md mb-2 block ml-3.5">Total(0)</label>
        </div>
         <div class="mt-6  flex items-center ms-20">
              <input name="item name" type="text"  class="w-48 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Weight" v-model="kilo" />
              <select id="weight" class="w-8  items-center  text-center bg-white  text-md rounded focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-sky-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="g">G</option>
              <option value="kg">KG</option>
              <option value="lb">Lbs</option>
              <option value="oz">Oz</option>
              </select>
              <label class="font-semibold text-gray-800 text-md mb-2 block ml-3.5">Total(0)</label>
        </div>
            <div class="mt-6 ms-20 items-center">
              <label class="font-semibold text-gray-800 text-md mb-2 block">Category</label>
              <select id="categories" class="w-56 mt-6 bg-gradient-to-r from-sky-900 to-sky-600  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose Category</option>
              <option value="food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Watches">Watches</option>
              <option value="Books">Books</option>
              </select>
            </div>
              <div class="mt-6  items-center ms-20">
             <label class="font-semibold text-gray-800 text-md mb-2 block">Item Photos</label>
             <div class="border-dashed border-2 border-indigo-600 w-20">
             <button type="button" id="photo-button" class=" rounded-full bg-white  p-3 h-11 ">
                  <svg class="w-4 h-4 ml-4 text-gray-900 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
            </svg>
             </button>
             </div>
              </div>

            <br>
   <button type="submit" class="mb-11 w-96 ms-20 m-auto w-20 py-3 px-4 font-semibold text-sm rounded-md text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800 ">
                    DONE
   </button> 
 
        </div>
         </div>
     </div>
</template>
<script setup>
import router from '@/router';
import {ref} from 'vue';
import {useRouter} from 'vue-router';
const ItemName=ref('');
const Price=ref('');
const kilo=ref('');



</script>

<style scoped>

</style>