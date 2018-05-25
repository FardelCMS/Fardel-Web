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
export async function getFilterPanel(app) {
  let data = await app.$axios.$get("/api/ecommerce/filter_panel/")
}

/** Get Shop Filter panel content */
export async function getFilterPanelByCategory(app, category_name) {
  let data = await app.$axios.$get(
    "/api/ecommerce/filter_panel/"+ encodeURI(category_name))
  return data
}