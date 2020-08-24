<template>
<div>
  <CardDetail></CardDetail>
  <div class="home w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-auto pt-10">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <CardProduct></CardProduct>
    <CardProduct></CardProduct>
    <CardProduct></CardProduct>
    <CardProduct></CardProduct>
    <CardProduct></CardProduct>
    
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CardProduct from "@/components/CardProduct.vue";
import CardDetail from "@/components/CardDetail.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    CardProduct,
    CardDetail
  },
};
</script>
