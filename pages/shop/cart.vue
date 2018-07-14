<template>
<div class="container">
  <section class="section">
    <h1 class="title">Shopping Cart</h1>
    <div class="box">
      <div class="columns">
        <div class="column"><a class="button title is-5 is-primary" href="/shop/continue/">Continue</a></div>
        <div class="column"><a class="button title is-5 is-danger is-pulled-left" v-on:click="clearCart">Clear</a></div>
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
          <tr class="cart-row" v-for="line in cart.lines" v-bind:key="line.id">
            <th>{{line.variant.product.name}} ( {{line.variant.name}} )</th>
            <th><img v-bind:src="line.variant.product.image"></th>
            <th><a v-bind:href="line.data.file">File Link</a></th>
            <th><input v-model.lazy="line.quantity" v-bind:lineIndex="line.id" @change="setCount" type="number" min="1"></th>
            <th>{{line.variant.price}}</th>
            <th><button class="button is-danger" v-bind:lineIndex="line.id" v-on:click="deleteFromCart">Delete</button></th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="6">Total Price: {{cart.total}}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</div>
</template>

<script>
import {getShoppingCart, deleteFromCart, setProductQuantityCart} from "~/modules/shop"

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
    setCount: function(event) {
      var lineId = parseInt(event.target.attributes.lineindex.value)
      var count = parseInt(event.target.value)
      setProductQuantityCart(this.$root, {"line_id": lineId, "count": count}).then(data => {
        this.$store.commit("cart/setCart", Object.create(this.cart))
        this.cart = data.cart
        this.changeSuccessfulNotification({"message":"Number of the order has been changed."})
      }).catch(resp => {
        this.errorNotification({"message": resp.data.message})
      })
    },
    deleteFromCart: function(event) {
      var lineId = parseInt(event.target.attributes.lineindex.value)
      deleteFromCart(this.$root, {"line_id": lineId, "count": 0}).then(data => {
        this.$store.commit('cart/setCart', data.cart)
        this.cart = data.cart
        this.deleteSuccessfulNotification({'message': "Product has been removed from shopping cart."})
      }).catch(resp => {
        this.errorNotification({"message": resp.data.message})
      })
    },
    clearCart: function(event) {
      this.$store.dispatch("cart/clearCart", 
        {"success": this.clearSuccessfulNotification,
         "error": this.errorNotification,
         "app": this.$root}
      ).then(resp => {
        this.cart.lines = []
      }).catch(resp => {
        this.errorNotification({"message": resp.data.message})
      })
    }
  },
  notifications: {
    deleteSuccessfulNotification: {
      type: "success",
      title: "Success !",
    },
    changeSuccessfulNotification: {
      type: "success",
      title: "Success !",
    },
    clearSuccessfulNotification: {
      type: "success",
      title: "Success !",
    },
    errorNotification: {
      type: "error",
      title: "Error !",
    }
  }
}
</script>