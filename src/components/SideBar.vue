  <template>
    <aside
      id="sidebar"
      :class="{
        'translate-x-0': isSidebarOpen,
        '-translate-x-full': !isSidebarOpen,
        'sm:translate-x-0': true,
      }"
      class="top-20 w-64 max-h-[100vh] p-5 min-h-full transition-transform border-t border-r border-white bg-blue-500"
    >
      <router-link to="" class="flex items-center">
        <span id="logo2" class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          <img src="https://www.svgrepo.com/show/372594/plane.svg" class="h-8 me-3" />
          HetchHicker
        </span>
      </router-link>
      <br />
      <div class="h-full px-3 pb-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <router-link
              :to="{ name: 'searchPage' }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img src="https://www.svgrepo.com/show/532552/search-alt-2.svg" class="h-8 me-3" />
              Home
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'shipmentPage' }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img src="https://www.svgrepo.com/show/500338/box-unpacked.svg" class="h-8 me-3" />
              Shipments
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'tripsPage' }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img src="https://www.svgrepo.com/show/76100/luggage.svg" class="h-8 me-3" />
              Trips
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { defineProps } from 'vue'

  const props = defineProps({
    isSidebarOpen: Boolean
  })
  </script>

  <style scoped>
  #sidebar {
    height: 100vh; /* Full viewport height */
    z-index: 50; /* Ensure it's above other content */
  }

  .layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    min-height: 100vh;
    height: 100%;
    overflow: hidden; /* Prevents the content from overflowing */
  }

  @media (max-width: 638px) {
    .layout {
      grid-template-columns: 1fr; /* Stack the content when sidebar is hidden */
    }
  }

  #main-content {
    overflow: auto; /* Ensure that content is scrollable if it overflows */
    padding: 1rem; /* Optional padding */
  }
  </style>
