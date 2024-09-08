<template>
  <div class="bg-gradient-to-r from-sky-200 to-sky-700 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4" >
    <div class=" mr-52  bg-gradient-to-r from-yellow-100 to-yellow-50 shadow-lg rounded-lg overflow-hidden   md:w-2/3 lg:w-2/3 xl:w-2/3 min-[641px]:mr-3.5">
      <div class="grid md:grid-cols-3 ">
        <!-- Left side -->
        <div class=" md:block bg-gradient-to-r from-blue-800 to-blue-400 text-white flex flex-col justify-center px-6 py-4">
          <h4 class="text-lg font-semibold">Enter Your Account</h4>
          <p class="mt-3 text-sm">Welcome to our sign-in page! Get started by entering your account.</p>
        </div>
        
        <!-- Form -->
        <form class="md:col-span-2 p-6" @submit.prevent='input'>
          <div class="mb-6">
            <h3 class="text-gray-800 text-2xl font-bold">Enter your account</h3>
          </div>
          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" v-model.trim="result.email" />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" v-model="result.password" />
            </div>
              <span v-if="errors" class="text-red-500 text-sm">{{ errors }}</span>
          </div>
          <div class="mt-12">
            <button type="submit" class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-gray-800 focus:outline-none">
              Login
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6">Don't have an account? <RouterLink to="/sign-up" class="text-blue-600 font-semibold hover:underline ml-1">Sign up here</RouterLink></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
const errors= ref('');
const router = useRouter();
const result=ref({
  email:'',
  password:'',
})
const validateForm = () => {

  if (!result.value.email) {
    errors.value = 'Email is required.';
     return false;
  } 
  else if (!/\S+@\S+\.\S+/.test(result.value.email)) {
    errors.value = 'Email must be xxx@gmail.com';
      return false;
  }

  else if (!result.value.password) {
    errors.value = 'Password is required.';
     return false;
  }
  else if (result.value.password.length < 8) {
    errors.value = 'Password is should be more than 8';
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