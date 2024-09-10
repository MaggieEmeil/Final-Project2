<template>
  <div class="flex flex-wrap w-full p-10 h-full gap-x-10 md:gap-y-6 xl:gap-y-0 justify-center ">
 <!-- cards -->
    
    <div @click="display"  class="bg-white p-5 rounded-md shadow-lg  hover:shadow-sky-950/40 min-[320px]:w-80 min-[960px]:w-96 lg:w-[30%] h-[30%] w-40 flex flex-wrap">
     <p><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text ">
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
    </div>
    <div @click="display"  class="bg-white p-5 rounded-md shadow-lg  hover:shadow-sky-950/40 min-[320px]:w-80 min-[960px]:w-96 lg:w-[30%] h-[30%] w-40 flex flex-wrap">
     <p><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text ">
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
    </div>
    <div @click="display"  class="bg-white p-5 rounded-md shadow-lg  hover:shadow-sky-950/40 min-[320px]:w-80 min-[960px]:w-96 lg:w-[30%] h-[30%] w-40 flex flex-wrap">
     <p><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text ">
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
    </div>
    <div @click="display"  class="bg-white p-5 rounded-md shadow-lg  hover:shadow-sky-950/40 min-[320px]:w-80 min-[960px]:w-96 lg:w-[30%] h-[30%] w-40 flex flex-wrap">
     <p><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text ">
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
    </div>
    <div @click="display"  class="bg-white p-5 rounded-md shadow-lg  hover:shadow-sky-950/40 min-[320px]:w-80 min-[960px]:w-96 lg:w-[30%] h-[30%] w-40 flex flex-wrap">
     <p><strong class="text-lg bg-gradient-to-l from-sky-800 to-sky-400 text-transparent bg-clip-text ">
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
    </div>
    <div v-show="displyItem" class="mt-4 m-auto w-full  flex flex-wrap gap-x-4">
      <div  class=" min-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
        <!-- <div class="bg-white p-6 rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 sm:w-96 lg:w-2/5 md:w-1/2"> -->
          <div class="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
             <div class="flex bg-white rounded-lg shadow flex-col md:flex-row">
                <div class="relative w-full md:w-48 lg:w-64 flex justify-center items-center">
                   <img src="https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png" alt="shopping image"
                   class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                </div>
                <form class="flex-auto p-6">
                  <div class="flex flex-wrap text-black">
                     <h1 class="flex-auto text-xl font-semibold ">T-shirt</h1>
                       <div class="text-xl font-semibold">$110.00</div>
                         <div class="flex-none w-full mt-2 text-sm font-medium">3</div>
                         </div>
                         <div>
                         </div>
                         <div class="flex mb-4 text-sm font-medium">
                         <button @click="close" type="button"
                          class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Close
                         </button>
                         </div>
                </form>
              </div>
           </div>
        <!-- </div> -->
     </div>  
  </div>
</div>            
</template>
 <script setup>
import { ref ,defineEmits  } from 'vue';
const displyItem=ref(false);
const display=()=>{displyItem.value=true;}
const close=()=>{displyItem.value=false
    console.log(displyItem.value)};
 </script>
 