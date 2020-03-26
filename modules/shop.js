/** Get Shop Categories */
export async function getCategories(app) {
  let data = await app.$axios.$get("/api/ecommerce/categories/")
  return data.categories
}

/** Get Shop Products */
export async function getProducts(app) {
  let perPage = app.route.query.per_page || 20
  let page = app.route.query.page || 1

  let data = await app.$axios.$get("/api/ecommerce/products/?per_page=" + perPage + "&page=" + page)
  return data
}

/** Get Shop Products */
export async function getProductsOrdered(app, order, category) {
  let perPage = app.$route.query.per_page || 20
  let page = app.$route.query.page || 1
  if (category != undefined) {
    var url = "/api/ecommerce/categories/" + encodeURI(category) + "/products/?per_page=" + perPage + "&page=" + page + "&order_by=" + order
  } else {
    var url = "/api/ecommerce/products/?per_page=" + perPage + "&page=" + page + "&order_by=" + order
  }

  let data = await app.$axios.$get(url)
  return data
}

/** Get Shop Product by ID */
export async function getProduct(app, id){
  let data = await app.$axios.$get("/api/ecommerce/products/" + id + "/")
  return data
}

/** Get Shop Products by categories */
export async function getProductsByCategory(app, category_name) {
  let perPage = app.route.query.per_page || 20
  let page = app.route.query.page || 1

  let data = await app.$axios.$get(
    "/api/ecommerce/categories/"+ encodeURI(category_name) + "/products/?per_page=" + perPage + "&page=" + page)
  return data
}

/** Get Shop Filter panel content */
// export async function getFilterPanel(app) {
//   let data = await app.$axios.$get("/api/ecommerce/filter_panel/")
// }

/** Get Shop Filter panel content */
export async function getFilterPanelByCategory(app, category_name) {
  let data = await app.$axios.$get(
    "/api/ecommerce/filter_panel/"+ encodeURI(category_name))
  return data
}

function getStoreAndCookiz(app) {
  if (process.server) {
    var store = app.app.store
    var cookiz = app.app.$cookiz
  } else {
    var store = app.$store
    var cookiz = app.$cookiz
  }
  return {"store":store, "cookiz":cookiz}
}

function addTokenToUrl(store, url) {
  var storeToken = store.state.cart.token
  if (storeToken) {
    url = url + "?cart_token=" + storeToken    
  }
  return url
}

export async function getShoppingCart(app) {
  var {store, cookiz} = getStoreAndCookiz(app)
  var url = addTokenToUrl(store, "/api/ecommerce/checkout/cart/")
  let data = await app.$axios.$get(url)
  if (data.cart) {
    store.commit("cart/setToken", data.cart.token)
    cookiz.set("cart_token", data.cart.token)
  }
  return data    
}

export async function addToCartApi(app, variant_id, count) {
  var {store, cookiz} = getStoreAndCookiz(app)
  var url = addTokenToUrl(store, "/api/ecommerce/checkout/cart/")

  var _data = new FormData()
  _data.append('variant_id', variant_id)
  _data.append('count', count)


  let data = await app.$axios.$put(url, _data,
    {"headers": {'Content-Type': 'multipart/form-data'}
  })

  app.$store.commit("cart/setToken", data.cart.token)
  app.$cookiz.set("cart_token", data.cart.token)
  return data
}

export async function addToCartWithFileApi(app, variant_id, count, file) {
  var {store, cookiz} = getStoreAndCookiz(app)
  var url = addTokenToUrl(store, "/api/ecommerce/checkout/cart/")

  var _data = new FormData()
  _data.append('file', file)
  _data.append('variant_id', variant_id)
  _data.append('count', count)

  let data = await app.$axios.$put(url, _data,
    {"headers": {'Content-Type': 'multipart/form-data'}
  })

  app.$store.commit("cart/setToken", data.cart.token)
  app.$cookiz.set("cart_token", data.cart.token)
  return data
}

export async function setProductQuantityCart(app, _data) {
  var {store, cookiz} = getStoreAndCookiz(app)
  var url = addTokenToUrl(store, "/api/ecommerce/checkout/cart/")

  let data = await app.$axios.$patch(url, _data)

  app.$store.commit("cart/setToken", data.cart.token)
  app.$cookiz.set("cart_token", data.cart.token)
  return data
}

export async function deleteFromCart(app, _data) {
  return await setProductQuantityCart(app, _data)
}

export async function clearShoppingCartApi(app) {
  var {store, cookiz} = getStoreAndCookiz(app)
  var url = addTokenToUrl(store, "/api/ecommerce/checkout/cart/")
  let data = await app.$axios.$delete(url)
  app.$cookiz.remove("cart_token")
  return data
}

export async function submitOrderApi(context, addressId, cartToken, redirectURL) {
  let url = "/api/ecommerce/checkout/payment/"
  let data = await context.$axios.$post(url, {
    "cart_token":cartToken, "address_id":addressId, "redirect_url":redirectURL
  })
  return data
}

export async function verificationPaymnetApi(context, authority, status) {
  let url = "/api/ecommerce/checkout/payment/verification/" + authority + "/" + status + "/"
  let data = await context.$axios.$get(url)
  return data
}

export async function getOrdersApi(context) {
  let url = "/api/ecommerce/order/"
  let data = await context.$axios.$get(url)
  return data
}

export async function getOrderApi(context, orderId) {
  let url = "/api/ecommerce/order/" + orderId + "/"
  let data = await context.$axios.$get(url)
  return data
}