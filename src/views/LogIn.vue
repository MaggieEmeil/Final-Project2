<template>
  <div class="bg-gradient-to-r from-sky-200 to-sky-700 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4" >
    <div class="   bg-gradient-to-r from-yellow-100 to-yellow-50 shadow-lg rounded-lg overflow-hidden w-full  md:w-2/3 lg:w-2/3 xl:w-2/3 min-[641px]:mr-3.5">
      <div class="grid md:grid-cols-3  ">
        <!-- Left side -->
        <div class=" md:block bg-gradient-to-r from-blue-800 to-blue-400 text-white  flex flex-col  justify-center px-11 py-11 h-full">
          <h2 class="text-lg font-semibold">Enter Your Account</h2>
          <p class="mt-3 text-lg">Welcome to our sign-in page! Get started by entering your account.</p>
        </div>
        
        <!-- Form -->
        <form class="md:col-span-2 p-6" @submit.prevent='input'>
          <div class="mb-6"> 
            <h3 class="text-gray-800 text-2xl font-bold">Enter your account</h3>
          </div>
          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-md mb-2 font-semibold block">Email Id</label>
              <input name="email" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-md px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" v-model.trim="result.email" />
                        <span v-if="emailerror" class="text-red-500 text-md">{{ emailerror }}</span>

            </div>
            <div>
              <label class="text-gray-800 text-md font-semibold mb-2 block">Password</label>
              <input name="password" type="password"  class="w-full bg-white border border-gray-300 text-gray-800 text-md px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" v-model="result.password" />
                        <span v-if="pwerror" class="text-red-500 text-md">{{ pwerror}}</span>
            </div>
          </div>
          <div class="mt-12">
            <button type="submit" class="w-full py-3 px-4 font-semibold tracking-wider text-md rounded-md text-white bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-gray-800 focus:outline-none">
              Login
            </button>
          </div>
          <p class="text-gray-800 text-md mt-6">Don't have an account? <RouterLink to="/sign-up" class="text-blue-600 font-semibold hover:underline ml-1">Sign up here</RouterLink></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref ,watch} from 'vue';
import {useRouter} from 'vue-router';
const emailerror= ref('');
const pwerror= ref('');

const router = useRouter();
const result=ref({
  email:'',
  password:'',
});
watch(()=>result.value.email ,(newemail) =>{ if(!newemail ||  !/\S+@\S+\.\S+/.test(newemail) ){
  emailerror.value='Please enter your email must xxxx@gmail.com';   
}
else {
   emailerror.value = '';
 }
});
watch(()=>result.value.password,(newPass) =>{ if ( !newPass || newPass.length < 8){  
    pwerror.value = 'Password must be at least 8 characters long.';
}
else {
    pwerror.value = '';
 } })

const validateForm = () => {
if (emailerror.value){
  return false;
}
 else if (pwerror.value ){
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
