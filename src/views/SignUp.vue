<template>
  <div class="bg-gradient-to-r from-sky-200 to-sky-900 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen p-4" >
  
    <div class="lg:mx-auto md:mx-auto  shadow-lg rounded-lg overflow-hidden max-w-3xl w-full md:w-3/4  lg:w-1/2 mx-auto">
      <div class="grid   md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-50 overflow-hidden">
        <!-- Left side  -->
        <div class="h-full  md:flex flex-col justify-center space-y-8 bg-gradient-to-r from-blue-800 to-blue-400 text-white px-6 py-8">
          <div>
            <h4 class="mb-[30px] text-lg font-semibold">Create Your Account</h4>
            <p class="mb-[30px] text-sm mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
          </div>
          <div>
            <h4 class="mb-[30px] text-lg font-semibold">Simple & Secure Registration</h4>
            <p class="mb-[30px] text-sm mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
          </div>
        </div>
        
        <!-- Form -->
        <form class="md:col-span-2 p-6 space-y-6" @submit.prevent="input">
          <div class="mb-6">
            <h3 class="text-gray-800 text-2xl font-bold">Create an account</h3>
          </div>

          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">First Name</label>
              <input name="first_name" type="text"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Enter your first name" v-model="firstName" />
                        <span v-if="firsterror" class="text-red-500 text-sm">{{ firsterror }}</span>

            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input name="last_name" type="text"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Enter your last name" v-model="lastName" />
                       <span v-if="lasterror" class="text-red-500 text-sm">{{ lasterror }}</span>

            </div>
             <div>
              <label class="text-gray-800 text-sm mb-2 block">User Name</label>
              <input name="User_name" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Enter your username" v-model="UserName" />
                       <span v-if="usererror" class="text-red-500 text-sm">{{ usererror }}</span>

            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Enter your email" v-model="email" />
                        <span v-if="emailerror" class="text-red-500 text-sm">{{ emailerror }}</span>

            </div>
              <div>
              <label class="text-gray-800 text-sm mb-2 block">Phone Number</label>
              <input name="number" type="text"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Enter your Phone Number" v-model.trim="Phone" />
                       <span v-if="phoneerror" class="text-red-500 text-sm">{{ phoneerror}}</span>
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Enter your password" v-model="password" />
                        <span v-if="pwerror" class="text-red-500 text-sm">{{ pwerror}}</span>
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input name="confirm_password" type="password"  class="w-full bg-white border border-gray-300 text-gray-800 text-sm px-4 py-2.5 rounded-md focus:outline-blue-500" placeholder="Confirm your password" v-model="confirmPassword" />
                        <span v-if="confirmerror" class="text-red-500 text-sm">{{ confirmerror }}</span>
            </div>
          </div>
          <div class="mt-12">
            <button type="submit" class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-600 focus:outline-none">
              Create an Account
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <RouterLink to="/" class="text-blue-600 font-semibold hover:underline">Login here</RouterLink></p>
        </form>
      </div>
    </div> 
  </div>
</template>

<script setup>

import { ref,watch} from 'vue';
import {useRouter} from 'vue-router';
const firstName = ref('');
const lastName = ref('');
const UserName = ref('');
const Phone= ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router=useRouter();
const firsterror= ref('');
const lasterror= ref('');
const usererror= ref('');
const phoneerror= ref('');
const emailerror= ref('');
const pwerror= ref('');
const confirmerror= ref('');
const validateForm = () => {
  
const validatePasswords = () => {
  if (password.value.length < 8) {
    pwerror.value = 'Password must be at least 8 characters long.';
  } else {
    pwerror.value = '';
  }
  
  if (password.value !== confirmPassword.value) {
    confirmerror.value = 'Passwords do not match.';
  } else {
    confirmerror.value = '';
  }
};

watch(password, validatePasswords);
watch(confirmPassword, validatePasswords);
if(!firstName.value || /^\d/.test(firstName.value)){
  firsterror.value='Please enter your First Name & should not start with a number';
 
   return false;
    
}
else if(!lastName.value || /^\d/.test(lastName.value)){
  lasterror.value='Please enter your last Name & should not start with a number';
   return false;
}
else if(!UserName.value){
  usererror.value='Please enter your username';
   return false;
}
else if(!email.value || !/\S+@\S+\.\S+/.test(email.value)){
  emailerror.value='Please enter your email must xxxx@gmail.com';
   return false;
}
else if(!Phone.value || !/^01/.test(Phone.value) || Phone.value.length !== 11 ){
  phoneerror.value='Please enter your phone & should begin with 01 with total 11 number';
   return false;
}

else{
 firsterror.value='';
  lasterror.value='';
  usererror.value='';
  emailerror.value='';
 phoneerror.value='';
  pwerror.value='';
  confirmerror.value='';
}

return true;
};
const input=() =>{
  if(validateForm()){
    router.push({ name: 'SearchPage' });

  }
}
</script>

<style scoped>

</style>
