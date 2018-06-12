var cookie = require('cookie');

export default function ({store, app}) {
  store.commit('cart/setToken', app.$cookiz.get('cart_token'))
}