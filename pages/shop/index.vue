<template>
  <product-list v-bind:products="products"></product-list>
</template>

<script>
import ProductList from "~/components/shop/ProductList.vue"
import {getProducts, getProductsByCategory} from "~/modules/shop" 

export default {
  components: {
    ProductList
  },
  head() {
    return {title: "فروشگاه"}
  },
  async asyncData(app) {
    var data = await getProducts(app)
    return data
  }
}
</script>