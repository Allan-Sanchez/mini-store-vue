<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="px-4 py-2">
            <h1 class="text-gray-900 font-bold text-3xl uppercase">NIKE AIR</h1>
            <p class="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
        </div>

        <img class="h-48 w-full object-cover mt-2" src="../assets/img/1.jpg" alt="NIKE AIR">

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-gray-200 font-bold text-lg">$129</h1>
            <button class="px-2 py-1 bg-gray-200 text-xs text-gray-900 font-semibold rounded uppercase hover:bg-gray-400 focus:bg-gray-400">Add to cart</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.image-card{
  background-image: url('../assets/img/1.jpg');
  background-position: center;
}
</style>
