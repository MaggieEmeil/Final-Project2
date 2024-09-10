<template>
  
    <div class="bg-gradient-to-r from-sky-200 to-sky-900  h-full flex flex-wrap shadow-lg rounded-lg  w-full " @submit.prevent="input">
      <Card  @click="display" @close='close'> </Card>   
    </div>
</template> 
<script setup>
import { ref } from 'vue';
 import {useRouter} from 'vue-router';
 import Card from '../components/Card.vue';

const arr=ref(['l']);
const shipmentData = ref({from:'',
      to: '',
      date: '',
      name:'',
      items: ''}); 
const router=useRouter();
const btn=()=>{
      router.push({ name: 'ShipmentsInfo' });}
// const addMore=()=>{
//      router.push({ name: 'ShipmentsInfo' });}
</script>
<style scoped>

</style>

