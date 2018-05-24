<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          فروشگاه
        </h1>
        <h2 class="subtitle">
          دسته بندی : {{categoryName ? categoryName : 'همه'}}
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
          <p class="title is-5">فیلتر ها</p><hr>

        </div>
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