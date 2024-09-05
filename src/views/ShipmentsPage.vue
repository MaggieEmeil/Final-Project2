<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">  
  <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">ADD SHOPPING ITEM</span>
  </div>              
  </nav>  
     <div>
        <div class="bg-[url('../images/airplane.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4" >
    <div class="mb-52 mr-52 bg-white shadow-lg rounded-lg overflow-hidden w-2xl w-full md:w-1/2 lg:w-1/2">
        <div>
              <label class="font-semibold text-gray-800 text-sm mb-2 block">Item Details</label>
              <input name="item name" type="text" required class=" bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter item name" v-model="ItemName" />
        </div>
         <div class="flex">
             <label class="font-semibold text-gray-800 text-sm mb-2 block">Item Quantity</label>
             <div class="ml-7 relative flex items-center max-w-[11rem]">
             <button type="button" id="decrement-button" class=" rounded-full bg-blue-600    p-3 h-11 ">
             <svg class="w-3 h-3 text-gray-900 "  xmlns="http://www.w3.org/2000/svg" fill="none" >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
             </button>
             <input type="number" id="number"  data-input-counter-max="100" class="text-center bg-blue-200 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-md " placeholder="" value="1" required />
             <button type="button" id="incresment-button" class=" rounded-full bg-blue-600   rounded-s-lg p-3 h-11 ">
               <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
             </button>
             </div>
        </div>
   <RouterLink to="/search-page" class=" ml-52 py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-gray-800 focus:outline-none">
                    DONE
   </RouterLink> 
 
        </div>
         </div>
     </div>
</template>
<style scoped>

</style>