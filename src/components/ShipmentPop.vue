<template>
<div class=" max-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div class=" p-6 rounded-md bg-yellow-100 shadow-lg shadow-gray-200 hover:shadow-gray-200 sm:w-3/4  lg:w-2/5 md:w-3/4" @submit.prevent='input'>
        <nav class=" border-gray-200 dark:bg-gray-900">  
         <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">ADD SHOPPING ITEM</span>
        </div>              
        </nav>  
 <form >
        <div class=" mt-6 flex items-center ms-20 lg:ms-0">
              <label class="font-semibold text-gray-800 text-md mb-2 block md:me-30 md:ms-0 ">Item Details</label>
              <input name="item name" type="text"  class="ml-20 md:me-30   bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter item name" v-model="ItemName" />
        </div>
         <div class="mt-6 flex items-center ms-20 lg:ms-0">
             <label class="font-semibold  text-gray-800 text-md mb-2 block">Item Quantity</label>
             <div class="bg-blue-200  flex items-center text-center rounded-full ml-20">
             <button @click="dec" type="button"  class="flex items-center justify-center ms-2 align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg text-center font-bold ">-</span></button>
             <input type="text" class="font-semibold text-center rounded-full bg-blue-200 border-x-0 border-gray-300 h-8 font-medium  text-gray-900 w-32 text-md "  required  v-model="number" >
             <button @click="inc" type="button"  class="flex items-center justify-center me-2 align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg text-center font-bold  text-center flex justify-center pb-1">+</span></button>
             </div>
        </div>
        <div class="mt-6  flex items-center ms-20 lg:ms-0">
        <input name="price" type="text" class="bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500 w-64" placeholder="Single Item Price $ " v-model="price" />
        <label class="font-semibold text-gray-800 text-md mb-2 block ml-20">Total({{ price }})</label>
        </div>
         <div class="mt-6  flex items-center ms-20 lg:ms-0">
              <input name="item name" type="number"  class="w-48 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Weight" v-model="kilo" />
              <select id="weight" class="w-22 mb-6 mt-6 bg-gradient-to-r from-sky-900 to-sky-600  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option selected value="kg">Kg</option>
              <option value="g" >G</option>
              <option value="lb">Lbs</option>
              <option value="oz">Oz</option>
              </select>
              <label class="font-semibold text-gray-800 text-md mb-2 block ml-16">Total({{kilo}}) Kg</label>
        </div>
            <div class="mt-6  flex items-center ms-20 lg:ms-0">
              <label class="font-semibold text-gray-800 text-md mb-2 block mt-7">Select Category :</label>
              <select id="categories" class="w-44 ml-24 mt-6 bg-gradient-to-r from-sky-900 to-sky-600  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="Category">
              <option value="food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Watches">Watches</option>
              <option value="Books">Books</option>
              </select>
            </div>
              <div class="mt-6  flex items-center ms-20 lg:ms-0 ">
             <label class="font-semibold text-gray-800 text-md mb-2 block">Item Photo :</label>
             <div class="flex items-center justify-center border-lined border-4  rounded border-sky-800 w-20 ml-11">
             <button  type="button" id="photo-button" class=" flex items-center justify-center mr-3 rounded-full   p-3 h-11 ">
                  <svg class="w-4 h-4 ml-4 text-gray-900 dark:text-gray-900 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                  </svg>
             </button>
               
             </div>
              </div>
             <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>

            <br>
   <button type="submit" @click="emitDone" class="mb-5 w-2/3  m-auto  py-3 px-4 font-semibold text-md rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800">
        DONE
      </button>
 </form>
        </div>
         </div>
     
</template>
<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['done']); 

const ItemName = ref('');
const price = ref('');
const kilo = ref('');
const Category = ref('');
const number = ref(1);
const error = ref('');

const dec = () => { if (number.value > 1) number.value--; };
const inc = () => { number.value++; };

const validateForm = () => {
    error.value = '';
  if (!ItemName.value) {
    error.value = 'Please enter the item name';
    return false;
  }
  else if (!price.value || price.value < 0) {
    error.value = 'Please enter the item price';
    return false;
  }
  else if (!kilo.value || kilo.value < 0) {
    error.value = 'Please enter the item weight ';
    return false;
  }
    else if (!Category.value) {
    error.value = 'Please select the category';
    return false;
  }
  return true;
};
const itemData = ref({}); 

const emitDone = () => {
  if (validateForm()) {
    emit('done', itemData.value={ 
       itemName: ItemName.value, 
      quantity: number.value, 
      Price: price.value,  
      weight: kilo.value,  
      category: Category.value        
    });
  }
};
</script>

<style scoped>

</style>