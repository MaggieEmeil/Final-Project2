<template>
  <div class=" max-h-full fixed inset-0 backdrop-blur-lg z-50 shadow-black shadow-md flex items-center justify-center">
    <div class="p-10 rounded-md bg-yellow-100 shadow-lg shadow-black hover:shadow-black sm:w-3/4  lg:w-2/5 md:w-3/4" @submit.prevent='emitDone'>
      <nav class=" border-gray-200 dark:bg-blue-900 mb-11">  
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
          <label class="font-semibold text-gray-800 text-md mb-2 block  ">Item Name</label>
          <input name="item name" type="text"  class=" w-48  bg-white border  border-shadow-black text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter item name" v-model="ItemName" />
          <span v-if="nameerror" class="text-red-500 text-sm">{{ nameerror }}</span>
        </div>
        <div class="mt-6 flex items-center justify-between ">
          <label class="font-semibold  text-gray-800 text-md mb-2 block">Item Quantity</label>
          <div class="bg-blue-200  flex items-center text-center rounded-full ">
            <button @click="dec" type="button"  class="flex items-center justify-center  align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg text-center font-bold ">-</span></button>
            <input type="text" class=" text-center rounded-full bg-blue-200 border-x-0 border-gray-300 h-8 font-bold  text-gray-900 w-32 text-md "  required  v-model="number" >
            <button @click="inc" type="button"  class="flex items-center justify-center align-center rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600  p-3 h-8 "><span class="text-md font-lg  font-bold  text-center flex justify-center pb-1">+</span></button>
          </div>
          <span v-if="numbererror" class="text-red-500 text-sm">{{ numbererror }}</span>
        </div>
        <div class="mt-6  flex items-center justify-between  ">
          <label class="font-semibold text-gray-800 text-md mb-2 block ">Total({{ price }}) $</label>
          <input name="price" type="number" class="bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500 w-48" placeholder="Single Item Price $ " v-model="price" />
          <span v-if="priceerror" class="text-red-500 text-sm">{{ priceerror }}</span>
        </div>
        <div class="mt-6  flex items-center justify-between">
          <label class="font-semibold text-gray-800 text-md mb-2 block ">Total({{kilo}}) Kg</label>
          <input name="item name" type="number"  class="w-48 items-center bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Single Item Weight" v-model="kilo" />
          <span v-if="kiloerror" class="text-red-500 text-sm">{{ kiloerror }}</span> 
        </div>
        <div class=" flex items-center  justify-between mt-7">
          <label class="font-semibold text-gray-800 text-md  block">Item Photo :</label> 
          <div class="flex items-center justify-center border-lined border-4  rounded border-sky-800 w-48 ">
            <input
              type="file"
              @change="onFileChange"
              className="
              text-sm text-white file:rounded-md file:w-48  file:h-10
              file:py-1 file:px-3 file:border-none
              file:font-medium
              file:bg-gradient-to-tr from-sky-700 to-sky-400 file:text-white
              hover:file:cursor-pointer 
              hover:file:text-black "
            /> 
          </div>
        </div>
        <br>
        <div class="flex items-center justify-center gap-5 mt-5">
          <button type="button" @click="cancel" class="w-1/4    py-3 px-4 font-semibold text-md rounded-full text-white bg-gradient-to-r from-sky-900 to-sky-600 hover:bg-gray-800">
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
import { ref} from 'vue';
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const emit = defineEmits(['done']); 
const ItemName = ref('');
const price = ref('');
const kilo = ref('');
const number = ref(1);
const nameerror = ref('');
const priceerror = ref('');
const kiloerror = ref('');
const numbererror = ref('');
const dec = () => { if (number.value> 1) number.value--; };
const inc = () => { number.value ++; };
const cancel=()=>{
  router.push({ name: 'shipmentPage' });
}
const validateForm = () => {
  if (!ItemName.value) {
      nameerror.value = 'Please enter the item name';
    return false;
  }
  else if (!price.value || price.value <= 0 ) {
    priceerror.value = 'Please enter the item price,it should be a positive number';
    return false;
  }
  else if (!kilo.value || kilo.value <= 0) {
    kiloerror.value = 'Please enter the item weight,it should be a positive number ';
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
      price: price.value, 
      weight: kilo.value,       
    });
  }
};
</script>

<style scoped>

</style>