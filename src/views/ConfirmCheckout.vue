<template>
  <div class="grid grid-cols-3">
    <div class="col-start-1 col-end-3">
        <h2 class="text-center mt-10 text-3xl text-gray-700 font-semibold">Product List </h2>
        <div class=" grid grid-cols-3 gap-4 mx-20 mt-10">
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
        </div>
    </div>
    <div class="p-10">
      <div>
        <h3 class="mb-3 text-xl text-gray-700">Guest Checkout</h3>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-gray-600 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            @
            <!-- <i class="fas fa-lock"></i> -->
          </span>
          <input
            type="email"
            placeholder="Type your email"
            class="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />
        </div>
      </div>
      <div>
        <h3 class="mb-3 text-xl text-gray-700">Shipping Information</h3>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-gray-600 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <svg
              class="text-gray-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
              />
            </svg>
            <!-- <i class="fas fa-lock"></i> -->
          </span>
          <input
            type="text"
            placeholder="Type your full name"
            class="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />
        </div>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-gray-600 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <svg
              class="text-gray-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 9A7 7 0 1 0 5 9c0 1.387.41 2.677 1.105 3.765h-.008C8.457 16.46 12 22 12 22l5.903-9.235h-.007A6.98 6.98 0 0 0 19 9zm-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"
              />
            </svg>
            <!-- <i class="fas fa-lock"></i> -->
          </span>
          <input
            type="text"
            placeholder="Type your address"
            class="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />
        </div>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-gray-600 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <svg
              class="fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"
              />
            </svg>
            <!-- <i class="fas fa-lock"></i> -->
          </span>
          <input
            type="text"
            placeholder="Type your number phone"
            class="px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />
        </div>
      </div>

      <div class="flex justify-between px-1 mt-10">
        <h3 class="mb-3 text-xl text-gray-700">Total price</h3>
        <h3 class="text-xl text-gray-700">$600.00</h3>
      </div>
      <div class="flex justify-end mt-10">
        <button
          class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style="transition: all .15s ease"
        >Confirm payment</button>
      </div>
    </div>
  </div>
</template>


<script>
import CardProduct from "../components/CardProduct";
export default {
  name: "ConfirmCheckout",
  components:{
      CardProduct,
  }
};
</script>