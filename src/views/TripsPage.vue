<template>

  
    
 <PopUpTrips class="addbtn"/>
  <div class="TripsCards">
    
    <TripCard
      v-for="card in tripsCards"
      :key="card.id"
      :From="card.title"
      :fromCountry="'N/A'"
      :toCountry="'N/A'"
      :deliveryDate="'N/A'"
      :weight="card.price"
      :userName="card.title"
      :rewardAmount="card.price"
      :cardId="card.id"
      @close="removeCard(card.id)"
       :showSendRequestButton="false" 
    />
  </div>
 

</template>

<script setup>
import PopUpTrips from '../components/PopUpTrips.vue';
import TripCard from '../components/TripCard.vue';
import { ref } from 'vue';
import axios from 'axios';

// Trips data reference
const tripsCards = ref([]);

// Fetch trips data
const fetchTripsData = async () => {
  try {
    const response = await axios.get('', {
      params: {
        // Add any query parameters you need
      }
    });
    // Assign the fetched data to tripsCards
    tripsCards.value = response.data;
  } catch (error) {
    console.error('Error fetching trips:', error);
  }
};

// Call the function to fetch data when the component is mounted
fetchTripsData();

// Function to remove a card from the list
const removeCard = (id) => {
  tripsCards.value = tripsCards.value.filter(card => card.id !== id);
};
</script>

<style>
.fixed{
  display: flex;
  justify-content: center;
}
.TripsCards {
  display: grid;
  justify-content: center;
 grid-template-columns: repeat( auto-fit, minmax(48.5%, 1fr) );
  gap: 20px;
  margin-top: 1%;
  width: 87%;
}
.addbtn{
  display: flex;
    justify-content: center;
    margin-right: 11%;
    cursor: pointer;
}
</style>
