import {getShoppingCart, clearShoppingCartApi} from "~/modules/shop"

export const state = () => ({
  cart: null,
  isLoading: true,
  token: null,
})

export const mutations = {  
  setCart(state, cart) {
    state.cart = cart
    state.isLoading = false
  },
  setToken(state, token) {
    state.token = token
  },
  runLoading(state) {
    state.isLoading = true
  }
}

export const actions = {
  reloadCart(context, app) {
    this.commit("cart/runLoading")
    let cart = getShoppingCart(app).then(data => {
      this.commit("cart/setCart", data.cart)
    })
  },
  clearCart(context, app) {
    this.commit("cart/runLoading")
    clearShoppingCartApi(app).then(data => {
      this.commit('cart/setCart', null)
      this.commit("notif/addNotif", {"type":"success", "content":"Shopping Cart cleared."})
    })
  }
}