<template>
    

<div class="flex flex-wrap gap-10 justify-center md:justify-start">
                <!-- Orders -->
                <div @click="display" class="bg-white p-4 mt-8 border rounded-md shadow-lg shadow-sky-800/40 hover:shadow-sky-950/40 min-[320px]:w-80 min-[960px]:w-96 w-96 flex flex-wrap">
                    <p><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text">
                        Shipment Name : </strong> 
                        
                    </p>
                    <p class="mt-4 w-full"><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text">
                        From : </strong> 
                      
                    </p>
                    <p class="mt-4 w-full"><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text">
                        Price :  </strong> 
                        
                    </p>
                       <p class="mt-4 w-full"><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text">
                      To: </strong> 
                        
                    </p>
                    <div class="mt-4 ml-auto flex flex-wrap gap-x-4">
                       <div v-show="displyItem"  class=" min-h-full fixed inset-0 backdrop-opacity-sm flex items-center justify-center z-50">
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
            <div @click="close" class="flex mb-4 text-sm font-medium">
                <button  type="button"
                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Close
                    </button>
            </div>
        </form>
               </div>
           </div>
        </div>
     </div>  
                    </div>
                </div>
            </div>
</template>
 <script setup>
import { ref } from 'vue';
const displyItem=ref(false);
const display=()=>{displyItem.value=true;}
const close=()=>{displyItem.value=false};

 </script>
 