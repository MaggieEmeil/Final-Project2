<template>
  <div class=" bg-gray-100">
    <!-- Button to trigger the modal pop-up -->
    <div @submit.prevent="submitTrips">
      <button @click="openModal" class="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg duration-300">
        Add Card Details
      </button>

      <!-- Pop-up Modal with Inputs -->
      <transition name="fade">
        <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition duration-300 ease-in-out">
          <transition name="modal-fade">
            <div v-if="isModalVisible" class="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 ease-in-out scale-95">
              <h2 class="text-2xl font-bold mb-6 text-center text-blue-500 animate-pulse">Add Trip Details</h2>

              <!-- Input Fields for Card Details with Error Display -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">UserName</label>
                <input v-model="newCard.username" type="text" class="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500 transition ease-in-out hover:shadow-md" placeholder="Enter user name" />
                <p v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</p>
              </div>

              <!-- Dropdown for From Country with Error Display -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">From Country</label>
                <select v-model="newCard.From" class="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500 transition ease-in-out hover:shadow-md">
                  <option disabled value="">Select country</option>
                  <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                </select>
                <p v-if="errors.From" class="text-red-500 text-sm mt-1">{{ errors.From }}</p>
              </div>

              <!-- Dropdown for To Country with Error Display -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">To Country</label>
                <select v-model="newCard.To" class="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500 transition ease-in-out hover:shadow-md">
                  <option disabled value="">Select country</option>
                  <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                </select>
                <p v-if="errors.To" class="text-red-500 text-sm mt-1">{{ errors.To }}</p>
              </div>

              <!-- Weight Input with Error Display -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Weight</label>
                <input v-model="newCard.FreeWeight" type="number" class="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500 transition ease-in-out hover:shadow-md" placeholder="Enter weight" />
                <p v-if="errors.FreeWeight" class="text-red-500 text-sm mt-1">{{ errors.FreeWeight }}</p>
              </div>

              <!-- Modal Buttons -->
              <div class="flex justify-between mt-6">
                <button @click="validateForm" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg focus:ring focus:ring-green-300 transition-all ease-in-out transform hover:scale-105">Save</button>
                <button @click="closeModal" class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg focus:ring focus:ring-red-300 transition-all ease-in-out transform hover:scale-105">Cancel</button>
              </div>

              <!-- Close Icon -->
              <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform hover:rotate-180 transition duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// State to control modal visibility
const isModalVisible = ref(false);

// New card data
const newCard = ref({
  username: '',
  From: '',
  To: '',
  FreeWeight: ''
});

// List of countries (you can replace this with your actual data)
const countries = ref([
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
  'Australia', 'India', 'China', 'Brazil', 'Mexico'
]);

// Error messages
const errors = ref({
  username: '',
  From: '',
  To: '',
  FreeWeight: ''
});

// Function to open the modal
const openModal = () => {
  isModalVisible.value = true;
};

// Function to close the modal and reset input fields
const closeModal = () => {
  isModalVisible.value = false;
  resetForm(); // Reset form fields when closing modal
};

// Function to validate form inputs
const validateForm = async () => {
  errors.value = {}; // Clear previous errors

  // Validation rules
  if (!newCard.value.username) {
    errors.value.username = 'Username is required';
  }
  if (!newCard.value.From) {
    errors.value.From = 'From country is required';
  }
  if (!newCard.value.To) {
    errors.value.To = 'To country is required';
  }
  if (!newCard.value.FreeWeight || newCard.value.FreeWeight <= 0) {
    errors.value.FreeWeight = 'Weight must be a positive number';
  }

  // If no errors, submit the form
  if (Object.keys(errors.value).length === 0) {
    await saveCard();
  }
};

// Function to save the new card details and send to the backend
const saveCard = async () => {
  try {
    console.log('Sending new card details:', newCard.value);

    // Send the form data to the backend using axios
    const response = await axios.post('https://your-backend-url.com/api/cards', newCard.value);

    console.log('Response from the backend:', response.data);

    // Close the modal after successful submission
    closeModal();
  } catch (error) {
    console.error('Error sending card details:', error);
  }
};

// Function to reset form fields
const resetForm = () => {
  newCard.value = {
    username: '',
    From: '',
    To: '',
    FreeWeight: ''
  };
  errors.value = {};
};
</script>