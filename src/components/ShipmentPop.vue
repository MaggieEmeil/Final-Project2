<template>
<div class=" max-h-full fixed inset-0 backdrop-blur-3xl shadow-black shadow-md flex items-center justify-center z-50">
      <div class="p-10 rounded-md bg-yellow-100 shadow-lg shadow-black hover:shadow-gray-200 sm:w-3/4  lg:w-2/5 md:w-3/4" @submit.prevent='input'>
        <nav class=" border-gray-200 dark:bg-gray-900 mb-11">  
         <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">ADD SHOPPING ITEM</span>
       <button type="submit" @click="cancel" class="rounded-full mr-3">
         <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="8" x2="16" y2="16" /> 
        <line x1="16" y1="8" x2="8" y2="16" /> 
         </svg>
         </button>
        </div>              
        </nav>  
 <form class=" font-serif text-lg">
  
        <div class=" mt-6 flex items-center justify-between ">
              <label class="font-semibold text-gray-800 text-md mb-2 block  ">Item Details</label>
              <input name="item name" type="text"  class=" w-48  bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter item name" v-model="ItemName" />
        </div>
         <div class="mt-6 flex items-center justify-between ">
             <label class="font-semibold  text-gray-800 text-md mb-2 block">Item Quantity</label>
             <div class="bg-blue-200  flex items-center text-center rounded-full ">
             <button @click="dec" type="button"  class="flex items-center justify-center  align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg text-center font-bold ">-</span></button>
             <input type="text" class=" text-center rounded-full bg-blue-200 border-x-0 border-gray-300 h-8 font-medium  text-gray-900 w-32 text-md "  required  v-model="number" >
             <button @click="inc" type="button"  class="flex items-center justify-center align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg  font-bold  text-center flex justify-center pb-1">+</span></button>
             </div>
        </div>
        <div class="mt-6  flex items-center justify-between  ">
        <label class="font-semibold text-gray-800 text-md mb-2 block ">Total({{ price }}) $</label>
        <input name="price" type="text" class="bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500 w-48" placeholder="Single Item Price $ " v-model="price" />
        </div>
         <div class="mt-6  flex items-center justify-between">
                        <label class="font-semibold text-gray-800 text-md mb-2 block ">Total({{kilo}}) Kg</label>
              <input name="item name" type="number"  class="w-48 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Weight" v-model="kilo" />
                   </div>
           
              <div class=" flex items-center  justify-center mt-7">
             <label class="font-semibold text-gray-800 text-md  block">Item Photo :</label> 
            <div class="flex items-center justify-center border-lined border-4  rounded border-sky-800 w-20 ">
            <input
                        type="file"
                        @change="onFileChange"
                        className="
                        text-sm text-white file:rounded-md file:w-44  file:h-10
                        file:py-1 file:px-3 file:border-none
                        file:font-medium
                        file:bg-gradient-to-tr from-sky-700 to-sky-400 file:text-white
                        hover:file:cursor-pointer 
                        hover:file:text-black "
                    />
               
             </div>
              </div>
              <!-- <div class="mt-8 flex flex-wrap justify-around">
                    <label for="ItemImg" class="block text-gray-700">Item Image</label>
                    <input
                        type="file"
                        @change="onFileChange"
                        className="
                        text-sm text-white file:rounded-md file:w-28 file:h-10
                        file:mr-5 file:py-1 file:px-3 file:border-none
                        file:font-medium
                        file:bg-gradient-to-tr from-orange-700 to-orange-400 file:text-white
                        hover:file:cursor-pointer 
                        hover:file:text-black ml-10"
                    />
                    <img v-if="meals.img" :src="meals.img" class="mt-2 h-24 w-24 object-cover rounded-full"/>
                </div> -->
             <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>

            <br>
             <div class="flex items-center justify-around mt-5">
             <button type="submit" @click="cancel" class="w-1/4    py-3 px-4 font-semibold text-md rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800">
             CANCEL
             </button>
             <button type="submit" @click="emitDone" class=" w-1/4    py-3 px-4 font-semibold text-md rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800">
             DONE
             </button>
            </div>
 </form>
        </div>
         </div>
     
</template>
<script setup>
import { ref ,watch} from 'vue';
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['done']); 
const ItemName = ref('');
const price = ref('');
const kilo = ref('');
const number = ref(1);
const error = ref('');

const dec = () => { if (number.value > 1) number.value--; };
const inc = () => { number.value++; };
const cancel=()=>{
  router.push({ name: 'ShipmentsPage' });
}
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
    });
  }
};
</script>

<style scoped>

</style>