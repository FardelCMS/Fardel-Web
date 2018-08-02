<template>
<b-collapse :open="showBasket">
  <a slot="trigger" class="navbar-item" v-on:click="loadShoppingCart">
    <b-icon class="shopping-cart-icon" icon="cart"></b-icon>
  </a>
  <div class="shopping-cart">
    <div class="content">
      <h3>Shopping Cart</h3>
      <hr>
      <b-loading :is-full-page="false" :active.sync="this.$store.state.cart.isLoading"></b-loading>
      <div v-if="this.$store.state.cart.cart">
        <div v-for="line in this.$store.state.cart.cart.lines" :key="line.id" class="columns">
          <div class="column">
            <a v-bind:href="'/shop/product/'+line.variant.product.id+'-'+line.variant.product.name+'/'">{{line.variant.product.name}}</a>
          </div>
          <div class="column">
            <img v-bind:src="line.variant.product.image">
          </div>
          <div class="column">
            Count: {{line.quantity}}
          </div>
          <div class="column">
            Price: {{line.variant.price}} $
          </div>
        </div>
      </div>
      <hr>
      <div class="columns">
        <div class="column">
          <span v-if="this.$store.state.cart.cart">Total Price: {{this.$store.state.cart.cart.total}} $</span>
          <span v-else>Total Price: 0 $</span>
        </div>
      </div>
      <div class="columns">
        <div class="column buttons">
          <a class="button" href="/shop/cart/">Continue</a>
          <a class="button" v-bind:class="{'is-loading': isClearLoading}" v-on:click="clearShoppingCart">Clear</a>
        </div>
      </div>
    </div>
  </div>
</b-collapse>
</template>

<script>
import {clearShoppingCartApi, getShoppingCart} from "~/modules/shop"

export default {
  data() {
    return {
      showBasket: false,
      isClearLoading: false,
      loaded: false
    }
  },
  methods: {
    clearShoppingCart: function(element) {
      this.isClearLoading = true
      this.$store.dispatch("cart/clearCart", 
        {"success": this.clearSuccessfulNotification,
         "error": this.errorNotification,
         "app": this.$root}
      ).then(resp => {
        this.isClearLoading = false
        this.cart.lines = []
      }).catch(resp => {
        this.errorNotification({"message": resp.data.message})
      })
    },
    loadShoppingCart: function(element) {
      if (!this.loaded) {
        this.$store.dispatch("cart/reloadCart", this.$root)
        this.loaded = true
      }
    }
  }
}
</script>