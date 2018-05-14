// var auth = require('./auth')

/** Get Posts by app context */
export async function getPosts(app) { 
  let perPage = app.route.query.per_page || 10
  let page = app.route.query.per_page || 1

  let data = await app.$axios.$get("/api/blog/posts/?per_page=" + perPage + "&page=" + page)
  return {
    posts: data.posts,
    currentPage: Number(page),
    currentPerPage: Number(perPage),
    pages: data.pages
  }
}

export async function getPostsByCategories(app, category_name) {
  let perPage = app.route.query.per_page || 10
  let page = app.route.query.per_page || 1

  let data = await app.$axios.$get(
    "/api/blog/categories/"+ encodeURI(category_name) + "/posts/?per_page=" + perPage + "&page=" + page)
  return {
    posts: data.category.posts,
    currentPage: Number(page),
    currentPerPage: Number(perPage),
    pages: data.category.pages
  }
}

export async function getFeaturedPosts(app, category_name){
  var url = "/api/blog/featured/posts/"
  if (typeof category_name !== "undefined") {
    url += category_name + "/"
  }
  let data = await app.$axios.$get(encodeURI(url))
  return {
    featuredPosts: data.posts
  }
}

/** Get posts */
export async function getPost(post_id) {
  let response = await axios.get("/api/blog/posts/" + post_id + "/")
  return {
    post: response.post
  }
}

/** Get Categories of blog */
export function getCategories(app) {
  var categories = null;
  return app.$axios.$get("/api/blog/categories/"
  ).then(function(response, categories) {
      return response.categories
    }
  )
}

export async function postComment(post_id, data) {
  if (auth.isAuthenticated) {
    let response = await auth.post(
      "/api/blog/posts/" + post_id + "/comments/",
      {
        "content": data.content,
        "parent_comment_id": data.parent_comment_id
      }
    )
  } else {
    let response = await axios.post(
      "/api/blog/posts/" + post_id + "/comments/",
      {
        "author_name": data.author_name,
        "author_email": data.author_email,
        "content": data.content,
        "parent_comment_id": data.parent_comment_id
      }
    )
  }
  return response
}