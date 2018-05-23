<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          فروشگاه
        </h1>
        <h2 class="subtitle">
          فروشگاه کتگوری
        </h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          <h5 class="title is-5">مرتب سازی بر اساس</h5>
          <div class="field">
            <div class="select">
              <select>
                <option>جدید ترین</option>
                <option>ارزان ترین</option>
                <option>گران ترین</option>
              </select>
            </div>
          </div>
          <div class="columns is-multiline is-mobile">
            <product v-for="product in products" v-bind:product="product"></product>
          </div>
        </div>
        <div class="column">
          <h5 class="title is-5">فیلتر ها</h5>
          
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Product from "~/components/shop/Product.vue"
import {getProducts} from "~/modules/shop"

export default {
  components: {
    Product,
  },
  async asyncData(app) {
    var data = getProducts(app)
    return data
  }
}
</script>