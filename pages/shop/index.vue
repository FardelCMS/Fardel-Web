<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Shop - {{$route.params.slug}}
        </h1>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h5 class="title is-5">Order by</h5>
          <div class="field">
            <div class="select" v-on:change="setOrder">
              <select>
                <option value="new_first">Newest first</option>
                <option value="cheap_first">Price Descending</option>
                <option value="expensive_first">Price Ascending</option>
              </select>
            </div>
          </div>
          <div class="columns is-multiline">
            <product v-for="product in products" :key="product.id" v-bind:product="product"></product>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Product from "~/components/shop/Product.vue"
import {getProducts, getProductsOrdered} from "~/modules/shop" 

export default {
  components: {
    Product
  },
  head() {
    return {title: "Shop"}
  },
  async asyncData(app) {
    var data = await getProducts(app)
    return data
  },
  methods: {
    setOrder: function(event) {
      var category = this.$route.params.slug
      getProductsOrdered(this, event.target.value, category).then(data => {
        this.products = data.products
      }).catch(error => {
        this.errorNotification({"message":"Unfortunately something went wrong, sorry."})
      })
    }
  },
  notifications: {
    errorNotification: {
      type: "error",
      title: "Error !",
    }
  }
}
</script>