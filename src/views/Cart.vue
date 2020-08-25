<template>
  <div
    style="min-height:480px"
    class="rounded-lg grid sm:grid-cols-1 lg:grid-cols-3 sm:w-11/12 md:w-10/12 mx-auto mt-10 relative"
  >
    <div style="" class="overflow-x-auto min-w-full lg:col-start-1 lg:col-end-3 p-10 bg-gray-100 mt-10">
      <div  class="grid grid-cols-2 text-center px-10">
        <div>
          <h3 class="text-lg text-gray-700 font-semibold capitalize">Product Detail</h3>
        </div>
        <div class="grid grid-cols-3">
          <h3 class="text-lg text-gray-700 font-semibold capitalize">Quatity</h3>
          <h3 class="text-lg text-gray-700 font-semibold capitalize">Price</h3>
          <h3 class="text-lg text-gray-700 font-semibold capitalize">Total</h3>
        </div>
      </div>

      <div class="grid grid-cols-2">
        <div class="p-3 flex items-center">
          <div class="w-16 h-16 rounded-full">
            <img class="rounded-full h-full" src="../assets/img/2.jpg" alt />
          </div>
          <div class="pl-5">
            <h3 class="text-gray-800">Lorem, ipsum dolor.</h3>
          </div>
        </div>
        <div class="grid grid-cols-3 my-auto">
          <div class="flex items-center">
            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span class="text-gray-700 text-lg mx-2">3</span>
            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          <div class="text-gray-800">200.00</div>

          <div class>
            <span class="bg-blue-200 p-2 py-3 rounded-lg text-blue-900 font-semibold">$ 600.00</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="p-3 flex items-center">
          <div class="w-16 h-16 rounded-full">
            <img class="rounded-full h-full" src="../assets/img/3.jpg" alt />
          </div>
          <div class="pl-5">
            <h3 class="text-gray-800">Lorem, ipsum dolor.</h3>
          </div>
        </div>
        <div class="grid grid-cols-3 my-auto">
          <div class="flex items-center">
            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span class="text-gray-700 text-lg mx-2">3</span>
            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          <div class="text-gray-800">200.00</div>

          <div class>
            <span class="bg-blue-200 p-2 py-3 rounded-lg text-blue-900 font-semibold">$ 600.00</span>
          </div>
        </div>
      </div>
    </div>
    <div  
    style="min-height:500px"
    class="bg-gray-600 lg:fixed lg:right-0 lg:mr-24">
      <h2 class="text-gray-100 text-center font-bold text-2xl pt-5">Order Summary</h2>
      <div class="flex px-10 justify-between text-gray-200 mt-10 font-semibold">
        <div>Item 3</div>
        <div>$ 1200.00</div>
      </div>
      <div class="mb-3 pt-0 mx-10 mt-10">
        <div class="text-gray-200 text-xl capitalize font-bold">Promo code</div>
        <input
          type="text"
          placeholder="Type your code"
          class="px-3 py-3 placeholder-gray-700 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full mt-2"
        />
          <button
            class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2"
            type="button"
            style="transition: all .15s ease"
          >Apply</button>
      </div>
      <div class="mx-10 mt-5">
        <div class="text-gray-200 flex justify-between text-2xl items-center">
          <span>Total Cost</span>
          <span class="rounded-lg font-bold text-red-300">$ 600.00</span>
        </div>

          <button
            class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-lg px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-5 w-full mx-auto "
            type="button"
            style="transition: all .15s ease"
          >Checkout</button>
      </div>
    </div>
  </div>
</template>
