<template>
<div>
    <nav class="w-full dark:bg-sky-900 h-20">  
    <div class=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="m-auto self-center text-2xl font-semibold text-center whitespace-nowrap dark:text-white">MY SHIPMENTS</span>
      <span class="text-white font-bold font-md">Add Shipment</span>
      <button @click="addMore" class="rounded-full mr-3">
        <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </button>
    </div>
  </nav> 
  <ShipmentPop   v-if="show" @done="Done" @cancel="cancel"></ShipmentPop>
  <!-- <div  @click="display" class="bg-white p-5 rounded-md shadow-lg hover:shadow-sky-950/40 min-[320px]:w-80 min-[960px]:w-96 lg:w-[30%] h-[30%] flex flex-col items-center">
  <Card></Card>
  </div> -->
    <div class="grid grid-cols-2">
    <!-- Loop through cardData and render a Card component for each object -->
    <!-- <RouterLink
      :to="card.route"
       v-for="(card, index) in cardData"
      :key="index"
      :productName="card.productName"
      :fromCountry="card.fromCountry"
      :toCountry="card.toCountry"
      :deliveryDate="card.deliveryDate"
      :weight="card.weight"
      :userName="card.userName"
      :rewardAmount="card.rewardAmount"
      @click="cardInfo"
    >
    <Card
    >
    </Card>
    </RouterLink> -->

    <div  v-for="(card, index) in cardData"
    :key="index"
    class="bg-white w-[85%] rounded-lg shadow-md p-4 mb-4 mx-auto">
    <!-- Top section (Product + Country info) -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center">
        <div class="bg-gray-300 rounded-full p-3 mr-2 icon">📦</div>
        <div>
          <!-- Add card ID and product weight -->
          <p class="text-yellow-500 font-bold text-lg">{{ card.FreeWeight }} KG</p>
        </div>
      </div>
      <div>
        <p class="font-semibold">{{ card.ItemName }}</p>
        <p class="text-gray-500 text-sm">{{ card.From }} ✈️ {{ card.To }}</p>
        <p class="text-gray-400 text-xs">Before {{ card.Date }}</p>
      </div>
    </div>

    <!-- User Information Section -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <div class="bg-gray-200 rounded-full p-2 mr-2 icon">👤</div>
        <p class="font-medium">{{ card.username }}</p>
      </div>
      <button
        class="send-request-button bg-blue-500 text-white px-4 py-2 rounded-full font-semibold transition transform hover:scale-105"
        @click="openPopup"
      >
        SEND REQUEST
      </button>
    </div>

    <!-- Reward Section -->
    <div class="text-white bg-blue-500 text-center p-2 rounded-lg reward">
      <p>Reward {{ card.rewardAmount }} USD</p>
    </div>

    <!-- Dynamic Modal Popup -->
    <div v-if="isPopupVisible" class="fixed inset-0 flex items-center justify-center backdrop-blur">
      <div class="popup bg-white p-6 rounded-lg shadow-lg scale-up">
        <h2 class="text-lg font-bold mb-4">Request Confirmation</h2>
        <p>Do you want to send a request to {{ card.username }} for this product?</p>
        <div class="mt-4 flex justify-end space-x-4">
          <button @click="closePopup" class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition">Cancel</button>
          <button @click="confirmRequest" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Confirm</button>
        </div>
      </div>
    </div>
  </div>

  </div>
  <!-- <div v-show="display" class="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
    <h2>Hello</h2>
  </div> -->
  <!-- <Card v-if='displayInfo' :shipmentInfo='shipmentInfo'></Card> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; 
import { useRouter } from 'vue-router';
import axios from 'axios';
import ShipmentPop from "../components/ShipmentPop.vue";


const show = ref(false);
const display = ref(false);
const router = useRouter();
const cardData = ref([]);
// const cardData = ref([
//  { productName: 'Item 1', fromCountry: 'City A', toCountry:'City B', deliveryDate: '5', userName: 'asd', weight: 4, rewardAmount: 5, route: '/home/shipments-page/1'},
//  { productName: 'Item 2', fromCountry: 'City C', toCountry:'City D', deliveryDate: '6', userName: 'qwe', weight: 5, rewardAmount: 7, route: '/home/shipments-page/2'},
// ]);

const addMore = () => {
  show.value = true;
};

const Done = (newCard) => {
  // axios
  show.value = false;
  cardData.value.push(newCard);
  console.log(cardData)
}

const cancel = () => {
  show.value = false; 
};
const cardInfo = ()=>{
  display.value = true;
}
// Fetch the card data when the component is mounted
// onMounted(() => {
//   axios
//     .get('/api/card-info') // Adjust this URL for your backend
//     .then((response) => {
//       cardData.value = response.data; // Assign data to the reactive reference
//     })
//     .catch((error) => {
//       console.error('Error fetching card data:', error); // Handle any errors
//     });
// });

</script>