/** Get Shop Categories */
export async function getCategories(app) {
  let data = await app.$axios.$get("/api/ecommerce/categories/")
  return data
}

/** Get Shop Products */
export async function getProducts(app) {
  let perPage = app.route.query.per_page || 20
  let page = app.route.query.page || 1

  let data = await app.$axios.$get("/api/ecommerce/products/?per_page=" + perPage + "&page=" + page)
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