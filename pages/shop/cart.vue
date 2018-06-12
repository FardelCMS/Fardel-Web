<template>
<div class="container">
  <section class="section">
    <h1 class="title">Shopping Cart</h1>
    <div class="box">
      <div class="columns">
        <div class="column"><a class="button title is-5 is-primary" href="/shop/continue/">Continue</a></div>
        <div class="column"><a class="button title is-5 is-danger is-pulled-left" href="/shop/continue/">Clear</a></div>
      </div>
      <table v-if="cart" class="table cart-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>File</th>
            <th>Count</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>          
          <tr class="cart-row" v-for="line in cart.lines">
            <th>{{line.variant.product.name}}</th>
            <th><img v-bind:src="line.variant.product.image"></th>
            <th><a v-bind:href="line.data.file">File Link</a></th>
            <th><input v-model.lazy="line.quantity" @change="increaseCount" type="number" min="1"></th>
            <th>{{line.variant.price}}</th>
            <th><button class="button is-danger" v-on:click="deleteFromCart">Delete</button></th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="6">Total Price: 234000 $</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</div>
</template>

<script>
import {getShoppingCart} from "~/modules/shop"

export default {
  head() {
    return {title: "Shopping Cart - Shop"}
  },
  async asyncData(context) {
    let data = await getShoppingCart(context)
    context.store.commit('cart/setCart', data.cart)
    return data
  },
  methods: {
    increaseCount: function(event) {
      this.$store.commit("cart/setCart", Object.create(this.cart))
    },
    deleteFromCart: function(event) {
      
    }
  }
}
</script>