<template>
  <div>
    <FormProduct></FormProduct>
    <TableProduct></TableProduct>
  </div>
</template>

<script>
import FormProduct from '@/components/FormProduct.vue';
import TableProduct from '@/components/TableForm.vue'
export default {
    components:{
        FormProduct,
        TableProduct
    }
}
</script>