<!--<template>-->
  <!-- <header>
    <nav
      class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between"> -->
          <!-- Toggle Button for Mobile -->
          <!-- <button
            @click="toggleSidebar"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 bg-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button> -->
          <!-- Logo -->
          <!-- <router-link id="logo" to="" class="flex items-center">
            <img
              src="https://www.svgrepo.com/show/372594/plane.svg"
              class="h-8 me-3"
            />
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >HetchHicker</span
            >
          </router-link>
        </div>
      </div>
    </nav>
  </header>-->
<!--</template> -->
<template>
  <nav class="fixed top-0 w-full dark:bg-sky-900 h-20">  
    <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">MY SHIPMENTS</span>
      <span class="text-white font-bold font-md">Add Shipment</span>
       <button @click="addMore" class="rounded-full mr-3">
      <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
      </button>
    </div>
  </nav> 
</template>
<script setup>
  import { ref } from 'vue';
  import {useRouter} from 'vue-router';
  const router=useRouter();
  const addMore=()=>{
     router.push({ name: 'ShipmentsInfo' });}
</script>
