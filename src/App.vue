<template>
  <div id="app" class="bg-gray-300 w-full">
    <div id="nav" class="w-full px-20 h-16 bg-white flex justify-between items-center">
      <div>
        <h1 class="text-gray-900 text-lg font-bold">Wold Cake</h1>
      </div>
      <div class="flex">
        <div class="flex item-center p-5">
          <router-link class="text-gray-900 font-semibold" to="/">Product</router-link>
        </div>
        <div class="flex item-center p-5">
          <router-link class="text-gray-900 font-semibold" to="/newproduct">New Product</router-link>
        </div>
        <div class="flex item-center p-5 font-semibold">
          <router-link class="text-gray-900" to="/cart">Cart</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
body{
  @apply bg-gray-300;
}
</style>
