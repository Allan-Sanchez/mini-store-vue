<template>
  <div style="height:300px" class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div
      class="h-56 w-full overflow-hidden"
    >
        <img class="" src="../assets/img/1.jpg" alt="">
    </div>
    <div class="-mt-5 flex justify-end">
        <button
        class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase">Classic watch</h3>
      <span class="text-gray-500 mt-2">$12</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"CardProduct"
}
</script>