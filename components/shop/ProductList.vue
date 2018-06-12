<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Shop
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
            <div class="select">
              <select>
                <option>Newest</option>
                <option>Cheapest</option>
                <option>Most Expensive</option>
              </select>
            </div>
          </div>
          <div class="columns is-multiline">
            <product v-for="product in products" :key="product.id" v-bind:product="product"></product>
          </div>
        </div>
<!--         <div class="column">
          <p class="title is-5">فیلتر ها</p><hr>

        </div> -->
      </div>
    </div>
  </section>
</div>  
</template>

<script type="text/javascript">
import Product from "~/components/shop/Product.vue"

export default {
  components: {
    Product,
  },
  props: ['categoryName', 'products', 'filters'],
}
</script>