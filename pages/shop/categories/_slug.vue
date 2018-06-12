<template>
  <product-list v-bind:products="products" v-bind:categoryName="this.$route.params.slug"></product-list>
</template>

<script>
import ProductList from "~/components/shop/ProductList.vue"
import {getProducts, getProductsByCategory} from "~/modules/shop"

export default {
  components: {
    ProductList
  },
  head() {
    return {title: "shop - category " + this.$route.params.slug}
  },
  async asyncData(app) {
    var data = await getProductsByCategory(app, app.params.slug)
    return data
  }
}
</script>