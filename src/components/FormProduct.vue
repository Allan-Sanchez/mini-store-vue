<template>
  <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md m-10">
    <h2 class="text-lg text-gray-700 font-semibold capitalize">Account settings</h2>

    <form>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <label class="text-gray-700" for="idProduct">Id Product</label>
          <input
            id="idProduct"
            type="text"
            class="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
          />
        </div>

        <div>
          <label class="text-gray-700" for="productName">Product Name</label>
          <input
            id="productName"
            type="type"
            class="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
          />
        </div>

        <div>
          <label class="text-gray-700" for="priceProduct">Price</label>
          <input
            id="priceProduct"
            type="number"
            class="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
          />
        </div>

        <div>
          <label class="text-gray-700" for="categoryProduct">Category</label>
          <input
            id="categoryProduct"
            type="text"
            class="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
          />
        </div>
      </div>

      <div class="flex justify-between mt-4">
        <div>
          <label
            class="w-64 flex flex-col items-center px-4 py-6 bg-gray-200 text-gray-700 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-200 hover:text-blue-900"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" class="hidden" />
          </label>
        </div>
        <div>
          <button
            class="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >Save</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { db } from "../firebase.js";
export default {
  name: "FormProduct",
  mounted() {
    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  },
};
</script>